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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5JP7AO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICowfGKadPoutUJICcp8sVb0P6tOwBgrrEy50Uj7UwI%2FAiB9qBHC%2Bs2x2E0P7rLgKuKEvt75GWeREHBsYLZE44hLmSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMe3EUi00bmT8xTuH4KtwDN7PIZNU0T%2F8jfq2eepmJBHEqf3K2vlq%2BW4KFcPu7ljXF1zGnIj7TqdLdIHbwrR1pymSo3Pm0LuaAD3j3VoPUiptHSYUmdF4P2H2CXcARrYYZslsz89l%2F74i8SJRGVs07fpVaN3rtlioYBtEXwoeIFU7JHZigMc0k5Ap8qnexwcjR%2BC%2FbowJ0Vc%2FXQS8TpeXSrqmMEsmiy7kMYBk7LXG%2FTymEIgRGjPkfj1Bvbj9chn%2BEy7oV7BS9ngVeJo6%2BkoNSf68DDO%2BS3kJ0a8H3b6iBrxHyIAizN6NoR8f7%2FFrWgoQBqMuZSgW%2BtR6WjoCV17mYuNlwbw5rq3k2RuOR%2Fsl0m%2BcRnNrEMLZTNjD7DuWcTC7x%2FaG%2FcCGPdTG0XRYt7r%2FcFcEzlFDZ2OtIGcA2Bc8Hfzt9YoWnOSauh7L6xLQ%2BGgwY6%2B2eQYSlI9Eguzh2V8D8VqggIzXUagKi%2BDjsKXHp2XTxYQOyk5gznl9KhFlZrNZBJpbBohIcPmlA78CfVeMLFwP3hD6pxTbWVOXeoh8h%2B6jnrpRkEtng%2BsD7U0Hf%2FQGlkrQyGIHPHQi2%2Fli6L%2FVYoIn0SWYYTqEFtvggUjoT3nezQm4Fs7NnP5hDWzRKhLSUfbzxVrX7xWAv%2Ft0ww6LGyQY6pgHdiW2jQcQY1y5LtXg6NKKrdjascNuBzdsolYqlLsGuyKQsKJU8vzLDsaqLl8ajYOuLzFxvW0LhdGn%2BGSYKNfgz7a2m4r2A6Vbj15vakBQ8qDu1P8JCUTsrxkq1l4hWB2PYaUQEskqZjSkpdVl1Ne77lPYNOroGVNckQDynwecRFpX3Wfc8UXhCdSAH8vtonyb8YcB8hac8XmOjxsfvoFGoxsYqLDVI&X-Amz-Signature=6fb2412263435411f56f81896a4a1c874c11bbb93655ef29f834c1392de975bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

