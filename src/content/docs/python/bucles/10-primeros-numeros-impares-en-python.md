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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO62S4E7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb9Rnq9FW4zA363%2BWmj7JuvLeSPjYVly1WNAy6m1bBdwIhAPUEjo9wziZZzpD%2F%2FrOVi6mCwMsDQ9kGUnwEnd1R4bVOKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX%2F2dE2ZbJbIqXmbIq3ANxrQtkMwCWRgegg39FxYx5cQDwrrS2c4xdoy3jYwf2Q0aSqrXpRb9BFOKTs2ZRCI5sAt8vM5W7GxMVO%2BgTKks9gv3osJepxBPug9TIVklxls7qNF70yS3fgFM2EV3pOTgLP%2Fw1p2T%2BGGyDfvePkt6MzsLzBNfWRJWqs8Y8CM8bXW52XmoP3Ll%2BndIzxiTyrvxodgqocA0Uu46DtxkMa6MdRUv%2FxYNoScF2OC1avhSztnIVo6BBF9vtXpx1d9QHUKJeE4E8eGSvfSK0Qj4sRBe7582ONTmDhnukud8KL7ERMi0Fv6%2FI5QN9B9pLtMUeckqWNXNKOOMvw1ppq37sfFJ2m1SQeIoi5qhZ5PXUCzCCjwJtYKtsngiXF5ixI3rJqqJDNODMMkBXa54pnf3jj%2FdixazeMDpABav9GpV7Gb9ffp7TOnjAS3XB4BgpyDfZKdMQLtNGK2mfPOyrVea8nDK5n1rGZ6TggV40Amub7c12IPLemFQWhrfpmOdPEAcaBJ9woAHtGTaa90RnzyWfr%2BHOyiIvmXYIvAylc%2B38aQTlemmgvhKUshjOkC1rESfYVB7jZUfCGPEjhk6CHmSoLZ6jKvtVNUuXNVviwGaY0FNOewlFNQP6Q%2BgQB0H3%2BTD26d3JBjqkAfkB6x5pKksIuOdP0QNh0EefO7BORS9Ids8Z1WKb9d9U5Vbn6Ae%2FdjS7QgH%2FkPHhXmKu3qXlImhZeeWkhWIWlhCE6jq%2BbCJFGaBmJeN9MsHvGPTh8JUSd%2FMlMd8l9JfqH07sFVbE7Qo%2Bqod6dd6IkROcJRELUlw%2Bg3rb8CsiPCr9%2FfnUhm0pbikd%2BDRC7I%2B8gmbEF%2B6z4dol8eQ3yVUyY7Lz%2BhFk&X-Amz-Signature=dcd625eee5611539eaba7ceb7fb95674ff41c73658f0890f086b5cf7c767490e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

