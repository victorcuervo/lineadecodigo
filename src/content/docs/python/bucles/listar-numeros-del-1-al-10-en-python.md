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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OTNCFRT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnuy2y4qy8OD0z%2F4Il7kCsch%2BSEfdGnpvwA9LfmTNJXQIhAMF9fNzU4RttNGqiE1fvBTcof5ekcQRT7aAjoDcKIdniKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSR6ll6hGa2NMvu8oq3ANoG%2B1av3%2FYOyP%2B%2BO%2F5eais3HvuHyums09LFOAz0DxKI7i0aojF%2Bo8EOiq8TBRhBXIzftUoUULwAfLZxHS5JF5Wa2nq871IneuI0BRFo4B70vT%2FZ2xw1epIHq0Uuu7YmQ6U97GEIBjYXNRUEaFPU6aqQyZLa%2FvXtTfRSqHJFG4VNUsFUW%2BOzfzNFEI3EojVNHGy9sygg2TqeXyK%2BVymqG0gG7DyxnQeAy6AycMI5NsVLwLEekZPb041SlYMvWu5%2BmERvkSAjhKreH2HIrA3ynvAaFTX6ceSDcDPTfy%2BvuaZd7%2FKI3MZ%2F3Kp3Uuyjm1ziHJsGxIT2LO%2FJ50JI0fCEwaniXrnYAWd8ZktlpSBJoevazQ7qoQA68cfhNXMHbg9Im2zHe8yYvnphfbp7%2B3CoB9bnvz2MJpAWxJ9iHJmYKP0Kbwb207CGbU5urh78vV%2BNhsVDseayEEHVx7rcHfvLS7YvN3P3Ncayq5joNjNDhxkfst4BFxEjhoVGk3c9BqZYtleJxEzzj5KhqoFVW3eWnNrGq5QI5sMxDp4IE%2F8yWYQuf1dzHA7mRZiLH1Z%2Bx9kTdm26dxSfMSZ0LV%2Frsf7XOeG%2BrUv48wF2CPAGEp1ecZAJP42HbAWaLy8WhSHsDDGj9vJBjqkAZjIe%2Fa9p6b0zrNooeEbYRLijpz2J2Ew0bTdQsdDKo%2F9pJkSl0fpB6AHW7h3BBdSxn%2BxaWpx%2FpqMtbOYuowAHMHYqbEc7oPM6vy9COssClDBfLH9AKTAquMsvheZT%2BWRDHgUv5cnikLn%2BhYX6KkSPWs6IIJYFZe7ww5sdrk6gRpWAJqmmdbtn88sE314rHa3bEfq3kK1byqGh24ErKLGROzMtmvD&X-Amz-Signature=a0525df478b4ca9f34010791b04bb4886048ae1cd7437260a22123651408e19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

