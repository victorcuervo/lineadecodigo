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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PMZN374%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp2oHTAouOh28Y9JH%2F1Tgk3vadOpCwX28Ra9E18saW8QIgGVmxRZqLmyPwPMkJF0%2FTS8Pyu8zEDdJfK5plxN8lSqcqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORa27Ve%2FbaSypyPSCrcA6Vv3Svm2jYN4PYSsPyj8saGvF%2BheWs2f2POCtxmtNwZHBbDoIxyPCXQvtN8bo02XkwCE3kHjN5I0bIiCS2pmstbvo2nJCj1yKuAayBwRO27yDsDGJOSd4ALC48q0uFaGGs3lrotB6KOaxQyEA5sHpBNiD3vbPNs45dvEgLXZZj4pl0AbfkvjzST7aIG7yE8gbww%2BS0mg6ZRPu2KJYUibUhxhynY2BUfo446t4bLaQAbFr%2FyvKG3kjI6UxXJjPpd1P1AvWVga%2Bmccvd%2BnsngpLvflHDzPdDkm%2FP8sZHPDfhpwfzaFNeNUYwQnTH%2BXtiF98PXVgEWedfT2x8XL6nnsODM1WiH6noBELXYi3WiouAhZizkEsBmMAzVN3t98cPmGTawtmktrlqW%2BSZT0Y8pMskHw7RGf0ZzFB8%2FC9tOK4GiXhog1JGWZ8lqF2szCsaZwViUxhioY0XOnjHrJb7uvzcJYGne6fg9T2LvJxzGMgOOAPwciTlQXyuiZlt6vLxGgkh9cHFmYYzHNa6gIDsTsLM%2F3wMXe2gclrRBmSJrbSyv2k%2FPjTjUtbljab1Rcle7U8UXShUVloYADJRyao2uURNX5kY0KhAQdF0Cw88uK4bi3c2xth2CcRcRCfi8MK2F2MkGOqUBoOeFEsm7YZEzoirQdqU%2FsiAfwpgHhBLpSm6wN9BgcjtmPSL6eT2f5w%2BVpsxNfDkoZu%2FXXHoK2hs4pB%2Bu1BvPBlQuOec7u7hLtQwlBSWuwuf%2FQj9CLKQUO3PH8DJtW5sDQGXaFooTpcrdJIZIbovH5xbRpjVRSzbxIbV5n3vV9NzzikoM8iTN%2B4%2BDChLUnlUC%2FmjXSe2jOdlKlSyKzFIiN4rLwAhQ&X-Amz-Signature=bcd15da3fbde7e048a8af56b55f5d2163ded178e07a0174a6d7d39285ac4d5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

