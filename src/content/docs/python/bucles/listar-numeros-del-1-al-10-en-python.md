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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STFGBQNF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BGFAA5Y%2FD2NY9y2agxrcYXN9cyNqY4a1jyGzFi6zT4gIhAKG6bP1PiUjWOzOmMlx54vcXqrrWB2y3hcnFkamrkBe2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys5jR%2BE0tXOM6HevIq3APP%2Bq%2FVLuS6uhC65QxFCzPMXI4632eRhX5x5R54WxnPamtwgk2FXDEuuI6H%2FwptCt2URlX8RCVYffUbjac1aNXdcLX8IqpfJ3UEo6wPn7Ui5xEA5JuZrmZKT06VnuHJA3LkSG51jH8uLsY605TMWTK6WTzd0VR%2Fn0h%2FCQ3MIaQWvGTQqLkO5rMNBufERFSC7%2BLkNaoVBulDK5yt7O3b%2FNADKx%2FBMvLqBEUCOiMOpYfiXi6Ok7GmxcxKY7ChpwTO4bCsd7Sr7nyFwJqp4vX%2FmJXRX3ddcp3avmXdHhX0tr9qBeWhD%2B5TF0a8IFN%2BzQqr4B1aZq5YOANUnOmytga7b%2FDR3HoEsZgCQG0k4NIp%2B3fGaG%2BZ%2Fjl%2BXd2VhGgeUyIdBPvt2kAthAl0%2FFC0a9G03zhjha8hOu6DvgrXyQPcy6%2B%2BSix%2FSikXnus07e5syz571YIskK1qDJl5pDqZxksLEXhWHh3i23JkWstSnOhFVUEKnIuW009HsPKtyGhCPptIbiyWelNncEfCt0y4eWF0zXcW0M9OIEPNL8RKXpt304PKRqB%2F5WJ3ulLkR%2FLAkM%2F2dNdlf9E0d1HlWWpP%2FrbdIS1qlqp6hBYrbtFgH6mK2SkmWkxrAbg%2F3mJJ39KA%2BjCA0djJBjqkATxdJ2UaVF7%2BcObGTorf2cdKxPrfe7c%2BoAH6zvn3sJPVjKBCe0yZkpcp21nxJ8cpG6b3VtSJurmu9EtqeASNj6%2Bb6l5rSH0n0QhErhzKiJ%2FtK4wdTJDq1DhFMEUDwllnA0k7PZkSD7K%2Bv3ctV%2F%2FHEM83JX18Qszj7yytLTvfhJPV6gpj7U5xl2jVzwfcbiBiV0SqWfmsjw65U%2Bo4f4AASBjFTWsW&X-Amz-Signature=69976742ab9a608b063e8e89fd05014667c136c6ef2b711b9440e4bd4539c463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

