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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEL72Y7A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF3kSXER7uq9rPjZuofa2KvUrFZt1bv0xBh0M3he6cu6AiEAvJYFOycKCBwIMEz4%2FYHn4xGOSx9lddlc0RKj2OjHgjMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMpiHMwBgkk8r%2FGzQircAxeJ36kWx1cFQopBTsHOh1kOvKj9ZtjermrYDL9o%2B11%2FIC64M%2BZCODfS6x38HEoHcUoN4%2BpLtVMyrCWhYblYa6YLNnYgpMxTVcBNXWZjmVNX7PtNnVzbYrb17bLSNQNEa8Gxl9hy32MxlB1C6Dgmo2LnbhKY%2BoEJ%2Fumr9I8yTIUbQKACZqe6X%2F5P%2BBODOLIElSvVgx3Qr0ffj3CQQ77gy4BsKAKNv64WTcT%2FEQE8%2BCdnomk7Y%2F7pKI4PlvseGxptah9w3HgfRS4BFjGi%2FlooGQAtkpO8IgHZ1yoUT0L94Qkm8A%2BKhqC%2Bk4jPBg2wRbSMcuWwzZMoNu%2BxuED6oi57NEIUd30KzrfdddrQcB%2FeilhwqDWAiREucAecPVeeahZwaqcvOt4Y%2B6IXU14a9TBG%2FsV%2FWjpMZifI07lJazmQc87JeKjYfNOYxnVrevUGPLQSCYvv3CyUH5QwH6SNEjn0ay3OUpo4jFK2%2Bf02wrDiXh96bt24C6C8VVmB4i6QL%2FxecTPwjE3KzQcxMm9Ipj0Ru5wVzaKJjBNh55lX2IhRJZV9CEKjiqWaYB8jULia%2FfASPqG%2F5T050ygbYDuKrnnAL6YoAmgvvpwynqKPQkJTHktTRaxi3i0ets9kn3smMOytxMkGOqUBERyxQDCzEIBwoEQnpLBqh%2BKumaSZr5spofIac7T6YUFtsDsWXvQ%2Fo0KcTOksIGJWNM628xaoGJdtpood4OPrwm0hx%2FeZpTtsGyKTkGeqYMYMnqHeFlblJlUs44D1MDg4uPTw8DdT%2F%2F5DCywVdreZMhiwET1PIYtpxieUM0k9u4UrV%2BafhxintUaHqWQzoAdFkbHadODxNMP9qpTsB9VAW%2F5Q16A4&X-Amz-Signature=d181ca635c834aef0e9af46b0be8076c2b85da56abb5b9013b568d7fec29b203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

