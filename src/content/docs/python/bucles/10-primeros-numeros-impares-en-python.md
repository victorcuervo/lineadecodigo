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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZ2MNGE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTuTwu%2Bq1OuGEKA5mO55%2BnvSv6O%2Bu3sa6B5C2HmIznDgIgEEVHFnllS5l4RuyOLcI1HKL71aYQM9d8MllKw7rnEoEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOhMlyiMssKY9xMtPyrcA%2FsaspduIzh9VKDq7nZK0mmWBFu8TUmsYE0u6kbbZejjYgD5hI%2Fkx%2B4kbCSirEXzAotriYAe7crLU6Og2Hf660j8AAFJ9fAv1%2BAIfmIszED%2BXMR%2BY%2BtLuj7O1RdHHd1sRyedEBKvP4s%2BEZ%2FP3SexuAIwBW%2BhY2vpSfFfo8LuhhWRhiZmz8hIpvOy5kZSKh7kurs5tA8uEoZ%2BfqJUl6ZoXceDZhA9ETu828goXBenON3151t%2BbWhKIqntb9Wb3%2FVKv7%2BqXJcZuv0tzhMolCx2ExuR%2B2d9RZ36Nk27GY1lVHCPccao55cDq7oQ0uljGosE2g0wbgpsTRPzhD6r7rzgWcF%2BblPLUnmrNur%2Bu7HSlyZavKG8Nnx56%2FsqBOngiFFhreDr75m3fd1sw%2BcUcv1Fj6WP%2B2f6ELZlLSZmlhpsTbGLd6QZ6W9JbZCzA0Chp%2Bl5sZ0tHJzJzd%2BrqtDAcl6QNa%2BpDM7rs5Sz9fUIPoxtKj17IbGkCoR9dJqAbGAekZ%2BI0E%2BWXHArLmBM9G%2Bh1TDTTamPbChrrAJB2Q9qFB1ofnVvDrKVWOFDmRCDpkc%2BEjKDCFuOGviKPpkt90ngHoLjr%2F1kDCC%2BiEGZYwc8kQ8ErhNqQf2u%2BUVPVFM1b04EMP%2FFzckGOqUBR9R8bFnJESPMkAOOgTjevsw7BcUfTrW%2BeFct%2FdpBIFstoAsngOapWkoQM5Ytwb57UGQu%2FguhvqH69jpF%2BS45y2SAsRio60eL%2FSarU42FFAia%2Ffs9YOCPl2Fd9UGfdo1GW%2BuK9ecWQWYMzhbV4P%2F1KXgEklqhrUoSFjUs%2BO4uQWB357zetuC8Eqj8i7LwthQdXTH6B8Wg5n2k7L8b2wKcvAszwLoP&X-Amz-Signature=a8c5173149825f78b1ff83548814d2cec19af0b32dd5237cc63a5aa8d9564718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

