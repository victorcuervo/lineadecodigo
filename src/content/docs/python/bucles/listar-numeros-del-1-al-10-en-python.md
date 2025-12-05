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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3GH5KIF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNcZrfqwOhJNQUCErV3tD%2FwND34LavlQzWxPzhqXvdGAiEA00RXHNEQ%2BFBaVRpcvgfvxTmePoOV4IZIAFywlUuLcDIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDoKm21EHoSfey%2FBRyrcA4ai6rThKbIO7MwC%2FLDR49%2BZ1I7QtmhiXr9nBQGtV8faZ6%2BzcyigD%2Ba8JJTUslpclp96GhcLQYanSMtIXBDAVcQhrFIar3%2F50di1MID4m33%2FCKPCJ97WbMvcEQl%2B%2BgV1CFTySWJCyJhqz3HZ%2FNfuxMdPrnEawySz9TzQomyNSXT2AY7%2Bkkin%2BozoZrBw%2FYRScuwrWcbr5qSfvdrxczd2npA02vtEwcfohKBXkvddFA%2F8UHUZwAUZlx7JLMRw3zY9Iv6OLCCXl4sD1ljKIgELrrtg1MT52nYyCSnG9prQXUs%2FsNgJrq%2BK1hKQcyKKKnk8H6Dj27AI4g66fyibVkXdWv4ZBLZrfvBOPPSJGdGL9cuL5pivqSLLQe21zyf0XSlgzfZB2jFDrkeB2onkQJvskIDldhvfKkmjKxn3X40zy%2BPcerseXOLz92KGF4g5JvqT7oJm6VvVVh12vh0uhe9n%2FTiLJyM9D%2FJnIOVl20X5YZGbsmAHX6vSPOznGGkJs%2Fykbira8ljVc%2BEUtsfFPTT9l%2B43VQk92ItGMp%2FcwvC%2B8yWqB6%2FztoVdaelQDbwrdGTJM7nn0ax%2BzjEZpfsICddYfNUaSwxupya%2Fuul%2FMu7MqxUAi7xm%2FraaKvq687iDMO%2BMyMkGOqUBIukR%2BdJuIF5%2FEhOwZWDosYU%2FpW3p9Pp%2F6KAa%2Bp2L8HT6KFNMeBn%2BQU6cXRwTp8WHfyk2vlJMCju4VxIKLkD%2FPL6Sk%2BuFiLo9aPkMZv7ZLwr9kJ1AlQhuPOK%2F7JOKIihWBuiJk8RzIM%2FpXuGVVJoU95jBJQ3vZsNhVCN4U3OzWmavpbMEYq9XmDm2aK3R8cwXxMeIU1o1wsSrsZ9OI99mRFiQJJ9J&X-Amz-Signature=80f50d8919310ce4d831ba34172698ace85d6c8ed12059d8b99fa1ff57cc9be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

