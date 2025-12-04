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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EZZAQJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDKPxy2pypV1%2BdjR%2B8Da9NBc7xbfX1hWSVNT1eDj6T67wIgLua5fcdmBwt6Gn8ZC5e5X6kLYKjvBMsM2DKeLLd133Eq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJ8fD2nnHEDJgq868SrcA%2FfluUu412uFWY%2B7G9%2Fgg8LGIZerVCR9MG9U0x1zCkSBij44PQpGXb%2B7kft0auW4%2F3vG0DQHigq2CeAKvNcATWoyW8BqABqpDGdPdNWtowmohevcCyDRy5p%2Bi9H6Ke6Raw5vTHPlsK2OKl%2Buo%2Bvzwfengsi9Rula78%2BZ6r1uqIJPHLwNxJ%2BqpU8g9JLmpoFTQlcbrbvG28LZbBZRlC8x%2Bpg6dWi%2FSdxE3oWYvXqqFRRxI%2F3PxGAtuKOmJH%2FAqlYlFxa1kXvccRu7WKH6xglM50ZCVUelR29TwfNuSxzSWWr%2FKoQJU%2FcBTa9EclXPUdPSzKqdD3Z%2FPC5EVki2M5tIROn%2FLYJrF%2BcF%2FyY2yNkLcnmOHMYW7bE5CEsTgarlo19ZmBXknR%2BVbH1q2kYgXgkThdFn0cIFKYWDEXyz7%2Fe3xl1lR%2FBJr6HywQsUBaeC6l2lOCjEmij64vB9hXZjzOD%2FE5yRDyBu7RM3%2FljGWfg25AOqqTwfcFi9noocesejZ39KlLteJPvtli4M7hC4O3YS1Arfm07qzD59ptaEHO5NxYmSNmwa20sLTUBVY4IR3%2BRUXNhLCVGAQ4jZCg%2FiC9EEmiXX391gkZ9YZNtH%2BaIGHwSZlLHEQML16%2Ftk52mlMIbVw8kGOqUBD%2BAXiOAFToARjdP%2Bk2PXyFvaO12xU0PIPxOUaFeiEY2wZnMpM2wdYMHldNhPyt5QLGyDa4tCqnCFWEO%2BF9%2BnGE9T%2Bzhpf9mcoqA5gzzWxPcS%2FPNG5U8mM45jMG7CLvEhEhxJ8JGSOT6g9MmCLxIdzOFxjZLg%2BSLlU9CG8uLutBokykmGmTdfVxzYuKZdocH%2FOcbixRPungKsjAAoMdjgE%2BlVPbsZ&X-Amz-Signature=ede65edbbe96ab835e5081787ee8f061b3f50001c73b6833d25c4ee07b2a7b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

