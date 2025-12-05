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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7POIR7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzL7dlQJC2IQE3xOn7gxYAg0KB%2Fe0eRRU4ckW6cX2sFAiEAxxSJykIfWm8MPlyckNXuZDVXMtOn71ZtHqKM%2BHVTGwoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDg2BLg1b8jSL8yXISrcA7NsHRNIbYO1EENvqkJnNzkhjqinCwdWA3nB9ytlC5JezV7yAP6bZCxrLhwPapY0bcdCENhhb6RvMef8JO%2FyWvoMxgmvJFT%2Bh65G4QllWeSPn4Y7nUSbdVM%2FNNi26n5AAGRBPt%2Fq49GUpKwQ7Ia4%2BGPysHPkDAJI1ADPqMqtdBc0rM4SqH8%2F8sEdYTgSxgZVlxTcUGubkEmGNc0vIOie%2FrceHnFF1xkGYdfahd13GOJzRU3tgQNaY6fyMB5toqUjylIjUCQnQKu8%2FOwtvbwzPn9t4bQUcWGGISd2LvI68jWTR5apgh0f11lo47LXQ2cQe2d6TuSJu5XvtiIag3WMUW3gwH44j%2F7Sp1ewP2oC45JSN%2Bj2gCpTk0IkdRZEkuI9X8accdnrzOpd0sBC5xLomtE79E56u5n3cYCuS4qlsBPJZ3c4frV2%2FgobQ1KZ%2BnUYZCJ6%2FyDXqdiRPUHuNBw3AvF052odkoP2FCs%2FjcSLGlFhp2JbBLAH8GQIgS7CixLp%2Ff9nfRcKAA8SyuI5515%2Bwb89KWnXXxfn0ANMqj6yziJ48lCLNffJqPPEqp%2FTvPiDHFuozudOfowKRSASdWhDU8kLbbQO9jgGmtYkPRIR6ZyruFawsgcfNpJ9nbNwMMqMyMkGOqUBcWkybfFoSua0xGrfaXuoVlnuGzBjlAwkwuXjAmWn%2BQjSdgA0soqSeiy4wHNAWrpDqbmb1UcyQ6fLxp00F3ttANczqJJuMDCORkMsqM6yWooC2ShZLjEfuZtaIdRfL%2BD3gpHLCkYqBjyxMxUd27lGyr2T4MfRhU7plcVq3W8B7cK2uVSiI566iWOZ6yJZQwz101KWSsT%2BlJnkuY23%2Fe1yIi6hcfJe&X-Amz-Signature=a5f3bf9dd1ed0d320a1d86cec58370275f53c5e7d24e1f8311c2178c2704c213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

