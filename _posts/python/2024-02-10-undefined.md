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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKMUG74%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDpRoWPS8Ucn%2BOqh7QjHxXL1tWDHI8s9aTnsjEq05eVoQIgB3lrOpjUrQ8JwAeFko4YoGvgiS0so7P4lrg91NQj8Qcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDnmErEmpmN6JXL8aSrcA9JCc1bbBpqPbkLpCLqtBEovNUXVIJspdeWchNiiF9yw9ofFkVML7asMqKG%2Fg0cKhe2fTUKnWNaGTJFZ5WIUDY5ELGzMsEM1yvprTK2NLYpNDjBXTM30brvSaqp0gTrKHCoNyzIi8bEsOl0n85S39aNHJ9zFtJ0G%2Fi2tXdSBt2M07f5%2FavMk4fuaUuQpP5zkjIFeumSM0AAsvz4wOqkWKzzDkG4EUlJtJFvahS4V7mZ9BOhUruyrKOJoETa7j0nuxUbU%2BT%2Fx%2BRPWnGwN5JPcqiF9y3z%2BnMmqtjvjg%2Fk5oW9mV5alBIYHOLiNw4I%2FFAidLImZqDMWY4AXR%2FGyvd1FVdjjOGS8fUTGB98bZNzROFCweldSndjR7zRXUpUoMkXdoSWNVh3f4crfu847aQkuBSXUa%2B8VxycY79kkZjMTksykt3ytWfeQjxO12NlTN9GnqjGrOE6jHTLI1Vm0OIRDjoUy3BCrrqf9UB2w4NZ4PNqAVRyYAJp1B38wths7fkgA32ZWFHsBRYoZjctiqDX9OOZYk0hR3OxYbOcYjYSnrcQv4ONZORhrUgw5DjMnemuXhmz5mSpOtsBNnLkKpXgPpCL8ttaIb5ZohzjS6iUOoMqsrZ5%2Fm5Qja4tluZtjMLb1v8kGOqUByqtMmolTZHB%2B1qxUseTemLFf9FPo%2F6aLkSz3oJJAtr9pPFrLGHVVxDN24lA%2B%2FdIiErM7l7TfJqlsE%2BGEu%2B4NU8u9taitTKuYBC%2Bm3xAJBG1OHuggdSHM6AQY857RUekKW83lRBmidZYe42ss64RjxBwiq%2Fv%2BIA%2F0stvAIcGRqKaKWs2Zsk4AeNHCxNR%2FVrNWh3oBVQhltXsthUjWFFAgNR%2BhN83C&X-Amz-Signature=e2b7196b3a5173fa2a495a38499a0c8fbfd1bf443ce45b3a2330157ea7f9603d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

