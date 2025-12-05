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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA5ZNVL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQPXnjoLQ3LGap8NCAIRHtlX9s86b4aMU7MI2lQa12GAiAUascPeHaM2NGua8x0aKopcoR%2FNRyHiODbbq61VDNUISr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMrSMHEut8K%2BX3gB2WKtwDHV5EHrdGPxo7MZ1FRH1VWpnLYCRabFO3zvSyso3ou%2F%2BBUqzD5RqHIa5gAguCrQUYGM1cF2Lalx4GI%2F0%2F0mnBV1qlDwfygL1X2oDNxj3DlNCiARNcJS9RSV5b8Bv2xlZrCtC02ypWDmVp9MA%2FgJsETjYqCOz0%2F6eBlj%2BOVQiOB2LckorGOlui0rtQ46L%2BWlxvBpA5z%2F5wwY26LIG%2FWCbimEgdVvdhngM%2FtDMUXKuO%2BHU4s2ZNu0q0C%2FXpshlE3Jpn%2BdwvVzudYI8adGpDUQOXJrWIM3mtn5tIY4rLGM%2FrpNIwz13ZwyjHxQmqDeY%2FhzlVx0YSZao%2FgvCq%2FgmeBX4LJZyWpP%2Bm040aDEifMETVZmT64uxdbwb05phgTGbY0gLUecxLC%2FIS7JqvRB3lpMvGpnNEcX%2Fwt0dpei9a8opIt1djU8RRz8vkTUQjnrrCjNldPjOCvd2rTVFG1Wi%2FzKi7Jfq698g%2BIf6V5FfuNhH4un%2B3WxQkHy1To7Jpyc2MPbqciUmnT8b2MHoPj4JMXAcicgz2RQNnizZI8Kj43bsBTQxEFi%2Fb45BHjrgDEFcEHCVA1tBX4Aq3aEZWjZcWiUBCrZa0IWTByL0wSaKyZQ%2BTYRAfaNCFyE7Jl1ZDOucwvYbNyQY6pgHyQDKAnUHwHTyCP6O%2FTaWySjpmdzpNgeUx23tMBZ4jvHqlhEKJUTQPI2crlqa%2F304w8qeFiu7qxyLYV%2FCf0%2BOXZ%2FFZ3T6fkWOqEOZGRKNQqwq%2BR5s54lIX5PJD%2Fd5WWtQy97ZvraT9pRVPYzMlFGWCYxB18N7lnIUIscM7deN7ZHhrasZR2iYAv%2FGNEYBJqqrOFfKSVrV7sQN0hWVSCVQXNA0nirX3&X-Amz-Signature=00ba3099d6cbbff171ee2f37f0ee6721e4bdedb7708f32848aeefaaf77658a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

