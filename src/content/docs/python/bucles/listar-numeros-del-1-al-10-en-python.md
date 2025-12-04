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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7X3L66S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC2Cj2sIsnNdeazQ0a1CqDALsQVQgEU4NbEB0UFvBA%2FAQIhAInfe%2FyrCjznq0aFxKE7fGSNAXQgZj7KXnZepTCuyqErKv8DCD4QABoMNjM3NDIzMTgzODA1IgypRnMN%2F3TU%2By09KSMq3APCO64EQnmXvN9bwvPyIwZCoav2e4Vi0tNBSX1Awze3mvigVeTvjJjGFngdlLXT1zhL6RpR1zmpohy0AjJzJlMutRJ1GSAhRWoRTH5%2BRODFrYth6OH8I8j5pGVliSjnzeo%2FwFIcbC99%2F9Rk7pAmiafHq8g1p3wb8HsM2QALYsVK6dN6BrCFpxsSpRFb8ncjxXF%2BpwODbRfjN1%2FKL4Tcdoh02XxmM8dJwsOaDXN2tySBJuooS0oRm5x%2F1zYeovW%2B55pu7ZXGcnwnOVgb6KkQtVNPOrDXSYih3LTmdL1nr1orjLrOTdpfX%2BEhOGOxupCqVhX4895j6eXSQTNXOg%2BG1Kq4%2FpcOPdLjSHUVLEU9ufbeN7YhYDSBaBXCVYYUZMYfR%2FuuljDpEj5w%2BISKPch%2BXLGF4gmBzikEyXI17quPloEbw9bnjoaBXaZD68TOJinPFpDh0RtlE5h1g985bKrGcWjf5F3Q%2BW3bNPaltVFivyEX5XBH%2BOmv%2B0XBsS%2Fbs0O8JeRNI39UjVskCbJ1jeZuQS9t8vX4JluXLGFTUAkp6vdsYLRlSO4Z9Mn059B9qx0DhLayKEziWEV2jVaQN6jlddeEbVXQK%2BYZUNglG2IPGAuIobQ8brnrjU2dAsrSgDDursTJBjqkAU4GJ2%2B7zDacX17SDDxXYMpNbJPvc97CA%2BHgZTbWkxvCjfYv8vAN2lUsTvhxUVArme7AxtV60H2Buq7%2FmoWS6HT1rVNoAkS0U2%2FtyrRd6nmvD1EdTcpgqDgcWVVYiJ5Kf1Mvl8lj7jC%2BfzrSpi3VBF8DCIJxMuG%2FBX6atxt%2B6XthyMP8foGnCNYXnL3WsyyIZar7Ex2VpTz3%2Bx2ig9O9FETR%2BCdQ&X-Amz-Signature=d43976732035e49b36f65a3b2469935c8d4c7f5362de47ce8fb2f3002815807a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

