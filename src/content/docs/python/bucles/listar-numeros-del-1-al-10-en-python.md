---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4SXCVZ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIF%2B2fgeZ%2Fl7dzI%2BaKIvYt9CnSmQgtPFPnF%2B77nxuDIo6AiEA8ptXcLWY6o2lvUr13mKElCa4U1tXPNT%2BvpALrOwd5Aoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFHlJfY36%2FImyCttrCrcAwZ0haKV9pld275umpPO7n4c3O91cXs0oRLUcbl5Xfi7J%2FJuLfAw2IpqoqM86SAKqP8rN3BabIC6Zrj%2Fgg%2FSETqyxrfQDH4yhXbTl%2FyVwSOwD1QxbAyvmX5x4LlbLLLeTgeZagF6DuF5QiZiCrMXVRtQveDGvaAfMjd7KMmMGrGIHaOGMYrctCLKcrmj%2BjpkTA%2F0TpyK5vfNFyL0pc4vHO%2FdJO421h3Mt%2FUUrtrdNNAS5yXujH0NjH2I59pCqwzTCC2A1q%2BRMmghT2Z23NR33FPpN49OBDjysbhO4317jnWNJ8xKV4dtrpqVQvBbeK6DiOoEQcddPkCYMLKNxUway%2BCC7tEFV94ykLlzWlvgfV8Z9xzXVQLRhL85HxRvVwSt1WbZ9ejwS%2FY%2BJ94eCE85TYIPiO8bKliIHO6Rh4w7ho6Cn8YLUPnS5PzLgcYc3yV5I5jEq7tpDb2Zg4UMVC%2FSQpZgy8e2sWI%2BLyNGW1GnJMa%2Flg5X1wEaxKzh%2F8KaiIYeZlgGASJ7fV02cfFy9D52fgcHvJGws%2BGuZGxu%2FJXGKKDNLdP1DPJK%2Bv5LZClAGOQh1kBKOx%2BKPr%2BnIE%2FBdOoL9cAkDIIvUwaf0SHFifTQBLXS82FObybL9f2U8jA9MJ2RxMkGOqUBLT94MBa%2BlhmMrxKUoTiRyd5%2Bq1MEcrwp0GXp8a%2BP9h%2FdxDhpK5z94Ymw0tPNlTauQLs9UaDVnWZ6UPHZxRY492p1D8K%2FIkrEmcHV9DSR%2BN0Wj6WLTNAXeFtn1ljHxSMPLU4W3ClLsiSSbf2DiwlZanshy%2FewYU4k7eS6V%2BSNwmD%2BjSrMd7D6TnBMoOlasIm3pZwDuSOaPXO9FyrAovRV9UrXMo29&X-Amz-Signature=df0696dddbe43070c8e195401a26cae52f71f49a40805a0aaa9eb649492b7054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

