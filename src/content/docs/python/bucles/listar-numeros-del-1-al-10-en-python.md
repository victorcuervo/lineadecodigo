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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQS6OBY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBRKwYNJlSyC3sm%2FklJ0qauGwZ7dZm2sCd8k%2BVhkOhNwIhAM%2FhOEq8z85Q5pIQ%2FW2MUMXqErpBk03FQHH6%2F90Zq2UxKv8DCFUQABoMNjM3NDIzMTgzODA1IgyMaUDaDPQoP%2B1As28q3ANchMUdihrGpDw554wfa9e4quhRH7K8dvoOzzg17PqvvGCDM4K%2F%2BDiu7WLwW8ksslnRB24BPkdiGkj7LcG6xLKfU%2FT%2B5CB7yAw3YKmeY0ax8%2BdOjnKd6bGHAS%2BcTG2y0MclMT%2FEH16N%2BdzCxyR0jMMqWwnYgYX1G%2B1jZEnLcqCqkYu1tEroGjbnLfHOfZvJf8nCLU%2B6rY84JqqocbQQrsn3xUPbW9HQ1p%2BlDItnYAU%2BE3kpn%2BYx0S7WBZrB2pCuVOxr5Fo6FB3ejlLIxtzPhxjYMYC43kAd4kR3gAPd37nuqDYAOf1A61zsjtSp7T2574mA9WBj%2BOn2yMifwvEa2IHlq1rQe0I%2B1whkoSOCBADxp31eBu2qFDW3mkc71Z9Tn6MtJ%2BA%2BrW2SZwjbXkaFy4jTf0aXMzoh4ECwWNbYYgqWIBWjM3QYAor4OqTK0TqfYp8X7jWLhzoxwYERp41hdOOX3KPoEP3nj74QX09lfI%2BnZ9RUv%2FWj65CTbvmxQgUI8LWZ9AC8t89UIn5YGf676BCG3ljtEj9PtzKhEz7Z7LKPz5%2FjfsCPiZeE9xRBXa8FUN6fLmjXAQc6K6kB53ilj%2F5mcfsy%2FtLXQRkKhOqCYuivQGL%2BuReo2INeZaCkijCKrMnJBjqkAewTCeq25vadY9dAcxtwbp903Pki7wUk%2F5Z6WIBy1VlEFyZn5j1TTDEtLEuNiKiIq2w1AE%2FLg%2FZrYImY4tTLqIx9rUUWr%2FQp0GEnnNBhSe2AOLwCWc%2B0Oce6G6uh8DWq9EFLZ7M4ycCXTuG6HTBxSqHVI594JNUqCv1vHkiciqnheatHV0EL8IQ0zr1E5P%2BkFy1ACSzM8qhx0Q4y26Ki6EoYDUy%2F&X-Amz-Signature=eefcac782e111251f03a38d5f259d1e1a719f54c141e34a908c95d005749da24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

