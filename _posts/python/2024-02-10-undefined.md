---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSVPRIHJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCR5vXbw9wWTSjfhGZ0deaOKJHEk4b58GK0HGJV7G0P3wIgcyUD7vKXXFHl44Dt4KN1C071O%2BdeaONn7gLYQd0GV1cq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN3CNVdDM%2Fnb89Z80SrcA4FlS6NQTonxY3Ej8n2zX%2BT9M3ltFuK5WAho19DczTMo7mAiZNz1u65rQz%2FkjBjaGem42%2F7F2PR%2FF%2BqDaAo65rgh0178CKTPV0zLpipadU2xmKzqOZH4BeN5acjLDrXKZgmpU5vqqIlxvj%2BCaPtCl8d%2F506ilGnYI%2BsefWENm5bdx%2B5zvLgQV6VyGQBgcBpieJ7kPiri5RB%2FOOUe%2F%2FXGmNurGI3TaX%2BqiUMTd1ck7rvoA1i8fJYugwbHkpaGJm0mOX%2F1QJWg5yI2w7WiFY2RImYoF0rXdyftiwRQaN5WtSRhGAwRGE%2BgPag6BycxMXxhRHR2ZJoADJNpM8XzTmdDzG9ddyl9%2FkGLE%2Bs0xKKL0wwxh5SC9qNcNko10wfQGaoXwGdkGYWy6Pb8maLH9gsOzJjoSRZM8nA0JxWh%2B8jAutSLX7B2TldpjcVYz6xBuiBUELt%2BDdf%2FVBFYcL0%2FklT8CMbJ%2FINiG%2F3fDvP6KWZZ7nlLhY96y%2FDdsxGCmvZ6nGT8r%2FHcpdTAqcb5tVaPKpXAw7OAk6Bvr7HTpdw2hBwCm%2FbSMCTW8lbsQcD278dYsVGEyFsHTKi2wkdIVHSqygg1hV0MgXdo2CqkMgOr9Uzzl0wavE2BPCGK6QoJtekwMOSav8kGOqUBwlOReFSC7R8VCsPbBtnD0Cjtm6gKDnYYQZEjYl3Axu1zZpFw0Bow6vcuynYwPRlCnU6iynqIvrYGVC7LP%2Btj%2FRAGkCLEfO5D5hpJI98%2BCyI7EAjYdhsPAMglpF4xATz0Szy1Gl0wci8XdbweLEwuzIHK4%2FHLA2SbE46amoQO6JehQNISXKz7YNg7X2l%2FcLeVK2Wp%2F%2FELn01ZrbI0ZcUsGEXDFONe&X-Amz-Signature=71ca9b97c8444b794f98c26147c0038002a6c5cc869c5566d6e454637867e6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

