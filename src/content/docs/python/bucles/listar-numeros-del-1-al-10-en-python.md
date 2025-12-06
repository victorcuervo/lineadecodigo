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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6AICJY4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW0wZZGveVb8cAAHu0GtJpT61LcHKQb2RIKDfeH8hY7gIhANPQuu6MtTTToZJ9Blc8ewsdOp8Bqt730YQvX5ICuPN6Kv8DCHIQABoMNjM3NDIzMTgzODA1Igw7FLU%2BZF%2FOB%2B1vtDMq3ANyXDisRoWF3InkZkSYeFT2Y6s5fbBjXo%2BjX5iQyYmc18UwJy0JLyrv0%2B%2BeoTHFwXXSB5eYG%2FKSjgj44%2FCr1Z9dBGaaxXt%2FSSYugGfhzlftKRHMaFQZCg2UG1ZSmP7Ll%2FydTlU18QvBVsa7ZG53ZXDD9VtwSfz6b2Syc5z0DEKfhTmU5bWByroS9J%2BHlXQtCHLm4RIi1GEB%2B%2B4TYslevi%2FljqQM6s7Tcnw8nDABHRqt0jDZNVJ%2FC2mPZ9bifdKs8RVTVAgJB1GAlsWqFpKNXEI5iM6t%2BzycbUYpUl0FsmTc8quFwUR1Q1Ub%2BAoi9ti4YcwIlTvuXTAJE2oeaMTorwVz%2BM2efcj9bKD0Lk4%2B1pe8CDgKM2pi08WgP5A4sekR8sauh8t5qIs5U5wuvIe2TvhzDwmiy3ci1pP15IjSsDfdQrkADWM4P%2BYc%2F%2F5%2FPGKJ6szejLVMVngs8ETl78H2TFa02oWe6sK8SusnixYOO4RIq6NBInHK1OeMx6x7K0Ez8Pl2yJ%2BaqfyJy%2BQYjV7K8AGhusGwBQ%2BKKPLWQ02%2BlotVsr58bkx2sNX5XL%2Bo3dVmuTm7r8d555hT2pTOhLf8fR%2BRYEqxLli2yGOX%2BpQ509P7owLR1z59luOqr1gitTD66s%2FJBjqkAR5cVnD83Kp6RD1ryITElPky%2FK8g7CuDVijDwZVSBKCnvqGGMr2s2dsbSHVx5XWT%2FORp%2B1nilZ2Ib0WcnSk8Qegk4%2F4unyqcKIbHACFAeMVWMddexN%2F%2BXoEgT3PHwih0lTmOPj2zown%2FWZiubHYuej5yo%2BlUiFEnqJb1dNk77qZYtL7BT1%2FXQHeCXCExcJi9XKuuHVLb9bV%2BruC3MahGa21cqkA7&X-Amz-Signature=fc2d1a0b6c7cf674c43401c3173f44303728e5c5f39bdb28c8fdb50e32b7f615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

