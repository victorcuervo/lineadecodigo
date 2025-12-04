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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAM67Z6I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAYls0zdOQzbVROGJbzOQi%2F7pT246GQouVJ78VoZajMkAiArtfyAH3uqxc0gfCPOaC%2Bo9pdnpmIja4E639duuD8EICr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMSCdLyoIfHNW9JtKpKtwDHMRkNFo17DJKMA9CjT%2ByhvYXHks%2F1CdSlWc7DEF6DhjzeEtNob2ph0plfHwFZKmZwtaweX5VSI%2BYhRBsQfmiXjQ3ps%2FEAD0yAFeAuKW4Yaw140bhHxVzHuOaZvafUnR2W8sgTCnHQguSwQ5m7k1CdyEom24ECkvmhwbu1JUpW4E0x3WtxulcrDrmWzAAnKGhziJ8whSOJogjwpdtyt8OKB1m%2FWNxoSMJb1jF9jbNOXHGrkDAV5y3Ovj6uQxMXUcsBCf6q4qkTf9Rr0%2FmyYPWs6EnJoq%2BaLQs1Pg6a5d0X5ZMV3G%2Fob%2Ftm%2Fodd9sbj2jjXLcjo8dpPLp0Lm3KQmMpQs5HkPSS15zg1TYdqzuA81sKckZ4HHwsGtofOq8HBXXWMYKyp7pAPBabRWWZu0Tni26zpPms9hkehX7A54bRCaHVHWRBl0QfEJntwm9wqir94nBz73Lk46hkNqo9uJqPE4VhWZj27ZzY5ekT1wKxZlp8T5cmjKCuzpuf%2B6hZi09BpY5yCnG%2FZMN5RPfGOtVxJNqAjHAlllEgo2Hp%2Fx4e3%2B%2Fy%2BxG0K3CIVhE42lPD6mYPnRV2t7TBDNG6UuTqlMcECD6JxDJjMsfy5x%2BbkfnJ1xPL7Z3eys8aMhmnTqcw2ebFyQY6pgG0JUjh0MRYqCkS1Ln3CnjLGHWlYr8mQj1P6sIgjE%2B5m7ZsanI7WU70nFgxaYK%2B9WQ3TE5qpVt85mjqEmPje2aUtei6atAGzIAxoCDoNMHQ%2B0emOPcrwrTh27dvmsOwMu%2FV2kc9aZzSoI7htK1jTGQIcFiT%2B9KPHARS2zxwh2J%2Byq5W3LyIa6n4IBYn6ubraeeudaUKtjhHvxi%2FNYT24Z183zDtQTqb&X-Amz-Signature=6096286dbc950674a0bacc4b6d30d5205210137e31ca71bcb4e408a9806fc57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

