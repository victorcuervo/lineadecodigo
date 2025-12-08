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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUIU6TI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuW%2Bv2r58eZqiLB3eRHm6RUiqBsuNjjDd8WlRtaPkLdAiA3xZNQW6y9xLBc%2BvCs6Z5qwDZS02FXY1fXcaJU1sjumSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaTfZOPtF8m3mQkprKtwDVc5t5EjVu5uuHgrj7OFBrK5eux%2BH0kCQ2zIm9lmhTI0oJRjlsAa0L7oIfVCZubTvz6iSdjMop%2Bu3Qo0dV9bwtBxCM9EN41PoIUCipYwroTp8v%2BVNTb91tH5hfCe41j%2BGYBmyU4JkdMaAe5I%2BDCSDIhbK3c%2FF8jlnTQcFWv3uQld2ukawZjDOnLbJwD9qSbGY%2BmdAZa%2Fsz4ZErkHXGSvLBA4i5Gdzo4sqvFo6MaeLMpTaQrg%2B3L0cyv7FSYNeeLqWRa5PGd%2FkMoh7YhXC3jvUZDJNlUFfNJUnNs1qrkh%2F%2FcUbiAVki%2BqwBHKc4h6Ta5LdLWJYTGtpdz8GqvIZpm6fn%2F%2FP65CII8BSA767zCpQtY2e9zhdXlPke7SxCuGOEr317%2BfOzGIMRhZ%2FfgG0pcr7h%2Fo8CIeUPjoCx3aEi%2FNXG2F2gjkQ1ILwfB4ZZNIjAjc0gq5wI%2BFewE94%2Fp%2FI4dXy55MWr0F8UMTvleJADDjU%2FYNbn%2F6ZPF38gvjDBglC%2FJxdW%2BeJc55B%2BIbDfNdbHQECzykpIN1%2FUb4bzeMvttsotJlXcG4rmQpQHWw4nzrCWAtH0LbZriiQ3SIFyunn7lkWy%2FEpIz4oAxHB31L3z93AaHv2RQnU4BTk7wt2uCMw%2B6HYyQY6pgG4U8jkp42WL%2B7V5JzyI0Wp2P%2BZ5%2F0dhs3l6ijZ6eM1OJmJBiSgIvQto8pwpSywd9iAp5LSEjgfp3LBVy6uHlJp5cJ2fklHCZCSHBu5PjdeVRvR1ZbtEYg4uUk4xn7fLipiTNlJUHbn0vYN2nCD2%2B044QcuuxUQ6Wt%2BcTjKabNjeZPnl8h1e8Vqw%2BD8TWPmFcuLq3lo%2BTugJ6Gi1Adye%2BHBut7h9If0&X-Amz-Signature=74782a04bd6d15f524c98c649eb64b06dc3981ec0a96fb1cd87bb97b95a93904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

