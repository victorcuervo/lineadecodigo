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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AMULLSN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrGbG7vyp6P9tTgH%2BA3y9juz%2Br5ISHkBSM1GrOhku2HQIhAKQky6SA1%2F2q9izxxV5esJr%2FWtQHsS03GaWriHjPtAatKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywF9mqk7hcRRF8PEgq3APaM%2BPcjVuBQlFvBiGXIxvSHsUKRrBruuqc1BgwM%2FA0VwssRRL0t8rTMOre4uOAVIobvXuP5uq5OWZkGAnsY5jPQl31YmZmjU0U%2Fx5p6mwWiPiqzbsepPwGWz0YOrP7oTusqA2H72HXByd0IAYLW9n6MT1HG1EzYdUgfMJ%2BaB3lBaFgrsObV%2BVdwybGti3P32eMJ7kgaJ6tbjyVOZ0fVpSiRCSuuoOHVLO0ZvfJ1FOH%2BwBSiAfL%2Fng5yrtI90fZ%2BmupREAQTmLLOLIRSMS1nmUeU0P5mwakuwW%2BE5ZCivMyJRLb9lEzunUo89MFnwT84T0i36XbzF7CeN5oeckCSonpek145YU4t56tixZe1tcKoYArS0MLQs1PqbYyY8iy3H%2FzziECaV6kJXsDu7qH3VfufR0k8XfHP1mmqwI7LnoF8E2MNs3MpakNzGBpd1VIFBNr7f1YOU0fwHUjTFImGg9dC%2FSP0fX4w5KT8hUatBY%2FPAg5UbAeTcyhPJS4FTS2bjTIR%2B4JojcV2P4N5dwpADJUg%2FQK2wE4Pn4hbuMaHxv2azTpX1WRmIrXdJKYhJ0sSkDyTfTD74Slsydw4kPjvDtYu716yh6uCvxW3NYUsljkii8T8qXsqxWj4BxXQjCi6d3JBjqkAYLQIRT8ca6Z%2FzDO2%2BmTo69VJR2A4ZckQUrkEFC5B6fHTGCGGjBU1JkIQNDbMHrVTjCS2gfA6mUjw%2BwpKP57IKHRAf46nYlwNIW%2FWagzFAXy%2F%2FIe4tLYI67pwwdLsWbyRiA%2FlH4qz5APWryrZOWEBKsXfoifxf95lhNYH5VemZB%2BGBiwPVgD4Rugv%2F6uBsF5Lf7G6klJiIj8HuiK1aoghfYamYpT&X-Amz-Signature=8f009c50eb1c094707f7aef255dfad5f9b82fc28206300ad503035a42eca8d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

