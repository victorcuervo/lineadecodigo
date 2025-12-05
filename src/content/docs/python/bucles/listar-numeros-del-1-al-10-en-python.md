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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TOWQCQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWSWBYqWrB%2BzMEiTvuZAw7l5mAcqYIe7AYwgNzwkaR0AiA2rPPzJcRfJqeujMmmbtJf9I18%2Bi18dkvCZ%2FrdZapfRir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMEfnJNY6liBQZDybCKtwDPJ9dQKdDAR%2Fn1SEFs1xQUOG%2FweNWc8eciQTFRfpb24Mcc9UuQBeVYNIfHNYPI3FHpMU3OLkFr5RqfNZmD6vdsIgr9OaQPSkQ3zohbE95B7%2BynslSRLEbGkXQEuRehf4wGUWm58PPM4aaBJTsRhW7SrmV9F0Mndot0ljqdmVNlALGxpUY0gmHlrAwWjE07efNgMNOz3w%2Bng0lDdO1TINnIcF4Cxy4C0yv4AS6toeQhtOprtWYXATRmfihw55oAHAZa6wFEZAIYFAks4y0nW2duVCelztTwYRIN23fLdk2f2XzBhbxVP7bUPgIuwMHMFT13n5%2BjFcFSdJmKZncBpfOS0HTQnWVFKT9X0fmtFex4Y%2Fygh8ZesKQSlEQv7SaNW0j5zMcjM9O6NMpIG0Bt3hHKpC%2F7q%2F7cssyBKCwMj4Ecy6ulG4Q1e5tVJTPXhhphNp9tURN8BSijtk9B1D8OrFrI6eq4GXHKnO55ft6ENZY3dieuAoGVjVRVOwI7J1N39WQSTDj%2FITldBqnqCeL8%2FMMjihr%2FoN2ny%2FKAaXHtqFK6lW4PfPr3SHWnDtK3UTCs9%2BtjnIgrRBGqq2TcSP4489utHQXd%2Bec3AN%2FFMODZ5rqYRTWJpkYm3h8V%2FUKiuIwkOzLyQY6pgE9iW76yNztn%2ByacSsv6XzSY13qUVnLXE7XLqqU%2F5mIRAzwRKiBsKOtUvTShrLiMM8lTIrRGZFnS3cUJwE4T54PXi6MwLV8aIHMYuS1CWTxzHVaCJdgT0twtV2WRGJMNubWaP9yTE7BfxODcoMHTfRWJ80FhgnhIJfxiogvKD0Z%2ByTB0FtZxs4CpRP7Zu3%2FTSZ2S6TYOZwGFkWczyYD2QCrz3Q%2BlDRy&X-Amz-Signature=a33d44ea953704a42017ab029464d63787c15917ee38c31c13306c3016476e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

