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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNALMLX3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDbUcgF2VP6lnfy57C1OviLywPEF%2B0GY5VZnH46CCt8LwIgf%2BoXqWKkm4voVQpWavkldmeCB2U4cT7DO9VDurNRVRcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFDnNuG449AfUjy92CrcA40ktdsmvQgDARPij%2FJwoktHV8sVM0gkgoz33n7DoFYvUJQZM6AMbvdWiy8W1rEXhhc%2FUzoAZr%2F1853LO0sN7d%2F39RuZQl%2FYU8oqhRmEgzKuebt3ULYTrwOavKJNkK%2FbxUWh7EpNnmZZwXpo%2B0FPkKUflchAqeRcdV633qFBRVNFquV6GAjnpZMDXjmD0d8jQCDm9OPJ44wOCWPVZTWmHDoUxl53xDvKASWuilR3LjDk973fe651v%2FMPrMzN3NOdFnsYM2vgZ34uv1%2BIYumKAacVoeIMxIawa8%2FcxIJ1snfnzc7uK5IVkjjd8fmJ18sENbcLS5rWqS1IGiDt8qMuYRaQYWfM45gNWBbk5%2Bv2lC8LksX0be82Mtf%2FLO6ysIdsbp7pyYvTFkamZb%2FQruNUzkTLVYd6Cu9hZh7n%2B5o9siLuYGFhqFdpv8CosbYUaLW7YYv7y86ojVP3UKdEjn5cooIdcZENFjxagJcKGv51ayNi7cDVKuHMdsGEz2x8jSMWK3tz3VXWp0H2hfdhXNUn9G9jMyNYVxZciXsoHuHPUNP9ghiakjY7P990nj0GGDs%2FEGuD1y6zMwhAO4N8td4LciNZ4PtnGmftJmr%2BBVd9dMlynD0flf68FQzL2hTaMKu%2FxskGOqUB4KKVCVhn8n%2FpWhxr%2FovtM1jeV%2FrhSChuTVcGSA51GMizNO6z%2F1S4N984kqoo7hbnyxGYnvbeusPCKOl0NSD2lF3n3bZj0G2boY%2FGncTsBOc%2BAMeD5H3qHaPRL8sj%2B5LNLl%2Fr6yhqCZaz4QTQrdjzkKKCfOsc19sNosFqjlDC2OtywuntnoKpLRVMbQ5UWX9Jyi3nj%2BJ3w43WKaX9%2FRyfaoxwRorq&X-Amz-Signature=847ae5d0f273b17323385aa36da6de96d8d2d63ba1ee54a30208c786b1443b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

