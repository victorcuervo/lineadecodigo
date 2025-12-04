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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JS7VBL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDypNMwKnUuoqMXI0WIP88Nzoe8eNQvDyNzZkGsul1VwgIhAL2kdgKY%2FDQi4%2BHYiiFs4a3f171Jc9KA65N8%2FoPmjBa%2FKv8DCDoQABoMNjM3NDIzMTgzODA1Igxj%2BimOpgi5n6yuURMq3AMq5P12Xe72MBgzpXcpk%2F7wvHTkmqz1soWR%2Bz2bhfq7T8N1wVQr%2B7j5A0l%2B8uUn8aPAMMd6MxQl3RkpdT7nEdbFR%2BMDWTvbhMMXXxHClNQBJtnsyyTs0rlWGSH1d6FEplRjuRU9rNQbys%2BlQbaxxHHA1zT92dyHAdXAympsCROIV%2FYrBDeL6ojpNaWgNR3i7POTn03v5pFinqPlXLwnYYZPJAlv5lb%2FpbiXPA4PUokYT5w7kU01hTWx20x%2Bmgxdvvi8Ew5kY3OviIoHR64gi2MdmQYZoQGMTs10z0LErRkJ3n0EMKRUjHGBqOq7UDTTVYNl3EzDNDCwrUKKXV1c25U8GNaxCAQqDY6zHwOVQ%2BN5YEln4V6OIoYhCWP%2FVc78qUXmdggClv0R86Mrj4tcdkG%2BfLbkOA57%2F8iQX8h3ZQUvPPyYBYZlEV7TmdMk3LS1AcUVy7DeyVUYeWjXRbcIgRRt03nTzee4m0EXT7j%2FSoBjyqwI8jxIfDdzlKmoF3nOS9Hh5%2B7nhqarHG5Oq3%2Bz%2FWoEJDXjfspbOHsc9lxBh1wW2R77%2BU4HBIM9%2B59pHuT8zJiQSOvJqwgiPtaM6MmTxiBd%2FY%2FR1x84YhjbOnzFjdPFo1FG%2F5GD3V5QhBNFUzC8tMPJBjqkAQxuqZYt%2B5WwNYQQJMyi7MI3gxt0PzxwpwRts%2Bf%2Fbv2BL%2BSTkvhgdlprHjXwikxY6tUKjGTKQg4GfD%2Bst%2FDfQXKcDqbLbI1WJAZ8hGdH6hJ4l5wE%2Bnq80Fs7MrbZACdU1tZtalZFygoM8fQ0X3RDT5mdp9yGVCLEsDEF25P4%2F8OfyMlhefnb5jyCq82FGNZfKEef5JaRfCdC7uaJrGjTj%2Firrw%2FO&X-Amz-Signature=b3f039b80fda5fee8691e953669ed64399bfb60b5637615690a9bac031a798c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

