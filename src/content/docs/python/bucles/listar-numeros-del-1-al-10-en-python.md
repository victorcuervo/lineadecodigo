---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBJTQDK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCFu4%2Bs3OBvzo%2B6UQg3UYiY0OPoUPXWYNh03gMFYK1ZmQIgJiHPwPhfwPqbdoNanp0Ncthp2EtcpWBN37Cj7P1bfnAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDE%2FHOr%2FfbjQwTAj3%2ByrcAykDPgMZmMnxtzn6UJlOYvw%2FwZy8wKiVrtIvFXtOQgJgX8biWv%2F9Iok8kXzV2wZtTJRhNsA7hKRtjqnRazMujdR6AiOb04DyVLNiTcJqgmwu9X6TN6XTBi3%2FuZyJVZoUF87HnzVcTHUTgU5je2oJbPZNKxa4IEDKEfrFqdI4hA%2BE5oU0A7MqPgOlCtKovNG7oChY3ZcGEBh8RSRlIHBrGL5Y0AqfxD%2B4t%2FaFaEVzc0PEAoVXh2zIKUhX06GnSkiQVucEL5RB13pH4XgaaqgyjyaQJcEogfhVlJWmtGdsp%2F8C%2FnJFdlyjaawBsjicNQuNQawaZRMlUd%2FivL0NI1V95eoPPSMZ0eOj9AsGPdXNSCvw3Wh8G453Pppod%2BO%2FBJkmVy9L48l%2FFGC9RWSci3Bj7FFrqxIgOJBM0zTo%2BgduGJqBxuRBdXrdKrjdF%2FY5%2BGvT7OKZ4mU%2BxmBZh939D%2F1gTtIcwYgW8YVa4HtMY2tisgAnbiL7p9o0dUUIWVhNQYp3c30qDcJdFou0dJrt652cITRposyCRHQGmnFV6kHILODhAewsqOeimGLRWkL%2FyllrhiSWuFue4UXcOwFVJ2qHVuUfIae7qD4UAqNyEUyrUe43g81kiYdc5WpgYk9AMMO%2BwskGOqUBIET%2BVlZHOKXJokqY%2FeYbeR5vcXiVLVKm8y9tG6i6UH8L3ezao2TaJOI4iLDiHl4yJzyyfvRVJaSOzS6kLF%2FjGCogd6OgHGhYpo4r%2F71lJ74PkaSvvNIhM8RHUzKEXX4AIJiD24FhilaJxnAVhiyzjjht2iDQ2j%2BrpvafH8YoTVR7TTHyF2%2FdPkhYXRivopSkvdg%2FFkqDz0ekp0QaO%2Fah6sSxmQzy&X-Amz-Signature=72831bc0b45b5467031caead9956e20defca61f753ab0945d3a10d54545b8a30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

