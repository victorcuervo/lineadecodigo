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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NU3QXI7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDMmyyWxz%2F6nE%2BIAGdBv4VueH064A6yMRh%2Bsb2B29wdSwIhAJDBIijfkvbOJTfHcXwDjRlJ1TYfs4%2FmJ6Nu0%2B9iw6z8Kv8DCEgQABoMNjM3NDIzMTgzODA1IgzOWuCRaYmHabjgMkgq3AMr5GINXjE7bbTArTagvQhaHXRt2eEhrLWbFWCwLnSgqfLNLnN9IiiMsJ1XQO5YzD%2B2H7cN%2F1PmAFOu5zgHiQV0W15Yj357N5ZT7ZxaNTfqiXQGZxLZN0EOIgBLCY5qqbg%2Fzn6UyyuOk34%2BJr3fI8HEHPbF0S3hNvx%2BsI%2FUqRSRrLsxmbaUyj04S9B%2FaTBm%2Btu6INXh4twaUcEuwk9G%2FT%2FjWX83fDJ1RSch2z7d4LQ3N9gSDb8q1JeVEBZYeEidoUllN9qJIA3SDzZ59F%2B1DnJsJU7JznNfzFN%2FhCzUF1TN0XnH8T0F6g1zckTzMLgaVzpONT5iuOSpdH4n%2Bxmwt0Zlgf8NLQP5OOaLDQKQ9GAwLjhNd1M4ee1PpQGVXi9nIz1Erquzcm%2FpUa56H%2BYBip%2BHzzheiXv2KjHIqBnSs7tQX%2BoAomkbkG5vHzuAnlIFgxJhtfgiw6p2yjbeCHuHXRS7YE7%2Bu%2FfwpDlvknSh5rJVCcbLQ7oZAcmGVPBQ8mSytygmGBxlbhpN6TeBPIKheMYx55OTdz8%2F1il6oImkuZVu2L2OMwVbwRVHFYaSL5r9F09FaOO2XOrXhTvqzMOnsc8Rih1o4ymEbOCm2Ni2uuABE%2B4Y89MofcEDPUo96zC6v8bJBjqkAapdsVTw0gXZgm%2BLfMSvA9p4kLdErZ7Ht0oaAGuJGZT8%2B0iJSeCJey%2BFPXwS%2B%2FvErTbUdhD6asj6o6xH9qKUyzYWQvMNVzn6s3JdVf56VK5dyXs%2FFfOd9oEcNWQOZgr38bWKuxCrhLaJk6syKbUVlGpgc1kbbpzsfplDGi3LPormKKrdPYfXS5b8g6ga55oEVa3deBegUYY8GU4ycxs8Q0c3F9c9&X-Amz-Signature=60a8e4d953ece3ba4be6399055f938661e67205e6453cc77882e35b79a42e914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

