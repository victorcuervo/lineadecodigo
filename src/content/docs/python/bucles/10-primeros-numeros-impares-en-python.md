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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBQU5ZU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDkCEsfUd5BYwmiWLLHP6CUdJIO5jFMYpZCfq7vxRGzZgIhAJ8dzHUp%2BdAI4xLRACAGVfjZuB3EtoCQx3fAiZrVY0%2B%2FKv8DCDkQABoMNjM3NDIzMTgzODA1Igw0SZXFsrjXe4ovC0Eq3ANnYRoPzkSZ%2FkQFNDiOXGBIQJTJw6lyqladDqUdPcG7ZChO3ezThI7IKA%2Bdim74Pt09xaPXLfKfao6NH4LKL3uLTXXSn0pag9rh06b2dk9jr1CMZ6goFkKCtuFE0R6wtG7CFBizUWpd2R3nOZy9i59qL55RKANetqhXuch7eelAmgizkHMkHsUT6Gdpsokwo9aETVcd8KKZg75yQ3%2BiWb%2FOYADFoLtt3j9rlN75Qgevw481f95N03R8G9Eg0ofueYUdEkstYIy5OsFaJlz8CvTsHENMxEUHeFsvQ2uFvXQAPM9W0LXbIcKM2WdLIYPtFRJeQVjoDkvOPParDJfYHTvyG57nJAUkkR3qSdniuNAYcoh98kc7EnUAPhKgIELdFV%2BknOHQnByw1PZVTK49IyMjH0gYZoxieE8sxUBH5OC9i9oXNruAT6eOZT7CRxL5%2Bd5OOCzFEIZlLkcKvieY7xycRPzVybDq%2Bg9P5k5UXizsDbuDL%2Fvp%2BvL7V5zYbhvjqvogN0167auOlsUKYzpv1JZL%2BhBrR%2Fo%2Ba4SJ56Lj3c03%2FwkQ8Dtzq5A2SZQbswzYZYFR7eHxG6C2rZxLuU5xb8l%2BvW2f5yNvMVsAnz9DVYDUhBt0tHzwtkKPZbNKiDD1lMPJBjqkAUnQmkv3l%2BTCcyZ1Dl3GmBTdDdZiJwUpl5jQ%2BDf1flLOI2cBlTHbiTmBj49HoNlI%2BeG6xPvfo6o5IfrhVgxMJT6x2gOrp1GGUNs%2Bi9hwD3XZMvHs%2F4R5f3%2BDBlw0SuClyyZFx%2FeguAK8aPt43PYDGATNeWqEmNB04kTZKpuQcQW9NVkBvh3zkbV8Wguk1NDanJIgq02R5%2F6qh%2FdSSEUoMvOi7fkH&X-Amz-Signature=570e3f213a1cb979787e67311855c9b02e1be53ee282d72702799accb624d3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

