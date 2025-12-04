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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMZKJN7H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCbm4MQqiuDx%2F8H7KNx1ofuzus78tBhHyO6ah8fPGF2xQIgFwaLHbfnSJGqq8M5I08Sncw01R%2BLFvsA5TEJ33rOp%2BAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAYFp0%2BMLasPBOELVSrcA4u7fpUoiRDi8015DdBbdN6fFF0EJ5wHkQKo%2BItvVktL8K5pcTkiheoOjrTJdaQEa3iPHKun7AQe11kTgV%2Fi1yEyp3b7MW5LHWgsugeOQtRGrP%2FOiISxrPHRgAtL91uSyul51UhE18JAIiGTdqyNWNpEQW%2BjwyNZzVf%2FwHjtc1uCfaWwFJa0rgNZHIbnGvkzC2nV89m6zGcm9nmwGoW3zEdQnMPxiatzsVf0XmDPttaciU%2B%2FpbvuBEHGyrXEcFS%2Bdw0fJYIZihdkOrAYC3tjiwQaFkHLztEGYKZcDpv4rLgGxv4zxBCluPiQlZaxOwuh8h0ZkEcPAbxNs3GHQZOhYuc43577gkHUTsYRi8yuV0TmejV1xokSev6Zejb3bFjA9AotPoLTxDAveB2DjA7Ag%2FHrZ%2FDM62hsdTCUohaPOVpYs2K5TZ4WTvQgSInV9XuJ4%2FG49KrDMnA%2FHP5MIaRKmoKbeABbfJJtULPK1amtz5ckezZRz8QOUxguiWZLyhjhi9EzeGVV5koOXyETJHup2d5NG66Swu9UO5iDKv52WLFfjMkTGqSDO0wMW9r97GJZUsBc47v1bdvj3eKbmYg%2FGRA%2BbONVofJhelqo90xq4BH3H5E5d64Mj%2BEJkskPMI3nxckGOqUBU4mPsAOJGz2eAcoRNpschWMLsZTzxUMfCtoJT5UL%2FkEc9aj9uXovu9G9UksN0fb9A61q2Rr6CrPDyrz6PFTa30FnF%2F3rcsPE0CygBXiC5QFJLRKjKAs6hd0zMy756piQDE2mGqgTWN5v%2FLM4rEPcmO9dKzwIOnRl8T545XiOcL3zrhoFT6SebU0jIcHoKvI03LPhEAy4JuVAPQSLaCstql81zKU6&X-Amz-Signature=3acd41be09c652a286831070b189f3c33c6d5ee43429501e9ad5a491b80f83dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

