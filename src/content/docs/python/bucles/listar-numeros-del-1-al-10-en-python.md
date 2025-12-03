---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGVFSQN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFKoXjkSBXwwsIgxg2S8%2FDjTu5f8%2Bpxmreh82cSxiGbwAiEAuxcI891%2BJoEyaRSIswITYMFMZAmVLcsXMVoYppiD%2BEsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAHhuk9hFsWHm3LHVCrcA9%2FCkeMKmBFz43cQRc411PMR2b%2F4WkYAFT47N0RruvIZh1P%2Fxo0%2Bkk%2FyOsrsBwAc5IHjev%2Fws9esyLBUZtb%2BoMOQinWSTzg%2FoKwCtLy5s9Kpsx8HAsa9eLxr%2F9vepdWpszNxX2xm06RuNLr7Ai1to43PlFpmGxLEHOlTDlrTJZBTWF%2F%2F3CuElBnavMClZvNRGjm9%2B5gc6%2FkZVx9ba6Wv7%2BDpIiN3ZkLqvB4polfi6LEBXzacOtXaaZZAXQeI%2Fiwi2k2qcDdmasj8Lorcpr20HhJDWxUhj9f2lgfyJCqnLVmAOuQfdKvMgS7%2BRAH%2BDK3CPoEx9kXug%2B7hbM3MMpkUTC488E6EmJbAlv2En6%2BYPXcbH%2F60KCvhf%2F1JAgIbUEH5zne2gp4hmWu5RdAfM6pFzdW2m8FPRpTwkNhgQENt5HpeUuG54AaONmenTiaeCkQYPDzMvWO53T9scIro%2BC07bHOqTfo5hUBxcmpyuyAQ5xUTlPfiemBT9MTYN1%2FWzsUgVa3t9IYMc8ni6PpVhWqDCfx60H5OdQ6rA1KAEZ8Iby1UdaqLCKXj0Ues5lu%2FQ1229mk3oUZMy8pteyF2PHcpWbU6xzAfOvfR86o3p7j%2Fob1A4O8a5sysC2VJXYy5MMW9wskGOqUBNLyzG0YGWOVcIfl0rByPvtbzYh5JuGWigPLecwoVuBJ%2FScGwaFtq1lVyB%2FtsPRjrZ843R5a4%2BzAQl2qNPlqGQddvlaOPs6DSY1wDky5ISQ1OnO3MvtxNuDK5LQA4oXSaToIMBR5JvNJG6dd34t5aTIAuX39WmkLeEEDYyOURHs1ghYzlv98z9i6MgXTpdIbIPrn30eAO5LFnp682MoJsNjPA%2BY2f&X-Amz-Signature=003fac1d6e3e00d24da2cdb0b660cc6acbb02076b09feb4a124d81a65e17f983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

