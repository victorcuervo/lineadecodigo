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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REWYQVDC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpd7VF13UZqT3cj7%2Br%2Fm7s37z2NA5CVmi6RQi9FSAKOgIhAJ9PvppHvOtEIec4pYKHWlhhum2Je7ugkoVFvosiQthyKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5iNPwftUioiD7DWAq3AM1pmV4aff0qStLMZySmyEFSsbNoggUO9WibvqRZFkts1%2BTs5xcSwQWxhWPznWXE0d0chfZ5r2SHND%2F2IyGA0k5frt9hyS9mvIGfzpYjPKJO7o2jEL5L2oyQ9fXlki2AlR%2FD80U86hhz4IcoKm%2FNXPdHmr83eF%2FhWnRNjyT0DW1WC3QzxfmsdQKjIByFSFDeCHJjcCvMTb6ve3v6F3dVUoc06RSb7Ja7leHduGHIqLotZJpKEbGgG5EkfKOnGZwoxHiNypB3SrGPf%2FEovkWH3IiyeY%2B3vfRyZj7cjXJrpq1AQ35ubtgu79RbbQTvshowhfGeTH%2BdsIU%2Bwd5g8vv20MXEADtNDSy42I%2FXK4GZja93Sioz5Wx938bjsFqSwjvM9%2BDaWgg3WSKlkLNzYzOmtInRBhnsm8M2Sh7NObwkI2s%2FHN0IVta8XCacNc%2B9iJZTW3%2Fy8rPoJY%2BYhNlg1y2dNoYUSc2LM%2BlDo7O8Bup%2FGlxQG861n%2BykF%2FBXt7CitOIVKL0cDVsho5567TA%2BHMklmv599jHVkQppL2zFSxvm6oDFoov6KIE5ws7modeErakuca%2FmFV1j42ED3rwaKbU%2Bg9SFu191r4fILWdVtOu5xwski6bCUQC%2B4r5j5YSOTDUrdrJBjqkAZmZqET2gyYUHmW7%2BwI40hPNKcLl8lFeQdqs8%2FFFNE2lxDJ%2BOwdbok6nBDy5h%2Bl6oJ8qgIB7XaxoAfbcteuB5pbS40ZONAOKS%2Bz4lxp1YYj7nStRDfGitDc2v4z7F3whYXUg0jNJXuvWJ8sCFdwKU8onb7pJHLGuaBoUKKomdzxVy7XZvYSB9w%2Fh4wn0aCW8Sz4j2ID9RZ95fQNZ3t88HxjEhriX&X-Amz-Signature=729f9cc3aa05a2bc532c8a1b1f4863de26471b29231b854c472881fd12d47af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

