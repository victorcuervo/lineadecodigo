---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
slug: /python/10-primeros-numeros-impares-en-python/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KL5CSCX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIAmyXFUKzAdBImu%2FIqnErBAg4Gfp3NPjT4rpHmocGDgIhANCOP4ZJlqZskqmvsQ9h7phkUPKNTkqNzV8kVoIgpejaKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnoTNsJ%2BZwAkQufhsq3ANNk31NNfpZGG2%2FUMT0XO2eUEKLoJCk%2Bb2mtllF246fB0zqT76QpWoiy3QHTlz3wZtFRjxp%2BMmHBDrW3F1i3yM8XU3yRed0w%2BnNgBzxwjq5JV%2BWpaOZg3JcggI%2BjIYtIobjynlVC1ZRJINMxYwvLubI9%2FlD8aQt62HlTucHlNs0L3w7Cj0xjx%2FZLWrEYQPavmHRXiC5pE%2FtvNQM82l62nS23zTx9u%2BinE7uV8IYPh3WDZkzZr6F407ne6y7AJCi5H7Z1VIs3k1PzIC3a7dlM6%2Bg48AvF5d8ITlnMZl9Cpvu3nHp8WKbqsRDPGzR2dW3fh8NjtFpeQbAjR3DIa%2B80%2FDdbvAjdij%2Fk0Vq%2F5k0HvT5FYf%2FzMuEreYjJdIZubbByWuur72B%2BPy6AziM28Xi7VrvcB%2BG3na%2BfT%2FeSRukIBo90PGp7M3kiuuIAYc8rOWQIdjVOYFknDlyk5B4qvr905B4tWgRo%2Fyhqdfn9aySfEW4UlDkCdbLrtClgBbgSwY67ioVguywZZO1LpzqXkIttioM8sqhJWRaI2WpY6J9jKAvDqAlvOAZm64il%2BGpN3b1bViim7An3%2FfnxPsL5qFOZhG2oTzH1MEvAnfe%2FYh88zIu1LIL6mZc7psIaYfbZjCJ0tjJBjqkAXeWUIzR7J9B%2FQq4Y0qqmem9gNWvJbPkbYm7cj8ceK018n9l%2BwWtEXV099X5IeINrJM%2Ft4e%2BZPuh5eF%2F9BWLXJDcKQQ7bKWP6L8fgf3HzX8eqepoPQVwD4Fgoyvo%2Fe1fvrQapOt0NX6jephUtKhxrTuTa8EyyDMDbOLTny3%2BwTiWrv80Q12BMjLFgF%2FWt2piVPC%2BlDcoOQQKjEz8r%2F0xKtkPh7Es&X-Amz-Signature=8b15696400453b8e279de4c304f39584654a02d2b8e5dcda9e0442869e931e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

