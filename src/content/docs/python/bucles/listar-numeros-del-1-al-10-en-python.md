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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672FK4OOV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCgOMvi4mLwenz7qR30wW2Y5HOV%2BmIGQlgGQSw97c53AiEAwn9mXi%2Bvc%2FZyqZ%2F7fdrLjEU2AHIDZGR8Cl%2FvdcpzFCcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFmri5vvg8EeCaOQUSrcA9gnEnnWLSp84vqu%2F5Mvg%2F0IU4YTrIn3NMoJ2JPwKqa5e%2Bl5kyTeIWUDfcQPFQzj%2B%2B12teQb76qQtPbuzX0RC%2Fcy%2Bxj8jXdxKscJGHUX3HWh2tx1KWq6bMTUtdUGSQ7%2FoYDcsy0K5YG%2BpDNGVyfhFV4J8YGQRieiDcaZgZFggHFEoewncuOf6T1%2B44cZ4NEUf522SSa2vniS2%2Bgq7EKaDuvSWrdcyFdbUFl0A6BFBCjFadqqazhDr8n6eXXyakb9g1XQEVhQBeiPt3nwQLiIuv5T%2B%2FmiYvEYtxpLOrPn8MMnb9S7T%2FAl6vBNbrxMldmRPhMek8eloWq3pVP3F%2Featiwg0Hfp5na4k79CP%2FlSLauE%2FtOs1JnTiLqoUawch8n8YIN3NjDJfLbK%2FGm4ZDuvJMuKQhKKw2rjmVIGvHxFPbnLZh4NpPOuIKacXDkRwgI8%2BPI%2BfkSbYcGzBfWKdgPs5w5woP6CXIplovkwYC6w3XLBXKm3RcKep6%2FLfm7idxwAfq3B6oZKJtO4uBJQOXlDiKYmVm8Da1lYl0C9ODHQmsn3%2FumcsBx%2BP0D9K6eCUa7SE8R0snDLTaw%2FQPK9huCh9iPNH5SV8TdZkz3eav%2FEiA8pFYLLW8I5Cad%2B99RQMICMyMkGOqUBg0%2BBPmyCe8cS1ecj1H33iwk3mnieJC2CcjoWXhI%2FDvB%2FoukmwrTDUAz%2FnwLjuH8oXOIo1e4GwqUBo92y%2F4dNEYo0cgUMsoU84ehnDWpsb17uBon7BcWIgES%2BOk7IAQIM8fbBEysJ39iOF8pC4jLLnHgQGGUSAcC7%2BWsYlp0vDi20yITlVsjXU9mUUX2ixeyDLQ67J7bVzczdMwHZE2jXkQXMBmyd&X-Amz-Signature=2d4037ebd214eb7c7145b49d00c32e86a4bc7167b4f2705272f33a55fbea6127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

