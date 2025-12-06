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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6ZO3QD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcOQ8M%2BqL3hsM4Jc5el5j076LwlmE7wroKbsdp8PiotwIhAI36fkq%2F6uJ1Oty%2FcjlH06VCQE0yVFwi9LaeEhExKyC2Kv8DCHIQABoMNjM3NDIzMTgzODA1IgzfV%2BcqNeqXJeHB%2B6Mq3AMd3H9vGvqw9rfDwVhZVenIr1ncrNg3G4jj9tFPErwRbgj7NXCeyPJCcHZH%2FHhK3NDbWHQeaYNAWyD%2Bpf1AVl1mkkNbrXZGiriSsq3c0cvFWSQTUgLz%2FyAW%2B%2BpmxS%2F2Xf%2BlhvoSwTzQ2mrHV9SZsBc54FikcYHLVCVM0LaYrQwnF7egRu6o6Pa45dV3KQMVizf9FQx7%2Fadru5bJ8CHQZMNJtpVHGjIqSeS8VKbydHx0ypcsw4%2FMCNpAKIvZCk%2BjsFVtKij4%2BNJADpmxAREeCokEP49pA2wTqCsqVYpnqF%2BRzndHFoDezUzu9a%2BbB8%2BwnxiZccf01IkL0AD2ga3DA%2BXWVv3P7E9BN6qofOYPOsmsepbkNCk8iVuho1vSJjlqSb5Zhi7HnLWiBBCtc%2BYEJ9U6%2FBVXjw64y3k7cGyiKXbQMw11U%2B5iQQJ%2FpQMv5AgJ0JMw14nuOrQIv021NLrKsIgTxGXvAR4dTv%2FLyt1Ifl45oTUqLbHTTv4T0LKybojqdmkIvULbFSPldbzHpYooOXjtyDihBagqumM3i46%2B3lszTKU%2B%2BfPfaXXg5B1eTNpuEqo4HAC17RZ1I6q6JFxsr9yjEQkO33P4PKIOpBc7cqYAV3ZlswbRAXBku%2BOR4TDm68%2FJBjqkAccpjsUT4%2BVhtWzRJdrayLzYPPtYLDHYnPc3FEqsvsN0TbsxG5H8fJ2FvXzbzk2idSefBuixI4kKRkqPra0FgpY61x8tKiwimbcq1GBXIvU65%2BnC%2B%2BuDVvgY4SF95Sv7RVQMRwt9xbO6PRdOBgD6coAo0KzPgLLb6IMU2%2F0eLwd9ZvAREVT2Ul5ClGj8f0E8K0jfLGfn7s6CdXhe2PEjkllAXkz6&X-Amz-Signature=569b53f21f21a753d8027c45b0228c20245a6002a9f970bc1c4f6309cd5b4f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

