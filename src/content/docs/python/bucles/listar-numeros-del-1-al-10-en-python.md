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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGX5Y4QB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICx1wQobsQy4nscNKKswx%2BSLNlwc6Sn6nkRbzUeMVywMAiEAvfOUsrTwH4db5KgQYWqjxApbGct3Qf4DcXrwgI1sQ6gq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOLv7xWnraNRICTknSrcA7hTTusH2Ih6EGkGoecNXfWKoBEdQ%2BHtAl%2BkQIDY2Rvzpy8mPzXeC5Bl2DgDl1QKJS4%2Bs4qNwIKoyH%2BcaaHe6luhxv%2B%2FrYmL2cXb4VS%2BmPmOP%2B1MzZssIeVtu%2F0K87n9X0L9tWAYwAoHzFV7AlW0pnmjDOUd3H%2Fk0l3yzfOW7dvNIzQSZE2bJoYPd2LI67JX044g3ccbsOdHgelO9Uak0vXKnqlovQs1tf6e3xvLeUc6aE6PcRPbLjvGuY%2FRzKMTxOhjqEhEubCDveXpX6zNUEPor4Jxwbhnc6Dcy%2Fd0jUr7t82KGzC%2B07vlf5Q7xgSaZUXGzrHJU%2BM4GSXRswL0Hn0TsMbaucDiero2tJdu1%2FIO7jyKulJTah7v%2FmokIuWLoBVcu%2BzXaYmqZMPfGQbND0wq8EtyqTDrk9SLVJamrhxqD%2Bm0ngJYajAiXmBwkgNjHtTCnRL%2B9YOTwR15nSpMucekapJk6QCuKiQF3pOoXs2l1kqlH7oYTFfKgt0uTRjozDcNgQ1s5ANN9su%2FcdUnplIg0R4AmyRbeuDmzwgPAPCR6vSNHGO72MqPNPKnRZF0MyhUD7gXrWBE8VOmuXFUtMBgmx%2BHktuE9JFGdpm0O94Ul5KZ3%2FW9cI87L6K8MOW8z8kGOqUB6UUjU8WenBHEDYPOmhT5MBT6gpNY89n3UcUVGBg%2BvlmvOfMTn44RKSnRl3DU%2BlUGrng5vIH31UWjsiptzt18dOYsOQksAm3VXjrbibJILk%2F7nU3FgZL1jdAeKJUbqO6KKwH9KsZrbuUhva2Wg%2BYYJ8KATQBsFWlH5LI6eKVFUET%2F2fU5H50sV67NnveTHZr42W%2B6eUVODFQI2HT%2F%2FSWziAsx2pH0&X-Amz-Signature=cf37c41176d04010f7630ecb17bbb518dd91722742c52709d29de394cccba186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

