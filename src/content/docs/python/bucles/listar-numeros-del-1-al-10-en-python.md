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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFAUB6XF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDE771an5YFxDqGfNwZa4G7zNM572FNvnx8P6SHeng%2FOAiEA2vdL0TudCbgxVL0c3dMsJkKrzStpan%2Bj9DoVdiHOCeoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaa2tQPmIoZ8g9h%2FircA%2BDSZdexrvBE4g2IrNjJtIcHpLb%2BCSBdwwfSgloBDFkzE3BA7k2KEOgr2shMs%2Bwrojnc5SmokRGWc6RIkQ6N8To%2Bc8g8E7%2BXyJqUSoVLPM3kCOeTGSFuZcPChRxKtez56z%2BqQL9cMajn7W6Me%2BNtiysdQLYzLPqn%2FaSckLFgdRRzSAgMzcxO1CWEjJ4xIUKBUFYjZBLspBISm46EZygnlJeOiwAZ7mB5mxhxvcW%2F3FPv5a%2BrE%2BshhGn1zSDhct7hMVp1R3AjKVz0XauDzi6rubT5rtAkVSd%2BX83cew2a8Nc65em1aqxTOrdufBW1r7JI5QPmY33hhdKM2CIYfja9MeZ%2BLGNJsESGU5%2FPTK2vkBQy7NKh5hK3kryTRSwkDnZtOSgzK%2B%2BJja1H3J90B2RwXUP%2Bkt2%2BVw%2B1Dwr4nv7eEzbeVDJyXC%2Bs9ZHdTqmuWi6H%2B3onaeSoX1Uu4VvCrIHr%2BTuG6%2FYIa1xrwuF3Pbmz1WWD6JF4k14wEHg%2Ft7wkpZ104SUjM%2FjJL9QJmbtpLHAiXlzK7g7%2BLboscR7xoEDNkaR7GAGg3BJdrDgVzSUb2fP%2B6MxOdrGe8Q6vlhCAAvhI1l73Hx4EbZoDWZmD3OGM0gYPYgnRYksnwBbjIjocMNTR2MkGOqUBTnu9f5tp5QTS7IxJVHacN1SPnX09FganOfqprd5yZY%2B0mBYQs9lM0XdEAt5a3z%2B0TrOPCuRwRw6fKjXeVQYqFVzXF5T0n9BnFHymgSY0F5%2FWlQNzcpr9x%2FxnaGYCaoyNU7%2BAZDgm9j5j2LGRx%2BE1svTdHL1Tvfsq5NX2nZYDy85%2FOfzmwqEL%2FMb3LsZjmgNpQ9DmbqV094hePyM7EWyepT56Uw85&X-Amz-Signature=70eac068af754c4c9f4918ca5062eade2210b26929894467a8e64e8abece0935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

