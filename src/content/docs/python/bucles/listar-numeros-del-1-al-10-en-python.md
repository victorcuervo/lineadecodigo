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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URICZYRE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZp1oiYqvxsMxITBOZd401TLWiU6I14YrjMZiIKhQ%2B%2BgIgUH5sdSxy%2BY2O2FmObnRtgBeIxZ%2FJr3HCXPpQXaj%2BE6sqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtD%2BOUq8fSofaQgCSrcAzJChzdgr57M0cFQPIPY1f%2FvTwPt3Pd%2FmGnegP0%2BApr4X%2BsSIj2paOz6%2FybU7SXvvkyb%2BuJu1K%2BvMOu7EfiHnxW4mGBCR4p9cKbRGJKUAV1hofnQ7%2F%2Fp4QYIpCR0Yocb6q2N3nTJ4R2dHh%2F43IDwiZ99Q9H6yZfwxNRIum77GqOALkoYwxPaRV7zSR6gsIGXK5mS0Gh0EyAABjG4O37jVSWxn9trNyNq%2F%2BKOh60CQVh3frWr7ZbhX2Gs%2F%2BKHXtb1q%2F49srXJDwuzrcRnxMlXivBOnDRi86aFmrsbso8vylBM2MlPOjkKpKu%2BrrpAGv%2FLDyHMJXBLu99yLBZTnDQf1Xt5exmvTEwzdMmsaCb9uBScnvqLH052UH3AJnJod%2BloCYFCbwPM%2F9xvQ1oYM%2FsZlwhzV0cqndZNf23mirzpKebS0XmxrV1DZETHZffceY4PdEo4ErCY13K1suIO0GVWCsRTEaaOW%2BEfM6u4t0GnVpoF8x%2B95DjzD5ZL0JZc8t3LDXMa9ADBJSmd0O9n2tcOt2%2BKfX6b9o6Xb02gYJToe3pMaCt%2F5bMRpY6mvUvNtb5K568s3eyF46jNah8s5jIZ77dFtIpPE2oASYuIoG%2B2%2Fn8bmuQKMw9heM6%2FUtDPMNOZ1ckGOqUBWfiM7UCLOYaDFi%2Fwn5cXyoNyFX4vJXgegLbM%2F13lAoZIop9k13BKs0HIB4SZddA1eL3j5JRZWxY5oSqiaQpTYvz9eyXEQtHcM4k5touzXKN%2FfgtqCclhpAinYrdmRkPuF1fWXioQUreK%2F8fHfwiTDkIvIiL56DLAh7AurA1gju9jNPYzMtyK7cawDz3K2Y0xzMPWaaxBBxKBxUTy3909o6QOupuB&X-Amz-Signature=a8e5cc703edea06ac72df02f1982e399e18461d94819a622c1cd9fb6fcf004e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

