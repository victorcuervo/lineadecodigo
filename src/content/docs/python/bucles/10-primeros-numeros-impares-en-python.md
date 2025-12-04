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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBL5VWT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCW%2Bojfqsj1RHkxxUtHhAEnpepF7g8dIEyXDqHLFofkjQIhAKXIB90P6ipnSjWvX8l4q5Zwg1JFqggIwKWMn0a%2FDPGVKv8DCDkQABoMNjM3NDIzMTgzODA1IgzW%2BkfMlKK0duPKD3Eq3AO6LFSObghBwMJM2Ufz8DtDjPEpTZ627NS3OSrbhxlY7wJL3NLd5nmTQnzNQD9WvQPW6r1c4EMx%2B98FetUj5wrWUV6F7Pcj8Hgg59zwKTV9iS9nvCHWlKA7mxs3N8TddhZ8hcHdHIhEGDdv2co%2Ba7GtbL3R5ks362Mi8n0CVqiofDjTD5CHcppTDjAxoagCxW%2FMnNceNrTrH894fbiqPxKZ9b8IK5Vitxc2fe7Qw1hWg5SCe3ABUHt9wm7TDAoWnk%2F%2BQ6JjTDQRH2KiMJ3Qr9aqbcr8OEfhSpb%2FrRw3cZ8MSjEiodbM51jTItwBrhNGpJzd82Vh9BztF3Z7FqI62HnghFKvOZWgCJvjNiZ%2FFiwKQRa1FO7%2FhOGOlUiOd9LZEikKkfgF32exK9VghRTHntU6HbWnwvfdPSHXYDIrmaXEeZGA0%2FNC3YQN7CT0nOX8ZZ9%2BmA%2FsA9xBF9DAYxom1f9PJyk4xDzePFkscz%2FAIcQvPj5VdHs5%2FCnCDMIazFgNrGmdUV%2Fl9P%2FAOPX7eY5GofqHAsSsXb8t8JO9M72wzL8nM96%2ByZ2GCaTHRiolNuiH2dtM%2Bb3zoBqHkhUVQFAhrTOFaY%2BO9Ntx0GMyoWlU4mJmRt%2BoCftTvWpkht4o6TCIlcPJBjqkAe3o22HhV2i4NmVqenaLtLZYM1GmFpkQLxkX369erhqWHzfrBLXRY2c%2BrlZrV6HQOH78mrKguPhES6Lm1pDV1dZIQ1xjcvk1fpF950IkO17B6URAAnhIctwVVB%2FYnFZ9VG3yQ6vKSfxRoOA19TZrrm6X6cfjrxYjqHHgNHCOKBIX8D9v65vDOpG9sZZgqFCOhGc4LIoUyt%2Fid%2FqpddQJzLWuKuX8&X-Amz-Signature=d7a88341aba9eb6efdcb3ace377fb5a76b9e4b22a6d6eb6fb8a4e0407052bf82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

