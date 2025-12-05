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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAM4UF7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOas6woceJhfm0Gsku2o%2F%2F%2BZFayYeSaKt8Id1vczlBAIhAOOvcU12RjNhcSQeHSOFF64NJ2GMnwi6kcM%2Bj5XXcl8aKv8DCGEQABoMNjM3NDIzMTgzODA1IgzeyIyELcteQCSJjAUq3APtdM%2F0iCOR1ha%2Bagq3KAZCM5mA3Jgh0F4zEwXFLMaWEODq1qwlvi8jq8vpp5DQtHRRdH1zAUPwvE%2FxuP8YwPTVwaw%2F3acXHvFWICIA8f8QQqXMdDXwYoC3pDqcW4dSM7w76T7U1dSfjJYXSD0r0881mjYitgb99adiCxzV0BmtaJWVRoLl2ITiRBYwhHlbpYr10%2BKPoDC2R18rbzS5lzUqT4%2FREHKhp58ekDa38kQ4ebQoAwWAlmpuD%2BxfLwsxtq8P2N7zjeiALjm3JWS7a01k0tU%2FR1Occp7SNfGC%2FMAvfKcFNALw%2Bc2bkamnOTxk7YhxqDh4xX55KPokvkh4PLYSD05pX67qUgrQWKjue4vQfJaiaRO%2BO1DXto3CcHde%2F8vBBSngGy2ZIQ6QuKr72XPXcxs3rpEC9B9URiK9bZIGvIn0tej%2B%2BI1gHPqRiIr635xPSn4t4KKghUV1WudAnLI6LNNSrrcjUMx1jK%2BLM0O8AppsTA%2FfD78ungZvd%2BE06pholVi98IJeL%2FkuFrRKkxcYGbk6jM%2BakLY6kswtWdFyOJ%2B1EU5AzeP646yGmgUAuXsT3%2FdqDbVc5X%2Fwek1tXE8tislkYHhpuJ22nagi3ISM7GccRKSuu%2FaZAjNDBjDx%2FcvJBjqkAeQnW94bnsr9L1jtc0ogMhqzbzBCyFLHwzMvBMDog0ZbKtsC6MV5g47SCr88QXVpodEEpQ2P270fHhR%2F8tT%2FHMoaD3PGgN8XmHoiVo2n8oI2Qiq3qhr1OjNKAXw5daDIzaNNp2XBilwZt1lNDdH5OjOH39oa8%2FlkiKemUZ1fz0STjHNMQyU3l2G76B5%2FkYufKQzFDjLoUS8K%2FxPM8OFBXUaBkXld&X-Amz-Signature=86c81fa4506b352a19001d22c5233bb9e23d96193a2df889a70f3f3936af0d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

