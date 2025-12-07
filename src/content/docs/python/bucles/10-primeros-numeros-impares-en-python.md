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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSGOI5I3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNX%2Byclse9mabn%2ByTGdTiauR00UScTVJJi%2BID%2FZN%2BoyQIhAPNedrmxH%2BqFxbN9Lu3QN1mKfFm8%2BqnhQYc7oLMhJn%2BtKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU4IuKNFmV6V7fs5sq3AN%2FVXhnO4Md0tbLyJO62SnhTtk312emdhtnfGr66Dw29zmTsNeaXdShplMex3zBIOjFVnEcO%2FKzkvW2R9VcV97GEKNdHjWu4s%2FN29eGHeB6zOlqHFl5TfmcFqWRRjfTJfQP4aGyJqwioyk0KcNzzE1TftD7WI0cTj9gz0%2BHe35Gg60WOraNqxbUshqHVJwgYCviGe6D0JvIoSDg1VDfl44nAC7khDfAr0wBEYWqOpwEcNJl6qA0mP07bKt4vfy8y%2BoR%2FYyD5i0kCQ9dDXVR0vY4k2CGxEvm%2BBZIFuSb0Oj5G8Ps3i7ye3hOY71CLWKwrKWJhIq4TeH92dWa4GaX2KtQR46vdEWF8fm%2Fd1f6cPlOQIpNAgdFwx2H05ASMoJGpjUadwK408w1v2%2F5IfJJZb1li2FLE2ZcQgvlA1fLDlAvSW53kVh86p%2FgNDlALj04s35v8r465AsApI5hfM2EfRq20lh%2Bp%2B9nd8al4PcxwtdORrzfE8Dh9wPUoJKbcwK53cZSSAb5iXyI0aCDg8toi83JiWp23%2FSJUjNudSZsoTparbON7mhp4DLPwLMOC14K3ztjA5zzZfBvxXIxBD2ZV0%2BkhtI6YhbNaOSMC%2BlQQOd3S0WDAqvsIlosFw4WszDw%2FdLJBjqkAf8%2FnHkCaPPFQWN1WBfnnkyoHZQZshvxPtvtFtzORoaoKgTRRQx7xK%2FC0s3mehORgczeKXjnbL4hBPd381rmkbN9Ghh774%2BVUN63aPbmebge1pNU86maVBffJj9ICgl0pti8o9HWzaOgkUx7CGc%2FhsylSHcyinY7aYty%2BiEZVpvRaC1wcaaqZ6h9IP52opPuammSY39mK0uy%2FOfgzgP%2Ba7dxvdDS&X-Amz-Signature=653a2b6f617743e21afa1e9a4210f5a647462356ea756c4503609d3131a08941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

