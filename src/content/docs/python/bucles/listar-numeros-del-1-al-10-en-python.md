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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKZJEY2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2uXCWVxa3dkTVO6TRUN2PsQYUJhKTPzbujOatBoAk7gIgZ0m6s79%2B4bVfsv%2Fm1NY7x6Bn6pz2YumAENvcwsDz%2FjYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRJdiWvKKYz5xCI2ircA6%2BuvZhnGsw7YmvPe%2BribyP6k6kHWEaLIRS0g3lRIZM12shQq7rqbXLfoK1du7%2Fsg5FAp3zCygH%2FCyFaW3EP5O0elEtXLmJmZosmamRJtH3BX5zXBzPfKwu6GJ5M7mXlxgSEE%2BV1ZUwaCEvPViysIk%2Fbl6kGJZMN4pYwvpInCdRsh2mNYjWrWJ6M6XNaGatKn%2BaPPvg4jtLeVV8XI6LMKbwiRdoIHo38f%2FJYG0KS2O367avj5YUs2XeCxigc9jNqFQPSJTYc7aODxkx1vt%2F3Qd1ZV4itrmCitFxUbL%2FcZ7tbJaxnmFRrP0jz1IvpWFZxaKFsxdQ10XtnZ476yf8QRHrOr4lBF0FEO6tbExXfMlHe4xMMnjLSpP54tZzDEynywLt0CL%2Ba4frOC29RPuaDJBaFehjH8rq2qJe6797aaUUDVdrsn1b%2Bvi5OgwMx48qb0xEraJKYTh6u2bPRu5%2BBxwq%2BsjGjVZPnuWKU0tvmZj7KJu%2Bip9VvcPz7jlwWnDQFGMODA0VjX7BY%2Bbp8uZNQpncp9aIzbb4kELimCGsXugHGeDB%2Bd%2BU7IHAPjVfpBpUOckNuFE203zWiMec7jM7a9SfRM3252%2B%2Bfmt%2BIOguennpnqbl0Zg7iEN1l1ekfMK7%2B0skGOqUBKI7NxcTK836qhh6xgC8T2ej6NYIGy2p3l8MO3dcdXEXGOFd8PYrT7lm1WU4kYQTqCE9n8Ypscu664AWSmGU%2FEuWxd8ipDzn4EMeDBc8EBav%2Fz0xA8W7c5unCDvNs35d3Y8qQFYBDxU3%2BPe1xW%2BkNBhaV5VspLK7H8CvpxFtOdc9DSnRs3PZRo8vDp73eAy578I3zkT2m6wOH7lwsYgYNAwuhjsCQ&X-Amz-Signature=3b9b5df097ac6ef4ca25a5b7fb4f838add79ec29116dcf401334aa63be1432b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

