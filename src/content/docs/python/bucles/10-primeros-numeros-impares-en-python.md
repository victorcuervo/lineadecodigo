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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANIUR3H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRn90YmZ2lcxc6x8ZbpsDWGwXgyxfptF%2BMXpnBgJD5AQIhALBn4U%2BcKxaAMyyrM9ztfnWoh60wbhnt52C5Q4nkp0zcKv8DCGwQABoMNjM3NDIzMTgzODA1IgwK1TfmK76QqkVDQA4q3APKV8Czg0w8uGfY8AH0VMr8qrjvFrTILcf7Gyg0bpbRUTN3HI7hQkR%2B1SDSo5m30%2BlKWMt0LtyfLijM0TzppNVMmBTvCTju%2BqrMAVjFyt67MBePsqAfKbHfjfn8xcO2v6BVP9axRfTxEG2JypukMD%2F7CfVUIn0d6ej%2BUEYcRHEKoa1GeVlfj7VfIUkRDgJui1zTgfIiZ%2Fg5C9kSWF4o5q6lejCdA7MCkL8gmTgmoKsfQ1zzb6enQSMqOv8Np0jLCazpP%2B2MQC8yIh80AvbtBTJn0tvFD%2FsxBdL%2Fa%2BIk82rBtT1p9s%2BQkgxK0NgeASLMRcWkZLKethZCuFDyHyFm7ywJirs4cql9jOY5UA5LDhwj%2BZvfQ4tsOovof%2Bh6flfmJ7Hn7GJWgUDVYTutXDcJvefAH8N2NuCIz0Ddl0VQlcdbum1VcGmbUznKbH7JwNnMDbj2iPUEkR9nGeD5TsqZ5WXyCHpfLNuzN87BWRTU3oRBQFAKjV6uk6Y02TTlPwofs725XS7KtUJkruGahhx%2BngMJRiPmT32lQFz92vOoU%2BX7s6ZxUMzHNH%2BErxmqxZSrzXQNcCuFQlLpugreMqJbDPuxKHdh7Bee3PHroXeDq29FW%2F4FUmAdHwPD2MRacjCBqM7JBjqkAXGvvUg8i1q0D%2FVYaJCwqGbOQaN%2F7LvABUnj3sL5orUu4aZr%2B7vYg6nflDsIbHCWJWn4C9aid32FLnIB%2F537zqTLKj4liCvtRAbkjYmWfAM5NPJGaQXnRGX%2F5Xrjj5fK0L8IHVxo0YtN5jlWj4afiod8gmRxrhg%2BAA07fxyM1p%2FGq5gSMEz2dW5sFhbKrm6xa%2BGsl1KPmlxMkuYusah03giUU6p0&X-Amz-Signature=3c3709acdf63f0b2ce710a3cee2f2b860a0df978e0591370aaeb8dbada0a9df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

