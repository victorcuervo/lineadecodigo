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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7U7T6R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC1e%2FXv8GZWjOS8RNGGGq3N%2BQXMk4g6NgZEs6320DhaAiAmqOK1JAjpKY8rzsBNilwJi9typBajctoIZ67I1YPEHCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFBCMSm3gtcj9Y89sKtwD8rN4BfeMCu7QN0MrurCSSvXpKxE%2FtGauA7r0gts3qw96BwYM3%2BATsyBbnxx1IOn4LxA%2BAsAtN8h3Sbr7FROXebotXRwMpaLBUDscVYCd7%2FzSCXLmi7eZzIwd1FPZ5MvkzaV3gtBdXXF1z3B2FKU9NAZiuvtSyIqJH9Edz%2F1xKrF1UcMyJC1vbfJAyF3tPoT9ubSSHl8y2vCcthOtTsDQnPyRDvpKheovHiLUzz8T1U8srdvU3EN%2B%2Fry%2BMW2nVUkwFKnUrpZNM6Cp0S%2BV0j%2FL088quq0XERVQ5UBKdQRTA%2FpnDIEx7Rr7170R5tTv8NznAYQ0w3734UK%2FSxu4YUxwUc87%2BLy2aI%2BwCip8rMIcVIjJGeJBIGXoFk3PqTpmjBDeC%2B%2FtaxEC5I0xPLe6whFodL3kQsHnliWVSGhBt%2FuE%2BF%2BFsLsRMrnY4Rdl%2FlUvD9%2FNL2F53ZUUQ%2BCxgnDdy8lFCc08Vt%2BAQ7cnMXWawbiHHUufVaWylSwo%2BZgNjN5C1zgW6sezorYvGz7clW7vtbd%2FLRMoUJoWi2j%2BNdke3BFHEkekopnaSgyuf%2BxJB5pfPx%2Fm9yQvAVnLp5gMjYm9lkLkxsMI%2FJWHlV8Fq0Xsh6Cr4DDNqoL%2BRfxLXUBgMD8wytzcyQY6pgHPf2eCFow8HdIIxcWHh8OAbRqLBWM06i8ItHTEgHdZ29DuT06As6cBonq8VDxMa6aU8wY8PWNrKVd%2Fx6wfL%2BalPPkK3bycBhR0Jis2U3t97%2FNLLhY3opgetvfsOdhY1qj%2FTOpUUPGZeUiUTfXvxpe%2FUNSAOt9S9pRdlIlLb6tGsx3wlr%2FY1CuHksWCSk1h5jdb3eI%2Fa6HQpeB5jqZkqkigEd8NYRsi&X-Amz-Signature=cbd28a034a07e2a6611e1f709720697afa24067b976493a0963643cedfa69674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

