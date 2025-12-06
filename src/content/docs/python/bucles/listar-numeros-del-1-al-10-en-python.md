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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHATOC6Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwbSRzkvvcE5b6BSKd89Ikh2OUy47YU4N9wO3OvISL2QIgIFNEbugKmurXJ1DZSbX1dMEYQEmfs6o6tNEN9W4AMfsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDP3toFPsO3fW1M%2FtqircA7CmQiXiva0uIs%2FGbCkZJofWN50UoBFaILX7Za9TCBRhL33dbi5Jf20e5Fg2wEsxwr36NCD7C5AyXgiz%2BbVv7eFOiPQ6Pw1d1DLbgZ5QlDUXULxecEGh24t2vYRTnkC4q5tDdK56%2B5FizWF1iQO6A69hMYBH4C9ZQ%2BXrZNbkltZR46q7DDbGXEN7y0Zt7lAQkh7wdsKFpZwKNQZ%2ByxsXG5%2FfLjzmBc0ZpDai%2BCpdPdSXaWqCO8UnbMFcYb%2B9wpLUBGf%2BkK7tiEO0Q4STvEQOM6miidn1BQYsDLWQ8EMEfDF2ZREVczcbST1if7nD2A4ZuCp%2BlPZJ8aio9E21TW0mfdl9VRZ68EfXL7dPbXyQe6q7PuCMbOOa5o%2BklK8ToFTSsd1w6gk2C5Zh6oHpn4NPlZlokHere4MaSGO%2BMqFEUf%2BhOaB4ujyYPITPVMr8fgqz15EI1SJyuGOc6Zrq9q4GTMcVTwBVF68liPDc8BaLW6GkqSNyd54az2wCCJ0%2B7jNd1coaYoM5%2B9%2FbWAC6krPhUdSXgXci4VB1fPgwhnCwQbjbrHaMbmoA9H79py4dZHg7xzMDxC1zw%2BLYELJvI8hZcq59gxUgABtsvM%2Fre8Q2OpTJiAa9DQUHkAsF6iAyMJS8z8kGOqUBsJNVTRPt3QfjOl3VStll%2FLlN0YjpI81MQ5s9sTBYxDBcmmI6boJKm6VkplThhTozRWJwJu7LZnCM%2BRardtfjIQIv1tWWPCki3cf5gxWUqPOseihc%2F39OyEVQgbiLCD4o0nk%2FjQPu8KYiANgs3bikYEF7L2iDy2aJsCH%2FLzu8e%2FWPuozH0F3dkJUdIW%2FHkkoCPc1fO2%2ByOvVaipKv5ZlJ3kmnymoi&X-Amz-Signature=618a8ef8ceeb272aaf7748db68647fe691e7d5678bf95cd4fcf0e5b3c6c15080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

