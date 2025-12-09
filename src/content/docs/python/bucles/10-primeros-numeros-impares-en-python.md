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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U2UIY4E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ8iBRy0l6jpitzYiI4Df2NYJem4ttK2SGDVCp0qETiAiB4CWAKeuRjqcwSeqpWyCAtwbPy%2FrwZGodbKVAkxMpctyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsmTUnk76TvCmfb9HKtwDbFynlE1O3Xr2z%2F5wOgkvmDYWkyz45nkxI9pqXj6cukwlulI3OrQXhz7q5QRneaa2nunSXgELT5yo1VtmwK27Wzq7fuiYXXsWfssTpU6vlKr8wiOvGZHP1RHZy4y8BIBDe8na1S4wTA5rGWiE%2FRKEJqj5ZWx6zgpU4TsRLyFfGt611QdYUoRMqc5t8vYOKV81TVQ7Ocy81nGScmkIxJDnXnTnk28RjRSVRquvFMNgRRAWThcx8pmaQn%2BrnzS3s%2FFBjVDxX9KDhzORarpaSsKiQ7Xe%2FpQ0kNuk9g2hpcyvKO%2B%2F6eaoz3EI5%2BKcupcIkOXeDs5N4iGE83%2BoO371saQCmuuUFYTjM9zP1R2fidMMGpy5ACakeblqLJjQ0oPkxc07LuwEAZWlihuhNz9rJy5UUzGT3yb5Inov6oZVfYr1j7WAky1OMujn2GV%2Bk%2FaiJj0m7pJJckNpj549hPU8WW0sYCnzuzIY08T6m4GrnFjk8XVCEsQvEWgiyg3NPyriWqs5w%2FH1FrRrj23UdcvnmWEc7eo%2BhHZaXbqp9z8%2FgJmifXJhqDxFWwPYhm7nA%2F0uRbLaGiNyQuM1DpnkZqyVOa5aMJUkzFrbewujpEFvhpjqJNqu%2F%2Fb9H0ur5jYQ%2FHowt67eyQY6pgEjjCHM9wOwkcUm5mpBKGoPeAfsLGbK0dNJg0OCEp8032uiY6aaynQEJJdyv9c4SMDivZE4Suxmu0sE1GXD5i0bVx9Eu5vTkqpf7MDmKS3XS6KrHmehGWKysmGUAqxPO0ZC6zA6AH0cktcDeQi7h9CmoFO9oD3T2E7YYPHDoztHWHZvoz3k6jQ%2FN3zdNHQy16qi%2BjeqogGv%2BpoSEiSsdaCaGnybUSs4&X-Amz-Signature=f014634655c4ea266d0a11dde08cb7e47a74bfbdab919c0ffdbc6428c9472922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

