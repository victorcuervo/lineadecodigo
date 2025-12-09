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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FE7GID6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo159zrQDP8uPpfcVdBRJ23SWJf9Fqml%2BDQTPzg6S8lAiEAyHk4BuUoS%2Bvsf5BeFLCtzCWsQSfRlLPnZHD2iUU%2B6ZIqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlQy180f%2BP5QoPSPSrcAxiTB%2FSeeCothlcqXOJLv%2FBiAWp0e9FFx40Mn6xnAPB84n5tO%2Bo6RXHAXFgtpVW%2FUHWjRlHw2hTCesD6o6%2BVgT3%2FbWdkUsrDhFIbgOBdIG7J3Yf4TEexjYhKjqey6Pxi%2Bf%2FdNXRtyNZ5YW5TbrDoNq8TzBVaB9NxzU7CNypODAk0Dqb7xAxNJj0k9B5NrUBXoOwLjlGKodAYnBHxU6YCkASB3dC28zVF6%2BuR%2F%2B2wnNM7dBk3HVLiwi5fLG5VbnTiKW55E9%2FOJo9qcYkKRlc%2Btxhf2d6AXVY4xKsLLeNBLPTEhCI5YBdaOv7cVmADur2RGyIxZNSISWICEVcCsmpbLgWst2VOObhRvXe7QNn4FjYH8xRa05qg3eUiWM1wBr%2BrOtBXp%2BZ8XRXpSTfAc9jcvztskxNK0Ho5kpEfGzIzCaYB0HBOLyaKhwo2JDqwnOf%2FLdHxwka6fimBilVXNSdUcVrfu2q7wEOK77%2BDBGvK3ed%2FVW6SpdB3Z%2BGNhEGdguYqqAvLUWGHoFzwkdUqdEVe13EztbjhEr0RQ1ZasKxoDHyGIm8kClWcrPdcAR8rpoHU84YT6y83SeiYwpk89NZiGHCoIfjJ36mu%2BW8notwSAH0fVoVA%2FSeUzop13EmuMJ3D3ckGOqUBTuA%2BxQIVAjFLjhFyI7jKubxkYxjGeuLeyyX4KoJMzb3deiQsZH9zUDTQpGwx2bM0i%2BAwRAdYN9YRb8cQCWLOV4B1tDLJWPg%2B6hDVD3VHHo3F2YOtu3rxcDjN54iIVQt4cTODZB7F7%2F196G3pKS7OnYoqpqgBWEqmfqjGGa3ba58wexD4R7jf0c1QG1brZHQuPVr9PhrPHdKe7YZk3CJsK0EJQ8pn&X-Amz-Signature=88ba7b630db2b4e159c42dc21cd6e752e40888af92743bd36d2a1eabc7a64b79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

