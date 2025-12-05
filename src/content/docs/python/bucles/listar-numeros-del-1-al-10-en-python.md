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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S36S67O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB95rKIfk0qC04P%2BGlIgQ9nZSYkzUR5ARV5vvHoAXjYjAiEA5zQYO7jbYYA6sNUQqSd1xsFo3Qiti3zUz4g9zRfK%2FUAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF3ZzQYid3gxTc6F2SrcA6y%2Ba6zPzWmhm3PKp0vnTaA7Zrm13ReP6dn6SWB0y%2BvEDHTiGeB1RzHE7SDXEHFwVtCvcHLR8mu%2B371TR%2F2U7mMKPlVtgb9k2szBhmmi0PuUvWWN3UdgAL6qJppu35mE67rZSg8hMSyybmNfzXNmubWnSR%2FPeLOtduqjRYFg2MXzC5%2Fmpc5cHxxFo%2B7tBCVFbH%2Bq6kqDsn6jwF2sd6N3wScqJqwMFx%2B98QRETutwqsxnpkjnAjQ7QanUrnKG3TXzJwRsZl2%2FcCPzVszZcMKNcrMz0KyET%2BJIK8I2seITfAeZ7s5ydw5MJrITby6vPAVohdOnCf0hOngic%2FyDI8jrmEvkSmDMRxVXE1ZR%2BHKOncYxYFS5ohOaDbCzXBbpy%2Foq1MgYgABF5FEnLkjLrisE%2BL0IijeUdUTQU2bHsML2OwwEuuhyirXWOu7Pg3180yOhtflM9ub70xGQHLnM01do78GyTx0rVhRNFlOK%2B0OMpkjyjO1jB3qcCz%2FRCASjlHOtLrnicmQkg0Q9FTI6QeNxmxNpCe0Vgo4%2BOAafhb7vbcZJoFjV%2FgObPTEom2d0FFx4j05Z7nU3fRhenUflZJo2KsoZT%2FRqdW%2BAI3enr6yFLzRwjw1acM7HPnnDferpMMrIy8kGOqUBWIYpzkolO86iOJmKwjrO1m9T5kc3ALBIto2lG7Xj1Oj4Y55u6Rogt2hS2yhZI6qBVW%2F8L3DVt6jgxErUghzre%2FF1XVajyOAltZUNonMKRztFNGKrVUGsq%2Fp1CJXMwk3n%2B9rVMtlKwqLldELMZk%2B%2Fx7H2%2FK0tD%2BIGt5wrjb3hi%2FMbN2g7dhMZMI0cLO%2BB5EL2ZsV3jM91iOqeGzJSCFLjcU820rlT&X-Amz-Signature=dc067917f95f9b03930701e800af5efa28a2b7d48e004463b797d30010e70d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

