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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H5LH2XD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9sJwst%2F%2BVb3JiNWGb%2BmSIhRT6oA%2BAYraqo%2B0jMy5xgIhAIJMRDpP0K4nb74tzcOZ6sP5bzK%2F6vyWYuoPVG%2BMNnh2KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXBMNj8zfjpMEanfQq3AOuChcLxxp5S9NX4em1gXTYm3RJZHhKweFJcAw4bQ13J5ZnoVboFMQd92KXf8plbymHrlTPAlgqHXgJDyU8aaYAnRhbeGT74bSNXOJs4G5h%2BmWgbf9FaRxohmaiBA98RVgm%2BhmQFaEvHnwBipHAy3nmHr8JvijCGs9ehaywF0wkr6FyUNO5c0c7PEbPDNETBBYb3ujFfr354QglNGmLogq1sOCXo7NTg8lWDDfrNurWGTPisppHFuO4zviwttUQMUS1JJuJKD3zDLt1%2BzU0JhyqzUe1%2FGRgyPhz4UZh%2F2Hhzea%2FUmKg0TEfTHPRaqNpLMRRkJNNHUqm8YTgHMBbR05xqXqR2Kmkxe3C1ApdrNi4kA%2FSl0sKN7Qt6jAt2WebijsiFY6SD3zTzIEeeoYGWZRubE2jg6%2BvOc4w0v9bHGOafM5cvQXJ6sQmHbIJuP3d%2Fd8K0%2B6wLiaSEGdPGHO2UQkjEMTaqhgxxCmdGW5CVSTgp5AyesiU1zxKzUPwWLtTdYujQtRCZ35H4tTVS2ClADvYJuP9Sw4sngz0UeFC8r%2BnIK1i3TZd5NXejzow24Z3654%2FtDrgGNd9bd6PkrG0t38o2VpjHdho8zadcAbY5Va9aSqTIfP7fluDAr3f9TDnh9%2FJBjqkAZAZwZPHuh4w%2BDh3YnOnKnnxR4l%2BDLMiIdEpOruiD%2BQJJfMv5yMK1iS7D0q%2Fj81RQcYCv98t0z7RNhB58L7lRBjHOoclcoSoYqBlBWbJFTxLW5PgUGPQrq3is7vGVOi01SnXLEHyAseLy6ZNfHNJuml0pPAO%2Bc3l3ilLC87xgZGeh3iiqqQj818iGUWnP4Jn6LOLLpoZKJ7%2BLWboTWQQsTpd0yAj&X-Amz-Signature=572aaa31528aca910f8f1f8d9365242238fae218d856d87d3a86307f2d72a768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

