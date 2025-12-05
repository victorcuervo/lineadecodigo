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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4JREF5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdZEo%2B9hcLDl2u823LcXUDFtbBhz4myq2kokIzj7G6uAiEAvSc6%2BVbh7WSQ5lR52RFKAPG6g4t3v7Kg39YPdYppTw8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDiHE4YZlgUNX5FLYircA91aFzjc6FaYkxPYrlZ7PA8HK%2BoFs3AhRPQSLUYfo%2FG7gDhZXl1VYt%2FeHij6uf5Y4%2BijU7hZwZFH7S8BaT8HoiC7LRm7W8sYPRzlVwaC3oiu%2BiQyq8wk%2BP5zF5AdUynSsREPeTuDgCj5D14xBAoHGVb7250hfTHO4P87KjiCKtQRH%2BMiwNI6gIh2jabzh7UryVzaR1Bo8tSNrvjutW%2BuE0wam0W%2FeNfuGsLFa9ChTUwzK%2BbawJ91DLsJn33wCTIGyJspaitsUpHKjHf6I4yApy%2FHqxSIAsPA362m4M7UuwP7wYOqcTRSdc6%2BwigCf7GX48dSEYlHNzEaWBc34HQxRke%2FLwhd8eHI1bqrA%2FQsQEwwKawIktJajcJ2VgnBPS6O%2B7X87LdZWEmmJUwTYI6Lid1daGCqsMYIWGHKa0MDafEA%2BTfLH8bBRc6ZI0uye2clotTVFKzkOMrydcDe%2B61elwMmynqj%2FOFdE8Hu9pZdZW2pHI%2Fi5QSmsO9W%2F1BjOGA2wkI0Uup3vNQ%2FaZyxpx9ki5atWsUCxraw0iCZCbz0FA7NOYMZfqkzY%2BuD0ohZsd1B0x1kIdQZgT1jceuarMcpU5z%2Br9hpCeIEWafA7IZuXd4DWDQ9p%2F5pCYls9p1LMK35y8kGOqUBvAkg7ZUdqw0jIjEcbgTHexPmcrZklB%2FvmpxSESLB1e7KBKU6vk9hkjcv5%2ByDXcyME9KQwkbCN0I4r9TNdAU%2BhawIqwR0iSpplpJQFIB1DaXyQSBLg3JYoYOTLw%2FXpHfbhaSjIeGM5PUCCY%2FA0306%2BFQTG0doZr0dVPMbsBS0JqOyJO8HN4cfN4mAx0i8LmG2Hg7aFCYrPvBTLQjkdZQNB0CP9ew%2B&X-Amz-Signature=ea8ebc53a7e26bbe7fb5d292d398b3fc309bb07e759e4824536afe902e8ed4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

