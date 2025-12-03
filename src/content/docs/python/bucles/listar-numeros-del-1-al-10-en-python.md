---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKC6QXA3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDnhtq6XJt%2Fdu3HqbYA9CTf4ciamrvqAy2GY4hN9khQRAiEA%2BRqs4xjsHUi9Kk1pTclzevP4k9g5PM9Qiy78zYRYP0Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBW5b8OVxtbU%2BEBkuCrcA4PCAa%2BBrUZJJ5PR2fVQX%2FgbYMf5mPOakrFs4OkFzJaFdKcporNOiN5nYOMh8XpyCn%2FSLhdmY0A9uNrG8Q7zCo77qJNxM6ww%2FO4Xn6FLDCQDCwXCEdMOySpG8poN%2FoASioZJUXgP%2Bd8DpVoEl7GWxJaoFS2Rj%2FVrJc4%2FaCLc%2BM%2Fd3EmlIg04%2F8WguUrGICbursDhrewEwd69VOOhvRjWSesk22Bfbd9et4h5Dug796LduKl1o8RNNlwFvsi2Ud%2F4sUou29aisv7K5OEcbMh9NLWqSshOdrI8kb%2F159%2Bg0G%2BA4fQoZ5zAluIPf6QXhbP6OfyzOvM2gicJCTyL8Lz5L%2FuBLlDgAxvittUmBl04QNuc7EB6ks8Y%2BRqPKLNzYP%2BcBGbQNGcD4Lbivp4md%2BY2UGEtyxzus82BzfrPtkQ5CnjDEwUMrROIIofwKP5mK3ULS01UmeTKU0naapJecSmme%2BN0ro2M4wj4KC%2FQrDJkR5TCNEOSlUHz1sqJzWEfKNDnSpZgZs04f2VCuKUUPjURjCd8yy3jgvNv1laOe7S%2BUVTDn%2Fd7ioAso2HzEon8o8k9sKeaQsYWrY3NgY8Gl6BqitUjfTg7u5cp8r6mlAukQJ7A%2BnFvnQiwWHBPDVYTMKvdwskGOqUBSttmwyovWwcxEI23yBtsNy8MKyN1mqVmi9kfDSn9GxE5A2nqDVm9bKIUKbABxaKhZ4WSDq3JLFUb35mRw%2F7NgAkjNQgb0c%2FPf83beLL2ROnE8ZgzpynPniaPocgQoDy0ZIPnbRDZESA6VLvpWzUb6ohdRRozXptpbb7wHX6gLWOyvAu3Zix%2BKyNr%2BvbvBdE0wCOAQlOfWYZHYsGb%2FK%2B0PA%2FLsguV&X-Amz-Signature=05259f037b0e831f06371022ad1db04ee7f4934c8c159c44b930cf47b6df80a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

