---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIXV7WO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE%2Bw%2Fui2EgFqxhnwq5kzzHlH0yzQooLYw9bR9bILK1DkAiA4nOupVXAED24Cn5ZzdSUt7c1LxCCAhmRj9MMEQkB%2F2yr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMy23qfZkPpo6fwy8yKtwDmIrxrJut9L6DGeM9EebYrIMUBXI4Y9CpxUoZu%2Bl8SQMQqdXQmMpCWpqWPONW2l99SkQpFuHjgrDlS2%2Bo8v1hTHnSUt8WcKUcDNIo7ooZtzDsL1dOl0MpfcN4C5Z9KTtsHuh8vbdkCHu0NDK7bvm04baUINCkn4AcB6cnyZCmDyIKjUBMCqmKhogXQPcS0Dyc8QpzFljcfhoqT9USm4IxPtS5k2VnPFVpKDHlED%2Fccp%2BUqPwQ8s4buJ4j%2BNW6qHTA6W5KRVPWmD31tUdnPHhReWNn3ktD4n0y10%2FRx4q294cIFB6ti5LxYqWUwhYJqs4S7TsU7HFptRxHkFmcXIAYbWPoGiG9hfhuN2DwT6jbIHlxXqeXw0cQBAFUArye%2B8iA7JAE%2B1ORIPc1jQToeeCIdr5yFEblAq%2Fg6SVFCxY3A7kfGlFjAbmL%2BfZn7GGzluJJi%2Fwjxu9Nrg0gFeylFNLvoSCKNk03xkec3scbDLY0VjRJJG6XiEy%2B9y8Y%2B95SHGWLFJ2%2F1Q7rjYxoCTOsyiLQX5TCPwB67GCWsMFsTiCyGxHRI3cS3KSLbLRge8W1CwD2RR2C4ZTpbNjxk98u0Kb1yN0Vt9SBbr0uzoDdx3%2BjLZ0l5q9mEy8s%2FIiPVo8w9ObFyQY6pgEKucAr5huDMcofJMLnHrtajqHDdiruCuvsKKpF1jHa21CCx4LOIYG5bA7PAwSZeDAar%2FYDmXEw8y0wlXUNjumTPgTJkwr1psJrqvzUtqgcaAPipwotop340L6PXeojE9h%2FpDdsGe6VrEq8%2BBmTJpIid80k5W99h76RLdZac0ivm0kbB4CWjTOxXkMdVxyNQLmZMjjmiUR6BDS0HoZQXjfuBnrMGv8g&X-Amz-Signature=15833372f2087f0018427974cbc37450858fe7796e0a7e2c1b2936cb4f582662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

