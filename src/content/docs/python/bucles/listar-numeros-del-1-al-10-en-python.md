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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRCWNA7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzJIixVGvaqjTGVAzHiOKAYL1F9lL58eyu0xyWztZ5vAiAkDAUwbb0jEXOs09M%2FC%2FzSJQpzCILkZa0gz6N215jlVyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgXTXS5nAesZ7m3jKtwDgpF9MsLK%2Budsui5zWdKVaWugziDIF%2FJLnzh15mMa%2Bz3CcoGvYAvlw15KCyTdbfb%2FLOuZYi4o37d61Ym%2FJ%2FK3dH%2BxLvCDCuukXr8KHNjdgTqpDQ9Ow%2FBUZBmvlXu90Xxc3bgCwm882BQaQxlDaCgKyr31jGxoZWvCNVQqm5sQ8%2Bx0YxeQZR6%2FeY5SJowVpe1erAroqFiqfArZz2GkJrEpDfKvr76q8XxSYiKMeK7OHodzli9StL67sNKcsEq2XN0Ci6Tgar%2BU4ezUc2xSLHKgKc4Z7DrxAtLrRNMTE5%2Bp7ysjbpksPo1a%2Bmy7bmUgUqu9pPg%2BktWT0fEY51Nb%2FT4pqY2S9%2Fq%2FesXh7i3v9ZuqHb0V%2Fl0RH5XEKjH0LTBJ0q4jap91frMas80t%2FJAT5hGdWz19z4%2F2Qpyy6aMjyVlEj2EP6YWm%2Bkhy4bahSyde0aTZZACOZR1tcMgd02puOf%2FuDyP%2FZ7vqvxp%2F6EEr1UYyj0D%2FGMYwPlA5Av%2BjvjI0CbJue5JsxYZ5j76wlxmncGrKnR9%2B1dqdmQWiiKRR1eEj%2FcUcNtjJJWqhPYk%2B%2BbimdyeyoE0oQDLhGI21Ury%2B%2F71pS6tumD%2FVZoD2ZMd6g25ayzlv9O9Lu41i%2FA5DB9ow9ZnVyQY6pgHwp69n8GnEuKEABd8sijKTIUShwA1A28yFQ%2BAD%2B7MLg5%2Bfp%2FOqAjBRaWH6xyU5VH9hLoKllGaysCkjnuwe3sl58fE2D1GwJo7sUVHFVjpQRWkBCTenk4mQ2O9IW6mBwk2Pl9fgSn87XoAJ226S6YOaCP0Gt00guJvrCUi%2BxXCFGcBkrHYGRCGOHKQkVfd2UHAzzhMachIsCucR14If7cPrP%2F9Kk9t4&X-Amz-Signature=d0040307f3f5e11cc541ee6272d4139683080d68558babe3cccdda6184fe1c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

