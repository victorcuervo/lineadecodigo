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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ATSMCR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXe%2BN18eRkQn%2BRGIsYRbduI5TYeWgZAGdsnNZO2FD%2FlAIhAKuVESMEa6RiMBExPRCBjhclAsg9MdxAbomYaXj999kSKv8DCGwQABoMNjM3NDIzMTgzODA1IgyXR15CEjpEDSnth8Mq3AMpopKusB73Iv5V4cfonIc5yacW%2F1BDLvfgNJgHCCIRl92zbmnLct6pxbHkbhNS79FQsOVnzwuC3wf%2Bj8OdLG5C0DQoQeVOX5%2BT%2BTBWKjLiCMA1p4PqCeOj2awymCog0%2BtWV%2BJgktsKTWm6QL%2BUE3crG6yNujiHXCcqONFwA%2FDVovKwmbg5mhYZ6MK2plpWjjD%2BKM%2Fro9%2BVY1KL1U2h4nWR%2B8mldCj51SCZo0vlQ%2F%2BwKya%2BM%2F%2FutKh8FxIOhuuBboCcQ2eASaYWBpgR%2B%2Fq7mUhWpOqbLz1pexJPo66xD6Lv87eRiaeHCxXPB4DknwTsGd3mlH4m4hpQVPZTRi0MWNYyu2VsaOcjLfqXh%2F07YKql53ztq2bz5gzxPpExikQEyPqp5fe4mnQRBbXAEkznU%2F8iiuO2YGFhQSk1AsLoEe8ddOIQJg%2BL%2Fte9CoZczmjsJdEJjltVn88FZ%2BwNWYdX6XE%2Bj%2F4Z4cXjgejpqioJtRAsbtMjHvkBQrVDHvrrFqKSX9UG%2FTivLb8U%2F4s8SBPGGdV7OHKpr9UW6Yy%2Fnvty5ktk2dflWXd1xOmopVFKMGq2Aud9GaqvaP1l43lI7FOOMnrRS%2FX3bX3%2BhVXTXKEuyOPLY3H6EmYTaE3SoToA7zDiw87JBjqkARobrlu2TKScPSheLI1xMEeYQqbyFmQzDZ9gGVBDWIMeA138ETEJ%2FsrEwkgoQkiqSl5UB6D1AvrWp9FJwSIvHkvx19IhJgzN3cdBaojacrZjE3D36B4fqySfd1BsWKJITTQsY0zcTWGx4OEAoHgui84UohSfCyW4SdlnSlON0srN%2FeWbvm5FnENLOk7viu3bodioRR4%2Ffry4UvSBPDOzz6qaWGU5&X-Amz-Signature=c47b6a34a8c8f517e8044e63e3637863c0829e19860eb4996dccef74bfa25aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

