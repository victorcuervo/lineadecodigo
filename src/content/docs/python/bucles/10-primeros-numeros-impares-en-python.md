---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3FC554J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD74B2h21X%2BpWX6cypLOhnLPAdGllpyOjk%2Bl0yJ8E9cDAIhAJ1RDgAkAxPRf5GgizOg9R3gsYGu5oVcgT3W9ILHBlVPKv8DCDYQABoMNjM3NDIzMTgzODA1IgyHbJYQRG8oiJofIEkq3APgrWaZVAbkzkZe3dBs%2FTjT7MQlNLpmDgf6TuK7IomhMzXYmLvi1Ler%2FQtNAl2N5hrhNUN%2FsBMcrwwMsbxrNmVW1wYJ2mIbDOEcg3Etj4Cj6nGdFgCZ4yyYQb95ml9qBoLb0hx0ExonZiv3ILaS6txODeHwT9j1LprlUxugLpFRzuDZYmxs%2FNclgvNPHhM2RPaYtDz9RCHfoD%2Fpp8%2Fhk5aSdJoj%2BUKcU6RNgrjGIW7AmJFKSDxQ7Y9IVVYQ0jpMcLIank780LANmVpdXMITSH6vsLgrjvRKP%2Fs%2FHqTOCfWl86hS83AEM83ijKqNEg8RUWYBlfnC9vupWtwHQJRl2OGDRZ0QFidFGE3fUIdNWm2R%2F1uZPAtaWpjnKw5YyntHq1I3gdiXr915%2Bk%2BsBmlrXmUFYbd%2B34mgjwBWE7xmeeB%2FVJrrJxRV%2FerzksuJft49pYUnbbr0Klfi2%2BR2jHU0v0d%2FbVoj9ZgyE6rx6UXnAaYi8fl5KBdmICX%2FJkgmzHGbcT%2Bk0krTEYATZVPV3L%2FkQFYCn%2F4UFIUE0cj10K6nSo%2Fliybt8phwM2q86g0ZSCLhvsay35fW%2BZrKH6mIH61EnBpQfMWFoCwx0n37Nt%2FnhClc%2BlcA5CWyHnuEhIUk9DCFvsLJBjqkAZ9%2BCwvVmoUQauEyKOtbKKqS9vHo%2BTEK42QOrnmd43AHUOh5k8ZHLbuy%2B76HHISksx8ikTL93uQ22cOJFHVoPNKygdFuN6ZXQ8sD7qZqW86l1eZxTwanQKwcA9rGmmtYly6A3hrVoOlUvku57H2CWZwW1xQCqRFyqY7f6Rv0vaFBQIj%2BwLU6a3gc6pJe8s5aoXtT9dh2ILNh2jJDQ1o9PRkTNkjD&X-Amz-Signature=d459b4d47c9d63df1122caaaefa2a2690dbf4219f5f8282f64b8a52e1eb77b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

