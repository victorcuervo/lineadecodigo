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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ASCJXV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgNVW4eYy9vCJsRCbGEsMbYHNJU1vAtv0MzSlcWx2afAiBiGWuOcmGDCvqW1OkddGNMCWPrMLWLDHbqJgQjCHXPCSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbBvXr7m0CNkuKC1DKtwDzDCNZexWFo7eU%2Bo3ynu%2BOs6JYzQw1YV2ZoWeaFE%2F0xXMJ1Ud8y%2Bep2fLRvOqIvJC4AsXt0Tl7DprLqYIJNr%2Bx1V6p4pYvx0H5myXXICdIYWW%2BkTMaKE5Mw0N9AnYPqR1vcbT17QFDysufHPsEdmma%2B4lFzXHy%2FR9lPcdhkD5R%2BZqbvJU1GbYFH8AgIETMzOWWjLr8m%2BaeTTK1cXOsuTX3tO0dMSl2%2FHWpBrja5N9%2B2PnVqOSpW9doZ2BH1DAPUMm8JQQmIkqyfswYapNovxo76YcUHtlqianyN%2BVRyjnlykgnAiSp4vgluhuOqPqp44v6%2BHr4GoWID96DHgeQDrfuZcBwDERZrhd0BSj2Xg3y0eBACM1KqdEzc4QNOC40ojPO990BxEySmgcxs2ERtiOX%2B0gTn%2BsTDv6VQrj8ufoAxNxpupUZ5Ls7LAAq1QZUTmyj8m4N%2BDAGcIX3vEGTDk%2BH8f2NCIKmv0y%2B5hTm4s3xTw06nt295vy%2BtqgaZWNR8W%2BY39mNr7xNs0h1gFwf8w%2B3XBCO9NHo7opMjpZReaNpD6qSmH0%2BoC3V7KTzHryDzqIKCbsJcKi4mBviYY%2FRN3Hf0qEeyVs0sUG2jT1b1wt55YjNCAdTL%2F27TyCE6ww8fzLyQY6pgGCujY%2BG%2FxOJhDOQMFar3kQEeRHtQzFL9%2Fzx5QCS64JYZv5fArTQwsjwprVHaiLAV6f1HtoA65thq66uJqynLTiLThbp1nModRTsXNqDJD7IkF5JY0YVGelKERAW%2Fhx5sVofdRlKhK8Gfx0xSBMwnkCWAs%2FLnqarhUs5aeXv3I72EVEvRWibA0n%2FYNgwE7nT7R7DtyRFsmyYSKKD5K9gXxIyGcJoSrs&X-Amz-Signature=0cb92bb74929e3e6715d1cb1e216b20aad8db5c7ef11dc20b250efe6ca99337e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

