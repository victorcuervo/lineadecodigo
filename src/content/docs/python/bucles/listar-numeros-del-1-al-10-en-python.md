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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QPU5JXW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrbykDG7OFeXsgPr1uLfjyTlcseWjPTCvsEwJPQ03ztAIga8JNOvkQJtVD1RvgK0evtBUuV2feLqCPQcKGb0jCXVIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0wjB7llf27wdIKoircA8ygSrZ8gRK1%2FMfwIvkiBMDalUZXA6kWMYkqzK%2BDW96kUYEU%2Bj4rY6UD%2FIv%2BfMpnFz41SU6adx1iEa%2Far0gA4ejuO7OwpKm%2BzvutT5bMmhvEhZQXkH6Pr3WJNJ6WqXBoacyJ2Y1GgFGg%2BiIq5aHHFzdCR0OKiohkzceYTkZ1hbZ8IJaGLjqM8d%2BzNRH6ml3xY0OE4%2BWQ2ZSm9FSj7jGM8cqO%2FhNgu8kBS2o39EZPHG%2B%2Brd6sN3w7tkQ1x6x6Dtsb6stDStdtV213TMUN%2BXuBaFOlxrCga7CAB4jCZokR%2FbXP05z9k9A15kQcp8P6q0bSo6sbC%2BFlkM%2FZY63YLROVp7gA2jJ4fOUGBTGBJXAN4gwtklaJqSy11rLOH1zKfF3KS5m4plHL3%2BVpitRjwyek32duymzNeqNC1DjHt%2BlfgRYTIEKJi0LOdGWHeNjuOrGB6MmNq1QDA5xk%2Flr6ij0EqUCKRBZ%2Fe8zTkdXBjEWfflqZFTAYiX5kJXPQDfO0IdfOMO0N60I30nEJd0NtHlnCrAo2isXc3kgUkWA%2B1%2BcdOFwW%2F0ip2T7TlPppewKrH2aamRlQmTNuG%2Fu%2BcLsYNZGNHxeg%2FUW%2ByXse9kVjfQIF1gmJItCuzlrtWzA9QGhRMMK%2F1skGOqUBFAy4sd4P6sacW2N1RcqjnTkYUKsUUxjRtwSeO%2Bzk%2FRbsSDBj1g0Onid8Iin%2BtVeiDyX%2BD4L%2BuPpWFoWaZG6kAv7c%2BlLGIXeD6bJzWgffvXPE8lFRCXNZ9maoHs%2BqismrsCzBa5Q6eNRwJ2qu1OvVHrjDxN4qWxivOsFdhNVKIhOLST8ki8s8YoePt3yBTe2KnLIsNlqVAlup3mLvOB%2FfvyJwheuN&X-Amz-Signature=31e89873b15f5de30fe37cc539abe53d0ca4cad4672d4dfc48635a23839b2f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

