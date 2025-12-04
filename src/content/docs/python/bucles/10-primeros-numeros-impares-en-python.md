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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5JKVUG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCHdlP3K%2Fo%2FjhfBf2KwLPb1m52PlIUz628d%2BX2rfSyHNAIgfRZRl9AEunmtu5EmEQACK1TDtg1L2ctrJwD%2Bn2Yd9mkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDH7FeMvZ34yK2N2BYyrcA7IlP8nHrlMUiLi%2FJFvgZUBNStl8kTntBiRXE5SRJakMhQ3wgGFHEQUYQOgRs4ShRoGn1B271HZYoJdzv%2BQH%2FK9IvbGd%2F3OuOgS1ZJyLe2ZnfaAMtGgL0XI2RxyMO8XtfV49sVLlhz3mPxZ3G8gjP4v2MG%2BBRWRgAB0NnHuAIjFkAdZwSAmDme6jhnFE4QrJJ1%2F7VPJDHDgqF1Qv0r8BxKOLt52GLPEv7xzNZ3Yzl1jGI2N9nn0ULGv4sw9tyh9BOhaRAW6YwQlTVvGj5dw6YH1qKDiC1XNiSi%2FNA0KUw6s%2FJySrxHz7G8ABiXNfE%2BfdUzjwBFjxFj9RFYNfRvL9wzA%2B9K6F%2B4Ml62aBzBZmA%2BcdLRBmXkO2tybX4iInXMn%2Fu2D3yeGgDa%2BOIx%2BLsL1cmbQolBC9%2F4g%2BnlnpsBavaoXyUr3odmEbqJ5Cs2oV4qtt1gcUnGIawQ5XHXeygo01DSaXbF3wbGxej119P1X8smfWJ3vppA39PCtcKU7j%2FhJnyXHRciyzY9WvFGhuRsPMrK5%2FuEl788pdTHaR%2FKv3UkjRM%2FNeTmEDhNk8k4TI2w6nP2XsOBlctfWxb8bajDnzIrv8jpjZ4QDPYQ5UVhGKEWt3ZzSqDS6Be1ObWPVTMPbmxckGOqUB%2BitheIxC5oTE3t0x%2FGvZGWaENSajvPlA8JjEg1pFs2S1%2B7mtQSlZeOKwGDf33n%2BZHJDGoR25p9co11E7mB%2FuNjgHm482W0U9blViHTYKSEG0R4zqyu5oGG6AH8iU47OeOG%2BBYdHqPvneeL50QB9g12knliDiA6uKA1SXfjL9h1rgex2H2h8u2hpRkoKDTzlJyEyHk4Ei%2F%2BAS%2FXNCQHhcPCQ1SX5p&X-Amz-Signature=70f62bba80f810c26d568c3f17370e68e87acd50267f0d80e880e52cdf9515f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

