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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SKIPEM7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaFglnw1dBQ2R0nUB8g6lkARhtBRyJEqhHcpqj4fih5wIgLXxy9VJNwI1n%2FdVwycxt5BozNVwn3RFE9QQl6gbcSYMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGtvMM%2F3tBWqMISdzircAyGDEzExs8rycy%2FZ1pO8Q13Z%2B6%2F3%2FCCFNiYMXZom02%2FaJqIXesa0A4I%2FwDxtYYKAs1fW6dcTTnUb3P8wsM9jgM93KfCaSw0wXmkdsQ4Kx70R%2FYLLElcfgRHE7K4Os6DX8%2F3w5N1MtImW6NgR4%2BxjrL%2Fhg7RR68aVHJcXUeh%2F6q93Ff8DunT1h5sp8GkaX%2BMb8TxmRuMNJHk%2By00%2BrHcez6zz6bM4XKOQMZ20%2F3hHljw4cOd%2BApl7pSUTmWL1IDtJD05E8tP7iRyVOkY%2FdUoWflaArdtbnfiVf9l45OmR0Zc1WRe%2FlxnILgDg4oEg3b9us5OSHc0atygIkK18DUyGjex7qpXAglQ4qBJzEjUfkmAQxLu%2Bb4voR2kZtjSwFnQc0qG2G60Yx23jRqPqkQT79Zu3u33q5pBplkhcAdv0HXLEKrfD6EQ26yfkb1AXKGJylASWK6Pnfr3jd7To%2FSQnlklt%2Ff5TJRT7DS1uo8pDhEl8C6O9qtuDEnC6HYWbG%2BKefKf%2FZaC6uKq2L4PoN0G3yPBMvhA344QEE82jz%2BRFhssm3RmrUsztNEh1wpNo2Ze4vi3c6cHC4dw%2FMm6bCPUZoqvAvM01wQNKw0kQyMesyE7iN6fdngwpmgElete6MLuMyMkGOqUBel7wHL8%2BNMXhcxAKWqFSQlE%2Fz9ugUUZ8sAOhK1GugwOqWhspwYykk4p7PSdzjzAlPOpOvUiimuMZowL1pMCan0BJ16ev1nJ83Oz%2FJMPbUKsIt14pe1CJ6Z0JVuf1%2BWLn7Mc4mgaqlhkvRzqIZP5Elg6qpb8h5sjfcMAMGfOAUq2l0e2fUQXXMhFXhixhpsAfOtSJ6tgh%2FuPyF1ZMJ4%2BpDj3uK5uu&X-Amz-Signature=4fc6344a911b3fae735ed230f50dc4bf8512ce3a8e6c350940a08d3b80bee6b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

