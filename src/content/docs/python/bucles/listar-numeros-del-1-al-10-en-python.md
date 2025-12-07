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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGL5QY2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgE2ODPD5mUAUsWh%2Btgwud%2BHgsPBMSmh8AhfMns82aQwIhALoJ%2Fbin7MbbI%2FmXzIGNzOEvuYOLQ9hZw0oy6YC3zfbIKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYJBAgsyCEW95CDLUq3AP%2BiDJKveMJd6aAHQQLpdbLXfneD9WDnJB7P0pUiVZAkUTL9U6wTYeAXMMITNca3QdmKJLHTX6u%2FJajUzgawCpPDvWsA%2BbihqfJyzE2gcaCiCwtpaUMrZPX%2F1ACAZp9O%2FjsTSx%2F5vqawYXNX54HcUKmoyI3ZAvee6aHJO74weXPeWDnPq%2FqiuP7BuTDwBSoJxq5ygNU44t5oz7ToKMKqBDwOMKLwLVts5qPwhkqZ2qUTJuGjf07tIH5aAOlQfqsOl2bdvh%2Fk8G8Uxa3Y4t5GJKZO0Hssb0Pelym5R9M%2Frs7gYWTz%2Fndr2DINT63pb%2FQ53K8ZZKLPzJZgzNlNl8GQViCnqUErgCmtGDzi0KsV687t8FIbpQc%2Bwr2t34ABvma%2BlnkLp6Y7rHswqMZR8%2BarKsft73hodDILhsxf6COfDIJ1g9wQOs4qjctMIQ%2BP2vZynRCAq%2FZb7H4OOi60TtDvhxoCV1EUU%2BilZsnnd6q6jRysuprNssnDlc83yR8aQ4EWmmOjql0OgE36ursLsmpCEi8kMGYSRct4TRcZyQ0WcMQDxksVqK2BwJAf1Ge3mofP%2Fvy4eDpUraDecZg%2FQC%2FWqRU3uD16%2F0hSyFs9zQFL9xiEQxP6EMxLCD4%2F%2FstPjCymtXJBjqkAW9pGnMQckvugKGfmVWiNMDjY3J9t9jV8rH5kP%2BIPzGGIqfuVS1ezyOcsOwnehLx7Lsqjjl8QSUer%2B9O3qTAziWEm4fxJ3NXJOKQgtYcOuA5E4FImXDv5MV0eEJXrweAdYajWKiMzuLufLJAKdrdqdi%2F%2BKgp6ohXGmLRxyLAc%2F6ZKveMsxlD%2Fg19ubODdX7WmpHMG0U1Vf3JlndsfRHDPiWF%2FELz&X-Amz-Signature=9c970683a15f8b8885ff461748b64bdaba3eb7001630f6f96faa36141922255e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

