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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTE3NLC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFPYaqCdd25eN%2BOPfTfqLKmhBwMzPMJkUKfqc6KeiWcAiAufLOExcQjAw3uuWdIk%2BIbcfKjmF5ZebvcdUTfQ0kjSSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeajuLOaxpDhnoXX%2FKtwDy0bWzyHCCw0dbE2Jvl8DndJj7hWpICin%2BJ7Zhj1gFzCSpTVgjsK7AZYeNnAynfqn5zaJ5GGQgZtW0ZToj1ToVseMPxBIivechOsJVvqQhj6ovoGHYDMmcuFshuZaIvXWUceJEigHoUHyTd357i7XOoyg8EYhKgK6okYm8fLqeq7dgf1%2F3ZgEC20tHTnoN5svhG0UdO3ryKIBFTetaG8hTRyv8xpBfrVl5AiSr0eA0Ql93T1VwDtoj1hTcrGMvuf5Jliz3Nw1zC7m4HY7nMsKDiofASB0lr%2Bdz1HZbk3lCEwHlmU60pS08sG4WuPG7h0aoOYcEc3QgfEt7U90N%2FdjIb0xlWlZ%2BR1kWfT60IL2%2BjC0mGMBUd%2B2bGWqB1QgSzIh5vDzIAZBdRiDk4s0WxnIRgyi7X8DQo5B2KW1cv8qxCdKKVSSfiVJMDJIMMn%2BDBoj4QC2%2Fsyh7%2B9H3aUEreuc%2BkhV2CUgTKwLPOeaS0VRW2%2FQqBZn4HWHgPtEuFQRTUFljXdoUn1kl2NnIZZUCDY3i9oodcRoUuNr8Hu7FhbEYk9F36PaYdWm%2B1n87nO9%2BFocGhe328m%2Bv00SpwHZcg5antVS06KSr7xpP2M8AF0dHU52wGaOVG8lZ8e9XykwrYXYyQY6pgHcBLa6xJlz%2F9c97eCXYuuth5FEOwACKXqV8LkTpoLXjLB1VdIYPKXRd%2B4CkKr4yGkOf7gg%2BBrxrBe%2F%2BJWJPol%2Bp5j8%2Flej0g3XJC3q8tm2O8gi%2BM1dOS26vv0HbiqaZgb3uazQyOLttHAbYCOeVjfkSzQDRqlPpNl80EXXxtwtGfrCn1DYzI0h8XOVj%2FJXOnNnvBn7Wd37Kb3uEJV%2BQPH%2B92Z02ek0&X-Amz-Signature=8c848596658299525f91ffe027373cfebd2b523363a54c1fd652bcea5ca8b6ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

