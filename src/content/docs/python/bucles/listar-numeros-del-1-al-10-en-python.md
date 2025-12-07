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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFO6OCR6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEbRSZKRDcu7kJuMNdKx2Vt3GrCSSsQ7%2BkWUy1RRJWAIhALhAPGcjA%2FfE1igj9FbFhCStxaGBiYrwgM9Y%2F4jHMUSbKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxwi3KLikuKqGxUHL0q3AO6vFMFkHZuMsuZXKQx8UVfNnlqwzmwHMLKqYLwe4uJId7oYjtP8lSlvv6Cc9yyi%2FIcn%2FvmCwsbNC7XQYzYf6GDUfBuU%2BE3qrYXiw9yfjtaC9aGaQbkYkQqi7Qqj8MzAugGHIGLBK5kSEJ%2FsePQyKhTCVp%2BYxDzAhxEjvZEBTlcYfHuI%2FEJjnopeodb5sTWFoaQCT0P%2FoSJvNZak5YbzrVBYFjGp%2Bweyw52Io8sbfmNYMbOcaHAv%2FPv7p%2ByKQffE4gx31vz97AVSdo2N2gm9KC1JU8qVsBKiJfE5vy5sQTtRvWcg%2BodhwPmRTuLoNy1oWPlw1TGXKeRilC0%2BuzbbDuBTF9vlagdSfIVG7AF2l5jXuL5wRM7nTyqoccE51lRDR5un0EX1ie30JRYk%2FE0U7jLfQOW98vi3SWGQEvjaISIYy%2BzID0Ob1uvNc%2B4i2dhtgfl7iCuWsbd6UI1iNGmI%2FmkpURgNDRISXbKvPxFzCwddvZyQaqMX6E74AOQf8Z1TtJvuc5jRBGFBqK6%2B6uJ4crDfvAlgSRbhoM5z9G%2FC2KzWAIJ9VKMBhqPflOL%2BhtR%2FuIwFHciP2Bc03FvR7rCTr0Z%2FYown2T9BHSEhGQB95kmo%2BTF1UZQuvjEdLUK0zD2hNjJBjqkAa1RHLTpzzAF9o5PRfm3RHai6f9nDHsxlT1mDG4cfRPE8r0%2Bzswx712sbFaOE%2BqtRUE%2BKe2RaxJMwSLLui5QoRUOUEbFFOjPjKNqZ1SsiiOs6qAFci6v9dI9aFH%2BrcFSjUwKebAUS48HsMKKQrt6zbTY4wVR%2Beb3mvb9Mg41vV2a5kD3lWYhIisWc4fzRBKFz%2F2PjfriZcABccxSTix%2FZvb8uGUp&X-Amz-Signature=ea2a3d1a22acccf42ebffafb51c01c7659d5dfe165445fe46a24e44e7b99d8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

