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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSZQ6XZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlf4QVU2u3azi%2BE268CwRR5614uNGGxstghOhCFHpHVAiA3uPJvtRDZokx07wHzpA9Y%2FDrhOiyIRsrVs7zvDomx3iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyY%2Fwg%2Bz845v5L13KtwDdMo9VDzXVnKv%2BLI7pi3dfa%2Bf9hMqnnjSr0mcs4JcpSXxuUn5s9klsmTc0bAl4zhMgwS2uNO3NSOIX0c8mWmvmNRUD0brXNRNNWWZmhl%2BDvsstpEnNQIzQUYPpIfnVdFANHgd0wgeU0KMXHRiPdwnRu9W4dplb7oYmUjvIf5fE4y2cMgaF0FRz6PiqJlYFye47SCwrOzS9YcIlfr6%2BGE37NdHeaBTDkYA2uC5Z%2BM3eMx1gV7jjQXalZy2R5wMlK4nbQlu1xDg7ZtQXmNJcLM1sMcUmiwxTenIMJZ3gU6n6nIqDaWEoo1DfnUojil1G4znkBRVi9tqhzz9jSNTsrCf1693a90Eb9jlma%2BPcVosJl0ZLmYDHGEXQNe97VKXXFK4%2Bx8f%2BvagP7eDOunYKDTU%2FGb0CkW9flwM5xh5%2FYF72w2qtAbrspaCaRTAnWgnW8LC%2FE1%2BDjSkreBoZyZopPzs6caqHbMj2t%2BEL6Y0d1f1WmywLn89FG3j8wpfd43sm8fyvImLs1E2CT%2FsnDrxGCVcerPrB1n%2B8SWBIPOBSGbS0XAQKhQC6eZ9%2Bt%2FEkm7qYdhgMwRi%2B2TwkzaFeR7hWA8YbLz7hhOViXaRszOmEHW7fseDOHeDEwh86G8pIqUw4JrVyQY6pgF4WJAkS1rwuj9pBdkuJbpyXu6g72%2F3asBS%2FWQthtOSguRi92TC2u%2Flg1iXNf39yC4wBE5L04WPqyaAFyc0n7PTLQbKvh4I77bLz%2BUmVNarTfd%2BSUATtzNfQb7yA7RQokWXftzNu6f7bW2QBqvZQFjQF5sRu4YMPnr%2Bqy8IrOS0wWF8aiSdmk%2BYZatcxtuI3j12iMNWupclZ5seip%2BMJ4%2BaFOWp2Adk&X-Amz-Signature=4453f9e15eb20677227d78a62ad41c547e1c080532748be77a5cdcbaa852e1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

