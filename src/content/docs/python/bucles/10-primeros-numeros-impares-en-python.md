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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QE4XKRN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcdn0UQMgBB37OyN51oB38flZk8EWoLlmGJwVhrSthugIhAJQfh8auH6NjRBIC6nL7KEZ6qKIcYFyDUZN6gNMU0Q9sKv8DCE8QABoMNjM3NDIzMTgzODA1IgzSNRsysbZ0WuUEjMYq3ANFL9xEYuDVBlqIQaqpNmQ9dJjuSYWiTr%2B%2FzJeOjhIN5%2Bvu%2FfoYkdz5%2F81KQ%2BbWrkNmY5dJUBbZcf0L%2Bnw6J3K9SQogHRIl7TJdamyPWIGNCjske6P4NqkXf1BdZZ2rarz0ryk57gEh9m%2Bolflea62iEKC%2FvKmyQqMhPYu0BfguhN05Nu8EetDc9SKk97ZjVimDsE4%2BJK0PucsHSKhdxltdoGd8Eedpviuf4l0ZWg2f64xwja1LxVl5gj7%2FGmdVSIZJue38pLcbhsWr738DFx9ZUrPe5Qj1A8iREI6S12ag8X8%2F0rha8oPmOQJeBKMBiuhJW3ub5EHfao878IRWC71lUYDFpykS9E6YVc0%2BdactbgmhjTrLO65TdAIno5kx3jPa%2FoQCJiwd6fHmk07EfMFqQfNO9iIRGqatn9M3ASKwwfVupq30w9YeJ2cPbtZjsXFlpi96NeZC6TxHiGP4BS%2Bd04oqBZmhx8mlIaA3Qr7kYha3tNxjjQ197H9nCDcAZjJBb6nC8%2FPNh3cfQEH%2BnzS20B2vw24DgGelqYIrVQ9QXn8IJgrG3Qnv2BB%2FshUzewVTzvGEjmZ0sjpIY0cq%2BRRDHPWPPRQLV0bSgThQM3rh0zX5Oy7R2P%2Blc6ElyzC9jMjJBjqkARuMkzXNePvq4nZB1TiB9DcF2uBfsdaIBOpV7rtjKi2H%2FLH%2BHS5c5sKyLqhSPcJUL72TGVzK2DC8nvwF2kP4td1SAvrVD03WT5G3MiusTxRmZIpwW3PXJo%2F6j4lv4I1HWshcrFPTN1KCDovcYcb3t4BJJyXbPLY2LFYB8ikd8PzPfw8GPHKTUZN4nP5rg8bGBKR9g3dS6I7QIoOJb1Ncn5t819YL&X-Amz-Signature=eabe20b1de6cfbaf37e48442555aa5edf5a15b49586e39ecfe7265f10c11634e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

