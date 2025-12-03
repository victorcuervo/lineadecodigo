---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MW4LHS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCtVv%2FijLuNtyPJwMpZPHPW5U0t32qEnscUibViDEH5%2BwIhAKbqvRcuuj23ZodVAJILSDPA%2BYNhgqaB35kRCkX%2FthZ7Kv8DCDgQABoMNjM3NDIzMTgzODA1IgwoD5pzF4Czc16MRK0q3ANjwHukd%2BkDJoHQzTD0%2BdU7nRTJOukS46j8VNoheFYkQrvmjNPVDidy9IWMxWWtNjL7A5W6UsvPOoTR4UNKoyz8y%2FDR2ykttMC0Nw4cx2MF9lZ%2FnA%2BDtYjuR9bl%2BSxOyZQyzwVGitzvge2%2F2yaYnJcJCzLwHlS0gl11at3uFQsupiiQdkQ1cll2MUEvtf%2FEua72q12bW7JjUDAcPtIXCBtufIMjhW23zMyef2nKerXNOK2%2FK5JLyKZMXJfC7rJ%2FFW1op8uEXTLg1DviBM6Quf1oj%2Ff1nbpvppadF%2Bt6Q2qvpaG9m%2Fk1b54FqkAjvO1PprxIBI1l53iIvpe11ktAPB3%2FxdMOk%2BdUS0XYe9Bi3n%2FK71C24UWq%2FlE%2FiuNrJsbZL3D56XCNskXJbKcnJgO%2BHnGKZOeSg054bxbzjebsYDha3eowqkMvsf%2FjgNljj1mZCjQp0t%2BncTxOQJA0AJgXHWoiHjwUvIn1c8nFp8wbNy4lvdNUKxUo2EsmhX7qpoL6ToJaYeEr1h5WKIJzN3MmEvY1%2FDg8HVuB55svcrRCusSFrSZp5uhlj57SfqOagbmvC7LElTNJKtDTxkRkw%2FCTK12AjAyCV%2FyiKFC5H5J4Av90%2FIOPA5K%2FOnFGP%2FPK%2BTDh98LJBjqkAcuTMty2NKt581TNeYDIzeaA4HXQBb10P4NGjvNPoDTyZqtD0Kac%2FLOVC7Zx5LE9kBFVzbFgvffye0w23CXC906qJe1%2BXTDjOoU9tsDh8yfJlvycAcxh8BkX0CioeJdGfAAARchZXN2NFzTXtnKhe9KylkgR2ieFvoU9KN854LcZW7NIzs1fatKHlriKFiy9nglEmeDuIU9rGrpY1D8VWVBOprV9&X-Amz-Signature=cb42edc575b5f1a9245bb5892cd15e2ba61fda37e2951b08fd69c6f2a702e2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

