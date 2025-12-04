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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7M5Z4S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFnpIt2iV9u8QfxnVVW7j9K032Mv1H5HDEjNaB36%2FmJ1AiEA6viE%2Bkrbw9wHxYHuK2De19M%2BllkXaXRr9h91MdR7%2FpQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJNqMgx7QJgBmQVyNircA1Sm%2FalkEHINt3y1BRKwXhclEFTSnKFY0JbniibuStusp%2F5vyBLdYoeuJKKkLUvI4w%2FwI8SR44oNyE0ffLayjMmSTOTNm%2B0xExTxw4tUF7wR4g%2Bk%2F%2BVNq5cR9KFYZaZQtUozpPMFw0O4PYdEF4qXHy0E91%2BipjPmeuZ1NRyV4IZmrvKcVE1yJ51nMz4pqilZzMh9q1g54gJKYlD%2FlXDOJg0qSTDBsZsLPprpyV6xglXdJ6HTS0iwuTWm64BEtgu7dzH7KbkKrTxYpLATFzCR7uCqm6YmHBrl5hvfv6iSCTNi4synPezG0UcQbdW%2FDoEoW0DkyJqE979RkcSFNa2PyZkLMiIyzWvqA%2BNWfk4QstEvpZOfHhF%2FCSFy5p0jdAa9YMgjCHfyApAVY1bPrvdMcCNUCg%2FHmqEMd%2FfoUAJDtRbMx3A0bRGcmVXh52G9fdBuq9BzbAkMYO8hDjuDKBgejisu29sPjG2t7v0iZ6hDnMFsnoQ62Gr%2F5%2BY74iRI8RHq5I5Yb91%2BINyDPIqM3xyspSEafLj4xwoRtX%2BWNRK844eM2RmWoHRYKH3CEZ2pdeJjrE9S5L5xbwxi%2F1ly9Y9%2Bk6Dqbjbasi%2FhgnkfzhAFnWxdcYQZjVfF9Tzgo7rXMLjKxMkGOqUBy3A2l6CrBgvmTF3j10C1QO1IK16aCPkj%2F1WP8pS8da7DebWwO17MNUfad3N%2BoEOGVJO%2FwrnSsDzZ%2F2ykUPN4IClLiV%2BaCLgVfxO58kzg3RWkr3IBgXklRnR2z5DBXxjurlA8352rFSQ70KezlxVtqOdbYNfwmrLgL68ibsin5UaE57yUiuC3WrgetDjBPy1IMw6oteS7h1zLdNKveU0gRxf5XR3x&X-Amz-Signature=ee71a201699d5243bd630bb6e64fa48b9b3afe647c17210193a3743571b4cd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

