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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKF3ND2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE855mLqu3PmgoZb%2FBTE5Regjf7sq295VC0Qb9fUiGa5AiBDzvTSpW4tqfCTL006K5sJPX2vPhvK6Ly%2B%2BabbBTW1qCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2B2314JI%2FOJ9hDDIKtwD5NHqJeNX6Moh5MCIc6SXoTM26R0H7jR%2Fq7L6iSglJH8zI7YsLtkbfd6b%2FG7MI02dewSgAEUAljWEKxheJcZmOHLDVEdslFf1UMxzA3v%2FdNrVTq%2BTMdZPMcw0vZw8kwiN%2BhX%2BtFxpYFgbSJ8YrqAmVp26IqzSeb6w%2F9GXFBhbQqrg35oSx8BOqXcPuy%2FYQTFmEfkpX2lMxY4KppzHGosOr3JEiQLgSh9sXuFELdGpMQoJplbNpwEPCAwBL4BmdtxxgyZP7HM5YGu0A1kqawx%2FSo4JpGLtqLq7xYbbWWZsvfM9kBDTbYjcX7k5dNYSizbz3BTeTJkVi2Fjhy7oLT2o%2BJCcanL8CQWS%2Bpuu%2FOJCY6V4Kim8GH9RYQRA443K4I%2BJpBtDygHXoYAW3hD5Ixn7CIubr5NBUK%2FrYfEOpV7zROPy0m8i2JJd9jW%2FXqIY%2BfqAk0yngFaZ6DZsAO1c5HvRxgC3hz9KEnk29xOgMX0GShAsMS%2FK0ej1PTMf4T5uUmi%2FllbVO2Fc7evVnkZpwKAJBiPPvqQK3NFeCDJaKsNlBY%2FnPAtNJQMiFV2Z%2Fwsv00GZc4C7cSKSTTd7FnZjU7OSE204pfHdRtjAbDnmXLNAa1o9Abip9QzeaNJ225cwjfPayQY6pgEQBsSU8SyGzKbN2vlAnr%2FqiYFS%2B3DLwTmeDlp7JIY5XfcvjyMSpqMe6du4p9LY5lf6byzjtXao%2FbvUQ%2BAk5ztlKnUcmq7scyZhpJehnlZ2wGLCgQrFF573Wvin5JkkjJoYAe4ZVUisGTZz%2BvjOGzqwEb7GOUdQC5ItvAlXHYAK5%2F2hnnapd%2BBwBb9WZbfOuHTAgDN8788RMDGowPduSoc3tn0CN3MY&X-Amz-Signature=478cc66e164b144dc53d23e327933363748e003010ad10195109b79644a6c0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

