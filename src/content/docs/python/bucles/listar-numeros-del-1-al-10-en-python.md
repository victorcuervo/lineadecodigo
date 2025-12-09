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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AHSDAT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FlJIH9%2B5gouEM9rTFDQt0C%2F4gI7NbaGwEOhGYPBggFAiEAq1Ek04ZF00GFt6z3%2BvV6B1zbxSDQg69lU4Jknr1LBFoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCW6KSMnFZwxT5PgircA64NoZUuF0CrAINnIYiN%2F5X%2FO4BGnWwBR6v%2BvF%2FJTgSA7UAx%2BnqmxMGNvV3PapoMNapWUSUHgg24zjf7fW92CwfZF4be%2FcewvC%2FNlWpM5P7f7tQvZ0H6VpiHFNJXxo3VQoK9LQuGXHz%2BWHXQAIu2soU5Ji3tirUC%2FKO9dbE8TZHP9AV3DJxP%2FfeevfrEc%2FRiQmy%2F2eaLyWv0BmrLkDloLgvszxhWfibJN0ojXqRxKTl73abE3jAUIJvmKw76cJo9BJuxTJH6jD9LXy76zEgEMI8Uvj53XOyENMEmzhENH4TtF%2Fdi%2BXA1ezqTmF8nQOkEbQXC0qv6RA65LQLX1ARvuEfqyVzkPAxiv%2FC1dEBNzOxlUEUKavD4fCZPpgX8voAqT1ohPTsTajnzIScs3W7w81Ta%2Bjb4NLaTzp53LPgyZvM%2BZw0r4UuAM3MdTWxdBGpbJ%2F6H05Izvf2qapNbhpbPs6QeC1qz81Ds6yTgLUcBP9Dlq%2B1hJrjscOEpgXK3UlIWcm5FdXiMrYW2fi69JgDqpJlc5fQdbls%2FYRUVQTUGEa62a6Pwksiv%2BTzmmS6HtDWLNeJaWW9Yd6EAgzivERm6bf59fqizdARXBVS5kgHvpaOhpjSm2HorCSctCPy%2BMKOu3skGOqUBYFv3iXfWQ7sbIZ9ojv3mlHoajwMq2Gsu6qbzNhOLInyJkQBx0%2FpbVlcJ9h0R5cTVSI9qcbq3D9pa642KtCw585EzCyztcDnUzRXylZoCqVylygKeKcf9s3PzRpOy47syTUT%2FkNa%2BxKwkTbrkrfhxY%2F1UH9j7HSAxMHSvJ8zgF%2FQtPc4oqTa%2FUmkBF2UUmmkpu7%2BTfs3dbhEXtSQMUXPb5qrEcnz5&X-Amz-Signature=22cdf28ae6559f8ed12e41836cfb2586415d03350af28a0572ea572c7da04b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

