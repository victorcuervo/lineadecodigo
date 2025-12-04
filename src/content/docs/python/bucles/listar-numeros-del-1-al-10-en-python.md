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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFQACVD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDhDB%2F1WklLUI6BKN0FLnDoHsPGe8BEcEZR99Q0EpXORAiAlYY0afgXzRB%2BJ1dzzSn%2F1A4sstJGq%2FHlGwCSyY1BCGir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMwSgN6KNUPnspdegOKtwDgNLKMekkdqUEfiE53B3fCg%2Feh81Yfpv%2FH3lf5%2BLL0rnLCyJlZqFg%2B893rU5Q6b7unFPu8GXlL91d%2BA2B5Sq2S30hh85TF2qfgLJTOAxKy7himL5KXNXofOeONz94FCgNfnDUVaw3zjyzuTtkqe5pf%2B50Fcadj%2FKGPKL1tN%2BNX1F%2B9olRagcS1Y3sL49jUdk1gvbRHyIEaaIOjZI4fz4m7ScDVNp1bbhZQ%2FurCbk10Wzc1UHqKsqAbFoUQEWJABBJcxk7ZhAjMMrT36UclvPRsfoh41sgaw7du6WTVOXT2XopKn4PYM7uwEB0G%2FaMzEofz7uDb4cVODUrtQYO%2FCpIzaa%2FmTqZeTYgEqG2mmKjbhb8qQaSLw%2BffxavbA1gLMo3FvRS3GBrRcUDKwPS7kRbDnj5vAmEUhYO9EJLZOnqiO5qk2rZTRd7VxvBfJIn3qFvc68E6sFw5NmwyOSZLH0MPJlXcKF0tBnFmIrfPQpN1J%2Ba%2FMkQW2j3EesneVEDO8ZrGk54vv0uHyYh4af2eJiqVPqax6dBx531I4ZeyXZDEFFpc9L48YQW9I3IugSNoLW%2FKu7gqSWddv2f7aY48MGqJKkEKqlUgGSEmLasUmYiCa5BckH4wwiVx20sf1YwyvLDyQY6pgGZDmvAR05mTmqQdln4nFzCWFc2eeUHgPQJomhv%2BF0YL8LMSViBQogxEnxmII%2B7O%2BzKVthPoS7ncfOtq%2BsyZX18%2FqTz75Rd%2F6qxuR4rgB60FGbx0tcgcvFgTQ0ObVJOpikz1h4fX6F9pHbh1Gz26tcn08fzYzb8k5MPgmzKr16%2FU3n355BisNZ%2Fh1eK2PcZCWSVs5EGpp3ldXIfgEgVT4yWFonJZ6C0&X-Amz-Signature=95f97269a7cd1d514d81fb5414248607d7b81fd6dbb2d8337f43c1652ce3e9a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

