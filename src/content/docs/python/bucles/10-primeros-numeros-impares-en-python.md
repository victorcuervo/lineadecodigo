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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4DSGPMQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC8D6yEh%2FC1UCAvCABOWeiTskCiMa0H0wWXzM07AV%2BUzQIhAOSOPY0j0XQdN%2Bwscp8sui3z87vBI9JS6mICwXBI9WhhKv8DCEYQABoMNjM3NDIzMTgzODA1IgwBI%2FyhWFwT89lih14q3AMtR7YHOxWdJ31wV9xPy6i7ZnPuIjIAemxyFWf19uzYKt6QIAh2CaPsIh98O8UG1LEQhO9E1cA5lUMTOT41R2vGRkQLoRKPm8SXYSXomu4ptdyWYqx0Lk6BN5greCkTj9Df42zaeLGI%2Fqq44z6DBOGYda761o5iP%2BQ8nPuT%2BPfH0V%2BU68BRhwQMN9YC3ONl2Ifa6OWq7gHWtjujCUarQzwMDA0C%2BuNlDyFZCe8PnwNgnJlTeLGRNWNTnxE8Hj6Umdn7765mTUGe8pqRHug8NXKra6HYtYiH%2B%2Fn8s5JgbaMp7UE4feHSmllsRWMMaEzVbRuopyZf5bfBEMB%2F1bYMdU3nsNzM97W7BEHsoaHvgHx8bL4C05UzuxLtTmo5w1%2BRapOscL8mLULBiqt91xhsmCey0pHx0DRKEds6TOAoJf%2FeeKhikohyKFrBkv%2F5PmrxuZP9KxOYJsZFTTYYb9OBFhPquapLkLv4SYQX9llnWEiTaKWwBhtkHuDE7ghmwzI%2BY9t2S%2FjnB9J2e6Aa6nx4EP4bQ3BvgUnm1KgA8mp9FB3EXMkfEbUCCEayvtEyTl%2BY0%2BNf9guP4Q5c%2BbD%2FS%2F2y4lOz8ctQuwS8I2W4pwpuvcKHIe1QHEZ8KV4Sows5bDCXg8bJBjqkAefXF%2BqAjYNj4UK9L6otXtIVQansI9jOP7IiXmoYzhx8pKU0cBsBz3vHeVg1Ls6GzXU0jZpBXOVUqeO2Vy7xTZB2IH9IlmDzjeFWWy4v1x9ldXMb3hwwJH1K64N%2BIrv3h9Q90uIKRID7zCXHBUeYDBs5dhEE5tWvc1rNApO5eQ9ZJOTGnisz%2BZrwhZ4D3E8C1mOO8XCj9t0ZeE3YT9iYJCkcvZwE&X-Amz-Signature=c56bb2a4295aa1a691e8a804ba4f8ce2484478cb92ee5c3a3bb1b26784e41f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

