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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5DWDD6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGLbR9tXfCx3ZfDDz%2Fu%2BSN4KcP4U%2B1yFptab4fn7YOO6AiEA7KydJmLgUg8PypHrtUJO6dnPLx5wCR0oAd%2BjG3MD0IEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLSYTl%2Bvy6orzFyZhyrcA3K%2FUHbva5VKGr2pp%2BM%2B%2Bh2knOlNLBlj8rZ7h4R%2BEb%2Fe2QUxiF7o4B%2BWoXY6E9phr9mWqZ8WKFbTw1otl640yCZFyXcXP%2FpO8Ro8HoDMWlNXmEqBj%2FtJXLMY9W%2FDDgp%2FQl2S%2FQzTLXOojbgmYn4NbFDbaCFUe0bUW0B7jLkyPSxd5nvZ6Ja8wyiud%2Fq0dZFyYgH1LXCP3mLMhKWhrnw03i3TtZrijrRsSiRhmvq2p1llHJ1LzBj9e6i1gyeNft%2FaACkXxkeEex9OEconWV7xXtVwSLmgJOUEwpn5zgjMpbYTay1ABPMEwfqsO5sNypC7nx2JT59B4k07nN5WegLs9BJ9VEVNfji%2FFtoJCRiAQyo5RfsSDyJFpn0TCNZ0mR2tCVueFeS0DTyPHibwY1LuQ1%2FU0D8W4GeQYj5RhlLhV0aGGGS0PTKQNawO1q5ww6kqOQJ%2F1mc5UKTqgHc9n%2FP65IHpkIFGmdRwHKyS1Yo8cFROIF8%2FMaWr%2FDZCXoUqgUFP59lkjtQ6p4ZnN7hyz9Kv0pcS4Je6NlDnFtdsQeG601w3ufAPQ6oNG6g%2BzV3aMtFEDChidnI%2Fr3TYb2xGgQHKT43PN37T5gvNk3l8PHjvc%2Bcy%2BZEVITOtoGvJFYPvMNuHxckGOqUBie2QSBgUVKoGVB%2FoPOmgeSq%2FMvW3oahVCmE4KNZGxxuCZZLI8onYNAVoD4HrIUIDvrAwSkziYb9%2Bs1xqa0JH45pNldCG%2BEztTAF8sbHa%2BBP8%2FtihskHmcJbs4COftiGNcYpWOt%2Bj7e6gw8LgTfLQPw9YGFT8bkY%2BHGBSasU3WrjNzSGy%2BzvKwHBJJLBLP5KvbHTpVnrtriRSe42hlwXGoLwUJswC&X-Amz-Signature=963afa45cb2ae04d2ee1761876e430576cda4a40d2f4863a2fa5ce87aa741980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

