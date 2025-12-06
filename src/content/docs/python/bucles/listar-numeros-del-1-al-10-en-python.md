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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTV5JCW6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2XC3zFtAjzaexJDL3jlOhx9a%2Bh2NSPaAnz8y9WPsqowIhALclUniqIzBEUGp3HQ3VMS3ChxW6tQI1iSFiyzzZU2YmKv8DCHUQABoMNjM3NDIzMTgzODA1IgxccmFPl5Zvlj37CPMq3AM5jvxd5GR2xTlPwB3XdJUultgmQKK%2B1gRHKvhvg8YM25raaU1WVIQfMV1tCvAmF%2FUpsEzxLI%2Bjg4u26dNYqLcfBNpOWgCDkFygLBTCSLttEEnMD46bHVCCNd8Lk5jty5cjyaCmLJZNfC%2BtPZc2vO1MFvdWLctFt%2BrGp%2FRhIDDjLm7wmMszzCMdaaUd%2F4eI6kS9kLEUzyX%2BeVtq87eMZoI12IaZkHFX6BLm4ReWuKF%2F%2Bv2aiIHrRpMN5mbI%2BTvNo5Cv%2B%2BXX1qMxgK%2FWE5QcOUjcWgHQa77D4y0WOSBLtGOJu8dZmdnXQzLwaqvWXdQ73vMVFED9HR0UsgqOLo1dsHgWk5fJB3TDiNZ5awfVjEIcFjFGbOUI%2F9AZ6Q30wm7Mz49gvlt72L4xAr%2FYL26xfO8rk0I0v8x%2FC%2BEUZFA2ausvjqCeJEDNDH6oQoelNIKUOmb05m1D5f6oaN6ZVL2avqg6U%2BxB%2FaBTSUGFGUoj%2BA4%2FmQEpGttsWXqMz%2FvqMX2%2B52oubX55eYrGDUISjufNSQI7I5nC4Uqr7CRM7duaoD0T5ZfYNyRqHpIlkfYRRdzsMSz8WTpoikBVKsL9BLgcOySUJF0LUoxTa3mMWx%2F0m%2F6XPC020TnbYw4QvtZFNjCcptDJBjqkAdiiXxigTfI6JNMRyC%2BBtLzXF4zUg1g50wyjg9265cezTb%2BNzckb97QbZJICkGDe2QppflMfrPIxg1qL96mObui0Fov5K%2FI2rSiSb%2FV7HklYcDqnS%2FwdFleUgjHmdC2krOGAzQe7G9qHRJy9%2BTab879z8b%2B0stPp%2BoKWiARF9ka42Hi6W4m8zmRLCAd2qFLS3F6doSWXyHWF1PhuQNpGMgqv1eGj&X-Amz-Signature=dd287cf8d799c553acd1cd1c583002066edfbf8cc3b0783ae0bc57a4fb02a989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

