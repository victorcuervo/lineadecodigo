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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4A2D6HS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeyMXO9ARVCkjcjj61YHaNlnerE5kcirbYnhfp38WlgAiEAjma4DefDDVjBuRH520xL6gDQOH8KJTijsugzOrAAw4Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBsxKbODnN5tYXmlgSrcA%2BcFIYt7Oghpuv%2BwPYYxbhIwBrQncqvP01K0ZcQA3da0XEpPHoYxZHTh7ce%2FL8Li04Lt4cA5%2FMo2P8lY4yGDhzBl0cNJJ2JxI0MM2%2FkSL1FaE9BpigBzjTSr6oPswVfoOppJHfCmP%2BO8QXRILqhVwjXkIpWqx8EKG8I%2FbFzor6RUrAQB41kPVDN%2BSa4zDa6FkN9SBu4rc7sJT4AFPfXPqfUeG6TX1gUHKVH7TFSHyKr1QwH%2FbxpKCDAYR9MhUbKxoyr3oBjERg5TMCg8CosT6aiWApB9qG%2FXnAnZeO3uLjCrQINln%2FzPpzKHru%2BT39yu%2FV80OwimDLxxi2A%2Bl4ep8HiIdyCgZEhZc0evm2cNXerluOirM3VZIHeCdjjJsj%2B7MVyleUKTV0C0V59TXzkrvovhubw9IM%2BZSg4cG9mg3M2nz6HpDho472SBscMf5iPh4iqr6tMVU%2BDiALIvg7Ds7fcdyODpboTX6Sewu0uUfIduL60MjF9HYpGc5gnO9UYAG0kopKZAlYOvefeOfuIW3Rz7y5ZtACDd8tXlogYGTAJvM%2F5SAkCCkOZRgAfVvPJdORdZ6DU3IgG%2Bzd3PyTGOMkZWVrsnvES%2FRpjAuHnVf7X0xcVQAYPvLXe4D84gMLCmyckGOqUB9EqCZHxe%2FwLy1Gw%2FpkAVIBiS5J2vCKiI71PTv3hI1gLbMftELx1Es3Bdd2aCZEe0LTTKXeZFObLWQ0245pfWyCgS7UNl8QPPZKIAM%2Fn6Bbsr0e6tVybw8C%2BEB1IeNfsjHsdnk5%2FCLlvFH0RI3ihaKtF9WyvSiF354hSJHPMMe3AlxJA1wHM%2BTN9mXQZs4%2BfKL3or3CSSEb7rkl2qK4cb0vBYIbk8&X-Amz-Signature=bf5060e355ec2287eb93099580dfa240a5cafef6247e517d623a3ed829ea07b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

