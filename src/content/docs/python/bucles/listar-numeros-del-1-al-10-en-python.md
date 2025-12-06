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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPYYXQAY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUxgWzFQy85WQxUPYAioIYSNUaigb7zVYSpaje9XQSHAiEA5h9b2ml3623SUhs3PG0KlwpnIMNEdRMFKqYyS7ROKysq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI72BgWo150m1UVKlyrcAysZqfQt63B0uIvQ6dHt5olg2puiDLIQxguiOXotK5byNPOeZtymdljHnfDe8V4oPaCVZcD9%2BaTxCj25u8rlIJUW1OueEKYwViAaCtRHjaamMHy6lOMe1gP0%2FrfXFSoafo06s84obunhpvIeVqM8R8AdyQhRrCeXA7qnpJSWj1kr1ipk35%2BB3fUtlzdvN99h%2Bay%2FB5UZ1X7uSyvZ5LYybKF4zttEmiZXnq7P6khGc1ME8xQkJLvkqaAKgR8x5a1WK0KEVHXGhKoBCacTBm%2BQM8cNR2Qf9%2FQ5%2F0Q6tsl1mf7DPnF4USJr6Tzebs7YDcZaeRH3vzn6kk0%2FxPBjyns6YpUOuQTFeiTgExgIltTCKBalB9PMzxJcO9UCzFnYgxY%2FUBcXDS81olBZ%2FRe5yulilJcsjoObVuTEKWZV%2Fpi5ipEuh1GdGaBqR3MWOgNXwdn5RyTyIV0R4zladqEzyJIux5H8i%2BMdU0NljfCJeO9Zvb9%2FOSe5h2dvL6xRotu198sDYLRizcYWuwEHC6ZxlE%2B%2BqGmKVbFaaUf4H2H3REnAW53Fsxh5y19kbhx7j%2FotTZqhLA4r5G4PycX2u9QPX4teKCzQ9s6WhXW4K75aYDqR14LrNH0xeR9tGtZC4xpFMJKn0MkGOqUBc1esnPLyJYFvvxe3DjRBt%2FNRg2zwqrbrX0OpAiTjaDPzbwXyyR2ZCz%2FJmVUuunUsLU7c2yVOebRa3xzfPrWzptEO1rRYlqYisKiKV3l2o2E3ByriYtnOu1ux3jW0bSFVrfOSNzPifkosiclbyDaOqP2NXGnXODQQacReTKfbYDFlo8GlbE6ls3f5xmBk6VRnNhFo8bk%2B5agKYRjX34uXa80I5Ruf&X-Amz-Signature=e40f69db49fb1cfb87382a463409f6d95519dda8e6c0d739c83546fba27b56cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

