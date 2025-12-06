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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIW4RN7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUW4qXBSoLDXaFj77Tp%2BU0Gt0JdaoFXWplMnyI6Ir3nQIgTqJKOS4FSHpbGgsULIJ%2Bv7gAQ%2FyGvZ%2BCu3u0DOBtmNcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFWRRwExfCQqrFiPVircA%2B93XXtdn%2FZH%2BxZ8%2F%2B4MiLtemAl1ippncYVE%2F4qVzB%2BLylqelf6EfOhq8cnUs42mW2hZUYPTqDtZY6rNd42CBxTXT2bDLZ2UTgNZn7ZQgSVw6tDZJ9JS7t7wV0c7e7NEYXO%2BI7PmgWrxO7U2XdY8Yp1sna%2BKTVT%2BYxcX4rBZ9zb7w0Ij0QN9pXjAQS3j2ZmHhMTlosIC84FRGx41KclT5T8deQySuXpPxididGY8%2F9M2UimCOifG2rD%2FvgB9xrm%2BE3fdSH6dO7jpei0lZtIDiTR7DPoFvaMh7QUQClVp0SKY75LMcE4snvX5vW81tO4h077SOlAxH2OkixjXwNE47ziTsa1KP467GPbMZV%2Bf4WbnNSWCBM7IlClVSb0YI8Y%2BPN0yvoh%2BpioEUsHi4E5ACsl5iwCioG0Jn7eJjKeZnEqksCenojXy02GHD8qEBG1JqSniK0cXJMhM2wYJ0czC9UxVBi5qGi3vfazooaqeGBO3hbOJX4jHOno7S%2BoQbGVwUTRvE5IZyFLox8hvIpvQxCu%2BEO2zgwUgjy%2FlcWl5O7IExX0%2FD59MTv8nhoLgf3QZk0rwD6zNjDqr2hFAAnJ0%2BvJ8ULMpGrCa4cu%2FOTUQrCMxQdeaOJstvk5IwLPzMJW8z8kGOqUBiHlPm%2BppZxtsQyb2oHfY55ilb5JSZ2atp4amI0V4vwP5cFyKj%2FAzbqRWIsXeZISA7JE2i0PJ56ooSYpn4MTrgKGTw%2BrL%2BeJlxestIqB7J3lMJinCx3JjwsTafO4qJBLtsl1XiqRs8oFznBaTfUB4PoOwqJziOxhskGaD7AaR3t55Aui%2BcjQyRQLFCi1ZnoAMc4EJJ8eR4Gg2h2mut8F2UA1oVrQo&X-Amz-Signature=f6778636ae40b585c163c5de5f9fc7f8ff2897ff4567a4a5239b0ab04d4d1384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

