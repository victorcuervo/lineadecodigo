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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSI3YGER%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzTBD1BLfGRa%2B9UKxmfNhPNzvSXCgjp6rkwyigFqWQSgIgC8vnvRZVOr4GsxJ%2BNLcyRiVuasFag5iDVwVDHKW8AY8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFqG%2F6jDBOr%2BHxRf5yrcAzbTbfOk0yMr7Vo3M1sie10H%2BLW4dM8vbAHwxGfFWYqgiWGLL92VMiROPf0iHAD7bSv%2FvG76Ev64Ap7Hxj1rqynqO%2FyMFJLMSd%2FRSgVfKsN%2F9irDCm8rvUMWvT1koLjVRs%2Bj3VimSYM8MGpwKoIidKrhV79S383%2Bv%2F1FqC2xIisZr6qUIywlorw6vNSoOuiySD1fYsRS4b6LfbLkdZnQ56NymH2gCembmuh0m1ygsDgCQIWRcH9cpyzNpJgNauDepL%2BdfUfSidmrHcKO3BpT6ijSlhI53sRF5VGDbk%2BaMKAAk36vUxwOkXP80TScuwi52zUBGCjpHOJACopd%2F1AbN4hHSf3peOh8xLYV8luPiicxmM%2FTnVv61UFwBLF7nFg9C67xW4W0lwNXKJ4M4EpXtifjYqdAJwhiIIPIOb9dlC0LRkbZ0kUvs45x5BSdml2JpTlI%2B4He4RjAWxHmyydcaszo2LWT8v9SYfwFmbi7FGa8hrt%2B6dlIHP2xTnZrTvvfxz6Hpepf0EqNhJj8q%2FeEa1x%2F4AvdrKla1yzcZiui2NWWBqmzMpAm3jOeDM4FLcYxSckHemNoESTT4Y00rG5Otcl02iCTfwtq7CN4aXoRDs4rCUmgfF4qI8uBUN0FMOGez8kGOqUBlT4uzOl0SnhIU3it%2FwCSpLQIejKN4COEhM3TcLszlPKAQy4LpwO2n07xOdC6LCLxbEIgx%2F8A3NUPTJkz8wBtY9BjJ8Ar9KXbVZDBKy60%2FOzy75Eiaiju1fgXdvTiUALtbXdNrBaBo4R2p4yH0Fs84tBv%2BmJsXrQTyCwfMdofB%2BItTTHcbF9ZiB4TbuDif%2FtSUR1tHPpsxgXkZQ%2FdMMwVZ76rgVUE&X-Amz-Signature=1d7fad3cb7d90ae2026cbab8e7e759cea40840f4e5be3266d5bd71fe42c89894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

