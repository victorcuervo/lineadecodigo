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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUB4OTY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgt4X%2FZvAuC7F4Bs%2BFE%2BW6lfu%2BSIaBn2a8Us7lha2IdAiEA4dKl77tDxLlccJ9BZ%2FGgser9fiE8fel7rFx615fIGQ8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLQACBB%2FgSM%2B7LDyEircA4DYOH203zgy1nP3SM3AleAd5v%2Fm8GisRfJb8HWYk96gVffNMxfWqqltJeWxBJpaB7GME9530Xgk0ABtu9gAW2173guzm4st2OZZ0rYLIfD48ns24N0aHPS5sfKpgzffWyRBCTMlierVJtNQJk%2FIOYteEJcF7vj%2Bk%2BZttlYDJduCHF8wFI1diQ7Lf0N0c8XeJcaJynmI83Ma296Z3qOAcz%2FnJxjUInhy2H6H5OnZmghXXLRZWWtIACJdXt04dFfBnQlc9BrRQKHfMZZYHnl4aKIOxC%2FZfJS0Q3rXKyXTKLAsYLID9guz%2Br2TSad%2FF7eCaopV6NzHYM4TTH%2BDxrZw3LrrN4sZob%2BjX5ZW%2FMsDP7T8FkzGYC3WXNnbtnpF1a6EXtP9aaNM7WnvzXKuL7O22XAAmYJsdHkF1H8uW8LlJnUp8p8OgFCGbARX665HmnuOWrrawfJnbT0TizLP9touJkym%2Fg%2BRac4X2u%2BAZPRUjjfKg%2FjnF4nKwhsTpa3TJSC0dAAvWPp9hXTRgr3cWAHDsUKyBq8cdnn8WYm4LAqAYzKE5addCxWcFncxo9gjKyshMwxuMe4Bxvi2T9E%2BCND66sXp2z7OwkNHaPtrhSGQjcdLpEVfNFZdoety7OdgMICMyMkGOqUBEQcZewlhpF%2FsWWCL4VGWLVhurHjfIar%2FdXpLWdo1n%2BH1RtvNPos%2Bf%2FzZrxTi%2B881sDjEg%2Bw6EDcJ%2FqnLVzmhTBE%2BtXLwiGFIf6YH8Oy21qxiL4SGLm42NAHk8mr474UhDnXCZ%2FRcnbBSIKqHN9QzW0CJBVZivlnQDrgX80Q%2FJlNvgFCZFsxnZgIPrpX6cI%2BC0BosoiMTlZzRzdofEbrUWAqgMfja&X-Amz-Signature=59ec02a3b57d8d5efd469fa6b2c29cba06acee7f27be3c2beb252eb5b94d7eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

