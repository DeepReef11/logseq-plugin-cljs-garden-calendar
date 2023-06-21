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

; Calendar

(def pxMultWeek 12)
(def pxMultMonth (* pxMultWeek 4))
(def monthsName ["Jan"
                 "Feb"
                 "Mar"
                 "Apr"
                 "May"
                 "Jun"
                 "Jul"
                 "Aug"
                 "Sep"
                 "Oct"
                 "Nov"
                 "Dec"
                 ])

(defn render-calendar-month
  "Render months on top of calendar"
  []
  
  (str "<div class=\"calendar-month-row\">" 
       (clojure.string/join (mapv (fn [x] (str "<div class=\"calendar-month\">|" x "</div>")) monthsName ) ) 
       
       "|</div>")

  )
(println (render-calendar-month))

(defn render-calendar-bar [lenght]
  (do

    (def width (* lenght pxMultWeek))
    (str "
      <div class=\"calendar-bar\" style=\"width:" width "px;\" >"
         " "
         "</div>")))



(defn  calendar-style []
  (str "<style>
  .calendar-bar {
      background-color: blue;
       height: 0.5em;
  }
       .calendar-month-row {
          display:flex;

       }
       .calendar-month {
          width:" pxMultMonth "px;
       }
 .calendar-month:nth-child(odd) {
       background-color: lightblue;
      } 
       .calendar {
       display: flex;
       flex-direction: column;
       
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
                (def content (str 
                              "<body><div class=\"calendar\" >" 
                              (render-calendar-month) 
                              (render-calendar-bar 2) 
                              (render-calendar-bar 3)  
                              (render-calendar-bar 4)  
                              (render-calendar-bar 6)  
                              (render-calendar-bar 20)  
                              "</div>" (calendar-style) "</body>"))
                (-> (js/logseq.Editor.updateBlock block-uuid content))))))

(defn slashcommands []
  (def regSlashCmd js/logseq.Editor.registerSlashCommand)
  (regSlashCmd
   "create-garden-calendar"
   #(do (println "ok4")
        (create-garden-calendar))))

(js/logseq.App.showMsg "Gardening rocks!")

(def calendar-data {:indoor {:week-before-frost -1}
                    :outdoor {:week-before-frost -10}})

(get-in calendar-data [:outdoor :week-before-frost])
(:week-before-frost (:outdoor calendar-data))
; (js/logseq.App.onMacroRendererSlotted (fn [^js params]
    ; (let [slot (.-slot params)
                                              ; payload (.-payload params)
                                              ; args (.-arguments payload)
                                              ; uuid (.-uuid payload)
                                              ; ]
                                          ; (js/Promise.resolve
      ; (do
                                            ; ( println args )
                                            ; (println "HERE!"))))))

; (fn [{slot, payload: {arguments: args, uuid}}] (println args))
; (js/logseq.App.registerPageMenuItem )

(defn main []
  (js/logseq.App.showMsg "Gardening rocks!")
  (slashcommands))
(defn init []
  (-> (js/logseq.ready main)
      (.catch js/console.error)))
