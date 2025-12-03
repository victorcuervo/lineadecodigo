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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53LOXGD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICCprTVqg%2Bn%2BLtqbcJuah7HpxqIje7dAjSPkSpR1BnbUAiEAoYXeWhE%2F084B%2BPMP9F7Q6XxzXpaj%2FGYbaDB%2FtvciCH0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJADoTtYtD%2FgiE9H2CrcA6xh%2FoSz6gKemd4VqlkT%2F%2FrP940oM315Cg3fP7Zz3EQZWbGlD0BuuWKuv4XqMBhyztvQ%2BPNkk0h9GgxwPcJpfoGpggNrYE%2B%2BWx6GcplWDDt6nWzkfs7PhrjU19MfEUFaysJhRwbQIG5v2OmX91Xx2Z5MeOHp1aN0fuiZWqLja5Ul5799U98DwzkOqo6eIFJKmUbhuMg5iQnNGwwPAtf96y15slH2AGrUAbmNDipIcXvwc6%2Fy3JU5Xe39z5MtHHs6SvVXOCDLwEFxwcNlPsfGuLsnGXnBnC3%2FgzFB1zAevb%2BsXLxQqojVFrdCu3UF7BJW%2FDOpFw%2Bnz3UbvuspXUx64%2BZhvNhUlMk6Uw426cee3WH%2BjgQKBOuOc3%2FGk9ARXR2VAxCsLF6MLkFrqWsWcjD16DyGBF%2FwmktiOASN%2FYNNSuUwF89POQgaG9Idwhz3FK8T3yxXp1d4dmevp0Ko9JgMUCj4pwyMZZypPps%2FLOqT2m9C2J1DHiRK9pjsePJCWO3%2Bft7o%2BXuhwHJTMPOWG0%2FbGOXenY1TcI5ozij6kW7EjdKhhtw7qW3wnxKD7uYFjrFGcKsz63JPp1FwKkWTvHaTnKo9Bt5nqq0pS1z%2BP1XT2X%2FluZ0jTJkf7LBDEeliMICVw8kGOqUBNCMa%2B7b%2FPiyLR4198C9K9Enr9%2FRknHWCSSbxQ16ZqErKla614iOVsNjFRD7lxoawu%2BDJogdxIzbJwvnGEfi1EzJ8%2FQucx3j2Fgl9%2B0nLU2hX2KdTGxuS14B3190jUJW1BV%2BTNftzqGPCYwWOSjf3Z%2BSrheS4Sf2ay6nqBq7olW1Y7BLWUXhrqPOBlSJCt9IcW3Rcq5rQR5jQ9ZNTPipLa3tFe77%2B&X-Amz-Signature=602b31bd219611f38c2d807895c7794676a11cdbd524a65007753d8e626ac546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

