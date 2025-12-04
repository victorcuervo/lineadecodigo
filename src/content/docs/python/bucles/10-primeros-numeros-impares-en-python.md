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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6GWNVQO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD4VdbpXa5Jyx4gF6PVkGbjK9oQSPzJdpFF7buzPOOX0QIhAMbxa%2FX50nIT1yXm%2FZsnNvoIttukibYqw1r1UoFXyUGoKv8DCEAQABoMNjM3NDIzMTgzODA1IgzTM%2FxFjTFWum7WxL0q3AM35gL8dxz0cGekY7d5QSH0E6C7o%2B%2Fluln%2BvZq1BA7u5GcusUCD%2BMUAmu9SXNnm%2F%2B%2BFPbGa53JemB9P7upURli7%2FrUpYh5Sb%2FUsPC7g%2Bs98VvCMfI77H4a6ncNCm0NApJ5dHvOY9lntI6CPE2JzvdVAOGML%2BTGA73vh6famJRVDorMxNxEw6wFVtxRhcM0y1C8uPd62oYHh6YGniJJrbFJLapGciQtYlAWT4yWe9GmrhPtyypphvyr5B7rFwfo9AP0jsDO3Dgh8A7sU0wJr49amfDz7Sw9DfTFTXh31loUVtycPklKKecCtUPEJ6t1r0tj5l%2B%2FKcs0%2Fsg7uzYN7i%2B8tAi5sDJeRt04KLgJc6S19496wNx5FSGwll2yiVmhZO9ZTAa1AO5s3J7RZ73tvufNZhSKysB4vl2Rc0vP4DUKTbbGfAxuZKz0gOlFu6G%2B76uuevL%2BL2pHs4d0QmLA3vMQrQ3JTLMk4cPYG4R2eTzUIGhwlrs3bw07Gd9y6u%2FoFHeEpWhHTHYSjHbWPLIglkdq2dSejv5HX16kDQDlpNwxofzlXwMx11N2a%2BMWY7tnkr%2BL8qmU6o2%2BA5xeOoOoDRY3XOGrLZmPQCsglnwFzg6YGGLeMliYxI%2FGwfSGflDDU58TJBjqkAcLAcFO9zJ3%2BWhBk4IwXKZ%2FKiitjjYq%2BAL9tnBm1FCNfFl7mKruoOQ1QIGTD9tDF7pxr6waRuFBoC3%2FkPRQvFgwcovuD%2B49SUhkzPe7wdoLI9oT11dXuOE1NlfhgewlcdLl58wJT%2F5eBY%2Bd%2BPyfkudMnYymxRPpdh0baNL14BndIou2GuQbnew5FBq7K8PQRCgGwRFhzXbF69yCIn1ASqUnGZUg0&X-Amz-Signature=08c8f9f97809fc8164f444f1bea5d957bba06cd5a89abe48412e627401321245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

