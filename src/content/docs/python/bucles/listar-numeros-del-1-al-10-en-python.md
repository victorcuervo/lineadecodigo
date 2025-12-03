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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTUQMRZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFs2hxCuLM1kbzbTIYP9tQ6SW%2FT%2FAaAYD5zBYlMAjKSMAiAKbckhAkhZAXQW7DlEciz29tR6sLWAYNEmbRL4Ga92jCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMd3vbRulJsHncAQtcKtwD9kmbtLVMdaK3j%2FUPYS9pEEoAsknnZBsINj%2FmNXHRVxhVrblVGqWF%2Fi8L3NzkZGewzR0KOIJZTfU5r8uvR92NswXCgbLPsrdg6Re9abLWQaTUZhuzMYN4uN0wE1ZI%2F7LweT0jgJ9f4OIqp5EBGZOLlFubn5vc2R6AQDqd1lx4s%2F5w8gD6ZV1P8Ox%2FJZ1ofvotd0tWKglB8T1b2bZiRWBt9qRZ88%2FVI9XNgdlkN0WdSqfYDBQ0uvwFHirjoAB3VUOPbeO10XP%2BdfbG2rlRkeqCkJ942SFG2Jt%2BFTi1%2F80Q0AE0Byi7qZHLgDD4quKMA9IGO571nhVa8N8%2BCKO2zdT66ZNQWw%2FfWp3tFxdPP6XOj9CZgCbYKl14rUbENzef%2BNjbcc%2FrFyUI1yXxoY15RQ6tfxpcTwzPWZDO5tzkrUdxAVF5Jyrb73Fq%2BXNicxupCUOVIfwHn2CSkCaQJAepHtdKnGGrS2r3sC2vMC%2BCg5%2Fgsd7wboSrO6pxzgLBP9VAHIVgyFUX9IcwFsYCSbC4NHsjGnzqRIjCJubzbho177FY2qria6LtlE%2FADp5wtpOD0PNdhL%2Bw8Ozpg%2FI7O7ESYhH4OVFGdMTedFsYYM3Pwia0XDKzq8dJ%2B1bVho0%2BYY8wwfjCyQY6pgFQ5CwyL6Cn5gqQBUX%2BHo4antkiHcmwIvj37bkZ6zqLL4r2LHiXsl461iKYtFrXL%2BXHeMV%2BXhTx%2FkkFOjV5kY58jlKCd4xuxhQOVEVHIvw%2FnpTsIFqvfMHGuxZkmeDg7UN8idfe31IesKg%2FXf6EE77K0rlwAXeI%2FFitC%2BQvUcZjxdZzsr4VmD52J8qtVDX5QcsQSJKChcZDbHJneIgLztF03oMkARt2&X-Amz-Signature=961b107842726db701a085fafc42b59a596b5ea7be1fdf5472d941b75756f870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

