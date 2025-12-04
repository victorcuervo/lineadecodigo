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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665U46NEI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDC4pbVCbeKZDxOGBkV9IfPi6LugIcy6%2BNHEHK1LTvn0wIhAPV7WnaeZnuPb5mE6PzG%2Bq%2FZJ5QrS55EdWWTHzRYMxEFKv8DCD4QABoMNjM3NDIzMTgzODA1IgzY0quwDp%2FRWe9iNWMq3ANYd09Wnmv7WEZxgH4dA%2BQLzHhlooYMk8M0TU%2FSqVjGLuelbnwg8z2nU3hDeTlDh9N8kHTEfsEAwMTw%2FfV76Os%2BL2xt9N7nQBTLDD6MT%2F7QOnlwLR%2Fvqh22h9b0qnFlS%2BM9aqIkAC82FnHsUXf%2B2M%2BgF4NZzNoD6b06QjtNw33OfrQZ8lG3vS%2B2fx6j4vg%2BecNZfjB5SZb5iHt93iB01jtDcIeA6otBv%2F6O%2FtOcpFE19U%2F46obfVIjK1zOTKcvWeX254qWBEyk0JofBvO%2Bz3Yui8sBc%2FmE0kzfLGo%2BrJiFzSnRFfUqkBjvgCTyPNHZPqqn3p2zhTVVbHvC1h3q9pXxriUyHFeUJspBE9w6D3YU3bx7BL%2BbjbPvmsRH3J%2BZ%2BUK0%2B7LEsYbBCHiuUInrqyRGCCaL1yyLYvCvVmAQHBaw7grrXFg7P8E6r%2BDZq5U5Y8sHUXAq9asxzyXw6UtS3DYdTP%2Bkrc0ebNX%2FE2SjvbYQKDAaove7pfh1TeTHh9rGifRYq2ZyhgsGPvDetmjxRH6FfoMOGmecbeb07yc6T0gpoGSNmDAoj8c32FqxTG0WRtCGbfrounwuvEbPKxBICAsXNxMub2c2ggI0LYxIlfAp2G35YIcrCJau7CH033DDArcTJBjqkAbxeSTCgHPjGLIAa0I%2B4YJFVq%2B%2F37A3ZpPhKt5ruPNIm8wtJd8qFM0WplnDC%2F47S4tWatukmBijMd0mXMa%2FRDWlIs8YRxUwbIT1Yo0tdXBsNZrT0WB2efVVpxYHvq5rs7AvFlrbFtBNt4v19FdKRjPg%2Fl34qTJRkbljmHg9MZElWLjDdcPwMRVd9dTeNsiL9yCg3GPfY3UiVhBg6wOkf4%2B9PBidh&X-Amz-Signature=d230f735ec174368759187707ef9d8b3336ce8fef3b46f1c9a4ec790054da155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

