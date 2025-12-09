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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUNG5245%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwYslhAqhvZpK7xtfd%2Bsp3UUZZVEZqwgkqhlaY02qkgAiB55I689d6xGBWAN0wcSJ1HUQM4HwrLXkz0Zl1%2F%2BgfqUyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3xssva1LkMKoZUxKtwDCgKO7YaQLsTeln45TSJy5Neq4Lk2PY0SZbl6NgtgLkgmEtkTgBMa0QrTC5y2EcQp72Zn9T4YKM0m0iY6bZkPX6WD1lkgOsiFCPDM%2FC7%2BsGpnfYGeFyPKSTHMm1pu60pmy22WEYVMLqeSAQ%2FPTO5SJNL0u0Rss5262zp54dxfDarsJhYCE0R%2FgM7%2BcMLjsLX9SO2cKVbfZpHnjQGkRGWW54a%2FyvA4N%2BIo6gch7NFxl4mDqifIJ12xWBvQx%2F6vZWDk0e7MS%2FvoJpiVMaO5WGr6qKO8QwGrZa6IeVrOtoSmJIbgdTKhU%2FTBJWCOD%2BzU9hOtjMdnPS14ZPsd%2FTsD3hsS6K0f7sPQu7sQ8hMvtq6PgssoMIFQwo1lr41b03Yol0MF2y9N2Rkm02KPc0duJX4uTv1d1%2BpGbWpTwdu7zI5AQZ%2BosvxjSJHvjO6GKvhBy5lXeFKNluwBArK%2F1oRjzhM9NpbiWRpGK4Q0oE%2F9FAMjEWP3cxC4kuC8faEs2l7T8xwXCV3hB%2FqsJtIEJ1XPzGdwYjaEBRMDxAUmXsqnI5qB9JFkNo7I1Obd%2BSfzhGngvnn%2FowCyU%2F1HUghg%2FZpzP08krYMOzrywByy4ELKl4x8d7VIxgqHQrC4mUkNL9LcwxaTfyQY6pgFnLYESVxm9ivD1GWyiLwYwo7f6%2FE%2BVvp4A4s230O%2FaO2G%2FRf%2F1JD457IndWuj5atlwq5rfdspMaVq13AJKRAMMnK9sqne6Oeq5N8AGWLGz%2F7Xsxusj0Em%2B7t1acwe6S3toPXCZ6OxKYrhbNM7%2BOQG3NHuudimDaUvCM9ifjOjKkNmf0Y2WMxv2iUDS7aBJ8uZdjsmrngjCqf55y6yfc36b5Cu5umNS&X-Amz-Signature=5daefc88359a39328076ff9a7e11886aefb07bb20da951fa0c30cf5a0af13302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

