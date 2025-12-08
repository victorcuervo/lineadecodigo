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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCGVZX4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdK3dEuQEjvTAqLlCHx3bAWtLlOVTdAvGR0Gau5gUaMAIgZT6K2aafhuo847CBw1VWUH9XsylCIExGmsodSjGlkFEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc6nIDcSjbjqCNmtCrcA0RCfnJhai2ZKZU%2FoIJvvozCHm3hV%2Bh0M0EOLMvVZojRFQotYBInToqXDPZLUdcau0DKjy4NQ7Pb6q7D9PrVfB7NIBpJCCTzwzXvYVrIlvius4xHqPDi5nGDghH25gL7yxNOjqU9Sbsj6isi2sEyA3gL2UFaNPS5ZCyk%2Bc4jaLCBf%2B2%2BkmGIjXy3b6PoZU3XpnLoLkxY%2BPBf9S4PoGKKTVYp%2F1PoqSTm6C3kNKt39CSuZNFVCRCHssG5cjGWRbamb%2FunCjV6smVhVJS9Ns3eD3WfdT3U5RFdBkzBqdbG3BkAm96eZvDE77vj0NDp7uLAi9xTPhsbxXQFTpwgTZOZbWaAni3W%2BK2hvJHp85K6cV0iPmU7iXmR0R%2BNIBUp01%2FvAN7IQbBIefgQIccgWOlqHp4OAq9kPnPgNSfdE%2FJna4%2FAWPWPlSJFEC96c2VG%2F0b3lA2b1lJNCOlRMSm36qTaxLGV76f661QLgSA2RIq01LNkFE6QFg%2BQR%2Fd4G00wYkAKiPHqUqBbSldKgGtiBNWkt288iqaZEEk%2BQlvTviMPrjW3WhagAAl2YXwsJFHx5YM7teE9eLhwC87fhW7ejsZKtOfkzNKAhLNpcz704KnVjXtLFQluRov9IYP%2ByylvMJzD3ckGOqUBT0d5zGq0ObOxsBuLnsIDsW2yb5R4HvjvQNizJTUoa66Yr8MT53RMiu4Ct7l0b0m7FP5fQpanG8aU08OVjTB%2B8xzEyIBGWnucpdK7%2FwnozK%2BYWOg2P%2FUqifZ3J4x1rnv%2F%2FLIYUmhzOYbpKTVi1RDflW4z1LFvEzbVMly%2BYVgWNv5XQcNjIilPMAThbM3a5KFybU1sjbD%2BweGV8l3R0TIEIbtprAmg&X-Amz-Signature=599acc9e5ab5b0b3678f03ac312b18a8223086c7199d7cbdd1e7fc9cd5c559e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

