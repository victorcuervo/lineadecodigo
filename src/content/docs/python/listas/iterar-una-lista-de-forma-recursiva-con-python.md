---
title: "Iterar una lista de forma recursiva con Python"
description: "Uso de funciones para poder iterar una lista de forma recursiva con Python."
date: 2015-11-22
updatedDate: 2026-01-15
tags: ["recursividad","listas","for-in","isinstance"]
slug: python/listas/iterar-una-lista-de-forma-recursiva-con-python
type: doc
topic: python
id: 30c78282-3f40-4be0-9196-eea9434b8b93
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/listas/lista_recursiva.py
---

En este ejemplo vamos a ver cómo podemos **iterar una lista de forma recursiva con Python**. Las listas de Python pueden contener a su vez otras listas, por lo tanto deberemos de tener una forma de recorrer la lista principal e ir recorriendo, a su vez, las listas anidadas, independientemente del grado de anidación que tengamos.


## Definir la lista


Lo primero será definir la lista en Python:


```python
lista = [1, 2, 3, ['a', 'b', 'c', 'd'], 4, 5]
```


Como podemos observar, el cuarto elemento es a su vez una lista. Hay que recordar que los elementos de las listas en Python se definen mediante corchetes y separados por comas.


## Recorrer la lista con un bucle


Para poder recorrer la lista en Python utilizamos un bucle for-each de la siguiente forma:


```python
for elemento in lista:
    print(elemento)
```


## Crear una función recursiva


Para poder reutilizar el código vamos a definir un método el cual nos realice el código que recorra la lista:


```python
def listar(lista):
    for elemento in lista:
        print(elemento)

listar(lista)
```


Al ejecutar este código el resultado que tenemos es el siguiente:


```javascript
1
2
3
['a', 'b', 'c', 'd']
4
5
```


Vemos que la lista que ocupaba el cuarto elemento se imprime tal cual. Así que deberemos de modificar el código para preguntar si el elemento es una lista.


## Usar isinstance() para detectar listas anidadas


Para ello utilizamos el método `isinstance()` al cual le pasamos el elemento. Lo que vamos a hacer es que en el caso de que el elemento sea una lista volver a llamar al método `listar()`, lo cual hará que se vuelva a ejecutar el código que itera por los elementos de la lista, permitiendo iterar una lista de forma recursiva con Python:


```python
def listar(lista):
    for elemento in lista:
        if isinstance(elemento, list):
            listar(elemento)
        else:
            print(elemento)

listar(lista)
```


El resultado que conseguimos ahora es:


```javascript
1
2
3
a
b
c
d
4
5
```


De esta forma ya tenemos el código que buscábamos y que nos ayuda a **iterar una lista de forma recursiva con Python**.

