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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQR5AH5J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4WbbOKy5Deedr6IzspqTDLy3vBFRkKluRPQTUfsanLAiA9qFqHcFfqHY8fmNJXPr5hh2zAvQWTrW1mSu4RjF7vMSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM8Vt%2FY66V9%2F%2FXkXQ3KtwDXsliobFgDaBkcmXwI%2Fm4Zdgs%2FyhBeLEUsgQwodVF%2BNE9DoXR%2Bx3mYqywp8xe7%2F5xFHbIb7dcrJ%2BJ5Q6CXMEit5fDhBZxBhmQxuhy2fqYKH0g9t6ELnQpUU2JKk5qWd3e5Jy6y%2BAr7IYQRKIJRAd2e6Ld8OzhStUJw%2BYiGi3eBxklsq8pRV%2FLtdArSYHVZACeUTmz5qmTaS4HiTAtEUCfoxdes1Yb4OuM9zmAEW3URW4PDAUlyOu31NzM9X0Y71BCLp%2B8AKKQ75jX%2BAAsQyJC4ekb4louR7R8yncuUpnTKj05H7J6%2F6pojLaaNxIVtK2qTv5xa5vVXaKqgBZ6GUzijaaBhl9ZMKy19lbxaMNrVhHqI4mlPvJtjrZCeiknhjM2x3Ypv2qMRWgseIoSKp2%2B4BpoxN4WFq86ndKFB3XXztd%2FA3sihXwGm1jlaiWMHCLYx44Wx0dSOV7YkrcbXdTv5qI%2FpARXSpzjsTrcL6hh59MUGLgSm9pRavJaZySKQfQkLQfEnwCky2JjReuZRpkDt7AUIPUDUmIBAlrAB8G3MBHElD3iBXEo3W7vMyCe6UgBiylFxI55q2e5uzeHx7dUfSDieEu2l%2Bl22Jh32d2xeFFLtl44oT5kiRIPwYUw4J7PyQY6pgEhI8a2k%2F5VoDnbLuObUsYNPZt6nR%2B2ycS7zJwjjU4gOgb6Ef5nMbdaSmygtM0Gqi%2FY2BIFJUNquk0KCeeuX23U%2BGWYoeCY68i7FkqZOVAieir%2Fcz7%2BRlDFH80uakyjGv0SgW9Ilj3wLC5dixXdXqoQI%2FBUei4mdLsi7ZhKQzhgSlS%2BSKWF62C%2B%2BYzfD3UtM%2FGn%2Bri8wI%2Ba0CVHqYu%2BMXCbdxzbH7lG&X-Amz-Signature=3eec0c4552e23d2489551662f9d9faba51a6002dc7c43a6525b8650ce901817e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

