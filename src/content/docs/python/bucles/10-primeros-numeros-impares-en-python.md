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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOT7D7C7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANGKrCqE7BsdwPUvOMxW6BrbGR6AxREZJK3ICQy8IjjAiEAs62BfhMFJZ%2BO2a5aEQWbnfthvMWILc5KooLwf8JHLwsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwzuHTqNkzEKmSuCSrcA6ECxC8m0KShk1fY0bgdxkgJy%2Fue%2FL196hx0VGP1z%2Fv8NXjBO%2FqXS0pm9HnPc9%2BovJXf%2FHo0sWB3O2BCo%2FGB1PISJZf02BszKsROwoeing5hcEE%2FrV4ouhgqs6IPvZUxH0JtUVDH1zRK7spGLmbucl2b5ics4wJ%2F1TX38SJmtm33I%2FlyXh7rOF%2FmLXt2AekOxmaHKqB5uUSVACCCM6YDSo7dHeviUzLTXsGDFp130mGr%2B2u3hvsda2DhpH86MnQwq9F5xfxjeRFJc6Mvnp72FE3ibxhEMmWk892tTqqD6fb5iDZYifVq77KktkwFBJHLTrFQy%2FOVFaqKOTf4rvcTj4YN1Ljk1wE%2BowXvL%2BwhSriDmXVMnubVuVqfFk%2B6es1YmmH3O8mEzk6Bq8a0ajx3Xm3WvDh0RI3pIiK0KWPv0gMe6edljMnYNvTQgWShh5TbRZ36PAjkL%2B%2FTqZ%2BDeIf4pGNA5BlZ9IT9MCy%2FoohYANCxkVAmP7fYEnGN29Xns2Is%2FtbB5nSg4T5cWp4QuVcG%2Fhv2zBUzga6oZVIE1Ogh%2Fa0WKOCx%2BcT7bNGUFcltfe2Kkl4IHJOBO8TQeEV2VcH1qLPtwHt3Asz7x%2FNqhF%2FeADeWksfgK8Bn94mvi%2FvgMJuZ1ckGOqUBxMXzc4eADeK33LiI5Y%2FxxYgFh5jNGjHxfg7mFNxAqAnI8n8Tu2R43eZBy48Gv59lB%2F1ihvmkCeKP8nxkyYjJo0%2FC%2B2XKWfla7ltDK9B30NmsIi5Z4R1s7iYBA6GNG3RC4zHUqXVUsSQ55fmyR%2FYhVZ%2B1PnCFb16%2BzBgOM%2FumhYnvgVh75IZD4dCgBcKRTKZNM14IeGdLIBzAFpDID0VhKnOCvZKk&X-Amz-Signature=2ff0ad626b8cf3c61503b622d2e531148a9e4f3aa22c69df263bbfecda1d265a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

