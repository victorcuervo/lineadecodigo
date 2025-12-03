---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWI2AD2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC9aw4FlyCA5kTv8%2FWn1YB59JKgXYQkhPof19nzduDr7AiBVyD369Ced1C9T6mKdOcDMXU0sHns1QagzUEq0Riin%2Fir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMMFadTWTcyPH3sLtuKtwDZ8y6OG56l%2Bom6nAw%2FIE%2BHQV1THtZC%2FEgYJk%2FJHOlilKC0aQYF5ODb9dv0ixdY3sK5vPmLk12fqopiFCcaJSaUJ9eIHpYs3cxrC3%2FRjQnk%2BeJdXrJbjG3IXFpsHzDH4qPe4IgxOav%2B2gv79qIraGPfxDjxCtsHJl6KpJwIApz%2F1qBAboh0YhV%2Bw5q8xl1gqhW1g0DKhd%2FPqHMo9416Hj65pp5qwdjT6Bp%2BrnHaIvaRSKIDIfoi4Y2FXDnuArF%2FEQW39hWWFt25bXtOJtwA3gvO7h5BbeqUfKFE5Y3gJvuSeW4JSJV44%2F%2Bz2EPLTqjpVhmY%2FviJQ%2B5H771ZocK1JGQPno3V5PwO0YHRAkQzx34gowLmkVHBEJ7N0%2BK5qZLGGLnly5LizKI2p3ILZpE2pZsdkUeMUG%2BzEm5WZreELsZscdB1KHTCmPILhK1bWVTailGEgX9quGY6pNeNi7FG%2BlgXRMB%2B95efPRwidhnJ3O%2FOYr4PdHYTLXL8AOBsYhq%2FKP6Q8JnOXgMfOGIJRT%2BI6IQ7LUUmAZT1LalGYZ7ZaLdebqPqoBinHej20GVJcIAPEgJOwKn01g0r1p%2FvX2bCQV3SJHPitSrootNk0439Fp%2BH08bfjzxT3nnsy%2Fm53gwv9zCyQY6pgGr%2BOXOdQlpKH0yGeU1WqUzrG0ES4wg5qiVB4HNBTUOuqoOqz%2FURHXFRclw28x%2BkefAA6wquL0SdL3AKX4cozeu7zElTCK3lI3oqiwupd9pKgTXFOvLK5BslvywPwlBlLePSuwHCrTlS0DL83n2fFnzEZ%2FBl32BNaGV%2FvI9DMzfUy6fJNbhaUrZ5waLbN%2BLfG6RmtYeWScJ8V5CjYGKR0aquU%2BledtC&X-Amz-Signature=72b1d6673dd10c380ff4666bde258080ffb9e6347be9da75e9beb7e88c68cde9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

