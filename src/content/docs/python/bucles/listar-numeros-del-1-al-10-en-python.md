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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IZQTK7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrxoTsqvzRI3kbWk9sBzx%2Fg38s2jYU%2BUoyJ5BcvKXW%2BQIgZURbJrRbfg%2BxgbFbtn4h%2B9CYIyst8DpwWDXwUgqw3K0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBcbV0Ih9Q8jDWY9ircA0FwrkcG%2BzLqF2ANlXeukk29qIYQR%2ByS7Jv8YGP3z74AEID6%2B92KGW3kHcpfJXTIkeyTR5nKY3uKQK5frAcIPZWTEOvMb30U6dyULqvOVz8eiWLipqMrXHpBpdVeiPJeN64zUE3Ps9xIBCJam%2FCpOzC6Tz1I3%2BjywlKxE9YliiHijrMc12gPBbKZTbqzdzh0f0EjD4I27jtrF8jFrnSNzqg3By92heVRazyFcHZ%2FMxdy1BpQd7hn6tettKCPsgGVc4mRFQ2hWTSWL0eDR6eguhD5ZGmrUCOYgijcjiJYN4s7qVvzOzusHXkuWRlGHpA9S04%2FS58AOdat%2BIYBqdi9g8eWtOCAW4r%2BsQHA2b8Yq1pk6zIbxHcQrR2V9A7jv2E%2Fjpdh3cQHYLVRbq%2F%2FFFJc2%2BfrI7wl7B4mOS1iW1ra5nXurYmz2BgtVBYsbDwKHbZbHwzjr67L7kTQ9sxB7R46xfLhvlBr6j8LU%2BiGwjM38992Yu7YwjxkqkxrNAbimpXt6Rs78gmXKU9dsCPOT86od1tMnvSPvmglQm2L6m5d8PItasDfnuSov1ynjweQyJvMLMbigb2XJEpAlLQ4tt3ZSE%2FXuyckwSVrHDPdUHxSoZXkUHvo3ejf3l0RhoeLMNf02skGOqUBglqcgyvWEpyMlno8os0h2wccfcRj%2Fszy9J3%2F8hqLqPFRZIe%2BKHFNCIfdGd3Lt0DbT0%2B34GITHC4gEeym2UDLN0QibJcnh1Pp%2Fqx1S3V5%2Bemse%2Bzht32DzIBVz1W2RGa56kIGn6ygJkP9wox17aX8SP6HggLfYCfia3VXYn50PMIPJL36RtIGz%2BR9pRBp4%2F6h6FzKQubmoMW%2F9s393hi8HRCzv3r5&X-Amz-Signature=b52231ac7e0a672667e6653f5770ca600a108dbda435a4291291a40047470e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

