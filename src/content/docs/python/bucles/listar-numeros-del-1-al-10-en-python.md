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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3RYDUF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHA0DHA17pmaSWhxXxN78BP3bpw3BNdRNrv8KJq%2FquTmAiEAhYl1zcMsAEOm1%2FaWpHdlv80bc4yqbfP0mUBQOnjSwDQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOSAIoPOy28izLFYSrcA31oJQ5bfAVP4nUbCaTykMRINRmaQNGFIrNp1VuH41AglsElLitgp7s%2BJwZM3EOYkhWuqb5cD9P%2Bg3sU%2BHbxk9%2Bd0vl%2FAZT%2FGJbLEdmF1pQR4FTgWgUSOowk6owZ8n38%2FMpWQiUBz82Jg6L2mB6Ql%2FbZCn5au3fDU0zLaS6Gvs2%2BKv5SzP5x2ZhdlLnJtdQ1mQTTxPF1RLNInRTwESYbfHuBvzXvDf1RlrXHpEHvgRxAFzkDIkqOldn7UfSMZXscJjFQQxe8mTehkkFXQGvmf9zMH1moviieyWMvfwJ2gpsa2Cq14zzNo0HraJp3Kffs%2FdcxvV7Cgvjq7JV91FxVhZp1JuI0IWkk3xyRYx%2Bnq%2BAWTjEoZYSxV8FNaeO6inj%2BIz1T9qqPiMlen9wRGq%2B6UcybGah6G05zypt3CnLYq8zu7%2Fgb3zD5BEX7Sjv2K%2FuoqvAc%2BFUM%2BDuWeQcjlzQ7%2BF3A%2BR7ko29uvr2TeSrz1TttL663jh1f%2Fh7upYYwmdoGFdXgRebTfX6ZQbk6%2B89%2B30F%2BpEnqMvZXuTC6J5VScA7DrPzQ7orQOIgrzvS95S5UlYZhSHapqLOBp4iwHg2gQDX0CM81w9PtVQQ6SHwUj24G8r8GlVRWCWNMfVy5MJ%2Bc1MkGOqUBCPYl00AYKAb2JF2eo%2B3S6Rnc1gttGRMuh2J8U45cKlt%2Fd89L7pgRvH3CbpHXtd3PlobZm8imiGnNbn%2FUk%2BeSf9JNKUxg3rUcW1kSfsMtnC0H0AHLP8vj86ey7kM9twj3ENDV2D19U6eTKHj%2BSSHJC40AT9Bf%2BpYKrHQCo3A5DMqO59EkumAO8s0a0VVqnwV4lWfc2%2FD8OA52z8w5xbxVr6fy02gS&X-Amz-Signature=b83a8a93f891b3085849c7f4b6443a7bc178a607c43da2edc8fb9cf59a2d8ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

