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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MI5JEQ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhxPLSnL2TrQB%2BWT7lfjLE1ff%2Br6Ol6jnwm8sDl3cB4AiA90k4CQSVYxpD2FSdx%2BaHycB9srkcXbHDnr2LX9rOlICqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeVCo81ycqS0BzupdKtwDjAubiOgNAPKxzayx9m%2Bd4as7R2UBozgu0GDsb9A2ZR5wfl0bc%2BEB4XKilB%2FuWr7nowD%2FHSQfCZDq%2FHpcG76vAaAovQoihcnGghM0YiMAsUdUrldBJKxhQRUuuXW3r%2BGchDphVtXZgusd0jXC4L821E2R%2BnBq6aAe4MdeW3%2BKyxxTuN8ODxD5ORuX8lObebhAaktcL%2Bz%2FlH%2FpyyLAMjlBqxnOGe34I3hR0GOkMzdJdytsIZg8AR4LabN9N6fJY486tvz%2F5D5of5dxYS7HEng1H93UqOEqz1UpzzwDMObo9l41aIOOLd37%2BqxmDL9cm4hvYiX%2BJcUFtryhoWcJTu2xpS9lCYEX7mhJcoBv%2F1H3wo2xYqusBTRE%2Bqrnj4G5p261WfCKMPYKOTrbwQq%2FZNc%2BZpO1IU6zog3qriSWuza%2ByfaVGdxGLF0Vh0CyutnkJAz8vQvRIKlVXiVRpYhf8KfYd9eC5fpkEuFNNcPZEwFZARxvgHIX5cRfJL7EFLnJ8R8s1iPhU4iot37CACY0FxKrY9IQZ17e94Jq67qow96gs7UJhqYeERDaONL29Z0U1Anl8YZ42XcH%2Bo6xEfqvEMypwgTcw4cFLJmCaHguLMofcUxXqIVObE5Ne11eI8Ew5JTZyQY6pgFjqhE4VbGGjoJqTBr%2BcEoELBCdtNkJKqIo23rrTUvsDIQqssLMVb1fc79Gvl1kyy0poIDOKjdpTPF6e1y%2Fb%2B2uUeadR7IkzXmrn5zKQ61%2BukQ6a%2Bxm3bSGcbmgVY0mVrmedvYe8OC5o5HNKl%2F8wXhGU7wF27clS3wank%2Bzj4MUxLD9M9XemIsbo4wr2BEFavLP4xrZvMeSkQ8CgV%2F7mfkY6WDAJi7E&X-Amz-Signature=905a23faaedd0afa69ad5b4d720c3f203a032e43df05b52d39240c7f495d55ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

