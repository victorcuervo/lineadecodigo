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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2N7Z5DU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0YYXx0D0zwP3x%2BkbUeWeFILrUaVJwhIixeyQUcNy%2BqAIhAOJ%2F5A0bKZF1CIwFKQNVnLoqlekJRd0rAw9WlwsI4A28Kv8DCHQQABoMNjM3NDIzMTgzODA1IgxvIQx2rnNZzcp1cDMq3ANGerd5Y1JljhPs9HdyLACeDFH4l07gEt%2BgL0vk1yS2mR4YFKWxrb0iXLa3WWag%2BJDCFddZvwMaa78m9PNsFW5ZMg2Lwad3TAnYA3mZ6q1JFxG03tsAUjOqxiDC8GMIDIp1%2BF92vHKhAbKB0r9QS5%2B3RURL2651XtGw40E2UthgNZ%2B9yCi33TevTKJ%2BmHo8xRkkCyMmjH2c8YVpYEx5KsLCQMg3eWD7kLu7ed6HYleVd7vjVG3eYq01Aby1VWj04Jv1fCdKEzqbWtja6dLPqv8jLnjB6iJ9BfveviZoKYKknUBctraWI%2FznOjgkK7b9VYe8FzLu2F88rp6L3zapwHWvQzGKhwyIIZjLDYBZGlRptsyvNoYU1QpmeMENOVDJs5vJIq074ce%2FF8og5hClWiu5FFgN08Y9U9D%2BkoCoMIN3g7GCF9Y7lf7TgOS%2B3lGotv9oNZS8pKopKmy%2BdAfy%2FlHqdgwzQSaIGTeb4hJ37ItR45dBiJ0U%2F0TyudazQdeTqVz8RPnlQuZ8hLahvjdavXv3QoWy%2FCt8kt4CKTdtr1uOfzADvJC%2Fzo0iFUyPWUDjFDTmV6asrSY3m6TcIp%2BZUgL9j3MFEZHbqMPBZhy5UJyJDrrTW5ZZ%2BG1RdsNi7DDYptDJBjqkATrP1hMg5tSeNS8Tbf%2FEv8dE6kKIk6hLyCByl5qW%2Bn9A8ELmVDmrEiwAc53qcRsIrR3Xy6ip0lo7yvWL6vZ2%2BVd%2BTrHKHY%2BNqlMnrstND4%2BQciQqLVSaTqLVQHrsbM0G6JRdrhv0hqE7hfktB1%2BygUXbW%2F8W3Q5W6iothbUf9fO5tskdGCb3oxMeX1Dh2dOYL9b43526her6Wq2i1tqPlXkFbjev&X-Amz-Signature=32866be879ca578de4ca650353dca6e6c0e261c5a70924e22d162c4ec4a3e8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

