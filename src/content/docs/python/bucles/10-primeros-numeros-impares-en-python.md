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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7H2WYJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwnlYM3PgNVNJzrwDJEhK4ioSS984ZC1Nbh%2FKvtZy%2FwIhAPWolTc%2FdY6vo%2F3a5202fhlw4KqYAAMLv5ZQ51wNxOfvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzarfxZLnjGQDDFgowq3ANgGKoH5HraCQxbu7D4KJckYHdJpmhPq%2FWiGmGqkI76nmee5BKWfiGLJrKsVZ11cr7%2FWJuBOqEuIWJIMtZy74ESoQ3MuE43Kw1eXrSjCDGUZ3%2FEbJ%2B2Pitlbmxv8tM%2FOXt%2BFGrXZwFDyNFIxwXd1a9ZcgxEMtq3agcRchPGnIZ%2Fr81VX2fPImAcrk%2Bv7PXmoe1tlf1jTpFfJQc3zTmB6dQ0uCbno95fiHd4ECWQdcU1mffmrABlyEhjJqlGipZVu8kNVvzM51nYs1E2KqxgVKAYqeWFvRK4mFtgPN65WWpgLzvVSklrNMknW24UN5Arfab07ChtI6ga9Il4XjEkWQU3NvUCA5payj84SM6iJ%2FFAqTES8cSVjaNBAa9XYk2KdzbdBpHp36j9SIay6QENzrazj0jrVPUy90fQVsUKT67i%2BfF9hLlSMNO24gnPx6QxTdptqcPc8CCahQSX0tKlZk9vVX0GUnVuG2Np0tKjvp%2FuUx3TCHuyfJ4jigat0qnBZ2MND7sBtd7LemBnyGgviOrDVyUgimGRUVESaGP1357zgr8wBKZ6oLtNkfGg%2FPKIsabjUz2sfe5%2BOxYmnLdKtd7%2FLdYTAa%2BM1FK4WsF7edIqrK0joWNce3nX3DKg9TD1o9TJBjqkAVsfzH%2BZnerzz1Wj9oOO%2BGHcu5%2BCGRjzcCHRkM2VkDhq3deYa3EV%2FXgoxi3xdhzSnqb%2BijUzwZAQYdFQZ4feYW6us%2FKHro2t3LG4dqU4a6vd02AjbdglspVtgvtwCU9pQK1AvjdrFFHwVXsC1zvBcXDeARt%2BxJKqSVwfn5SwTyN0U2HmL%2FL9Q5EtFm%2FzIv11DxUoO2XlFOrf09pBIAzMefcmx0LN&X-Amz-Signature=e236433cfd219a7112b6bcbe757c457341f3a5aa28abad915521e4c2e101ebf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

