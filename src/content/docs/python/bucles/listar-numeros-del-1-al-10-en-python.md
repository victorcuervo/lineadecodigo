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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZV54T3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2DNM3TO9iESzFIvsfZBVLUljmd%2B6JL6k0D%2BLcWuZs1wIhAPq0sGITxAF9fDwTZ%2FT9WyBQA7%2FwAJSnL408DgFWgG%2BtKv8DCDsQABoMNjM3NDIzMTgzODA1IgxlDJs6COzrZhqSTBwq3APLLR3oBFdPV%2BaFb4DLzrkDjTUaC6MMkbzfRKtME5IB%2BnRgj47jYd6iZy9FVCuxDao6QiI2dt2FM9g8O%2Fsgko%2BtExwROh4krH3icYc%2FsE12meUllkNShkVRExO84lmnNoPlnIBYjS8q9cWE%2Bd24YMwfw70V5Uy%2BC4v5bXllhUHqWa9dOL0oF6l%2BW3NdgastlE47cGVo8YAzq4E5tvkn0hTmGXtPr8DpsEhjZklt1OEXRTPeTC3Gb6YuqBEJyQuGxusYn0G%2F3it0FPkzkQ08pT7T4b6b8v8EzS3lkQzLriJDTEW8WnySUeZRqWBhe2RMJR7F7QkYXykhFhpKZYw7nwkrn3JZcf2yHwqOjgnxumG0w4H5%2FNjbj18wipEJdoEY9fj4IY7KMhMU41Y5bHm%2BWbv2Ck92l7ulDiZlYrsJ6MR5vIQr6u0GSGks3LeQ4OqnQGTPI%2BAklN1zIbak758ImIxbg8hbTRP06dhAcdF%2BEY6jj3zc23gcbQtGEm1j5x999ynaw%2BkMhRu64A4eNILYL0tFuazcV53FX0opyH85hFosviV7a5Zmx9df0VHipILrSkKaIitmacaLMpWg0LANpbLBey%2FMK8PKR55Lxm6FPhRk9FvTymmTFzyzia4siTC%2F1MPJBjqkAdAYA7pjcJAm%2BzQTuTUNcolWnG5toV%2FnkSCcx5%2B02kkgycS9BTtUMmkERdV44H1BGKhMNxAJtVscJ2EGBQKIDOAWEMwYlVg5eOqgr4RdeHK%2FhQ2taWK1jQHMDj5blPMsENTrNhx10aHwz%2BMwBqLAUSEcjgEfooCicYUVmFfIqVUiKSqsjYEUdI6REMjhbrYG8RGBzAQ4oX9lHTLz7bAwC40XSf1r&X-Amz-Signature=c127a3ab6e195601c1c353d8b7f25dff54f28c5896e6d7e70a5d0640e4aae713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

