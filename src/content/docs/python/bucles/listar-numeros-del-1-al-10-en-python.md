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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXKD2B5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw%2BYcLw%2FEJkFTNSLZp8T5tpWjjtzic0rKhJ61WfFvEpAiEAlLmm70VEl2KlWLhXRraf16q7rmYh536%2Fz3fujCZlKwkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEWWo7XKvoqTelOl6CrcAxUpfYN%2F44zv9vwzUvrx%2FcrEnQWfczIVylJ77Lyms6izDWWFgp%2BwcBYEVT%2Fj9krd2rCdroJAMOlbFEzIe537ibPOyIv0vRnHRkuduZ3R%2Bxv8z0KvSDC62FpuKP%2FAb3VeINBXLYaHscv27ocmX8CMMB5lO%2FZ0ZzBmys3kNECg3%2B5iC%2BR%2BIW4CicCLjlFHF75SrNyhMb8g%2FD6gdDNtfMjOXvyUgPDMCwnjKX%2BzuIn%2BtmW64UNO7iI9AlBTMnx%2BVz%2BgIBhLLeAg%2BQa0RPtpobzeKMhZg2PhKlRZ9T%2FyqUe%2Bnw2uBaZdn3C0CBt88vOAk8qnm2SdntdhORUeLuFKPPrv65D8tW6a3%2FLD30IEwr%2FicGt00xLLx7pCyrfazWcyW4YEK8a8gl2wtpWTCDkThz3vL%2FKUWeyAvYci0j3o%2B1KrY4ui4ZHBC9vNFTC8zDqSf7RKBr9Q2hceAibaFOLoLwC4R776nKz6O3X7GemPvpP3Fg7XOoTf3tl0pdh4TPzNa2ptWnLIBNdnfRqp7Aq6csyD%2F9pIgLPkR8Na%2Bs9Syvds33z58tjKFM9bFTJWx6qQJvIA1vGjz6TEl%2FW0rYlvSTzR7NbE4AAXHGEUG4%2FnTxJBaCwItI%2BIBNNu51FHoF33MNTT0skGOqUBMA9KlHB%2FefOGe96KTPBNu4XEZGix45GiMD83iYNmJBwZIdpnRrJGn7B7zW9e%2B1vovodbsOO7kXPEkTOJuUMlBoZqOQg4BArqmNRursgbUHHSt8r8fbdN%2FNZjvQl%2BAqGU2Oiwf0j8cDSTRNIsmQ9pwu8CBW2U5oQd8TxE9%2Fsp3GOP2qyr1NS%2FFUJNmZMuAan%2BwGeM2yHm2XW%2FUvtBI1LTZ6Icmmsu&X-Amz-Signature=505e329df52e5aca9eaa83cf74f19c5a81b401e83d5d736e152c294c71b0f161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

