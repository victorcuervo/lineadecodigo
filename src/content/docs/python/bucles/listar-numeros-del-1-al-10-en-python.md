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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6LZY5G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYOkN3WQIW%2Fa93r7SCl1dJtTaSBAoKCs01sGkeL%2FKkggIhAOflsT6US6g9kvdAV1C5vRSlhFAqXjLhS1zSSalsIvSZKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5J6lUofauKAZOJ2Eq3APeVBUA91O5c3%2BNNF0A5a8pWAE%2F%2Bl%2Bek%2FAGh%2FvAIURxSo7c3r4IR3WeHZl5BumIlf65ee45LMB6PJZlJU8BLVZtXsWS%2FAn%2F6eMuRBNvRIwN3vwb7a4T%2B4MRh%2BYqrDPYJAibxidMjJ574X4p8beUERcPZX5lMSp63D1qxiUWuREoFE4h1RMLZ6ZHFGrJ7x6cUVrukz%2FfVOcjmLknfJqyyNxz7QTbEnzwNeInzZwFqT4WOqHtb8%2BaGC9DIp3NgStFMGtoIfbOT6PNbizEjhwrSYwWLCGHGvHhW7MkAg8SLErlbSnKtVQ5zHSlRabZJdKBxOuY7alxcQCaVofwk5jfxJoC%2Bm3lGTNhAORvszGVlHZ%2FULRsFJ8NCVhuMvmgqXuTPLV%2BjuYZFM2MkWLTnEPoq%2Bzy8xuxieX7k3dFu60DEd4%2BiJpOvj7AAXr3LtjXDl8mQ%2BLt71p1%2F%2BNjHs2W%2BsCwUD97YXcj6%2BOM4RRmMH2ut4M8AflUBgqAFkViXDBVfP3zwhLyL%2FDFn52qmpu%2B9US5pc1uspB8G7JXa%2FeSpfsfntTnx7paZr%2BiruvB%2FoN6a9KaBWi1EVoBPMGymoeFddOucm2PZrn0ap92FB1%2FYjOKsp0K7r1fOn5fTncuf5b65zDuwdvJBjqkARBeW736AeMV%2F6a%2BD4%2B9ODfLo7pSuF50IPMhWoPn3XWGghF7Nf0ogk9guDrAEmZeLRX29vdwcXw%2BWeWy%2FgNSZUIJN3YuR5wo0iwpzb7T6%2F7ihGkbC5YQOigIF1qxZt9JVSEinxmYMYMIe41oYpm8dmoFjwzVYXx4sKvWZnZ%2Frzqa%2B48THYWwsvs9ESOp2KG2hh4y2uWGmhs04MIS6yA3OMe6moPB&X-Amz-Signature=2ed769035c0b0edbbb312e51029f1fc9619f354702a8cd98f4e40fcf127b592e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

