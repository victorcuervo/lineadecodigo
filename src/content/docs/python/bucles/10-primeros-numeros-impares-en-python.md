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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z343CT5W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCynzxtiwyHkBJNQUXvoFQXq4Jw98CNkuhF4fHRJ2OMmwIgVXdC%2BiKPZ%2BKou%2Faq4Y8NY%2FGQjBrBaArNqrL0ZMkOjIYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBtJYn1U9DxiUAUXyCrcA6MNWzdO5z2pLMiO9hxIT3%2BVrQ3qWqraHqzJ6wpih93%2BVNA1SB4ZIOzT68Ak71dDW5xeC36XDATwwrrH8xWpzdbTj4p%2BPDkL0PW7NgjsJucMK3ARgv64fFzgK9VOSH%2Bbv%2BOG2HNJ7RorveBFRhap3j%2BL9tiWqtOyyzXyLIfuWGUHCx6SbZeXNUU7HdmPBmGdOG17BsbuwaPj00aST%2BZX5qucRrZ%2Bi3mtdC7guwWaYVP%2FZoH9ssQ0WW6U6NgdYWYwS4NTm7kx8kC4CncHAljqli4Ymz5TsEDLu4g2E9HQlmpt7CBls4gxeWRw5tJUyOsdWufjt01nGu6t1y54JaXduwD9KMmOCY%2FNUymz0%2BOWGUdZWVMOJehEt5Z4%2B%2FsmKT1dlpG0Fe5JqMkh9hctYydpy9tagOKzYcLqke4gNws0X9xaAqMxNnz%2Fse0QFOSD%2F18GT6BFyZz8tToEfAL53WMSCYbQzBUvnFC4r25ZydqyFw0itOue%2FC2Feg5%2Blh%2BDActZ0iazaLJfZz4%2FqZB5U5iD%2FD8MOZdgAZaL%2BLwUk%2FeJCaEcdXF2BUyGTWr2NhExZwvcxkU6CazrVF7MuSjVqln2WBcf8iwgf3I57L2%2B0p7voFhwcsKzVy2zS1aUY%2BQfMJvK0ckGOqUBb2gGb3i%2F85bzlvoydygFbXyUPFXx1n3kxLRa9NeqL3yT6ClJrxKXvgq7G8V4GeYcO3WLaGgAzzoB3TEJwUfzf3Eziy6VMj89eS12xCvjB78fIxaqHFixxjMgh3DAqCh9N%2Ft8Ts%2FR3b%2BQrDIn9LZ4uP63Oo0FwR93plHPDe6S2X9Gio0u3pTQp8ymEb2dDTVfJrANhAZzRdRWpkXGd4w8aPAJjs9c&X-Amz-Signature=6d27366c897e5879d087f29b65a55251b33a1898af72721137579419212eadbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

