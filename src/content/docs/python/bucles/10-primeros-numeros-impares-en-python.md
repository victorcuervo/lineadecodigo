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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642RSFH2X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDRwhilnHzPfD2lk74TpFYGVraFHENq2gtWSl7WNXPRuwIgdIyI0%2FqmV%2FPXya%2BiPjmakbsU6as5B7xcf9J%2BXBilZ2Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN8VnzKKmKSuuuvApCrcA2sEJ72qo1e4rpWHQYksZPYAlZOnliHMCLvb68OFNbempgLMS%2BjBvgTrpSupWAs2vs%2BjP2puu5ATdLuyotxrnMwOu54n%2BNONOIFPm54FLaA1QR2SSifyd3Q9MpARoeGtwfTI%2FE4lZc7V1fBi%2B28iJDAQjk7kDjxIm%2FGqGeHFvOJwtm5BOYsr0uVKF%2BVULSuMNoeTov4qL9hKlgLOM5Mxo3ngMJaesY7TL8VEju7H%2B7UUH03CYvZPJhNuC9c07qxhf10v9kgpitTlFQ9antc9hS5qrAZ2rCwh8hazJaLreYN5ryM881eJeSgGLXHGjulYlRszCbuBZsyF99BzpqJVS4dsZ4R7YSOg%2Fqal5T8HbFQm4rpvBkU0%2BuqGTTORpqy8LMeDGHplLp5RYhY5uea5S%2FQD261dfwGCIJuUK9DQd2iXXCIJTv5OndCJq3iVSFWGT9Yen8LKVd9UJjNP3hotJ0kH6ehtyqxq0VNoNO6L8ksmJ11Fj25ab5SlwGjNqhRR8%2FGaPCIPCK2dWO05fnJU6FtLQAheGO9eq%2BqZNGm5ad9BSZe%2BhGFJFXP8XGgjRPlzBhKms6V3f%2F1VhcSxJbqDPgVkRbfQHB%2FK49ZACN1BVeyQv0UGwaUJeX6vkDOYMJyFxckGOqUBbfyyQ5eWucEmha6zew7E4bInBJRLz7OFcrw%2FhhNA0kB4Agn1FQt25ClBQ8Z%2FrahlePJyGi7yI35TxLdRjFakfEY1GRP18wLJlITod7sJlMUDtqsnEUVh7ilv9Xd3HtnIu5mCHgLGu3hliOmHHDUh4ULsLLSJrSJPYEGaBzBH6yhOVrOl9dtzO9AVZLAPl7uirkg0Nm92R1dmSeij9Z8gdLTLQjXS&X-Amz-Signature=47a31600879f7be71e9ab5a610ec6648dc9eb3d50e14c9664d324f7fbfb772b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

