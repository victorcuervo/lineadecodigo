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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7S3YREP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOQcEdvK2%2BlhLaVZIryQAJTzaxEcMBHT1CbGGSAPXisgIgDCQ%2FsAuaUiDn5re1WtoskU%2F8j67fvRJxTc8klv%2Fq1rEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPALb1VD8ZfwtbI2%2ByrcA1kmFXHrET0r6FRUO8CQehwrU6qEy%2B9rmssp6O1ckfiyVgnGqaj%2FRVBUhNbiYZ2c9Qc5QUFag3CtfUJAwrg5iENeOOgrHspkOkCIKCtEBh59bG15pL6G6UStyj0pieAX3XqB76gBuHleEE6sDzb%2FYvK3MdDRRdmN9Qe1YI2ZoQILIFs5GK%2FztOcvM6mFmUBlMqgxR54SZ8sgBbXChQWqHUTRPjs6PMqoG2b%2FoDoZ4VfwVYJtYV40i0zfBoY789js5m6rIZz20bee%2FKw9Ui1uG0anGOK8O8w7sI8eNrJsnRTAtH7os3p4XP8fbgBkmInaEmsudrWDhcJ%2BSi%2B8J%2BSBSt2%2BNWpGDhL0rQszkntI2NB8zs%2BCPTGaGRe568LBrtaJ5KgXfBQzmd7p%2BrZhrg6DmKGYcXgpuIt8wtwkj%2BJ2V5Jx9L06raaX%2B8pO1c0hK1GC1jnOMKwC02Js9RiYddEDtfw1uDScPHd0EduaOWokoFWIOx2ywc7YdGwW32Jjd2849GWZRjBBkqvJJRz00opeM2a1HzZX9OX83nykbXuVrSog4higzAwfdjFRaIfvCnhd6kMfAvrHZUY7E9wH%2F993MaYN6JWAuWfjikzJN1JRbzGjK8J2Ij1AhzyxNrRwMMStxMkGOqUBrNKdLfde%2FPusWGySSD8zv5Bfe8oeBcS%2B0%2BNQ1A5UI3g3PhH5TLN4I95cqC7gmpLEAWkYMbiWDhJ4RLeILAKCS55%2BZ3gKk%2FTgQq00B9U3O5SQ3gKYAxKj60P4U%2F8IqTYsE9uWzVVKN7wvqWtA0pyA3ZcQeinF79tI%2F3Z1R%2F12pd8b4mJgPjmVPn0ynh0w98KYyPFcHLY%2BKw39zFaGxrHM2czkiI5F&X-Amz-Signature=36fcde803d6a2eb3a13cf75d7f34517a6ad9cd6aba3bc24eb2bb72c508d3801a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

