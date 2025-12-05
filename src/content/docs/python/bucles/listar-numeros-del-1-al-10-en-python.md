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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNJ64QK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQb7W%2BGL5kFJMq9qOuriaNyGNaFv%2BwlT2aseeNYifjvAiEA%2BqrEzqj3kUrNNfKqkopWVqNLVNtleOsAr1B%2BmAkyVbsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDB4UctuN6ZFpT2%2FVRyrcA9qD2qNjsS4NDKNXj%2B9Xqi%2BCmeRVCpz1cakkZBct0tJOJyZaftnTxux9wzL%2F5RNdKD7WZDNbktcUkoBvs34PYM3cXpSZkmMoUxHZ10pO56uKIUKRwbA7NWxY4yvkF5nI873%2F%2FXhrnGnUU8dPONaHFxpN8%2BwPxVfwiyTN8zvEH3fmBmnpwEOcXTg4j62MU73H4i3Dzj%2BO0xRwZKf1U1PQpZEUNVBC4SmnliFPEs6WtByo3XO%2BkWKdaxL%2FKSkeS6a8IUgo4LqiIIyegMeUjj9mx2%2Fhh3H%2B18rJFhNrlyE%2Bbv1pMXm96fmdS0ZTNnf%2B7vTJw77CGBlg51ebUZCtnrjvo9b368mMJrpZb9I06xSffXDDhXt1ICk%2BaPOEMW%2FjRGkBwuixe7sayjJ5VYD5XlvRuRxKQPi5I6Q7PascMy1WvOMENH2yyh2Drcx2RUhf%2FxmSKl8GwiUlN%2BvUBcHjyJAvQRpg7q4gfCI3%2FyMrYmkg5k1U07H3XyUfVaZpvpr%2B9oAYVfEwshI7%2BSk18ndvc5DRjrzMlaOR4iCVZ3PyK9AIM2I6V3opBfthiX02Ivi%2FaB88ORTQqnwJi9sVklljsJZJ4ha7qfFNIz5K4QBligc3Mff%2FuxO%2BuTsATFBVjakjMKHsy8kGOqUBbvWyrrwm0Ij0xC8sppAFeZ15or5vfOSKnaPkfa233IVdQQW6%2BM5r4LNpq9rWEh%2F9wJR80RXiZBER3bGzlxiMRSXhpe59jyPp1rIET1t8Coj8RiVlmXqLAHodPPp3UjammRD14tTwxbJMnESIRqL9sKhrbir3nJyiovIuP57zrNIO3ATxGyvUPWDjoq%2BcuKNY3Xg8epiEu3tltMsPfeVq5xK0RLM9&X-Amz-Signature=b947947919b527c2524f9a898d2a7d7f0c7c6a79a21bd5a6b5beca097d9f9519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

