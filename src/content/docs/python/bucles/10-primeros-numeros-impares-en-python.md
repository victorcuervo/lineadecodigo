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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLTKU6P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGjwJ8V63N28e9TTe8ZZf6AlVgKe7Tf8eWYjj0oMwck1AiEAkVJCJOStuSUnicCNIyNM5tqbxhf1HKhGSxBM0Nt1P4cq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAtjqtvrV%2BR0N0KeIyrcA2WEayZxZmmHQ0UKFhX%2B7T67hwgNhTXPn1HvqiCioAS%2BzbkSLm58xtqzSumPM8S3AW3R1ux3WuW1QiYrHHiY%2FudIB6Os8h38hNSBH7cFqKXZNiA9XecgBGorNQ9MjNKqH%2Fn6J6EyJkx9%2FaIvrlsiwE%2BnUHkxTys7Isfc3isG4OIcJ7FSXG1Z0uvlaK3MiVtdsGfoQnd2Xx2IEdsV6LMcR%2FLEL4uMMeqcHn6HgW%2FK2ApD%2FhGEZoG2ONcQUlZnQUxx6K0QR4t3ehGQlcOPZnxGgkVcYeWP%2BSTvL5S9GYwUMM1xmMb3mGrqQcs6dh2ZXm7EgHjjiJsEARsD%2FZz332nYfiFWyaZ3sfkjJfJqs0letnTtoZVhx2CKoy4F0rLhoIHt2a6rU%2B%2FTNfratqilRZA4M8Plq9U7IGF%2FagANoygjq%2BX9kQ%2FOMgH6oM7cc5RgccNaD%2BnBR8NPLZx23rEXgyoomfITXdWO0OnMxBGgUkt%2Bz9xiT2ydXav9TSdOI78a9eGz00%2BYmCoeWqPQembpAMud4%2F7oOfZqtSERhDDUiC9KyRETba%2BEnC1RFU49n0RKyZiRp0gt2ZNYkDVqO2xsAi0l0Yl5pzc2Fy3GtA8FfWwT7vXzc0HjYT%2BNnQC3Ih2eMIjVw8kGOqUBHByj6uRnulofz41MEFigGF6tsUO324a0tTxkGD%2BRRt2XASFQnMnyihm4W6Ly46hJMlaoicPoPdnScRMwECOyVyxqmC6HFSKt1FyPe0IiC8raYMqum%2Bd2oRPcvh0EdviG0wIF%2BHfMzeukoZFKiW5NpKnTubNeQklDJ6%2Bzw%2FOE0%2BtadUTwzKv87EqSZW8qZPvDwfS%2B9B4cqApiDiRBal4l6p9Gfs1N&X-Amz-Signature=339fcb483df120d9ee63f7c771b7a46b49d9fd5401fbfb306d584cbca6cf6bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

