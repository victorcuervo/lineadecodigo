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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456FTNPO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDHB2rk55HxmpYTT9t5si14PKoQzyauf2k3heLe%2B7ydUAIgFz1rIJmAOa%2B0fae5CFia6XCj9ZKVGVuNS7TFq4pyNjMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDI3Po%2Bz3WATvqM5jzSrcA9wjS513wBz%2BJcqDOviQrBhtbk7grGq2KSfUbECP2vyuWePH4gKt3WzIjMJssr9%2B7%2BiPdPJq8N3vuUx8xB17WcUSYOEaGvnvHZJkeqD6JELg8qMSM1Xtf5g8gaODxqdof%2Bx43AQqWWqIyPSPAkBng3WTBlyju5MRRm%2Bo%2BQZzp521INgTyO9cKwAEbrHeHbvjcE9emzu6OY0sTkfaoRVbbs1dC6C9ldkRRcyGnYNJKcB9oIV6Y8QuskI2nTuwVpSWqTzZCC0VBBxa5NIpLf8iaNEyjm%2Blb1OFT0Kip3S22V70QStBsdr2ilsEP0be4L8%2BHPfMytsO7hLS%2Fifp5mshNYs0ht9mMQ1RmNi0n8npgbIANxxt%2F0RL3eUBsEPlbFEPXOX3yoca6RySerkz9mRvPu7otR1VFjtBKF5uLglQvo%2BVred3itRbsg7N9XWcMJSYM47%2F2qs2VrRWeKJ30eNddOwMzDuE0%2BcJbfbt4oJyVOMFKxtHPK05j9D%2FZtRonZq%2F0TgSylH3nZHYXEIUpGuKyZQHsXljTRMsASvchy02nhWzoIfIn8Y%2B3eoZidPJPXvp5271cczjDilPJ6oxuQYeDMuaWVSClW3R4u2imGQN7BKc%2BaqqMMlhlLpCuKiAMMChxskGOqUBqwrSDXuORjfk4fkASMf045hmqY6cBPIb7VrsHmnTVQ3O8bIw2fSyWj8Egb%2Bi63URDhO0x1fxfYpyjpmPZ0jiarJzmOup5KFAWOjSjvz1h292Knp%2B2sKrq0JOCXZCDeK3ag91nVHj4tEFqLJAeltIyGQhS69lM9zBMZwg9Ea5qEUfQ0bhb1Ijyihr%2BHd9rb82368Ix4DE3t%2FRehZ7nqk%2BlDFt%2B81V&X-Amz-Signature=135dfb98ac211d522c897f2fe0acbbd594a8c8ed14a466f713dd89b6fa1e2ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

