---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3RKOP37%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDE2kbGkDCAXjcsTUX7ZIwo3AFNWFA%2FAEe5X8uuNH3gyQIgEeGlWefg%2FnhL34y1aJKEC7hhvk7HAxHSDzkViHjK630q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBrT3x1%2BzPefNzXe7SrcA4rS7ZrdH7M0FHXgj85088EOvk8tjSVVLpp7bEja%2B%2BTDVLMKX5y3bfvPEKJEOedZn2ZL3%2F1KFRlbNMhc1V2PcZ8S%2BnsAsUdzM0vvXHHDl8qWLGa83psXEdiY99vyPGkIes2gsWQlvCi%2BGLhREmxwdSTEoAOCE0KtteQqk4nIG%2BU2eB8S%2BG3FUpUYPh8oyGpDn8ewE2mxxY31nXUxF%2FZqSvqNp1ARjSrWkf1R5BL%2FOGWhcdtEEJXtlFsFkn2LR3tVXKSdUgv3NOwBPSwfgyll2v8exX%2BzQ89C8goDmW%2FCh19Y18%2Be%2FH44X2t9fAEBXCnTLM88z6DuP29afjsbGPIwuXtU1a7aVqIviJ5OpqwUjaEu8225hQqle1XPzB4LWaeHdq5czESBFmgdsHJsrE3sIV6dXiwtGjc7nHxJ6SW9DnSO9MdQFp%2FYi6Rea7Ixl1jZi%2BAgn444uaonvgXq8BfbqzeuiM%2BykapVgg71kdsA2akY4%2BH2BEOTC7LnYhFVc4EKWy%2BFumCW07kExLXpWqFEUMDUiBlFGRkfiboV5d7bn2ujEqYm786U%2F%2FzH175JeuDEk9YyBlFwYHI9madLHsGoL68vXK8x%2By4XZAJ3%2BoXM31MzOEuMnTNmde6KVaN0MM72v8kGOqUB4f5s4ULw3cMSoJl9hAZzM07YJ4Q%2F2kaBcD8TZtyJ%2Fcxd7mFyq3tvGLT7pS2ilYA3aAp1jVZwY6PfwfKLuV74SwNLiW8rdWXa%2B9D4YyzQfTp2k7JU07gbt91CpjMXgaqOv8d19cLQfFzckhntvj0ZHXGHnHsNw3%2BwjhiTbi%2Fjvk7Dd%2BEpxmqvuocS%2BhCtv%2BULdjgoQqHCXJ67XVc4ENw8z7LZObJQ&X-Amz-Signature=70e2bae3c65508ebbc5a49ad663253ad433631f79e4f3f8311e120c72060410d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

