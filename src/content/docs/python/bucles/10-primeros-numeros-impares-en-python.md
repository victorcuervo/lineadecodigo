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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6E6SL7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU21KgbWIQQQxh7WNKsnovIyw4EB%2FZ9Bq3qo9M7PrXkQIhAMMa%2FIH4sp7RWj94mWermbptCZuIbyxBJsOprwej8d7hKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRjoKPAIrElLjQwtkq3APpVzHr5Xvz910PX4ZLtLdoXfDxTWyrY9gBwEWHYTkG7QF38JHyvgdeTzU6GhU5S0G0kDAi1K9cAO6S7KM1SA1V%2FvH6IAesEwQfdmubu4aZh2ryt7pjwsRVF9UlSzIWgH%2B%2F2%2Ffw2bVqcWSvIbEGa194eUNKnYcT%2FgNU8khQZ4vBKRobeY6t8CsUOIiHlgk40hAy1gk8yfrVENcVTpJE%2Bu1qpbr70JsMIDDwg0TV1ljItVHYFi1XiTtocJvdJtYgZLHGz7iQLqjVMHe7g%2BNfaCqSyqkg5Ct9LBuBPugp5SqH8TFUWtJdzFUiXQIdYqw9DJIiDg%2FcrRdjYGvt1vYtLA0ntLd6vRjXRJTiy7joAfM1kUdmgJ%2BYPlCfgYEXZByxAPu30cxDwemjrk1doudvn1y3o%2Bv5hKZA%2Bqqqdg3MUHLX5Y%2BQRWbeudzl1mHXR9s1rtKzPxnJ4%2BAA4%2Fw2Q46uNIFC6oDtyz7XvHYNxmwQFkYpYOvnwPbpXcu%2BOl0b8RZpBYLCpKMgj0xXuy2PKDGwy7Zd6aEfL8bBOhhK87hl4uMeawgbTZOJuA3M1qo%2FyVXF3UCvqowK1naUro1%2B4ypD0c37lDUVWQklLWx17ldvfgoLTes8m8deUFzO3aJAxDCywt3JBjqkAU1%2F2Z7MLGKH%2BFkrVpL3Z40eefmJ0at6XwMqEVgsesYvSEX%2FvHdeIyJzExJ8hLyiWzkxQOAiwTI5OS087sREq72n4TUxcy0F8QGvmxQqcrrW%2FXy1Lh6%2FEdVhMuH986RCuUPd%2FgClYISADITWc8Uj2oko27c63rd9ZaOOx6TEIzGKnl4clpkhOf2gpOi%2BjjnCN6llVe5wZ%2FYmne581hcyxob25Ve%2F&X-Amz-Signature=c050ef8ec7f7d47f59fdf1489eaa0ee38bb3b16c6744f5b28264af3621375d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

