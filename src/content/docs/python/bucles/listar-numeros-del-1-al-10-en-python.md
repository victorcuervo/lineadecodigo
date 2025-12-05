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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJY26XH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt64I1mC%2FMj9txUWORomTKmsMej%2Fj4ijDXItSRPd4KkQIhAPZw5MLBwV96cfUGCJZB6g6CM7DUMf38uhcC7HJoOH11Kv8DCGEQABoMNjM3NDIzMTgzODA1IgyC47OUusLPjI4SgO8q3AOfh%2FUhWkGYzV%2FUJ2W5uxKH4Yumc2n1OCTPZy8U%2FHp2RdE%2FvYGIoMb2phy%2Ffd3nMr4wq%2BsSLudLrEpWgcX7r9xjf67TEOr8l7tdMEvq%2FcO7mLa%2FsBz0q9CIRS0D2qwy6UyhWhcbqlI5Zpz%2B1Q2cfGkxxZOsnFXx95jAR4jYfQzJ5mhn07iqW9ageqVjB2Pk2G0dEtIBmVH181JsgYBl3ECibg7X8GLiaYnig2jUfzycI9DUm6uA%2BKrxJoc%2FYeKe3vPE9cLl7YRcv%2BmbHWV9dM1HXVlRLTWnCicPIHin2cYXZ0FjfI5DdVMCGS9OiW%2FPHyhzxNtThWOxisRY8s9ZTzO1JrO6Q13EqlbeVQAek%2FtCBk%2FirLBO5cUuIu2vQ52wgqnCAnhoNurHExqjHodUGgbzCnEEPqRJ3TgO84fZbRXfTXsESNISt3u%2B%2BZQ4dqjePT47qEy5wIkwgBvUwSNrqI5oMnLmNUm3LWmLLqPpJjwcglqokC%2FvCPfPJS2PgNsMQ2bXy9RF04c%2FcFdmA94SdwdzoJn0wAepdlpYlCs7n%2FU9C6EV%2FI9k5cj48lo7yvYv0DH96ChYZpTJaD2PA5%2FibGvv588Vw70DG5olqjedlr62vz3jrsbvsTRWtiblgzCS%2BMvJBjqkAbaaJC%2FFZqgvHxhnB892VsJzh5%2FNyo1rd3ITwpd7Kpmam0Q4QMKd1vxKzGCELRwpNApi9B3KpvJ0XbPEZecrgNfqWTmmruW0M2gS5ZM7YsngTejQZKJvNcJOcFQQ9tKBFYWVOl6hSCI5TDMFwGc5VMrF5dgF9BXsxIhmGzKbsLvyjd%2BalCGZF6hHZ0joo0bsPToEsUDOznm9ab0HCFwihwmB3aN%2B&X-Amz-Signature=571d7e38d5a8d3a645f3a7ea5ed74f3c788955e1015e62c96f8ac8a1b5495e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

