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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7IQ6D7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXAp7Dp%2B84LfRRPPoRv9YudWLbpmJXApezXOtlh%2Fw1ogIhAOr%2B1RgOzMKuI%2F1M8pywphB82611rKL9S5encb2qmNj9Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzUbYlEGLblXa8GNcYq3AMmIx2lpdiHIFjyS0YZN2ic%2FrbulluByWuNzzKwBGbn3kg6jICXolYe%2BszZpUMxtkBNbzAwHoSxHBGixRZXEaA2H29Jr5wcZTlhqHdjV8Anmzwi16o77T%2FmhMjGLvspSDqDgILxzsxgXniV%2BONlh3cQhxwSCqV5t3y6bu951%2FfLLZb1DAOORDVYIjzMdpFhf%2BZovf1fjI4KUElrcQp%2FUlQuy2yj4ML6p1Edhu6bKSI1p7MrXrC8fnk%2BX2sagOn6go2%2FoohCYbP82JxgU2PamSitapsU13f3eHtXPaIbl7IYzSgFYNzTX71B5MVoOtCu6b990uVPHeTe17XhZK4ILIvsaFuBLPytNQ4e9tlIkaOICPIixbFlNMuvIdNQ2aNyH3955r7cmMxEKBuug4DbtVBbinT1sN5hM5qnVP%2Bfo%2F1nt6F1PT3uB7kbH23I4XyKUu37IHAilh8vDTtDuCOtINHuMGzsVL3frGS%2FwZ5hGpPxhD7zP4MkQoHYdr7kk42qsmZcOJM%2FBgoeE%2F%2FtRcLQDUOMNxm7ZYolRcPkcGjlGtdTM2a2hUJFiULC%2FuqdIUruijwDC2qt3c%2Fk4R1U0H4VEwg%2Fkd38eLA47nwv7jNxwHg%2FybNtMEEQvVp38GgedDCwp8nJBjqkASp3iMCyPk%2BJ83QCyyzL%2FcvM0Zf2j3JHH75%2FwoFtJrbZOjkU1sTm3LD6Oh7RY8i4qdhudRqqU9L3j4g8GH8H0XWoockzLHQF3dQ%2BGF7l13qvztAdGa5sckXiC2IRvdawxoRI41bUQIVm5aScvQZysHn4LOi30Xwf6TEQIuMnulpjfOVFd7whXsTewb7yy4rhFtjBlx8mX%2FrS0RObHd%2BdV7avRIKx&X-Amz-Signature=d3a00707b89b5b2cdbac85591746910bd653a66fe5ae17d2a9999125720b4879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

