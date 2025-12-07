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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMKMF4ML%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi66pfoourZmpqr7yNZlz4s%2FAFUX6FXxEMko0iVCrhtAIgDg9soNyJPnk6llweoBuXJot%2FFu2xA9Qh5IRypWz6%2B9gqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEi4WWarXbR4TwUY1CrcA0UKgfe2pSpUY4O5N48SQoSIRbHVYIeLXtLqxMBo%2B1DJa%2BSf2Ibm3olmPAZEmncPIyr5t92XXgYy0JAtaMBoCrR%2FbDcV74CECBRDOsHvo5c7uRBPt734UdNQPg6KGtPEYyqmkCo98OvbP0XgCwTkWsYVOpqd1cus3UxO1lgUCNK5bzTeJp9b1GZM2Co80IA7%2BsfD%2F%2FCBXq8dy%2F5xP%2BpJXTxur71rWFumEGcx80Lpcr1BG7mmlkJRH0hIQKwKSf4sQKu4c5VqfdSyix7209jQDVEl44E1MkjZR%2FUQZkldgnB%2BMqUNBo%2BBDT8d%2FyJMvKRYsH9ZfUP2sILoithN0BmlUcR7uPsOdmInWC9z%2FNBEUTFwlLnd4jic6q9cwzl%2FdaCdKAZwbdFQJy4hJGh4bJ1H7fgbtD17E%2F%2Bg7gueZgyN3h6Mz4MUn62TAMFQ2rjcsZ86O5xjoUjLgOvVraebN24Tk9X5sa4A6lyIcePjERrjwwiNxC1R%2BTm6j%2F3N7q%2B7sOnzqGVdE%2FlSEuqrOlgQ4BG%2BtEfBPY4C6auw3YMI41cK5ZhRFWFgKl1CWle9Ks34VJLkljO4fwifoezElIXqHYSmMrpHFHeyMzutLpXGjk8CEA%2F5VNBiBEL9ATGCO54DMK%2BF2MkGOqUBQQ0mIzjuyuY3lf9pKV8k5TQnVpTJYJQ1EDS%2BOM9nzqNQSiK%2BZ357GtH3ZFbwv1qUVyN8Fw8yW9VhWd%2FDTMBOB%2BZUrZzM1Gs0w%2BQYMUBattDcYR8IlFi7f1YePDE%2Flc2wswEPkksYzQKLMCeoB8wbFmSMVlrY9hW%2FY%2Bhgdaxtbwp0yxC2pynfSGg1ATL8Tnq9mRcSeqmIZdI7e%2ByMfYzLORPTLKfj&X-Amz-Signature=b7bddae559865d2bd77270fe5d87556b6fbfbeb82ae660e8d6ae23947c2813d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

