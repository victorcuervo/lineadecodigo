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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F4HAHFM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPFOz2UP56bRaqfhYIklddEcvNk21SbUgxKCM6cpnNVAiBbgB1R8i4DRgmxHtCH8oloGJKeQZXheoJHgeiplYh86yqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjfWERYkjTL2aTTt1KtwDemnj4MHitzszVqdzyN1ZjNd%2BQgJQ6wU7xpv14V%2BPYb1imDErESgQmL0sW7gbpmST9M9chOALzUsqJrtU3ZeerAtlwzIYPlvVSr2Sk7WtpmdK8T%2B2mTFr0kInVsvz1WGX48buA5xHQjtgSeA7dclfXHhIqEq2aV84RvGs7Sz1FVfGWsXCO0b9sTBzJoMtn3L%2Bgoy%2FdZpFb8bFQeYiPXkSXDJfc6EAUedzIRJwWFArV%2B%2BntNyy0%2FxCXOe0O%2FTNCANkeN1yYY%2FeGaW86SzxS6hVvCS59ZUSQ2sX5kMFE3p3KrKBYpoBsZaoJRsegbGS1x5zabWtccc6oMTzQK10nlookIlz7GJIb5bIWb2S%2B6wr0aznb%2Fu2q2NB7XxZ1KmbUu2CPtAUavIpXSOJPC6F9n0Dv7aewUAN%2FC8i%2BlSr8ufbL7kVn2y%2Bjzfz3EkGtjgovFTRbAsGgk2kuYZlvKpJqWn3SqwYMMv5wgvFcSyiBeuCpQla2aMnVnlNpUp7kOKKKgkBu6Dww5QIOKOZp%2BNEMIe5fTuVkCaclo3KU%2BM9JsKWN7QXF2TWWkfeGN8GIw3wKfIBSF%2FfjQA1cFi4P28Ed1aUQqfs9RTiJzSbTXY%2FQZ9VMkGzINKgKcisEJnmFkMwu%2B3ZyQY6pgGuDDKxkO2nOBs0mkpu1oQgLHSUxFIavE76IRwtOBUPUXlPPvVl0BczXsFyxTRwl9Vot%2FnOQoIKeFp3oDuZST535bq8zA6EBMdoofNvu2e0wnanWl1qQwCPZrqDahy6AAFY0a3IqRtea1HUaOY8%2B9Hu1WUJQNCeQ2%2FSDbv3xLuybHt65X5QaYjd3LZQYDqp0deqOVoaLN0yvxBNoOQuCMFtYFziIC89&X-Amz-Signature=47ef614bf992759e3eda9251daca6fa8bc032981b719e4f6bdd8587d64b84907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

