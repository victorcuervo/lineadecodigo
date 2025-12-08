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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AYKL63A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDH0IXPHvBGZ0YIn2TxEXyyK3DkNAFGYaQmUf%2Bp58QfAIgV1YKrypKacLxuawRRWhKmOTbBAaUqRqSx%2FaO6%2Fymex8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNDlCwm16dfHLTohircA9vJhB%2BqlyLSlcF8%2BX%2BNzyZKUiRGhnqx%2BcgtSP%2Ba%2FbiNY6nQYIyEBryBmH5Bo9Li9H%2BzptB8h16pG%2Fy8Peg%2B%2BRJlboqQSYbpblCr6vPLEISU0bsMJibNrdShqeTu6BEPqRXTvzxe%2FPu4ElSxQ35JYRcgDSG7HwAFf%2B80BJofOlwjRs%2F%2BlciEriV4kZzxEP05Ebp91j9%2FEx4bkEllQ%2BjyUla%2FgWIovW7G3P6wkDamuexgvtkXxSG1nYaRJ9CPfgWBg886vzZPYGdGYs%2FgjqPsGr%2BQFIuFUdPCULMDer236zeRQ%2FPQiStj2GuDCuJm1Kxqq%2BIBLqM1%2B1dvKlnI%2BB%2BGmuJTiiX%2B%2BPDbp2hZMSUkMTxP%2B5RUzas3HqaIZ1MQW2r3FdBy2z2ZTa640ZJU2nDXOYAsC8PlZIKLZaQ%2B5a8d4g0EjWKWvsN1EioWc%2FXNMjdogfFjseN0sz2UHhT2L0jKiJu%2FaKbIwHaijD960IAqtIpKP8FJL6U0sEXC9fNB2npddA%2BQY3nusk3vrpXI%2BgnfRkBxEYyYHigIUWMlAIu6evEa3G2xNV7SFXT3Mp%2BXun00vJ84vFAdu1tSpccALBWId1ZRFPrI1rnF%2FNyDM%2FQRho4MSEidohUnAPSNL52AMMGz3MkGOqUB8r23tzF2LXgpCqU4kTi683ovY47NGpW8XZnh%2B18kIMc88Ki%2FZpCC3ODo7BxIJt9AEkJZ5tbeZj%2BldS1Xmpq1tb5WuNm31DLNUs4%2F4zy2rit3D0Z7cgCGF1RD5aF%2BOhHX0sFNyyaNrYw1kSBzy4HMIgfn6fUrTvG2y36ghKuJA13tXP1%2BBrYhxuPBzbBBFGDpCtpNKtvaY%2FEGwjAvrhu1%2Fj41fY7J&X-Amz-Signature=ee6dacfa64e74e6f85da9b6884b61671c93ffea86b2154e22208c4a0d24101d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

