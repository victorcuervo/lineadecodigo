---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDM23CY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDA6EfNpMVeJgkxyRrlnWCPX6QX9MMeRe2hO5gqNLyGmAIhAPe7J4MfS13A72Mu93e3k9HJ%2FTcdN10SZ2VJ1U8%2BYZOcKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BgL3AozmZ%2BsxefE8q3AOC9BdYrhIEspH8vu%2B5YVlh4CwTkkKbizR9nvuvogtzUQIfq%2BkiFA1g6Lr2M%2Bb2Z5oiV8lxbCQLiLhRo4h9%2FUSlIr7592agVqMtR7v6ZOm5w1xho3ALXKoX49MlU%2Fd8Vf9QG4BuR4pupXBn9v4YsPtD%2BAFyBVdna3HCumb8hrreZxOh%2FC78AXxCevSUbX87lSLqFy4ev5iirEUoAhkR1C5vfKZTYzDyz150F5G8xKrhHHSKkTYPG4%2BNZW6yPI5qpRocCWSBzWVU7WT7P7nyJsfd077zXTeandj%2FXSe7a3YOJlDKH9tcJleWHeGCQFF1p9JEavLqGKMPxUp%2BrKJHqXPN%2FXWAv%2B912NlYPjj1vXdzT%2BTfHOb7K5JBDIp4mlQ1EkJYnxp6hOqzgencoT1LaAebiuODKzm%2Fb6h0WrNU7YP2hwLWulKW7FeJEfcgWrUaLAv4rrUUg%2Bm4%2F24Vb7XGmxLtl5uXPGu24Bnu46vx0s%2F3N3aY87eKjlCdCB0ruSShFbB%2BUMIvLtZPNhXJ7kHpGSA4SbguNUTpy0Z5YTsmjR%2Bdhctgouo3INJ1goZqDXkeTlC05iaoRFuXyEZD53Nfm4p2VHvAYHi4OFPCF1nhVo%2BkxsjZAQgrMue5xyjjwzCIvsLJBjqkATRN4ODOvKUfWW%2BlFz%2BM1JcfIBvR95XxyglIFK4K80g7EhFCpxEXFLTxarIlTFILHhxILnHK0XQzHwIoPn7zHX9lfb0UDuxWcq0Q%2FQa8Ol9XGdrRESVvVDKG1kCqXefKjvWnRUbo7aJy08Dm4kzb5cHx6LfcwOqrXeKm3KXLcwgsiTcz%2BrznKyxtVz%2BTAaklcRT3dipi6cIxBkMdf5DptuCvpuR8&X-Amz-Signature=52f1cf785ef496f968cfb555301e942ad411e6cba128d0cd311c6618437e4b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

