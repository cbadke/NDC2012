(ns physics.vector 
  (:refer-clojure :exclude (vector)))

(defstruct vector :x :y)

(defn make
  ([] (struct vector 0 0))
  ([x y] (struct vector x y)))

(defn add
  [v1 v2]
  (make (+ (:x v1) (:x v2)) 
        (+ (:y v1) (:y v2))))

(defn subtract
  [v1 v2]
  (make (- (:x v1) (:x v2)) 
        (- (:y v1) (:y v2))))

(defn magnitude
  [{x :x y :y}]
  (let [x2 (* x x)
        y2 (* y y)]
    (Math/sqrt (+ x2 y2))))

(defn scale
  [{x :x y :y} factor]
  (make (* factor x) 
        (* factor y)))

(defn unit [v]
  (scale v (/ 1 (magnitude v))))

(defn rotate90 [{x :x y :y}]
  (make (- y) x))
