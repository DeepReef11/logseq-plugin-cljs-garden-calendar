;; (ns cljs-playground.core
;;   (:require 
;;    [applied-science.js-interop :as j]
;;    [cljs-http.client :as http]
;;    [datascript.core :as d]
;;    [com.wsscode.async.async-cljs :as wa :refer [go-promise  <? <?maybe]]
;;   ))

;; (defonce db
;;   (d/create-conn
;;    {:things.area/uuid {:db/unique :db.unique/identity}
;;     :things.task/uuid {:db/unique :db.unique/identity}
;;     :things.checklist/uuid  {:db/unique :db.unique/identity}
;;     :things.task/area {:db/valueType :db.type/ref}
;;     :things.task/project {:db/valueType :db.type/ref}
;;     :things.checklist/task {:db/valueType :db.type/ref}}))

;; (def debug (partial println "debug:"))
;; (defn go-get-data-from-proxy []
;;   (go-promise (:body (<? (http/get "http://localhost:7980")))))


;; (defn go-load-db! []
;;   (go-promise (d/transact! db (<? (go-get-data-from-proxy)))
;;               (debug (str "Datum count " (count (:eavt @db))))))



;; ;(def trace (partial println "trace:"))
;; (def trace (constantly nil))
;; ; for now reloads data from things db proxy
;; ; before running the command. Intended to wrap top
;; ; level commands to ensure data is current
;; ; could potentially skip reload if data was recently loaded
;; ; or ideally implement subscription for real time updates
;; (defn with-things-db [f]
;;   (fn [& args]
;;     (go-promise (<?maybe (go-load-db!))
;;                 (<?maybe (apply f args)))))



;; (js/logseq.App.showMsg "Hello from Clojure!")


;; (defn logseq* [obj method & args]
;;   (let [jsargs (mapv clj->js args)
;;         v (j/get obj method)
;;         ;_ (trace (str (cons method jsargs)))
;;         _ (trace (pr-str (cons method args)))
;;         result (if-not (ifn? v) v
;;                        (apply (partial j/call obj method) jsargs))]

;;     (if (instance? js/Promise result)
;;       (go-promise
;;        (let [result (wa/<?maybe result)
;;              ;_ (trace method ">>" result) 
;;              result (js->clj result :keywordize-keys true)]
;;          (trace method ">" result)
;;          result))
;;       (let [;_ (trace method ">>" result) 
;;             result (js->clj result :keywordize-keys true)]
;;         (trace method ">" result)
;;         result))))
;; (def last-error (volatile! nil))
;; (def show-msg! (partial logseq* js/logseq.App :showMsg))
;; (defn displaying-errors [f]
;;   (fn [& args]
;;     (go-promise
;;      (<?maybe (try (<?maybe (apply f args))
;;                    (catch :default e
;;                      (debug "Caught Error: " e)
;;                      (j/call js/console :error e)
;;                      (vreset! last-error e)
;;                      (show-msg! (str "Error:\n"
;;                                      (pr-str e)))))))))

;; (def register-command*! (partial logseq* js/logseq.App :registerCommand))
;; (defn with-promise-result [f]
;;   (fn [& args]
;;     (new js/Promise
;;          (fn [resolve reject]
;;            (go-promise (try (resolve (<?maybe (apply f args)))
;;                             (catch :default e (reject e))))))))

;; (def register-command-palette*! (partial logseq* js/logseq.App :registerCommandPalette))
;; (defn register-command-palette! [opts callback]
;;   (register-command-palette*! opts (with-promise-result (displaying-errors callback))))

;; (defn main []
;;   (js/logseq.App.showMsg "Hello from Clojure!")
;;   (register-command-palette! {:key "insert-calendar" :label "Insert gardening calendar"}
;;                              (with-things-db println)
;; ))

;; (defn callbacktest []
;;   (println "callback working"))

;; (js/logseq.App.showMsg "Hello from Clojure!")
;; (register-command-palette! {:key "insert-calendar" :label "Insert gardening calendar"}
;;                              (with-things-db callbacktest)
;;                              )

;; (defn init []
;;   (-> (js/logseq.ready main)
;;       (.catch js/console.error)))


(ns cljs-playground.core
  (:require 
    ["@logseq/libs"]
   [applied-science.js-interop :as j]
   [cljs-http.client :as http]
   [datascript.core :as d]
   [com.wsscode.async.async-cljs :as wa :refer [go-promise  <? <?maybe]]
  ))



(defn create-garden-calendar []
  js/logseq.Editor.
  )
(def x1 (int-array '(1 2 3)))
(println (aget x1 2))

(defn slashcommands []
  (def regSlashCmd js/logseq.Editor.registerSlashCommand)
  (regSlashCmd
   "create-garden-calendar"
   #(println "ok2")))
  


(defn main []
  (js/logseq.App.showMsg "Gardening rocks!")
  (slashcommands)
)  
   

(defn init []
  (-> (js/logseq.ready main)
      (.catch js/console.error)))



