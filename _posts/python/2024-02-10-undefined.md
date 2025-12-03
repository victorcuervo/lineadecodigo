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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZWWUCRR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQC%2FRDg%2BzPKZwA0s14iI0lEPS0DAPJ0UuNVUvpP%2FUMhH9wIgAl%2Be8NBClh92z%2BNtZI8up7iJNe73I%2FOFPJwcYVfQWvcq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKIBF4QkdhQRBZoW1ircA7J%2Fbfn5iLyqir0xBL%2B8S5uZWvRul5sTBVF4%2FzYz1Pxxc86xcaLTErWxm5UgK0Ofed4KLIfFcxnqqwXauZqqay4HCVw9pyRxe2Z830%2BvbPwxGE3G1zZokQhD%2F%2Fv%2BVkqrsWwnhKyFKsIsBq%2BsSWAvha5jxokT7ufiDKIGT8M1Jz5pISzrsOBYWm1RHiHEnbKFmRYxAuTkLdQk6NQzZoWg08lPOuzHO8QVZU4YW%2BMsb3ZhT6jce%2B%2FYhBRBFgM3xBMApTjDBx%2BUXOoG%2BMDLtCcB38IlCxlq1QlV5jDuyvSkph5jxiroN4CZ%2BfJ1PEvD8MF0JOMJd2aDuB%2BEOxWG0eNR9dgf%2B052WBJp5MNazVMIcuNBTogA2NoVzGhlW%2FXUCWXRZE6245ySfFizfnyACGqYFfAstWFD3pfR3Q6hhY3tJmChNVqisXeA0LhrSJpQA6S4gfU7ZhSDrV4s1z9%2FDLpi6U95ahYEKwskKgMcyj6PLDBg6RWJrHl%2FCp6I3EM9xkZA2U93YorJ5KUNBtkdrhr57Z%2BzFbON7%2BD9VVtGDX5fxoLyNDwVwfin56VFBnMLLHBYzfsdT2Mon7R1XTmgKE7NuY8QB%2Fqax66EVyN7slJLDQ0oLUWtvg%2Ft8%2FlszM6RMOu5v8kGOqUBgb11jhFjw2Tq%2BGnh4DvXiBxzYeoaVX26PMtymvETAmFEL%2Br6xUsLHFx6LYi6JMLdYRepyL1ImJYziioLaZeJg1NWfgLNsHyXdEYrdV9DOHuJxl687YHlAcnxJGr%2Bv%2Feol2dKOAYin2leMpApSJhHRA1nJnJt0cnuIL1REiHg1Y%2FzkqlXChNWk%2BSumfzVUGPi0R%2F%2FNOL2%2BjhOfJRa6gNf3TnkFWWa&X-Amz-Signature=c14e6294f9a0b315d4bbfbf43c52ee84e59f40b4222487856eb10a2ab04cfaf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

