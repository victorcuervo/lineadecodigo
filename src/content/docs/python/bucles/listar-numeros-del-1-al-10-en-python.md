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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRYI4GPW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHvyM%2F0av4TGxmL%2FjVKjqAziujw7WQfGrlnVmn38NHlAiBYoLMvEcmtsP54h3fX14qUVGFTjWAXpHaL06gLawnZ6SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRnmnXHJbIa2DuPR9KtwDmecz2fRfOSXrhQZLlaSYhECPLAFqo4le1StdHaIDfT8tBUjvtUxeG5%2BJhWzClZMx88INKxorqwPRgNHfkptuJQdeCKkO5LJZukBZQQ%2Feer1Xj1%2F1ylsIp%2FH8VLFM0Np3mh6vbXujobK9fTywzmrwa4XBZN2VQQ9tPpYnlLfw1LISt8WO02fLY%2FB%2Bgh7hp6r2%2F21eLghpP8Et8DJyrW5CGzlXz1ftjG1oOs6uMpmC8CBTonAwmHy6iZlyl5CSkW9Xs5CtGRmeGV0wtAMollJPN7MTGXeFk9UVZaps7%2Fe9zqc6M7%2BdKqyuV958q7crCEsCHouWWDDNzRJ5b%2BkH%2BGUCn0MZTttRGxWyjMhHcwScyizoHV5qLvQFBOnfp7phcxGWvQn4zb8lMpdO2tZThbWRyJi6PpJ4EmAl%2B%2F6Dg%2B69xpgHu2MWbEM%2FS5fRO%2FJtbAjWc0wYw5B94TmYNcI7ypc2wbAMdsWwK1I2VwoOSM%2FGra0FJA9xGNvApj38p4Z7oDEU2czDVt0qWTw4mP%2FOkVnY868mXjb9RNgVaKxZmZjeSYfVGUHYypUjZdJBIP6E%2F57JXlrin7FYvJOZHRNFQj8OJzAi3uouoVLy0SMoR5pd6tkAkVKUex0UfzjSUekw%2B7PZyQY6pgFffFM0mCWHHNw83fk8a3dIfkOBfspnwHqbAN5lndpTt1PAsi3b1%2F%2BRuiaO2NnZrEAn8PyLtigxfnapFArTscbkChwzXWdp1Bn0UaaCIrQj3mF8cdzCA8Kb5dn%2BIc7D5MzQWar69pns7BEsjvixJSa2nSJTw0drldesDUkc%2BGBP%2Byud1IBIk2YOfuSDfsbYa1gAF2Ki8C%2F1HoxTakggAHEx6DdDnP7%2F&X-Amz-Signature=8b464e93d365276d48872854934e6504d0d0d7731a7b688984c8967548c58a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

