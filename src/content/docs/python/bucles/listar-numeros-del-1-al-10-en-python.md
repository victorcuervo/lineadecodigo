---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYS3UD2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIELEKWcVnC1zJXG9Sa8Yg9dn9KnrIEBO%2BCp7wQHlteorAiBs%2FcLlDYXalx1LAdDj9jSAAzHIhiYiert50So3pkKRxir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMAMkyKXnTPf3AHAodKtwD6p9puviVqwwB1OpgiykecH0W6OuXGKoVAT%2BmeCsGR%2FPX7tbmGHsRpLW%2FPAyMTD2Vtn%2F7XQeLeEQWwjAHOiO9Lde8pYmb4R7u2f1qTyldD5Bgl6zKjMK3fA2lbtjsCz%2FMHKamzA37%2BqjuE4cosP9rvH2qFNDo0HCd0RFqcBBMb0y0FRZMzh5LZbzXpiI3XyiGokCcrhBAcXa5ckgsJ2xRznL%2FYlPiDhbjnAqHlhxBI1rbocq7dBhjjtoFaYWzW34JIs9lK%2B9wpIOwrlNrC07nwZWQSiDbcd0yJYEMMeYpl1FdYT%2BWoUaw%2FMvc5o2cZagqEW3T6ZZlk1A7Al2o9X%2BM6tOZ2VTZoXc%2F7NbJw5l5tg9ER9UBpWdWE9jGXLXgE4qgBNwa7%2B7JWWSKayKDR4AoYeD4oxHSfgPnArnJP7mcEB6YJ1F2fBgUm1Ci9JkeMAPn1mT7LaRy210gzA4xEVmq%2FfSj0lGmb8eMFHQvjVVEXkowgyS%2Bkuvq3YbAzePWB6x0XtFYzGTe%2FV7D2HtXxbbkKAp9zxQxhOUvcW7mDpxoqJ1uV0i5bMPXsmI1W7EMmQgI%2BAYey8fK5b6igb9EfPrRPZMdLLRQ8j8do%2BNkfN7kkxNGag3DznP%2F56do36IwnZHEyQY6pgEv8X0smYnmT1MKwJqUgC1L4f5401Ho99mcaDv5%2F%2F9GuSr0CKCRyWXrkJRX54yADftF%2BDW8snY1LiU1R3b1%2FxpyfaiW%2BwrUuIOgqesT9pAG%2FVDvza6ZWIljWwCGAmiRVzfT0Hb%2BAp51OJ6Mpn7zwXu3sU4juvrwCPgtyHLfmIk7gyl7R40O8ZqHQRQ4Jdh5hdU0Qbu971aJIgrAYC4HYs%2BFK6Kx7%2FPz&X-Amz-Signature=2a34029730da6bb16a56f530c8dd099ae3fc6b104c53e85bbdb6199f9031dd61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

