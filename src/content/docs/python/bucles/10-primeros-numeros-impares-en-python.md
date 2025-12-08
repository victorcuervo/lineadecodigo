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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PK5YGC5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBnSoBKk%2BVd%2Fhd3YysKBdKFTpIQ7iNlTf6bDgWBjq9TgIhAKxrFsWmlms5TuCmkbP7MNHk%2FwhPNDP34cIoTELUHk44KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEqrhljf%2Fsq%2Fdknzsq3AMVG5XqL1fY2VylV9eigjk%2FiR%2FVj%2Fvb0DOa62ixOriXjydbVAA2UzvfjE5FXnEtCsgXuGZQcyhYW0rRJDC5IDY8F3KTCEdGJsqlorJcG9a%2FrsqqQ9QsZAqHijKfkOcFMZmp2AsAQ6N68YMztkGP2uA8gwqN9JBRguO3kA5Etu8aj2aZUwfdH9n3R2lJU5C2ihTRqLeRUSDK8l1CYkFGZ3ctCPPaQBVO9EC%2B5G%2FDOkLKXqlBudfjHZJrDkmS9EfbwklAF5RUvV2R59DrboD8NHI3xS60iSw1zZvL%2FfQqv7Q5YrLiYtMzcq2I8hLIQ7BjEzLZIW6tCiM%2B0HI2dtkd45MPocwtYwsbN0fkemqE4TU3zNN5MckFm84ruJqOl%2FgioIau0RH0umVoOcwWDJBSM%2Fwot21US%2BElAbdH0C25ARpPSCcR2t%2FZnIU5j9h2TFdpSprfDcWAs54D6YRajnzuWBBGcInwUJJzDChirGtR9mNSa%2FnP2voeD5swuR0Np7Fk393fHz3Dp%2F8Ke66CxWVdyvGnCEjriSns8tXKH8vj0HssXaqx8U4sBjY9z3RKy4LRpE8G%2Fvo4uxiPFaeGVgu9p8dpGR4JRer61iZUhRFJF%2FgBrXVPPlAp9LwreW1PdTCg7dnJBjqkATEJpUvX2vLlM%2BY06483QfG0FFa67fT%2BvNKrf0zWLBu%2BZ3O%2B7Sdn4RP4Uk6nKfREuYKP693SCOwwvkpHNO0YNnZKMEWY8a8oBBAxEPEOcaeKWTsuN2Qz25mqvmymxlB1l1Zv1NyKGCVF93k6US7zWw8pBT6zEUxnNJuc7oll9k6rFHkuk4qwReW59H5m0gGPDJML53SselpvE1sQX0eYmmqTy8hM&X-Amz-Signature=0f1d0859467c5bbb41b977e90ac18fb3f4586a348502225a1417bb2bac06f9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

