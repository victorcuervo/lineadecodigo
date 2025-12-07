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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBJFFV3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwxAse2EACu9jtyoM5HfZC4FHNZcSkTbV%2BUx4nAFBZaAiAB6OC42kW5lmCWDZ3w%2FZ%2BkNnaUVBAA8nVQBBGoeL4BciqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPRHTwy5bMX5pnaKQKtwDxo%2FdaCX1341p3xtd99lTOMHg7x7yY98iXJeT%2BI%2BJJrxzLmyRc6bJFofmjDxz8QW4Opd9IviFjSvOSO2TEMD2NjjOhWhvewFCpgAgptfdo%2BzBCPDs2RE7KQVym5EmmL7IgtbxuTlir9Ugq4UatqJzkbuK%2FjTpqm3eWZiVPnyM%2BI2rcJqxazXkSfOlBerVuMiEWR%2FG7QPonzPvUS9MgO%2FQYq046%2F1FuNLkML2AseSSRJHdai4kwReq2iTY%2FT4Ssgc780bTBfM75Xa1WSxh%2BuAOFsFf7ZjoYEmCR2rhnQZi1FkD9Okop3j1T2F%2BEsYIzeLmqcua2%2FuwXHeUXbVAcKkBTcv%2BaTDkL81vYZc4Y2ugwl4uYTIG6hzuDDk5dFCzDb0zi21YeeVFL9doH8rfdr0Ot2lenPv7muamyJpFQ9NxcjtwkKg9%2Blte%2FksCVqASaznvyKs5NhdF9uB2J3%2FSYeZ61hXdBr8xyQRD%2FLYcaK0SY3dWfEWPw1hd836FBaUP%2FM4Sb3pElDP9kgrwRiw9BbjjS%2BJ12bfqM1cUNBtzQ8%2FjbrEzIcz03zl109dpernHV2m7MbHg9%2BD0oUGNWYfQqo54Y%2FN5HBoFHTQ8LF%2Fjpr97Xev7tZ2OFoM6oW9sp9owwpnVyQY6pgGtRD6SkU9R0YVNF5CW6Qu9VG%2BW3t2kLs%2B%2Btjalmjt5JTEfooqZc5X0J%2Bxz2ZXrVZOJCCBx0pOcXPRlemFXBBDNw7yKzmXLqh%2BKlGtfn8R9FMol1UOae9URFq0C3oR%2F2YKXDDMalntbB5C3Qp0YhKGTs7O%2B64wbdGkFEcVU%2BT8IwZoh7AL4ZYQjaIKfY76CW0cOB0FPQWHsG1xU9XHFDjF%2BHgM99cM3&X-Amz-Signature=4ad432e7a8af4a1a4fa2c6725c43f9ce4d3b84a6efe9275d234c452517560294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

