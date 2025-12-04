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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFKNL5S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCagnRJJZsE5WEkniQxcmFw6qmnSRLA9%2BPf331T8iXaMwIhAKqc%2BB0jC66O5snrVcsul4LxF0QjqvAhySZrMDyBbZ1YKv8DCEMQABoMNjM3NDIzMTgzODA1Igw6591LezPGkPjRkkIq3AOgfeIQ0UHIYgTDGOP68wq6tI%2BY%2B%2FkGwyYpNDYeYfJVF55mlII74zS%2FqGzujrd7aiOD1myaQj3fJ3ARVHd3eItv2zKkap%2FE1sXImRZ2%2BTevRE5mrGp8fjWR5M5f2CJmJOGT6jUWK0Gp5u3pMtgU3rjL4nFPz%2FDMFl2BHjlf00QUv9LjU672e6l%2BeQTCRM0qjrxzWERY%2FdE4bN6aLyKkT8jTq9bUlKwrtru%2BMUHacVv4e0aqXJv2n3BgYXabUnWpiMjErVmEU3sOXuZtaOB6LwJwMBmn%2Bqky7PsgAvPQpQQ6bJRmPo5jPAzcpqV1gqR0DMYM6hvxyfndNDdHG3zb%2BrI1AU6RbYwJEbbRNgbZ%2B27LkU3OvvKSvuV0s%2B2QdJeoYW1sLcRbP4DXmioQptCpaj0gP3eX9m1%2FSPQ2BAqj7N2ZhjB7eSKO5%2Bdd7cKv4LUUtDLod57MBPHGMoKWN%2F5PIjuRpt2k7WTM4AASeJaOsEPXvDPcPQSTJ6WBU%2BN2UTVkRU2N%2BYtmLapDGsuPgZrVyGpPK%2BBAmnKc8ILuZGOEfVOm4B6Hd6dWgT4REFJSQhVYxf6wjJL%2BGDjgaX0%2FJAy9RO4RrNyXTpLdkh5cMUlVuFeHCwClADjnnL8T9s%2BgRzCBqsXJBjqkATq%2FE42rxIRrnOg%2FQVLLnN9j%2BMxWF4TO%2FkcU1WzCRGCb83equLITUA3omGSAZlFSN0FDgPxtTJfC%2FR%2BSUbegVBBZiU0lvC5D%2Bjl%2FiyddzzKARq08yuDTP2TArxE%2BrfvtzCQjrUsTcUvY9n18jYeF7ZKCe85CSvjOclvWV7XvfPvc%2FdGD2qakMp4SNMyBcfDE%2Bo%2BAgLtnZI6mCwv%2BvRLcBDJX%2FsLh&X-Amz-Signature=f3e83fb4bf7655c429902176db3416ff159d8dffb13b9d409005a985046fab44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

