---
title: "Eliminar elementos de una lista con Python"
description: "Artículo que examina tres formas de eliminar elementos de una lista con Python que serán el método remove el método pop y la sentencia del."
date: 2021-03-02
updatedDate: 2026-01-05
tags: ["listas","pop","remove","del","for-in"]
slug: python/listas/eliminar-elementos-de-una-lista-con-python
author: victor_cuervo
type: doc
id: f84af8d4-da34-4eb0-84fe-445aa2317483
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/listas/eliminar-elemento-lista.py
---

En un anterior artículo vimos como podíamos añadir elementos a una lista en [Python](https://www.manualweb.net/python/), ahora vamos a ver lo complementario y aprenderemos a eliminar elementos de una lista con [Python](https://www.manualweb.net/python/). Para ello lo primero que haremos será crear una lista de elementos, en este caso una sencilla lista con números.


```python
lista = [1,4,3,4,5]
```


Si recorremos la lista mediante un sencillo bucle `for..in` veremos que aparecen todos los números por consola.


```python
for elemento in lista:
    print (elemento)
```


Por consola tendremos todos los números:


```text
1, 4, 3, 4, 5
```


Ahora vamos a ver tres mecanismos para poder eliminar uno de los elementos de la lista que acabamos de crear en [Python](https://www.manualweb.net/python/). Estos serán:

- Método remove
- Método pop
- Sentencia del

## Eliminar elementos de una lista con remove


En este primer caso vamos a utilizar el método `.remove()` este método se puede ejecutar directamente sobre la lista, así que su sintaxis es:


```python
lista.remove(elemento)
```


Este método recibirá como parámetro el elemento que queremos borrar. De tal manera que eliminará el primer elemento de la lista que coincida con el elemento pasado como parámetro. Es por ello que si queremos eliminar el primer elemento que coincida con el número 4 escribiremos lo siguiente:


```python
lista.remove(4)
```


Al volcar el contenido de la lista obtenemos lo siguiente:


```text
1, 3, 4, 5
```


## Eliminar elementos de una lista con pop


Otra alternativa es utilizar el método `.pop()`. Este método se invoca igualmente sobre la lista y nos permite eliminar el elemento que esté en la posición pasada como parámetro. La sintaxis será la siguiente:


```python
lista.pop(posición)
```


De esta forma si queremos eliminar el elemento de la posición 4 escribiremos lo siguiente:


```python
lista.pop(4)
```


En este caso hemos eliminado el elemento 5 que está en la posición 4 y la lista nos quedará de la siguiente forma:


```text
1, 4, 3, 4
```


## Eliminar elementos de una lista con del


La tercera forma de eliminar un eliminar elementos de una lista con [Python](http://www.manualweb.net/python) es la sentencia `del` esta sentencia permite eliminar cualquier elemento y entre ellos el elemento de una posición de la lista. Su sintaxis será la siguiente:


```python
del lista[posicion]
```


Así, si queremos eliminar el elemento de la posición 4 escribiremos lo siguiente:


```python
del lista[4]
```


Y tal y como pasaba en el anterior caso con el método `.pop()` la lista resultado será la siguiente.


```text
1, 4, 3, 4, 5
```


De esta manera ya hemos visto las tres formas que tenemos para eliminar elementos de una lista con [Python](http://www.manualweb.net/python): el método `.remove()` que busca el primer elemento pasado por parámetro y el método `.pop()` y la sentencia `del` que eliminan el elemento atendiendo a la posición indicada.


Espero que el artículo os sea de utilidad.

