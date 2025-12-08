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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJ7TLP6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtZEw%2BaghTt7o11dgBGAAKN6VZx2Qyo6rbsbq6j0HYZAiEAkEPBuGJlGHXrIzfad9xu2fdOLoEfiMatPcgPnzuBCmgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL26e4BgfDdkTXX%2FfircAxOTfpHVAcG8FWejbSn5NjXGRryK20woYa62VbJ40Z%2BLSbXPcZ8NYuODQXKT7G88bw3Muq95iQmOhXM66Z4rc0q2SASH%2FoePMLTfYgwm%2B6IgsJNPRbUB2Sd%2Bk%2FR04MzGw8ta9BBg%2BO6QBBnqMjg2UnfV10JpHXCVSRmdbozhIAMRe6sO7%2FuWyEsaayUJS%2B1xXF8M0x1uR5AWxT8EdgAIst%2Fm91LdMN%2FjBA0X3QXXTvpqDy1F6yHN6Vizqb4VxWNigT46GUq13yqAIIcDwR5ct6WuIwxizyRRZ6LRJl%2F4rOSBXlJE8SB%2BLyA2hzAGe%2Fe22Ozfm4l2iNrl1%2FBImA2fgyOXxPJu8oIwusCDkczXaF%2F29LQzEYY6wZf%2BsPryQLVcp9na2gl3PQWIlga2Ux8G%2Fz%2FvVDwXiAGZp7vAaneO2T%2FWZEqwZRIxVqBcIiHadJuUrlpO5fG%2FynMEm8TV8kPelxgE5ot2S0y4Hl8r0aLMTwcovhoNp%2FA6WawfzIs5%2FjohHh%2Fewt3ajCLzod1ZMvi2Csj%2BeTnYX%2BMNppSmB%2FG0XyulEmjuq8Xx%2F03QcQpQDoTTq8kJ3Ih%2F4LyLQgJfdZwQnjzliMD%2FW1pWyeWi6O3XPWJKcIc5Db3VqV9hAV2BMP7t2ckGOqUBFOcGs2QELCEz5fIJVQwwhz5oTuXIYUWix5pZ9Miyg6mxHtUw4Axivg4cePtz5xO702gWxEN6NWfacP6Sb9CfTzhdUUXLJrW36iuP7GQsgIFA5p%2B741%2BH%2BXaSeGydFRPGLo7q98NUzBX9hjqdIFyFaYOf3I3WIjob4a2njwwRdzD%2FjXmGUaoaZysIYziip9IvnbDXfaGJTfrnJdVTAbGCHUW3PJHk&X-Amz-Signature=75233cb36bb27dd67f2a8f3ca79cd37b5574f215ff8882ade4cfa2451b2e6228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

