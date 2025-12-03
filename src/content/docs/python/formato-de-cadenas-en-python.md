---
title: Formato de Cadenas en Python
description: "Uso del operador % y del método format como dos alternativas para poder crear un formato de cadenas en Python."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En este artículo vamos a revisar cómo podemos gestionar el formato de cadenas en [Python](https://www.manualweb.net/python/) o cómo crear templates dentro de las cadenas de texto para luego poder insertarle valores antes de visualizar o almacenar la cadena.


Y es que tenemos diferentes formas de poder dar el formato de cadenas en [Python](https://www.manualweb.net/python/). Veamos un par de soluciones para poder resolverlo.


## Operador %


La primera forma y más clásica es utilizar **el operador %** para poder identificar en qué parte de la cadena se sitúan las variables.


En este caso añadimos `%s` si queremos poner una cadena, o `%d` si queremos añadir un número o `%f` para números en coma flotantes [entre muchos otros valores](https://docs.python.org/3/library/stdtypes.html#old-string-formatting).


Una vez acabada la frase incluiremos de nuevo el operador % pero esta vez seguido de la lista de valores dentro de paréntesis.


De esta manera, si queremos insertar números dentro de una cadena podríamos escribir la siguiente línea de código:


```python
s = "Los números son %d y %d." % (5, 10)
```


Ahora cuando mostremos esta cadena por consola veremos lo siguiente:


> 💡 Los números son 5 y 10.


## Método .format()


La segunda alternativa es la de utilizar el método [`.format()`](https://www.w3api.com/Python/str/format/). El método [`.format()`](https://www.w3api.com/Python/str/format/) lo que hace es sustituir el valor de una variable indicada dentro de la cadena mediante llaves. En este caso el formato puede tener nombre de variable o no tener nombre de variable.


De esta manera podemos crear una cadena que tenga la siguiente estructura:


```python
s = "Te llamas {nombre}"
```


Vemos que en este caso hemos creado un formato con un nombre. Es por ello que ahora llamaremos al método [`.format()`](https://www.w3api.com/Python/str/format/) pasándole el nombre de la variable y el valor que queremos asignarle. Por lo que el código quedaría de la siguiente forma:


```python
s = "Te llamas {nombre}".format(nombre="Victor")
```


Pero también podemos omitir el nombre de la variable y solo poner las llaves. Como hemos hecho en la siguiente sentencia de código:


```python
s = "Los números son {} y {}"
```


En este segundo caso, cuando llamemos al método [`.format()`](https://www.w3api.com/Python/str/format/) la asignación de los valores al formato de la cadena se hará por orden. Por consiguiente la invocaremos de la siguiente manera:


```python
s = "Los números son {} y {}".format(5,1)
```


Vemos que las primeras llaves son resueltas con el valor 5 y las segundas llaves con el valor 1.


Así, con el operador % y el método [`.format()`](https://www.w3api.com/Python/str/format/) sabemos cómo podemos gestionar el formato de cadenas en [Python](https://www.manualweb.net/python/) de una forma sencilla.

