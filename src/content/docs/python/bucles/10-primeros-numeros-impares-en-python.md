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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R7IXP7A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTK2ulBsigurk2KClxKgchWSf9nvEYI61Ww74pHN3eIwIgDpUHEiwDsEKoAk2jjCzqUFm4mjemnqFXUZcElgMdOtsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7EUVsa2dTj%2B0AN5SrcA7hzS8ACSPZ7Yg%2BTRBV%2FhyNhKkzOEfMia5x9r6yHm271FcTq1Ro7dtxpXKyGvvE2idzqCe3Ha%2F5cHBAQJ8HQMCUwky2CapGMyFJ9VebyhI6OEs8k0g6TIEj14ndn62HTyoSXtSpIAg46cYO0t1KpxHE4w%2B2PpwD8mNR9u3CqiF8D5FcnEB4VRhyEVi4P069UjN8nGTPz2i%2FAEMU92jddVLE0%2Fjv31EntKwjw7LlOmZiSeBYZj1p1YYOfUM5AX%2BovQ659MqMFTvcVYJtlw0Ut%2BEgW7AKRLiQ1GEYZn079JFcfjLem403UckP3nKYUeKieAMQWwGvJdbhtYz%2Fc7UJjR6eMFH2pSvsV6AtYKs3IpiJzgdW0e4mu6MN%2Fz4hot0%2FCbMbvM01CooQhU%2Bo4oJBDBz5RN9E%2Bs2iI0TEePkbpMWYEnxOrwk%2BOEs7pihv%2FO4RbCkwuCK1sWGb7UAQ8zTax22Ff96A0jqPvjLiOPpEHP7%2F477SBjIW7Feief6j9sWSI0hdTKnNhE0d0ufVCGzyIGM%2B%2Bm6sdFtUg0L%2BE0Ca5oeF%2BXE%2FR%2BFZnnmrsr5%2Bt25DuBNLUEFWguY%2B2xcwp0nNf3XsGwbJVe6KKJu9NeWeZ%2Bln%2BnUXRTrMaIDWZdmdOMI%2F90skGOqUBAy3hpEB2lScduYqQflVhrTPkGbbGw8NF3JjDp%2FmbDIH6o%2FtYvhFipkZFmL4E5pun5cAxYBif4UDk1w3bnTDQNlhemulXn74d3%2FxFmcRXTX7DUaa1twb39%2F7g1YpU1b9IzLWLlujzdqYvjCGC6i4dDRJv1SAYcbUF211eMAlWqkdDkkQG2wrN%2F5NCUP%2BYTytqAwUs6mvnga0Q7szDdhw4te2onZXP&X-Amz-Signature=8c617e6e8bdff9376c1942ef2c95047de08b25ea7e3403f9e3edd435b6da9c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

