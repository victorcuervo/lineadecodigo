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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5QXJTGF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHi7xjKdNFlw5bKEZX2vBlQDMsghbV95yxHVJ910i5hUAiBRHJM058nptWH04A5M7isy%2BAjNEwFudbhMJVcrReV5USqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBNoJw4Xx06IaOsJzKtwD5g2KtnxLvq%2FHlMIwvFW7JhLJJf%2FVaJhjKalzOwDk2C0gf4qDq3QE7v7XjuDRXvzZHqXns5QHucymo9s8PfELGAwU%2F5SS8JphB0iyTczu4YXDIMp0h6LR48vpv68ZOqhzNMy8EoyMzYkA5%2FZeMaHiRmmisdK374GYd6UfgVwsNKMhALK0ttPIoamvRl2wyuviOI3NOWAjtpSf7985%2F5FU0CjGCS%2BiwrTAKn%2FsrV1sfd3YPT92GrE3odraW8lMKCLZgrovKY6C97LCIN4y8XlKy9HL1vjy6%2FzfYYc8UsZbAUbuFjVnKklSfQ0RCuLA2DPSl%2FdCT19ifLSFEunsrnsbW%2Beshfn8jsSkuIVOVcyuHDZxT6c4%2BslQOxqIKuF3G1Q4JR2i2CCS%2BtD5rC6ONVFn2fgo0At2DCwe4OokQ1zwvq8J326xbKSZ8aA2xuTRiPqw40g7utAgy0t7VcBJcjyAGCja4aiOEvuof5o5TBMTte47CL1VO61j%2F9CE8SEQYnyzLefpZkCDo4f0DXdKs0c%2F0%2BP8e7HDRBxGKctV0tX%2B8Te3pHdl15XuzWA0TACupIXAmvZGI%2Fy%2BKLKokWpCGewFEC%2FV%2FLoZNc2RMCldCO4M5I1P0y1EQnM4XzPKwiownu3ZyQY6pgFytrN4bI9PRqMadgK5yoVvG6c9XiDc2bF3yR1aGkdutadY5OUzNvl8laPUi0pZ0cdIN9gDaFZ1IWoFHT%2F%2BMb4Zu7BrWGFATJvy9mTuDaLIVyPTY%2Bg0X5gTwYyTZVI%2BNCVGmtuKaQt0D1ba1uTwhwXqEQaaKtwh6PprHboW40WSFLhxN8z4C1AgzGrvNaf2cAH%2FX39kCoeR4Ca8xCGHh1giNW6uOE2g&X-Amz-Signature=9fc1b89623d8bde2775898b11e834b5e38f19fbe54e50a2c84d3868b20723288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

