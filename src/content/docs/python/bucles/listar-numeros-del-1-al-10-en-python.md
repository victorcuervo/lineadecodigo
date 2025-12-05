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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DFKGF5L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVsKpQhBhpC7EaxOktlP3Lk573MTTzD9G1gzuCR5Pp2AiAsKIseZG8l8Q7USaE6mDjQZsNDTk981LQ6X6F2N%2ByGiCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM7DwGH98gMra2tmAxKtwDtjCojBa8tQ73WKNLdoir0f7l8nE5sO%2BmLr%2FgALyt1Yo7e4%2Fr92J513S7I0oQr1YjLSISfsVQ3UsqyCe%2FEUo6%2BcA9PotH07NiAffM6ZbGAI36iD5xQp6qdzqZF7t5VfDhy67ay%2Fuaf2qkBYw%2FoEhOTzuqzkt%2ByQY%2FNwCBVAHwI2ggwCw2O1aSAFdn4EmzeIC336%2FtFx30C8t7VND09SE8LF%2F5S0HJ9wwRyGgNkWnldWbr8u%2BBTtTVd824PLVlUKX9qgj%2FNHyUF31hqHyrxDiwMPG2xbwo4znZHWH2HKs9oIUXp9xBYiXvpuCZKnoqNygqiD3grroM4Yj7o%2Bf6xK7knvRMibKMQePpSmViMkln7ub97u%2FQTsLf7%2FY7g9sW2hHKxmUaCd9A1wX%2F%2FqgIJzIcV8qfQ8iiLrQaNJ4HT1GYzAw73u0wemsUGoXB%2Fb6EsZ3MtfRWwOapPX6dMX80ud3weLuGIDhPO%2FxZPKsqjSVR0r1F7d7aIxQhxz84xwyTkF2ikrSgmO0WBjVkS%2BDs2C83rY7%2B6KBpD%2FVa%2BWrPLvmPMT5J3Pf7GpfG6T3v8kNyavTSdVx0R%2BtTdBsLVeMp1xMj9Vo4rUH3COiML1pY9o3OrQnHAgfA8IVLkSVz8bEw4vHLyQY6pgGpanKR3p5WzkI2mjhTrpNkv9O3w5WrXCPvb79Mhd13ixPYgLsKcykHwWFwjNA5rtV9o8QVAV9NLIu8XBHc3oc8zZ4lKPFGyb3h%2B4J9rUcOBK37DtizF0ixhFeZtZjdPihkbfq0y3Y0ZVIj%2FOjJUnPI7alz%2BwRYq4bRfiy4n%2FKbSwSewpQ1QrYoyT00f5a%2BCeD8RddIIW2FPohEVvIjMisDnb0S%2B1uA&X-Amz-Signature=07e54fcc34471a0cbdc75f5cc88e7bc61042a3cc5cc0b9dd2e3095ff36ef53bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

