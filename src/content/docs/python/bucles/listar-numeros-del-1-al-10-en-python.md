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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KVRVGEX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgJ1BtgxDZ%2FRvoZYNFyO9AXU7n3CzOkgT1msUjDIU%2BvAIhAPbMXvVSp48BG%2B1oAB45BdNj201Mf1pvDU6b5q0vV%2BQ5Kv8DCFsQABoMNjM3NDIzMTgzODA1IgwSvcazznoX7JQLVF4q3AP%2BalYRZi7XmBm8LnFnML3%2FvEiW3EucODd25Y9EzeOByRFcAUQaUfKK5LsCX6msNbyHalhYHkXG%2FFAS3lOgxSnpSyrpluFJqHzEIlOgtP2wDg8PaYeEE%2Fs6f1XO3FhJut%2FJnLU3bLnRPJgDKFusYua5pyGzhTWC0%2F3sAjFmoTfgGH0tKJREGQ3iDtliFnK%2BLHJv%2F0putmCMX%2FegsSYTTGDvGnJSIClOhFxDZF865r7VCe1u6aZnKkzwGZNI8Z3I2CAydVPymbWVuXDW7dZfBK%2Fb4YbazJOwYHgKYZhzvYvHBz2HeouYu7cSKXvS8kMtfvCKxtoViQu9DuMx9AM9Ck9UuimdREsxLeUI%2FbTRIZuZ6s6vBOU4AgSeviv15G9RoslTzF5Z35jeFXFC1%2FkJnzKEdk%2Biyk%2B1hdxa5YYk%2BWASdxK7UKGW09SfQfIavAvn8pfW0sHQnpuTjRniKAKNgGmyWgL8GQy1dhC32%2FrITQMbRaLasEt1rCGGMdmAJAtKo5HpC5zBn7GpPTPO1dGbySkw8%2F9%2BincFmpTY4w5emZfRloMrm%2F85uG6Snbn%2Fp4xIanjK9BCjk0VBLWzKIzMOaQrbW2VaQrpv2%2Fd5pqLNB9fbIh8RsyAsiymOl%2BfFhDDM1MrJBjqkAS%2F0x5g22vvDiNZYzmzj4Yk6LZeIrNe6YsYIm1HzgRfXCR%2FRTZ1stfibUjtxzRH68d%2BKPGTPjtJm4fD1ljK2RoAUKRwbtQ438Kpf98eI0XAdN3wS3Tmw6k%2B%2BhalmfMNa%2F8spkop2eHdy1jLiTGwrAbuFjXnkfwheIW1PDXYPLniwOy4hzXnx3%2BwOFnIA%2BiwdXHWVcu1ZvgxOS2h7l5uAaeMx2Nmw&X-Amz-Signature=742deb495040e03cad64e7de922924f5d7ff42d451528bef502261c74f566352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

