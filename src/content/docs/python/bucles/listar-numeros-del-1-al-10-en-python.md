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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466747HZ476%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCqlo%2BZQwzur1P6oSTAE1tBBj6tMaNPfl4IrLbQijJqWgIhANTjcg99jNY5pHF7maZy%2BjjQgClGfmUu2TBG%2BGfu008mKv8DCDgQABoMNjM3NDIzMTgzODA1IgzLSn0uqjFHOzt8%2BXoq3AMapj12%2FelVoxEhXTuy93K%2B9gMAVt2udBIFhM2wrxvDutfDZMeB4IR%2FTwbhDGs7oLuGLdh2DDnLkzC18cdN4ch7bUBM5wH3x012Yj%2BYYLWKsALoJrb2ZzSZ%2BfLyRMT02cxz4vk0tfHEKbVAkFNVZon1eJunRfWdMrjG48idMhrjuhzRMHK862oMbHQ%2FGOq68ibGR58jeq9pxtTCl8jn9tNqsL%2FY5AZwx9WpZ2%2FQXpwFUE40XG%2FNrO3IzSNG7fvKkzPL4pk%2F%2FirLpVdOYnrWlCm4w9ljKd5YtPjmyOV0%2FpC72fxYdWh%2F4fTpc%2F7vgAnEGD9RRV3ipSGZ5QGf0HAQF%2BQdcGcMZvwJwl%2ByzNMmQ59wXxjh3wJsnNnKbnMPiyXFEbSdwbn7qErKsIw6kZ86NiDz34p3smTW%2BMALnsxh6TnmmRN%2FqIhFmBjLMCerSLx6wvP%2BbAeICZAyVtmknynV1g9qCOpAhCQRAou%2F%2BrmU%2B4M6vzJGKAG2fheHsq2ZQ1wsDQ%2BgeSWX4Se2XiB92w0Y%2F9X04UAm9Zg%2BzNFfvld1c0AiF4THn0P9hId3J%2ByujxZ0vcgrzd8Y7VTEc2rzI3VyzMd6S1BKcwZ2mzvNU%2FU%2FNA7ZBwAP58u6w71ivq%2BiYTDH98LJBjqkAdndsO2liHZjee6ZK4zvjCkrCd7x284YkHIYNOdNOuvk1d4v2WdL86FBeXDpT10rJaZ1PVPuIalx7w33VHBp40rkFNSXeV3WNZbNiov2N%2B063Zv%2FPXFLWj3wugJS1A0wbqaHripQw3YTEmFW24nSO65qu79W5ob067I0kEzWnUCkZo%2BuYOburnOMna%2BkutiIPSpUh0Q7rGkVkwj8IicEjDrURPW5&X-Amz-Signature=0b530b3b574e36414abe3ed6f78b761960ffd42babbe56ee2a79024b68892ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

