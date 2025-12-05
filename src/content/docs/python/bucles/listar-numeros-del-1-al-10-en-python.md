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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRI7GWI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnzQv6nfbPiFk3WnI%2F0PzP6zrRVwix13rXv6wVFb3j5AiEA0%2BwKGVFP6arTKyQu1lP%2Fkbn2Lhh%2BcDfG7o4G83T8f6Iq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPxvv4C6DoWMAIv2bircAxWZDKlyztXkQfXa3mXc9CkyDSjrwG%2BoKawbUI%2Bsr2JPA7llz0tvkIw11G7pcQniU3Ivs0jki3w8cE71rDW6Mpe8%2F6oumII4ecPh6jf3Nlt59xTYJED2RGLKmgPS%2B98boqufxl%2BHngZ03lWGc7I5DY1v2x08dk1fSiwiqmheGvg0oc%2BZlYI2vwRL7CijmCvUsBkdRLLFKubDWTtTFjJZ8Hf0UN2kuLFK3hCERA%2FoQ4CUW%2FkLohr7irFNCxRySJz4dHCkCuFAPXLdbCDeYhGrA1x9WfZW%2FDdB9UGnWxqME22fIR4e%2FX8ZK6cQonO%2BWBdCob3nykqVJKAfexT24yxiOxqBbMDUFwjkcXabUijCX8hMVd8JD6tWYyE0mc7pagWtMz1Fx%2FSkZWrsoUL0kIt%2BCLgKbRnGrCNTOGTlZSYeNGNPiY3okjYbph5%2F1p%2BLCOPGi9s1d6fPYt%2F0QyGr%2Bm22%2FPFyamamHoHmvMjk%2Fe%2Fl9wMakVzODGRZr8b6qm6e9q8wngUTVJTzf%2B4zacNxiTuy4zeW8MOOilVvtjIAg0ZUFFsZg9Ke951onPsqzjc4fZp9ClV2smOxQ4e65OGpEcI91lHIOoi%2F3hH814wKsjZZy9REbqyb3%2BqYieCcD%2FU4MPjHyskGOqUB9NWRwYAPEKYN5xdxOYXmNOb9herkmdNgDG9%2FDU0xkK1NSjPtvslyXfzwt3M5SaeQBhhBPq3cfqvvCWlFeAMCPtCK%2B5rpxEkK1j0zOxRg3hgE38dyo%2BAamsBGbsliIS%2BIbyFy01mxdtrI4usRpeDNH1rem6n8oQ3cU2YWoY7RbcnoidpHkpYvnkCaeyCcQPuWlzBy1ddmlGYo2WBcrmR7DGzOSwDm&X-Amz-Signature=5d8a031c8e2e9e286f414dd0d99fd1c18c862179bf40e6e2f219bed575df53c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

