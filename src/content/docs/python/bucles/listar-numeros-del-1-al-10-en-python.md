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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWO36UGM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcK%2FwquaVBoxB%2FB%2BLzbE0GyJ%2FmBWn%2BV5EJ8Kngv9P%2BpQIhAJvhy4JMniNLu4h%2BHAAhJbpJzsajPSn6xpA2GyyTwNOTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOt7N9%2BKXL%2FHWzuXIq3AN1Z0pe2KGLSunxPEm4joo2T73ol8fcMp%2BpmyMG0Q%2FpsCpqzqyJDI01oOCuiWOoE7QE4pNbfLaFhyLHx8gGwKq21A2UrCBuLoEQs8RrsvJg6nDacSe%2Fwj0aRRWCrSv%2BA4ZdDxyR5WReVQv%2B12QIOIMk9ZHTeP1OMd0YAt9NCBnnwrUwcYk0s9eQ%2BVTHOeYkRqgn3STm%2BRxO0ZXLWgSo484Vpfegp7katrZHA905dpTEGJHU%2Beqm5AmI8PogSEFyIS2qTlkeZ05Aa5gTt9PoaDu8BF4KoaYBf0vtn6apz%2BZEMUogLUF%2B8V%2BBlNjjrS22LDV2NipxDgkGo2qrwT5R0CQJGMbivegX9l7Ru96xBbEQbBy%2FbTCtEWYQE6%2BBn%2FRqgvMZo5AjQ0RjoMepkvuxQrJzIfIJ4lhSytZ8ivOf6cUwCCkPPKXXlkUBCNFMmg0mo%2FigYkCo7%2B9Qq1noW7rv0expSR513NbtIQ%2Br4Wxi%2F%2FNQd08WkQQBqI%2FU2%2FSHrT5XP9QGNeyR9v%2FFWG%2F8b0sH3tp79wHEShXnRXd2pgEPPaceFleJ%2FfK0uW%2FZl9AhOFb41qgkzcd7k7N4sf3ow5L08pc%2FoTgzzd9%2B4%2F%2BRzo5vXpS729Yfxc35aahaVbiU1zCej97JBjqkAaicYm3VzCo4dKMvmXL0eoKYGHpSokMH2Aq8ppMWJSrl0pdaNKJpRgBdPNcXfT5dWhoZkC6ahc131opB8APHCDZUfGg%2BldFkj%2F3UiWI2do3YQ1K3IoYTwAEIxYj4oJCOqcOGXZwtAO%2ByrMIhBpMILgvDCA83U4CKnIRfkSxclOfgjOlR%2FiM%2BVrA0o%2BDTCE%2FvnDy6LDxbQRH9PugyMuYFg5tXerHc&X-Amz-Signature=b18213ee2fd9b5caaee774749555475449957a254b9832d8ea39d2806695ecda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

