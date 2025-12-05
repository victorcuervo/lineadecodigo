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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJO2FZZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0sV3zyPX%2BRO8Wpvi0UGyyqa7YT%2BNi9gRY4alVO8q3gIhAKZBjFg6kaJqUdfFnH3%2BtaC%2BhBeVhqx%2B7Rz2g%2BqHK%2FjCKv8DCGAQABoMNjM3NDIzMTgzODA1Igz6otBriZX7hArP1hkq3AMVbbmmLdqRd71ebKS50PRlpY%2F4O008N%2FCMaTAfvtcPE%2BRQB1DnB6au1%2BN0Lu%2FVVO1ZfvMTGaZ6V6Gk2eB91%2Fu6l42kiNAUILklm8p0HjqUvJYj2B4lIPMkrs5QHP0EzVm%2FK0KTeAKQ3iE8g82vm%2B3deVMmytXCg0KHS8xPxsOhwcQkP%2FMkgnftxb3hylrKw9OR0Uo9pyJg7Ueen4Ne%2BDzMQvs8wHu2D19Rk9qblvNaJ7PgVTjpEKP8o04i5PuY8TO6nqwVXkeXWAa468w95%2FHu26hQZAqK8b7fHlA0IuU3Js2EjVDK3aTISn8O1OUO1rQTQBULOPEI8lHKOOeRQTHpKZYt1a1jW6jOTB%2FiKvcsnTX%2BoW8jQIvEybyx6b5ITqsITbT6QNqhG4IDm3OrxO6WnoTF7%2FfN4pleC2qtXFZI9hmAQ%2BT5uTcSBS2xhowNneIn6LaNXB6FZ%2BAnhAWdMpN0CbOb3ZXTFv4fG5QPQ57%2B6Yw1Mm%2FqZNvWiAccYwRY21lxypvLGQhhP9iHOTgQN2QY2Aq8eUSJv%2Bz4Fq9w2imW4nCNXEQOHDeK6xABbPzFxp1rxgcrrj%2BBdZbnS0ynGkaGPQ6m0onCdple7m%2F9PeR8TipRhP3bDs%2FOAFctpDCu78vJBjqkAatug67%2FFrSFY1jszupsb6LqgWEuR5XPqDwiWVzFJHarfv3VrX4reD79Hd94ky8TFQ%2FfOIMU%2B4ME0PJnhAZxYiD2Nvp9l1oYw5CVxIE6MCTLDF4dJtYx%2F%2FJI3vh1RUm3MqHRwWWEI6rLuevc0JWXX8rYDgbWSIkf7hwNyRIG%2BYOrtx8E7Vg6MXZVc1zV9o287Roe5dfga%2FAF0kVGYMzGraANKOa3&X-Amz-Signature=508ccf393ee3a612b151ef0614e4252a6b4d58ce9d486b382dab0e6941f00e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

