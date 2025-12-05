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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AV74C5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboA7xRLgrjYY6Tq%2FmaU9V0nOz7Zu7zXWrWy3rt%2BP2gAiEAi%2F4tRGZVToVeWe0JxZS%2BZzjRq8MDjZ8ABQ5zjo354Gwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAp%2FC31VD8oXnmZWhircAwrhGS7wpI6uGiU4VT0bxdR3xa4D0jgToah%2Fvp9PN9taf%2FSJsIt7FBO1UIiKyT7PCg5NrjPVMPL%2BNKLeS1N%2BT5Lv5X87c5pG6bhEkPommnpB7N7qkjwVaUnNF%2FXDtawKtPpQwgiVTm4ss4rGJ5e36O48lkp1b172jEIzYK1YcauPwCLj4PG5cN9qGGA4pX3vB23TNH1oc%2FTdARL%2Fimt35yuRFFfM5ML85KFZQ%2F7AlIwmiuv7EJOL88ml0LZshnEqSlG8UnDxFMj5MH5lATCR8GMBUAa%2F4vP6wG2gdib1IJHuXtWkAKL7NhEBkyXydEZV8YqKFEFB8MPQILp1OgARe1nsPt2R0OmpCiRRqg3qdTMuEnCgLkl6Ls7LtQdvVI04gNIGXk9%2FPdVDUc96tdce8Uj9swJ49HYG6qyNljGb1SqK2LFaNnwewbxr8OQU2JyjdtinyXgahqL0sg16gseGEJFEGLoXkXU3D7%2FZBZHIspOtasuPEls1WR7UjHHv1cR%2FsOA%2F0K%2F3PxMqAo0yurBBANb1ixoVOUYY9YVlGUc4VqqHVr1qu0lkH%2BTA1GcRqOAj%2BSkkgXaaSfhVwXJ6TH0msRdaMQYzcdkenVolTVSWVZ%2FcFqg%2FS8%2Fv1wkK9c3KMNWyyckGOqUBtDvCTkTzayoQtwLdKQuFWmKKRSWG9sTx6ED6breUxs1vCp6ajDRBUfNgR5IkmwiUu820wTkBlWgLtxncuHHnFzLWj8w0yGJZMPeJOBIY2zPEhuNMFke%2Fqhmn9J%2BGw7N6CL8%2FGmSKrCqtB1CTMoaK7RmrA%2B%2Fz0UeKKaPeMvXon6MOjM7J1hWKVq%2F914wGYSsVJ%2FLj2wBNM%2FDvQ2lDDRYM538cckTh&X-Amz-Signature=a3b981503dc97f22189b0cc6f6acc1d242e561d8db572621c1ddf005e5b8b997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

