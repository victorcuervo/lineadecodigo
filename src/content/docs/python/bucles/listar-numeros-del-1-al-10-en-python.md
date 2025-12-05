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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WUA7O6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbGqXjldQVFkjKF5NSuO%2FekJaeINB%2BJaJ7PaKq5CwIyAiAwrsUmPHHL2YlZRXWgHV%2F%2FveSP7ypbcCsYD1ny9LXUgyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMxpiUOVcETEC%2BNMRhKtwDCM0fOrmjQ0QiVBjUdevT9ThgRhMpNa3B9kpXcFETZ21kf3Do3Ap9iLy4RJqPDOhCO9iNFXmOFweKYhG9AkAjhfffmxnYnZpdLEc5WlArbT4oI%2Fn8P8pop8l5PC%2BCegIxf9TKV%2BuQH3NpLM0sHzflWNjZckVVbLnPRI9pzWk2zet%2BLi4F18T9iQlBBtlqb1FVVf%2B0IRk6wc55lEH0jXFV1T0WaMaUgF8TH7RwlUVFosOxS6LUxPoAO0wD%2B%2FD8G6%2BeE98qwBYlr8nw%2BI0mgOLuqhzRUDmIlJ%2Fb%2BuM0qd0PZze4%2BTmNqfIalJD5byjjiKWg7ONrj5Bqf6TVk6zGPlAGsX5lFiv4sqdPY%2BUm1NuWNILciOFUebmCrS11PllkvGr4jO%2FsGw4bgP9LMhPHAe%2BFBo93fU3mD82fyeTpBXsHWltL2YE9qD55eEmXX6y2Wa2fWv1ye9fIimhuVVaWcZpFEV973HKSL8xj8H3Rhv8NOafaGTVvX%2BwJroj4Eq9pimJatgMUdeuHrt0SAm0jxV4iAHGH211EOERSLVN8pk7a42HPZtjiA5eIh00F9wExQBCuOUo3j3tbvBfHJQ1dI6xtEHoAmXGoetteon%2BJhvBQZhz4jZLIKoxg%2BbfI1u8w0sDKyQY6pgE6xWyvMcL%2FOczU5Ws3U3exsz9UQwQAux9a5JitsNNoK50Htk7G5iKbGnNS4Ts4rBA%2FG%2F2G7xz1b1e3tzvtetXVpQJ4oOnFltPLo%2BDxhty%2FQewbQg11MPgDCEba%2FrxZ63QEJwnzsjfeJ6Qt2be%2BKaTNT9OKn6s4ZXWxUXS45gLDlS2vDeXZMctbGml68APZgMc%2F5WNjwMdMh6NHCo%2BfH%2FBbkIkfhyQP&X-Amz-Signature=1fa7630e27829d65acccf657e986cb874addd849edc5b681638377199f46e661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

