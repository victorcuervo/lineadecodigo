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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKX653I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuN1Qu2bi8e%2BqjC1by6jCqekguAAoZ2SqtKmLNDdtZDwIhANnF0ZD9NJNk6SJZmGaDrSwQcYWlaanhxzJdt5dFFYSOKv8DCHoQABoMNjM3NDIzMTgzODA1IgyTfNv1PQnrGdJyqgAq3AOTcEcunjWC6YlxkDM%2BkEH3zzMZY9agO%2FiobtRfmPcxpWskuY8zWt5s7Gy4MhZp%2F4FDhFC%2BvrgRuk46MFl8Ke3iXe2B0xaVeioX6L%2BF0mNp447CCw%2B5yMdeSe3B%2FtfYw64bQAZDjQ18OEm1yad1X8XlC9RmC0MXq%2BScbGanmsA7Kce%2FBZo27rr8SKz7MAZCdcouB0pNzGAoeRNnb2sdhUZNAZu82Q4k1gO06CKLjgiP5zTgtmKfG8XwXAQcPuFl6%2FI8HROnkJBKfEgxV0dN4E9sdmLR0xRRSmv5Dio%2F9gXsOrT8ydvZ1PnB9%2Bw2ABbS5JpKOHscF%2FHxln3ufXeS4XgU2%2FV1TEJLlkfRUJh5dHrFqAdZdOkI2ZOXL3rcUR4E%2BzLyVHduLDFOMc9Ef%2F8qm44E3A2xuRlB%2Fq5HVkXxAFMCnGOD8YxWC8%2FHpUhwHFVU3NLT3f733T9VNJedlYk2NU0N%2BAGiOx2tNLHnG0qP6HKVnlMltBouIHkFTm4r7qGUvqkN9QUVuAcrxzVd24otdCH2019NOJWzEwj6%2BAbVQq7SVqsBI33dEbTAvtjqikmZHRH22fWTrxfkItuGfY1GTM7DJQBZgMxBOYcB%2F49hYX8VoVMOyZm0m6MFhfgsCjD5wNHJBjqkAdVsC08aNs%2Fwx6tcj40KBBaRhGWQj5jDTi6%2FkEK29iiL2T1xNWYP24S1Vm818hCxDpPKhsleG2TowUnd2kX6qKpUfcxSf8N7LIn7edM%2FUJqhl8EvKiyDK%2B1a1p%2Bx%2BHJiVwdegT6w58tZZLTK5nLAEhy9%2F2vd3FyA2TZa5yPVHb3pp6RbKxiY5wJRKYK0g4sGq%2Brsr%2FXSk82fBt30MqxCOG%2FKomQ3&X-Amz-Signature=50b17309d8971c9bfdb2079404e1b4ec60692601317e9e60b539f8f6a3e17cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

