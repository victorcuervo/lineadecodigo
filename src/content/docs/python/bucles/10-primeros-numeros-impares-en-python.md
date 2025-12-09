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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIZK4TDE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIn8nenPuWBEXGY3UHQzCt%2Fktsd1AuXksAlvkGnf9zwIgY%2BhLdulxMBrFCxzSgZkNqqBny%2FcnDCf5wx6KoG8lEPYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi1tNUYZXg9W%2BvpICrcAxvBZRD489bpkK85CCJgjIpKjJE5Bpl0Yc93dMALJ8KbdMzmGHYQwWRdY2KJ3T4sjuuR%2BN%2FIVRNllMSv52ZyUpA8UEfLUoarILLeIkqL41hxiECb5pieGfQGbOwoCsR1Kg2OAsiD14THSHjKyE9b7bCKFOjxxojD6kNEn6qUuDcAajqCL%2Bc5cXINYH11wC4x%2BhNQSQT%2FXolS1aZeE5a%2BiJDeNZ%2FHmFRfvKe8D6fgv7RfPN2VbfBbTjbqnuqiL5DEsy5Mdgu3wCDCDbqcN2568rFhotrUI%2FtptQrS641BdNYPJ56kG3pxgpOcH%2Fsv1CxcsucjO4wWGUkt4YGxuy119ZM%2FcYbBWsCRieXaJnX9OSypeFjNk525Obl3YD%2FRYIkVM%2BLh29I5mv27QCLJJ8D%2Fw3E72bD5ttfhZJgek92nBzK9eWCFvVY6FNdqg74Ufq%2BAkO%2FA7sTMVSmiplwNfRfZI4FVQTRNOKYWNJ%2Fd9PBYsNLrzLy%2FAA85Ungpbu1awfTOiOioerW%2B0CN8L5ZmelaCwzGNHfXBQOJgUIMSv%2B%2FQK8CV5OiF1PAhs%2BOznAG7%2Fs0D8%2FHIuVWd3CljgyVLlUE8j%2FQ80urMCSS0%2FlsKcPZbSagExuQEyQ%2BbPRcWkE%2FoMMCl38kGOqUBC0V%2B1Sy516y1AVlL8mhevePS10cn5TAKVVLDJ1kPLitbuOqON4uxRU%2FB1R6zKIwAVr9BR4j0rv4p7qX6g7tGbuxULTHonnlAqoMSDVAv4iWl8T%2Bps9hO6ITrZndy5Cum%2BgYirGt%2Bd%2FRU3y9wFS9AUVPcDukNd%2FXjMePnG8EEZ%2F%2Fe1c6F3%2B3glkC2D9ls6l7jnf5UmiimzG4Saxrz0YYlaRycE6Ro&X-Amz-Signature=7831d372b89aa88cae02fa7930c59065138ae2825e1a93f101c5c9452d35036d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

