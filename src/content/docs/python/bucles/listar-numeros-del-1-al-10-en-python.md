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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFEW3DER%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNnG9eyLsIkf3zBqST4%2FJA850Ds8zE04%2FSNlpOwmlC0AIgN5j4VnkxpyDz%2BO1IJqiHFgTYWHU6y9%2Br69WfYDpay1EqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNoFOthQ6yLlg3KmyrcA5TQx67LPJd6cP2ONi%2FoYZSlvDAEYutvdqRLWxUF%2B1wQcK08MQtbR%2FKE5zBG1OCbWFxXLI0S8V2TNUOLwMOspZWgN2fof1OIzKQadxs0bjX8s2mJTBFm18gwUppAem4uV6kiYoPQxpF3vv4c2JL%2B9%2FnzFqlKzWuXI0uGYxNycevmutDl0UV0gsrqQqXVdCGtA7Q8X2oIfs8zkHw3oGs5KHKfAryS69OPM0UALOUiO4ZzEwnrrsrS%2FuwahkWKYtFaXHCHpbRNhko%2Fm9Ql0RikZMVr0VFsqD0iM71FD7S2zEF%2BeoT09clKWnu5OutXlaLVnHt1mXjFTKSKkKEVP3oYBKnyEjQBLAiHleOpWTSzegAh9AMNa0qFZASYLBivW8KAlHvvc1jzAYqbXq5kmgW8FY9%2FYH9JKZ0IAnddNGbh2pqbfNnjx4yiUCoj45kE1qFQqZ%2BLv0D3IsAproyF1XxDJYBjCcIzVTUl9y0fvMp%2BAwRhfB9Nu5G%2BZKy7cqPALmsiRBNb4kgSQHDhX6Yqtu2La%2FBho12u1%2Bbr9A8UvVrDBUVH0nq0cwZxdw%2BSU5ivKWq9Lj2MASUcJ8YO95SgjVN4raA5TtU6KnWl2UBITUf9sezSwc8KcDr1X%2BM%2BuhYbMLG03MkGOqUBY8T7oRFv4cs%2BidbLZbiNmYRuZ9TVoQ2SHpPyCe98en7qEygHmBF3EZc5BswoEbRTC4wTuHYDILMEPS0MfodOiO653mv%2FNIv6tOMf%2Bfi%2B83440GsvbRc2QYZG7KN5h0M%2BkTXycZEGe5QRXo4Bd8tT%2FbrYAzHN8RUH%2BP3esXBKf7w2hujSfN6c%2F3Xe%2FKUKGFNhyf2icWNmTeN9XpKuFrNwtVUblTBv&X-Amz-Signature=b0821f425163250646de2099dc8d8f714c0cf8af574a19d8e9269355dceb6d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

