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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAUDJJC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD4NIUuZiVYrJwPJzG%2BLLFZ8Epe4CUn6cpP5xxV8Pn3kwIhANA1PnTeHbmFFwH9CxqzJIoZHW6x1Oh6VvltbgBOxPZzKv8DCEcQABoMNjM3NDIzMTgzODA1IgxZ9vSzq%2BktJ4jpJTsq3APCwb%2Fzm82PZEj0uFdSwvg%2BmHs%2Bp5YLNLqdkUCNHtsOIZm91WfEBR5gl0QzKYKE3td99aXdVG8TwFLiL9NQyns2OE%2BkrkfgrKb5YloG%2BqTqFWpttcvVOHozfIHCXfHth9HwIcYHXOxDgsHs6oyxi%2BEFWGoGIw8axIL9N5ZRuJgA2CbR7VOTibGB8ivgTvVsJ5RaUzdzij4%2B0DcLFrU1TCRHA7xvB9B7B7zN3hgbKoSzhe3fmErZarAxQ7an91xJOQ9sUnZHhWxNMf2wONQ4SBhQl3CA11Ogxxpa%2Fo7m9yvLh4%2FOK0j0n0azkHweUzinWILn4FvUTy%2FihMc0iISNiGEbuJ5NztgcOmb1Jjb3S3zUyix%2BicK7E7oNFL%2FJsBL2pOEsr%2Bvov3vijdQvPUfzMuZAO%2Fe1VpprWIv10vDYtoCU1GM82efXdaRCPmYCZL8rMJYlJzjrD44vAWc0ljPRmtao3pwg8HIY0WybJpE1GVLf8xAmUXdWwL7RdfgAco6v90Xv6oHYIvd6cMkVPnCO1BeN23bjbYWzgPn%2BL7vvsVG5nzR08lfvcHGVs7w2VjRmRKkqij7Icw82eUTN4qSyKZETCkkUrVsWuXqUMJZa5jz6hV8vbqDg%2BbYwahfUVjCSosbJBjqkARudyunDKlSZjR2Nt0T3FNsnyW7F3vyjmcbtJa%2FjoaeLpMg3CRWqNvpwd0pAOnAwLc8IjxU3FxF5hS0J66thMyrt8iG5uiCdZe%2BSJA7jumqDvjvWt%2BLnE9zjzeoEcEuwJo9g%2FFt5Vt14yunlhj6sRs3NRX%2F0O2tRB0Vduwr03Tn1AWg9pTAiMUrgB1CcA0uDcZhfvjbLO0GAu2n43KMEvDekqwTQ&X-Amz-Signature=9ac2771ecf73f8b0117d43ccc34c0f6f43058bb31d75aca1115c80bc9c10e6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

