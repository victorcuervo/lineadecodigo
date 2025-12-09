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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ75DBU4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNguu9Ml9Vj3cscOk%2B%2FsE7TpZUYpGcWC2z%2Ba5yjLhCIQIgayOPlbuxtqL8MKUL9vqJuiNPNHD3qMZ1sSQJNeWV%2BK8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyFgp%2FAbHap5uuR6ircAykf7ignij7KKTkqC9w7f0cNG2j9W6sdIEoM0cfNVlJgnMYgW2kx5NStpY2HapjVbz%2FpXTKkuN5W3U66tWZ1bQ4veXtbPk9pqtA3z8WmKITIuj4U7f0RavQhPpxDieGMr1hOk14uOp%2BHeU59DSsntvC863N4T1IaDlAb48J%2FNy6FahPzw5Dyc6XIC4rc0xqcZ5cLEcRhZN54VeYknHoOwxRq%2FU9s25Ae9ATXJvPcKdo06kj5uJWMwhDQeswkTA14uiCRb7VnQmYz63qAPnaJACrDznHcMtmORLsgK9XvUOg84Dg%2BbC0Crvqk0kf6nD%2FA641y8rq279HychzY4J%2B1JqsqRMKceDPoHIgGVGiZqx7h%2Fp0m4mgzPDjk86LPe10eoJhjOKHQCTvzAn3UGX7fYWT0Xu7HbhVAJRvXXJb5XMFXbXyI%2FLUYLqlHq66FBV9AFwZdMmdOfGAysA3XjZ4lUkR0GaopqW%2BMSRnczXZixTjEc6VJ4w8HAfzF%2B3uKEKBkcq8LQyAbqQRdFmvmQrTWZkhAh0A0Sea%2BL5iEvC1wc58iOwc8dtcHKjqZHH88zZmCkLBkRH9gM1MpT3QgXy8PliM1zwSW1dRHmBz%2BRVBH6VC68lxh8IM2nn1V1nPuMP%2FD38kGOqUBa7vJTOHN7sEGwEFMFx%2Bh2BvkwIx1LqA3vtGy9ap35w0v7L6MG%2FDEAxKJ0FxdIyFjW1%2Big%2FmM7EzbR90YmKiI%2FmvfIVznUDCYjcfFN6WjugAo3PjQ7KS4gtDYHmI5%2Fpv9NtXPhXpN7wOgTWLst9auheRz2hKT7Vi%2Ff2xaw5Xhu0dDRj7iNSOF2BIrx35dJ2m13aHP57G6dHVh2zHCoZow9kYf0%2FvX&X-Amz-Signature=e00431aa8d5c72fd07ac10a9a6b27c3850beb2967f9b4eeab0a47d83ed32bed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

