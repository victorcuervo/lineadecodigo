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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWRG64S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCczuyi8TQkKCDshonhQayjTMh9ZUjWupvVWuT5c5ovsQIhAKkbTClli%2B7Eg8L84LVgg9MSpkIaRhPdYAdgcygf1RyPKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuCzvFpwFqNNcJ%2Fo0q3AMjdIBq%2BP8yODGCkBmMe5Uhkt2HUIbue%2BVQ4L1Wsi5QUCrlRu%2Bp4VY%2FbJ8iZY8lNyYp21blUcMiiFExGzgK2uAJ6iZZfevP2gb3aAYT%2BJn14v6k66lKMFVW7dgna3mF5nyhGHiwgIfZN8RzDmhZkoeFeiOzy4endnCtACEFK1mz3RnZY0x73BdFoSebRl6Ov7Zn1MaEv9YHB%2B4jPf9DHvS%2FKbYS5%2BvIDlFFlkER4bViooS04OcID%2Fl0X325RRsCIBeOidj9wrkGA9DFPXIGUWtjPj%2F7JC3TJircWgvd4UmFr3j0NfJTSo8QyuvbgKW3LFnCS1s1Gi2L3chON4W74cw%2FgFrH8HI2ioqcs9a%2FwwL2KIzVNgpjN4NWbyB3Uhjk4ka3Bu1PYg8p3E8eVRDVX%2FEkqAJ%2BZOx3Q6opj51gJf1me4qNicB4fgcJ%2F%2FNiJ00h3L4nbuS4f%2FU06QctTTAGKyXmuUu9rgl1LqypvRRAzs8uZ1ydNG8QmK4E1Z9MIuMm%2FKKDFwZ9iM0hHm6aIQVPnV6ZR1Zb24dUzK1u%2B5lf2%2FpFf%2BcVIqCyIjiu0sW8Z3BYal96S1KtAecoVlQqpLY59o7uV3y%2BSvzyG8I8hR%2BAcPvViHv24O9JU7Dl9Sx3jzC87dnJBjqkAfdOSUKquzXM5YhjanFx0XTJBNsrfUa%2B35ldDmGcDgX%2Bl5nONd8nZ9YKboqRzaQTgBWdAA0m8MqLL6%2FiK0NZrsjvIi2c4QMoImZuDDVYr4ebIefEfB2kat5TOXFnnTl4yVz4IqXLZ45f97Sl8gFcZ7x%2FajW3qNSm026GJsC57F1zc0nuH2rQ0PtEyCdxAaXhxzPFJiYew6XOVPSTNHgubGJ9zzVo&X-Amz-Signature=a2e22d3666b76ca623e6527588a62392ac3e4e7fe4bf1f764b8676bfac18d16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

