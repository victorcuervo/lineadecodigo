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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKQM5JMZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0wmyMRhNd14VlUyZgHSw2tMsWU4fR01ex1%2FKNtYHZtQIgJQQHD1krl7g0t2cSGkFd7810yCIdVExFOZaQVhFZ9xAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBKckmOgwa%2Bn0pwyISrcA2y%2Bne61OtFcSf4uUCmqnOJMMq4kPgwOb29lLhMgYNcoQIO5QNlvVssNfl6NZ5HLPDrVXb%2FBiAecoiJwGcfxA1xkc3HXSPgRQJPUBUdDgb5Wib503hXKSa98OGuEaYOQFd2iN%2Ffjm2lCyF9FuwkZqd4f5Y7ZizdQiQp4tCXcZohI19hrZ4e4HwcmsxuDWJyRSGRWggYeWJCeOyKjFb4xA4H%2BIcP9DIcF1pzfHqZkAnlYO80o9iRsciq9sKKkQDUP3vSiHMzT77KrVCFivJYrQwbHjrL3Emyx%2FPKdm1sYGb2uhGno5hQOgnBSkUyDNsBXczIyzSI%2FhfZsYQJQLR7TTAjEl1ya5PmfSVbKDrml%2FAM2tkykUwjUvBLwU%2BWFkxHqvhC%2Bd3iTjzFU96vMUKnNAxr8UaHO35OZ1F%2BkrThpV32vkKndzbW5rn2%2BCZ53UCnLkn0mzReiLDU7T8ToQed5ZItkqYBWJEVkHRw3sBi1rbmS7wMtJAC%2BWo9b8FKO7uEOESjWNsYWG7nzgBSVOrfN3KcFEydYsWx1gEaC5d%2BZ1foqdPfKExH2%2Fvx4VGSbPl5JkqtPsK0BfgvfVXrT%2BdUaUVkjmUwnOb2I2M%2BK4gfrkO%2BD0dJ0Q1Cohk1MGgbyMNiez8kGOqUBSUR6%2FPh%2BgQeUo3o%2BaxDVf9voQ0kjhY4IpPsfT9TqIXXymrpkvlNmGgrNG7unDmxNld5LejnNbDOfHi%2Fv%2BatidV7OIC2MfYdXQqnG0pf%2FU5n0UT3IUoMOk4EZemkDUll3o2TQ6WpeV2NPTF5BRJQU2q5cZIzqCGDhRCmENB9h9vpRSllGGO88iQ88gVTtvDmmynNGTZt92ffwBveoVsB9wkNz0jvt&X-Amz-Signature=5c5d138141c2e87e9075139cc0fce83d74a1d41b760b3e64a5ae143587eb061e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

