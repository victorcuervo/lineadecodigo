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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLPNIGDG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrVbUfH5tofWxmCq9Ueli6ygFyb7k8PfAGzVf4WdGM0AiBrpp8WpygCcG4UW55uaHmyeWWqttDkG3%2FgJTq64Ksr2yqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5PIPgjoLdoTel4QhKtwDrePkuW%2BkDe1aELy8y16Y8iDceav%2BsUnVCV%2FgKAh32e%2FDkm1SXIuBGNx%2BjtE6Eca8%2Bs3aufYJJEVM45yR9NnCxr%2BadD7VtobkvSwH97K7uTcKhp2FVuFsY8YOvZirPFm7sgT7mn7y9KQ8YrNsLAfE6BtUBp3vhy09pXx9PH7ETx2aYAWW%2FR%2FW8RjHCypfM3i4y5i%2Flzr%2F0XTE%2B0VnkXULTBJv6JDmI%2Fvvt%2BTkJ2AotxNylR%2FrhvgwEzB1ZwCdhY7ALDDVuwGa3Jil47PEsAJuyF5IDDLJUqFmVaFBQIwt3bTs0p7HEh9Jhx4uW%2FlNHckIkmS66Dw%2BRby0dPLsMweKMp9WsAyPdTm9HtX8v%2FSpTM13krg39XcW1jtZQVYOH3nxztIpqo%2FzsKP%2FihVMEIUPtTGFmxwTbT6XuvQ%2BRODj5MDG7BUT6xSTMwqbVG5Hm2K2I3Ptuit8mZTEXZpf%2B%2FG8M%2FtfUaNkRjZUt8%2FdOJ8QVo3Ln7t1iQhT5jej9x%2F710xbsWTJKYSORA1krK7oXd%2BgE%2FBh4vFcVIYk%2FsQf1n8phUIyRjcz2aHS14YxUdkG24XTYyr5taSnQ4FvCeprtEiXcb7utr4fA4C2bMNfv%2FJrAv6fKu%2BCSO3n8IWcOu4wx63eyQY6pgGILhQvH%2Fr5XLeBYvWW43nDhwEcwrbcZrWzIy0AIay0Xvf0NA%2B0ALWOXtgjU%2FB8RFCS9ABkDwpa993ZT8WMvT%2FXb7COk6l3b4XdH5yxwPW0R0YaH4XVufb0t8yRlhP%2FQzVPM%2BqhLd9otKPd46CT7N4dAubIKwaM99G2Bgo4XFGqR8QKNAJvectLy4%2BO5%2FPWAKZTsh7k3qaGYYMTN1rMdC%2F7R1UtYkj%2B&X-Amz-Signature=ac29288eb71899d80f01b524fc80d0500402c3faba66fa0f98051c77eefd4f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

