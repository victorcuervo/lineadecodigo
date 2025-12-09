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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU56BVBU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsGgchVWf2RvcBiStRvN6Wyu8P429jYLEtnh7A%2Bijk4AiA%2F8L5%2BhI7lLD4Rw81wpuabtVxvm5Dn6CXsg6o%2BjweKFCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkQIIM1ny2LYLclVtKtwDsi5XBOBaaoLLhjByHkuSGJnBK9Gq1S2mBUEevrnG11u9TH8KuCg3s4YKEKG5yEhj9SO3vLuoS7VKV9upfyEmQHiFgTxieNoqbcZEto7YAq5%2Bbjsc%2F7L%2FmcLLP4ShPvps860AKDkaa%2FZgkZqPog76y3kSBa%2FV8ZINfSGEPFyJcEjfsCLsGDMiU4pV3IU5nvsTA3apESBRKezzHaUFkvgSyEt9K%2FieUyJ3Q7ZY1ovOJnqDCp8uktu8Khok7zFAC8E35Ks%2FGTMy0dBg%2FJWo%2BVDHyl1Bouz9%2B9ZzucsEtPAsI28hoQTmypINN7xPG%2FPtik7eR4rKCdRZBCBgzzFFGAMbEICxXg7iev%2BnU8qxAZcIKAE15Uk0hTDhP7X9bSSAyKevcsxiQQ9SqP5Jj2qAJtn4YPfxP%2FapTdSsS8%2BJwGA%2FAA5CboA5EkjGxzEfah0w%2BVUpPUX8odBrM8e%2BNrynNdt5KuPWsuGMdinafWXKx4ukGc84HDnnu3PJsV41opin%2FSpaTPbhbKJVwcEPLDa9kuQfeAGVQ5lDWn%2Bz1BccmceqvQYvMfu6Dvn%2BWesVicZTBaDbrKbpXiJzZ%2FHd0WYeioSVreB4GtZB%2B7QqE%2Bh%2Fu3E7dQhfg%2FW9p9qpbX5MdQYwvcneyQY6pgErkQzZ3VqhDthjG45SbMQ5uHlzByM3Xbn5h%2FJX2Mh6V9hlSitfhUIp16B7%2BQxFiatPupj4D4ij7lBYFHJrzNdCO50KIXgWofectIiM9U0qAXTiZwIZgeqSGg7HiT7gM%2FosQlKPKYnnq2lQtRz2xxs119dMHWl5lbcgoeuFlWmCai2CfbOGkc%2BOmRZlnI5ydqGB%2BouX5t7VQBTwbAxQHUt31IfDEkkZ&X-Amz-Signature=ad0069f14328ccd254dbac4e03b3f8021e6857b6f966a53928448a05d4f80f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

