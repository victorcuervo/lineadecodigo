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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANJ7T7I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICysxt%2F6mbKJonGMt2EXZTEFNxAsOj8RXhXnA7AlzJwJAiBIPwLsu2bk3dbm1gQvT%2FBIo6szs%2FsxRQHMxMXc5RGEVSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMZmc64PsmQmMNhNEgKtwDayqsgrC9GTEjDbYJ5BMbTYh%2BmAsXsCNH0zB9gU2pnU3ViUbAUe%2BJZ8sceCqT6AHxPBOlWB7pmkTB40pDJ1b51Wm0Qlug2xTiFY%2FSLbZjtTR6byjQJ5GtiBTQ8MRY%2FSS64PH2Jm7b0TpZF8%2F8NsiasT5JR8sV5UwA%2BgDPRh%2B97crxRIRpOFNi5e9Zwxg24o0pcSog%2BhbRROsrpqNvLvmQxpemNzX2V3kxxDMfacbWqnag7Wa8%2BJhnejjyW9wSRnynkUeMpmzUqPHDABKagqooxHwSDvonMN6Burj%2FDqTnhWqhD2uTNZPuUgwcqEdqQ4AmerL2oJiW51FKs56flUdstaolccCYIZxUXm9rQsFrGiBsiD3i%2FaUyYdDLjGnPyWnDyWvHVhB5zxKl7Dm3CLKqiHpaqDoAuCKM7BczsDlX9zEnKOI1ZN1UCRiGPoGtonPNlj828rY7%2FUW59g7f4COdjFf%2BvRXtsy5EfrJgkuHip3WVSqakLzt0O9kfwDmnvTtKji%2BklBIO5cG%2BXXNBI%2FNwWeu16f1JenX0qE8osDJvYY46DIyBoW%2FI0QmhuiugcMTgYCCBRrYs4f4QuvcdbmNf6x5zK6gUcKjAZrFuiBLbrIqnXisenCXcd0v2YrAwvvjCyQY6pgF1Trvd6buMuqcfIQWgxfajhMDMfniuJEOBEgTwMJtMHsIiLc%2BIsZ%2B4FT72X8jnT3kL3V8cKL8R46gJANiA%2FQz1FYYMdPae5HDqjFq16V0XUpvfjNPxzc6%2BzBpPrpuYb4dPF0UyzunXtabHd8ywQKvn940kAvrzl0ksvkiBgFMERvVzvYiTaQ9dgR%2Binwk1VcsTUd0VJmB919YlUPN2eiYVbt0uxZEs&X-Amz-Signature=31a93b1a64e1277acb683b0a047976804b343e68ff6115497b9616f16e10a5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

