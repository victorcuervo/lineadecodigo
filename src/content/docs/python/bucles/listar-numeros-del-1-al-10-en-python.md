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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MR7T2P4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDLulWje%2Bp%2BCHKh0ULDG0MVnhpkzplO06DBFe2Dz6k09AiEA87fLQYfizDsi13v6xgyohZKk0XSxkuDyu6zotNrB60sq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDH%2FDl6XzkBoD50trcyrcA%2FkOV0Hoj3oCmciToFDYbmqO4WWCLGmf9Iid5Y3Qw%2FnQLtfKkUlW6wuA7JZvG%2F7qFt37tmyoL2YqSusV14dn%2FOmnzDOC3L%2Bdb04A1S%2FdB2PheBLpQsyX0d%2F3FlrQ9G5bNwRXSn2CxAI27PUa9YBQmsoy6w71yKiuhIwMxkLa7VRww4h3wkHIr03MZK8J%2Bx2%2B192LQWHvLjx7wRSxSJoyrIiaOR82vvC3T77GNWc9VbNLWSnf0nhB6RlMa6LpAAADPfMzveMchYE1RH31eUYNQrWDvjNsJcVQE6mOrCvCK%2BpFJzV73q1gjGF%2FqMg5tA5u5A%2Ft2Jg7DXb2U2jBMLofqrADmdh8m2kDFmh18P2rlFAzWRxVuOWwYm2%2BKyauTw4SA6qw1kZ%2F1uXcKz3HMyu4NiRb01EW4Sf9YmhGyMoHJUSptA4RrH%2BD9unLBATeVLchXUaQDUpM%2B2qbrr%2FcRkFnTv1g%2BxQidq8xUjbLEfGgCdQAlIko5eZLPMtNkY6TzkqNppHcLdbYFQ0iwN0j4NJJC3rYmiJEnotnNgFJh81HsVFSflFkNqlypw%2F2N2xNT9geWq6Pwj5kexzGx1Qj8BTjfEkz%2FtXkHVdyfKjx7ztKZIwFxwhdJb5xQ%2FTq%2BgX4MOD3wskGOqUBaPX7N4vkRWWKvGHACp3%2Bi1LvdBAysH9PmOtR8plQdI1nQ458lQyga28h2znPHJcn%2BOb9lJvY6J5WL%2B4fIOnKtd5TYtGfY3w%2B0Dr6KZF%2BoHyeSrmdbGKjEx7VNs9Ja3CA1GAj6qCA1YM4q13Pzs%2BcHWIj4y1DWs71e9b4dFFfqQHik9y79%2BnXyumSbjr4EmSI4pE6JMZ6nSxkYQ4KJbnVbNrwhXh6&X-Amz-Signature=1e9afb613e42d0bc5a5fc5d7171e7900b18cad0198f90f9e84c2c7df814755f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

