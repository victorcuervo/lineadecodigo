---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

En nuestros [ejemplos básicos para aprender a programar en Python](https://lineadecodigo.com/categoria/python/) hemos visto ya cómo utilizar bucles para poder listar los números del 1 al 10, en este caso vamos a ver cómo podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


### Uso de bucles para listar números


Lo primero para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) es conocer el manejo de los bucles en Python. En concreto vamos a ver cómo se maneja el bucle `for`. El bucle en `for` en [Python](https://www.manualweb.net/python/) tiene la siguiente estructura:


```python
for variable in secuencia:
    # Código a ejecutar
```


Para conseguir la secuencia nos apoyamos en la clase [`range()`](https://www.w3api.com/Python/range/range/) de [Python](https://www.manualweb.net/python/) que nos permite generar una secuencia de números.


Así, revisando la sintaxis de la clase [`range()`](https://www.w3api.com/Python/range/range/) vemos que nos permite listar los números.


```python
class range(stop)
class range(start, stop[, step])
```


Por lo que podemos sacar todos los números con una secuencia generada por [`range()`](https://www.w3api.com/Python/range/range/) de la siguiente forma:


```python
for numero in range(1,11):
  print (numero)
```


En concreto hemos sacado 10 números ya que la clase [`range()`](https://www.w3api.com/Python/range/range/) genera la secuencia desde el número de el valor de `start` hasta el valor del número de `stop`-1.


Pero, esto, nos genera una lista de números consecutivos, es decir, nos muestra tanto los pares como los impares.


Así que si queremos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) tendremos que comprobar que el número, antes de imprimirlo por consola mediante [`print()`](https://www.w3api.com/Python/print/), sea un número impar. Para poder comprobar que el número es impar deberemos de validar que el resto de la división por 2 es diferente a 0. El resto se puede calcular mediante el operador `%`.


Por lo tanto el código de uso del bucle `for`, mas la clase [`range()`](https://www.w3api.com/Python/range/range/) y la validación del resto mediante el operador `%` quedará de la siguiente forma:


```python
for numero in range(1,21):
  if numero % 2 != 0:
    print(numero)
```


### Clase range con step


Además del código calculando el número impar mediante el resto de una operación de división por dos, vamos a ver que podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) utilizando solo la clase [`range()`](https://www.w3api.com/Python/range/range/).


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKRRZ4O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD8vFeWmzn6EL8Fm4KtNKfvx%2BlrJoWtw6CGl1q7QgEgUQIhAIVQ1bB6vtQnby5MYxymaElhlI%2FDSSp5%2BwGifhfAE4ayKv8DCDEQABoMNjM3NDIzMTgzODA1IgxnX9qM0MuAzYeBktMq3AMhmlOk3voKd4Hs9yGmEl%2FuLIoTB%2BzVDSAOODmgFofrFaBzJ%2BbkbtGYtLKFioSgynhWc%2F1xYzlwKUgmDh7b%2BO3CFrUSYZUR0c70SmBMvz8XXflrozfwUjGy52jeKXd1kPeFiXTmxnguBwwRhXWPCkEnX31w82nJASI0pM1m5QWPuZjR%2BtsaAHUdX3sI1%2FyBzbVNUbNLcVAzWmCsdtShXGtH%2FGfGtjTW9HjPYwR4vn9rZi2MT6O7R97nqHFOByGyPExm1d%2FOCar78TMkXgBHr%2BfcG0mxMOqlGoetA4UwDJBvvT6h7W0J5haJeqy7P6sSEzobeNBaNTgo1gySsXvkEn7lDkdPkijJrgJ2kjTVTZSCamK0uQSY1AsfXsJxJSsKRWsISybay45EftCoK1MkAykXKv%2Bk0szYxb5OPvyeDTZsE7i05f8wNZZsijev5NnYztwMtBoSUjQYyaiErgiACwsVf9A1jFOALP8h%2FSK5A9KT5T0GpyUEusSeMZJh3%2BB4hFjy%2Bzv64KCwRwe8bC2rTNpSiRdto5gQ%2B%2FZ%2FhzQPnsuvpkJdqcEPvCOYyacBLzA6q0HDKKIeyqsZ%2BSm6cnRffrqoEnItGVvTx70UqC6fztYTrhDx3VaE5ZqL%2F1JrwTDNwcHJBjqkAWJiRuFOd%2F6thxXs81z%2ByDrNh7Rd110GsLKc7Rt3plOaY%2FkcU%2BP%2Bo%2FKgoqcdl4AXA8UwOhkLcPjKDF%2FX92i1WQWQkSw4BJB9SbRbd0TjDTN3O12NNi%2FHY%2B%2BCRkwsUAXG%2FTa5rGJclLMud9MTihK581GS1k%2F242gfZ4OArFfBjbntmexVq6VZUQpO%2Fau1XaRnDdTq4OLp5hMqYmz3YASpaAaln41r&X-Amz-Signature=1765d0c8efa180ba2ac7f1d31d21028f6f952991eccc7628a34f7f0bfcddf487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Mirando un poco más en detalle los parámetros de la sintaxis de [`range()`](https://www.w3api.com/Python/range/range/) vemos que hay uno que es `step`. Este parámetro nos permite el generar una lista de números con valores de separación entre ellos.


```python
class range(stop)
class range(start, stop[, step])
```


Es decir, que si generamos un rango de números del 1 al 11, con un salto de 2, tal y como conseguiríamos con este código:


```python
range(1,11,2)
```


Veremos que nos genera los números en saltos de dos en 2.


```python
# 1, 3, 5, 7, 9
```


Si cambiamos el parámetro `step` y ponemos un valor de 3.


```python
range(1,11,2)
```


Veremos que los números están separados de 3 en 3.


```python
# 1, 4, 7, 10
```


### Código para listar los 10 primeros números impares en Python


Así que podemos utilizar la clase [`range()`](https://www.w3api.com/Python/range/range/) con el parámetro `step` para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


Para ello, como queremos sacar los 10 primeros números tendremos que utilizar un rango de 1 al 20 y como solo necesitamos los números impares, le añadimos el salto de 2 en 2.


```python
range(1,21,2)
```


Por lo tanto el código definitivo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) será el siguiente:


```python
for numero in range(1,21,2):
  print(numero)
```


Lo que nos mostrará por consola la siguiente secuencia:


```python
#1, 3, 5, 7, 9, 11, 13, 15, 17, 19
```


Y ya tendremos por completo nuestro ejemplo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/). ¿Qué otros casos de uso se te ocurren en los que tengas que utilizar el parámetro `step` de la clase [`range()`](https://www.w3api.com/Python/range/range/)?

