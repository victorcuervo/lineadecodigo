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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666III7ENC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZVORunsLcTd7%2F5Ps5HYlAUTEE3szEQndbkKfouqHaZwIhAL1p1E31q3II6wTQ2tKgQDUR%2FW08Wh%2BIqt9sTdO2GKECKv8DCFUQABoMNjM3NDIzMTgzODA1IgyUxXe3iJPJU%2Bx7CeYq3AOlO%2BW0DRe%2B3WNaw0sMD6O69WFofo4WjgpbhU%2B%2FxFsGN%2B7S3yEVKX2m2j3%2BWCXO0AmE7C50nPuCizGNeXtjx4G7gjuzyZbk1qHLh8sjvRgQnIYs2ahGBQZW4Cgf1hUuRD8QVaBi3%2FZpU%2BObZ2F4eXieJqqoXxFf8vSYVwochlXkYfYFTsO9iDdDYpu5EWnGc3icVhYHVj5dQZ5ZqIK%2BPBMTHTmQ761ap%2BF7eP1Y7XwaEuV%2FFS5JU3XN2G7iLH26zRHoeUiFUpv4dklq%2BELzlcXIwa5Ef7kp86JYMVivQkWViH7hXCrP%2BLltVSlCpQa%2BYpLMZ3aTSbvPsrfz04Ss3Cmh9Qv8UkZ%2BJzJgVMoSCxZ%2BvvZNQ3Sjd919vWc6AuRmrhm2%2B1UT5FAT0I2F6ovuiZR3%2FLzxQAZnG2J0yH8NuDOY6So3rdYpqrX3yyDZqFx9xro9FehcC%2FPo%2BvNJ%2F%2F9M6iwDCmsikEbhlFRRB4AnuqVrata%2FT2qbUlh9xu3h1n9CghJrLa6VGXNytxMv2o6iguT79NPAKJ77y0XYn1OJTQ3%2FByCgMR5lHy6nPrhK19NULi04lZ4Ww61p8f91QR3SZLZ1uesRqlg9RzKK8u6SZF%2FzkXi7WfzU%2Fcedz7T41DCxp8nJBjqkAZ78XjQs6EBEjTVk%2BCKhwsnNLmHkOasluKeaty9cQclrwHuO8MDk54A7ldSgJbo19zuSG6yo5EVnld0gFLWeacdLSgPDWktSLxXJaA6NQaOz7x1QU87kjNJlKnl3QjDsubu0H%2B%2Bh10jVmwpY%2BAqGUQFl6pdN%2BWoauLyEU8MCDolS8umH6TRmFa1E1ULs1rsnZSI9KjteYRevDGwAa2mhyTRDVHUt&X-Amz-Signature=e44f1921a7c27a990cdc7860b1cc5d1f9256a3a9ff019a3bcfec7042d1dd9840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

