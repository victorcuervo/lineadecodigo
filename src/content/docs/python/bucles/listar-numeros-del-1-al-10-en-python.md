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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRGJ62E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXJLyEt44J8Yq9V%2ByTHP7JrhlJz5lFAyiUTXiMubEvtQIhAPwMLJHk6ZCQWSEhSYzzJ0xe7xHU%2F7nGqG%2F9HEPFFYhNKv8DCE8QABoMNjM3NDIzMTgzODA1Igyv4PsOFAZQRpxqItMq3AMvdECm3vGqDztn14ch9vQYXYvKtQpHsBDkXa2rhN7smlf%2FVfB4%2FPzRnTtsdg7Lguwc59oeoNFvs%2BUx2ug0LarKbATa9ZYXTjY06Tc95QXYSfQPhypc3m7HyGUk8WZgGR0QmZeKZDIXRHFyTOuxWGZ27pC7To8uIIO9%2FWysr6APMCBh6llJpwvpf886lDkHbMRTfx0O1D9rsvtoSxlfTTSI4srVIfKWR0TGBaPgc%2FIIZhBQY1Y0oDq4MuyM36CfBMI0qEKr3eQYicZjkh4otMjX0z62xI8cr5oKwPq5U3ismsK%2FmEBAUt8sY8IZtUXMM5zVXkAcsuRjsGk%2Fsk%2F5iSUqR2U4VWo7mBVifqWexXlW1xfqhrFOrXOwQHmHBu7ShMPOXnqMlyT8qytE1U3wZ7pGzacgjOOdrmJxvwMKHgx0P%2FBhdvJZ0%2B0twn0USCb4UxwSRfrCItuupwXxrV5UNApKeXHAkzK43rWYKg%2B%2BCQ44ifRfCC7RpxUYnc1pXDlnWCHaJ2N7jZ0v2UkhOaJiehNEefdtW4snFlsdmi6m%2FuvWWqW5frn9LRUGzgKEjvnAcs9T1VgjtngSYKYTaqzRYKegLV1M7%2FSysCjBgG5IUgqHkYsFruzzEt3e68K8ojChjMjJBjqkASc0CfFEdOrXXbUcwSSUs1P9cqMgvV%2FlwXR3uvWoDFfBXKlmvdjc09wqxMI9zV3b0VRsK21VNXdca0yAy83SB0%2BohaUPARWCAJ1JW5zPfDgUS9HX6nXPNfilDef%2BzMyjwoQdzXlOa3HEFYSnF7aze%2FMX6WOrd2M%2FvTWGa%2Ff3R%2FLffM%2BfxdrTVTgECEDELqvhQMnfjY3fLCXhZKFTIh55HlLaQ%2B2K&X-Amz-Signature=790fbb666ca4789f8690f866d55963d4e82313f8b3c5e4289f4d15a64e9777c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

