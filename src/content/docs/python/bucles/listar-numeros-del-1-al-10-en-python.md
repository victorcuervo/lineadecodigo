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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYOLDRP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHEDtjdX3tXrQZuMjxCcPd9Keq6mHLvguwxH%2BRCvyTtAiA1VjUwSJWN%2Fucr%2BBRe59Ka%2BtPiCx2rrvmO1lK%2B7i5eySqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN5QauEs96V0UDT3hKtwDuZa6TLLavvlpxhuzXcALExc2yL3HLgoPKD5%2FoQ5XpKCoNL2YP2T8lCWWhkaSf857hBFmdsN4zF%2Bjh77F1A71OMg%2BEaPjZOahe1wDHJIOaI228I%2FNMc9NBc6UPKbNaBw9Zv2LLDDMZQp3EzB9Js0w5qZTsGzrzFsYTYUWzyrufDj4wyM1fuSMHZ1uElp6G4eIsG1z3%2FLZuTAmN6CgYO6h3b5663iRpNw8uDRzV%2BeEut%2FHs6CR7I%2BaR14xHVRa6a%2Fs4nru9cnoxnJsDfF%2Bw%2FMZlR6g7Y3WHiWTIIYr6258CmxJlQNDVtd1inV8ZTmGwsPExZRlpL8BQ1nyfvNRgFYVXTZxieckPNeHnf1NAM5KL%2BcVmQ2DO22c6cn2K90ZMIHQ8gP2AyOybupeDYpAqBzPl6cqLg2VsKxo5DKGNgEQGkDhK3GFDR721JgzZkgQ9pyfDyb31dmGuJv0UkZcecq6aYEz9dvEkLAe9kV3eJvERIVSwnki28ZB%2FyFRtnWP6yAhJdS62DSPyDnDihdOu%2F03gK74RtU5D9ypRzLdIrQJBh%2Fm%2F3DYSehgRoVhznlHk0uaiGDLhiVt9GO7cvoF4F4PHF4eTYwvGAbJrd9Cd%2BHx3Qgx1UA3xsCq12uhDwEw6P3SyQY6pgErMkkQMvDq7O8cWilPiIdlyoluJwSWdCTYxwFjodRaEBvQH0VgGAFpG4tr85IF0Mbe3MuP7%2Bby6e1jGwnWll272qxt3ugK2o2AeRBPI9oHrSOdP4n3FFxZBSHBDftAR%2FxkkvUjvNZwJ53usITgBuI7PZFF9BYVrQK8wapNserw05iRs3AUSV1EkZesaCPxswThc3iofnU3%2BmQ01gvdjnX0XrbNkwVQ&X-Amz-Signature=25198cb0d3a41caa8f61004c6d730c3ab09934c2bd04fc82b3193efb51c173a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

