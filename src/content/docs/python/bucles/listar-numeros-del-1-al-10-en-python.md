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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQYC3FA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDVw3vrCP%2Bzysr8XEPSgRuUFWqfMu1CGl3avy2x%2Fm4CqAIgPXDQlm1ANhKQzpUOlirlSx9hjb3lwXN4GcrlCoS1EXAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO3YVuuXjh38nkRp4ircAyKGcrG%2F%2BhnNQ6mlMdWT%2FjChaqdFksmwA8APGVXs8j6CZ8jFZLvvaLVJvsjVPBbwhDo1hwZV7Xtcr%2FdZvxZcvBI0hwpr0W0tqK2mEO6dsjAqqqFiO%2BhO%2Bx9qU9P4603vmOht%2BwUhF9pidPQj4KO64itZbwMBj9wVijgGTJFOdpE042hiHAZNlp%2F9QjvsliCNo6IoRc%2BIiqn2iqviNopLD8hh52EfIP0D2YELtJaRasSt5EDYRRP1TMpYtr1GN8OSbx4zM3nwq0WBxXpC6981GFrdJNVy9g6eorMC4GFjaws7dXek0zGh5wil9yaFnTNlnz2P8JL4RetM1tOJmyafPKFBYXhBODSr284sGqp8RALtVUeptESxzY%2BBTDGeJuRqo%2BMDPVgEQMlJMYY7R0c9gTNaUWRE3mvNNE5VwUhJtpwWrnF%2FfuEZ49dulqmcVy4XG8EwTN1EQKSgtnS%2BnwfWhXOLefrr5hkxsSOhwLDmGSwAui3aynyPOPSAsaO85ekrGx189%2F8x3Sai8IJlfDBjgrhQycmAWO4HX3L%2BTVkOjMGARamoa4PbjNC%2F3U%2FSoy%2FyVgVgP4kvgM%2BbxZ9lrY1foeH0DfX4FNRYZ1Z77G3yO4tpCer5ewahyf%2B17SuuMLXnxMkGOqUB1JL5W%2BixxLIu4S%2BqKy3b31RuZjiCIZqyQyKn0K%2BtDBRXl32Q3VhaC2K96C%2FHLgyWGeYhP42ZqhEuTCDgeFL81XBHPU7bNHLlzg0dd0HTa9OJYx22Xb9I7MUdHIZvYL5K6QdK3l0CQR67xA40vohM94WBtf4ADGklT%2Bm5%2FuHJoZctz9pKU4hGgX3ZA2mRepYjLlTXLHti%2B6ddfx5AnRCR5ICwzydP&X-Amz-Signature=ebdc8e0304dee51b12fc09ae39b5eafdbfe0161fa8685408739e28bb23a89870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

