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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BAFNEXA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe1XDvrrCbvkAxifkxdDppvpmNMyeoSVdV9BRb4RmBbwIhALqoTRu3ZlmTpJxUTo%2B5aV8PQc%2BfWwn11LTSLBJIogtJKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTsYTtF1BNOw6ufXYq3AM666CShMV4Epr%2FUrdglfdW66Oog4xCSM8XNGFVLlY2KF6WAXHbb7TAzDIeq%2B%2B5pChW7jkGiKZfxA9o6pd5W3%2Fxka%2BON3n7Ar7e%2BN%2FV6FpISUV9MMP7Sxvaj5%2Bn%2B5sE7HYlN%2BXT0WhnP%2FeAcSe%2BMJxb9AB%2F5btVWsMRAX3mym6nGQQcpd6yRPPzFX7blRcC8zm%2FGv8jgVzBtXhsP%2BRFZtNTHxutN1rkve1Hml71uQg2IEljDb4twnc8KupqssUVV0FbaKRjZvKUjoscOU%2BQfSYkA52%2BmoCPmxGdqjMwj0kUoc%2B%2FT29M1VkqmOB4ddM6fGyd%2FPGfPEh99Lb2E6xLjtiDGW1lB%2FBf0k0gSiywiG%2FKtImoEFb1drGtB%2F1t9Qy2rD8fjXx3Br3hFzntNNkyaZSHlNZKNXW%2BeGtQsxo8ynY4cXHeJS%2BxJ7iY%2FnH6vXGXdW8Hcp%2F6gJuTdx4WvY8BgLoVoxPf1rcdnt0pjWTSlOjBgBDC0nzdaymlv3%2FoQLw2zJCENqXbqNNv5l47eM2YsvMBednM6lkWSDHGWvFM8iJ3T1MzNpldIxO4xvwAL0zOs%2B7dxXaHgzaRIdKFPJ8SDxoyFJHNL%2FdRgYTNm9wWjLc04ZlEuidwN6TgGeSgWDDFxN%2FJBjqkASMvtsKaN7br5%2BPMoixpb8tTXImMP0JPsfNiAQdSft3uNdgWyZGdyXTZybQxd05vhf%2BZ9Qk6mFilK7f4%2FbnG8gSMUw93Cym3UsGjw%2Bx8jP2qOzlsNwc%2B%2FT1af9hraedI9Bbn91qgs5isom77sgYaKLf5N43%2B6a9uBlAVIkRJa1rVdD4edLFQvz3eB66Bdny4WleK10pqqibDtbZlgcqi7365EaYo&X-Amz-Signature=7f0024154592dd21d316582cfacf91a7d7ee77ea2cd5421ae7b35e7435b3e1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

