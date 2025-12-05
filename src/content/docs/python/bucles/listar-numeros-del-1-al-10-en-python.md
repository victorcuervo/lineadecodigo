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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PE6GG57%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTVVzxepIY%2FoBUKMk6IOz9MUcC6ktdEUWp%2Fv5BkjWjdAiAIZrKmnnLHL%2BxPwXSfKvAjIunwXId99d3un9TaDq4H0ir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMT1FF6798U1ID3bPDKtwDysZgVysRmT1ahtPWhWXtWUxjNgAFMLfcfe1BXf0F5HCnxkO20g%2BugASjrI0L%2FiN%2BxhsIuJPFyXq%2FJuCOnKdhODvL3P1TL5U1B4%2Fqw3l5SkRE8TPXA1EtpyCRizhoITVf52tMSTavh843ANL2Jm9%2FPhxMUcWQbT2d8Bz7Erl%2FazpfyF9BO6pxV%2FXfhCTOXcxp8TU1dNCFp%2F7SX4EUIg5Wx3gb%2B4rto7e1vBdk13WrjmDuo8NkFNWxQNTjM5lKqVztziFskiPU066HXNGJQeKXj79nDztA4Ibd82lERdwhjQrJ8MwnZHyoRL5G2qpUWyt%2FqAoOEJ%2FSkuOIEODNGu27vneHoiynYPTsTHXHBrVW%2BJ3Wj7liiNruNm8J6BhOStEbjtWvu802QHquCEifSqbuA3p0splKtx3Kfm2ZXl0pw2L6pPDidLNj2p6h3czh3gut%2BZoBBM5ppQ%2Bp5bR6igh4AHudxpDNRxrQPyTZsb0y60q7P8UD76KkQQtBvLt6LW7hTVXt0VDY3pFdJREiM%2FqPREhZ06qU8XgP7nJAgSzhSq8bjo95dlfxaUBD7%2BkPa48F2N%2F9dH8rEwo%2FS3EdMWCJmtydl4%2BbY%2FDFcpsJiEBcNG1Ema8y1UkN8hoPFNQwnM3KyQY6pgGgVzmDzVNVc3x%2F%2B1H1Oo%2BqalQcKB9io1vZ1Wd9m4TAKT%2Fwd5rDvgzUD1ZfnTm0txcqOnWZLtxAihsvY4yiLGfB2%2FkD6YqjnvO6psj84pfo7JSE4QbwEN0SxOvS1DiO%2FDSWDly2q6G7HTlPQhhOydrnAKmS%2BtyQ2vzG6WM%2BwAkF07OqAv7ZXadM9NNYzQwf20lvW8btTpk6FKAJT5l6xtu6NM%2BGO0P%2F&X-Amz-Signature=3241dbaad5de559eb56435b75ff8103142d2fb5a8b3d720a50b78ab033fe61bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

