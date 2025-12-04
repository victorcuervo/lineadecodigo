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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXIAZEYL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGjxMnA27QHtccXH1fjmhb5Pzi4JquXDgwx1kCs8eK3MAiBpDfC9fS9ZE2B%2BKQzULzQ0Cn6e4qs21DSB1uwufs6pKyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMS%2FvIVIyxCqhrk4TIKtwDkS3r5HnGJwafNb%2F80pkBHyepTsKct%2BXW39xsJneDRYGJnJTooL3TrIps7%2BEShZh%2FnqUckdC0lz4ju0nDiN77Y8%2BKkhf6WHo%2BiPceoTBmXZW1tXeL1gSqOyVGq8j6ekxTWPtT64oa345STDEdLa%2FHi9IiRNhvGf3muXaRYyKvBYyXDEcBo%2BGu%2FAsrW9O4CRwJUuJFtgn7TAaaGA4MVCNkCKZj4%2FO62uPhHMTmcMCHSA80vN%2FuCXt%2FORymqkQ%2FV1gPqE1QXa99An1K%2BXkBZ8YGlJMljenDabW%2FRRTqP%2FUrrJx4EcH%2FGVx6w1wbrbZOs6ljkGTcRQeVIml18flnKJwnJmRQZGyOFiNzAVg2FGp8K%2F9YuV9gnoaXR7w3wCb8%2B6q0sXmnQCcBh3V7lBpCVQCtuyohD3w1KGIkO4PFFEp6xIz0Kb1%2Bhq6FxzVWd%2BHbq1KLe3lxkzyvLh3pFtpaO84sptHTi%2BTFDMgb3Ac6dPtQMnwN54Sdz5rm1%2FKu8O3RNhLcyUGbh5blp7MqIXQ6wzlQkUm5jPlJBas6eyElcBRQ5oqboJSy7QgPQCbkVjuEWPA2TQO0xju5ye1NUsr509V3PJ3vEvxOAf8fAJLCHxwCbOrL4oIUXm4r%2FZLUewYwgLXDyQY6pgFxjfBrgQSst8XCgITv805Ok5JZl9LzgvNTzFwRfiKwA6yvXJ3INA8W8nkOGbcO5ZL%2B9%2FpLV4%2BnJlrbyNw5XHovSRZwRi6FC7xabb9Pj%2ByG%2F31gXoZixzx%2F%2BeccL6NigxacL1qx7E6oBSOXL8f9SOBsrcwjV5jRgVzasnKSXQ4X2EjkO7m%2FIsSoco9X4NQfYFYsM8Ui6tkSmhZafZDGgAzJPSu%2B%2BY1L&X-Amz-Signature=2bd5a599f295ee46238d65f9ef92f59b4e2ce69a4be8e247d37c29438a18329b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

