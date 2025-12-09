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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW3LL65A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FEywS18PAa6hMSWSrzQJhjwFnjjf9C2U9LZSAedoQEAiARN3kf4KObhdYisnR%2Fzd6NjdJNupxCUCLu9JcJHTr0sSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe3XJx1Xyjj54OBliKtwDOVKbWtAP3w96PKhu92t9QOv6MSpRNjaTX89XKqux%2FPYnbDneXeP7Qcz58Ca7D%2BILExMxPYsefI2KRU0kjBSbk8ltA4xpj5CQN7HWSPKzvgO%2BEArHjxgx2Oyt5fHXDopkjE7r9tnuCf9pGzgMN%2FjGWUZBbmpaBZIARc6Exlt5%2F9S4Oee4NEHZO13WQzXuvQTvxER9AdbP4tT8U6fumYRX3tvgiT%2Fq68gYC8rurLd0jyRKufs%2BrsoI4sCUlWD6lXbSeNjUEdIXRfVMnqS2AQZKwzDnDCsroTRjEkMVHyRrEag3bQoFVzAQOOGrt2ASBsCIdcKEb8%2Bxol3e%2BigVwi9qHMLLY7tUTMK9UvAH4ITmi0erdxEVKTXUOluziA4CfwL9cwOXKCZzkT63vIxIO3%2BykYl9jF8rA1J%2BXd%2FkyMt%2Fr5%2Fd3v8aLQAYCJApCsA%2BW3nIFwWIpsANRb3nXDAFwINJqfRGJ%2FKlmZ8A0dRK%2Fhj%2FYdk%2BF5lKIfm11qCtWpi8qcj8jwuIhb86VIYIZ8UlY6XQr4mFEeoWKHhKAfOIl2ss0S3sREKn8zHRu2hQ4nVBOeiFlrMO98DQ%2BtFclNcL7Bv2oxBfco8D3jKl3XGdUZcfntPU%2BAfG%2FGCX85kIxcIwkMTfyQY6pgHy6s6DxaGSBNAYTEK0ISCcqveKTr9VQTVSJ7lefh5zL%2F6Y7es1P%2FWIU3FrEZO8NK6JqZQqqvbRfYyW1w27lAk%2BJheFpzeCwYB4QPubRP8vgKulFp0lFBPKfeq5xB1mU96x1%2BTirfywlODqmdcegVk3kqInqWQDWXP2wEIYppZ9u9kLI%2FtbyCnNN2XJhX9laFsv3HMJOQPYW5jBySoWLqMrMtfSSty5&X-Amz-Signature=7fc432897c2dd21ed05b2925fcc435c85e51dba08b4c1cf6989325732690a440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

