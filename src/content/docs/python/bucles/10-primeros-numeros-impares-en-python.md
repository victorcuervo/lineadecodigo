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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVXQBRB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGAKDlfUx7Ido69AqLgLrmHfE2h%2FWPjP%2BZLRTSBUAib3AiAguZ8W9mLS4Ut5n5sCRTJcV1UUfsUY2nyJDVivGQpEmyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMXTYiKwo%2Bc5QtT2oFKtwDplx4Gbg%2B%2FAXqvq3lCHDvk5IBPbHwwMfO425AFWR1AvXytJ8fgcmbX8QFJPafULBYQS5B49M4B9Cf91tJZ49V4yq8uF9rDLlvq0tJfbzfur%2FwfMlxsdRZzc4bmXvmwIJNgfeaZ7jFZdzJVGTUVeSbOfezIL7JlppanPmOMtxLERByb4cJHXZxbAMB3usenLGZD9n3vJBy2fTU9UK%2BV%2Bv5kQUOX45h0CzO%2Bo%2B5Nc1ZAN44QrvggJycHSaQqC%2BsVkWen1%2B%2FJJODSb%2F23rBfDHFxGHd%2FxoaD0dCzJfyIvw2LONarR0uVHFBdSjbZ%2FULmxNXUF0jx2J6ppWkFFZ%2FP87xhoMqy6hqSDKii12A4fFcgKCEt2xk8oD%2FbyifR4CAItl93E4u6n5vhHBrmeau53h%2Ft43nnQUNTd%2FqFN%2FNwQh777HJfg5fEWa7HCQ0FvRTyW%2Ff48tTBRZtkU0avSxBk8Zan%2BpIpUZhR0gs15QBQjOzGEWPpZcBPFHo1U8KUznp42dAIwo%2F1ZCg2lwNf5nf%2BAJy7iqOchBa8lP8tcTyG%2FO32UE%2BRpj1xLp%2F9rUQvSrZwTyntyEzGC9N89ijH0F%2B6bTnl7s4MQnrJSbaOauxrqq3mUv9kQy0LTQcMpoERG%2FMw1PfCyQY6pgHnL8tLWFzkoajiKINLfHfYm7QGm7WJ9A9y0svyXqN087Kp3tcnJZAQlCNIrwKvUFTck5%2BoOjif1Tj10GOq3tnEAbKuACbuEJOA1ouNfTQmKVpg2esKpdSJhOSIm9NbhxgW%2F3cah43Vhwq47yf2fOz%2FJSyZ%2B%2BAvZMc8TT6KUskDecwDkHjXB%2Fqfur%2FOz%2FLVxL6LGDwfXpeVbpPJ4oaDPq1geigsCX8U&X-Amz-Signature=875f0f4cb972d2826fb92300f9a7ef9d55dfd04e28ed1dbc4dd6361462349a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

