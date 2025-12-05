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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624GK6WEJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA%2FJP0ZsyMxLcJ9L7m0lSvRCc0c5Q8w7GYwCzpYYOmTAIhAKkqGnkECkABdQ58lxNlZz%2B9WV%2FBMz546xHkY%2FfvnC3aKv8DCE8QABoMNjM3NDIzMTgzODA1Igw6ZW%2FnhjQDFg35kqsq3APGxHzvgm1PQcQ9MmTqq2tfRt9JRK2xk%2FLfGd%2FoZnVw04Ti%2Bbn7MzyJEMkt%2FNy3Nv1%2FJOwNFd%2FD3%2B66NTDpXeL%2FzghKT3WMQvbuTTpnskKWK5MxLUTOmv9tYzx8jmDmnbDhlCncfkRqsVm0H%2FA7%2BbfgjGLIK9rqbKFZW0VIlgmdCHmONUTCouTfgfytB6D3HjhIXj2lA6eAbYq%2B61P8RZX9oJqwE8eEylnqiN8uqFK2YjMWF8OH9X43MAgrvXcTPkQANUoaAE53vn0VAYREASlNGrhhj14g9qivtMmlBtsN3tNfV4GsnyTai4G%2FvwyMFCMRN3vzkre9BtBBOrSaZ4%2F7cOOpkTKw7MWltIdeHaQgO9BSIZcoS61JxBxQFjc64Eik5HQsTkH%2BdioLRE9QiFqeKIm%2BGoTI6CYfDsKTJOy997FfVVlkW1aUwC3ZQQFHAwzJllHYtFN%2FUg%2Fm1v4MSoiQfRZtBIHjn1VIl%2Blkifnv1mXntNCmWeP0KQflE6ilK6OLjyE%2FRNjMsZTrwtdua6v%2FFm8rKXqKBhWyY4Wta7yI4PwdBPedL3xUPI%2BAvJAKzu19ESwyAMs%2F4QD%2FMXtYx7wqvCiecuRwSJ4eZMWKRQEyaWAXMzUViEhPQyjTMTDGjMjJBjqkASgEuxRGkq55UY9ERrghOmXn0o9pcgWgPDorkbc4%2F1fjf5Kgnnl7HFc%2BoexJCO0KVhRnCZzSyz4jKwvQ51de6UjI%2FFmhMX7m3RhSqWYMgTYkQg9YK0N68B4GRzW5xajSuCvcbEI4B5nUQrUgbsV5FISiMMr%2Ft0cq30RC%2BPPdeyQ1yldR64JG4xv%2FKVc9JMWDYf0%2B9t%2FIz1l1Bmzc5lw0hSQgRVEZ&X-Amz-Signature=20bbc4940364c06a6d77fa356239885099bc0fde9ae5f61d02a33e77d8777ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

