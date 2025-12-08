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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNC7JWRA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiZ%2BsUksqsoJxjnbi0ICwm2UCcdMddOdbywSOjRkVN2gIgMJyOR9JrQa6g1awnB8TJRByv7ZQQaSAFgLWo7qSDyfUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7VzMeq%2B7ODi1uGDyrcAzC2q23%2FmWFOMzIhNRNUhkpXw6MrMiw0SLubdRPpEECb%2Beefw9hQtsdWn267fyOpAXfI8VTVGgpaTsZSHHLDjMiF3lTJpCbt2vqPL%2B5kUmo%2FVubcM%2B8dg2Y3%2FzgsqykeTSf7MbihhbIYxhc%2BEMQJRiMVrRcro7KoiSTO5zpqm34ZoR12hDQjZH3vfCY89ozR1qVqPVvqU3TqlLiTahuM7Yx0OpelWwtcVXgkUyimE8hFFvzjjacj0iMPGVDZViOPZf7ZHQrVT%2BtyKjUYZmDBGvZbdauHGASfCtzQMlpE9bPfRu3NIljAIe71553mRO184oVNhn1l%2FVMKYt1k6Cum%2BGIq0u7TR3v8c8deEzizkc7QHKnHg1fIiUPtobYmEljADCkko4QFpv1kSDCef8lr2TrBINq0A4BT%2FurQxKuhercn0Yac1ZNsvvfylh4lX2gJzSrQB3B2Zuh5Q8E8VSsDMe5PcoSM%2F7tpJ%2FHfNFlKY7u1QbZBPObLnEkUPQ7WrK3JSyoJtVZs7jBa4WUwVS3AKIMjtP7BThJ%2B3yI2vdoHqWV1NDbu%2F5uEYnAoDFgiLy7sZR5Nxuanq%2B%2BU1yKWzsIq%2FIvkokusohpkJym3nNcr8NOfxHzE1KtWszSYQFI3MMXB28kGOqUBjhmECXkbpTPKjhy%2Btfg1a2v7OBg6TJk%2BQKLZQjLOK60iqRDWNNG%2BOekg1VtOsFXE0ZVjvCIVTSFKeDkwiIKCrkj6D%2FTyNxYTy6uk1363G%2FRcjwG20ot2bMBZKysF%2BqQrYu9n41jBr6dZrhozAfJAH6FRNzPamCw0V5OmRUHOyIIa0J%2Bh%2F2v2gZ9sJ9OAwn56mv9sWF9VMRFIPfxjAIobk0vhRuqH&X-Amz-Signature=7a615429c39f89a01d44b7ee42cb5d9dfe4f1134e4762c2b2f7b092c01aab402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

