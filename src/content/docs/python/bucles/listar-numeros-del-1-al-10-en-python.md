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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IGVYMDO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDs0gUNkn77c4nPI7exYlSEPwEOPTmwt7QGtwAhO%2FcDCAiAO4oYbPaNZuUDqIInlrP%2FylmPksXX17Y6q2p5W7YfsGir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMC1raBXTOcEtxtnnDKtwD81cDNCzd9Vj7cTc3ANckvIQUKqktXC06yoN6yOdQkW11Tdd2oaEk8ex%2F5c0sLEYPHpIw0RU5vNTUk0mJjjey%2B8iAyKRLViXCzL0mynudGTxuqS6lwheo5kdIORgM6BrKw9v7LcDqVWjbYO%2BtXFYyOZoPRGQ%2Ffqxv%2Bx6vGV6ZtExNb%2BR9s5xK%2B90VutvI%2FTHv4JZn3Us9xqRJz1%2By85jB18TVXJr6gkTRx5IixJXJH4Zjy6XicH%2FsAK1hy%2FzlJJfUt0U6VTkYqV4%2FRcd7Zp3DpFSr33oMI6L%2BAQheW66YU4MVWOVAz5r%2F%2FpfeyGTXxY%2B4ROP%2BikQYm5NJe%2BUCeTM1IdsDn%2BUj9oUlN5zW2p3WkmtYzArUVhWu8vEvxPk%2BzXWzWQzbag8JSn%2BzqkyJNZMWXaFWVvGz3NcQRpsZCemdO4ixDEYF420y3H0M5Ahj6IE2fadhsPk%2FxlaF7w86I46mz7gBwEYeM4MLqcDRDJaDATvnC9nUCHf%2BWyS1HkwLlID%2BVa9p1Kns%2BM41DeGtLE8%2Fxaxy%2BbiNwiBNuU5YX0UqJQ28ZIDmycl5ZZQQD1F%2BZpA33keXzigNQXJcYBWUzRmfMgOfno0Q%2BxlqtnXoUYI8ouRWS6EkIW6Z0bpz6ukw%2Bp7PyQY6pgH%2FyfjfDhB17n54axSCtgqK29ddTiRQ234fvf12QEIqQGAkkrjfYXLMpL0logoLunMn%2B56c4d2W1MXvFdiB%2FIcAN9GQtwGJOtdAGwWE%2FqnQGcdwbCt%2FnmRU3XG%2B4djc%2ByVY9eq9O%2BjRVm0EZt53gz%2F2pS18EVOM8HeHVGH7XaL5xBgxpwfXwnBEBLFbO%2BtocdqNlEcypmzmx6Xgz4Up0uoFZOcJ7ZC0&X-Amz-Signature=f09633257a4f7bcc6da63c63e7e4c9c7ae4acdbd24428e70d2b94b08f421f461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

