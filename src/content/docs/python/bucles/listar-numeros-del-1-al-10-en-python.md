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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655EULBLZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDoV7zDJ42WJy4yGqMMBeEk4JUfd5BrJ5zQLmXYKwlGFQIhAMGSi78dDMHVY5RXkM7fYNfsdbSnNhf4m93BSk7BxDwkKv8DCEYQABoMNjM3NDIzMTgzODA1IgyUXrae9XJanLvTU8cq3AMIi1aWr2knvrkKhdtAqemOZJQI2HZRSPpRmCFZZiOecXxxgrlPzy1ohy2EuOmtsV3aGgL8PRLLtyygxpE3Nklkqe%2BCb%2BNn%2BXB4avfIftkf%2B7l2wOyPudOFpKHqTw8nVCB7tZq88CVjdLFoE%2BuZUysUFSWcTV03fTBP1lOhf3L9Gju0pbgVRCXGzo690p55LCrLYy%2Bf8yU9OraJd6GD7OzOkIFvasjDFcSeC7RWOZ9rCWjy4Cb%2FNfm3%2Blzia5lGLMIA1%2BSPUbYHNXTC7SHK68zPdXrB02H4IktVVp0vxLsmHhnnshWba75Kjf3DCyvRnxPa5HFcewN%2B%2BRtgto%2FB1McSDVTVbL95BcJdY3669gIxcTSYOBfDpGCtSPcA9Ev1NT%2BAH7NmXQeBmociYg3SurgaOhL4otAvEQlroqO9WDWHH5BERD602TnypAIFg3EIREJl%2BQ7Lo2Pk0jlL%2FUx%2FjIDDqhZ%2FX0Iz92WEFt%2FJKNM0dmiV21ijmNH2%2F25vJ85QAu4fekLDlPvb95cGyEcpClg5liF%2BQ5KnbRxhSxhkwWjBnut%2BJYHyaS8zgEYv%2FRBYKugsN%2Fd9Wo2B9MiLC9AZ3%2FVidSIme7GX0X%2FU4j3KLxdE%2Bnav%2BtWhhm%2B%2FOefQFDCbg8bJBjqkAakog%2Bn8F9LUzst2DwK%2F2aSsa%2Bod%2B7kvucQ4gelu9Cc3%2Fsf%2F9NYH%2FM3KxO0qmRqy%2FUuVsUQCX9rl4fqp7u1w6MdUELn1LQZ7TBnn3i6hGdpME8p%2B2w83OWphzyOHrHzn%2F1u1c3laJOB%2FToXWO13wp6HTVCRCUwW8mOVJin7slM8gt%2BZWfAOoXN7dzQ%2BJ5uT1ar79xWVp%2Fv1n%2F7KBRWcYi8we6uTf&X-Amz-Signature=f3ef9c34e9c75e9ea979c63d07a13d8b994c3708fa7a84b6c7c3fb37ac4d7e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

