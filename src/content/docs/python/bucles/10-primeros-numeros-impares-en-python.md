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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLYIRZI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8Abv5JVApFsgc8Lpd%2FqsgPxadvlb%2BBc7w7KHHMmgdwIhAKYzVLs1U%2B7NE1RmJaJ6MLA9wNwRyrGqGbv6wt3xu5%2BhKv8DCHIQABoMNjM3NDIzMTgzODA1IgwBwpTGVUcvwJXEJvcq3AMqDQYGC83Fe5NhiV5fWcP15jLvzH69tbrpIWggy2BtMYx%2BYa5FmkzHf00Csk1hZijsJEHph6JjQtmgB2UG2ok0Pr%2BMBKtW3NPfhZO9%2FlKDQJjtMxSdnlpkdTD6t3l5gXyNCVOVW9TknJqYZkFvchmsIirCDxGYwpT5HyLayLAs17UDfdzrKN5nC9W1Zqla1LYcfuBgkXMDKVDGI3Wz43VYyW5ZaEaWuCldRn6EYpHuozEk7Jx0iJUvlY3vZv332mEC5M%2BFmUgqPJZ8mnJ8r%2B1PESaUOhHWOldWCRbeGj%2BjaaS0ICxmBwRFoNZOKLkaqJ3sMQFoiuZ4M6%2FwKYFLA5h7vErjrW0X29PgZLXS62cwnJhBwkGA2BG4ywQUVuAG0%2BU3s0zY4NeLENHY2u7viDc6ioDcaMNfa%2FUKo3J%2B2MW4VrZ%2Fn7%2FA7B%2F06vV77gc7aAa7q0dW96fMtmgMlL8vu%2BtJsZ2qPrIw%2BNU%2FIOkbbr3gvYBoFbZT%2FaknQPAJH48Ew0dAr%2FA5R7KtKj2G7GRDImIB0jorCgugX%2F9fCQktIXZCjrc3KiTBkrIDPWVBkfwb9%2BFIwU9vd1lYU7McknYLQJNZWU87ogsrTXDdleTDbNtJGHTUt99HZLEzOUnbpjC768%2FJBjqkAc6c2X1BOLRbsU6lubXGliFX09uaeKixskoiiHf4xxgAZ1tc4o29pty4slfGZZlnHpPe4SY184Dx6LTR%2BXAUmQO%2FNTcpvGuNknW5y%2FsmfdX7%2BahnOaiMQW1aSp4e6N%2FpU%2FyCJ%2FYmxF6zNYAFtCMsGzIgfS2QBr%2FvvRuAyoWd4vmy%2FXUOxWECqY6o4DZA%2Bu%2FFFv98LIehEY3CpUd7YfMECwi%2Fk6Jv&X-Amz-Signature=0650dbaa15db67290f51a30723955326bff9f4d90da7dde8f5ec92f9f4f333c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

