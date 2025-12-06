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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4IZJO3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHINoYN4Y1KRwip%2B%2B7im6e6JWng8%2Bu8AcGY8ELVap7rAIhAI290ulPEMRahJpTmuRh4l%2ByXoNHsSYhV9Rg5uon34E6Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyWZ54UEaNujTjcf3wq3AMdFyPY9FgvLpYsuRhD9d55eeRxPopuDRuw0VYjZWd8WEas5V1G%2BWf739fUDPUm65qLzxr%2FLRVv29lKBYH8xlBR3TQ6p8herJXklGEksmO0r0D9ujV%2FI6RFnNFrvhgP5%2F%2FPkDk15elGvO28BROhidFiNr6EDGeGR%2F2Wi9naaf050LUUzNpgdX6w8JPSmdq93SbSofqeyBcanYH08yZiWA1pgEKVCk7tby6dkAqaTYzxUJdBYUpsjTEgFijGo%2BGETln9LX1%2B%2FDnFpL%2B68R53ABVq0dkB59Bw3fsMMTV45tNHjss2Y5C1P39iMuOqnIAuZwBhzQ2n1O1jmMuFAr2K4xECIS0PSS1%2BEVDiSKkLujGE%2F3stRgwOApUUE%2FARybZZvTdyBy7jS6m%2BWNL9XW32Zlm8shzmBaWKP%2FYhgZ%2BuUAzDId8Gz1W9xvt9oi6P7QHK4RZ9v5ncufrxJoCKcdWJ%2BS1Wm8NaVaeqvZiL%2B2ZwY7gx33z%2F9P7TJDPo6DlUuzxQcgbs7ovTgHxIV8ro3%2FQ6n6rULl8dNrrbsmfZ9kl7xe6S3HvjV3J5mpo4K7gbr1z8b3uZtekgEe3rEMFkpPTufk%2B89KeFhyqMmtPZTEfxxxCWhHdWCIslD%2BlQG9CH4zD3ptDJBjqkAb4ci%2Fuw%2BEoj7ts%2FsTe55sixbVvCqKwDpnqPziI9P%2BP8WXGPr8i4DVBpJi7dgDuxXKrdqoGAIeZR9N5czUMGDOgVGAwS1l0TVD70TVu6rLKPX78TVWEHjY6%2FLJS%2BUgzsTV7YAN%2FAaRa7ztra24eEO2OmU%2FqXlW48rJ5V6mkDSNZJBSXqKBS0opiJhB3%2FX%2BBGkYXsNxqliQ84lEdT%2BIn8XXBFBXqh&X-Amz-Signature=8534fe0debb4fae4686831bb865a54b18b3343d636a6184ddffe4314e7550408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

