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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6CZRMWS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWQK3%2Bz8SHYljEec3pF4y%2BDtQvUAmfGK2dJ9Vac3C7iwIgckFLGrV6DyePQSJpSxACuVp1a8zdI%2F1qg5%2Brw5%2BEAtgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJSuzjIS127YoSVgHyrcA0czm4QT0VUKq1eNA%2Bnth66uWsQ8rOK2GYxfDqCxzcXQrY4p3f9XIUI%2FgGe3FW4fcr5oWYiUQ8fnRW9yaECv8H8ExOb0kPChOCTLfgtjJbjCCZoFQF1p%2BIdY3RWM61UAk8bRyuNVJoiNk6QH5Hu65BrTR3KiQNRPteL%2BlhqOZaU62S%2BsNvvjFHKHpC8Roep39BGUAlPZc4z4eIRyWTAO6dMQ1KMSXBM9oVlQYqBYsC3BqteKtjG6pt%2F9ytDlVRas0py47qNXn2ZyxByg07ZW%2F7qcUaua6f8Jye%2BzlizcSsKohO4U%2BeIhX%2BUzk2xhKMu4VZvN2cjtC%2FsP5sPB1Z3wPgtfjMUqoB3t1S%2FO1o%2FmGnMvx0LpFNf%2FQB86pweNwJGRP8T4UbXfhPhMCiJQdZrKbFEfbuROK%2FnCf6juHU3hK90ksNRf3OQWVAfG5gL1UhZX4r0ooyDoKjfmXA%2BMEFaQxw4F1oRCQdxM5cTCLuQtJUSNYhxoDf4ssEcU2%2BUkympGWKBcRG3nQ6sFBsrwrYVcQ3ohndemk4lGXDcwxe%2FOXKie7LgXnbWx0oKH5dSqFQhVfe2WzqKTA2SPt9P66B8%2BOwk3nqy04WZHgPwX42c3P%2F7B3Ds4ZqVtUkH2GKVnMJeozskGOqUBygzI%2Fz0oecUPmjlAn6AQwSp37zQ%2FrvbMapmMF49myq59uT3icke1g9XVQ%2BnnVd3lmFS0goerT2at77nsuz0EE0cRMatkZXe6nCO%2FYpWCPmb2BsjEUA46gNShtslAGcnXnMPjiDAov1S2jxA%2FSfltuMkWWHUsy15%2FXzh8YtHkvw%2FeQ08zWKq35G6v8T%2Bd65CTYikV%2BPGsU2rR8KVzGXN5BuzhoJvx&X-Amz-Signature=6e49739086cb8326b1d1ba8fbc2e3ed67217d81f15588027266af355379103d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

