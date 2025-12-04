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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6RFFLE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICC54IkfDqBtFV242%2B5EpN0o7vx64XXS3a%2Be%2FP8eYm%2FRAiEA%2Fj60UTqce7Yawo7P3uXKwiwGmh279fXtl6vQBzI7ihEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFONAB1o0z13P6%2BXeyrcA54eopn0Icundj%2F0%2FvWpv0aO1z78a7U2zKRojTHDTtAeXoda5AG9dL4%2FmoORqaFTVK3Ed4iUQupf91gu%2F096VjMlg2thU8GwazYB%2BXNd7eJcQ%2F3BuYN1rq5Ai9N3dmzJnsd13XjxXtY1W5yX8HRq2pStOob2eJ73SOlFg1qCc%2FwP%2F7VOoXzC9xp184kfBOyazjc22j6DTEUDNC9fwdYxxaEgbFdbZu3qWWxDifez1uCDERdCfn9Zhhv5UxftHPnvzagBBVrlEoL3k0nyDiVevsaZlTEXTEU3WLzAmu6tiZBRYwX5p0rBmkYxO8pXLPiAWASuMZqo6kxpBAl1G0JLqfjKpOx2MQSTaTJn7q9Gx4tR7TZ9R2U1bS2qMCCQl6dWbsP7eLqHq4lHN%2FRmoLAhDj%2BqOfSVLkHDENLtSR0W1%2BOnDBncDudgkkCW%2BIoozx%2BZ6Bc8MF2H5hG5NgmWko8o%2BdaoVQ9o1DaWQgih2HFoiSGnsCCm9RbP6Y9Cb2A5IE1nzBZAgHoC0wt5eOWTy%2BktOejghcRmOL9yY8480Q1GU3SR5jZz4M993OrHUPbtqwPr%2FgQk9ghs55z%2B2oPeVUYAlDuTw6twzXJp9n4XsnpKPBG5Wr%2BcCn9l0xT8M9E8MNmFxckGOqUB8ocmF1%2FsChQskFJEqgEnB7yzNHl%2FCvjs7468NB%2F1%2B4EgCWMfk%2F93x%2BOtpxyPvv1sqAvfMY2aDfAR9%2FhkE1OXVOgEeeND0RhcyWNgSq9Y0LP19hF8meS3W3x5xiSM1jnIYlbsliPwg66ZFD0Un0X%2BGUDL7eetAjP0s3dSZMgcD1tsGcAFUuvf%2Fu2MF55HMqz3HrxDGuLEqpbNIPgwLt2q0Lm6ra4v&X-Amz-Signature=b0bc4bac493b794ec2c9f849ab8b1ffb5a83f10f4f0c0139e8fc9ca731a3a549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

