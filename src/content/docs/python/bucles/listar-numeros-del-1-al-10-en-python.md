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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4BM35I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAwypz0UqklKAm%2F9tVOUTkRYjwuhRI1pyRlQsdMk1RjaAiEA9RSND8c87biqEUItYqEkrkkKVFho3xYYO0mZWxPUFxUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBZ1zxYhZ9u6Mb2TiCrcAxNsRtoTqMmGFpTFkbpV4uoz2LuJLgXNRLVqd2m17pLciku8600vrq6aun2YcfIlIE%2FdwEOApMnYgqeTgAiYVUJcaG2aQvbjolA2NGKRd5tipmGUHVM1R5piHbzzrtTrNeuiIbmPasZs85smrv91CuAl86bxcaZ6QAUqU%2BMYSMz8rTwIOfZekSiZ5ENGZVLgWwzR1KyV7NIU1U7PnHlKwKUttRjGVRv%2BaA9Q1mGADR3MgE5KWoJ0cFHDklsm3BWWIoromCmhF1qskLs4kb9K%2BV4JBgGiWoKIIX8Mq%2BQii6ouZZZz13aBPoi6oNJak13beCmue%2FCw4xCaakkVqvmXzMS5J2FQdZYeG6vtp%2Bmh6dzOFmmWcwQsxndr59FY65pAgovkvimhpAxi1MeydPESit29px3ugE%2B%2BMqlGs%2BehVhhYZ%2BPMS7R5uum4HYp6VSjVtPTpM46NJEJ426bYc95kpxXSiXHW%2BiN2zBb6gVBf4COIErPV4VtRG2vbJN7k2ZfYqus4PWZ%2FO%2Bo3RMlN03s30zycYOSUF8%2Br1po14uZKVAUV4%2BGFd4RPRNJUj9aWE5Xx7HwIYJVSoN9tsi%2FFalE86n52e2XYfChlDbzBRGXe934MvNuqmHuqCy8OGuGyMMf3wskGOqUBm6bBBhX8a00dffUbE0x%2FUclfyhvDpTfd8roQOgWNcELIxEq3%2BhCxcukacWXL1H8q4So2ICIdnNVpDg58z48RBlyReEW%2B5n9knuJEg9%2FUu%2F4fTHuA9JUWsBjueGDIC77Ougkl5VMm7L6lGSNyOOFfKZklx%2FrPX7%2B06dD4RnfC%2BdZFrDAuKMWGHT3DSRBHXhziLWw%2BwQZJtZmEeZL33F4niCdBizRg&X-Amz-Signature=5ddce120d541b78b552c818aef4e47c8e3059f5a2baf4bc539a9db3346861f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

