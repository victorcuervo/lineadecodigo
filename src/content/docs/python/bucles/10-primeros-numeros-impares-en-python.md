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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBTYMJX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkQ6DjkQhO3ek5YNG2gD0k0l4opIWLERpczGQmIIzPrAiAbvjO271LZUO0yR1ewL%2BGvzzdES8r33Kmgl%2F75Wh5EHyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjZWYLJ8ZjdvtPfKYKtwDzrzSJSUFRbBDpNmwWJDKIA3xt%2FXsxWfVLJDvFKC9mE0o2O26a0pQgus4dMqyv89%2FA6jEdn1u3aO4iDE9BYgS25o3l078QGBQoBIAldk995WhRBRLRJfs%2B5Wlyv55%2BjO7OeFzC3uQxtivPskxm6ouJ3vvMReXfYF57B071kaVlcCMCmIPzIyH2mu7Ap8n0Dy%2Bin4B41GBzLTyRV%2FyccZmsq3xnXquTs13GMQgpn5i31sAt%2Bn6UD9K9%2BouQcrF8Fgq0913R%2FILQ5W3TEj9x%2BGp8IxUOoGWM7sM20jTAcwp5huIm2wn9r8PHXA7RZBc2O4gUVDeRSkVBYA88NbXl3SZ2fFHVnTnW3s0%2B07z7GjBNjX9y%2FGooFzr%2BjTFkqsU2Gr%2BDfsAAPxhQ9t9FzUKP7qjJwqSTHFPWIfiOK0CilorMcQds95VLqf0Tr2%2BK8UwPOVuaAuE%2BmTZ6IomVn0R6zDz6Zn9w2vUv0fWqkbzP32ILXrINYLEQ7hwDC9iXB76FommEfVtl6RnbLFNudt2uSdSjUu5MMtz5BHOMJkLHMeF%2FSIVf%2FF%2FaGsL4mKCv0FrzU8kRHRkv3jr79FeHQR%2FeI2sIvmhIS732biDuxwJzXWtBPr%2Ff8SMVTZAyILHsccwjf7SyQY6pgGxpzvpjML1ZevtPgfXWc5NmBHwHadzcUatQ7AR5ZPFWW92N8zCs0VvQ7XdulYgWNPjIIH61LFAb%2BthYUq1sQMxBf5sDhv%2BXBZZd97ewq1ajsPioFzYflTu%2Bsqq4PRg04NoS1CCo1DUY23321vWFfO6fEqnauNfybOvI0NFg4xLt8akH3PIT1ynpC%2F9%2F5b1y%2BWwqUypijRep9%2FP7u9BL6pFeqy0rJ%2Bc&X-Amz-Signature=4a1aae5b551e93d3d7d9f818559282a5eb5a6415ce2a4053e4904c6bc603cbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

