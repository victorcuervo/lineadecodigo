---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUK7RVF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCHtYt4odXIzdqsHyLIwbfBHbKu%2BoC9F6HnKuWSeCfRowIhAK%2Bf0IBs1lr93kzsZRhpVeqQae8FMGg649juJ2Cp7XCxKv8DCCwQABoMNjM3NDIzMTgzODA1Igww4A1fzKPwc4gNPSYq3APIaABBEdYlXsiR13w8gb3vXBW%2FDm5kdw0fZmEorwCQJVc9rvNoi%2Fi8CXHl4kAdLAE5bey2e%2FbVUvgMPSjWifDveM7sdlYI63JM7k3myojslsKxHbAthi0pT3PQ11hjoK0Rhfk0jLsQuuoqvXwBOFEBKNlfJ%2BXiIOabfBKQDCdu%2FRUUVWoTe1zjkYyVt4Rv1QE0r7Po5lNTXhZ95y3qGfGEsOHqosjH78PwL%2FjMlvRTxvBLR58T4Qp2j1mcRcPTPTNmyRpfLjnfPdvLo%2FxYDmeg8U548FROvmPnCpmT7CifZKeSe5DL9aM9tmbn6M5UtW%2F82LW29CMuUWfIAUId%2FbqLS9uVsTviqTEf5CExUZbDhHZsBHnStHunZO3vRB4oSFeT4knylnLquHmlbMXlCby6ERrUMx9U401p5TO8OJpcRyP%2BNzrEOWD4ZU%2F8t19Oa4dymW%2B8CtA9g3D3U5Ft0wEF27m7EUDYRqjiDZnIF6YGhGhj2EbpoCOpahkbpZqFUufJLbkrhSw7bu5fNHW1PdcvFtu%2FzNyRCSTQEoK7W4JO%2Fl8ugXcl87BB%2FD3D6iu91h3YyGeegp433HNT9Z6jORIiF0svRh1tZWc%2BVu99S57bHel09Lf0psqDhicn1DCgrsDJBjqkAfSRchWYvZPAuf95Gh1P9vg0O%2FO4focLuyp%2FO5GQFCsUhRzGq83O0uw%2FSgNLj7nfFD9FItb8W6yBmOaqJs2h6UiJw6Yq9G8Ecvb2wbTdX9Oamdp4lKpf57zqGIq0tWesB%2BLdrSLKoawvtFqgsWchwjZgKkngRjs6ffuqmBQcQQjsL3rVFFsutF5R4tvKn%2FsrEUO2MaMDEoXxjH1ogpFNdMtaYLjq&X-Amz-Signature=19648f0ae41b4ddf03d022fc973758d7cefd22f94d6fb96b184c89c9e4238869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

