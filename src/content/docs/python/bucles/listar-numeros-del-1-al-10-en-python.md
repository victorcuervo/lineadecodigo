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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6KG7EL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfbvJTpHqqPfQ7iPRylyJvwf7wZoZ7oEaM5kjATw4GVAIhAPpR7ZngHSGwaqBtbHARE%2Fn%2Fj6zZU17a2AmrD4f9IukMKv8DCHUQABoMNjM3NDIzMTgzODA1Igx%2B%2F3aoTvyGd38Sehkq3AMGF9pviGHh2YRLsUaKwkom6D0w8agVIlE7vieepe6RHcbdoo7lsRa%2FqX2T5%2B52caooK%2Fzw1TxYeFpv%2BT%2B7G8WRnmCtfRMy4S3ZgvpRdl3WQ%2FAtgGzdS1EvTsN5Q38ZLfENfWHQDqLO1%2BpUV13Wc5SoK16Uk5tMuOX%2BD1biV0UDdeGlZQkdxyYpgmXrFXUBJqfQlA9qMjQLVg1zDUMYvfANH1aJW6xbcrWnM1V1FyDGCEuMK6bNrcRkVlY9sc7OEJnje32xSzk8FwipyQBEKU1Q5%2FZ8iwl0ZsOvlf10RvolcH%2Fmj9GUlybdyaanQxX18ymD4yahw5ysK3YQCG8d876a9CjZHcy7VCcsNiTXcPc5WAWLgfdWtxeb9ceAsZMQhpqobnE9NB%2BOEfuTXOVHBkngkQQAvSmmxeDOEK%2F7kXDsgvCz8IoWXxGAddvOwMmGSM5kGH03sBdCW0BcoY0Jv3U6AAcGzHksoEZdUuQuOIwn3FVrEpolhvK7dLaWnHXNIGbex1rdl33h6Gv%2B0%2BHwXgdy2xBNyc63Sl0e1qYP73hC7kwcaycfwubHAUp0xaj1WpDUoWyelS7OMafhtj5Kp%2FZKpwgRGnTuCtdocsGlG6BCeDCGY59uMgQYO8Wi%2BjDDptDJBjqkAXe%2BqZnvdp7rbzMmJnE3hswzPtZcHlv69DVErMDjjyl7zMg2oAoI4YEN2UpDU%2B5tGh%2Fs1e1y4iDqcENay%2BRobyWQ8h%2FG4hrWFi4kz99dTt%2Fvdx3vZOE%2BUQLODvKQq8WAcOJuJ%2BLhjGxFidzvQTdbGAqZPV%2FBCh1pfoEIwOb6rsSk2C%2F1dABBQamvW5s3AarKv1yMJ%2F6qBeQll2Uz9nyWK8MMma%2BT&X-Amz-Signature=3a84b6d4148100fcf09940015b8e15b3a943e5d16b704691c6f3875751910e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

