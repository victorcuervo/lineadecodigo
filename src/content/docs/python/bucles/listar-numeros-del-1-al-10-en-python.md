---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V6PI7VR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaRLZ1ZnRs%2B8yShBbfECVj0fYA%2FSKcjWu1qfPcFDsS%2FAiEAk7yVQ3MIP9n3YaVsTUhwmtnt5sHa3Y1o959mIEcCpf0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHLzfWmH0vNZKZ4DJCrcA%2BakwHZnA0pmoGF9SXn%2F5bD6oXoZXuF%2Frgm%2BstKMpTuXIE9mR4xqtvPJ6p4mo5XwMpjMSuzrW5aNEpwkoDrqyBI%2BkO0ubS3LQFY%2FN4a7ubu4DHOCzaWeMaIYr1u6FVFbHqp0uDWnXS7Cpod06OZEB0o4Mm0KcYUGtmwwghFhwzf4drKghRqVmgzt%2FgIIP3M%2FK0PadyLWhNpFkJ%2BLZqofvLl81AQogGhJiX4kOu4mHgNBGajQ5RErYa6aVsG4HkynPLe240FrLN3o2fC0IIHHhnHuzKq%2FJ2P2qswf3%2BKhCGQ59wf6MW1qf2%2B0NZSO3ggGpNaGewMz7ie6Py8SARJsOj9NcVGQuPrNBwzhJE7TBUTK8q6cPAm8CfmhhlF1Vur%2Bg60R%2F8kVIWtqZ4BrJ56b%2FdSdOB7JxDDj1htLYBQzTemzvzQGyv2CtfpSezG%2BDReqM%2F1ahpTfr82fm2i36NnucPBQlEECGZtD4rqkZkPznlrUADHJXPHo0Ai2CFXe7zwUslJfx%2F%2FT9lkmtZdncWpgIrs1A3iNLVg%2B5jOf7bhArskc5bTY4vL2zoTrseTGetl6FyL5VZ3B%2F3WDk0IE6O%2BM3ujFFgpK2OxEi4vLEfQCgz4%2FAnAjY8XTxqZ8JXQcMMfcxskGOqUBfe2SP9WQku5mN9NW5t3AFM1Z9XS%2Bj8GQnm8yA8w6Rq2lpiC2Ye9iKUtykQvyyMXrUbayFc2Qq0mVUPc0zVINkRIFbzR0Qgs9DU4XATga1BJYcBvblTbyKQ3vgbkw0NHO%2F75EflVd3XTcC2et%2FXENncJMUEHT4zd%2FfJEkSLAktVgGZJRPX21RerMODS1qIbLyrfBv2ZthwzxTjGDFsIHIl%2FZ%2BKKz%2B&X-Amz-Signature=1e2573a0a8ce09b894afaec59c7d3b591a55768550d4c80d9522f19c8c86a73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

