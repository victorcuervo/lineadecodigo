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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC4GZPYQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfl2mx5eBPrKQTQrc45ZvUHIQK4TsEH7eC4h6nt6RzSAiBcrweiK3ocI1ho3UUo%2ByKyWEfejeXbC%2BCOV0I8A5flECqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGrn5dkHWwlwjSiSgKtwDGVLXsPLh6s4%2FFnnSvDhA65Nldh%2FvCDtS9HKSRpFQveeY3mPggZvMOU4x2JPLimj%2Bb%2FwkAphhDTcQ5OLfwn8rTG3WAn1T3Jx%2F6whPwr5IPOYD%2BFutDjLt96EkPAFwIJRx8aHdbUKJG%2BfCSDzpl28HwshBB6IAWOuCsk0gJ8q5GU%2BrNz%2Bkj8ELxZy46Fktmet%2BXoidbrLVkSSMdhcc5i4id6dFEeJ8WmIl%2F86ybGD3%2BEktZINrPWXyl6yeHNuld9g2kgsT42hAcMbwfi2v1GV92bQbyQF1OY3q3jZTed2fJWveyIC1mP%2FEfEshT1n2p6uow0xbaY8Q90HGiO5hdJD95fFqq9A%2BArfOCBIeGgTB5tvXl8P8XqdjB7O2u7d%2FxrFUTXKlAXJrZpp7KGN2SikcvmQvn9%2Bh5h17ZR17B7m1mm0YsEnYiGzV%2BktOFgIpdJc5boM3Rbtm2S%2BlsNC0VtGdX0LVqZRMXOu%2B%2BCSHKbq0GsPutOahRMZqjnrL2Bn%2BjWwJExgop32%2BPgYAE2YlAGCb%2FE15JGG54G%2BqhOu0mkbgtuMz%2Bcf2IqMoLe7UK5pEhfHmyDKXCNuqsa1Y%2Bdyzwj75QXmGCibaRBSzwemNkw2q%2Bv5xQb7JdptYz5ZBYT8w68bXyQY6pgGxxMwr4p4Ww0wAgtseQq93I3RM0zioJtFYM9cPDIMsEtcA7wQeqrKWjhdcXAZ8C2sH2t789ke4yu26QEKgP%2Fj65URfyKJrpqzCNgmcvaQHh3KTqigIwskSY5VyFNGmB3LOuZJh2EYTct%2FLllEDpl2PbE2o9RuKU%2B7jFYFdtEguJvom5OrlkUG3ddoFDWuYGSdyJHA5gNQahblbOuRfzvkB50TO%2FHRd&X-Amz-Signature=48e9ad98a08a7886e7964a8a6589987e0c1971b89a0a4ee0ba974cda99c5e2e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

