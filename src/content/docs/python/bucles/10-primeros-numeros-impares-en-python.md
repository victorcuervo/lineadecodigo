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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J5OVQKV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDbU3wOITht%2F2BaXAPJ%2FxzlnOOVzBu2wj2Ems3VTCq21gIgIVqYsisaWfOqLbLnjyrcdil7tx3W6WZOSVutb63eUtgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLPldnkeyoVY%2Bl9o5ircA4FJ0OlbVzG8kYDrZZyhg%2B9vkPW7CptDd756n3l9Uxt20df5PWKvscdmj4RtrqY4IXNgeiqOlsc1RTm1cD2qPH5jD906v6x5zV8G5pdlZdbElBicDCwo%2FS9qsNEP9NiUdJzNaLLR5n3UO%2FzzlNXdzrhZfmOUunYmms5cZBrWtCfNMDr23zL9Ji45BrGXlJG2cHbVn8cInh2MQlmuptszK2gwxJc0bjo2DzsX%2B%2FdN1AJsFEH7vlwp%2FZeyVmFdmkz5%2F%2FpANTtfRs4CEOBQ0g7BqK98pmcuPD3930VDaYi6QRs652Lv3EgXlIb%2FuWDI3PN3odKiPCfTMlDtbxJ6%2B1aCYnC478qqlrcPlItsTe%2FATBic1zuyig4sf3sBOR%2FpbsLc%2BMdjW6mgVpSE9%2B8E2HtI%2FRaK1Ew4CwpPuwwbgODmFhm1VhJ3G6vwoophOlHYomFpjbjQRqvbDsMMBdSU3KSYk5zYoMWu3Y4NcFB6qDJdrUuYSitI6JeXWGMrj38gPdZnsyeIrM8ITrbbBlQiq%2FABpHcCLJpygDimLPpHjaGwT4SQ6bxVk5MXmu1DnrcQxgdHdjP0JcBdh4rR7CGH%2B2rzouGkZcQ3eruSs4Mnook1QK42OBwR4sfFOSRl9qHgMJqDxskGOqUBJ%2F7hxv6ty9JhAhKoeX%2Bli6PETzZz8AQxCXHnEur%2BVbbVB7iKiyrXn1mh0jtGOiede3Wd0MfvVH8NfYGwF%2Bhe%2F%2Fze3vqBggfiqERIFK25PZa4qKV4LxcNjg0inWRuSEe8%2FffkAwrKbbrffqfpa2chuQbUttjjlYzcqwRy9STwnCcHP2eCHQv3NT19EC4flFoZoPiEQx0x5SV%2BJBJ8TcPRa55k1atB&X-Amz-Signature=4102cdbed680c6ebc91840459d18c84d7485d54c541bfacec849859f81dd35d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

