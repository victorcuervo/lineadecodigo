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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDSNILA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSRtAs62Q06nYqCEZe%2FoVEdFLQRkqTzfVitpVEOzHCigIhAICd2Rndvphr2OipOOfENM3rnyoFyS6X4iQBs2aLI7AwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyraZsfdBP6DWs32GEq3AP7gENnpHopdU0GLvelDd2qlKqwnnyldJWKMwuKL8xSSbiodz9AJghegvzBimuYVYIf6SUT3xW9OWOAnEhEhHMch0v%2FluIXOvj5vLWuDmvrHVM6MkFWWcYcGDNdSpMDyEUyTvmfutSz8vM328xsOtZZV1NpNMRL95%2BljBz63DKkjkBbBs9uDHp1lLb%2B4S6GuYX2v50%2F1lcFs7K3gilw0UCB7qNPGE5YI55XlosQfBcN%2FzJfw8hqryFPad3J6qzuzQq96FIYE6O3D%2Fuy6FKes7Jj1way8zt80PRrWvSD%2Bor%2FCWZDWku2%2FuVAyOsZo3t6%2Fl3c6ItoEgi1b5vADcpoXCFgVQFzZ8AjtlcQRv6ENZ7Ik5ldTGzm5Kpd7f6cUo6ScfsjAcPrLFI%2BsZpFkaH%2FjxHGAqu0TesLgRadiPAgg6ueojaHWQoMmeXjMXWcEwnFv4Ei6LGFq2i6HED5nMeveOrBBppvOoHyWoNcGNm7xyn8ZpJ%2B%2BPHNRaHO9nG7K2OCzg7y77i0GoM1kMwoEm%2Bm%2FTYcrNRQ3gH1%2FpW6f%2BkVoWarX4ABEda10QJ82AHvEwReQ52Ok2YU7G4bPCDl9UzJz0rVp8eWnoo4bMr%2FkZ6a61R%2BLg%2BNT%2FrzJ0KbDjkv1jDCmtXJBjqkAbsXszFLvhEfB7yad5M22d4S2zyIWEkOYrWJLjVwvjPrstMyl0%2Fj0VKPxsR0%2FaCgtuD%2Fw5NdxODT9u%2F3c%2BdQl8UreNZaSf0XBwKvZNlOPQzohqwUrwdos9VZtBeHC8pdpWYlvLtfhAvVckAyUv7s5qsuT52PMZfvreHBvPO3S5kFZO%2FpWtVlGPOl5m92BiInEJ9Dc2A7TH9OI3I0R0dYeBsxL9ts&X-Amz-Signature=3dc9137dacf2c4ded3dd2d6517a3231765088fd8b77840205046fb68839a693c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

