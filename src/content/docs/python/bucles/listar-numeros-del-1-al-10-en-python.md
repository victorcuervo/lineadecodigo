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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55R7SWF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsneziEh7l%2B0o1VNeY0Mo%2BznhxaVv0rzk8rzleRYOAhAIhAMxj7hdkBihbEC2iY7Tv9EApMQvTpyrCQ6UfN%2BUiViWiKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBXh4Ube%2FRq1%2BWYV4q3AOF%2FlkDST9UVhS9x43yH4LipaGPmhZkGpPyKzweLtQZSqxBDjBs6Qql0rnGLMej%2FF63WkTnOsH5Gi1YxayDutmgVvINQ6p%2FiLB76Vv491jrcd9Qj21u1qbWAxjNHtNr6AR9hsKyrbhfWJ%2F6jpHyG8EQ118v4KrawD25e5E2i7Efj2fUyo0d%2BSgU4W4GBGyPgLO5D66Eu1MdupTXfvsn036IZLy8YBl15FXxHGOc3zX2Di4lu9%2Fu7qDStCfqYswcoT%2BQf7h03uLu%2BEo%2FgJSGXk81WRygHHrt4DvRO13JsebTa6%2BK1K63eElB2eRwE7kWI7ku%2BZ5Wcp8leVTlgtdL2y2GlUKMNYo%2BMvsBwNAyDmP2ETmzn4kIdrLEwn5NtPSb2bxW1IJLX1AxHtMWpsQSd%2FuRf5onSE3vHT9Qx%2BOMogM4Ac2Crt27996i6QVWhiu39B%2BVBretRDxPBKG4DF9MChyeQ4wgiXmDJGrr49zV8NjRYVHf9%2B93pCJTf4FTMnIVFyWSku4wG4zRHT2bGpUwMR2HIunq%2FfIJdt21t60id4c333GPGIokfzfkP5cCwb3qe280zjA%2BijG8FvGjmJFBnAbsj%2FjvsiH9iyxU2mklXU9ge4b5jB%2Bx7Ko9QucHsTDg%2FdLJBjqkAaxtawvPKMxPvvZHQTFPuamWMqCNmDG5EfvF5HhiP1I4nccbK1K7mL62e%2F0%2FB2aHLSfwWWm8US8l6HGbjLKPfAHgRq2CAv13NpI6dXydmJpmjbuCow0hTXLvjS61qAv%2F3P%2F1MibrQ%2B2Usq4X8m4YE7Gz40gvK35sUrZAoHndh2ogB%2FabxSIr1vHMt0V%2FMY9Cdi7Kyi1wtGrVdH%2BKlQDbBHMEnrRw&X-Amz-Signature=128e419c0d467deb29cba52697f57199c62812e144e3c9258aafa55cc6b61ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

