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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYUXUTWV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpZ3VY6IFBapWVlL4f6qX8CnQ0fnYhBv1ur2%2FCVtHIjwIgTZU9hG9bwO%2FXaPPXJbCPySGDdvzW%2BSRlCvW84cAcCYMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLzXYTghby13HZEjeSrcA0hKLSQS1JaysXbOKHaRBvjlJsWIbrd0ukfuVCyEt0KqGHL5HvabuIwlQzKjzLteJ%2B2RgtHfwEELzi9117A%2BB2Epq7KaU%2BD6cCmkZh9orDLuWRQ517Vize%2BXE3XVzeWuvbZ1mnXIfHf18J58LaYUwtJJABiCZMXOweSfLUQG0TCXd1qQpJQfFAHxz2zDfFkc88sUvQhrvxbTsT03nwKMOP5VFifqdmu%2BQXlZFdOGk4h5PObA14LHoQPqZcoBfCu0co8KxLuIU59Qq7fxy5HhKw6LAGSdk%2FgW0guuTKPLpLQU0E9e%2BE%2FnwTu4%2BKzfq%2Fg4HwQKtyHQzk1WYezQ7yoTFmLvzEu1AVD6VTEiGdPBctDR1gGu3TlegY6QOpeutDucmsHS7Og4WW1WBgHRptyuMg0qIkxa9yygy7I7i8CAKukh5mt4iWp3nRDp%2FRS2b6W%2F9QGvlVQ4W3T8Bkt8lTx8VfBLO5xZKIsprsAqRvAliE0NL7LLdwAhS3ZRaiBZZ8Sb7zlJ7c2xMI4NWfQPJJRVhwRcFcGb%2B8RHf0fxW2nNyY4%2BNINP0J6sLe%2BiGk76vcrUjWHq%2BeQwLc%2BxTMpjGcyVeJqLbIFTqd3fvo2TVNbZoKkSPSm66AZdLCrAkixKMOmez8kGOqUB2UJOgPAlM77f4oI6hP%2F57081PXWRCMlYwuO8OLbHBE%2Br00F3GEUU%2FgivfGSdRkwnEbrzQkd3Gui6ve1OEf1UlNLwCw3J62nWN7vOxZTjxKJTxR862JT1k3a7OTloTtH%2FHuYAkkx2%2FRyO7eABSeQjiMqxYsF8R77tWj9OnUaBtX89EofovwdLxco04QVm5tT%2FehMkimIGhIlP3NBAIOowKIMC6san&X-Amz-Signature=fbf01075e83f617faea2b5850ef4453ca0507e4f1af22928bf0d3aefd7f148e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

