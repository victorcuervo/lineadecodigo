---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGODECN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICeqYMrRjLYkallbTWo9LjIBoBPYGKjnsRTipdZ4ok4XAiEA76DjivXkNVNTRndlHVcW8YY6kyUVbvuOOq2N934O5n8q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAaiFtmk%2Fs3wnysu6SrcA9B8W7rbRy6QF3Goa4rymVmCTRym4VXtMDQn6c4TE281PAb5qRRt%2F1TKN%2BWoxs8nb9zhsPD0SRhrTSa%2FznqPDx%2Fnn%2BMTofuW1NTEJ6e8nYthUBdyx%2FwfvnYt2sqNO%2BSgF2iUgBwM7Uiw%2FeZ7O0omHGx%2Fr4c%2FWTdyUyeZzz1uS3sdNW0vppnZhWWHOiqZWg66QPakCKPUYTF281WBUCnG7n6ZvkFmKGMRP5I%2FM3FjAjh7y9w61uWfCA6SL1%2BClsYlaez%2BIw6e6jYbqr%2BkXhhcVlP8uWOZVLvRc7skFde7c2IAU7b5yT7%2FiPRIJ%2B7K66CybAAHhCSm8cgx42rN6SSyBY1QlTo3s4F8zXRTOnKUZZZ1%2B3PqzLKbt7ddio6SOw%2B22lbgc6muYAso0ZkfgVgZmCfhvGgKaZ8oY8YMpdJahhBQT48dyJRCMVlU0g%2FQQLyEhEoSVCVnHFjSW8xDnVQM9vzHFEJtR%2F8Npk%2BVR0j59Scw1%2Fryr7nq3OFCMsEJVZWpIbWomQDshAqQZcalvw%2FS%2BB4hChz0GppW%2FieP38ej4nkaxjzotNeWsX%2FYvTnGdO6pc3so4FRREu4R46nUxFz9AHnzgfYpuPF93uRttHoKVyoPj68%2BnYw9ljrRhXe0MMnzw8kGOqUBSQMpu2COd4lJbtbPtcFvPWGD390A83plTrTnoxetHHuRgQ2Z7%2BlTFEVtGBQExA6gImbrorHPfCXWQXT7%2B7zlMwgi0hY8G90zdAZBmbYnQmy8dCWd1O691g8y5uJ2sWSfyO2YtdpGHW6LdcvtB6whkOG8R2%2BIOat2Yyz8OcOEJomNz9PjqFl0SdDa4WFV51fRDjPYJ8jLqpwv95JFrCl7qP22%2FTF8&X-Amz-Signature=f794b68887793188e75cd9fdf96f8799786153e99cfc33618bcea05038668a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

