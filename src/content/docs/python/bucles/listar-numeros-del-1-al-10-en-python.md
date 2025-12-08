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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF2FIZZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4owxf%2FReOhR74vhaDCBC%2Bf2rKyVmPnPyJFhiu%2By69uwIhAOz9UqOx3QRJn5%2BZBtIAPtpxPkAAWvhob6TEgexk9TFmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwyVsI%2B3NT5JrHxf0q3ANblASIbxG%2B%2FN9OK4ZVMmE4dpT%2B27%2FDJeeqZMOec9HL4TcN5hnFaLBU%2F7l109fdUmt6HRd1zt8wQPjTv7t9Q81OeDArKe3UUnoqLefb1m3dpDMzF5fcbH5Slnblv8mS6Tx5%2FOqoHTQ5NCGP08xXfsZ6iAFiSPEZLeVjge0VCZKl3BOKWMUgEcGVSKWcUVcELBcpkM2FvP1YQ8FEf6xlWU5NDzCXaq0MRviyD2R1Z5rhEOO2QrRph%2FnN6CAiUyxe9J03imP5v3UU7XHiTTPf0%2BiDdFJU7%2Bso1xdwBBIYajrECMNPtQ1uflHEuEN2MNHFoy1%2FMB76NnR7ihyNI4IsjF6zzg1rL6NQfTJYsFoPlbYgKiXOrqp14qXwIVfLljlaXwy80l7PCNeGikDIQHr%2BP0A9IVzyvRgKJhI7tH0hTmuws3XjaQmaxJU44aMuMlZO7gDztntiNxQWVqV0FKi2YkqZSjjR1I17fE%2BTmoXUL2l4hs9%2Fk8XGz%2BBdQjPp0DbMwtLOdI2%2BDmhxIH9ich46d0znL9ftdHkuQbHCh9jY4WZ8aUFZhkLrKDLbM0xE6b303EAT%2FJvWFAcvEJ6HY5txIvQGePCRfbbuyKlhRa2xoktbuzW47XxOAZJlOwZuKjCh7tnJBjqkAUyOwGb0XReaV6Qg6TDJ0CHOMZrVhFPs7rDQ%2Bkd02bu3U1%2FZidDElXoUZtojuHXijAEQN1rAoD5%2BX5iohmTzJ5zDTbas3O1xvhYImoBYYiDd0G2HfTjo%2F1k42SjARa1OB%2BX4UdN6kcdRUPSkuMn4TO6FZYM0lTnepIt3U3iBKdO2FIZTAT%2BxE6rFg446DAoMD%2BeF6vWT%2FLX3BYpIPQ2abic2lViS&X-Amz-Signature=a3376a08de055a3e1ecc859b2f9ee2ff621c60bc394807159d79b8c26c52dc12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

