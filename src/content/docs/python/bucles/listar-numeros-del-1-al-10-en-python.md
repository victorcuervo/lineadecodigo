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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R36HC6U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZ3lkSgsbBXABwDAvEHuUBRQEwNFkAIFDkDc%2BofGhGwIgLksFT6gjeaAmA4qmOFfnx6JkoGSqBClhTNrwK9TIb%2Bcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDL1eAbxUFNaxLEw48yrcAwqmYU%2BfNjmW6AqWkW5xt3%2FSZLoWOklwBvT9HhdPhKdUVCO1Gz3w8o%2FQCBhW8W85aFNbo0DhY8sTFBXffPHDfTu2sODFd%2FixwVFpuXYIqbJ9IWJ%2F3sQRU%2FwbKDweuuFpKU6hsKXCncv%2FfaXjpNVhQwV8XCVVcfwQ8kymQS5DSpJSsGWP8E4HAxvsP5Zyq8lRSNm%2F37krEjxQsWbgIfctsKCYRdDK%2B2NpzILE2btMb2OkXvNm1yF5F1zjetZKFhp9DkQ%2F%2By89HihxsVXkZH10YdVp6m4u7ZojTBWFiFy1PFiYD3%2FC8Fj1%2Bw%2F%2FzOLa92rADvbrT4s7P5AX6cAxmJZzmmxg8ZoMGb9Pe84S46a7cdEGt%2F2qRpHdV5Bm552ZC67%2Bb0Y9VEUGu3UI2pShe27S8PXaiN7%2FLL%2BmNqCesjBxJLc%2F4jf2z7ZJ3AQVz6QoshZoaghvOChA9roJjcV9%2FJNdBzWEvqtd40vibIy9i%2BO8Y37ImOQp6nB1KPfgzmb5AXzfpPrf63uViCYRvWUX6hAn7aI5%2FQMFP28%2BjCA4JQywnQslW48R4WUotExj68cWeDf25N6OLiy5TUeE0hVuBu%2BkMxbOMuBOfXESf0lSg%2FtYxcxyJP%2B7Lfg98VwGHf9gMPKp0ckGOqUBk3q4PhPwikUWcNidxWh%2Fsc89pfus0DfLrWwlfoz%2FVKflXIPw23oBJZpnLf4t2vxQL94xGNP05lxl26waTqHTp2dqi5BR%2FtuAa%2BbQDW68WC1IX4qEeLl0wozgpiWf0VFgQ%2F7iDZ5g06FoV3YVQ1Sy8cM2AcaB7SAxsZ8gnGcXH1yow0v5ggRumjZMkfr1%2FNfsGTA0SHcW5b%2FGpA8Y8wyUdKoqLMRl&X-Amz-Signature=b4ed131789bd16d02e79b510c9fe1160b40228bd37d5cf13231808e29b53fbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

