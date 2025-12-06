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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLA7XSPN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDinm3qoDp2xuVbBcL93Q9d8vGwrTzHaY9eidCyc5DWmgIhAKAIwNi45qWBL5S%2FPpdPZ%2BWmLtSaPOCXQu9qZZWCfMh%2FKv8DCG8QABoMNjM3NDIzMTgzODA1Igzh%2Fp%2FMaXv13tO8g4gq3APdlN5p7gNenNVmruhCzoesfsMTzY%2BnP6V4FrhE2nj1rvxxWBNAO7rfqA%2FBr1RQPSMH06nagsnZQE3ifc2NfIjWKcXjO4%2BEsbOR6mSE%2B28upclvyiXA%2FRsFlKEyQMgP93oGY9CxLRQfTWCZZ843wwF85zVFFrDBP1ZCXUcVE3KBLnejAYhW1Dlc7ldW6yICDi0usgNDesoQDA8r%2FBmaOvnkZLj0d%2Fc9U2bi%2BbiskbMro2R4WP4cj03P%2BD3iWu%2F%2FKp0FTqBn3gMOFgIT5vGRKiniHmJNJtuo2qrpAEg8jg3c9rBYWQ62nhrXz%2FUc5PIZsPXfc5dNuthR%2FQ9zGBN%2FsqNSsPeDq%2FkJf79nGC5YN5UiK5owyL0AmIlooAF5I6BsWWrWcPgPf7mu9AEEEyvJAoqJF8LrQJzNZG6ACqqb7%2FnBfzpkJ55KMbOU3ElPpP3V6rn3NpHzKT5TgtVe%2FKm6bWJU5T%2FBYaH8040iOwK1WlyXz99zL4HjIt%2FiQiFKnMi7iIC4d4%2FZqmwpYdqvYWTEig6sruT2Yxh1XiuofvecTumaVM4JgO5TP0sbe18hn11Ti%2FdQK8SJIuxGbY8LEuUME%2BbgNMVuwCN%2B1vB9KmPDBGnZ5YKoZfh1myIIowhokjDR%2FM7JBjqkASswu%2FlS3CXSG%2FglX%2BT2RDMa9cLzfFfRzAwRShZ%2BJ6llCL8TxCLn8xqZMj9XcplOTf5wHdvJlmaDmRGPvD7%2FIuKlSlKVUtNUOfEG5KqfcV9tX8s9LDCqCAJ2QxGBN7Be%2B4C4WmUCNiNPZXN3Vr72OlMyUpgblGmBalBKB5V0VEgzweNsDy6CrG%2FkWOhRTaRZP2OKIvRm8pLiOwB%2FAD5QOpco53c1&X-Amz-Signature=7bc381b8bee9afb3fa77c15380a74742a210dca8eb8b415297c94fe0be5b41e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

