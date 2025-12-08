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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22Z4S4P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPvN7Z4%2BNbOtyAWcOm0QrWu10ryTxFtaeXouiL2OUpqAiAyZkkCsek7jX6dvRAXhr0rBNuYKFHvECUmYDf8GUGa3yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFLJdvLTXqOkXGDfKtwDfZR2N44dYcd6WDKQdx2jBy4PotGxbRIdBBzSGgZOhXT3LzSOK85j%2B715ofooTVYegz0vlLEBoL%2BPuLf8jY%2FVLSuQx0f1nHWIJh3WhCYoVhh%2F5iTmoRU6UkdAUMxpDg8smUhJyYSJrbM%2BoimSZO7MQUBmpEVG3g3aPWtBecxhWwMrT2Rd5X23aPu6yfNft3Zih76nG0GQYpumm8c9fpCUMi0Z9ovLRmNCYfxznnokna%2Bnxs6qLjH32EQzP0h%2BfqPo38xyW%2B3kJqd6vIs2J60DUQDNV6P%2BDEX%2BZtaO%2BttY%2Bp%2Fz26AWeG%2FK2rfQHfdRUWug%2B6%2BmuAp%2FTCEMiKjII%2FMD7dBIiEl5tB%2BpIEGRNHZhUzJA85HfdXK0EeVS%2FtsWkqT3ZHOyH%2Bfs5VhB9KYOP%2BxDl%2B1vK3K0OaXgUrtN4bH8rmDTB4quh0tDBg1Fy3ne%2F5lxly8iEIWsNfloWOAmF5keqj0NxrKzfvfs14kcZsGit0b3gitu01ef%2B3mIJTZyJyDLS0cSUHOpNKLEuV5mDUwgJ358R7s6JWaarDq1cFH00JKEHrJ1SA3B1CflfFUuYGs1j8r3YlM03hmht7ecA3FlisGu%2BprmZcFPDhAsnDhcTvsZTJnV8aAAg%2FNwRgAwzrTZyQY6pgEwJxEs93MRg7KPONtEeEWT1nLlwI8rim1Xk8zCbL%2FkRQQwDzWohc5jJGj8wAFUa1vMBcVCm43GSyOVmzzF%2B7N8b%2BRXcr5CGDuLxAktrNOpS8g7O3rcjraAxSXni%2BaJkzJ5%2BTBaXL3%2Fathu2ExwCP3nwS4%2FDitUAo2ueA3T1uUGRsX3%2FrZq951XBgc1%2FyA31ycpTVkT44%2BNZLe2CSSjP8EFSV4MaZ8v&X-Amz-Signature=fe112659827ba4455bdb4acdf4936e06ad4fcdecd6aab67fceae438506a2df4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

