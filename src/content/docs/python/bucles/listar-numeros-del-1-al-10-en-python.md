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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQHO5XU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo3ECesPZ3zNgNFbBeUFGEew%2BhxKfFtLCPKuoY1YW8PAiBDCK%2Bw01YImUIosC%2Bnw3WwDnRLqh1prdrkSyHBK8rKMCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVKZPq0ajRj7UbTz7KtwDbrBnV%2FFh3ET%2BToV6g4bWqvFuhQ8M7UteVK9pBOT5AU7btNq5WwdrlSUdx8bzmQWEuw2hurUJoqu9G9pc6Qd6Sakvn4adsSNlqWYelqs1s0g%2F%2FO5KDYvE%2FRAlJn1Wd7rhqlLTziApHmhZRkj2QTAxw%2B6dyobeedCRn2mD2X2FSe5RLdr5MVqoOVLIuxBlh9ZWcQrAeemh52nuYZThv42MvDjruZnn9V4DrfW%2FZIivPodlDmGG8ci%2B6uNAdFsZ08H8VbgJAtapLFK13v1T1mmyDTaFQOfrsU3aWde2hueJEjzOoeYDcHwmfGtUS7A2LIdiDeqBtGHoRkrJJ2aFCm1YoxXK9sFTQY01pptyueHNkrmVJp8tLuINb7Gb8bYT%2FMkkJyCi%2BS8C%2BJzAOunnwNK6z7mvtpq8IkFqfrete9W3rQs%2B6sQETX2IHwf%2FzUG8nWl8xowYify2j%2FLjSE6aoZnLOqgqxkvHovEfL%2Brxil3qpxlQxask66WiaZeOazW4zh%2B%2BEvvafsRiLPwacJ%2FmgiG7bmNq6aQvx0hxX5VjNHR7q8P%2BybhRqK4mH6JmYeaTptcpyZvtC7Gy4%2F3zm2%2F%2B%2FIvwXmHHbN%2BGitA45%2B13A1Zp9y9VHrX4c1vVcDYLQS0w%2F4TYyQY6pgEWJs8wgnsDLwxeztouA%2F5CsMxj2hRbLCDzFgLGtoWgHwNE1uwScH5tR4tYCKgTVki3GxHGwWNVRxTdAX8jhiI2KCMKc7VoHTv%2BfBShcMA6iE0tT8ex7Xd4ZsP9Jg9YGIuV2aVuK%2BDevcNQCj%2FBEja5ga6FHd0ZbdNPOQSMQvubuEbCzCDVLofx9g8Nk1QK6tt4OpsPqR0NJNgkJ6y8daVyJ3DgN9KC&X-Amz-Signature=08fc85c34a70b50ee39d1591a94ae50713a060812f8545e457b80ad0ac70c3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

