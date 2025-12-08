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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRJOVWN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5%2FIwXKJbUdR4MwNupWrXQzK6IV5ZUM2B4hehqEEbHQAiEAoYmE8ogjFiBM%2F1%2FS4fMwowGlOLujAR2RwNheD83Q68sqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY%2FmxOkSz0Cz5dBJyrcA0CwNTYu%2BeMmu8PXGzm7eWq2sW5LSj4mcrUgVX3QcCCPyaULhAFLQOBBJjR%2BOhOgwbgRCKLaIsIDKEdm2Mas4ZY0ZvNWakRTIHVk%2FQDbVDsEpUMiGcAlQP%2BS0D9XdaSKUs9Yh2YBk%2BioIMVBwPn9LL0iz%2Bmb0MFxZTls%2Fz%2Bs9dluPiNwfXBtDG2pjJTNWQryPJ3KCzbITz6A2DnKGMEGprv25fuSD89x4x2NXWWSdPQUwLWtMM4PBJxBvbKPS0WJG8uxKylYYFf9VO4rkoHbW8v3FrvG7dmQ%2B%2FIqZzLBD68uKmWEEy%2FNcX3dC2ua8GKxewX8BBEmh7zEtj5dbBKBI4lAWb4yNaaEn8ctkky4oEZXRxbSzzfcrEvRH9660F1cHgnCY3DthqccdIXJaN%2FkLgoxc0jfCwx3KtJ7x1%2BCXfs%2FuZ81IijwqMVGZSMFx5waMMPPyyfWPYObqvHnL6oPNxDownixt0xpAhlTds5fz%2BSV6%2F5NojPhSEayyjw%2F9NYntEglHOZWQq39BaWsTZ9u0GXW0H95dgm%2FehosMIxj2Hv5B1kqOKke7yrrVv6Dh0Sm%2Fpxr%2FHr9soRLvYz29zHOdsymbPhQR5yi%2Bkc4VnJiZ%2BqlaXJWCVckx2UcVjs9ML7d3MkGOqUB7VoFejAUpR7D5u54AW2GDshhKQnpQp39hChXlRmxFuIP9Px8v%2BN%2FeDq5qtl0dPPYIjLu3fKBBJxVTOv%2BBE7WZttQ8g8dzlHuqquCBIoDuUkPh7%2FxImtHQYHrzTM4LFiMQ%2BR1aPSEQmoqwdcSDcRhHZljq4xVW7UpJvxN89kD%2BhhRN4SJmfObplAsO5gGeZVg7ojX2H0wtiW29dzvR6lEu0EC9C%2BV&X-Amz-Signature=ccdd2fc4f2eda122c23fa1711082baf87c2a1b8c49d0d643eb87a022949ea4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

