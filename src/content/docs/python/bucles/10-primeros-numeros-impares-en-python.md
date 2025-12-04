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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIE7FP4M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC%2FWt0xdFa5hGWLX2I16uWQrUyhr56SCsrQEv2AmFI8CgIhAMsZbp%2F%2Fw%2BzKxsjUR9ckYi5YuhJ00cfM%2Bp9VQw9D9lv7Kv8DCDkQABoMNjM3NDIzMTgzODA1Igzr0Nxz14CABRGlvfQq3APms01Q%2BV%2F%2B%2BHMpQXtq%2BLKw4jwvYP%2Fd4Xu%2B%2Fn9bfo4icSb5Ss51X0WCSLXCZnIiPC2x86ke6A8MYJqJ1MeVbzueHGxrZNAJzu8DfF0q%2FbxZn6sGWZ0olp2VhTHUOrvkoQrnF1QYZ57Q%2FL9WYhvAyuJeEXEFgpLbytr%2FpgbzzupR0CEkPoBsBDTqgQZcSU4P6L0VoNddmUWGhlfc53xPpOd7CAZX8gNG8vxUhGyK9Ugv8ksZEjQ9jmG%2FlUizgxmVcSB2mnTJhsXqgKe9VwMChtFF5ucWW8EEOjHLETNkD6RExzRXEaX5zydtvg1wSvK7iQhkvaBc31l%2BrlWeiJixUe3oXoMYIWw8rgRSkUq7pAFCruyz33IR6JIxa%2B75BfXIqr8CH8c84jsdNw2tfKO14yKV4ZmIBVPYVFlmtMKCF69CH5R9i%2BLjVKl5b1R28JJswLrB7EtKaRT6PeVF1J3WZv%2FPSUXg%2FBJccOiNE99qKLUOOtVOHVmHzV0wcPQncVusA50jyIzkcOZFBhCTSNQwgu4iPfOKe5uwAOB6oBCWVdj9vJb80w7pvDLIH4%2F5QM2hEQOgA6uTt164ucdNUyie2ZeBTCgM6GDvZCC2sjJw4yGmXnedSSJ6Lql93U%2BEmjDjlMPJBjqkAXQrhAh7AvRg36GyPePOm0oqHld2cM7Mf7YimZgbiHjZ6%2Ft5New7wq7HjrR7P7ChNVVd2SPOeS%2BS%2Bfih1VlcNpVxPq6VPJ%2Bv1AgnCR1i2PDigR2jwG7pkyp4oGkfnRE%2FQ7X0SR8WNgc2K3JGhmXWhbF0G09rGH%2B5%2BYsMFUuPe9ndU29oU0PJFDXq7paq5OTXVUdrEBwz2DM6gyu5lhjZh6%2FQJart&X-Amz-Signature=0e50cd35fe0fe8973eda6565801d64eb19e451458a1415800231a25e5e4bfc89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

