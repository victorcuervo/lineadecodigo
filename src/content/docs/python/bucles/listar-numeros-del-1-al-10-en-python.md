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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUHDKQMW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVg5ygslEIkWKE9wakmUdr%2B%2FLVOKjgkLD1wkTKfJdVigIhAJ6lp1Zw5bxwRElmBDBw1ZUzc5sw4Y7daWEaNqHaz4btKv8DCHoQABoMNjM3NDIzMTgzODA1IgxIrDaGYkqwi1jAW%2BAq3ANhn5oBWeH5R%2FFqRdRQF5Cigbs3dofrJg6%2B7dNMUDb8NUhorTktDwUeos8kxe0681FAi9VVUV6rbRyRBwJQ7tcjiayarNknKkgf1mNjL1fYyWzpl%2BqDo207F1A1lpLWkPfnTUAGe%2FBKYZmpSGb1eSdYfJvL8TM%2B6WbDwGTa6k9ER9tCElQ2xNp0Unz59wsfVEqgYtQWmM3QoYJn7oF8uOnwlbAV89t5qcvUXYpoRbeBVaiH99ZWNNt76Ki0fPaKxAUR55LQbH8oyVQQvu530wcyQ6VdovjL6U3YJfpdowOSmuGP0PIW9WiUecKFfxVboUe7I%2Fz3Q0%2FLaJlIvSoNy7WDIWrnJaF2legQaBZf1g%2BWlIJWOpdTH9l0uIRLHEebx80lBFcqN7CntFr0h5qpQ9TqXqcULiLtKanRzWMqWzmSjSGuQfDuyLO14vdZYBnnZz8ruAZcfhQGDafe7MQpK4vHFt88a5OQDLnWTeHq7DbCOkCHX8d81Vn4RCU1qhH4%2BELmOvxSo5hKhuufOuFxkbxOMY3oviZfmoPJBxos2uwDv64kvrsUf648rfp92TOzPoVfJAJze0xygRgpHq4tFbPB6mmyyDeH8Ne8OA3Q6DSdbnx4kEszsj1h4xthazDEzNHJBjqkAUefb9z%2BF630zg76l6%2Ba0Q7bpVmJo0t0NilFFd%2FvyfCY8Rppzwa12LsdoCgqoqx3fEX9bYMdbg4qR3Y5XbipmL44efhvoImzIl9vQldh4AJAI%2BKvF0OWliLISCYvSx9udO5Oxy%2B5Fk%2FmQM2fH4KOsZ%2B4W8EaLlHPEcj42Ij0H4LVnmZBEo%2BpNZ7tERoIOqfQqJoFujSPPemz%2Bjq2cyam2U3Xz8x0&X-Amz-Signature=6348bf938f825a703deef3d4ab0b80ff2056ad8bb97d9743a3270da91e7a96b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

