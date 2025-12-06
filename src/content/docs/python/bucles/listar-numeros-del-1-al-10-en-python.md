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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6KXRIQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FHivmnvtkIKlX1fv7rHlMk4uBpRk%2B%2Bov3mUfRy4Tz%2FAiEA4TGSv3B1bza7rlG3g%2FfQtfuyoK%2F3cC89em7Q8elIUxAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMeLwDZdOJ0nXQgz2yrcA3sHT5LIgv23zFpRZjIEHgYMDf06ZmAbSIy%2BktC86x0j5MP9Alen8Pj35unocbodb%2F%2Fc7u2GVVzjt7rWP%2BrZutgBX9jJkBDTJ3V93F4cJK7Skkj%2Fk7htI31JTn06EgDl%2FwAwG%2FsSRwEGSkS20G1vBC2qWG7ylE7uI%2B0iFsl5%2FnGHjQekkCPkpAPKHsR3iM9BkceGA%2BnWjbZxsfwO7%2Bz9i54%2Fqfdbxuf%2BZsC4D280%2BuYYmzQ4JtTZMoaZzthLWH29dswVvFtcedwthtuS8NnejEJh1YdyKuFK3GoKvz2c7RIZBNlyz8mQ2bWEpP%2FqP8Xd3qKESqX%2FotDgXRO4kT5xZ7XZwD0FagRF1lXoONgWch8ttEqn6JBFxvA%2FmtKoxw5XE9X2Dy8D8Zw2X051%2FvF8gz%2BN1cfZdVojyOVD%2FynABQwetHrYiVTTFTsRKjWaN99ekXu1KdLGbIb7kj3feDW3vKKezS%2Brh6eP0oRWnp2gv5M06AjICnTRPSjWc0O6MjxFrplv4TRzE56g5EcFAx%2BPB8qkJ2rC7xedK%2FvjD9p%2ByH%2BkFQ3B%2FluVbUTOyPvy88qKkqoOg48dCKTBJ%2F8ikquhVtuSDNuhJ1sqc1pkYi5oeVynYnf9tTCFamc2v9pWMMTT0skGOqUB5Y77g7GvHIFxA7NAVFjIeLztL5qVvJNWaOvHQTUvBwMFUoSgUBfLZY%2FqFpxYyvVEdrLJ1SS0XkAy401xzLvWjXmQvN7UF2ZkWlMCWb0%2BI8QmbnodZ4ELD%2FHdZZ65XOUWYc8JD79w1WrJRniOX3UZJ0U6F2b1inio56BGaO2NXr%2BZgERPRR%2BTJElC%2FVXhkBNy8F8i2jT%2F0SkTN7GeCMvJDGWn0hQ0&X-Amz-Signature=e073c51ebc396ebe648b487618ee9029a1b47743b69ad6a7e612e4ba84005e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

