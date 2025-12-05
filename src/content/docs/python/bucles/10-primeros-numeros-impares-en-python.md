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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ILWSUE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM2r0mwKHv0fEdoEsQAzPf4wUdkf3mlm3CmNhW1swrsAiAn23gJp1kWpOUCH9Q3BQie82hCxMQ%2BduVKUMI4%2FS33Dir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMEoO%2BqQhc7KjjKFOBKtwDwEwqdg3uP79vVvLC8P6pZXXunMVfwDbX02nsttHTa4TOlqt99tBvTsiDYw3V78bb9fmkpklMY0q7AcUc7hCUlUUP30471R05MV2Vm%2BhcjIqlHO1sdSzJ5ADkOKPqgGVaY2KfgcZQsCXuYM4NF87tr%2F97M4qhldrVG4npn6MCEtbQ%2Bpu2cK%2B7os4hBrG6%2Fs1LK0gYhk%2BFjbCnUEqrkrP%2F8nKdI8raALL9h4QKsWEv%2BsF7tpyeLjSHLLSIxekVFudiy3y4QBeh9qlAll2muLxTKpOr96kH5BW6k3hgOlrX1jItlh%2BYI7UxVjnm%2BT55iQ6MR3y3B2gIz8VQVB6gl2%2F42rqOjN%2FyGVzk2KMtFA6TcoMEYDDcITLUXWRq2PxGUn%2BcGWf5coN4FilRq6bQwWkKg9aHM8t%2BOIf1iI40dHttiNO3BOmeynJAqpo7tYnpUTxfVkLOpcHQQxW86%2BYnJIXCLUzDK%2B%2F8FjS%2BsrnM0KJ1GRDjW8Q13ZtcPimCCkoYLQMaZP8rleik1S4OjUQrG%2BhM5UKOgoxEPUvY3ldn1WrZBjFzOvaQKAe%2FZl9Sn0K8LlDd57zcVtA22FQ2PT12nHlRKxWRX16vIBhgWS7s7jy%2BYbn4TcAn5J3OV5%2F1uf0wgarJyQY6pgFXGgSTASwwDonEVorR2lY%2BxhAZMhf0CQ9DUOlru%2BCh%2F26LI5cJMPtusDZl1ecyzUXwqIZNqiT442YedzszHDFm0t0wF%2B0BGFT%2Br3EugdnR0td7Ga4K3PHFCrUc%2FDstdCiv52fyFDWNHy8FwIkDI9hg8asKiP0pBfnIoEyMspfJy8faYs1yG4Gjm7NrqqgA%2BIbPwrC4n0z1Jfz%2Ba9rScioFrIAW7wSx&X-Amz-Signature=0cdad2f1219c3ee5e4e625cf3c5d6122cdcbdf5ed6e5cd95bfae54b884ebf42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

