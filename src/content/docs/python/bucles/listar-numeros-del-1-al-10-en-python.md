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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBIXT3H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBt%2Bd1LYu8UiMPxT%2BhirOGgvel2vZKyyhB74ojt315fEAiBc0IWqf6nYR4bvIYRgN6JIRvPGRLMLIrzZzoxMrP3G0Cr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMe3yesN4xwJyRrL%2BqKtwD%2BCO39utWJT%2BfOFcZWtRsxtV%2FY%2FLGFW5P3M27ZLl5BtxaE6R3J58QnzrLhtD1H%2BSShAC2PoJzavmnrlwQU5DA3fsawAcwYNPc%2BNefEpqV1iUale4G%2FnRwO56dRuG416dGNjaxddkM00dqUJ21fTluy%2B6DhY6O4K0Gjo5NAAPPP4us9LIk9k1a8Xj5AVBeEVVZpA93EdqAdmfv6zHUroooYB0GsdEJj88TgbZOeswaKaDNFxsT3kcOQzdumiatBn2sVZE8g6Dzsh%2FamqV2qA%2FXOdCqUh30D1%2Btgmcjsky2A0YKOhzk2R%2FSCYDK5E8LMPSaWwFr712%2B%2BsGBx6koyOXJj3ITFZvB7TS2jCESuQd14e7hcjQTZDGmz8qvA2IxRCaTb%2BERU%2B0qfGW%2FostIB5%2BeauQ45Phy%2F5aTKXilPj8BjfwQhnosSaOMOxbr2GBdqmg46B41o4FVYEKHjDIgxriYGls%2FJqpYi7H4DpG%2Bwu6ZRt2dxsh7k%2BXBnrIVhssUJvkymXryMgRhlm0PUiSOkRF0JRZICWLSp2hPCpGx0aVTz%2FM59cb3ut%2BWroTws2zkZit8IH7QWv73iRwn5fXHu1hvpHZ7U1y9lOk20Td7KYXJGEk0spcaKegspiSd9vIwkKLGyQY6pgFe96rnYMobhavlmrMOhiL053uNx27yK8Daj0%2F5tz%2FtzNNC6wyT2G%2BxZaI2lkrLe9F9NgUyLIpLyG%2BiHb99OjxXqeUN2JdzTWVREzvnyFsdUo1hU%2BgQhqdJUFgWBPfRsvKd8OrB2LmBaFiHCuujTPUdcESQafSGM1DeNGHj2qFGIwx3jk0vZT3klfjfNoDbD1%2BRKQFANz3nf9xBqcgQil6MgaUMX8yf&X-Amz-Signature=0c28e89c88feaf340139399a326c4ec00e01416e45c821791db448c2142f15ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

