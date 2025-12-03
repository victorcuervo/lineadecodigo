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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABGTZNH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBzLZhuq4WhlOFrH0SNUSqsJf5dciDe5BRBCpQZHy1apAiAbXREgxoqrrBZaYp3ghZMTGtyQU6J9kMu%2FEr6eEAI1FCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMNdgSZfCRIioF2bWoKtwDiPluGKT81nsShzLxALtCVDCVCvsNScWyhiqEsUhg2KK%2ByTpO29SeNWI9SxddE760ab6MikLV57nghv54lqxjNUgoNDpbENNRqoIjVf8qspFPSYcS8GWxUDR3bwZyBCRrGOU4nG9%2Bqhm3Yw70vlgpuyBQtGzTXXsGmOIw2SN5jWnK4gkb%2F8zh3Sf59DBY6QIdwJIbL7nK7YWBgtvje5oxpg6GCgTIPKcGF5wnPMESTUhRIojp3N2CoJ0oe7uFD0S12Zff4KWebhsevwvsX23nG3v0eGu5hB1lKL5%2B3AUIIl2XKkiafwxarv9m4efIGEl0KTs5SsS0e4wS46KADebENAzNuAhvTQLCnK8qpUIUj%2FvCqqZE4ytl6OnZBEGutBKw9iiR5BkcPUnB3y9miBbAD90Qh%2BQnD5%2B5I%2BKRVLgs59I3q92EZxWggE6IOoCqrBbaWZQ4tZGT2%2FOjX%2FZEXqYYij%2Bluo6hn2DFeyCkz%2F%2BwJOhbEkkxZtr8lxdjPW%2FsQu6XhlhRmCBP%2F%2FW5RALEt8FjPGiZ4XcP8isUg9cFZ10Qp8A%2F6%2B2Im54%2FcrC3scI6%2Fimpa%2FTaDPxKxcprcsESm3NSArz%2Flw2TiOU%2BMfzt%2Fz%2BiEQpb2Izhms5sLZ%2BzyLMwp5HCyQY6pgG9Rp1PmQJwxb%2FQuMW%2F0%2Fv72RhnYDN3j8O%2F3997tWb9koqE%2BbYrdTsCg0TMRj7s3nEU5TD0GpalYtCGcxk%2BIlwEeIXpl8guSMA0L5G61ch1MJrVX7sGv815D75BT3Sk%2FROZ7wtlKs0XRs57rPsBla9SjM9e4qzwT1AdItmIgNdAKe6My8W%2Fx7sOyURr1yhNO%2FvFh87SUCoypDmi9lxqf0vhkgsKfT7Y&X-Amz-Signature=13b97010f0a88ba5edee786aa330c56d52fc49a536eedfe9515b1d4671661fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

