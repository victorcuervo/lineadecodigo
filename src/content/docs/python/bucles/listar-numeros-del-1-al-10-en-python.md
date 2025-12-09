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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LZISEEX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsGEERvaNgrQ90q9XFeys8NCGcltOXvnwQYElC7luerAiEAwOfvutJjjHCVukLMvVB9FD%2F0CwQ5aFiZIJ0746SGSLMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMpsQRX4ECknjzBnCrcAycgkCquuP6d0TuHoRqLnX6IdiA3gX%2Fk3hs0eUSmKMGBzTy1eyqsZPGH002y%2FujxvTUBAl87WMB2Nj41HQx6R%2Fq2I9ImF9wTFuKnCm6xTxjr39R7OkEArIA30Awx%2BYCRGLv3WK0i6BLTgtVBUZNxfCJxzeoNMbIZmi1i9KntaVqhzLrIjVDD91Hz2byS9N19CO%2F7Cn7Dmuzt8VVSg1NBT6WuPcGYGb293v71fHqoBmcmUTxVOgMQIUoAekbX0KpUZXJ9DSvXLfjw8QVG3u%2Bz55uTCsyjgoU8rd%2FsgsckRwOf%2BnBY%2FvwKcUJEUaLJSPwJR7tIWUoekfaaVP9nWt%2FOkMh6%2BWCnuLIDhmnCPJnLBX9Ja3d1qMab1C%2F864qzifSP5DS8sH05b7BE2K39hmIIJxVWKBn1ScFU%2F1dgjFh%2FVi25wh%2FNnC55mcfYeWZpQkgSbtIYgFY7tMh%2BaoCrqrYDxA%2Fz%2FJ4jovJUg4ijuvIxedz%2FjCPZq8ttMsLO10oY2PQUqfM9XXVj2YItHw6K3D67xLGR%2FFJuk5rRe1iSYPSLMwIGtZZ6d8YBMedrGC8FvrkQ4KhsX84c%2BokNDTRzIeie8plHuTpnZdlWe%2FN0AZQZjNBawYcpNBrxj5tAYWkyMI%2BN3skGOqUBnZrF9l6hjy%2FsjzKAbhvR98aLvIJRPt8tBRu15r8CSvRv4xrnldMHK5E%2Fi3r8eKr%2BZWGjmlU%2FOvR%2Btce17ao8KlP%2FMhTAzalnCFwM0Sqa7Fr%2FpRtTYMZC%2B8KLxjZ%2BSN%2Fw4kYYP6IuVuyuI4ihoj2IMD26283E%2BvcsHfoHL5Z1C5%2BKGrwDdE8Jr0Z4zFu9w%2BeH%2BsiDXpUWve66F00gR%2Blp6HjvZ8No&X-Amz-Signature=ac4446fd226f87587914c7abcea7b7e45dcebedd6b555b64cc97ce205db5b9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

