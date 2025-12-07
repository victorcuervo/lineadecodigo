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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662372PHKX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHxE%2BV713fTwmSaqv0ifl7TVXdPPzLABdDeJ9du31DdAIhAJ328Qt9lfAuyolWOqG4WI9krn86Vfem%2FMq7giKwcCp8KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYt2L7zOebM8GTmPEq3AOBbwDvBJ2Es%2FIHy7wJAPbCyUVMfI5WW2S6WfNBOc%2FvpSe%2Fjw0MFNTy38wmG4ENZoo3B9pqlz8E%2Fz0eI4AFDhLotQsBnXUTMS6EY4QbZVGiBiblRmW6JroxpWNgUoSuEcTI4sCMHCcaGqigUh%2FbKCMSMQEouvyitaIaGjOXOp2kZ%2FkZxNTYPGdlPiLpr9gCpqL8j0zBYBUXAchV3bJXyYKs%2FtRJTXcKy5%2BKN%2Bmwwkmkv5jdYn%2BavtgJQAuU06aGzggVBG7dCW9Q8C5hd6CNBh1PiJJzVCYOh4yEc2K1sa3W7DeaGvQCNzmkgbcrO8%2BNdFSN0AoUVj%2FMveR5PLnNldchLqgNG0MuKWeHHhbY%2FGrmyjZA4%2BbHGUB5%2BjlfuTN371sPLKDZmWJmVE2O5jbusWFMHbYM9D%2Bo7qc75%2FAGjppX%2FZVBwZ%2B0PJZkqh7q4dAQdyydynSyhFHQrFqgBwJ3l9D%2FXOm1tc55vizh07duFxiKizcSa%2FT%2FF%2Bq4kKUbeQ0kIhdhY0yf8qjq9Ngel9%2FSbcx9RL21nTunPVO0mh3DVTEsJfcstRnkDHb32uyZKFCN4y4iL3w6eeIWZyLT%2FT5Wto7uUCuoDxiGj1%2FCDr4SvxgAULzrDdC0xjEkVp1ULjCg%2FdLJBjqkAa3lYsYBFSN%2BWqYx2C2cTyH9mkmLlchG0ELvZ%2FRAmooGOynjhrWbAcdta%2BDhjHFOjTfwR8mhT96f0iJsbEhBspjTD3Y4dKb2z2oYpKKcdnU%2Bo%2Bd%2F9NxlJjRtE%2Bn%2BcJ01B%2BiLw5w0AJ3viMpJK0AOopa7WIXT3DBp8U3lybDEXfgOo7gcufLz3rl3Pr1TbXDPaAranGVDuaseGd%2BDb8eFEmsqJpeP&X-Amz-Signature=18bcb50ca207bb5baaf944fab687f4627f13a99d2551e645801bdab9ebf255d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

