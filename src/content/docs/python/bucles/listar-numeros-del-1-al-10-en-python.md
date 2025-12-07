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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBRYQX6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFdSVRwIx1q%2FVoUwjfBEuupqgbi%2BJ%2FSzTJPjQ8sOelHAiEA8Sss92LefrcffZQUuouWZCR%2FAZyNrpuoGB2tSgpDEAAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSmPl1QJThaCk89kircA2M%2FeUnlfIjNdcov6LbYCm9UQoNNHeGj41gDzC9urhzEW%2FmvPH5tYRqOE5tvM8bX4jSkF7hllbci%2FEOWCHG7MhWMBUHY6RqPz9h6AeMam%2BrbzoZuTbNrGBB1jNkVPulrhWne96oFaQKDxV74RKZk3MlLkcOmZZc3Djj8Sr%2BTS41XFxxKwL%2BqsHUnT9btWAUkdD%2FIYs3nWyb8j%2FXWnyoVSoWH3CBKTkM1Qi%2FoHgx2FnC%2Byk6v8C0efcHPpjhEEpw4PHo%2B0PUQDJugGAJWQY1Fmf9ej3kzzDfX6hDAo7gF7bhMcIm3DiIMwT%2FtzY%2BDuQkbc1Pr2n14B%2BDWo2O3F5ruRGxlnF7TDPHzgI3fMQNy3y76tdaf5LOlIRhzOb92IQSSEEqibnvwL16olxZSwyahH2xd%2BVuBKeJoWMtZj0YJJt7w9wLTJ%2F6C6GH6TFuxd11KgFmkvY3QoX7HywCJhzMvpjQyW1FdRj3toPHOzxI1AW%2FTeQzXZcFDcVgDGzjd6lsK363SCWdcAv5dCF6bxc38U5LBVJtGHkMVHE4PzRRQSR%2BilvLQWV%2FQn%2BqXGiNm%2FPi1faPEBPe3FIVsR1MCWPHTuJOs6TSLb0AylSV%2BzLEHiR1Bkx2REu6my7%2BMNXv1MKP90skGOqUBjLvBNh%2F%2F%2BsVR0eCRZ7u1lYjCP9nstk0O2HJrUCniDxmvWDi4yexXHnErZKMGx%2FA00DomiAVew2fn5HoMQqeob0ILNEn19TdWcLswaJrpZFe0DVYig6F%2FWI05Nr4hIpZ%2FX1CPa0w8mPvp%2B3pQQQ%2Fyx6W47ZpfFJSkmDt%2B0lNOlgkjLR7f3jpr8pLg6d72Og34RH1D%2FKWa9Fz17gcGWcyypZc%2Bqzif&X-Amz-Signature=a786637999fc028a8143f041235581787d22bfe6455f4b2dc90728568b3e3a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

