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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICEU3NS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz%2FufokgkoF22SEwJ7PLvQEfFy9723oN9fnKOMSJpe0gIgCFpMdt%2FLNMhwlQVlwlufHxkidBVQcOhFI6LB2ancZJkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJUR5ss8RBWZ%2FUzt3CrcA0rG0w%2FoasJIyjLMIES%2F%2BAQsRrgfdPSOsJ%2BQelIv4CaM4qAdvNL4LOSLWSFKLU8nYaGNvLidXVe9y0xfmzHhYELTCI0TO1cbFuqB6lfXK1U2QhpKSV%2FfwLJYCiqCWyHIgXBJ%2Fy5z7gwCLuBeJIXFZ5FGLyp%2FMU%2Bx30qrAZxZ5F%2F4Q4wIN2KOwbd5icBr94UydfRVYuvNgle32KB4yM2%2BUZ1C6FI3AGmCUEKosolowfBwzqZ5pv2m0ZzMnLNpNHZ3YBcIXLDrDlLsGSlQr%2BhVwm%2BL%2FdNgXY3kqBo0WUUA%2F1eJw34PC2Tx8UzquSU6iHC5I8Vc%2BvDUfiLPbHCAm0VjV6D1LSLomVztONCshbQZajiUgOv4RKB5%2FVJxIkgCbeUhaorLPfxzK7IFN%2F0RVjjkABObXI5jwWTc7SVSM2yU3K5sy8Oll%2Fe3Z%2FHR8IivrL9kqXvhgp1sgOZ8Z4vMqK3KkYsN5voAMcZDOnn9NNvzOvyyPC3qvi9bV7R0e3AR07wJsTwFMnr6LawrjQBESYaEOKCbMiwUKy4SOmILIaMkBHAU%2FbTey%2FbKOCr1SN2CyDigWA5UCa1XZE93mMG0UnmesxjWSmQw7NQ8W%2FhaACycUph2Jm6b5VEe3i21DJ6pMJ7GzckGOqUBW5bhhdRAs3SrWexFbG1elXt%2BwM7mIh4GakH6sVkjvkbFe5quBNEkuBxEnYCp3vUoWr90bToJRk6QTYN6tF%2BCdX%2BPKGJq%2Fkuo7HVpNgnXMxtSFSkLw1HW6I2Ln3nfu7jCSfdLRCy1mvJJfH19T0ZEdybtfwG%2FzcpOABZEdeIHgMycoc%2FkIcdGYnE3QG43ML80MEFC4PDgsIK5ix2BROrx4u7OE%2FZN&X-Amz-Signature=cd2a6f6aefb0eeca03e75e3f07bba476dc0731c196e2102212abc526a82ff692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

