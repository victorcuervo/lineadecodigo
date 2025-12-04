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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCPZ44ED%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEsJsdKMdo%2BxUVKk0rNqIzk236npnCBHRuYvfVlMBJQ6AiBK81LOhGm18GeDhCbOpspjAFvkxHz4ng2ZJU%2Bp5RLMmyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM774K3FiLbmzrK8noKtwDtYrxYA%2BqsDwE%2FRckvqWA6zh%2BSN78GDCNCy1kFW0WOsPt%2FMbMdxxeor0ALo27dwjQocZVEAQc1Moqw%2FOB6dbdbLv8xiqmzg1ePpfKvOsNwTDn77D2suw2jgVAaIWBh5pVAYUgIFNorN8wKWvGnMw0sR30EYQ8OnvLOHA2XNGlFaFosKPx%2Bu4ud2m5vopkekXN424wtJwOTHaSHXxERNw6rqVQ1TBJaRJ9kLm1teCw1u6Fc2neOp14UDx1%2BpRoWEs%2FV%2B3s61RhywTCYMl7alCEGbds5V2rv%2BsjxH0U%2F6MJ2%2BEJ%2B1MvqoH8PZMc9Qj4zlESfPB7N5EI0KiyVwUzFCy2vgOtRnfj0pDhfVzGrt3d7GGITZlDuIJIB9oDjVBThMMFbBN9x%2F1XyunexF9hcuLT3MQ9JoFMK0SYdW3sOnxtuDD2rL5Uo5kYtKOKpcoh7bJgX2oRnHvdYoCthvX4PnulqVNcTkIxuS8vLVTINi3HBxXj0jrfDMyzcX58xAOmTKJtZGeAU09EJog16AHqtcoKBV0pVQSkKP81ByvwQjGnXBIMMN41r1RgllYo46BY52vFL2iDSOZr3dIdtN6CcvNV%2FYIprqkV3aK1bcdMVO10pkaFyn84XoTAS0GYtDAwg8vEyQY6pgEm5q4LS4PfO303fn%2Fwjox3ZuLaD2hDrfyUo4HUmb1wFSQfHteZBZWCGxcH9n4WJP4CpyH7iMNFmknnbo9%2BdV6CvTzhc%2Ff9ESF3bUYpsf3JnOIRKPU4xit6V6kTG97ZHv6cjf5CxbMKHOALhnMps5qdGqkAIvUOvJhKO21FV0k4q0c%2BRqoOIlpFgVv54T07gqUcYaiZAE2lKAUBWc%2F3H6alVIylQ1bw&X-Amz-Signature=af98d9b5fab5db1df09b039125acc35c61ff4a4620011f77ea45dff16807c19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

