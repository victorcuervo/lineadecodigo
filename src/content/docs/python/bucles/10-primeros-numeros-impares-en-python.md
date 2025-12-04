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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W6MLCV5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCL3%2BRkk16bL1k09OmobvBUQVlBjMn6N%2BvTchyhZB%2F2tAIgGbYSzsch8lMXiaZWNU%2F4in36BS2kJARSAVrkDMyuGC4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOF60JtkSXqhpZsQ7SrcA%2FKVPjQRHXjIfK1huUU5vlLSafAdoMyfz8fJ%2BAznB9Gv7TLEcoM%2BYLzWAd%2Bme6bmLbwSDwF7gYU4ntufB0j8fa62z3ZkvUex9ifeRs3%2FYSn8BXcjPQIEl7tyU8ttBP5RTQw99utNgMHKqZyYKtcKg2kuuyg87KRA%2BNF1AEvOOT0XhWNUr3hIMZp%2BJf%2FYRGUeyufic1uwXtNTyorg3TruKqDPFr8knkLNGGAgQ%2BNSPM3N21L4%2BAVNRGpM03VuURHzlVx3zppPQP3Lb8O%2BdZ9Hvmo6%2BaalwTjFC%2B70XR3axmIkgA%2FHubTawevqJqqzGwf6sipDZtQBAmSCqr%2FOicI1LL5w9xYRhfjYpO9UooRzI%2BD9gt%2Bwd1GVZxpwjITc%2BrN8iJ0zWei%2BTOzw6yL6LOp7Q%2FZLO5huWmDdgnEy6TB2iCXe3jXJlVUA0KWitagDLjNwQO1EZkDzxM21342qcd%2BQ4aCtK8w3hVfBfhS6pq9jVrh7RGWeShvRVkQ%2F4zGTMiFxNYsubeNYVZH5WTw91lc%2B1VyRPCl0Ffwk8ftw2qktOXvT%2FvEDe9RNkCHCNpcRwJo%2BSAdFiAuhDcK44W7%2FW47WIpTFSsdnE3YL1dq5CXBuBqMKWei0e1OefiPfuSSdMLLmxckGOqUBkmoe1aHzF58A%2By4eg8FSIKNJrhVekbZoBW4FKevhKeTQFgptHaBJh4XPYmlgwrlRzPt5E2%2BSJlkdtu2TcxEwgScLboZ7IHXf6jykbeH5PCLLJIWilkpL%2BOoQSa%2BpbTj0fgrDWqMDExKkkuVciuQP34SRs3fpjgsyB2coBfgw8wYNZpdTOTqXYOo4vS8z%2FhThTOS%2B7fpeddPVXd2GlyE9J06bgO1X&X-Amz-Signature=4aacdc32cf3ffe7c8e6198082b7eabee1a53fc14fc0044b43b87a92e4fa6909e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

