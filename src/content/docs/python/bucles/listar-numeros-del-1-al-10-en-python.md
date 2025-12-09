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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAAUBW67%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD0fjLa3R7FtMHw4E0bf1JkHLL593WVNEdm8JJEoYohwIhAL9YF4elzhpNzuAt%2BTO3ZmSmE%2FlSIt7AZ9WtZhg2kP4DKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWc0Ue9cO%2FYsdyIh8q3APp2kADHb2vHmB4xtRf8EEa%2BgAmylNVpwDuMdRzHP5%2B5iuj9kGFXvIrjCxAjPtFH6SpgKPAHHeY9PmNO2Sa4bPc2TliUAOhj6Gh5QOr%2BBLVM0bgny1cl1VyHN%2BqiwhE2h4%2BF8l6h8wrmpC8LSnLfHmJIgk9yB%2BFmZemKTcyptTrw%2BRpUOdoVTEv5pKsJz44xDJWqjxIisbyc0juB%2FfORaZJOsbSqGIBqH%2FmxCeoGhSnOZ%2Fkoug0XPkVxxRrbtT9Hln7j8AJYjY%2B5XnRHyYQgwSy2p3VMJo7Dp8bDtXmnZkhiEQTcSQ6MzxlZLnwoJCdpUR9w2rZf%2FFx%2BHtOL51RhND8ke3tTPWRGyflNu8m7lXT4qMroJp1f4LZYBol%2F2TQE4mxZHaQ7TqI2fC4mxxg%2BSn45Q87a4G4srscKPJn6N2bsd930yXDzVPre1ZGMmVEs2Y%2F8WE62wWzXKGal2icurF2GH98Ewn4tez%2Fy81vKR2Kwy6AW1LzX8KgAdvR8sSOoH2knsffHYrZNg8WAfKrZ32%2F8APVwkiT%2By%2FHwYzyGgpvojesLvOTcgQehniMMdotiC1RmzqEfUWW939wVFckMjgSZCeFrvgziyJrGDjzGiPpgCdg1K7%2F1%2BvlYAKP4DDiwt3JBjqkAYZ7y3HgD9D0kaPc8k090DH7yzhbRQZ7NHJt5GVVxFVfgWr4MDl1XKKDtWsfF4WdP3nLP3s4kD2%2FL8BgHOkMOPcOIjp1KyOJe%2FV7i1tokZ7ER0w6RuMgHBedJpR4FBlIJE9eaL1PTpiOCkJw6FtwtouyODunfEOuR%2FHYJGaGXw0Ai%2F7K%2BTFG0v7SANxPj%2FzkzEOLSw%2FV8moKaEX6FwSHwYW9IPo3&X-Amz-Signature=e361f36d81af361f84e2f2c235f29824cb184b0c86a237dc79715abe5e6906e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

