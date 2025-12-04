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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQLK22Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG38IKDcgnjQqUP5%2F1o3Ce0357Z%2ByOGeq%2BN5RT5FRB8SAiEA%2F8ObDFz1bRxuizEVOmCSIDfuX71pw4zmHPHaWb%2FLZlQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJU1GCXnQjlufFzqeyrcA6PafAiUeRw7CnBnVvPcmVY6%2FLw5d1Ar8aBG%2FWWMpRo0PXGgCGVoJ27mrlnaeaj3n6icTqwnE3h%2FVAbEV6mG9DBmXWYtAvAwBPwyb71Vw05wdQAiZDFOwx65FGtc0BN8xTAW4gGvN8B5Ha5uQPE%2Fo1MGTYXousx%2Bx%2F8R1EcY7HYqqrqk%2B6QLtbprD9mewBpvIdcbajklVQrhLb8OHmzOezW%2BeCOa%2FJ8EKlWVn4BYjKHUDMcMLJqXbwuU%2FPJ5OIxNZc6Ja8WtyfBU9psxXGrt5B%2FbL3wwEQ9kEPz6y%2F6WqLQxnswIZ0eIVwV5po0r4TSF5YF1470bjZkYbkwosF%2BZe%2BvAYs15L9qkKbysDspirYKVXkmk4%2BK37hFKrqhnS23Gsda0oJM3L%2FK4O6B3j21%2BXt%2FyITlQ0kYwNcVUhVjjIC2nIAc4cqVm3VZeh%2FQogkNdipWmEiVXgtlPd9ynOVCeQJX8r%2BVQU4X1fWsPcxH8%2FpE2sYDWlhS2ursJN8VPf2fz%2FRS03z0Fj12vN8st1WsCVXv6wtBmoItKgadYLchxQrrJSHJ3xzjoYm%2FIDeKVtQuKuzWq%2BB%2B3Lvjcu3vDXIMCTJssYgw6Pqc%2Bj0lbyhbOJLNYWjustgTTvBrsAonkMNfnxckGOqUBdX995GIpci3FujEVohfWipsBQexnmOUoIEbU7e1%2F5D%2BPWEbwgW3dM5lF9TReaLLStKW51hs1trlSFlec49TFMebx6ybF1OHRoCt0teEpZohD7hjWkg%2FxIgwh85GZXQVtj%2BIeQK0crXO1wUw8XCtebcyz8BJT%2BFWLY4fW9xJsUpgN7Pe%2BmA6tE5isxZPv32aeC5wPqI4gDV%2BfNH%2FafINlrEjq%2FfnB&X-Amz-Signature=b9efff8a1a05fbb8fc6ccbbcdc97bb6865b20d03e739d0dd378dd4030c010c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

