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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF4J46EH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICVB6QPEwaqmZ8l6%2BEE2nqfOZShEyB8fFgJA4V%2FA4U5QAiEAgCKXw9mklgUfuSw79Y2t7lvAOm7oH%2FiXo73%2Bq91L9YQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAToA6XIly4gFkKlqCrcA7orrzI%2BZtMC%2BNUexB4201olkPMrB9XnH6O0C1VQj19Et7HRa8yFg3VZ1jP9JbS%2F7g%2BBZI6odAcFt%2FQ9417tM3w43i11JgRmGbm7ixIX46jVm5HKw%2F2yamppjVRX88X2YQS5uZlnwDS2q2yzCIzG8SF5Na9yB1KAb1xCMhTAmTspxy%2BG2wBKQnc1ruZsPDAqWulFK0%2FLcyFBo7JIteROSdfAF98X6zuoMY599DCx891dfZvwrKAc%2FjmwTez%2FAWMvIiFhIWGvWe838nzZ5%2BLpLA1PiJIkFCPFDEcRnBO2sbmaUHOws2ccsV20IyG357DDubXry8B5a3M2EyuArkSn1dG0IvjzTkRJkAmLDP2t6tO2N2xQkNl%2Bf%2F0kNor2dorsykOyCmMzF2i1EEQ2%2BQW7diZPk1RHQVTU0LMIBT68dnSLxDXgaxRqe3HDqcY4%2BuPNXBWdzx%2BXSWmq3d%2BhphxGKKZxMGqV9Q2XjsLQ38itrDtjMoFe2ciPghaK8twQ6rn7xEA8i1waaRwbcNBdJaaIH4uyqH5%2F4wJnFBvUa8mNEQrC23B6xiV6m8SADKvObB47hsHmcKYt%2BMNXgHvH63H76DIpWL81KjCiM2c0kMS%2FXne0qN0JpQq%2F0Q4bXg0TMOnVv8kGOqUBsYNGiVLQvupkU3K9505ZbQHUYXVSNgfCFiMiDzwxzqseQ9qCBQfeyOjlBmO2og2J0V52IsN%2BXTMWy6JHnri08KpsJO09q8Y7hD2wKGeuHATLZxwfAtiCTNfV5%2BBh%2BOpihY2lvJqoh9FLBty%2BvnnHuw8P3j5z9QDt2H3OvbzYbDIFtOEvlNwa%2FUfhiwAqNQjPeCnvYu8yW3JUwyC6v9q9oVTwD1wm&X-Amz-Signature=0c49ce3a7cdeda78394239c1ec4c177b0ec314ac98fbe71a560a4c38c18056c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

