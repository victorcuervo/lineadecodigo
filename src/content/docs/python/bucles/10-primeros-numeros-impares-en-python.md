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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6QMQTAW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoK%2Bd7l7XaIMbsA8spsZJ0GaqDQz4V1F90hIYtRikIUAiEA1x8cF9ky7wfaL094zBplt0eT7bv4foAooxcNpf2deqEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIy%2FDw99TTAXduS9tyrcA5JVGgnuh4TMg8Lj5F6HlLMVGLcU4eKNoHHS%2B%2Bb%2Bn7tFja2MXv4fJfmT32yFYXihvVclvwoLh4zxWykxJ%2FStLqhw50N5bizJaTJ6ZfPKU4K7vim6oEjcg1saDpcJBEJZ7HtKrYUVzG2GOwiS%2BC211wltUa9yC%2FzKQbztRaaAY2GZakEg3ZNt%2B6YjShxDR59W93pCPjtmxfmj%2B%2BGF2KA%2FqFsAHK5PmJZ9x7KbXB7iYFVTYEY%2FfH%2FGCudX%2Bk5pKYz3n%2BmbHEN%2FkEpWFDNzaIwJDr5GZ1Z%2B3GyWeNp8ic%2Fjx1hoVJIgCRARLYxDNy8T%2BpOS%2FThYgUdGCGy7xFy5phU%2FTk9AzlNnkJH3OPqDB9Gqmp%2Fqk4BDhyd5Vlv8UNSwQDApV90GKL0JLBVixDC1CWdtw1l0%2BvNc2GjcOyImZavLuiu4AmzLq7H%2Bx26NHQGP5T5iUXTkO52%2BqIj6kjLJlmAM7MAU6RoF0ARBGVmPu%2Bv3HccNTqwSa9WHuTruXEtw5fbutUAtSDXM%2FEqEHBFBlUCbbKoTHHMs48Dx6dPe7lxXxRhquBhZ0JhZcqbK9qUBEZQHnLAKnYZpiF86GgRiPB%2FX9E747RbKyv9H6Bo8mkGMKAPy0yUOWJU4%2BiYvfrgAMPq%2F1skGOqUBduSZSLgyELLE4nEiDVvN%2BlQFedBjT%2BooOYuP9V%2F%2F3MaEi0chC4AnsZgKAkEbUYg0tr8mxi1J7eS%2Bo0GbR5mQ%2B6BSBUSov1D0JJiYHVX0WUKWzWUyRO%2BLuKyxd9hlKHKF8efqUazac0zqg1MKNw%2BWGb93JsW3rGaq0BiZNztjPDYatfxTduP9vWmzfQ38yzPjh0RqqWysJQyPXcw7wOB8lZ6LuclS&X-Amz-Signature=8d951432ca11ade67bf8e6754a1c6884f54854d053e1f1b08851f0451903e6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

