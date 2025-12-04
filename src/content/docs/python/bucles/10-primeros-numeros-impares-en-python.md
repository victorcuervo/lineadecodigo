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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFRIIZQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIC%2FTsWI0zZ4eopFOKjPh7ryXcT11geUoD2lw1t7oXrNGAiAapC5Q%2Fs4NI1jKr3tbsqra52kk0uMR4MHr%2Fb1h%2Ft%2FiuSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZgZm8j0jIyo%2BDWopKtwD%2FPtNxMu7dHYEvM5lwsqeG%2BfMWCojGzeEYiqMG7SuowqA6BNfssGyhU%2FmYbpScAoZTk8c%2BCpV6kCZHoukccGE1%2F1ZGov1M4kzR6CVwyP8GbYOg%2BIbUj5ffS715fYH%2BEmsNAxHEJ0mNzGdK8YawLljldhjFB%2F3RYYWnVWDL%2B9CRBN6z6wfa86IPHHEdKYKemmkAP9sbSxdwotdI1SeWgOhva1%2FU4xHMqK8mNB%2FZ8VVFGHX57pzR806TPQMAQRg7xq6dGf6fZlRMeUS4sQfb76PKv5IAddQSCUGMeVabcqgOuh7DBw%2FRZTF9E4oGPa0aSWuvDbi5PvycsLhIUevvJ2oDJ0kLNay2xPUf5KS97HJ8rp5inBhIUUZB4W1rSLfxzDvxFVQZhO2bkG3qyjkVcStqeYGDJ%2BZMUm2V5kOZ6SY3ochgPmSfu%2FLOQbXqzfIA4X4U1kdwE1wGN1GS9Hgud6%2FKPvHeW702dZltAv8A44Z9xN2joF%2BvY9bpHgY44omSpM1FyD2C8alfVhHPKYxOkcQb2kKdGHHIXSN3D0HGXpAwpO9bM747Tk%2FrWj1VLXbEmBG6bp7P7rpLBk98u%2Bf7wps8z7GIH%2Fbvw9ibOseLO1elidECh9KtJctrNUOxTgw7K3EyQY6pgEnFA1Brtngh%2F8Dnm7AV1K7FNHqJpGzxotmushpBZtphfzNWwDmItUllVfVvWJhvWzuASm012ww44BdtVo9YWOqGoFzOxW%2BYpJyBB9ydOX3xqxMwPDYBdsxTnXu9M%2B2JAMcGxdUkSPI2mRZf276SDE0M3JtbnGl6GPpAnSmudKt4TNfpjVFN%2BPw3BibZw8N8hj0XmR5pxfM4DD%2Bio32%2B9KD%2FdW586To&X-Amz-Signature=951a440a7fc9fee1a595ab27f65e46d515bf8a3936b346f079e17369457e230c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

