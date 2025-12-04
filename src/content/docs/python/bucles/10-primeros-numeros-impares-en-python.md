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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKTOTH6N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEFbdQ3rh8rPMgIxMHy86wm%2Fl5SGztIxIAvt0A8SxiX%2BAiBiuIVYIjOJ8VdK2RhzljRZ2Mk8RGd%2FvwQ6DICh7FgdEyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtPSAI0Kfr8hiLA6DKtwDAVlAG6umDu8MuB8q54fVbjUJbdTR%2BpmwE8Ek8K453hIiymsNr6gSDGdKvz1NY8WOCSCFe%2F%2FfGG0bfMjoH2e5HcVdPqA4KnhyXnpax2TPbf9zJAPpTMtuq3TQKIJc2dm1FRfK3TYHAm4EESEgZ%2B7VAUW%2FpX0SoLTGoyF82uWQvGAe1Qk6z2BFDIUvFeer7KPPP8sZGBJoMiWTbRyNKnD8%2B548jGl1ISvxR1rhpwx%2BqZpnA6NMYBuN7R20fdwvQqgSOXZJBgQLNZTGU14TaUNmmvEvXLKTxq9NVoL%2Bj4f%2FXuGghA0bLw4bYZzI3zHmMHVQLkSw9Cm1wzp4iTxxwD3sv2eW2pXC9YxpREO7LRpq%2BTPu%2FwWb363MoqQYd%2Buu20tuU9UEsE6onMhi%2FT8f6N5VAZw9EBXDXCuCn0r%2BW5GIprbgKIM%2Fco9bn2Vd8E%2Bj5Z2CBlw6xlQKdtnUzXgU0wB8iY7ts26RmsaXBdpeivjKkd7AGNSXVwvd3Bb8ChPM3wnEBCl3AGbtaVV%2FrkM%2FHfbyq9Jf6HotXabEJBDG864EfAfXxYwyuytfQc%2FvkGYREMJhqKfrhBMuaAW2GlYiSF2U9PYXn7bg5h1wXulRhyaTcex00Bjn%2BydIS7%2BldaYw3tTDyQY6pgFIpbtIOP3k3M%2FZDOOwF95iPnm3oMtcrqSZnuYXzFd26LJOj%2BMx0NBY%2B9MYFiTIi0TyiWqmvgDG9ISyydIdK5%2FWfzNPe%2BSfc5myVjg6K%2F7j3oh8yIHVb%2B93%2FEn5kqRRdxEx2u9UcO82QpXLHBnv%2Bk4fC6f3Sfb7bFNBULA2xROQf5q7qiIOawHUiitrQT2XPVPU6d4m4T8YSleuSGMNpwLBoYm88Clt&X-Amz-Signature=37f333708ea6e8bb939c6960aa355e6a8c7e474e17261cc9507e09ae7545f84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

