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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJTSWPSM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs%2BNI3BEUL2rTWAmQeOrnCngNXsqfdbfHzZBYp9XUdagIhAIGC%2B6v7bGCXTU3w1Dj2JH%2F8xom37APBg8tcTkxmjeYVKv8DCFUQABoMNjM3NDIzMTgzODA1IgznfydEeUlmJeDCMsIq3ANBXBqW0L%2F%2BlDT0JJc3MdnE2%2FFNq9vHJ0q3wB9vi%2FQnQIqmN39lHwSsLt9Jtka6uE4UXXmuaNZJgP4gOvhRyAKUXJnty9geUFi1ZkfaSoby9uv5nXs4BfUDNIR2MFxNkJBXqhBxaQncWf8xgLcQCuouYYfatDX3%2B0MvKnF0L%2FsAtmQMsXHzzeKWOpuy85WamY0rmVsFV2iQ9PTGfoJMYDjYBlksXpWl9gj6%2FkrS1Gj%2FACklASW%2FRhIJ8sDASiSP%2BOgZH6ojcne6S9ou%2BELx8eY2nwzL48Qe1mpT56VUV0ZsLz6093bb6c1sHY01QY1Zwfr7wHV13pe2D3bJvR0p2LE95JZV0de19wfG3brcgr8iFHlfr6Fqii64cuqWD%2B7tOZ8FdK9Hb3duJZt3XnLyWCAdtax0dsgYvki%2FI1jX1zcGwZMU3iLh8eU5SqtMYqZYjCSgS90cVV7zi97T9bJZTBcDGD9g1bHt5XFWYsphVeKp2d%2Bm%2FsMLB4qjV94MtQmDY6l0qXLIGSj%2FmueL0e2AQ98Hrt7hoUdTLdU01eDhO7aZQHZ6HLjW8WRcfvGWVYHjmUd1%2B6TJJHxC%2FQsqv3G1bQyYAaoM3%2BXrHk2zACgDaF0YFvbiyjIkFhtpLMPadjCyrMnJBjqkAWlvfhbSkl6n5Ram98UhwT%2B5a990PUeZQP48KlOiIpMIGRybeA1ngwm4w2i9BrbL0nMmYaS64mNA%2FRGf4CHZrGtPdi6qNSIqNWmceMnx9KWYmxY7gaRa3rQOXdqWdSj5SfYbhWJ0vwJ5R9ggUNbdbj%2FQH%2FkAXdd9UcxKPtY3SnxBqe2aqXUAfLVX%2BdLMJdfrijAm0PqXm2XSpsHUkYEdAkGlnpqC&X-Amz-Signature=152b5a2fd8d21d60eacca9df06da8532164159ccb4372ed4727706661ee52048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

