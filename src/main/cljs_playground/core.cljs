(ns cljs-playground.core
  (:require ["@logseq/libs"] ;; [applied-science.js-interop :as j]

 ;; [cljs-http.client :as http]
 ;; [cljs-http.client :as http]
 ;; [datascript.core :as d]
            [reagent.dom :as rdom]
            [promesa.core :as p]
            [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

(defn simple-component []
  [:div
   [:p "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]])

(defn render-simple []
  (rdom/render
   [simple-component]
   (.-body js/document)))

(def pxMult 12)

(defn calendar-bar [lenght]
  (do

    (def width (* lenght pxMult))
    (str "
      <div class=\"bar\" style=\"width:" width "px;\" >"
         " "
         "</div>")))

(defn  calendar-style []
  (str "<style>
  .bar {
      background-color: blue;
  }
</style>
  "))

(defn create-garden-calendar []
  (-> (js/logseq.Editor.getCurrentBlock)
      (.then #(do
                (js/console.log "3")

                (def result %)

                (js/console.log result)
                ; (js/console.log (simple-component))
                (def block-uuid (oget result "uuid"))
                (def content (str "<body><div>" (calendar-bar 2) (calendar-bar 3) (calendar-style) "</div></body>"))
                (-> (js/logseq.Editor.updateBlock block-uuid content))))))

(defn slashcommands []
  (def regSlashCmd js/logseq.Editor.registerSlashCommand)
  (regSlashCmd
   "create-garden-calendar"
   #(do (println "ok4")
        (create-garden-calendar))))

(js/logseq.App.showMsg "Gardening rocks!")

(defn main []
  (js/logseq.App.showMsg "Gardening rocks!")
  (slashcommands))
(defn init []
  (-> (js/logseq.ready main)
      (.catch js/console.error)))
