---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXFRUA5C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8EWD%2F6NoHsxdk26hXekhdLn%2FolVEQ9MjZLeOgWwX9MAiEA3nGTzbE9IK0ikoHAXKbuYgx4LXDBHnrycHPAaYeUziQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBpBBwYAdGtXQLF8eyrcA28Id0AFPIydLmoPcsjMXwITXYHixZS4IcbzJqHNlMvewQpBHSDOsDrKYYzGZIpLZTpQ7nMw7z60DaL50PZJv3kUd14R9tFmlUzYz4jgNcD2m%2F%2BMVeika480KjoVujRWGbduHa%2FfF4KvyRGkDsJcHZ5y4JXTfyL69MePEl8XnW61eRHO1WcwqD8X%2BFji1NZ2L2i3Yle8jcnOTmkRqW7f8pfUfVUjMzj9%2B%2F7HGWGPA7CGYCyDviloV8CZXgj0dSizmkg5ns9IA3pJMHb0HeYdBljofdCzBfUXzNpjTEDeiCH9FVNUZ97CxAkR%2BdOYzmulzbGm7tQSH6FPrYKt42RrF%2Fft0g64OH5bDmoKQpGnbVRNjU%2FGt%2BKPmu0JpLkE0ExsP0wxUK65O7ZVAtQ2B4g2ZNEPCRFzDmK1EBRnglzyQfBaMbBbXQyur3TnajZ6tIusNuyERJ3z%2BgLa1KP2DZJHbXjwFCLazzB%2FXvV3n%2FTEtJR2ABeZYhHGsLwxk4WnS1lemmNYRn2J1Uj5%2BFg%2BWD5S%2Bbn3uIImYOrWCvykk25qTgznMNightu3Sw98Jvpf4QYZEaHNfsmS9fGjKOu3tnF0LWELxyLshNSjUQmWMIETRklYnkFAFmVG67dstNFuMM%2B8z8kGOqUBAPU2QiF6l2KN3V7iZgL8sggkVZs94S0kNRFECT%2B5T1Qdp7SlLh0vrYBn3Wziq2sRm2CNMWhaueJ126bzbyh%2BVM%2BuTjlcOnPdQEne1PtinheNdh%2BbrlmX2paoNJZlvfKPqhHnT6iPWnRj1ZZcJ8oBWwL4197bWNBaAOqBlo56LFx1coQpbUwHAEDgJLlFPIhW2K4xyAgGgJKBlIsn7r1wMXCLKNCO&X-Amz-Signature=2939c772151bc03e6c8f10485309bcd5386cf912287b2a2dffd8ead9248cb476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

