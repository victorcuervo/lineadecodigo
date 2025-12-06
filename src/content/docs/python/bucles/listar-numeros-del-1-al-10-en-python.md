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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAZAOQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9OV48%2FyE8PK5dPJFPsC8nGjkvouAHDluXj5UrR9M86AiEAwt4LkAik1Ix2U%2B4xqfNmzx%2FS8AzF9BF3CySDhHjGJ%2BUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGlxFRWonwKb7fWk2yrcAwoarjnmBBY8SNgiDy%2FaY71jlXLdb0GW1pG5aC5k%2FEMdEhu1Pux9ONvwrgBIisf%2BuoL927mdEx20eofIGKQ8m22C9%2Fj7Ab%2FRjjeTO3uMqBHIrPDOCLseQWi4PAhxqa8RkZ%2BFBiraXngaHK8%2BVGh52xOdvrPGlLlx7l1aWXxenxiecYbn31cN4w5S9qnWGipiL2vINrQays8Cdelm9qU%2FFvqlXexDi43sPaepjiui0%2BZduFxXoDFXfRlWOZ2ZoMsUaqL3k0FKt22PNibPoIHzY2fiQTqDHXODTZBg3StBO6zPHHDMLLpNCkL7n79EVeacL7UJBR8IxE1kS1E5pkKxu71m400ce8422462BykcFLatF5M7PUjdMM9MhzpiQakszRIk8gneU5U4fHW6FXaD1dtKL%2F9Dhgn3dBmFWbcjgs4XI7hCEvrFSMuvLqJlRTz4mSD5OjVaHjfQfUb%2FWXYImqiDXYU%2B1HFHbit0yjSDFV8XO4WKDsNUWaL%2BqDKOOvlcycXDA9Hiw5U%2FD6wTsmk%2FhsWJwL1LXXW31VDf5sSeEYjlupeYtc2P%2BVynFXOrxMbe4%2FuSnYzyxGhtPecWg0xwbT50xakuDba8lMx3Ao%2B85GH5slYKcysAvITZ7QbKMLz9zskGOqUBIkbfSYUXY7Gu356x4Gm1bOi1%2Bka%2B50%2BU9GkBBoLF5P0vjeN28hNOcUyOZFgJYS8Zkr93fsrMiDh782az9BOxsf0GFhEUsYJ7Nau7Q6M9pi3ekWawtN4bzT0fZEL7B9GSIuSepuJMyfr4kewwAfna6Dx4yBqVeGc1RG0gGoRmZBa3qVJQjHCiWrFHSlEcQ6JHYPibaxInyV8WbYKey6KGZPEAlmoN&X-Amz-Signature=e810d7cd599175491fe6390cc193b35e59f44c08805b1f637d6996ce4c89427f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

