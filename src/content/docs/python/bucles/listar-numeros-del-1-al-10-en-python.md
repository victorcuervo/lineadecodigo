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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRU6Z4XL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaRT3L82ovbkUucb8%2B0qlJid%2BnFZB6gw3tzSLp3%2FlJxAIgf526eJYbckvWz%2BGwTHDlyB%2B19f81Hel0SDaDs1mGIHEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMJFLbm1Jk6%2F04%2F%2FWSrcA7v%2BZ7KVeyGW5Z99ra9jUpJj2zx3Zo6myMcqfqRKpqpCRhu%2BTqvW6psZrnanx7B5YwPkyojn%2F5ynlRn%2FkAQdEuF72CO8tftTebkkRtwedeMMHBheHKI6%2FSbZo%2BFdozLWA%2B4guEmQS2yR%2BwMK4ivFvJo3Y2HC06UbqyRM8xV2eL9z7q0XIM7sOai67pq7uiViO3dkVKrt5oFSx7LbgC%2Br4znCf175Ju0y4buEueDmiN5SwE1aBTnUYlKxAllgi%2BAy5Wic9yb9iAV39dDlUVflYsB6hi9S8fAmCnjUl1s1CPN6a%2BXOOTnSW6Z7hGM8Jpmo1ycEZmeSFqK7O6K%2BMLSN0Lt2CvUF4yza6F1j6n3WeWzQnnUHjL4n%2FHY5AUuRzXQWpQySi5VU5eYoN6iwhFlzcixwb%2BtNwwzbYadg0mnhDbn2bV3IFY36DE067PWYC2yw252Sk40IXQW3fjt9W0HqZ4wIZByJQ0VzGmps3Eioru4kzBN7WWWVOOqTz6gTZM%2FjwAj3%2FM7WC7kZjSz%2BWXvuYZT87WSLwZ3rHwIymn1%2FC9WS%2BarLP%2FF1TDdJ%2BseHhZEiROB0kTeESJkccKHSUFEsohY029GqMZmr4YVA2m3ilqzdy2ZrYbFotGcoZW7oMNTezskGOqUBRIlCsJOlqRI7LUEA4CIrSLX5y%2FiWHmsa0U7Ngitr3IZw6cDE%2BSh6Khvtlr2hl6K%2BVD9Nzng97i6aMx%2Fw51yAC9WHNPl%2B1tnNxSnnNBEG1bz%2FCKT%2BVG4fTOJ2voDTXMlQoFZjMxtPKyHzI9V69eEda3WKKWcNDsIJEPobTEbT2qkbaVjlg3%2FkLd6iX%2FqyXawcsr%2BWDHUHu%2F539Dd3FglwI6RBS3ZV&X-Amz-Signature=3196b402e499ca0f6f99e2923590369b94588c6a8cce82becb15671dd0f4e67c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

