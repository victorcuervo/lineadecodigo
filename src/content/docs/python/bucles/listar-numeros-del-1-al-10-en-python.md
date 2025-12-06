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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Z47EDZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEayeg7PykYo108%2BabEDJiVGEP6%2BtTIVCpGxNTl16G%2BNAiAAn%2B4RvyxUu%2FrOBop3rb0R2zxEQIsKH81ZWTv83rg6WSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMlzOyA1xtQBFyYDHAKtwDX8%2B6bxD1Tw95YKBg6g94w4FjKdG%2FmyK4DRUelHDDPlybKVusjufRd0PTwTbyK9RrwuSgN5jbGYlH3FnQ8ZUaShA9yjRaz4QlwDwCtlLWOZUQaBs%2BwI5%2BiLUEkQ2EcBuDleDwOPPgxoeaFd6MKlMXF5CdFNdh0c0Gv%2B3GRj7Lgdv%2FoLzz8OiUGg3Z88oAOJVe97s0DYOMHsOECc9LAsqI5931HZGgfymHy%2FLMjEGFvdE7NW%2FE2C2j2B9U6%2F7oBLtH8CK24LMYBrFvkHDkJ1ZWS2ItiWV1eoW%2Fb9eMA9sLRESS8AbdMZGVnNyY3IbLFT1y0o6O9K69O1g%2BOKYJ9B%2B%2FGjS9YMUl2fygcDVRiEHlpYE2ro7Dvol%2FzCbCp6wml6YSNpNpmZkTK07jQfXmD7wrbfSQyfqBJdiV7v7ndnpdS2tzclxQ28AKnsEjW1XaKMO7AWHrOhmFbmfB8hpdY3gjFyrmH8VPCGNwYrkHePoVwLwBjBO%2FjSypsfdqlw%2Fer3yi3Q7Jhfy2NdSwyHDCEAVYPDI9W5w7kOE6%2FlUCvBvRkBGL0WyNoKTK5dMS3FBnyWyOLzusJGr4%2BE6ErYJ4tyDmKbK37TDnjUjIbFXe3buQeVOwA40RLFpEoLxlTsMwx6bQyQY6pgHRFo1YwP%2B52HZryYkDky%2BHt5gLJnyWYX9%2BivQnrj%2FjPUIY1H3d8%2BsnxOiXivAZmExe2Z3yTk0irF1u8BwTAY3jZhwKGsWUl33p9cL4OtMTo6rgUyUv7alI6pNBRSwha2Yuo8judVY96G5qGx2hfUpEei4qb3kDusytqOhefX83L7qXpBo3BcJfEzatt6XZ78sGM97f1RH6Ao2if1Sv2YAf7O8guOwW&X-Amz-Signature=8d353621ca7abc9730f7d82517c2b8f53cd71a2c773039cd95988d8ed4dcfb4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

