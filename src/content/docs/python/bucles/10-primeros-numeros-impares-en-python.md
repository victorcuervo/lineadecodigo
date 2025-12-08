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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LXFJNXZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfTjMvv3f7KP%2BE%2FnirF5ZdxoXF%2B0PQvYeVzkBN1vRzoAiAu3itj8iBi64Iq64%2BNFllufy81C%2Bx3osi1WcyMJknEySqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS9bA5rLJtopyp%2FVDKtwDdnDJc8bDr5S3RvwSfyaey3Ao246U2QTdIN7lX0DyHvL%2BfMQIOm8YTuseJ8KHYxJFUr7fyakPe5teo0OrJs%2Fri1B5OuhH3jmkFIWR%2BXosMZbXL0OM%2FZYYrwK6zhxtKXUZaxqMj6ySh11Dze7HfncyxN4oOXzU13Ptb9y%2FLg2bq0wZvX92Ktt93kTNkGTBHMBa097v8FfChm6QQHK7iDGNOrIBSsoplqfBPcJl%2FSQ5j2fwJhliWRowHlGzYXtsulxkqDhsEsAUiJeVCTfAIYUTHR5edbGNOPmxm5dq8MnYsf%2BFaJvHNoWr8rafGVIBneqKOjxf1bps3IAkyLYecX%2B%2BluOhmuyTuaqOddGBaPY6kgFGUdgGO%2F%2BNZ89WYHMJQxcBU0mdx3o3kLIPmQesirLFz%2BYZlQf0TJVOLbIyD1j%2B22f8cZ1fFfXB42ol9LPPj4fznGsHly2SFM2u17Bh%2Fk3ma8jN92vEKImsIuUxO9CSWFqVVleTz2OcEqlEj7%2Bf9MECQRsULfRfK4kMjZFeB8OU5p8xn3KdnQWT94bDg0H%2FJPTHkwO1uCKkTeUpYHIlyrkSC3uhXg%2F2Fx0Pc%2B98Bin87DC0ySIbqutteZxz9VGDeFSdXXGzgbe%2BcekTIkMwzMHbyQY6pgETvOeJ8I8WiIfqxm0WOjmVtkqh1ysPmG53MfcQv33qS08s4DRq%2FaG0qwi6DL75G7b8uMMsDXM0OyfK4WhELphs4KThJoGmGIxrujsJNmyib%2Fjslz%2F8NNvjKn%2Feg3ZKbJuRiE5bFyo8TZKy6qgYwtjQHP25jpElS8FrTyRKSJUbW1heUpcyuKCT40yoqmpokkD%2Fw6yP5HGX4RuF5U4mwPamYaSZCxH%2B&X-Amz-Signature=434fb0f55fb8b64460a2ac3ed116b0a033c8e0fe91ea859f779fbcc95864dcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

