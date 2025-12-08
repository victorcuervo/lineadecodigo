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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RUM4ZXY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpq4NfuN3c%2FE3uPKZG82t2RPMS4s2cCogtREuamZegUgIhAO3gUyvS8zr1K5hfwXH%2BHkGpISggRerwkGM9IhuZT1eaKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw33SRYTe9G2eqjRcAq3APZciXro6nmarorwhatoedYHAMUmM7Y1YuaYwzmWdwX%2BqA7SpK0MfVGmAJ7hdhz7ISQnHkxdKn%2B9cq9aWyhbkhETuiJDruOsPBp40OPZ8XzGiUEke8kkSz%2Fm1ppM970OkaaQ7Jj42ccoJ4neNyNUw5mVuoqbYXvmhesUezbxrIBJOicoALQZtdd7RbsrtansFcpEjF7V33PGCaMpbko0ydXYNLmjRwfvq%2F7RTKHFx4UcuAdxG8asDco6YiL9e7DUfugD%2BH23MlvL58s6MAEYf3TV50wk%2FNmTEtmM4BfAOb4g4RFgj%2BNK9NMkQXiiSJlNyqaEbElsSH13%2FzFkEdul6%2FonPxJuJPF5NrLUYSXaKFAD2bw25yYO87Qm%2FU0zX00%2BuaDBAzkK4TZvdkBzQdWie0XTqYGy4bgiHMB%2FgC9EGC2m7tn8vKWZrShvccZ9niypppN0XEndVJ6R26hKzpRqaNqNkLQ7hvOu7LJC1HciokL9eV6VTgkih5iWrB69lkPN2nGwQnXAm4FU6%2Fz4lnRJUa%2FFYU4bM3l2mdPPpqTv%2FWskHEsJuAaQ5PSeZks1lJHDELnrVwx1ibMBkCn9qDw3jXF7C1D9CwTY9FN9Srz6YVGm0IoRanCRwB05shkoDDfw9vJBjqkAe5Uj8gnEMs5aOXglVTu7OJHmxrTCT0pTUUQgvOq7U3lqamTaZkx5bJYu8XKzYx%2FmBMzoYbRbM4ZE0JAk7VRe6AN%2BXZwQd5TNC726TZN1iewrN0GLPDlObpxDdvtGSsMMpruVEI7yH3rFQQ8%2BJWeYKGS9rHqwpty0uTzxxoTxFkvbjQwFEKdGNJVEl6B%2FLUHYtYSCU8fb7hILROOBMjM4IG3FSCj&X-Amz-Signature=5ab48c6087a7f657111f2746e22e5fdbcef2cef4d2e9944fbc6f1ea0b68199ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

