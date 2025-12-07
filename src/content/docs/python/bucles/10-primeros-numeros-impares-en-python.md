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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3O3USE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUwSiK2R5ABN6mPMU2MdCqPhW0GpyRLLl77he5qz7zPAIhAOUqDySQk5%2BYFZp1eYhhH2d46wQqeo2wazW%2FWFIumqxoKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztGbNAxFR22Dbm0z8q3ANHn9sPJIMBWaE%2BETUp%2FXJqFsPs13yNxp7U%2F5QR0eDoTKuQtXhQJpLeDHTMvajLjiktGnTsVWhZiCZpnYYNwhMYRV2A5xu7NosKz8C%2F9U%2B%2FYBa4V9y6ufXTp53bDDjdT4doih1Sf2Ukbz8d8ew6qhanVvC15tXugLxiB0zaSV44CA%2BCDgAtLmZ4CeyO3dXvKXOq7P0u1Qq%2Bt0%2FZWqnZDEYOfYu1ZvHYXtbmrqDko9Ysbb6J2jrdpG0LlxaBTumN5D%2Fea6H%2F8P6NJaI40XfWJRKMIVcNc%2FRsn3pBNfksFk9i1%2FEK5yg%2BR%2BneMuojrJTKaO4k9AVMJSFXHWxC8AVmNGjZSP5rWmqT4IzJ8DVDjfxyFS66Mu%2BOqqks7mbruV1lPJa16qTiewsiwm%2FCerklroqMbJCECsxPQpk3fvTdZOdz0WzJzrZXWyh48Ie%2B5EUIW58jzyxhPW8q%2BmnmgmkipOgbd60Cpauv3BQFTQBBtpwSDt04LeGO367iL2IEPFAbx99%2BP7u1eCtHos%2Fu1G1Vo2bvm3qafaZZePWgpbK7X6SNjXiPeNxeoCdD9Wz%2FFV2yOjYnN8r4YnFOortguSEa99ezzjjHYXpmzbAB0iXjM7Hvm0pM7ooP4FVoh6ZQJTDSndTJBjqkARnBk25v20WZXmDLfvZNspsdnj6T3lhYnRlRMJwERTfwxqLJo8ukBWc%2BLgq4H%2FoBIw%2BM06oeavPSIGTKYq5NmaO82QObMX94S1oHv0W36s%2BGLR%2B6GCWMQqlcyoFcV7zqBTyiCLaBG6oS3BuP94J8KbaPdUua43OfrBn8WK0s4bjlRqtqsH59yzpPC1jxqvBu9TExg79ZwaTJ3ymNTymKnwMxB8V5&X-Amz-Signature=c3c688f0dd6fabd69c9eee3f5a6543ff10c45bece700eb8ae3d22272e0366713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

