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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFH4TFJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpn%2F6V9W%2FM5Tny2TushvhLxv6Q2yrDRFcQAdNDKGMutwIhANkPywBnMvN6qitj5TksCD%2FLksWJkLBa4%2FmUlimOEHWQKv8DCEQQABoMNjM3NDIzMTgzODA1IgyJPg7C0NL5d%2FoL5bkq3AN6lUi7eJCCnRlICZfhn5On5pVZ4UhRYhExCvAcF3Urdd305AhYdWSpzRyF12GH3bF2OaNyUDyHvf9trrRSfO%2BTJpAmz7ZkAyB2dKq9X4WTetkY1MajE7NGiwd%2Fzs5Sx8Xs5N7570jztwKp%2F3aFiOQmRZK0UgOFCSdScKEbzzaAMCdJtAn7EWiRKcWhxLRyNJz5ftxhJkZSXyEwGbCt5ggNNwHM9%2F0bJkWkagf8wwJfqRbdgKLX8VH9cy8U59BBwVkGYWjcR%2BtcgKkalU%2FC9Derst1gdt%2Bh1FCL9gXB4TURCeFgZQHANB4Dt8qYdbA2V%2Fs%2B%2BHkIx%2FRZ6GKizgYlKsWZYZ6LKRdyuZ93uG0%2BF6Evm4gie6hvAdjnNh7mYleP0sOviGWB%2F76ZV%2BCX92PqDV2RFVBafvlfVjntle4xPY5lluS3XwckbGUWmJtbQ4ujOcognIiw04wKSoMGGh5ZXL9JXa0xycB9fAoxoq7nYeNczKHwK5Qw4ciVGQPuUmd6GMCgxcKEN1RXFU5k%2BVmw1NZGPBWsmOfLei98ChG%2B7aUnp4ewes67ya8%2B9PtV69TrHNNzKo2POv%2FpTIHyeKirUvkXp3Id4DluiXKqc5xBMufJ7691J9qgf90ec3eP5TDHysXJBjqkAWOODvUe16jIin1gn0f%2B%2BzN%2BqLec6hYLpaDnKQttHCGhqEL6cSOyAsSDZFP9eMMIDoUICWMMhs0ri3UvAyQ3L82JqXoUUBcmst9Rb646S6N%2FLLrJSaoeOjxTKuwVdWHOlTj73x95mHZNwQGaLaBj0dACv1QP8yexV%2BWnKkT4CqgF0QhOtoH4DWGtQKXYEtl138hgOsYndYIBd1cWMlE4MbnfA0fC&X-Amz-Signature=d7a4618d1e8d72d2c58f143afd8709fc00bae56357c0c5235549914f7c7b126a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

