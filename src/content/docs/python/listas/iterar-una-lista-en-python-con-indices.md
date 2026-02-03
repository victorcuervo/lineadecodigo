---
title: "Iterar una lista en Python con indices"
description: "Uso de un rango de números, con el uso de la función range, para poder iterar una lista en Python con índices y mostrar su contenido por consola."
date: 2015-11-18
updatedDate: 2026-01-05
tags: ["listas","for-each","len","range"]
slug: python/listas/iterar-una-lista-en-python-con-indices
author: victor_cuervo
type: doc
id: e4a8655d-9535-4585-8058-3ab177a28d11
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/listas/iterar_lista_indice.py
---

Podríamos preguntarnos por qué necesitamos iterar una lista en [Python](https://www.manualweb.net/python/) con índices si ya vimos en el ejemplo de [iterar una lista en Python](https://lineadecodigo.com/python/iterar-una-lista-en-python/) veíamos lo sencillo que es iterar una lista de elementos en [Python](https://www.manualweb.net/pyhton/) mediante un bucle `for-each`. En ese caso, cada iteración del bucle nos dejaba el elemento iterado en una variable, facilitando mucho su manipulación.


La verdad es que [iterar una lista en Python sería el caso sencillo](http://lineadecodigo.com/python/iterar-una-lista-en-python/). Pero si vienes de otros lenguajes que no sean [Python](https://www.manualweb.net/python/) puedes estar pensando en cómo acceder a la lista mediante sus índices, es decir, mediante el valor del índice que tiene el elemento. De esta forma, en este ejemplo, vamos a ver cómo iterar una lista en [Python](https://www.manualweb.net/python/) con índices.


## Declarar una lista de elementos en Python


El primer paso, para iterar una lista en [Python](http://www.manualweb.net/python/) con índices, será declarar la lista de elementos:


```python
lista = ["carmen","elena","lucia","sara","patricia","sonsoles"]
```


Vemos que todos los elementos se encuentran entre corchetes y separados por comas.


En este caso hemos creado una lista con nombre de mujeres.


## Uso de rangos para recorrer una lista


Ahora vamos a utilizar el bucle `for`. Lo que sucede es que en [Python](https://www.manualweb.net/python/) el bucle se representa en sí mismo por un bucle `for-each`. Así que si queremos iterar por índices, el bucle deberá de recorrer una lista de números.


Esta lista de números irá desde el 0, que es el valor del índice inicial, hasta la longitud de la lista. Así que lo primero que tenemos que saber es que la longitud de la lista se calcula mediante la función [`len()`](https://www.w3api.com/Python/len/).


```python
tamanio = len(lista)
```


Lo siguiente será crear un rango de números que iremos recorriendo y que serán los índices. En este caso vamos a utilizar el método [`range()`](https://www.w3api.com/Python/range/) para poder crear ese listado. El rango irá desde el 0 hasta el tamaño de la cadena.


```text
 range(0,len(lista))
```


Para acceder al elemento utilizando el índice, necesitamos pasar dicho índice entre corchetes. Así podríamos acceder de forma individual a los elementos escribiendo.


```python
lista[0] #primer elemento
lista[1] #segundo elemento
...
```


## Uso de for-each para iterar una lista en Python con indices


Así que, la parte más relevante de nuestro [código en Python](https://lineadecodigo.com/categoria/python/), para poder iterar una lista en [Python](http://www.manualweb.net/python/) con índices, será la que nos permita utilizar este rango con el bucle `for-each` y el acceso mediante índices de la siguiente manera.


```python
print "Recorrer lista por Indices"
for x in range(0,len(lista)):
    print lista[x]
```


De esta manera ya habremos conseguido iterar una lista en [Python](http://www.manualweb.net/python/) con índices y mostrado el contenido de la misma sobre la consola utilizando la función [`print()`](https://www.w3api.com/Python/print/).

