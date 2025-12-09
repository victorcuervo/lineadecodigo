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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYGHO73U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIvYuuqPG84iqXhm9KOi3Cz5tC%2BrVW1UK56ee52V5REwIhALIShhhjcYj%2Fg3VWDY49KuuMqHUDDnnPRinYQNuoby%2BhKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoidZ74BbH%2FdZC1kwq3AO9XCxYVxrxLC%2BOg0r039XkQsYdmuM36bhcabQeOd%2BE5yFeO5w8F2Xo6Ki8a2KfRK4%2Bk0Achk4W7eGVr%2BPlC8E09stsQ73mMH6S8gyYpk%2BmBocVceGTHt6UmijVFJbwXzCWytB0gZdIHGowLiUi1ztxWLkpcWnodORWPr6wBo%2FE53ab3QYGcv8ZbSmHBJI38wnJoaNFwRYgP5W2HR6lF%2B1yI4qyvQIk1H8ZgYxUns%2B7u%2BPx3RhJykgPZ3jHKqQRJHlwCI9w1ZQ5cd4Mg6x%2B4kZ%2BFnaB9WWTINQ%2FKAvjdyMKQD0%2BxZfikiCd0HNw12Xm9hlmimXVS4rg%2F%2B%2B5FnF%2BUAlVjtocCCRr94pEZeRYg0MeAlNIVeBGRUiR333oAijesF%2BH0njAFySv26YksFV3Nxm961EAmq6fu%2F0Oe%2BAyzwVBB8lulSIxUkXfU%2BMrlafaGYL9hpgzxnJgsTuTYSyiD3zplT7U3v%2FDVnYTYVUJXyNVf8CebpToLoCNbvUXiY%2FhJ16ATxJCsshyTFY6F4liB7LZo0VHnywHhi2AN7UBbDXHn%2F%2B6nHCjCyTfZkalQq1zO9v5hTIwgRdmnuL2x8%2BBH%2FxmbaM8zuC%2BBj1W7zKrb4DqB73IQQoTZBnvMreWgTDL5N7JBjqkAfk%2FzWFHZpRwDX0K2z8%2B6pGzZYV8G9x4pQ0PU3eja6CEa3Zr7BZ3CU1S8SOx8Giw8ZAhHxixqPxTOZ5GGwYsK%2Bh%2FdXGd2ObIXp4NQkJRupc8W1pIB%2BY0CXq2q2c6Bl1Bwh50GARRqWGNinUKc7zAiQxqYYw8ic9RwzISF8gFsRhXnyWC8%2Fu3PBtil0tZeceLgZqNZCbVmb%2FBfaCh7M6s9cONHuDD&X-Amz-Signature=50716a7fe9f9260b4c42e5193ee500ffb2f3b18122c0391908131759ae420509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

