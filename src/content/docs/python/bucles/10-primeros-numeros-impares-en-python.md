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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466646LWTOL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLXj%2Ba5f4I8PsYjK3IR%2BkgHm5AJtfu13xOHXaieiCP5AiAeXtBkA7SwwTpNgUbgcD%2B9j867rNm74HLK8fjPI5AKPSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvwiDVCTnxVOn8CZCKtwDvmnYGtXWFjBBFEIAQb69wKPyPUHvyC4Kqf9DwArR9%2BW1iymNzFl7uK%2F9ckjPRGVDXvGNjFROWff1B5sgnEglNW5nachUss%2B%2B5mEad3G3KjA4%2B3gxgPemBgfPM%2F6xzjPFaGco%2Bi8wBiszulleG%2BbTb1FVtpOoKZG17CR9jmpD77dQRPbAX%2F4uPK7UjBIQPiyIi9DrBIZAWMir8SBhqXUWnfF1u0Lx8Yu4hENkfPs%2F7l8xWeCLVR7jHTkEHRhLEGWc5Sf9C38bkZYN4OaPGJhkEe64bsRPZflRpeV5Ww%2F5b0z5bno4CVoXFCg22IxkOYTDMVV0kcAPdd5Z5jlzyDY%2BeYIKoLPaUjM3lw4ku5m6vfnvo376wqKsX0WL00GuvZBDPYgOHL66ipt8WzzC48pMSKsDEdq%2BkZMncDB6uG9cTsnpEk88WKqckW2Z%2FkrUdG5pMJSq8jTZZTPxbhJ%2FR%2B%2BxThK%2BFppWVVPB2BV4ggqUyNbd6R%2FhRIRJMqiA465Cpuv0sc5jAXDPaL0u9VZPMLVzRSk11S212CFpc1zfQm1Yb9%2FeQHzGyXJILyLoCBsu3S8ITpRes7%2FzINoE1KnrwMFYC5BIUXw7HDn8IiXcQ2fc%2Bxr4W3AY2d2hFG6iLK4wp97OyQY6pgF0JzN1G3yUoJVfIkY5QVKti2jK0YaKcAb7MNbcst3yHfe9w4pPCIavUQCMhOBRf1wMW90u8hzQck2Vy9OdZ30MHlG0FeudF4fvZGn2lwWhcIlgBQgblYLOM7Ye%2BYSPh45yg24talTkj6tVF1%2Fp5OxqMttt274dmpdlE%2B%2Fzb3ZPS5rk70lefrA%2BVIzAn0IpV6VNNk8%2F8Nr1G%2FL%2BXGOe6RupU%2Fivoq1c&X-Amz-Signature=c82f8d13a061400c46f030a3c286b1b73172b8bf6854847a39d2b746e3d77d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

