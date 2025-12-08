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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SMZ6AR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwrlnesnTiCy%2F1N0rvDYC4uuVpwjYR0goyzsKvDBeMGAiEAl%2B%2FIUrvHuysBliAp4KCaLX4G9SRfCqM2VaKcs0FsOboqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpcM2zZGA1lG8kMXCrcA52UbkQGj6db5xJK9UoSTyt8PeS1Cknh9uImt0jGutiyIfZdIvdPY2WFJYZBMWiunXYbEONf%2FJ1p36DQsMAsx%2BD%2FTrn%2FHBuhXMZWq%2FBWEzJhLggLgqNWsyTLPCGj%2F0ZJY4yu1%2F%2BPisjSgU4FZCxC0DM0Elau710roCVbE%2B7bM3Akd2RvDG9Kgmfetf7c%2B%2Fsm8st1otNNdh1vpzgiygMe6jkN6Dn7DiBBvJPkzzrcc4mC63JKz342ONCjENoEAa71Tg9n8%2FgsLukzFqnp79NjRm8iczvCr1VQujMRssxiNh5saXM61a%2B5LfJIwsp1OHV9ncH5dHGId0RiZCdbhwXHX0Jb55jYw40A0%2FrKBdfM3byLIWqdyqRxdaAmvzf4IowMYDXUZ1bLuW7A31wI%2B8rN6sCsVUh1FXIhrgAgRXx6V7zmLp9MnA20u6CL%2FIkVlRJZQJ3JcjsH0qNkAc7gaAJpTxHOQgNdcCZF3zKArCp5vXUfNfRtd7pSFtlMj248EpfMaQIdvVCUz0h%2FHovGWia1%2BOIzrfpcBu2fWEOPy4B2IPxLbiV%2BOalXPVOHOW47Q9JxhaeiM4B%2FAKk%2FaW0hio9aJO2AEzgYG4Tb3myYLSc8f1iRwLzeO%2BvJbCrLM3zYMKru2ckGOqUBDD2txgZHQ4CkDvbe05nRFbYS%2BdeJ7ZOjvDKo878B3fHcOQ5lYhbq968ef95C7kcPMJWY0OHDEfpYE6aMe5qHw5oJesEjxRxShyKJhKtMJww1JgKWEi6owtuvCjMCqdCHugZTqmZq6V3TOPPP0uxSYkRQ4l2%2Bv4acnzPpvbeUJL4AZ1gaGa6%2FkW%2FvIG%2Fbi6OSHWiTyh1CEnB6Ual9g6a8bY1g%2BfDu&X-Amz-Signature=5b09f54f808f6561577a87835360393a572903af418dd2de51be2738a303eb1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

