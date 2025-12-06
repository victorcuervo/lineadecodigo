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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJEQUY3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvOkzvJYv6r6AR6T5JvObv6rD40enM6iMEOojEE9I4AIhAIt%2Fc8cPNyFyUiTPLgNleXGuvc6NrGzp6%2BFoPLsOD3K5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzhjMCwSiI%2Fge1OeHsq3APX3RwFM94lhOyNSPZLhX2scUdgFFIMKf4svergjjHrAlXswkbnSy9zhWIcbiuWvLXeu3bClVv3P54R2cct2N%2FFV60%2F6UJM1grT5yo%2FEBHSswSgghFlFGV5dkDj5NhuyqQ63TUL%2B3LcoDHwx7paDICMuUZ5KR%2BPxKicG6nlihHmBiHfe5GPeKeTZh7qYtI4APr5zWPNjRfx2yaInoD5AwXRBJD0Stp5xhVeaJlYjnacSBLlsv8iV96utKtYvs%2F7ph9DMQwtY6fA4CRikqFE1VYu3zx%2FO217MS48b%2BVfs18G2aIl%2Bt3UPdFcbUOKo6%2Bhge335MBZ%2Fs5%2Fk6y0f12qFEJhyf4pmrOP%2FyzFThc%2F4K2TgQgCbDxteQthMbD3LCZGZ4bfZCZ%2BWcmaLSR%2Fdsw%2BfgdCf4kgN9YUIJlYDnX8k0UPtn4rt9SrEu0EUo1NR0y79qjeHg7SnZsy%2BMuiTGxJmpfxCC%2B9OOJcEUwdGi3Er20K60E3Biefs11HRnSzkS3pfmi6ne2IOHQEZ%2Fov54lSup%2Bne4MRHBese6JX89XmYR91kguyObpNCPsMzS8PhE46EYf4kyYj1pBgVPcxUOei0xn7lCI%2FNyuvh7GYHkoYMpVd0iaBkX8y4%2Fw8zwpqBTDEptDJBjqkAf1oHCFsPxW5yPY4eFYzbT38tQG%2BK0%2Fj5IDDiLaFp2faDlK11%2Fs%2Fmvnt8z4CBuNDo%2Fkwt7fG%2Fgq8vkGq4ZIYK032hYAuAWwE5Uikqri5FugtYl61mvxP1%2BCfA0aPuSgXPGysnj5xrWAwDDVAsvL9AJci6m7MS0tzk62kT6k5TGhFiJXLTYb1Yxj5Wom9TqYIaaz4Lq7SgncKMA5S8KqpoTnSV2W0&X-Amz-Signature=b122f5829ad0a557da26ae4cfe303b5948984ed3496c12ac9f3172136c2db8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

