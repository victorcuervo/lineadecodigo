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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TA6NOXO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbFrtJ2KjhHGq%2BmKfaHurYbiCnZsOIcnpGCtIe7k%2F6vAiEAsmBlxG4vh%2FTXSVGpoHyMxkqHzr1YTB%2Bl0Jy4YfjByMkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6Vk%2FU2WjTgL7OEZSrcA2j1jNCUJnYMaQ50trwMz7GNVwD7OlGY%2BIERs8JXX7dHpvh%2FRMlT34VkVA%2BDL34kgBi0myqURhgijJKw7cxRFRO4wD%2BbObfbpMyjEpBe2AW%2FDkqygwcGiGkcsHAwCRoG3OQQS5eWl1ZCZLo6ON9v6lcbqVwlee18gUkdcLt2t5EY6DThrkz6IocrKs3yD0rZibFFN6FE4Y%2Fn%2FOU8q%2F62ZszyMHfH4D3zG5LjYRfhCEvvF1ELyvAyeEx4gB1ThAU6U4Bm2x6bkiX1BMZ2FN%2FYTV6nI4GBQKgQJU6BQGPzOBe8HIt4%2B7S6JjDUXNPiSsDSnhHyqFlJw0pbBo8%2FkH72scNhuK3sCpAmpfsfaMRi%2F%2BFPLCdyAd3ka5rpCrGhiGyP0%2BR94xa05GKSdS%2BFdAyWTEXZXkzserRXBiP9WwzcLoZDKq20SF9LCrU8s5%2FooOI4en04zwbM3utork2BtOOvPr7AyCh3TaxwTlYZPNQYr1qc%2BQ9ga3DxEocwqpJPtfUxxk4%2FhfBDeUDLAOShpbUSDRM1zLKNmmwQk6oiNHefGD12Xi%2BCULQZEkd3AAKM7gIp7jckkzSyLMgQd7o2R%2FCj2w3oQPBl2nS7cnfH%2BQ%2F1Vn18BxRGFEDIIJzawJ2IMJ7B28kGOqUBOhukbmaiIGcvW3SegRk4gvsxE0oCNKCIDzqglXVtbgbZLdHlfLRA9aoVJC6mFQ0a6reb0og0TmMODcMXz4CoO2l%2FzUbqYI1T1if9YKeRkJDcGpyYsePxc39XkEWN%2FBi4aGFeREj7Fv1ZAJzutgrV3VoEK0E1qAWmkliED3hyCQ090ioEl%2BHop5J4aPdzT87xxphJnjzl2Afy%2FU9j281qi%2FP9mT89&X-Amz-Signature=b58e0f2dc46a58ee71b86cf80b8e2eb204ba1ba6ac05004f9948d085dd61fe22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

