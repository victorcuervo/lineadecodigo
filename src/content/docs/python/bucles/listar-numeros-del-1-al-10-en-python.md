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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ22NA7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDUZPFSeMb4%2FyFaw9FLf5hrbeJdF7mExelvnGX1JWI8VwIgLDfk%2F7Q6DbRQ3z1S8lc4mFT7u9gw84tQ5GA61wxCtl8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNlK6j1Qxh%2FG3UzcpyrcAwivCxw7DsuBnSeNIGCcDy1L%2BDxDV5k5DwA555QqfkpM%2FvoKbBHPmzJDf7Xic7Yzb4w6KM1LftWsR8v9QkNe43QimiMfklLn2RhKgP50U251HqUMgYGiKTzPLDA%2BZc7%2Bkb1LAlhO10r9jrK6nPxLMUEEgQlmtMIxbhrLSArOUu3reH9bX1i6%2FvrXuVzYRhiTf26K%2Fb%2FwHTnqFUrjTocjsvNFJa%2B%2BDdrIEE8nLypQSx12K%2FnVszzF4P431o9KBYfHOvMHKDX0u%2B6fUURFpVPDtTt0DSpIbvNj2kdw9UyEp3z%2FEKjZXS9epcPjU3hIUB6M5%2Fh7MZ2YhulXrWSfDcNxpSvMHPUvzfYIGkyhtAZU7DJnJRKfD31Mti0Seqv66JIcibTh6HNBKSvoKTwPW2qHWPvj0PS4VnK3TUEx7m786MAaET%2BUV%2BBuMcwy9qaGxpBJpteNfJ8QGFtTZ7x87xSLlt9lWkoxUR8wo44z9viQKnaYb9bdyCCas%2Bs6gjw4hDsSZP05JyR9DqpbFQifnQOLnsnkVZCCzya6Ghsnh8Nr%2FgsaLbWUQAr6%2BrA%2B8cgCnYjrDQhkoFmauvUoDJ%2FWcCusH8WyOqoHRlhr4Et8gih7k%2BTvQb1uBRnBixOe0nRCMOz3wskGOqUBQ2j4a%2BKlWbB%2BTVwUJ8EbMRBaRXPA62%2BoCfTTPVZgOpw13BDDLwF%2B1yegGxXdxScB0UBWSKXddSpvQahLwL4eFYMBRP8yLoRt5IspQnRn5puTs61st6CgVQdD6wXSlzgN4T5PsEE2zM8A%2B2NgtZ6l6w5RdLqBfW7V5MCmesdO6JCLRHmoswDBvfcz0ktViFOGO98rHw4wxLYOZK%2B34s62EHZtbGLg&X-Amz-Signature=2295ed1e978e0c0304cba14c69fdbe88e173380e65f1c4af5c91e01ec46a231d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

