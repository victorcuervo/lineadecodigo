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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6TREIJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9eA9JPQNes9tJEOXQRd%2FSQIL%2B4i6w3V2mnQdYIivQVAiAgW8PRoomkgjIC3EaCtmJfRQEyfgjP7Cv%2FvOXRxp8iMCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn76XJ7agtxMAyBzZKtwDxCOXMQvOnT8cGl%2BaRNcGfp6xfKfr6BJ96jU5KzKhHlNPbbSkMYIEcIG344BtABNiEZDBoPCHZC1YaOFph6EbnnYLqCoM9zBDovVpFaWdQDqFXye03Zjyzbij2NJetYFFgLprq%2FmtSUblsiFXSp5wNz6eA3g6W3uZWNwWmuDJxQvpSsmK%2F0NQdNFzPw8CEmcdGqHl1f58cvnRB5NGrm2OCP8rnHBoQO4drTu5UVSQcDhYHv%2F5ED7NdHhGLWA%2FDoEJlvKIlZxMspIMqJH%2F6HTqm0tfzGsdeL6tUlr1qrwf3A38u1GRtd%2FCJD3LWXuLlQxsMuqvRA4GZAHved4EprVSKruwtczqoOLiGyt72qSMvkHMDHGVZVxoOjEaa1xlbOCCi2Dm0IuLFNCgFcdwv355LOrcRGBpdZFFIHZZravhGV9abvYzcBXLSdmC5Q0G88bvMmoBBVDbzfGkL%2FqoEMpa7CFP%2FdiIcW7nTADSxC1Q7NY%2BiQmTg4JQtcQR2%2BNptPpEJ02BVU36buHmjTBOh1RxwfchNrt5hOhhdGv6j0UCdP9bRmYxStbqmkx26WcP8b%2BKkdes52UyzLy2YMq3R3yLkqEtCqp80NczNOA6NKKAv9Uu%2FUzipIZ4hXzRSfIw96HdyQY6pgE6zVZitRwkV6JWW%2F6%2FvurxO6W1%2BYDQ3N%2Fvq%2F5vUa1SLt%2BP3BuTEe9BMn0GyA2eCiLAqVRcOXasMPFAy0qeO5mv7KuopRZp12GwYNGmSUr3Mz4o%2BIes2ownvCXVgsqzUB3iY3bk4EVgqGmUApNsEJnHTQ73PDqr7ahHlWj2JzaPM0M7tJimNKM%2FWKgoTSdaKfT4xJkbmtEc0gIjF5GjibOeeBqwT%2BA3&X-Amz-Signature=a0ae31171605eb51864da7b7bc43705c99e90baa05567bebaed54bdb9c87739f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

