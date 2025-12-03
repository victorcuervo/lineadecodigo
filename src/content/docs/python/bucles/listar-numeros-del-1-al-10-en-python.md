---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGY2TYM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDvtntkHhth%2Bn9SbjS60NbNsCxV%2B3mqCs787Q%2FqmeOW0AiAwekrNqzOiRBFWBX%2FfUVIXjEJ0%2BNySM74STg%2Ffr%2FSaDCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMaNKc5qnslEHyYmEGKtwDG8XBHnGX8x7LJjAhVN2wi2z9S2x7VTh%2BwbRY9hzXCwHtKrPGvwMV2%2B5fG%2FP26TrUQr8Kl8eiz74YkMF1jXjEJFnSQK5suQwncrjCSvfMy3649Bq0nlrxPtYFD7J0d1yOGPi6bu0ZLkZVSDb0xAmclN9fVrt%2Ffepo2Okf4Cy1f6HBJnzjl4aayac8BZSpiTON7tGp6U3cNupjTNE9sutRTqz0aKWjcWtSb1VMcKJ3BsjOjYSTezjDaasHhcXvC0vP7BgbVzSfZt6C6xk0e7X%2BQsoX1HC5i3xXYSpkaOQ2fq8Vxcz6sUFlvQktzUrJEKtFQnXo2iA8UgXpHoF%2Ff5IRlpIV7wUncAIjnyYcxcM4jHvf1ymyA81yS%2Fbcl627v1TlWp%2F8GRq4aVuWni0mP%2BByql49K6M7pQCWHpI0QgoQqAOk0%2BeYMIOXT8L%2FiNO4KzbLaXXbNeTbsKklnt%2BOCxi618uKMNGgigSvmj4x7IFoeQv6kn%2Bd5bpm5XAE3X89aC8i6ByRITrCxBmzcAsku69Sfoag0DdIEkfvIejm4FIpPA8kt4%2BSzsTiuxGM%2FkniRqqDpkDC1X%2BxlU0GzEC8oqlZWtdEHjs%2FyKELzxJoBlvo52H40GWKod9APLX80hMwhb7CyQY6pgHBKxZfyQGNeEdn4b1BC6KldQp%2FC7UEXFwP9jZvipA3LmhKrqKMDKonby9SIN8b%2BUu1uLWJDymDh2JrQJzKjBQzrU1N3du%2F09HxrA8di9WLyUMmo896yb4mfBcn%2BUP2%2B2D0m%2Bfw8pV6JNM4lpq8xVOX3EQon%2F4CAqtrGnbVJP3xaSDzUb3PaWyEhQkro6RlEA0pl3NjMa%2BqcturlR%2Bqrd3kFYmygeYP&X-Amz-Signature=e9814309a594c454d23b3aa759450e684a0190e7324471ee087234fb987d348c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

