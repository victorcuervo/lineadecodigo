---
layout: post
title: Plantillas en Cadenas Python
excerpt: "Cómo podemos gestionar plantillas en cadenas Python mediante la clase Template para poder modificar los valores de las variables."
categories: Python
tags: [python cadenas]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos visto como manejar el formato de las cadenas de texto en [Python](https://www.manualweb.net/python/) de varias formas, por un lado tenemos [el uso de las fString que nos ayuda a añadir contenido variable de forma sencilla](https://lineadecodigo.com/python/fstring-o-interpolacion-de-cadenas-en-python/), por otro tenemos [el operador módulo](https://lineadecodigo.com/python/formato-de-cadenas-en-python/) `%` y el método [`.format()`](https://www.w3api.com/Python/str/format/). En este caso vamos a otra forma que es el uso de plantillas en cadenas [Python](https://www.manualweb.net/python/).


Para poder utilizar plantillas en cadenas [Python](https://www.manualweb.net/python/) vamos a tener que importar el módulo [`string`](https://w3api.com/Python/string/) y en concreto la clase [`Template`](https://w3api.com/Python/string/Template/).


```python
from string import Template
```


Lo siguiente será instanciar una plantilla mediante el constructor [`Template`](https://w3api.com/Python/string/Template/Template/). Este recibe una cadena como parámetro dónde las variables se indican con un dólar delante del nombre de la variable.


```python
t = Template('Hola, $nombre!')
```


Vemos que en esta parte de código hemos creado una cadena en la que tenemos una variable que se llama `$nombre` y que sustituiremos más adelante.


Para realizar la substitución de la variable nos tenemos que apoyar en el método [`.substitute()`](https://w3api.com/Python/string/Template/substitute/) al cual pasamos como parámetro la sustitución del nombre de la variable con el valor que le queremos asignar.


De esta manera si queremos asignar un valor a la variable `$nombre` lo haremos de la siguiente forma:


```python
t.substitute(nombre='Victor'))
```


Este código imprimirá en la consola el mensaje "Hola, Victor!", utilizando la plantilla que hemos definido.


```python
print(t.substitute(nombre='Victor'))
```


En la plantilla podemos definir tantas variables como queramos. En el siguiente ejemplo ya tenemos dos variables definidas: `$nombre` y `$cosa`.


```python
t2 = Template('Hola, $nombre! ¿Dónde esta el $cosa?')
```


En este caso la sustitución la podemos hacer pasando un diccionario al método [`.substitute()`](https://w3api.com/Python/string/Template/substitute/). En la que incluyamos toda la lista de variables con los valores que le queramos asignar a cada una de ellas.


```python
print (t2.substitute({'nombre':'Victor','cosa':'coche'}))
```


Lo bueno de las plantillas es que podemos utilizarlas tantas veces como queramos, simplemente tendremos que modificar los valores que les pasamos. De esta forma podemos invocar a la plantilla que acabamos de definid con otros valores totalmente diferentes:


```python
print (t2.substitute({'nombre':'Luis','cosa':'balón'}))
```


Con esto ya habremos conseguido aprender a gestionar plantillas en cadenas [Python](https://www.manualweb.net/python/).

