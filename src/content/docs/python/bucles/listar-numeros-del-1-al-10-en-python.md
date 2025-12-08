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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLWYQ4B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeKNyMbvdTJf1Db2R8UJM5bRAvKU5%2B81gISFj4%2BtaTIAiADmUr3WPegc92ckuyfmX5lD8FvtLrOH%2BYjMuqH%2BijJbiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMzErdETBHhqEgDxxKtwDV9TWo70cI9lXABus1JErv27X0f0XXLrLBOB8YcmDjA3THwTeaZBcjwz003xGe%2FXhbwQ3kQ7AZT8vbJoYcLlJtz2JGz0B21%2FHIwXV3y8m%2Fq8TW6SyIA8VBHJCUgYDvsQgC89Cgz0liaQwQr4MRnuALdOmuMGkdWMfNaNZaqveeDujWojGZa%2BU2NUSe%2F3BhMZUVHnDeCxIGsmRL6orEPfwJ2bCLrfcqeUjJV%2BTpl8PL51mNj%2FW7cg0cVEr4FWngKpBXLH0VErU0FONmNG%2B5Zx5S8Vd5SmegHQBAQte3C8TfoSWLfKQkohbzIL0oZuIUAvzH0pWkp2ZuFksrJ%2FZk94315CdlnSHjgUftCvdNPuBrys1o%2BV2dGmgvTt2NzRI5T5yZeeemVtXbyYv6ovIo6ZTRg0eHen%2Bsk%2B34Hq342lygNQfebP7C4OBmg%2F3Gc0LM%2BmwlhlZ1PTCffKpR61U0HXSmRRXrEPW2z1m3lPztTIB4IqoMtBG6II6ozdBuV9i%2F%2FVX6KaTyQiV5s64h%2FxErpVYEJqPROjzfzo%2F7QMQc2Db88aMaiAhBlBc2dzOcy38tbh8TXzovKrysm79KVgRav9J7QbOuAXE1k6oL%2BIrhVXR1OSAbJ0ZA3sHz6twrgQwru7ZyQY6pgFw%2B3Zt8Xt1odsOzDZ%2FUk8BqznHMYJccu6ISUNwxDF%2BVQtnAJpfrQZezVi3uQMTryo9Li9wMeQEj3kDVzbYVccXDK1u44pphnMtqe2EowffyGVZSvAA09dWycvhK%2BBBw2JG2dCcFP7yYKp2q1C6RfSmFak4R%2FqJmWoKG%2B1%2F4IY505BT5iYxlJP6XOToYTDm%2F5rQl7pAN5LpGR5KtKVXkvlzyzGP9hR5&X-Amz-Signature=0b2bde2251a8f7b9a35d7bbb5ec8114122d5046c5668255aea0f7c61371dfca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

