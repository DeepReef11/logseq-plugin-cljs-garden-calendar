(ns cljs-playground.core
  (:require ["@logseq/libs"] ;; [applied-science.js-interop :as j]

 ;; [cljs-http.client :as http]
 ;; [cljs-http.client :as http]
 ;; [datascript.core :as d]

            [promesa.core :as p]
            [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))
(defn simple-component []
  [:div
   [:p "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]])

(defn calendar-bar []

  )


(defn create-garden-calendar []
  (-> (js/logseq.Editor.getCurrentBlock)
      (.then #(do
                (js/console.log "2")

                (def result %)

                (js/console.log result)
                (js/console.log (simple-component))
                (def block-uuid (oget result "uuid"))
                (-> (js/logseq.Editor.updateBlock block-uuid (simple-component)))
                ))))

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
