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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN73ZAS3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiqmens7B8Ocg3Pe5jS5hHORuSKrkfatwQ0yzDRh3VmAiEA26nwNimtG3p9Lk0qPghH29S677%2FTAG%2B8zEYJEN2z9ugqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlCeMUjbE9EcZJmkircA80A7UmwJmQ5Tc4%2Bkw14A%2FWY45v67hcixDjSXLm0BIzaqD5jHKlHAvWSDnEDqfg5AFbgZmZQjL5xtP3uTdUWXugWVcfa8X0TnP0kdE8BBLajbgRRGcXuVQPJiH9w9rQrE%2FHUqI%2FSdKyPCVdrloCbZ%2BrISbV14E24hUxNSttSSf7awHgkfkDLpuafgNTvL3gFYqN1G76nf4EXzT33D28LuIuTs6kBnNYptOpBXzRfGJ%2Fs%2BbIJzCyCZiJ%2Fj5u3Z626g8aPkX8GIn8tQ5XGKHfbKCJ%2BPJ6c2QhvXii3q6o%2B1dJOif%2BIQEajn9CYBwutzJi9n5t%2F44B6Lluf5BwMyF6lmc3LBTr9QEY3b7%2Fk7YpjGX%2FDS%2BPhTA0MMCEjubz3foNmhEQl1R%2Bt22JfCk1ABIM8Yfic1FITZNQXDGRZZapsDeSc8CoaDM3pjboux9%2B7CmEBgXApWREjQhA%2Bbqzv7FAWIelxB2sWd%2F80CWo%2Bd%2Bj8ersckbCQ7LvYiCsv36IzdPCR9uWo7zrTs5psIn5SJ2nTZGh4bfkgJDrd%2FEKUiWjoSWxlrlR6r5bw0yGl%2BVZNCE3OLQt4uoEPkB7JcCUd2AIa%2B5yOWvN9LUiZ0vNZTMP0bU364E9cbFpqAE1%2BmrKIMKaA3ckGOqUBcb8RF7vMl8HwEAP8uQQVkSFawtTD2nkSabTZKqwvvADUb49%2B8JS3Dy5lpNCkjz9m8CAcEytHMai4MyvQbDvLHbn7NcvbF4x1uZLhavS1uqn1EQ3KWFo2vpztvgXeHKhxrJ4%2BdEyNtfZjDfWn2VB1YA0mNxL8oJB42yfr9XmuMFeZBiI%2BJgYWlkR59KR940r61am%2B23Bz4QkZzX5lywjfgd%2FyHfo8&X-Amz-Signature=f9594cfdadda73c37d02caf89ae5229f8a65b35d3b76a658f7f7b2da75c0a3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

