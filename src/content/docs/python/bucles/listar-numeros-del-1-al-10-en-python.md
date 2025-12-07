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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMV5NVJF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5qltAXmno4gEG%2FJ2AI5yWv9F7hiA5Cmgmr546Pl54jAiEA8K%2Fz%2Ba3jATcjk2xCNlHP9Em8ex10KJY8WFfLY6OstCMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOuMpMdTZAh%2BN3ycircA6WflnbW3gFthacCdVFqLVA%2FnCv1XT4w%2BVi8NObMDy088AKY1kK7jNDAlffdA0OrM7rAWcR0aeOJvkVSdwI2r8zbA%2BFE5%2FMgjeAsW%2B2hPdh4P5zsx6qVy3orS4WA7GHAdAStju%2FllwAXSgPXlKc7K%2FqjqkI5FDdkfC%2BpeffdjDtyIZT1%2BALhIxkZrzJtYqg8xS1InJtoVnwP4eRd8apnnK9Dl22UApmI2Ejf%2B%2B9oRittCbMuAbuRsVx2RXEx7%2FdjKW75ff9ADkr17%2BzZww5xEyJeagSBEAZ9%2BrdBeho00h%2BABIfwdRh4q4%2FcDTQO3PtnBJUkOTQ4ocuI81owpF6AybDVby%2Bo%2FtHPMSy9YF9ObC2tK60IjSLp4kXTF9bt72VP5uAd2Wo6EyPy81UOvOsJNyS7qdT3u5R0fp37uozdXmtZA3SWHeFRjzzVRTQao3xYbgdHwaeZjCJH%2FiWHuiE5TumcT%2B0Hd4IeUr62HaGsoN4vfxCzO%2BGxCsLqldto8WrY913GG349Mkaf1TksF7eQHLKwHB4yySIMQJJYCeDkRF3ar7I4k0pBBMmiNgccuaWJzg4I1B0ixXFQNSoesOCbnNLQ6MDIv5hO3WFw0iSbP3Kopz7HUK2vedaj3UmaMPPG18kGOqUBw5OH7fk2HI3uTV4HcmAnLVaCJqXxYTEmDcGlyNsF3VjtbWdPGz0nGGrAf6xqIfl3oKw8zzSNzamceETiY%2B6OJiC6clR9HJC%2Bj7sSUVAHq%2FSn0IiINoxb7T4R2%2BRsmt0YoC4abENx6JBwtWos079Qph%2FM1pzYlCLJ3R4ClpFo3TOqk3Myym1WaxQ6daJMyMJYJF8x4HULL7XiDwnSzdP32Ts4l5en&X-Amz-Signature=e136cce8c6fc18f220a7e71badb033eae352dc7290073cd85ea972ccad4692e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

