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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF66HDEC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3Q0em8rmbCudqvqZXy3I8Clph8wJjsaphlMsaTVQHAIhAMJ2vh1sHDWCO%2FBsyHQ8Mjzi1aSSoFdYwg1Iw2q2Gj7XKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPeUCnktw%2FSfcvUgYq3APULb1IRnhrQSTz%2Fg1EiCtflgtWsCUFYqkpV28yJkibqKnZbZggeblzNUPXwuzwtlXAZafkKXJPCdYmqifXnEQYg9%2F4tknjQcj6NYE8DwSCyF2oKncTAIyUeGkkC9ITLizjxauMfFOTGGpgZXB6uKWhv2%2BNS2YOBbpHKvtEG6BSLGI%2Fn6yn%2F6eM6uCoO8NpGz4Y9XqBKRQeoEu88QNiNfdcksJ%2B%2Bwqg9cE3ofKj6XZRqJecMXT5mKokwlctIZankBok5aIigB0ShlZlYkiSJyo3h%2FXutM379OHHwLDn%2BSMiXSsBiQapSJbu5JiMrWhV1pl8tUohLGs4Ib4Gc%2F%2FAKuZ%2BjGgbQSWH3fCkcNlDEsuH59U3vAbo6nmIN%2BpRYRHCCSUy30ltJH6SOtaM0lQ7OuJf73uSuo8flvgVeso1VUW4fDqsGBak5lHPjbEY65nNd3pl4SrcahTkKPD5RHEvY7H01Nbi6RnM7uw%2B%2BXyQVSTL24JvDvIYCL9uqwfC%2FYB2I3gGTEln6M2KDL0y2RK7O5QgYwZWzY47Dm1hD0pNfy0GRflCG8Qk7OMnC832H1yv4hGKMzNRX%2FlMURkGyPITcH3H%2Fbml%2Bl309Sc8r3f5hqS7yG%2F42EMEFqmG4vVqYzDHpd%2FJBjqkAVk3HKLVAIbmRYdus7gz4ENFHzDg%2B5jqEe24GPKxHsjJGFGwKDhKc%2Fwk%2F2ZSFBxUDwq7z9qunSk%2BgnDzQD%2ByCQgWGRN7tOi360gLmNK%2B10tP35dkqC3ZzIAdEaDAiVHyozwVv8KGln1BNRSmtM%2Bi%2Fl4Oz%2BHo6zj3qJrSeK3ufQzBc2dI5kIQNuHADn5ad2O%2FhFiMAJCC7EpHReoSwf7Br1j1A0%2Be&X-Amz-Signature=a6c775bc8bd1d2ddc9e83d82e217513edd7e749405fbb2dcfd62496f0e846931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

