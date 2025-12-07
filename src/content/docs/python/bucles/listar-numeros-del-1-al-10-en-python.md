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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XMEEKBX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGKholwNFc%2FwMZF34VPl286BMnwQr0fw0Yxi4XXrOplAiAmaknl%2FbfzuDuZCd%2B7XuqfhCOrHc%2Bm69ihLELi9DYflSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQbbgdLSKS2Bbzv0KtwDHjU%2FTUH1WJgJIiI300yKFijLthaqjx%2BIOCLbpTXAQ3EWwutThkfDNvL%2BTT%2BkVJXTx11h5B7Qn0Sb9c87g5eoY6YUY8iTvsQvX3lfONN1cWWWeJ%2BZcuMSdsr3AMzznR9qjRLGw32H2dEn13RuZfjuiRcjM2L5NrT59PNRQTqTzE7gMUMW2pUVja1IgJ7Z8kRVRdcvXeQhK4K0tDRNB2DHHxZHcH3ma90dGn843ooU75tn8KGrW%2FoWNLLztkeBmgP%2Bf1Q2v19IdomABNxktKHBK8XTXzdJAEBt7svN7iZGOtx78VuXSvE%2Bo8HwFJknxj5gzsNn5WyagD2OOaeWObS%2FqM11h3vbH49wuniOXUYqC90pLHTH%2BCZfmjZBlFj1CWH4KEA6Und48mwDFaYYNvwZFipIUK1zf2%2F3YC1NwmD0w4W6ETcPqMl8mzpQuaRDUygfKTNmA6EyP1ey9vu1ScqL5vSCG%2F77IJI9P3%2BUtlgQH925DRsHAJ%2BmdyQ5r%2B94b7s1hrE%2F728Zg%2B6eBgFRPb1E%2F0Z6mZovt2UQgfo0oyU3oTkjw55HMmvCndRuqR2xnWch3RkCyOowilY82Gt2GJQK2IPrY6swlPDML%2F2HRDHiNxozWjFb%2B6VSZQdaEhow4Z3UyQY6pgHOMBp7M8%2Bsx6lcNJ2gHhjidSJzs%2FE4rA7EEX77N1HtM6lTnXsgtxg3qX9eJTXpafNEhoJl2mE%2BBy52urQTMMOug9m81jCL1ef%2Bq8ERhq4Ay7lbNmpJhWXvWWHfYl2H6NlVBZH2DXwmxJ3xCGwZdXdWnR%2BOndSW9nxxg%2F8RmoiTOk8VL7p7anYZQMPuYBTVHcELpuZfWKcb1Vqm7dcV0aKf1NlGB5MW&X-Amz-Signature=32a335db2408a79fd0b7ab0ae116c8263af7628677b39c7f3a03385d4e2e002e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

