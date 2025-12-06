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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXX2U5QO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXrGyMPNQlbF6f224VE4u3QxA9SKN3TyS%2FUm0am%2Bs%2FyAIhALAHeVGEVc74yrGcYFnR%2Bk%2BybWUVCdCvE5YfnAN2x1GpKv8DCGwQABoMNjM3NDIzMTgzODA1IgxyUFgtHSW8vWtAY9kq3AMUf1oLpu9rcDq0WmB5YoWigBNv4W8eYf46AarK2eJBuhhndhwTquE64t81%2BrthwlPQa99nw1%2BSU0JUndsgdZSH1OdtY681xpXImKkLEtpclmUR4Mzt4brJ1zpHeGMxiDQLOal7O3hKzCY5DeUgRuICncDf%2BC%2BNHd8cBraBj9o0yMrJ1%2FpZTvg42FxenuM7qMzL8owRpDmi8YFqIJeMauUTccgpY9%2F%2Bo4H5aWk8QP5lne0Et%2FsAKExHiZopmw%2BkQp%2FqPSSMnEuydnGXHC4HIl%2Fr4%2BdeeCEXc57YVP4v75L591LlFe3qS4hqc487OazhKYMfs8WRw8crDgSrzUjG19Jwr6FwFuSFi0Qcl5JOUJtKM%2B0jTiCzZMoL5MUbqUiXSRR5ULosIDL03accpszS%2FDz0lLKCf6JRo1SE2rK5%2Ff5oVEfD2aEgKU7d8c6dxKxkCUjPbRBOpWcbGdTEZUpx5PiiOuRYnweoIayWGdlWVgfm3Rdi5CVxVG9ASzWmo8oibVWhypRQZ3xcY%2FVPoLO39%2BoheU9G%2B6nVik1qqWZHoM6WGc5ul9w%2FuecUKQoo6b1dlBv6dvBxUI%2BiBw4jSnT4T7T5cRO%2Bjx7tSwTBVc10KL6JNeF%2BKxsSNxzad932%2BjDWp87JBjqkAUi8IJ5rarEp9RYEEZZsL0RucHZ%2FlJs763FIBAqQvyqbv6WshvCE5b%2FGUr8fOmgmaplpm0Zecmm%2FKBAjaD8UymSYOweFkGOXY59eBhCLRwzwEkWuX5WrF7GNrIsdjQ0WOJ8rJpuqKGpLea0m7Uh3hCksIxczW4Ht2elcNTnlQIxcm%2Fu6LFrCvL97vXQTLYk7jE5wbU6zAht2L835%2FGXD71A7dQaB&X-Amz-Signature=e608871497d69e0fd44449f9ea447cb2c42dcdbbf274114fe2a7f922bc7291f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

