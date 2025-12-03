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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZ24654%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFXG5irkMEI%2BV8kxlRYt22Iw60JmcwkQW38JinI3ADn7AiA3SWugr%2BgYTN2Pjf31k9KSkWtZX%2FT3PkmFhGRrrQ6aeCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMuFHjwPL9hJcyvzdEKtwDiikUff2C35%2FSBpoqBGmWvWCQKr3qVvyA3glnC0xZIfBucmltcpBQlmVGsHRWfqPeN3IO3cQ902hBSUbAPHAiKv89R8hZ8zbJknKrnMPtKNfaScjk%2BE6%2FeLPT28FzHRay1fKLEUOEvX%2BoDFTz05GBkOcgQ2G%2FaoLd%2BncxOdC9A4SpG48wVw82rzzt4vtJ0Z%2FR%2BDEz0Qo50u5xbkjuJpfR3%2B0%2BB9PGWgPaX6mXovuVliSghNJ1rqoPcW53oXMS%2FXk26upFu6frvjzsKT37FlnmrK0QXj%2B17ifSH%2FgG%2FmR%2BmHyHAfhp81hVnBSouDN3xNa%2F5aW149mRd3IGSDj2AD9cR7DekNK6YuppsdJAOywfvmmgPq3wKSx9PwNw5%2BIfq6GhjQvwreYsfV7cq%2BYBAPn7wP05%2BO0yJEtvM79QHTaD%2F7tdSbiec5c3TDaojUtMg29AFTFe36Z%2FtKePMwFH27KQgY1sXqMLC4a%2Bo3aZ8mcTzbfcNojij3g86mDVMcJFM2rzsTFTnclQ68RE%2FBQAAR%2FE79GmmAw1ASaaFXrKBnd9IiYEM2PlziZvybIoo3VFC%2FHQGFPt1NmHVYXHAWfLoZo1QcUXhVxO%2BGm6g8wNAKnHMkUlRY6GOXhXEToaLTMwzpq%2FyQY6pgEUBkW1U7l1K9Gkt%2BL12YLHLVMMytaFK%2FtedF6ONQYOPY1TllSsi0xQVQiV1OrXYH6XQqO%2BV3mN4y5mBDy9JMsnQFcRw8myZeG3%2BeH8mCN8zLpRafpwyOaeKijqIuEoDqiNRkhFvPbbygSWWz%2FDfLNxRI01AD37HttqG%2FOzN%2BzFRL9uBx0kZ9XB2oKHCMrfcxzEmLGhRywxKO8lOVIuEFF4S9xX421t&X-Amz-Signature=33d5809a04556b1eb6b4ba7164a65158b2073e07534634bf1d904ba6cf5ea012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

