(ns physics.object
  (:refer-clojure :exclude (merge))
  (:use clojure.contrib.combinatorics)
  )

(require ['physics.position :as 'position])
(require ['physics.vector :as 'vector])

(defstruct object :position :mass :velocity :force :name)

(defn make
  ([]
    (struct object (position/make) 0 (vector/make) (vector/make) "TILT"))

  ([position mass velocity force name]
    (struct object position mass velocity force name))
  )

(defn reposition [o]
  (let [
    p (:position o)
    ]
    (assoc o :position (position/add p (:velocity o)))))

(defn reposition-all [os]
  (map reposition os))



(defn update-all [os]
  (reposition-all os))
