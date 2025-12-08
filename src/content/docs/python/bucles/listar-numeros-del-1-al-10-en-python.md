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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TMJTBSR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj%2FdDiDs3Y76NoX2cyyQv3RT3ro%2FMsssRloSfcHygpFAiA8woJ0ODhaVDCNnmbcaTFAbx%2BRI6ayblB4nD8Qsp2WGiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb92A2xOpcPxQz4i6KtwDQeIxGLLIagLvpRx7KZE5bQpoFvb1Yg8KglU%2BMITvUlE7oZ6RcDiaddhGlP6uCpt3lLHOaVgupUwpjEcaC4iMBU0Ymoaa5gBH3UQehpdVJedHDMthSOYSNKGAgoCIZx3hjhA1HLq9A1XEmToxt3cXcKo6ORZVFeMjCc8fN2B%2B8gxzX6Y3QlwBCWqRZimmvd8V%2Br1Sa3eRlC850rT8w3w65YskiQR8z9kTS1tkoFIFu0S3eE1BNo5Sj30DRPHhd93Gqp01j8MNqDo0zA87IH1vUloN3D%2FaClVlFEueOVX88TAmWh99Zb1pjM2j0R4lZJrrmksH0nm9DaQEbgnVmopbs8uJ36NqWTrQDWh1QHQNxkO74CXsgCLrq0hcArtjXhXe0q1%2F1aTjT7xGCdoQ0VCAmvbMj3DaETc1%2F8CeaAUxT0lERiv9Clb2REcsKwQmEZGBq4pj6PKBIdnH00r4zrRFZ%2Bej%2FnhaCs1rUUNdTuuuO4fDDlhpccnGAzhYo0PqXIfQUHeCuj7yvHC4Cv8rWvMt04Kty6ZzVtcZNRg8Mm8Ka5VcmRqRAgakkh5jHlqLcsz%2FoTeh0JJKjTQfcy2VZvKEp9XkJ9cUulzaMO%2B9BDK%2FEprNijGojjqsWUthEB0wqdzcyQY6pgGyq2WLB84f%2BA1df%2FKnazraL%2B4VlHurURsWw2auVM%2FjWx8KSL2lFJBTYbkSXDf%2BlWPSOJMz3YdU02AtoUv8NQY82HqQvQ%2BbNLP6KDSBN%2B4JE7o3b1ZaH5Mipe8921FFDvBm6ZWyXKCokTnaLhduVi1Jx4GiJKFHVrhYF7OGtXFT1kB2VDMkVaAyWGrGUkdknLDHQnXb7CzFldbNrrWeNI43aDT%2FMmNl&X-Amz-Signature=15a64780b3e20e24a4883f6852d74d0c55ce1f38aa3db1e4f2508e30981d9240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

