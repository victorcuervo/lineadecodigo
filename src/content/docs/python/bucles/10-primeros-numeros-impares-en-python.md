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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTCSN6I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjSUxmjbNTh%2F2juxzRr4UT7CpOGbCRSS8RmFa69ab1MQIgLQx3s8EAuUh2Z1MYpaH6lSVwRV5N3rSco04Ms1I5ckoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjWPUlTixikBLLsWSrcA2FrEeSPRFDhYn0duv4jV%2FgeJ2ALw5xjs8HQSC4sfL25a3s0v%2F2UC7UOuAPAKpfRf4O%2BrRt5tRVDUvSvu0P5Ii8UjpZi9j1WslaUDjZNXxDwthnvP%2B7G%2Fy6d45awRt3Bhh0JnabsVR0ad1UZmnfCiEqx9spgu7Z4rz6efmCJ1727QONgSmVLpttHopX3wegrrJfR%2BdXlSdnHx5sIGe%2FkZBzwOfmcr06h29248yFjGrOCqihNhvrg24C4H%2BYnYO%2BrWDFHmgJ5YSHi8CQ6tmYyKZOaVVDCWRtqD8MGibTI7gw9noMswSDWcl91gLT5Tk2%2FSRM2UXfrkivRsSt11yHTyGlEUuZLB1NYZrDZnNcYmxdsRiKdr6vi6%2BaraIzDptWrN4budROlw%2FarmUrabixU9TZyjxbCJNwD9sIZ0y4JyuSVzEoS2TKSmKe2G8M9id6Qwt%2FDfvkJ6F1zzd8rcvqgsGaUty0mKvrNsDJFOzvPKWT0Pay%2BijVDcagMlupxK1KpoUNAkojUV2ZoaN5pUrzbBksZV%2FxTR7eoo8IxZmAOnzX8gbkOzev4wJPhH94%2BswqpuOuPZC9dqignLuGkPux8P0jOXQqw9mmepx94ibP46C7w%2BVXJiB616iIJ3eArMMjz2skGOqUBXsorNxJa4ro9zdJqjVi0JQAW%2FHXChXUsj2UnSslga4DT69bIYDEbLUfxYbf13mgM42ebMfb060SZlKr1E%2BX7jdfJ0Kg5%2BU6yBhdkXBfwfp0UiFSlSO%2FRzUXM6xBwCzC6CdKTThmqtrOFZcaDL8vaciDxsket2Nc0pHhp7GViENWc4XD9GwG%2BGJh4Rj93i9MOZKZpRHVSaAW9Ai5e4yVoGfg%2Fr0nt&X-Amz-Signature=b93de64e6ae6db8b77e641f61b700c4a1b77f182ed1ffdb28fab1c2e130d40f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

