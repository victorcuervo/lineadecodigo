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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKPXBIB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7OTspPrCLtfhL0f6JITYTXkG%2BNDQ8w4GXU4F1ErNEXAiEAr0Exzzs%2Fq7L9%2FGQkrpj6CIdeZupk%2FPtam7HwfkGVy%2B0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOPlfDUiqqVmzIhcBircAy1uucR5lcdzD1Dn3v9ipHMsjMqNvOHZ%2BitIuATdW1yrirHtkFG93%2FvZAZ3yXIxAuvc5rLvPOcBe66FwE%2FBYBWKd1%2Bqs%2BUkdaS55tvFS%2B3px%2B2MI7NJM2pNRDDtASOibDlD54c8KOb1uVvfEkQGmQjtjov88yMK3sfeMavl6iXEry4SU315WYPUpM4%2Bc6wLR2DtQ1sqSkoeQSK7bXhNUDfGGq43eY7ym8Luxro%2FoB6uCcHgQuiSnboif%2BZYNJHL%2Fdb08KuFpgOjrln2huV4kmpPyxq9F7U9SVWYyMx7i%2BSvEQrVKgRKpTpg%2FVm8gfYnifiriGqTheSGK1Mkfp0gALT1PpzT0nBSzeB0AnGPILz0IYKyv6vAnHec14fO9jAKtwpFiwZsbB5lxrBBRvLHRO8%2BylYcbVclEwXtMHRh6N8Wo95RJG7OuKSolAMdgfGoLRCV2SANcjTK2V02ZPwyapoOHTwV0sgA%2Bsmh0OKyGxELJOUsj%2B8U4ih4sucMFxj2TdC0v9QJG1CjT8ZqtW5fia0IoRGQmIsOfiiQHB3W52mm8P3OhuFjGl4o%2BhLJnbTeGfqNooqzK8R8p9Jimu0QFiTHjv1v4phppBki4xuJJKNUeON4oha9ssY0okg93MJ%2FGyskGOqUBWw9dHLcmy%2BQ0PlX8U8Ab2vhcf9oeH9Ae5JU4rEybuksuxlaqPmtK%2B%2FtpadqJ6WVVsC69%2BVNZLH9xtqxiNEWHIiwjDQkz9%2F16T%2BjCBe9FI4Cd0UbJ3a4U6QkiO0n9inezQYWFfRZAnK6mKR7b2wS7%2F3Y5JxoZciDcSU1ui%2B%2Fx7jdp0O0OCDbcR%2BiHsZ%2F7saSzvHAo00VBIr%2BxhYrFHkrbsuyr2eza&X-Amz-Signature=51c7d21ddf59bf9fe706bc9157f19ab7de77475eef23dc5e5b0ee090da02989e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

