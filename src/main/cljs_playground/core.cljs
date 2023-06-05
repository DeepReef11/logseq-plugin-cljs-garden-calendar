(ns cljs-playground.core
  (:require ["@logseq/libs"] ;; [applied-science.js-interop :as j]
 ;; [cljs-http.client :as http]
 ;; [cljs-http.client :as http]
 ;; [datascript.core :as d]

            [promesa.core :as p]))

(future (Thread/sleep 4000)
        ;; (println "I'll print after 4 seconds"))

(defn create-garden-calendar []
  (p/let [current-block (js/logseq.Editor.getCurrentBlock)]
  )

  )
)

(defn slashcommands []
  (def regSlashCmd js/logseq.Editor.registerSlashCommand)
  (regSlashCmd
   "create-garden-calendar"
   #(println "ok3")))


(js/logseq.App.showMsg "Gardening rocks!")

(defn main []
  (js/logseq.App.showMsg "Gardening rocks!")
  (slashcommands)
  )
(defn init []
  (-> (js/logseq.ready main)
      (.catch js/console.error)))
