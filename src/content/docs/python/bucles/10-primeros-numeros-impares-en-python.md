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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AO43OR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9tg2fpuSdICMbcNV5v4d%2F1TfzKtwJnA6o87RNYGRNOAiBVBU7Uhf%2BSxOCQPBpgvZ%2FDDNVQckYihvqjFvbwgjy5aiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjgGaDSFMf5nG7NtjKtwDYc2NMrZBH6T0LL7jIGpyZlm7PB0iBTTnqOhrVvNqkwhlnplZyNU6sWuMJSEOG2H9KgI8C4bqU21T8Yiw3LI2RqFv6eKDPuIrITsMzzJvmmn%2FNwIbC6%2BlqVZVJLk0uOFIQCTxEQ53hk2qpmljiLPLW4Sz1gztiX3%2F3N%2BjRWvX4tB7s9DDOWV439pCyEi1Zs%2B1u4GoZqXB6DdjiOLCkuaqm2AQ4p%2FEZve4wUidst8fk82MequMPb0Qb9Hr6YSDnQeYMxqgJixAMSyfIfcsbq7Mwq%2F4VegxFfwiod6Kz5ObrBmutn7qZN7vZwiUDLc77SQlVlvmCQUHtLnPGdz7XEhSOlocQCea9dNuViL7MCY7gTD4Xwn6jlnJF4YcPYMXpazc1iVPqPCnvvAfvWaZrmbYSY9f1AWK8m%2Fp9XFF0%2B%2Bf2fT6LYeNOSKXPp2DtArYxfS2noNf9To%2FtcA9gzewiC8dLixGfz%2Bqu5G9lMuBR9sMXra6pT7n3CPu5MGSNin548n4STCiNR7KUzjPTqFwtOhHH4%2BahyFkwOzkCd6Z08F2s47oF84mz5FF4%2BAjNBkX5Ffy8Raorh%2Fj%2BwdMb0ROhZR5cPacZUEP1YX49Tmbc1AZWvSRWxrS8AA6RVVFS5Mw2v3SyQY6pgGL%2F3Pq%2FYba8YeRvg1jTFoVZBTCuhUjc2v%2BS4fpRTg%2FXVDgjMB5IIaqaZ8BGzr5Jq%2BJEritTWWQWkgHDbYBYD4SDjfQ%2F88tT%2FEowSm8EQcgMJIrDNilvXYdXMh8n0YG3i7cB%2BMKTlDMkikLJYn4ktc764pqvv9fht5opqg%2Flc0Tdi4fM70XLFaf8VqPRiaqr9j0ZKHAYJgjx9EOkHlbHHAKhrTx4jdt&X-Amz-Signature=c09458a6d40451621cc4b00f9bd773bab97ee367d69a52805180bd2a27c25b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

