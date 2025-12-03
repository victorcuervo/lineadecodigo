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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QH6JKK6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCon79RKoUFpJcRqHCeHaQEthZo4Ao4dAWk9VT68f7WrgIgIFhzWAv9vCrJP%2BCQRHndd0DwYJXNDKTf11Fhw7Hy3z0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDL3OKozpKTNa%2F8XmMircA4ZiufCFHrBWNUPZ22cFItMMwbk5R4G0qgaMmMtqe%2FaFzX2Yp0BBiq9LOTXCCp%2F4M4q6QtdJVQMG3Tx2oiIQ4NovGfHkKWM%2BOxd430ntPk1PMrAMiPsyUmeXy8Xcork5tceCP4L9osBawnZKKD35m4NLypGCY73hHIO%2BH43BcrxywJ7aNu5jCABPOvxpA%2BJ2Q467ecwhh%2F48n87F6JqfZJYi0Xaj0wDlh8AbSirS1PuLSUuoMUiU%2FY1UEmQHTHtc9IbUSEoquHK6jxD9ITDudbUFOOI0JsC6N8T8n1hRed5faq2ZfjPD4h%2B7t4EfuHMdTbA5xRQq%2FOB%2BvWrwUYSpxosQFdREMiV1qt9o9X5OIQ3aqyq%2FKjUsNoOydScVKJln8uGmypLl%2FRK%2BXV3RbdWSictPgg8RpLIjP67tck4LkGx12uIxS2kLuPE6NPNPCiEbkrfkAt6hFSjFc5c7QjyPLqCcbj6EIurht0YgANV%2Fo7XOOiRKjcHjz9M8FQ7JCev17srfHjesvk0YiCe%2BBVxsoTuNo3cXf1OXe6VtzDwHJrkK7ln7lldwUVnljmwhAWIClksnGgQWm5uNSjvW%2FMDuiaYIcRRg1hSWfhdLG%2BPhyuHBNZWFKKG%2FZHEJOvLeMMGVvskGOqUBdfgqSDfB7OO%2Bq7VeVJNQ2EspqwTNaFtNPo2uPaxzoZw9Y2mO32kFgdHAibGsp346FFUnKmfxhpgTMaTRCsgLz9oLef3I7Q%2FkMKWJdXx%2FN1addFRvQiu3mmJTUpmy8%2FLwto%2F4xK4ZWWEbKAV0jGqcariepVeuIUH6ZN82YN9vsG0NmIStaup05BOvqgwC0sLYMjuWd%2FaWpDgzgA4uJCXyu71%2BbB5E&X-Amz-Signature=49b6728e69cb91394ba8a2f157d47ebf0a4486b6e4e592065ba404271f329a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

