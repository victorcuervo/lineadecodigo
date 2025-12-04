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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFS6VAM6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD%2F6nv0ObS0ZkJC6feLZcW7LdNA5BDZVqst%2FjALWtzyTAIgNLexo0d1nCJHCnRJIT3nosGvJWL1wpotVALNOuUxDeUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIGpgX6K6rrY3VSKYCrcAz6Bqp%2B3E9b%2FN1td8vPusTMe8YgpvWQXInaZyjSmshAq9XtOn4TaqYJtjnWPDdgH9CO0gSTIpE3C3rjY0zC2eS4rVjGPc40p44FfGu0Rlx43PTRoH9wpJd8AMm5n1mK8RwGN%2B3PkP%2BarYafBd72W42YHl69Z8gp2hILbI%2FC5jz4nsqBUKr968uLpjB584kb2Bc%2FXGB6shbF%2BbRYkvIqF45MEAinoeaEk7%2Btw%2FotBCqMn1Uy2AL19p2t9lcdahliRJXyE3PPR4iLy7hll9DHKn8WGGV3zL%2BwzJSRU%2F1gT8lnWrg0ubSriCzgPdqvptljmNujGAD4YW1%2FlhTdgCyCCXVRot55Ku9%2BUhS%2BsUW1lsauKvkS04XF39cOWNj4xYlJ1LNYkemwjb5RCAXWL%2FgN0WuIZHp20RppbPq%2F9wxoM6hTvfDqlh%2BmPcLh1H%2BEj1QrKw9KYGH%2FXRltCgwl2cCMy%2BVCqRalmkrW8%2FjPSiXzX4ZSrTx3109JDapX7YM3Vrck4BE%2B0sJjmw4KdDA0EUjUnKMR19seMkQ84LF5PnM%2BaDlJj%2BEQ5iqST2Y6d182xCQZAsVTjS2tMREVsCnHnzAvdcvmNb9KK%2BPDZ971BE9HimWdBS42mjr7dSsnY94fvMPXIxckGOqUBgXdK0dXduZrnaI%2B44jvpdQyxygPh34plIMr1yT1yTYkH%2F28RLM%2FOFN0lh64yqG0IbI8d2PgxyKlWRc16wdP2xvSAHJggko9rtL3z8uyd%2FiqukktEuZ%2Feg9%2FI988rvAtcypDEIW%2BCKNKDebrOom%2BiCcVGw4Hu27yiibJ6yNHVcynANhrUB0W3fOqNACHuRnsmvVMqRvHueYXYGXeyjobk040av9Q%2B&X-Amz-Signature=e89b0c290f8a7ee64449b59049e265d4a124692ad4d326d8a33718a49588c076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

