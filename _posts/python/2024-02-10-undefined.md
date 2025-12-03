---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2P5MH5W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBb0R87TJryciEALnSOb%2BR%2Ftv3Kf%2FJF53CbIUowZaY9EAiEAnZDnv2A%2BbAsIqHvBluAOlgs8MFF704ewyw6q9SDrq2oq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKqWMYGF1nN0ubJ9%2FyrcA9ani3jEjVuHY3VgYhf0mbzopFDTXVn7wluzmidA0THQaTAa9GQLqUM8asK5MFqfY7OLdXBCLLwX5DiUoCSY1MtQwB0tYhbofi%2BKkJwplX3cSmsOQUTeEbUFLNXbF5iLyJuniG4g71jHz19OCSGuaxg0I8KYQSTYfAIHTD69a%2BClQ%2BpVGBteAJkbpDS3Wr15ir%2BJK9vGIgHjd6yEw9fw9B9pIDRRlTijKpNiDogOny5gbnP%2BTdC7wFonAe4X5SUzvdubN4ApQq42vVAghNmGOsWK%2BLNfiCMlhF6KqsC4fj1xHp4tOevE%2BcZ2dTelq2dmj1vKuoRjdN3UusKOhT5tydPrIbdluiYio7zS9%2BymOXcVcrWNvNehZTJV%2BnGAYFuSJxSpKsBjhqC%2Fm4gk%2FUI5i5v9qVDKVbHwlNiKRgXmzY3bzK1gyeTGS7P3QOrBqHSAp5U87F9%2FX3KL5a%2BHHVI%2BtJM50wdMLY6QicvyKizUxdb01YtYCfLADohIpdJws6jmR%2FDcLawZwnIkMbuVvRWa1GgSUWIogok%2FvuAm4rJKkOEzZzjN0RLnigXrlrWrdJXknY6eUrwPgN5IJaM0nfu4tjMC5ds0ITF44yFFdkGiKNxroSgFXdAgBP%2BT7%2FJDMOmmwckGOqUBn0AhkamjN%2FLuX73AP7oKiWrRomuNIc9Usk%2B4WsL7GaJT4195snpZs8jnMLAGfjHZlsFbR13nRM44K5YvDNqJdzw4eeHMvXKJugKwN2QDHHV9zcJ03s5kISZzua164CZjBxTOeo7BqcZ5g8uOfHGl0a87KOFqLDcusTxwDN%2FSAURUGW3dRnfj6iUW16uLznuTb1v6iu4dF984JViE8UnDrBd3HVkd&X-Amz-Signature=5907015fb49ad5c26d18f1e1488b6c5c0fdf20229eed0457acdcda8d3e4446c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

