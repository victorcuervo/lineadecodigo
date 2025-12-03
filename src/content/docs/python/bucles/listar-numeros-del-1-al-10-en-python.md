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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMI63VJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICogNzWjNmymQqgBv8jbGwXRYgqjAD5vPAyUHuovOMohAiAR6Tp%2BrgnmrCsXTBRnrU%2Fm6u7SIlcow%2BqBPcUZ9vI37yr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMnU5s9y0aGSikXxxgKtwD0MUyo0Rdrf2FOVJmkqic98nXJIPvAC1HOUi9hJvBHY2NriG5ljU4CPQg0p5NIewe7qZomIWAZTJbfrTTkKtaAxU4p9hbkd2mP%2B5YKRIqszvk8vv9FpLqATbHIXbpLNph49UYg5NW%2Bmi4kFWHoxFNq3IE4ffxDqwFc8Cg%2FLx78PM6RfxoHFZASxW%2FPs0Aytv2b6iXR32bDTqLYsH%2Fy3ru9Ji2WaJeh5kmqXZ5nExWPBEBtBQfYXX2cav5tRDKzBnyKbjPtJbZ4yhtTuGdskxMn4oEGmpgBfcjLes5cjyyc1vKU6TKv1kXrAybepzV7FLqCZbTCuBIqZfuq5raTdzzaJqaFMEND1ZQd9Y214H0IwNjh0x8xXzLlF2g%2BbeA%2FJazCdAqgX8xo6djSkDl2lmy2TXY08CAK2DLVFnIZbgF6lAND3W4vp25H%2FsV3wvbM%2F1FyW%2FgKTHCUF0lOM5eqOmG5qpo7Vfgte1dnZuS7xrbRW1CovEgSNvxcZyDkB8E6MU0j0nvcogafnWZ8WvJWDqUNmSKDdwns8uUJLZpWz1s4XagDq5sU%2FfsXGSGggUlXnlOmszibo1i9Jmlxv6lgdMTWM1dNcnBmUtqzWv5nC2d8VKiV4amFSfDQzsMHdwwkfjCyQY6pgEjW4eK09BUSVaJzfz%2FKKkc5xgdZW2I8RliOR3FFN5SG2xIsb7s7kcivwsPxbfM4U1Pbiq%2Bnqlj3OhM5084ef27moHK0lVrJe%2BFR9devJ8HO2MqtB78lfO75czXx6f1iI6rViePEFXIHWa5b6XB%2F0O1i93XjgLbglvqHI%2F1FHpQckbVRPMGY9yq2y9V2MFNSRaxLooE9t8guiJ6njyYG8%2FT%2BXZpDUwM&X-Amz-Signature=ec6c9b0492a90a41457fad070b820d681eb8a1de2698a89a82e00cf1dc1b85e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

