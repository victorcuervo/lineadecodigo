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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIFZUOCV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmjf71Lj5iqkGfKss9rL0fm9Pb3bh%2B3K7hMEueORyBUQIgK6GsiuUNLDo3llTaM%2BUnkwgnX5OI%2F%2Bn4%2BJhqJZY7nX8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJTU68rY23TxbxS%2FdCrcA0QG%2BrSbQ77SOFhak8o4G78Tqyp6l2PA6%2FlknHQ4%2BJIRWU%2B1PHBQnQQXRoRL6%2FpkFgvg4yCHeBauDAWCvEqcgk96wS%2B11DR6kdCthoMRRSDDoN7oc%2FL3z4t3ivgGAfFlSJTY17%2FSK8kCnNCByDIxvO0dst%2FIr0Qy3yvwqPz8Mj5rGByXWuLfohlvyZMlS1OaDFsjqQL6gFGohTREqqeqtwIsixZ%2F854JGDqLZTLVknsvhQ%2FFVe8g9bRh1u5D4ZGswWtWOLzIF43PWs3TjndKALtrobgrLIp733R4eahjz5dUY4Y%2BPKAxX0E3PTEn7IDYe2d4D8tYeNl%2FsLk%2FDyE17lK9PTV%2Bca8m6G3WiIlvM9j7hmzXr8DClTYnbQxexWX%2BT0WlonW2fOhODAo8FLEvqQw1YtpHDifl%2F2d%2F8U4YcEg4vmuuEAvLEOzC2HoAjcqUyzZlf5CeXWsOJV5wYtI8ZyPeWrJ4iMb6R2r3qOcq4Vkxg63fkv%2BEWlsJUrvplV%2FujXfGw6%2Bqc3awtvsiOoSvZAbxzgLtTunLgMvBgMKk15M1Hs7FzEiJWr9iu4RZxlqzFjCDyECU%2FqXx%2BqkCaNf04ywSlsOrz25D0ucByOe1TCtjIz4KlE%2BIJpb0taa3MMDGzckGOqUBBiq5YozgVW7%2FUh7DuXc%2FQJafxcG2gxoABp6EvOWfOFYo2yxI4X7XDU9W%2FB6sOJJmkDC7CRQb5EfcZ06c%2BXDJ7n8DTRcHDv98%2FsR%2FgV7Wf30%2FFAkbsfi%2FiGkVVv5gMaB%2Bg7iJOwynvEPni7dA366vpYW5e%2BOW%2BJ6ZVPVcbKoiHO4CjlCnwIMC7CUnOF6fXUzEvTL71gMWWgC%2FdQlslpTFbDtaRGI%2F&X-Amz-Signature=3b9cadff527bb7f54b03a79c7ac04e3cb5e76c120a17b62a3e94e5ad894463cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

