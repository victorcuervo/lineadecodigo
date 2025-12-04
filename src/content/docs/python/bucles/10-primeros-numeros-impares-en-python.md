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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FPF6M7S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQChzVyR1CkdvbCW5X9e5srsRBWLFRGU267fnR85TfsRtQIhAKRKKQEHVDdHuCA0dNnq9ugn4kiQhas8mGt8haZvfueFKv8DCEMQABoMNjM3NDIzMTgzODA1IgyIHzATOcuW9vA27%2Fcq3AOXiVsEWpFsXSxCZO2HTBirxXkLYZIL1%2BiZfZiOQv8zy%2BoeQ5ugzJZW4FUQ1pN4HzBDGZS%2BbGs3FE7AVJRLtEiBPA55is%2BstRjxFaBzjIBjsLsp98YzZUyadubjKFq3ILhQ0SZtkPkUhO1BqZFwGQlwwqK9pBbS1o3IG9XNq2MVW%2Bn2gqRUldzqfJHOkhzXiGzSbBYP8ejCOPMUzTPpGlsVf5pHzZGh%2BCSYdMQs8NaFla7AVoEVXqMRNRGGKDCQzDuMykkUUBuK89aDPENFc3VCDXNjaZ8wSBqoY476PaVGkqVU18%2BBPtYNb97%2FPa4fiTHBtTUKBam3doZYMce93AccJ%2FbukEhAp9UhEBlR0h33hi2q%2FVQ2YouHW1H4tBii01ihy2vsa2TVfIUCIz3Np5EGYz1DBC%2BqRXBk8ewBO22ABTwf3iD1HcnzTzCTV5LqWCNGSwiP0o%2Fi7pAL5rogtF4bqqO2guhVVaBFSfAqdp23BS3%2FA1%2FT9d%2Fim73q6ypaAtYSizdMf2qd4h%2FDupcY5ItiUhdDhFtAD87a4qoWQhHE8fksNfmi7ecNdILV83sTAQ2AObujEu3QrcfZpBoISaD3M6%2FtJtNLOuNzJcZ5P0%2Fv0BIrPmu5g4Er4diwTDD8q8XJBjqkAYPHk9yEQpaL5bBor0NEOVeXBOuqHvBrJsloenmygpp%2BUPVhd5o1HUARRFuW9fnh9i9dzs7CVJLhGdo%2B%2FskS7qIy9vSxFd9uU77XbDqnEXlRZ2Me1OuxGyBzRN%2FTMmHI47c3Emvx%2B650iar6N6zd%2B10U%2FydbFXb%2Fw4oLOl6j92p%2FTYlfQ054LQwWlALScyEXYjnmSjZcgP%2BFsRBA7hEjT1M3Uocn&X-Amz-Signature=3e52b90561b6eb5c1df42a80b4150a6d2e99b0a612037ad6734d57dca1811cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

