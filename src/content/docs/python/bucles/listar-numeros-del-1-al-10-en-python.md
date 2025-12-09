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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVU4ETG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjipbVaQPO%2Fd%2Bm9IePg1CwV7%2F29l47yeZdAxAaJ%2FdMfAiEA8BzNbza%2F5G%2Blj7SToVYEV8%2FSnE9B7ebjoN9Zfo39ouoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzMFgyR3IEEpVDXlyrcA2j6GCz9jy%2Bb8OMbLms67OJXZyLiszB%2BodKLm%2FrnTQvQ2tlscPwiXWXMA1utCYGewBAjIX8JreP%2Fjjgjexe5DfrI0ZhVYoWL5LFpo2IyOTbeXRfRHB9s%2BmbCKwI8wk1rvYg8cdJop8U7fsaN%2B%2FknfPZcqie2PXOV7YIKJsoDgIlCwWhwn38GgCP2369xVMxXCVPRox7%2B3GCQgF4FUD1mlleyiMFAyr6kvj621p7fsYz30BLZdF7xJYG4iboCIILfPs7OYHQOp1PFjAVuka%2FOeMlzuwMnVE3bvxCR9OKznY1X2%2BXC2raU8YTxXDMmEX7gcU8rE29v%2BQ8Nl7NVvqDO7cK5dbT%2FllyP2xWj6%2FGq1Dsj9SZ4i%2Bfh5Of92%2FCk%2Bign%2BsbcXoGEoDU28ymS0dsjl80XtBC0TAyHBTojpxFzoavayWbTcRvw1N9T8QloPuRtfQKwsI%2FjcKmMIXIA3L3ApzguzpQ9qRKkvmaWAO4Leyhf66rWSBNqPNku33pvhG2lDRnjrxy1E8mwzOcpsQaMnARIL48LZ0beMdKJOvf5QA6OBGz7vNSfzFfOZjYJpqfEKvubJv%2B1PwpUPAiBbMQ21huUO6QyikrwXvkDAvIcIxoVI7FAyD2Kg6XKOSevMJvD3ckGOqUBm7%2Bm2qTv%2B%2F6eHHygAoKhXqUZnhGbzgkPxmpz0ATbiTRsdfV6rOxG9eE4iWnNi1OUL10h8xLop0U25e3f%2BK1m%2FKjlymBv%2FIVR8xOOqaCqTRbrPXe28Luq92uOKDHGzD5HY4L6%2BpiBnlko%2FMkheKcx0FGDAZdJtZ7v0Dt3i9pxDb5FZQIvJoTS%2B7FVEq%2BrhrVYLDCxgxFt2%2BK66BDD%2BszHz9Gko56O&X-Amz-Signature=4ca7f53eadef3349a0f61a8d1bd2cf4c62fda784b000a4518b0e1955bfd4260e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

