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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVGYGQQG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOpglFYrwH2s6rXg60%2Fdqm2KLjK2CWcNwDSq44XN155gIgHXprSX%2B1HN%2Bzy4Y4Kkzyg%2F0nyD0p37LMZPqJZqfwvwcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8CnKTWRgOngr60ZCrcA%2B%2Bi1AHKf5JBmpgNcenwKcx5Pxa5MGWG%2FNPqeF7WFU6lM%2FQcNMmI2ujwz9XkcZSSxC9CHz1lDIZEuQCEl5KzRFP%2FQyAFYCoakue3pM9aFWY5Aq1MM1LFlahcnhxsgZU%2BqRa%2BifiWIAY8kg6FkHlDOIP2dZAA1m10xZqLyfSBNnVnnrUAwWEu%2BGuu%2BYLnEHcCaoetdEdPVQFKh2zm7O7wpHx2mv%2BSiaTi5GbkFz12LdDPCiY2USofPVWDpWKrzhC0XzeXP9ali8Mh3hYa8MjMZchM4px54pRX1YbQWp%2F4PSlkaVcFK%2BY3zZD%2BwEslx9kjfTr70jxTST%2BErixX8%2BlmEqeVD%2BBCSs5w8uqrCAZN4wL0suw9kekGBAAFi%2FZA8MzQh5SFRxtZ4tz9hWZhnR%2FQPr3EmWcz%2FtElxHxW539zYUXLWRXhZSEdOjU7bKjEW8l4BBrlmQFBev2IRj%2BQarfM3rr1TuK4ppxWQK8nrcUOc6w4X%2FS55LAifC7iSG6uT5ypyq5%2FN6eK1StktRyWluPvVI7EXZ1RvwSexbnsukh58MzhOjdnSMUrZ6%2Ban24NckvTeRNAwtxNDidj%2FLvpSXZ2BxCOX8zWL%2FRWDWqEfoSzjVYf7wO8yw4cqx1BDYMAMOjt2ckGOqUBV825EUaOBuuT6IbPfh%2F3Zpgsnurfs%2BHhdItXHOkqzQyAkaY%2Bdx14RXfB%2BvNyXV0F7XZDK9eCjOI2zv%2FBCD%2B5OAlxwBcMZc2BnDN1UlTA%2BZzt%2BEuwkAWv6Mowt6GppGk%2FOPbCa6UAP4HyN%2ByXN4qYC6hrem3AxX9qq55%2BEGKSN6J%2BE5pQXYQhm8%2FiEXgXvDX2Je4MOI0INgXupxY38RNe9aAQJqyO&X-Amz-Signature=ada88f7123bba0a8b4f0bdad2aef063495ece409f5a8ee72d763cbce06e6b968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

