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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOKW2PP2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDT7s7AUpuV7J4mEI1Vow9PfyY3ZfeVB8DBDFf%2B1kLP0AIhALXHuO6EsLCiKOHbiRAx5wBTD64drH0W6q2BHCkrirycKv8DCDwQABoMNjM3NDIzMTgzODA1Igy4WWYOEoQQzB25FWQq3AN30Uej7KYtUDtD6L4HpTpk2JpDHPlQCwM4yLblL%2FPLlJwwr9li0C37xAAdTCT3lEziLPm3ttHdghYbiUn6jnC9k1td4uM0Y3kV4v7NxPm%2BW4Z4qegpxLAv9LkZ52OEd2HjnMjnKgPWIGHMpdZRGKg%2B%2BtDeQQ16OsaXPqjyO6YMrpmzNISW%2BYoyZ0MtKS6MRFO0cutCxvk3kPJumkORtgRa01C998DkMPcWEeUsvovmWeYFVvBtf4DSJ5sPe3o5fDBt%2B2jd2xpyHhInzfkAnUuTKzF17h35SQXMJrr%2BwEaaPExsKcdi%2FbUDHs4F0JWYUKVBPh8QgfNIoi9WoGVJCMwnCfpc%2FJ%2B30oQdhWxC434ViLQpl9OPUHE%2BlMOldEdO7agz1195fsded%2Bcqfe8IS%2FHH6ijYyfHqkiHfCfsfaKw8mibKH2xEbvaHh8Yy3BDwUmA%2F0c3Ov9xjhFm2XAANYolhf8QEj9ncyTYekjPiQoRkh6FqCRqLwrtyIJ8eUA1PkBNG9Q1wqPDX9A%2Bkrm%2BiWra8yAQB0S3q%2Bb6N%2F0LtVzSlDahH68WVrqLE0KbHgZpC8bt%2Bo4r7MS6xynTs11CMAa48A%2FgFUhFiwpCuDlgn2ju82LDaVH4SgEL13VKY3jCL9cPJBjqkAZr37e4lFZmPC2Nf8NdlTfLZq2o%2BWy6AveMyu2Y088Bf5N2giiNBTLFcw32O61PQW579nFyyraviOhrDYY8iSZi2ZYJrdb9Wded5ummSucfdKx%2BdhHSXxYQrvcLF345OIx%2FmnfvpcLQyMT1DWZw5sw7EEtnostW3q%2Bl86ViK3MQz05ua8ToU9xAtuec7I51BR2rnVmaE%2F%2Bv%2BrSZNY9e1Y6dgh2eI&X-Amz-Signature=3066bf769aa7cad6b7d6db9c0df940cc0248b7c0c9ecbb29c0322bb9ef77842a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

