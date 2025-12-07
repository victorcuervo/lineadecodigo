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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2M772GA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4SKWsoUXCvFKi%2FXAlRoDbArtPMjGZN%2FT2Sxvct3W4QAiB%2F0rC3t0dQDw4HgZrJNqUDn2NxGVo3OGKyQcIrkuvi4iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F6mtenMXA4xI3JD0KtwDEIvyb%2FaSlnL375z3UvaZPueBxgKnnhaJFyNwDx%2B6NIX4HQjWqNzovgn21V3EXFs9JgAy2WoHYq31%2FqVidcCC5CcS1fB0tjClj6p371toB0p3Y4gU5kM2Mu7BZraEFV5oq2Y52WdPXwXrOL3AH4YBaqeg8iMtiPuYmGDHJlOHdsUSeQWYHL5G2k0UHbvcEembL7j746PYb5aH8ndtFXW2izbuVPtBMVoE47aVLO6QEr4nYT6PlUDM2DDvPSbBAw4n95QAQo7kcyfv9ylxw%2BmfVtpmgj0JHTzCKUIoXVBdE5bPou%2FTGStG3g6TEoK7Jtv9%2FlaN7e4BS2023arO0KcEYC%2FihEmMBSMvaR48lOCXvtGSU%2BSAcyPI7i5t50%2F4TR0Q7Gh%2BVFN%2BTRQ57qb%2FUW%2BKAJI3kMoGDCpq13Loirt9oP1HOVBFbu%2BRN3HIsuHr1E0R2PUqkdiPVIxTok%2FWWoAH7oAaiKAPEFhpTXUIu93vzMmtxR%2FJDDdk3oAlCQVqdp7Dtp32Rf15Lwe0Z2%2BLvd0Aedm69PYt1TktbxnINprJ%2BUtI50LYOEMRuT0bN4IPPo1VYVW9V2sQXgyd%2FsqM%2FSurrBtlo2Vr8oyqALL8aijFwSRoRvc7AtrNMpcF7Xgwk5rVyQY6pgHWhndJrttNGJLY6FV2Q5jwlojHlOXUG3JWrS4SMMVN9qzuiu1Hips1pMNFb8s7h0grd9U%2FZCUBlMjKxeuSQqeS9jkOWHaKQbTRHz5ZT6x6o0o9OC27LS9afkEVdLQq933sZxnGL4FRuAj3%2FR6KFKT8wcukftQ7fr9%2BQklr7oOWu%2B%2Bbl6d5OratRbV4s%2BpSYk5BCTwmVstScggUfMP7G7O9QI9d6D37&X-Amz-Signature=b3e3e14c8eda2b3aba8fcd9cc5e74ee34039e7cc3bdf562c93f7c27024cf038e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

