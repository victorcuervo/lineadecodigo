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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFJFB4LD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpVFp1IO%2Fsq7Z6VWErehPtqRPxiKAiQPSxS3MJcGvA6AiBpZvQ1%2F71u8l2%2FfHMfvUAu3qDwmEP2h9CQ%2FEl6uwzsnyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuOsZabVntUs1CNdaKtwD4BnOFKU12k2zbKEGolC5NDPaCG4DNzgxOxjo%2FcTrb4ec03rkoUpY2iBP171sDtX2TYQ7bTokvCZAEcSRWHz3a1wcARXtE3Ev5j7omGGjbF%2FPXkJDKLaDExp9erOwryEBwUJdEdzL26lluZef8%2BLW59Vl2vkCEWzMR4%2BxynwEZ87anrwrmppOhQWD7YvGHjQ5f%2FjY8iT0HESkt6Y3SRgTgQ1zNeVMdupMeEHda%2B0LGukifSIhmqpume6aYWXLQ6z1kvIqLpArT4F5wIBcG%2BwKrGF1WxJ6VOsfydkYOc8uJeioko6YOSrOeAqBEO5Qs393znbWW7brE67i8yirrvIak6jIe8BJzPns2%2FAHmTxjgiAdY%2FWrbw830XDNMP2zLWselIN4MfTqJ7bV%2FecrilUx8OGcIHKKdPp%2FaJmopQ7d4t616OLQ54Nl2Vez6V0ivVw78O6i9Ia1uYSvX3sTRwZqk%2BqArke4flKm99JibhSn4SJqyOpqIwfcqCd0SECCJzAp9qs8OvrIC2KBgmJxZMT%2F4haa6ukHs34WW5jJdtrko4tRxNruNzcU1w%2BVJQoBN7fpf%2BUB%2FzXG8zUnNbVDgCzG48A4aW43KTiqWkQCpy7FDKjmCgv67pcI%2BsP431owwNHYyQY6pgHxNKpinco7ZodLAdKA6hLXMLO2gza0vwYBRPiGBWzZ6XhC0V1ZhwcZsXUGsd1qGK5HIL91Lx%2Bb7l3CxJZHOLKqpftzsVxfV6YIzwBj%2BzwJjL1PY0uHdbuady1AijrXo4PhOpVNm8sB1q2rW4y4kM4M6SYgxi06eBYyGWVbhPeUr%2B%2BWlM%2BYuj%2BUMblJxBWgQzxmOMO05RR75Auo9gBGAxIMARwrbgEp&X-Amz-Signature=0431ce8432e81fd2ad5e159a6827dce79f948e59229c56197c54d783e9b06905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

