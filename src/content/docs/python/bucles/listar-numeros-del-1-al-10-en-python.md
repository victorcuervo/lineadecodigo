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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPI5CLW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFXt01RQaM8SnuY3OWQwjWmmFHYMChtLXtb7TC6SyJHAiEA8QteOwUL2n3ZnBNxqIU6gcmvFI5FOxE%2BxXI7bfAR27EqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy5sRzJY2FT12yR8SrcA9ppiOjWOTTUOsjEpaqIW5Qz8KURew3iGymP8iCJorv594ZkX9aB3qz7DzXkJhXju53b5D1fk0CnlDjGJ0bncl5FI9r4dQQMV1X7uxW2YbmfoYYTE5FzkMQDZQGA6rTJ5BgkX3kmgRJHn2K3JfjXpymbYSkAZzwq1pM5vzYfH1t7vN6sSxKh7wSyX7PzsmjXJhdwNX%2B3r5LyPfILE%2FY55U8M8SyAQZUNNcyWAtQdOYYCE0xmnwW7l03xTZy8H7R83ON7t2%2B78XuOWhqPqybr9kiHFUKVbxb8oxlQg2lGByESOlNl1J0oSzQ8l9lfdjknI7AfLts0MwFL0Jg3i87K4Fv2jTzNEAIuRnqMFSAs0G1dc5%2BbdBXNRmNesklHC%2BK0QlKWwup2y%2Be%2BA7pNn7acGi4F5OXK7qXGu6qIDveoiQA5QDSkzNz1aux5Ft5twUq6HoEBwsS%2FbHQ4ILp7EfBEvnGYKoRHc9cNJUo9PVdKKnExAFecT03YY5MS6itzD02W9pC7H49EGqZIbVAU7pYQ%2Fs7q9nxORtXC%2B1yZUCe3bHNi%2BCbH6I02MGzzxOFakVAxl0GHPn5wd3Gc42g3tHvNFA86936LdNEkzoiaIZduvatohRqq0%2BDqofCif7tzML202ckGOqUBpwV8XgFmnGfj8KpokuaxP8JqUhGY1ocjlVAsfnci%2FEf3wvcSH3kBSINHGxgsS%2Fa5ZQ4t3qjvnpBNAIHsTnhVX4j9SS4B9fJZ9WngSkN41ge8DdnaTpmIbIaNAizHI8V3xkAgQU6Sadpg1D5d6Vf6XWBEI0Ixjup9H2bxO6qLPdVROuEvXsL5uqvymR9soVzE4NFsDP%2BYiAmMxlC0edX2Ein2PtiK&X-Amz-Signature=9ee4ae758d4febf1ad3348363b2688f671f8194b4448172c804ba122e2420972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

