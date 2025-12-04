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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YJW5BN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDGiyoAfvp47IaM9flMV0bb%2BHpCJwrc5Uef7UOHrCR5TgIhAN8XXf4br2bw50MZ5QqzcnyuV7mTXIqwwJld0mKglBO4Kv8DCDoQABoMNjM3NDIzMTgzODA1IgyXB3%2FQxPh%2BhRZjLmYq3AM81F72iL2MENedJLIdfLBwH93lVsBgopMWc8k6RB8NUa%2F6fejmy4%2B7vpHD9G4vlyYSfeD%2F1y1NaAouonookncH22xYY%2FQRLoHBwwMSUJi1Jplmw8gyqrcbyYGyXh3IE%2F0UWqVK1TvdDipP%2Bv8APV8BgehaRcppT3UsD2NQ4jToKJl%2FtKOvncs0actrHsbSgmQp3hj9KJWCx7l0DkwHeFQeiCY%2BotNwA0PEK4E%2BBSzMBgQyLApwgaQjMOaFiaNA5yFUUgJww2VS2MmGfLwxzUNzk6H%2FUXnvqbRXAogLEyr%2B7fZyTE0aDjh4iMY6AXHpPXXioG4rTKccp8Rfq3%2F9FGTIUysHpKjeWILtXltnmZKQjJSK4z3HctJNPaSwcA%2FPPd0SxODdF2%2FnMYPPoypja545gGYFdWtcoao%2FaydE3R%2FwI%2BzIp7XFq9jeCtvQqpNmv%2Bkhrbm88riOhhg9VuRioC4badDVpFobAmxJEt68Lj7ny%2FYk3rWOHaPrp9Z5fZ%2ByCbWnJtrR1ye4n9KpzHnF9cW5aHFhNFtlHYaYK2ccfIt%2B%2Ft4%2BsbcMuK%2F6Fo2ZzyIkaNfAVEPMcqWJqthZBFaVAkCgVzYUDJm4m%2FkNmjFyGJ2KRg%2F%2B1iXzxJH9vBazFTCutcPJBjqkAfJku3iqj5v9cieAqggUqRQamw%2BBtRetgXu3p0LlILlOEGwTKUIOIDRPze%2BgxetrycqiiT1TQ07u4%2Br0YEJXgWXQkncFxTsswJVczuoP5dGSvg9cLDaJYWX21yXkyy%2FdXogi7F7vOsfCBsutjrKdBgCO0Y6YYwHpasOthRqkanM%2BDQqst62BHQ1IUp%2F%2BIXZVjBwcLCHE8czBuLnUiRjYpxqNY%2Bot&X-Amz-Signature=e27f561689e419551c26548dd2e57d74e571dbe72a15643f4bd74b73a4106ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

