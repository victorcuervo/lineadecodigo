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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKCBMXK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8%2BQQIozYhGm2V2XbOF203Anp%2FnueshK9q8Su9mp1biAIgB%2F8T13Dz%2FFM7VQJOBPH8ZqxVt2nqQE1eG2gq2POaSJcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnzyCNVEuQaB%2F99SSrcA627Fc4LH%2BFKgSjk9yDokGE%2FzDPb4pXflhImo9AINqUqOnqAVBDQ%2Bxc9w1axIxXW1QCoiCg0Wfhxejk0k1tnjCSRTnCFNt8zJLnf0OXK7vun%2BfE96scrA1esE87kE5mLWTHSsftRrF63pGHkW4LtjtP3632v%2FL7Mt3UqLabK3736MZ%2BAhnbCSjdFXC8MGDttTbhSCBi1Vf1fJY6W7wC6wvxiklvC1gsgSPfk4vljm87ZBolv7D70O3Umgh4hbj2ZKrmA5m33ol6C47vOcx81R9v%2BXSIgF6nUpJURlFnVLidhlPoBQSSqYPQiyX8MYZJbBc%2BoTsiKyXGIxFumKMumwwx4Oj1Z7c2ebdl2zTGD9zXPlLzxeCtld0Sphf6vMddWXNDX8Zl0lbsk52ABSe9Mhqi%2B87Dj8wkAO7ZWJQI78799kkCYm0ZRqBiId%2Buw2INTqZUX7k8tXAElEgrbhUCBvSZ%2FjKR9Yg0IRTJ5iOEa0cHf7183N1bzQqqXVapygYosX87If7ilEVcQ3SggO1OFCTZnhwCfg2Yb0FUYmULC7cz9VmQvNzT6ALbD3ghGQy54tSwa7Vv7rOjd7m%2FlKZDRLPxdiPe2kFXAsNb3BsJ%2FsFzl5sR90yJ2srvvA7JiMKft2ckGOqUB4K8vQ7eXPDWyLTYFK9h0hinO7snJnme98RSKNFIslHv%2BuZxX%2BEAhV6MuZ3vCNJO2s8CDLtSciFeZnMPcSTWS3ppuUwp23C0NO6yrX1CWzMehK4EdYi8f3eHI1vlNr7Q8R%2BOcxhGXvTSsYcz4ggKn4zR2SihMQEYRN8NtHMj9y%2BfWpLG%2BCEY%2FC9whVLu4zn%2FIflnUvWGUuN3H9EYuLZZxUUB6RVY%2F&X-Amz-Signature=23deb941c1659e7c749c2817ed697fc963306b7546b906e29d49f695460370f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

