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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26ZRGGS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJkRkH%2F%2FrFV3f%2FeZ8N0wZVRnqQOCeDj18AIyOpCi6qUgIhALcUlMI8jwGA9c5yrEh4hCQxw95L%2FC%2F6c2qgLG19oDGOKv8DCFUQABoMNjM3NDIzMTgzODA1IgyP%2FIIlOhULare3Xgkq3APgfewCohvpfM1G6ZeY%2FpAD5IxUG2cQ2qLi0eYJZ5tbWBE1L%2BHfzP31fYEpTIDgVMw9GHqBvsrAePIqwTn7DWMkVUF9qRnYnk5i9dPlkqPla0OG4ki%2FwqSXpmI21b2ifRZBL4iV01Y0CwzCUFvAxwCEo%2BiTL6rySpumn9XBN4bso3jT7Kx%2FyYFr8tmmuF2N%2Bl8MpcPY8tq3JtEtY5AOU7%2FvRsmP5ehBlcw4Np14%2BgC%2FF3tV%2F0x5vlDffI7j72F9mUF449T2X5H6pwkda9e5vYGr8eschemOj%2FyqknxhxoAjxmDMuvEoo%2Fft39%2B2AyDEUKgX4XQbvy492PNFOfu25uHRGbUpcFGJ2L3zDlSII5afNT6ua2Zyys41T34gN%2BJm97e%2BiQ9RTTj8dGeUjYt8qbwHd1XXcSzD6hGpPx9T2TCfkuX1v41nXzqmIGMBEGZU51RVPE2K%2BEki%2FqGci5QR%2BUtDNaY8b0RyDSGP3ImeHGTQh8wqpg9tkUatc4bd2qyPnnLpsw5yiZD2yz%2FbcffVwDXugarPNbnAPrrl0kefLRqkgNPI0VeuV2MjKVQ2OZoNiaEkDIVC3%2FIZ9eCsEJ%2BM1FdQzbf%2BqyzaDyUdt3GbThLe%2BE1%2BbwT2jTWA6rFy1zCErcnJBjqkAT0nF9pbdc6gmgT6Dpxp%2BjilDjMC2b243KfNwz9WqenF3WCXaOx8TvPllb%2FVUPurVxy3fzITkSuR%2FB3CHfDXR7LG6km96OEfZf7A0u2EgjwTkbOqG5NoUiLHC%2Bc3lHb1pNhFlEgqAFHwX3%2BPW7GSfJdcYEIO82fFuRFjN0T8ytg35c7DDxahwPWpIqTW1%2FvkwDkruY4WtzJNc4nyFsKEKq2N5m%2FA&X-Amz-Signature=db52f7c9ec37bfce5b202a5b845d1c4a6b2313e71056806f0f0bfe9a0b3ec746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

