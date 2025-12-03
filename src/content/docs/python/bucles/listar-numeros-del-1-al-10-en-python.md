---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6BVN43%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCzXgNbsxZUJQnczalFmX%2BLZ2wIN5v%2FIfd0uGftQbOgjAIgZI1A9JE6J2EjWhSfDi4Kd9Zz9nHa5qLp9sCasYzJt1cq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF5RyAGg7xr8mCdHDyrcA7%2B0xfCZAN6CmxMhng6%2BelDeY41cllBcPPj9OzOI7M6WmfTiTIbxE%2FL9D3Ji0YsiqMOmaPGNb3erxaQPBDvlSq8UcC52ZmNpJNLe9VNmJ1C8aTOZtQBXEBuc8bm9hQrJsPAA%2BuHjE0jRFXpk0Z1euw2RHiiClhBc4aey9w6IkP2e5p1%2BTIIuiAUidD0Lj3d57H0avomOd2Hm5dzIDKxZrXZAn5QYVY9Cl7kdZHHqXgdDrexSX5xWTixy4PsOpHx5HmUfZ7I4kFUN5sRF07jAeEvdiAkks%2FeFzCd6lM3S5L3qLZVTJayFFQAweJcA9TiYfh%2BFb%2FnfNIaUJVCMgpsgQxQRkZO%2BCHF7IN989DTnALzy2K9%2BRup8eB3L%2F%2BurByxs%2BHHSUcIob5vVlUWe%2BZCCYGgTashMVxX1K4OvByw1xp8%2F%2BPNLw9tYiLuDpZHPzS4%2Fub4wtt9L2u7BheZPbPXpqmDGOTKTLFgysaESDCvjQeLt1fxBVpedoXdOyF4vf6HLiu0nMliFgdwaJy0AdtB%2B%2FNhrmnEJMqXCSYXEHLqvF0j9bDgvzUO99QYpAo6DeeHWJtVUiYfMBrN%2FsYUIkR5s5MmVOPJspQ479JYyhPo%2BnmEk378Mojcp%2FMdx%2FL%2BzMK29wskGOqUB6C6k1RvMElSUL%2BQNSPuYE4CD%2FlKvkdVr7CIUlEjmrYrbkSzzdZRuYlPnsm3FTQdcSxqk%2FCeK59Yb8xvjZ3F3DlBwCtRLKcU8sK4BgaIH5URISzgkvaQv1ckgcD%2BO%2B%2B4PsVUPZuk8kmYfySRLG533h2p9plevAZYH%2B5x3USp3ldONKfCd8GevfvliXNbK93woAgWf14NmONqEAUAsB5NVElSGx7q%2B&X-Amz-Signature=32595318d738f9b61e52c224bedffa0f3c0c664388c4dd7351eccc3ab0b5d228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

