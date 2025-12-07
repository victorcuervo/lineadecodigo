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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EG2YTXN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1A5v0tpcLM%2BdmbFoLSAok%2F7xy9h9UxpLZx8zRuEjt%2BAiASNxAoa53njcmRneelRAPiyoEWqrD57VDrS4hn31UH7CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1DTLMj3oVyS5iGoHKtwDZa7QbSYssz9u4E2PV6vTBA5cq0hBDz0%2Fx2zcyyr%2FCk6Z%2BW3GWlQc4f3jVQ6WodSsAIOWNndSRG3TzbbBISxnn7N8hxSJ3kfaa%2BpKijlB0dx7NLGUBc%2FRm21OX73nIjJoQ6WiwojLY58D%2BmVBy9bSHt0Z3GTmqLr3E1gyhpHxCqeA7l%2Fa1xTZt5JqlbKAg4t6d1MQMJF02akfBKil8XubAKPSme0AXKnqu6xA7QgCL7Lz3TKONRA9HiAtD90IfgvkE%2F76q%2B3DjwxBUo2%2BwdNz6MAsiAHT9lJrgH%2FCfVhbRj77NUc6eOHti%2BRthrDr%2FMzc5G0C2%2FnIuw2cykS4%2BpY7UkzRFJitF0GTm4GksWxZ%2F9VN7Qqc3jLnltJ10qKxHGOeIH95QjiKWfPTYoqlQdOX0O5GaSsDMcIeDqcSiJ1eY1MRMa%2BHmUg2qSGcC2GwTNvPVBXwGnXbuo2N4DTG%2FL58e0797B67xJRjHStTlB50hCNDlvdzHN0aUqGKLDCtQEsNJ6eJ24carItGxfug7Pf4I0REbY7eIc%2FGj1bvEaGCtMq8w3Zn5i585AM%2BJy3RMavH95u0DcJoaxH8Mm9Vkz1xmFpmS3EzpaBIiWMFqC0wBJDizgR8g5IjYeCRgmcw5L7WyQY6pgHO0F3V18WqOAbZfFyfu3V5w99ag%2B%2Fcc%2BIJgIeP9GjfM4Vv5K25gCD2GhAGILcesP83KKsavhf0XVThxMnG84XeAE9CU%2FGLLPBHb29vdaJXfVC9eGP2wHikaRNLWo4CxvB%2FA6OSdrcOPdf5M61%2BVYuoELv4yMihzKOgt78OqrvAJBJT3PkN7lpEFyLt%2BYzpfnyqrwLcbQMTaclEC4GRtOVsKnpOM%2FrC&X-Amz-Signature=baebd04cba26457435d9c04b119d78c9ff8757ec5df69d975ce1dcaec2d1ddb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

