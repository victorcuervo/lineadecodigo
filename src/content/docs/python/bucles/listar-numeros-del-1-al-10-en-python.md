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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QCUMTZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDRR0KHMZEuksDMDYWvO0Rmm44dZ6dGJggZiiIjR5QBKwIgOlgocWnF8gGXeMh5z9aandLfHjj093SMb7Dg230TNPcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLqnS3fx2s2VgisLfyrcA%2BLJdETERPUlHlJxctMG3G8jYbLHOA61Z387Z1sRED4VDm2dBMvg%2Fheb5rVaL2XtpKFCnM%2FvPBMVdTHxHiFIajh3mIdREQMzZQCh%2FtHEX5QD4EkBFSn4AvAkzVkmL9CpdvjkY3uwqmXwGpG6qrrGB1M%2BC6tzthiz1rGvA3gdxwy0qbOp%2FvN4aszSnwxIiRfcxsH6jpJqobTI9yxPAvrt1mAI7%2BfMR2nLsyizR%2FPtGIJHrFM4RO5zOTtV0Ts6ejgVqURb9omCF4Y9iQdFciDJjZ8LURgDOTa82U3aYJYbSvKyRlQ1g4QrowJPDJjWmm3Vlu2i84klT4cHsdrFT%2F%2B409zg%2F4vA7piVZux8eZ5kod9TIMR3QaWXK6tvbC4e5o43aKcL3t6Vfp6zx5Ti3OYGYZW4QMLVE%2B%2FvD%2B0LNqQcDWUtiRBBXcaUgmANJMkXoh2eQbWIdV1WAWNns43OeT1bvkS1FLDeNLn8UxQprR5U42V4oEK7jFtITvD0%2Fex90ccT%2FBBA%2BJzRAbQHZBemk76zWnYLx9UpU7iS4wFjaM1Q60smaz9%2FAb%2BNE6TEKo1z65wlpdmrkwX7ndAFddHXfwhoKTvJ8KQ8oFzd%2B8KMNCYbtk9F3YZVLjrgEbXh%2FzRDMKLKxMkGOqUB73KRRRMk2FxwF2vfmJKBXTzHrW7U8fF2EbRVV%2FQRmNeaMibATzOZDr9rLFjmI0I%2BYRZT4hNjyScxCuJ1S9DT2UtMm7sVvgwifq00hwY2ybwF%2BdaqDzWptPGg%2Bo2VfUx8IB7mnqX1fohyrnsKlTSz%2BiaZbluQIJflVLlvFWpw2dK0ICdWBDBiYWumwKdcaWsWA0LpmEEvhubxjVwMD2NvPXsbHH%2BM&X-Amz-Signature=f5a29a1b248200374a12f3f25835a845ecf3dff4ae6dd7023a5519b1d22c3553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

