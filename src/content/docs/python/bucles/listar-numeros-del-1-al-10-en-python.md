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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQDX4RDQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIbXA8a333rnJQ3rbXarAJSG8G1MQPWpoSTWusV8Fm7AiBV92lMBzVUCtD1MkJU6EoBv3vdsAQPCKkvUEtMVm7gHSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTL5jJax%2BLQf6YUlsKtwDIPFvhCV%2F5VxpDa%2Bg89NhY4vlIpwxt6UAiaFJ01MyH87DBnL%2FJO5%2B8ZcmGJ7bATfSqZIczYkaRlsVLIfAun7%2FMLBIrAitGIRaoxczZlHhEObbQxbsG%2FyzoF5XKKplVmjBbb9S988%2FFstU2ob3rZ0cYbER6Gp%2Fbr9JHQz8tQ%2FnKNxgrOmQqyAj1pR8mKzTs94zvyUVjNznuEyE7%2ByGUqzgpW2sq5KuI5mDztC7VwQar7Z1Hgb4Bm7Rl%2Bj3WSTdT6wpvhzAPuCGfCOagmKWddqwm4JuoJ7bKzoFyI18TTO8ZlcCuuyV9ox9FDKdWB2wX44DSLzNjhd6sVhZMSOowDbTu%2BCY04nKH%2B9yDjqLrSzYCGDSQZJ%2BRrME%2BBh2Vi1R6wFtPGKIfURH77Q6o037A8n6Stwc%2F1M10WUd6Dyk6UCLos0t1gL92AKgqQvXFCadVQDbI%2FKWjKoy6y%2BRKDthA1HeCeE3arhT7KSC6AFdBIm%2Fjy%2B6hsQ27y%2FHNh3Fwj0tulTRL0c%2BUnl7VvK0jSOzK5H7DPwVPya7av1c3l9JE7wyhporTalI8ta9wCZRj0dsikMBLBnWsxa%2FkvVf6mYeoyg2LGXxNpc96%2FJ7%2FaXCbBJXXL8Z%2BP%2FrH%2Bc8Bb2%2FXSAwtuXeyQY6pgFavwY%2Bv5HzXIClJqmZ%2BQzpT5cTmqvpcNXPlvzrfdNlve0ujyY6bUfAXJjk3vzEhUoxvqIS5R%2B09tHhCDlF28Kwwx%2BvfnfOfI7rMaiEGDT1veELvig8Yi0w8hzQZGWOvgZw%2FyBW8pCFWpFIK3KnqIUVQ8Gwuo2uQc3Pg2q14X3fhBRYXbxL3JWqeacfO7PmjYjWxMG2NiQ5fj%2BxYDpoIUva8vniGCJl&X-Amz-Signature=f6df3f27f7bc01b71d70695cf28d63e189e90b1d06653a83f06ff83adb150487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

