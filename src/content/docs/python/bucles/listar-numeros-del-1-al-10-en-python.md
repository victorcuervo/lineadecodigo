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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTPU6BY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkk9l%2B5Yfnh3TV%2F6sNha%2FYEi3uAkYaKO%2FSUbRIp5LW9AiALWifQTPBPXuXJ7cRo3bHjA83yc92VoJkt9qQ1zyMTzyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqC7JsSo0wpcEQKcNKtwD1EXm2e34Px%2FXr5DGa6K301ymeelu1jL3L2HqowPWI%2B4TXe5zm4lyqlPlcKKkj32AIqMWJQCdSubefLMxJ0sevRaIVMz2khDWsDLOo0KTojuet3QFIREiStsqsDBDX2tmT%2BdcUngGaJ%2FQttkMlcJcD33tjorheg%2BifawGWw1YDFMR%2F18c3mTrC0m3shuarTyg1tZmomG23AvQtXdwWYFkqwFv9n%2Bm%2B4M7IyiUzR7CS3aheFZYD23iRd6WkFpNt2TalE3ydqqB7pj1ZB4J0SmxCDTog51g6KJkgN82lysxKF8o3EVlC0lCZZZQeTeyzn2jdDTZARwQinvTt7hgLD2PUs48SxfoEZBa%2FlrZrNox7uPahNeUVN0cA64iYJCGyP66fBaAIcwQzobB9yKXmCzFH%2FKYvH6eUMWr50hEZeFRGXFW0DBjsrRB1iuKZx5ukvngvtgQDA3tBb%2BtlzxNREV3Hx2aA1oPTrRYcyKQ5jH0rtR6pAIRlwSLqCY2QN02Jfq0YJ4si5yYTNcVLZuNiD62IJHOp%2F5k41tOJvmjPcP17DNhJJ94ErYpiBp%2BOC1wSsjIlLBQ%2F05C8j9Z57ZcxC0lO5lit0ey4Tc5hYO1BgbGhsrFcC4i6Vk%2BLmWcYEYwoKDUyQY6pgF4aeJMdjqjo3w%2Bpx8x5EaoH7RGc6qRIjGSKxnqJET2VEBsiNczOESlpx2YhQDyMMmAAVKwhzcRQbuysukas1RYsdrPLac1fy%2B7656r3vyvNTAP5D56zwtIdn%2B6eozWd%2FcPpqcAvXAh865ngwgU%2BT15fnGOmPDEWunhoLGSF7BmxkUmHn9OS9wPz2%2B8uX0JmfPWE0lNKddHWuM2GdtFjPXwyfWw4AeR&X-Amz-Signature=e4d1b3167b7fff2e12b8cc8895c1234e815b5b82ff15166ef7d9710903ed042c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

