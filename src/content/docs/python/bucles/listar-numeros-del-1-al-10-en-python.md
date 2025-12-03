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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHWNCT5E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCID44OPrfaeY3zzgof9GjHuhaCyjkq9wLlYDhmfNyJwtyAiEA%2FjWYQFYeibfDyCvkpgDmbBmPIfhJ1t6mSWuGs5C3H3oq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNUpdHiM6JduJ8IqkyrcA8YIT7Fy7CFS01Jb5B3bo2jC1pP1oqhWLUD5dVsj1dekWfDhcZ3izzBuHwDjLtpF%2Fkh45dRg5lcDlpX3cA5SW%2Bk4ZjDD4khRPdQaifJ5qF5OMlFVQWg0pEyBfC9z0pV96w8ZjCCluBwz%2BGS23Lwq%2BrN6zAPVs%2B2xIKwFuhWviPoBfWZcTml6iBtO%2F10I47vtogpRmxM2HYjYBg3D85PcHbNpAn%2FZ8dib9Ij4sXd%2FRsKcXd87rJC%2BYr9nR3NsQJuvixbIEWXCcfXGbqsQ0Kwk2CN0aTYmvmicG%2F6HvdMCKR6oiCOuZY0oOpiJUPpgsNguDQ%2FCWjlV7pt1Vgu83S5WtDzVJM97DRryVbLBiCXZ73aaJflONLUDZjJ%2FMLy7wvLiTVJZvI87cu1AkjJcnvmDTU%2B%2FLhuHAFOaz%2Balwb%2FkEVAtT3cI21B%2BfwcTrnx%2FYuM6u4ssEndKx%2BIN7fbdCjuDtl5B4huwLxXL%2F%2Bs2u2Q5BjmtoNRhoM29FTLriLcZOji78TN1w7kteDfNYXushvusxk6Muy%2FOm85ytGE8zJP%2FuiOSBP4qWZ7ZsQsq9AZPmx6Kf%2FoBWtTNgj%2BEALEkCRqhVO7%2FYHHExLKklz7Cv1pW%2B5AcDO4OsHlBJ0rC2xzRMIvdwskGOqUBHdMKKBlfMNck1opLFd86C5fqW590JiP%2FqgLT0EvkSeVJoXlB2QvskjZtibEsnbMXEYynVQU6JbozU39fhp%2FAYvwWKSa71NakQvZqJjoOWGFYvyzE94%2FpZEAlsa2EzqcKgzHXHzWh3MP8u%2BDkcSBPYsTcMHBGNIldtslgya8Kdxt%2F7bR%2B6EG%2B%2BhPjgPO7J%2F5Z6xD0HY1X%2FI6evElzcokfnpwPPoAQ&X-Amz-Signature=bf58fee275b849173e99ea221df4c6069aaac62606549daa577fd3a999329399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

