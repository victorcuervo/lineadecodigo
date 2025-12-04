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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CAGFZTP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE1IyFNJhe3A%2Fjifx5v5hO%2F7m2gGLF9kXOyxVIieGDtdAiEAlCCZu0Z7ncfzXX7ProDNb9EhUD8IRQYkvSl5%2FuL061cq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHP6OH1D4xa1d9GfpircAxJgZGBjTBhw0YN9ZLGUHk1RG%2BD26eoVRpBhYJMowwmSNEewj2tAz57nkTLEuJFqAYLmkyu4XltnLNPVCBp8snim63X2CtGsMmiyyqK4MhEUOJ%2FOFlO9Qfp2r9mHOUNLcP3Fpk5XakCqKLwiYtzs%2F7Totb7DrTN8Izdp%2BoYA5%2FoKaU6E3pzJ2V3dowL0XbYDwx59cwOUcfOBLDClkmNuvEWAGvqL7s1Kl0PIebR8iWpeJ1I6%2BxFl9aZAQbG4PYk%2Ba57q6oOj80M%2FjKqPDrO6qsFF1Qw3DZefLxcZqPXrlemDdp5FoIWpbcAih9OR7ytvBQfm%2Bmgnf3F1%2FJcytonOjirfbdSbmJ4tULSiGbb4L9uZOQzyVITf4BWy4iwLX7eXe1SHLSkivRo6lQ1EdeSTKakJ2bMnu47PxngHx1P4kFQeFxmTopZY0eiObXVgAsB95LsTm9g3OJoylcoxdb7Yi%2BtJnCTyRCStBkOuqtleq9NF35cjY4OS4PKFgDhj2LFfSQTXF4Ug9UYENOb0st3hDfAtlbk5bOUisXxzC979SqgfPep4j38%2B1C8MLrPlS%2B3f%2FuAuLazynywo%2Feqk74guvwQLRPgpP5wLe3miyMjcW0bsm1qdwsjzH9i7PY%2BpMMHUw8kGOqUBklJE0FpYfoISuqsy33D0QZIgOOkMFbS2g2vJx%2Bts1yIRHXJ9P3%2B%2BudXxHRIzsttaq0rGF89z%2B%2FdgJZzvrTLVGUiuNM%2BijNzgWbz%2FU%2B8EIksCQvkC6wZMLqyQVmbxzK7mrNHVKdaBqcWJ4y1E5njNA35cNwR1st8l5I4wCk3A0OBJ91TLrUkgW9senVaNhofBgkBB%2FYItDkKhA%2F3J%2Be8jxH%2FyufhH&X-Amz-Signature=379d1efbc47aa2070f1baab1b46f2e7e11192ba499ccd33c3d1c7756748f70ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

