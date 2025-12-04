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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4RWAKAO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFbFy5zaeWVeL2sttmaS0LB8774jVgdeTv0Eqrag%2FKUeAiAmkR5gUpI%2BMTak9w7jQ3P3l2dtes9%2F%2FyLQFbMGEcvicSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMCRTxmhygJoIfEzS9KtwDaAMGjXxEr7UhErU7b6RrBbMNyS3505i7cmDpkIJkv0AetEPPyhrzFaybCSd6E4Es4l%2FbIHPyeqA%2B0Z6zAFsYXdXPRNhx53YJYUydud25M5cWom0JI0WkwhzrylAw4wSyuufjd5j9U0%2F8n3SNSKZ7TDyn4teHBsw7Ey%2FY%2BpBfjrh2Jj2Hb4iUVC8xvUVZl%2FIPgcq6CBNUD1dsk50Z8OpwyW9xgRHE9gHchn%2FFGyTvNnqp8V9aczVxVzXKJgPgwcpfY7j2Lgkm%2FjdegVtMTCGWk0i2yenAb%2Fav04y0lITGgDCi4oW348Y4kCGZaOHxyZK3TM4BqJ2AUIzLdZo7xWvdCdmsOU%2FE7HJr5O6aoo%2FsXUmyKHK0yuA3Hw2UyvWTipUB%2B3d9gUfrR%2FJHkmX4Cyb9VuARRdxmTZfnF8kByFhXutWUOJrXpMYlBeCroo381e6jNzp5tqLk9xAO1eXUm4%2FLmw8aJmZR3BqzGZntWTpFKab8JuW5089OnVYwa%2BA9Bb407dnaApHtF6%2FH7skgztwP1DtF6yZ7DCbQ5u7XKs%2BRS7Pke1YwzkwBp6t3f3sznXgO7FzPcLPA9DUbzjvRsIaY0y4WW53GN57rCQbf5JvOeQmeqQG7CI4Gq54F2Fwwy8rFyQY6pgFBJRwM4lKOI81yYCBc%2BxZ3CnKVV83lB36KchvgXjSan7pkyo5OHCwBoPirPdLUEuohLeGyPaN4yOGH%2BLRqwg9SP0hCj982i3pz%2FLWGotfu%2Fq%2BBKYBxq6zSkzOWfgVEiZRD3PDIQbzl3UVepYje37LSiJOnOMHEXS0WhIhvDGFRHzjWcobQpFMci1H8p8tl%2F5atK%2FkSYSv6zxBFh%2BV2PiF8kWk3xr6K&X-Amz-Signature=9720865181c0731601458dbad345fae596445a6ac193307824ae0d9c3855bd99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

