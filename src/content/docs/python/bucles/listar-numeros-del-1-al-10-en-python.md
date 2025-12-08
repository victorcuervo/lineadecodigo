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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSL6XMWP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC49323hRNkVVdmhc7cbIBF1g%2BDhDKCT9Wk12e0ZILQgAiEA7WHT0EwRIdbT3hnjlgcbbwb0EvFe%2B%2BfH9SusO%2FJp%2B8AqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FlI8yR3BuFi62tNSrcA0Q7JbJ1erWbNG3pWJtwKV%2F8Hp59pTKI14wXBcgPmoxZN6Mtwr52Jli%2Bo2GS%2FtIT%2FAy4fLFfRK%2BXTBIKSbMfd0bI37DyBQc61Xy%2FT6zoUT%2Be07WULoFIUFaZZF42fBEMSWZE4knFXeC3iCFd5IlIYQJnSb8UZQb%2FXFsBoEXa39V1HvGTax%2FJLc2Hx4udW9ZkBz252xb1Uh%2Bmz%2BSISQmo1ZZVHmNK0ipBI2K7jXa89sP77YiAJjFLsDTjaqf%2BV6geKtA4L%2FEDkh60qU4bmZlhkgjHnHi600%2Bp%2Brpx2b%2B06OedL8W6zfKAwNymDKxEUiBXZB2IfxHNedWW4NgZnFRKUmPtZAHmsWsXikPiMTJD%2Bt%2FdwhzriyROjGc%2FTmtey3EMJLPl%2F1NuRU8FkCEieh2OK69uc1NXj8LyA6ltZbJg2mLVnDS3gn%2FIIDc0u2kaE5Vkw6SynD18saFDfUoOqpnARkSj5hnYjD%2BdiUPL%2B8uv464q1Xo%2FIGNrxB8xcX%2FmfBviXfyd%2F8PP3ZzxravSjnco9iquqi3acKmEt%2B2QTWu80AaDycQodaO2E9a8xRlk7Re8X%2BLEqqC5kjTr%2BcYJGWRWVFomf05dVbbj83nz4uZL0hA83bQmP8p%2BVr%2Bb4vUXMK7u2ckGOqUBuZ2Vv%2FzPyXjcKPaQ%2Bv56G8HX2CrXjamltxv6%2BqwGApfqBLJDSc1VxauU0gV6RM1SLrZm3UGTcIMNM6O97qXWIGEdVMxH519B3n5jPoUdF6GGOXpxLAvrDnKudPq8f%2FrrxkKNDbDT8vwxc2oLABHdY5Z%2B9uwZGlXvPyHq9MUMmnRpWfwbpR90tInN2NA7JD51KvKYH4JiFjkP2I81Mzi1bI9ZEuXI&X-Amz-Signature=e0a9b4d27fd4e2008a3c093f0ca89577cee42a644008c2f45ebab9b741468a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

