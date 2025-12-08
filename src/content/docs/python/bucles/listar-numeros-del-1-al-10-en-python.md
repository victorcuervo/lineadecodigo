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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY5DNSPR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdaeCjf%2FcypEUsF9H0GzYsgLX1w3W4Bl18a%2B6Gzo%2F0XAiB7%2FAvOaNWiljHZsLFNdINx6A%2FXeN2PC9OqcXSqrPo6OiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiff%2BVjVYAayu3VqbKtwDIzyvvXqh47qOtlPOmukSAHHtHRQq2yLcS%2Fy45iOCwxAD8lbaTz8ZoDBqGv3W0NG5NW9Q96EyijL%2BTxFhBdkce%2BraKXFlLW8AvH9lyEIlABKwtur3QKwyXXCa4tk0EnQEYX2WzhPcnfWKRDRAxeNP63UqfsvLAohBfgo%2FPUb6CebTWzkR02mbu1lwYnTwhJGw2iczRX7QSEEn1Y07emM9FxJXIYTeKgNT%2BHdQnpcMH%2BWo0qQto17s8f645sTuj0FgwO%2FJ8SEopMScMhrf8qwYR98pHRXOT7LP1j9lDHaIZd3C%2B%2B3qnngvxAwsnTZ750J6Tzd31yUrE1ItBRLw3BYd6sj%2BqxUfRABwa1GZcFlxla5dbnUYQ7%2FexGWGz3NXFOpIkxktsbTvCmquQ67SX5AoNF816%2Fhgb7FR9l56DoC%2BZpBYkpVXBpOKXdKvFnZcEaBHThLVQ25BSlP%2BJUNk4ZEqWx0pA14sw1LVO1JuwFcnW2Y3gJ51yPY%2FeAmdnCU84JS%2BJ2KkpE6NocF1wHh8X3yj69UIqwMDXBgyYHTwjRaFg8gzRTYmEt9X9JrqlXSSHZuktuO7KgLj9OsdNpq81rwjJoElrFLbt6Eoxi3ddNL7UwxPeStXZAqBGBnwFlkwg5DbyQY6pgGVdtftuZtdUputaxOmaw94l2Kv9SyRinJ36%2B5F5DFNQhrnydDXk1rsyT26N8V%2Fnr7EUrD%2FkyzDplPT9AWPQgybRhl%2B5U%2BwQ0pHZSvd12m9PcBWlXOPBOZ44ddgWJpwP51eH%2Bvsr7X8J%2FnXe64a%2BGECscsWtsaN8xjfrTA5Pe%2F4QXVROVaC5e3VaeoDGxo4lXoEIVC%2BqfNQkrv4xlz7X1ggmqTvqESW&X-Amz-Signature=3ce0483f3a299e0a504ad428e7617a4fec153b78e405b8f7c6dfb0e5bf4d8987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

