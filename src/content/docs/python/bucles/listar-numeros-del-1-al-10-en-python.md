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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MBBJOC4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwUlRkeqkuEboOYhSrYhT1pG1uh4C6vXRUTGIr4sOybAiBQ4y4noHghQGn5nsPlri05abcdu%2ByBsBQn60mQH1CmnCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiSpTlodP2xtbWriYKtwD4DAyLF04mXZ1pxjgrH5%2FrKebeCb6WWLL5QoFf0cfGtGko7ePvMIXmNaSxHhhFv%2BeXPN%2FION4ikooRoVuIrCFf%2FRm6U3dO5lSe9%2FwyKbzIcNT4Shsotv%2FqJ9SDb15JsXN4gy9IYuFAFEfLiuU95wZYWzfrZ1ggW1UqJ%2FYFZNc%2BfjkuSNCSXEki%2FQkx6f%2FG9aXsyM758RQyVPj9RVr35D5x7d2Xf7IyT6AaC%2Fo8jVi5%2BptkdiwYM9Nf3VWvIC1%2B0GBcNOk85Xb%2FbJn6o%2FAr0eXd64hKcyE3iZwLqL2jLnELFL7OiWoCHMA8BhYyNICtxM%2Bw69APD6q00%2BW%2FNJuvNHfQPRylINPn%2BcCkooTZ4up%2FQl0814A%2FENl%2BuKbErg78d5TkcC6F44FE83EOLifK0piK25xgh%2B3p1FlNtOK4bGtEwtV8DWVsGV%2BkWYPu28fkF8zJa1Jvgdvgt6Ka0ZFJV1YB6inar282KX6tUpAcEKpa0dVUPpVmeUv9mMyssjcuqdg%2BjstPD%2F5qlaZ5UMsO8rlcQKe4u8aMgIuv3h1aC19jS0ypo9GQL8WrWE3%2BeUePa6j9yUnjQd7%2FG%2FFisdyn0ebR6wfujR%2FsKFye28BmUYuhHyBOLj8tJx%2FVSsHKCQwyP3SyQY6pgGu8yrdbWYrX1eSglEsMrWv%2FH4toaq0Xxztil3dj%2F4bZBFuJwikx2MLBXWNMkZhsrTmrRvGvLHl2lRqJpl%2Fw8qk61SP7u07NqfoH4GMisiZMM%2BeEheT%2Fs8nvvY4UkMgxHe6oc1TiJR1GzrKltYX0eAfPpBMImeamZfoKTPwPOMSqnxPKoa8WrRSAy1zNYomOWqf3hAcM2zoI%2FlEZ5ijy6nRpvun7DXW&X-Amz-Signature=65ac919d7be755f0b961c016e17a3f8558416e73d9f8f7455078671e39e4a60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

