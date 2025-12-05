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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVWINU4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Wfml3YOgUR1pRds3LlkPVUdhgh3Vr6mSGXTugT5oKAIgAXNwz%2BoJ0gYZ16P9GcMNcajn8p9akW3tAMWW5GENCkUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIQ%2FR22Je13rRBpkTCrcA8Nln7Gs%2FAX%2FAVtriQrJS7Rdu7c58avfKcYjJYuRwbQLS3WQzjjwtPgTvoWsHXhimRsskwPLOmQBhvtWILLNTpA0aR5MqnEKtKs62RMSZ5wtpk1wyhD0dXyiGFO47%2Fke2X4afE%2F6%2BLG%2B2xOyp3nyGfjnl%2Fu766NFPBGZ1imhZjnpIkOnZK%2BdY1rPWWU9kGM3zFH0P%2FfNJB4GcM8WeBtAvzFwLHsGD8%2BvHx02UvXxOYM1LVoVGexODzLjy8ILjx5gqU1L6193ECz%2FZXa5kg1MtTtLYv4btFu%2F1V2L4gFsG4Xfnp%2B6aQ9fKNjUULvC5Fe0k2QLsl4xjNqYxEJVVpWIrNiCA50Eo6cHv5v%2BsMGOYCf%2FRaYh9sn8WG%2F7%2B0vXxylH9yFIlrTVsu5OQL3CDr%2FDvIYKCQP8MnVXPq1BedfwFvi9MQbRuJtvU8SOhTAzEzn1pR%2BZiUExfnYzT%2BEGRyPwiPzB9RrcmFJwJ3T6ybpgk2A0VLxB0TwkTiaDpV7mDjWL4Gf0jIB58MTErY8sWLqFHh0sXwCoKZm99tDtjOxE57vUdwd8B5EwJ4jjpEqX4Vs5Tog3arA62E5tu9pB7CV1PerLsWJImf7kd%2FjCG9tkwG8Ohp2h305jeBFjYAl8MIStyckGOqUB0ZkoxHM%2FGtRQQtVz%2BkNMt6WrYIE6habuggO3WMOwZZJuq1IosAwTg6djJdIS5mWuzF6FGWeaCO23O7MFrqEg8fW7c3tnhBboxPvi9CFHRdlmdxgNALxuEKxvXqiRSiU8ReCj0Zyf0ZV5%2B5UBSU6og418ctVp3jVbuWGmOlsw3pyfjiB%2BP2suBdWtmTc8Foe5cjHFvlEWCKdNUE%2BKCZVl19Q3mU6Z&X-Amz-Signature=36cffd92419f5874467d83e2edb6c8e90f84e164c6390bf4dd71f0bfb7ad6511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

