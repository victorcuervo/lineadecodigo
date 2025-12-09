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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FAXXHUB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAznDA1t2Q2YjPw6ZK5vOpqm%2Bs1McSnQ1CeIALOcOYxAIgb8d9WjxsM9Y0onVoS9JozkuAy7b5MycqTAjY4fiTQuQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRUhxL0nJzsqqkrDCrcAwifthdU6Zl69cfIxQplk2Dh2FEwX7s1j7%2BWQmKEY%2F%2BzQYCS5GwqScns0NzWdsUVqOgmjWhOOvIqANSIugrsZo3LRSCqbkCso4oU%2B%2FwN2RTbBKwkC30KjjxuTelTxIybLiFJ53OAdSfxpccufFdD8dz%2BGeuWU2XIqQHzJyfPFX%2BDJ6cQAQTQErXEgLJshydzqogXtmfQuyCyAZFDVNErxsRAvRl5N6lsrDG0Wltcry9VS8uEsGeUILlOaAvCY0qiyzCX6aDnJrAU3R6EVxjXIFnSdejlAFCfUKAp3nxWxoauJ%2FGhASNUWojDYKb4b%2BdmRFdZ6OrLNENU2Q0xpSPwN7mrTLlfS9FxWxQbffrxrJsAqgj6CvgxE87i0SzkXW3PLTelJaok7HUUiFUYjoD6rQKQxIt9NfmTUX0G0ImUgRg4q%2BE5biC4q1gayptPPsCK5yI3eiLrAWPZXxOd%2Bz4XEWPnIqL2DWt3lxDXBz8oska%2BkMJ2I%2BHxFJDnUqIbIUFgMfsbCk8uI%2BC7trfVw8fJ3EPfJR6d12WJFKaGrUGwedxvEK1kjBWIfQHBJ5IVYYafdeUJwP6u%2FcOGxRD0cRX5DHmb6VU5HmFeXlip7RIsEnyhIZni7nDJJ1IuBookMK6H38kGOqUBP4aqquVrKKXWmecthJ9Wt4zToNkNhqCFkZTbJ9aYYiGnIBVx395NEJrht543RLMGw7s2aPVVJZH1UALAB9iUI3WQg25ptwcw2bb8cNwsy3qAM28SqiBS0ZB%2F8ocRP6DlKU3o6jS1My5kR98qeVvf%2FMZKq%2FcYIUVj8BW65mzNVp0HFmjWQhYimZZH1r2f9KQYLtgKs57NHAMTu%2Fjpqd0caYM%2Fn7NG&X-Amz-Signature=9d8b6462cf13533f73cce1321b6c00269c487038d444a13741be6a65e2ea57d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

