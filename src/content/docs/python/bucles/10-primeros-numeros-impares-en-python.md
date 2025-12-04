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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA4RTNYX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDNRLAgaijtvGwd3WHvIrQ03blC1IayzvZWAMdRd40pfwIhAPK0hrFzKbwA1Z6gLkEpMyOynyHeDHt0gR%2FtTcyY%2F7btKv8DCEEQABoMNjM3NDIzMTgzODA1IgyurCKU7J7%2Bqn0OuFkq3AO1675%2BKjN2c7jVajimwuzLQDghbYsnW%2BiCE%2Fr6x18eg6Zh%2FxSKyxoDzF2hvzSYTjbLH5S9ru1qc62nG3fmowom%2FYk%2BljC%2BL8EfIVQ3zSeUTgK7Rbrff6hMcX%2F8cCFuVnYA26ZkSYKag1gWokcSAa3Zrzi%2B4zj6VjxxI3wUx1Sp60Gos8XgODI%2BEiv65sOuj10BbXPkBr4xZQrQ5kKn8dgvrlMYkWDITkgLkGYP5ovGA8Laokt84lMJQotR%2Bb0rcLh2rEAdrp%2BnuAIJgazSBBXwVNcBt6DdqsQVfemB1CMNh6As9oQsgM3WPjAPwQp3rMNgoWxmdoD%2FWKJdf%2F1kFoUG%2FpHglnKGH42PDHxfyV%2BduIfp5e9PfKlw2%2FFb4S72Y5vK1UhiaHTvmLWvdYOm2htDX0%2B9kStnNTN3ZpNoFh2Y1E%2FudHBW144yF3o558qt%2BmWVvUZBF1QAyHCfG%2BZokzFCWlMzQ1L54mdLb%2BPCh3I1ygBvo3TRPHIY8i3Bfyzx%2FLrg3QNNh45npxYMh86pVTDx99PFn9Oa8k24Ar%2Fah6Cf4WA8vMq9xiuGzVhqvyHVgbm8QZ3oFgDo%2FQGObIeXZLzk80sEO%2B%2FGDZjUNhft6yVYd9ZAWGUlb9%2BkrMws8zDkhMXJBjqkAYNSFInAvKCwdhIaIhR%2FJeaUYEpHWqAibR0%2BROMp1p7oi3kLdTqa4ZN0ICsD25vk3nl0zoGxE1Ssa7UbXvJQdqjpKGjGtLwuyufFcRPa60ekvHCsZ87SH8baW8GyTwgHYEpKwJD5jZQbcMkFpFFNQj%2FabM%2FytGRdKZ7NFnp3GYzVhgv9vx8tZ%2BSbHjVOgHygPvX6DzYqhsjZdEVXbLYRzGd5nHac&X-Amz-Signature=058bb4cb3e19416007b9bb746ace8c8e0d146cbb5a0349e1161927a31198c81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

