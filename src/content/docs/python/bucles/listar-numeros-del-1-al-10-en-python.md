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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFUYIOI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7wA163sXUHvJOxTmPDNvTxqWthmorqRhUsrZ6HABYcAiAaUTHM%2Funjx2EewOO3BmHW3g7F8MUXUU%2F0ptL0MkWEJiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOI4zH6l01gQCNEuwKtwDdvCB5z1ak8NzCjzx%2BqZUqMy6x%2B3sh4fBFeMSGSvQIl%2FXM2UmPIiak6b%2FlLJArFSyFBbySkbXfyrpW0b22henkUJ9Y9ikXF3sAdBSEXHSpjtUXx4XTLB4nNrVTwaa4i2Cvbpm4UDXUxDhCIntgrZVpN4kD7DTOxr3244%2FifMMSp%2F6Qs8Jlnc9RvnrVuaZ0lIzCYW8GAVCJv9wdPBa09RQfD%2FWDU7SpZY4LOEguQwCERu6NgCw4BibahsND6DkI7nwqwEC8H97928694ggtP9wMrtO1j%2Fa2r8CLlZCcki3ustBOp8m2OkIFymqsO3Kq%2BPUAOszD7RJ5Ux4auteJw%2FirfdWwCNmLA5FB%2BRW2GbYn1IvqW6g7oDnkIkhpMse3P7BSJGpF6zhV9luZXTJXOPsKMzuBnShyXBm4IrEXC9teuBaa3q1ffg6PritkcS7OYnpaiR3akdn3sTSilhxTMwGRtt66tP%2FVkiQ27m4HNQP%2BKVIoytU9ARjc6LA2wNbg%2B5US%2BNs00cfsCYXPF9%2Bv4vN7paE80a3llZsuz1oacc9Hpj2h2hX%2F%2FBwOfINgbpwjMOrBe87aGgL59%2BN8WEGTRMJ29pR%2BEnQTOCBGP9IRZ%2FvE9CSJLuj3Z8J9%2FDxSfswvJrVyQY6pgFtQVIJWdCWG8kxWFBjBOQxOxtTZTeYHN4rnK1qvuPVsyMQ2v7Q5fRz0y2a6U4wGRSESQhUDLYJNEX3wrJnRrCNyra0kqTKfJmsLAEqXLFp%2F1U2nozyAxIer7S402S%2BEUOBtg1LAb9I2p%2BYd1maTdcVklYAtoGBAULEKu8%2BxwCGaABB7h0z5aT%2F6EKe01fY4%2Bm4vdrZJkS28PbkgXWV3u4BrrsFXP%2Fg&X-Amz-Signature=75b0ad9b8e30700fad945dedd816f8be6e9df9acf916c1fbc2d0192e9fe29259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

