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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MPLCDA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkaUj9R7d5V0wj7NyTQob%2Be1GhsYnm5nejtENL3MRL2AIgBx%2BoeKjGEn%2BDow%2Fl%2FZ6H1mP6VKOd%2FM0m6TEg8KM5rZgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE25roKwOsxPtjS1BSrcA6K18g5rauD%2F2QZ8m3QS1JDE5YjX9quF3DHOFB8M7zrznzhRCAT%2F1jPPB65AwYIT1pCUUPzAre%2BD2zC792UJ35Ihe9lgYFKALikbERVE8oyR1%2F2bkaZUpsSZpNwZmVdtsj1EsD9GMYLYzrq7OY35sNw9cbSvjRpxbl9qs64EMcmpJ97wx2Fp23n3zIo3H7E0TWtL6uAQmShNjPi5Luixfvp7TpJq88ePwA1XDCcUT5oA4J93RKPHMTSRGctEKCfG64e%2B9ELik4Zri7PNJN%2BYcttZYb40u3tabFQDtfjybAxGAR4aUmUfg8pTDi2Pg38OIkrEhoUJJdj%2FD5D8nI76IQ8cp6tg6Zr5XEZXSCrevu4NGNM4OC4ILWh2hkQJbgAWMM1TnOTZNnbnKjC15ADSrz6vnbP%2FDaEgxKu%2FhdwmYnl3V0M%2BkBiN35y6emw9PNrPqzykkuArx4%2F4lD%2BDI7JxK%2BUKha9BU4j4fKuE8OSD4ztwY9FOMvahSKeVkaAbUv6ZRYe76wViPoGB0%2FQeAdjywmMAfuGvFEtP1fWPaFvd4VAIBDA%2BPwvxn2zmgxe3djvRLUfkiMIoO47R%2FS6WzpQdAIol4xbgCaDwJ1%2BuOy80kf4T2dzoJkAOfrqhOD5WMLfT0skGOqUBm63MpnKEj57YdWF9WcCwW064Vs7%2Fk64tZOFIP%2F5qc58%2Fr3VOjSFz0kRm0xC28WTJ1S%2Ft3%2FNwySrhcPRq69SOqkkgfWzQWd99nkTwkF7knp%2BkQsIXskwkjS95fdS9Ztdx6EGM%2BkUEuET6YaFAH0kODvx1BoxQnPlLl1xpz7%2FRcWfWdfgov3EOiMm8pDZBL6YBF5ejK0MbTe14%2BOm%2FDAYwVLW%2FfiKY&X-Amz-Signature=5b06de3f29a6b9f00500bfc56b2ec94650adb0d3acba430da368a664ac7656aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

