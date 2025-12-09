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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JRCGMXF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO0SIrzS06u5LIg5eyg1EkwXH0v1c0tT10pcNkso7XkwIgJhuRIIP%2BqVA9wc%2BZkAXDijF%2FEKty%2By5u6lYp0kV4fToqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDibe4ngD63LbHdMuyrcA8cYjeMY%2B2VMHr1ZxarcweSO6BYxdKvEMYufQGA7slojdy%2FoOyNvkvLdhxPP5Pq0Yz%2BjQFybqsw%2FHkDXwPCunqG7kqGAfCwT5HmroDCPUbePFa69HSHphb%2FBReUy3jQpe0otqmXqofN8HNp8megHR5b5tVI%2B%2B6fm7JHdo6HQk1UD%2FYPJ35ZflyVF%2BmgQZ%2FaeDFvOEAfvPXvkpkXT2PRD5QguDkkkG3luHf6FajfUJn70%2Fz%2FzrKOn8hpm60Dr32RVa1h%2BJjae1VYF5QhajsHhc63hJKP5%2FpACWg8VtrnF%2Bnm6s43CghB5H%2Bc%2Bt5q8NoZTsjMiJXgCuK8agiLVF8CB23yqAD4xfDUdNFYOBHHUSlG4Bn5wvzypHadI6sRfYrQXqKfrqsNUhb3JeIblTTmcl%2BnGyljL%2Fq8Qnp3y0EGpStRAO3meQkygwL%2F11kFitKu0U1aSSKy7d22DTMHlVQvV2HuyQtqbhJJ4g34pl2vrjAYt4H2xw0mq%2FccKmbpMo7VoNa7LWHHnRzF6m%2BsGVD5iiSLeW8uC2F3sJx0gOcxZB6n8eYlE1sr7lwDR1T6n%2BgV7RprojSd7hbufafRFf%2B2PKrQlahInznmNqXZSWE2jE%2F6BwghD4j2XpQPvz%2BFOMLaN3skGOqUB8sOJgLwzYBtsX10Hhlr4%2BmCYdLR82Z8Mt45uGoAgqIrsBDopRwoCmxyjs2hw6UDVtOay9wfnVy4VKs7SY4ZZAZjzRHxAnmPPuHuuGI1WnqLST5BVxrRy%2FT837tf73iThIh%2Fqpv9hfhsQWHVynnamOt85Wk7yzkca3uttTxp1h7yo23UqCNbGf85Et8RveiEGS2aW3V7YDxo%2F0vO%2FpxafI9iTwCem&X-Amz-Signature=cc9eae69e901fab7486e372d1130b5211682b02bcd49655d375878b38b9aad75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

