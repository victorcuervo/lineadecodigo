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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKSUUQMX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4IRv0iPFIOvZSWGpiPEDBupVKgQBlhFZkwNTixRsbHgIhAN2xHaNb0aJaLc9aPsZcHXHQJ0FAQz%2B5IbYLRnYykFfOKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7gdfGprir4pIkn30q3AOzCq7kBcoMltptHYi0O5S%2BXd9aREk4xMl44%2FS8LGZrqOdfbSBMfvTkAVrqbc1LFp8SYbM3wiqYEWO%2FOi3zUlFqseygeYF0C2Vlly2452k%2Ffb6L1mZ4karWSO1Ady6dxWm4puRAs7Q6rTWoAH6Dr21jW2EQkwJDm83UlMFq761m0bM0oUYg%2BeJJmOlF%2FSDmd6q2qq7olRn1X1uo4Uk1Io8n7b%2FPTjEA4vVev9ykodHaUykD7oFJJrgZPy5FNsYuRwrT1QKimLT28C%2B4jI%2BqC1V7xkghUsI2cSP3e%2FBuLotIx6Ts0qmjDzizJZCuQAz7cLZ3HjEYjMoei8uVHIYskUu1z%2FwzyybjyPyICNyGL7oujfvKjQlWBnKEDk5IeBFNEQFlUS%2BVB6afevt44VYtiFQ5ZIfyw4%2Bf4b1n8puvZvq7Q%2FWscG7idBFxoCBVuuenzxrkjWNnMMithbCaCEObTsSwxmlDQn2QY%2B6z4m4Mmfv30MQvF5xRSjyirlWhISsNAyG6b6urY7JVbO8q19rkVgOQ7i%2BNVIOiDzDn1522J2fj9W282BfG6FtzpLoC2EEF%2FLJ%2FQpc%2BCTIst2KZ%2BvUl8CZRRu28BoRy%2BL7mDupJclxGt9mkyrzwt1nLsVd8vDCTgN3JBjqkARb2xGUckYzM0lp%2FhV%2BHmJ96t7BbqXhSyTeflCdhTHJ%2FP4jnKAOf%2F5fUGjxq8NkpbVrbLcazt47m%2FbYQbWRVZNB4k8ZpBlScowsX5sjYkwnv%2FY4Fp6F6c8e%2FDe1IfiuQtXod5JBph9zGbQ0VHDxDTjB20ZjrDmEz8UqZVpmpQJq7o1%2F5wzhCVRZ3yhCuFF2DP1ovzAEzzIE7F2xTFnlD383l4y32&X-Amz-Signature=c6bac783c0671c5f08db15ccd205461e31bde1d286c7f221e21b39f6fbd5602a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

