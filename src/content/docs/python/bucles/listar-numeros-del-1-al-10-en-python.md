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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q2LFSO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuHY8ZxM48Tm21m7iwTXUxkHWUbp%2BxzsaC2K5X7121IwIgJBcNJ1%2FXAcsyMm9y8A8Pa701lKzAdEBFxKKG0QQ7F40qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1v86d6dqD4tTeDCyrcA1fxuBQO9gFuPGKmzpzig72cfQ3hxvMzasY42BhA2UiUTRWXl%2Bhjg10nvtELs7K0lBwL517QUiPMl%2FcgXTApl9sC709%2Fg1H45fphseQpkstuWJoTz4wGTSOmJGpv7QMFUtKOQI8J8sQnsKzO9dcLbFrLtfmj%2BksqgQ745XXr5PuuLPblnjmIgudcTWM60xNL20z%2Blc31Jrb37dOmMkfHM88YjnQzeIYmeLePvmVEMStAgfHQ7Z%2FanG16FMUcIf2qs6J%2BU0ITCGw9xUIYt5ScS0HR8V8oq0yMUwrxKq8Rkn0CgfkS3g1L0Dpy2wO68JZPTzNz%2Byr2XG%2FPxrCY%2FUfPiXgD%2FNGOPFqCW4qaE0YUzPTJM7jbyMbrqq7AQbiMFdDJ3GWh2p3%2BssaJ8XQyynvwdCU4ebQsiVcjU76%2F%2BlhGUfi8TGLccjIghJA5Zj2e03GvX6b3jLiG8mGm58T8RvuFYOIHWPXnD4zg0vKvoILLkFbZjB9759nRK5Hp6jnztDKq7B2eLRSh3ZQ%2BaXR5WH1dYP%2BnYirk%2BKfMOA6kiHwRXQUHGG%2FIUHMGq9xPoYwI180Hh5Fj%2BcKl1gPVFodLj15MfjwRfyEQmn5sOJdaeWyNYEoW3lbb96k0MGcOYVx6MIrd3MkGOqUBsUJJ9CG1BGEPfnpXOGH0bDWeu%2F8COfO8mps3eGpwH%2BLtDZnPY8kC1adgO56sZKJV0smhNCEmpgM1tqVvaEfW03BH7nzz2YXBj64CH0C8Cc9tvJm%2Fj9yg2vjIl6AeIQMWPWfYWX3utKVRAtad4U%2FZC%2B6%2F26OYFzHl9b96AhkDu8ZumPHMHt2BweYM1TzgJSV3oh6oub4OrAn41yCmL0l6m1R6PlAM&X-Amz-Signature=bd032a26eb1b725f3190cbe91cad678e376361a7479c4b4e084dad5915919ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

