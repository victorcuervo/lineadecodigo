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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBV4GW7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGT4WBWSTkjFplmIrvu7813pAWopMFFRJpGX086uWCQIAiB4N7f2KVc11ge1hCpTEiXa2iYMlbxbeYIRJDDpGoYlPSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMUw0n4WF3sOemBD0zKtwDvYf7lyTXrMdkHHb4bb4l%2BQSJplm2yUVZs4TQfjSKNMnBixbEQ7hrG%2Bb4zZIaUZPoLTJCRGoLgyS6lJkRcziH0l9Xb8TCnB4yCvZGFafqKNIdaCsI%2BXwJzJiqc%2BxpkH2wMJlU53O8kEkdawYRset2oBaa7uUSrJeeO4wE5UVJkyJb%2Bft38CaG9qvtDpmYBaljDJHNgdbkb3I9fSKKCknpN%2BHCDJ9Km%2B9IXWbcxje%2FrjNrRTdwvBgTozl0B7NE0al1%2FENWCRgN%2FvA6B8CF3v1WTSHVO0QelSml5tk5UUDgsQAGuL%2BejiFOaMq94vefUC9MXjoQaFrlW5dpdtfTOodVaeX2odHNrP2nyHQA8xlkInd3TNLEQmGwUpSl%2BsSdG%2B26JAEKMxjWxVAtMZmVUNGWCS7Q6zZCe6mVAZYAgaDRO3tJiXGaPkSiZYCMlQvDp3k0C0k8PQ2PPevzDoS0ZEBanNHgN9wlxHtJDrHq1800f6j3xiDgPmNp0w%2F9s4NQcuNJmssHX7l4BQ7uXd7FXn7Na7AOxlOPH2so7h9IBw%2FkKMFmwn%2Fqz7yI1TYkrXwxF1lnadCzLSRsPZ%2FvVK2rQg1KINJfgkEi%2FHxVSD68HL5naqOlSxVZdtepB32K2XEwv%2FjCyQY6pgHKGe0O4%2B3UAfZS4qawsNwE68b7DQY%2Fak4H5qDyBO1F2GQjaVLDaPFEntL6JrTpXSUhvUL1tg%2F3khQBW1YcVAYWUR1FJukKQO%2F9umRz7h3VATODgyCJ2CiM4NCO7JZwfDwFpiaZcgXJpGKziHWbiE%2B7kU7iO8wCW2oyBE2DQ%2F3PhJR5ivvhmx3%2BwdiYu9mfSkPGc%2ByDguOl1HTgJPzonK4ywVRyHrER&X-Amz-Signature=0b32e3250a13f9ae7aa46f95642c3c30ce0f5a35addf29c4ef4da4c350e2b60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

