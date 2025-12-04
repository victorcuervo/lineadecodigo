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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJANJYF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC9ZsnmdGOaBafGJNB1IJ6NEbe1FDwYjx4IEOw2yslnnwIgWG%2FRyAOL27iKTEHxAgABO2C4DdFbD3dCL0aLMldK0CUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNK%2Bx1yA8FYSUMKi1yrcA3gCp%2BWBKwMPgxmfQ0EXqZ3RxVJN%2B4osPhSuLD0qZ2AeFO16bMgXtRp6kZI67nkx2Mn2uGp%2BPTd39WR70F9Zv1cSnA6edyVzvVMZUwk%2FS5nAfDEDJiVLL5kATm%2BD7XRS%2B%2BMsb4NYF%2BeuZX0lIqzekKqnLdypQBdvyTaQ%2Fv8XyjgOZ2wSx561UoRhueieLuJMfjAa1gqaObTZ%2B1tbuBvJBeKrmXFgvYJ4FgroekM58dW8YeAkDOkQm%2F6vFh6v95nrOT45L6BjG8sYqX0CHc%2FE2CHoW2%2B386h8eB6GDpF25LDd%2FZpHQrvykkGi8n3MV1CV64v2mcd%2BpE%2B3rzzOvebnZ5qFveREamjdidIfgQUfKE%2Bwspv8%2FrI1b1ZvFOa6ZvQ98295ZSiyI%2B5Zd5sZFRMD%2ByMwtgIXFLOOEIQUvVBu26IvPRzomZxcTpH5H%2FJbpMrMa93ODDgImc%2FYTxo4AgRvIQXz3CyKEju9XnW%2FFbu3bDXwBns%2FncfHd%2BKAUWUT5g8CHj81itau2Cev%2FUJ9j9sReBQEEK4ypmqH%2FUfbKRGKrFMgC8zA0WYDoKcfe9Da4Oz0SFCD8IzNCXQsJ73GE0Naa1xlHuCCV46g8zDjn%2B6kJuiogjqnErnTFkr%2BXTkzMIiVw8kGOqUBPOvXxQCwfwngM3VQv3pDeYFdTiI86OXWF27AvRiDk12xK2JFF%2Fnep%2BjhTi4WEkmc41rMK%2B6UEQ02IYy%2FMl9CdsPPeNv1V1rtNcnRsZzm2uK%2BzCa2QTza9D%2BdaWo%2BucRYee%2FzBPulrGVHHaj8i63nitbKsQd%2FoDUHY3CqE3KdfzwQPEQOv%2FslApW71Y9CW5GMnwcONje56qigETzvGIdi%2BCNa8cz2&X-Amz-Signature=ba36d04ec90501f07143254b4374cc5060c3dcda766343187659d62a1390620b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

