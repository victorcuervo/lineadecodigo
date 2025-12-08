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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXERAPU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBP5i98fWtzmRSkno5AWDDR21gNtUbKI6ftM5Yk%2B1EZAiAfZwxt2XoybIQYta2ICJxEvb9RV8s%2F1AIwQ5Cd3p4MbCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9jl0khYDgkmiCN8MKtwDepztU8CKye1juF7C9ZXH6Gl9y%2FQjffjjYUs65YlGlfzHgkGSp4Jplu%2FRGlRUU8teVSpdfW9qnO5iR1HfU4ADc%2FqHeJiLd9oKvO6ugglypZL2GtXOw9QZdsw92KCrTVeVtz9kWbaWcQY5V%2BrAsAtnO0Rp%2FvqGilCqUnmvk9MhwaAD9bTES3zqL57zUBBN53QCBFm54GKRJUxnEvfAnSJZsoeqQulyCRuN7nVARgtnKUZ1H9W9pSgP5EiqxzW8uCCjXAZGKre4EyfW6CNswwE7bG9S%2F6Tbn0VHG2wyNF2tD4npQd%2FrY2eDxbrcTwYH1hZgR9oj%2BjoaRI5T6iOwO6fvSFOuldlaM5ofvMFMJhMAScC9v6zBVyzm2fFkv0Os8icN2OZ%2BIe5LgQugl44WOu49ardvoF8LWzgo8TnwTunaP5UAWQ2wOXDNzx0vNs%2BJx9Ik8zd1uUlAjP72PgqVnJ7ZMbyUCd7%2Bnar1%2FhCufcKBx5BF%2B6YwVIgW5Jz4rN5gmC8qnejdWvz5ppPokztGLMY8Ma6KlPF%2By9bBeodADTP1S51%2Bf%2FyQMqzPLjD33JGjt1SeL13SDbgCY1HjR4fCOqWBLehvu52fCWJjrG9EO3jy5stnV7MAHqAIKI5LuPowr8HbyQY6pgFgNULv%2FUaV7V3Bp76nojuf08r9IDHIkKea%2BDwfG3ohMWhkzWFPtRNmLRNmcPG1VTXumwCciBj3SQAqXisk%2FMSidrp3yoMN6Kog0d3NX%2FC%2BqDq3KnW89FtlgGEd5AQP%2FhsjNz%2BCK7Qiw4fDjrfK3jfbGah9CHhC97M4Rk8Ne01q4KtfdkD7rFCd4CSMuK49PGbWrpHvchLyrEDq%2Bp8f1wo5T6K5xIce&X-Amz-Signature=fc7986ee7c6337f1cd9625c517c1d801d059cf641c8e8ded3967474a2a651982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

