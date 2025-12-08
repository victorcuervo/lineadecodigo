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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUN44UHP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWp7CDZHFSJ1H%2BTXLbgU3I7pPCKhBOTudB299822DcFAiEAvrGMtHEKoxbB%2FZ9h6tXpOCVdxrc0WxODwvQ2qcm%2Fyn0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4yoLCv3mU91MVxcSrcA3z5Dit3ZP%2FWEHs5gi8mcDIUKeJW4iKk61RLIZv6e9Iwr1uf5VPw3QQ2irnyAh2mnl7vSMl2poXjQhp4h%2BmqifYP05pQ%2FiydQsCG6RqxkVww30iqi%2BfQ9n7c0P5QBQqAUzqMghs%2FCJYk8fpXtTvYcG6xYJDPzYYF%2BU8p2BpjPZRHlk6qMg5n5NMGW9uvqf2V8H%2Fi0yYZiur6j1Fqr9jOfiOi4PoKs2T6MMm2V7WPv8XZRs4h7TEEw7n%2Bz6pW0zv9v7Tsl0zynAFJpugx%2FYdL%2FZIZ5u3wTlzz2q5wJt6nJwAa6%2BTrfHErpEZ3Ze4Genddwr4b%2F%2FC8Lj4MmomTuJb7%2FJPnDlZLq%2BvpZKN%2B9EkDQt%2BI5%2FzvI0wiv2BB4unzR4ToHwaK9KflaJe19YygbQPWnUlo2YMZdHBvCtwQXYipaFRFs8BUKrJZFXRlzqSFcmmOYuWn7mthKrIawYQjJ5X1CJLPKfUEJzqwMEFk69dL%2BeGhYnSskfNDCvn4qRiFFKtcMQvEjcXZNt92c4WewxQNlKxuZQsOPzy%2B3zctNhl1ExB5G3TRwIn94FXgUjbKRTIR%2BqmuaCceaSeHVLApidCurHRGebB0%2BMxfC55oZ1i1R%2BQ0N4iVqOxoImVPftOIMLu02ckGOqUBLDiQOAv1pUis7TJ8Rq%2BK8kBXcxDFxo%2B0di77DBJmh5uY%2FC9LobagWV%2BgSVMs%2FbFhg27q7EH%2FaAbTpcD%2F4nm80qKTDXRyN4E0lt4b%2BTRCasDGK3ufvk9dyBNJGB7pUeoISYy0rQc5KMFjWBdRqPJdbTxTJojGE8C13OOOzB83cK2i6a5YT6GMUQt4B96yQpMgsTav1fRsa0zhvP%2Fxih%2BVN75drI4w&X-Amz-Signature=bf0ad8ec0543ab98909cab165d3159e1f9dcb16cdbe1d49c1ed2cabf72274f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

