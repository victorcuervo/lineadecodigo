---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4OTLGFF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCyl44JfvwCJ9m3IDbR0ZZHV1kYuGHqTi%2B0rnTR74DbSAIhAMLpppMa9SuWu73jp9FrCOgT6DWzsf55ZPFTVlbJ1L7BKv8DCDcQABoMNjM3NDIzMTgzODA1IgzwcE5iXfSxiDSIhUYq3AOTUghYfbrxwtdcLYh5cAeEwgFYHw%2F8jUdmVMVu%2F6VFwhZ702LF9gG56s1TcSI4Z%2B0G4QnEDMI49wRDcSIHFDUy6AcwYnrrVRrudkzr3c5AhCYgpMrAiPIx%2BvULB5Xq8cViDKb%2FDDEfMOo5kD81qNG0%2FMRGJSjAkzpcNoGY%2BuMnp1VznNNNu1MPhC5q3o5MLRVqlB2zW%2FbrUhkSgzrMt8%2BTcpi7NQyKcCugN05KsZYornfpaz0G6sK0O3Blk7tOKrZ%2BvdjVV9IZYyj8slMW9O%2Fg5mzgz9HpPaqUm3jhc2qvXX6or1HNbU%2FcKyZubiDEMI%2BxeQNVq2XTK1JLAxdafuLzE5FJgngYWgatE6l1WbGhOTui1wOurvs%2BbkWkQt8uqepDtkN9n6FtMneau8TVhhUXdmBEksRph1VDoa5276Npgh5n47Oja1tJDf62g%2F6HU4iEib2rF7yr4UnEatJiRJyOXRe3OPOzagt7UyUEJpRv7F3Jp9r0IWMjjBsCBD6uLpWrvGb6Z1LDPSaCZhV7OiX169d5prb0VQCp789pjUKOlNDmSNKjsqdtad6YZ3TYMsA8IMBVcz89lmRzNXhZw%2BmkbTUvCHQJcctjd82Yk9W8ih57OCCHm%2B2RInURljDr3MLJBjqkARGPvlNOY4r6sOI5QQWlsX6WxEOqr4fTufcgTl78PJ6ImIORqCpd74jJs8pA3neS%2FUHlU%2FGxoseoXerL1JDHLh%2FQ2jzYSvlIfCUDluYrG3X2AnoeYFHN32XWx%2BVHPzGmedgSLUDxeort3qOqmWIY%2Fd%2Bb1bkTx8Pxs4F79RW5gCylS5KFpHFcaIDv6m94BEOCiMch2PZqiBSB31QkVF9G6s0uCWQ2&X-Amz-Signature=38f1d7821f83106aa50c21f167d1acf7ebbab98403b2404d25fa235b079da3e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

