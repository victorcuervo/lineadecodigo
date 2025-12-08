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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDXXLOU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO47wr%2B0%2FI2xFwDE221NSKUVeRdwmF22ZcUrubHDfdzgIhAMGXeHgO26eTKHLwDIAoVmGh96iGWfIpwhZrX6FQYeVeKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDBh8SJas1ZKqNOmkq3AMQyZ7hkddSk50A%2FPMZL4MSOHhL1CMx7gmzDvwhAL9HJNaQ05s6owNhvnGLqOzGJkOAd5yHuPRD1KDBOKvV%2FcL7p7zLVugtdTWncr15E2LrMusnGkF%2F2jWl44duo0QEhX8Pxi%2FpZUS8FwkmGjFpfMxwQe7sb8w5XwoE%2F3pl751mJZ%2B57F9EpXiVdk4d5tLC8fnVDFPykWF3tpdpvxXYA%2B2q49bo5OcpU8p%2Fk%2BjuhHZgRUuJLQ7Vh%2Bz%2F3VmYezZpPJ9Ma1mws36pZC3T2Zr5Xm9Qiqoycm31aN90xfhpghtJ8o6X2TDJUOoVHxVamV%2B02HS0DG%2BEBTBVOrg6upVam3LE39ci%2BnQEW4C87%2FlbkMAdCRi01VZp0kSLyzny769NYeYPzWbK%2F1X%2FdAsL%2FBIPqQ0cmXCfTCbW%2BUzM0G2NOukPkIs78EEU1pCmcTmiQcQnMu%2BbyDpmTV3%2BfjkBo9hKfMZ0M%2BqaeM1XnsHIfkqubUYbv4VnyfvSYPg6JU1sx70Mubpllv%2BBXBZlc3%2FFHNhpPis4r9oSRbHwboNnCq03a36dNVDGe4Y4OdYjfcwnES7ZtNf4kvb2MmDXS7zFqwpe%2Fx3vPDGyp2xbj69ZLaACsiFCKryvA8iWsqcM1Xr5BDCv5NvJBjqkAZmipKOMLGqcYBnrgsi0m%2FUbPHMarZ6R9daHmGhsdGqZ2%2FLkonX%2BTVw0cPSW2WMwo2mdydxLCQJAzyv0i1SYcpzPaDLtThzE%2FoMWVIYZ4KVt4RpLVBdGqVjWcFj1l5fB4yiCR5V4jvk0VmiEPVXanJLqk1MpwHbw%2F%2FnP9BfERuljuGGB42jsmCY%2BKkmbR1Hidtll1wlO%2ByRhOesd2hi0fxPd6%2FP5&X-Amz-Signature=f7d5be1c93b9ea103486a69efb041d0e52a398ab064e9f37b54166ba728b9cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

