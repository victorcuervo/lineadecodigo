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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIWA6BCN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEewFV00ABazLLLyYHsdYdKgg8xRh9dXJFIdVEc1xp1JAiEAxaTOjEt2EHkU%2BRYh8qLjEw8xt06bWPpRr%2Bo1o4JY49cq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJyw1X%2FgP2OVcubrHircAzO1txTB8o9gKNOwJ%2FOWWzzfkJ6Wya3YfuUC6rWNib4ITks88izbY%2FcZ8ynHu6I2OxKmCq2MIIITyoqdo1DA4yfx5Pkm%2Bg0nymzeVZjuP%2BQxLwk3gZo7J7j4IvRbFsup31TwKQLD5kXo3%2Fv6Udaq5TAvIFhXBro5DY63pc9UWahym4brYnk%2BPMf0yuznLQl7D%2F5NOaGRcLMgb%2FMTbnnlpXZqJnbeVI6qOGpUJzIrgQzsuQ8fspKPhePyQi8Dry1QIqgUNBWV%2BJwqArF6Aj%2BDeApYgwzKcceT7JwsD27LiRRyF0yjrbOwlncPtlUnhfYh%2Fxtza2hrFCTPmfRJZ1XBikmBDZ%2Be3V1W5n5vj%2BXl0rPin1UaZJUSIhmYnQB6bO4EVerfmh2yCwrtetX1hWJHlluJVfim5rK0W8XCDdfGkF7pTUVSio1eCBRFYYzXcGo2sUXBo89IuOeI5zD0fNEGmd3tExhc30PfZ40z%2BepMte%2B24gDKmCi%2FbIvUM89Seyn2oUq8OFoB9XkSaEVKeP6C1XIcsR2xeZRxK657aE6O6auNHBNHkjSn8M1ZktBYQP06KVKNlEcj7NEs9iRkAJzJGheMU%2FgEjCZbdg4GJrm80nZu%2BPsHhcdFZlkJQUqyMMT4wskGOqUBaxpzLqP%2FzGA6oEtxu6nidG5bDZgi059bhIb6InepFo33C%2BpjtgC4hJj7IV%2B6Ds1NZC2Iw31NAs1lsgpzMKOyMTmKPV9SZG7rNZ6Z3PvgKWgmrU8TRuiuSp%2FAl0ci8Y0fpWgGiFjn3Q8wGENLKZhYRHmRSyInq2nmccsRXZs%2B1gSwWnmgrt5X3%2FKvJC%2FBEd4RZQCYVSs%2FufqMXDZcD%2B0qy16E0me8&X-Amz-Signature=d6b33d19c0992bc308c58ebc9c243a59cd7862a812fee159e39a6a15c9ebf698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

