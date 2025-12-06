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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVM5XUOQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMrUqby2Qy9DnIpIMIwWvuhpIa2LNCuE9V9vPaM5cZsgIgWbv25AJe9v2gh%2BBSVZ3%2B3y3cECj1lyNdU1%2B9gcI78sAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCBxr2oke%2FQtpnW8bCrcA%2FTiGadAylcPo2XytJ5W2T5JZUsTUviFjbNRfHDj4Je2qIvqqarY1%2Fhcv5a5wMhDky8p8whKbfdvG88eJyRbI8TB1M5boJtuURiNMY3%2Bj3TxVZRnUcqWqXCK9ir3nKaw5583XbYIDQYfiga2jfEkRx6UnAmrtibnWNW%2BcsO%2FZu7Fqk219Oo5eePRvluEja%2Bn6h7wD3Tv8683u5hGqwIWngF0YUA3lb3VZ5B9ED%2Fyq59rmmrPhWHFRUmksu7uS0DpC%2Fpvhdi3pjEG1dy95QACajOkJZtPtwIrDoTuadmQofu8NKZ%2BAGzV2a%2F6EvEORUJ5oc7pnJ7QUcu3aNyK3xy3lXSXUXt99vjs%2F%2FqZFd%2FimTiMSOSGV%2FKwD45u6J96UCsSJ64o0BMoPCSVf4pGvkoeebIZdpn49zBZcWSqhpa6tNDDZ%2FDIBsr0gJyqi8dpKr%2F%2FTYY8gzldTuJljD7UiaYqkRgBJ4qmZb8%2BrJhpUUQhl62xb%2Fl3ArEl2ubF9Ah3x0zN8CMJwEfiaPeW4CYfN0Yfb3hrgdqxpoD8OJ9Qec4uozT4upLTmDwv%2B6jf45zOClQi0WIPqX9hLUTrx0rRAtUct3ZjLOmFU8SfzCtoZwU1QjrC%2B3acvqD36qCrCI80MJPK0ckGOqUBwW8qbfyQ9Aj%2BYxMzUZU2WQ3nB%2BPqCv6mRuf86lFEsP77gnZCwb3mtXTssE5mQ5nbBLO612QRrlMmC3G4lMF2COSiNVcKUUfdmYndHOHh9ifmswNDTkR%2F8CilAxDC8O8Xwp7xGt9h0FBLyOmda8oKXOOesw2MxEL3W%2FvPOF8vGnbxi%2FM%2Fe%2BRN7vryc20KPl3yL1ElhqCvYG3zY4HA2gjIielAAfF4&X-Amz-Signature=667ab2934ebe34d903ef8f3c8d03b2e4874234bf52f1e96fb6a2ae88eeb5c907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

