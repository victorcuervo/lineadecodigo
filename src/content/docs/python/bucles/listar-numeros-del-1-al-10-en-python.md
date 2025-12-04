---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPXXWMH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBbmesuANGguU5RYRD2XNz7rjpw1cgOJhCNCvSMo7I8nAiAg9Wk0ayiYkDwYdLAHfpDKzvymrDFXce%2BGf8oyX4PLjyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMNy%2F9g4y3uenQODOgKtwDcsIiu%2FLUDXwt6epEIZsPMHaPo%2BA9B29B8e0LfLAAyXZa0hPGecuFQ%2FsGZP0Q1RR7CxV%2B80LoUK5OqxPpuWJQIJeq9yR2CI5zblCf1uqwWmE7u8QTuDwfPOI8SHJBrwwTqFG6DoYUxEBzARlDC2oBlIzBn0t8DpOEhovv%2FNK6K6rj7nJX%2BJbedze4UsWnIecIo7RWM6VnWwyyMA5Iothz%2FVrqYVqaNqGw4G8ebwiG%2BC8B%2Fhe2XTOe%2Fc5chiCr2hApowJQii5RyFGBLXow%2BtKCZVR%2FuF6OGOUpHU8mUNyCuE0tp12BhDmXasjBDBf9BrNNk%2B8SwyRcBLlOjkR1YJIMp09ECiykuS2gNyMlsPL003pL512f%2FAUnoRpJW5IJKGY%2BWlHgWcRUOIuulgqr8%2BuLM2%2FzfI00uAEI85aTCHjJ3ZfZu%2FOzJZdE0W42kFex8QSKUf5PZ3H87HT%2BalzT5%2FTWzAAon%2FtDW%2FfApNkRJpOptkkN29ImYtgzeqx7KujzQMnFWj8MHzPnWExBL3D2ZhC5IzSTZLy0t1D4wTYWG%2BP7h2KfmxkPGB5rfdPgLPCmFme9uA9DvXhgvQd0weCSyuX4dg7WabGPklonJvRuDARAHmlfqMycOMQyHSyceJ4wirXDyQY6pgH568f%2BFjltnd3C6bLnFEz1OH4%2F35Cj6ZwDA8GhyeI5bH1JjGUF%2BIneNaEC0PiEVx%2BMaM8RpCmfW2i3q3zyzpLn9q7dTiMAWdRvugDj5sW3KtdffXaSjRzYb1HYs321h5fkr8phQ5gJmwCk%2B4KALdVlfqXX2z8bTV3d3UcUwGDHznrvlxXzdQcb0zEI%2B1NFuzsA7PObnXJrwrz5Ylq3e2Y3cW%2Fz5xhN&X-Amz-Signature=b6565c9366c517a1fef5a75eea3dc6da811d57bfd89ed7944842da92ae803383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

