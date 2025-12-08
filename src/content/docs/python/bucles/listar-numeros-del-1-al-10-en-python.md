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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSCVRY6T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUmcjqrKIOomfWZuPvF24DQRLpZpQJS0IXqDccw05lpQIhAKGdVMecQUeu8p5x7vdj205qw%2Fjl6NuWL7BdKZVAl3kNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOsIzt896pdvOXz5Aq3ANI3youfu3KwFYWCyRpegSHh0knszK5Upn%2BdAnRY5AORMJT7%2FKjTUxuk%2BIScMRbri2dCyM8d%2B%2F3Rhi4icXOYuvgNMAOML89bPH5O6l5R9j6U8uGGoKOd5YDWPOSOR4zpNxCYQL2r8xsHSex9%2FZTpqaMjrmemwGL8OkImckm1tw5%2Fiv2pfTRt0sTCws5tiHKdK03PEHQ8iqfDzUTknJ8HbD3mAK3Iv0%2FCkR3X1%2BeLUfrstz3xHWjeUfxwAe%2Fxpj4Nf%2BwjQvT8EzKx6gzkUJSd%2FSvh6tUcxE4TIf2%2BMIjKeJXrwDPrhNtzKFsN9y2JbVEL31TDGWbxyyl2lXbR7VMzvtC9zY%2FPRwWQ2kpMgg8NR46KbD%2FA8%2FE7bF9JvuGyom52cOBmlwcfCmB9W0UUbI44l472MCyQVqrJt5zqYG8O02D12lBeU9d%2BZLvn5R2sjmdK52%2Ba0n7iZE6TPqpNUaUT4eXJQIksBMF2BXXQHIfebrYV5%2Bu%2Fd%2FP9KWpqzMR3sVRMfmBnc%2FFrthVfRVvFSPQ4JC4CpX3QOR0fdxfbYlNrpioG39NKhdtdwg9IPxozSjirAW6TdDzU1IOJOK0mHwZFXlg%2BA3KGlNk5QWwa7PLfZXk7bcS2qP1IVjEGlUbvDDL0NjJBjqkAcb4eqc80zUvgSaHYwL1Kifw0CEFv%2BJ%2FJPRy0JXbaFq%2Ft2Rn%2FL9%2BJMIMNRCDN7%2Fm4J4JOly2gcSNUNoxbO3lnIj%2FUDH0pKr7RZ%2FU3Fr7Yy2jZzVn78wWMcxhonolZtMd9NoTPWK8%2BzVkfLCMFlVr9EA90oDxXv%2FFu4tU6Z3NdXexD0Ah7s8E%2Fkr%2BZxxDriAQJZr9%2BUoTlAbp0zvwk%2FrMcTyhtGJx&X-Amz-Signature=3d3d1258af7395fb69c534bb63be1cf82065339af23dc067f6963dbd67e82796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

