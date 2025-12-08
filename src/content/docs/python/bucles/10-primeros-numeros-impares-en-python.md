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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667DNLCNP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4m%2BzLWKI4jFLfo5IzIJD1xz%2BifBj9Wyw9Yv9JsO1PPAIhALkXpGcZg7Mjmzj9cUttFiJ3LvPbfCe3T4PBqpF8lJgQKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLw9Fz911PYl5BpJUq3APowRHXb8JnH0nDimtWk2EFkS5LL%2FqUik6FMCDKGoI8Bv3ma9VnbwlHnaLqgR%2BMG8HL%2FBPkX4ttOb1f23AbAH%2BKyucDPAw5d4jBLKh3Z3gBQJbZEyxYXV0sWCmFk1dVX7W5MRyH%2BHhFkfIMM2xtzpd%2FByY7ZZUe7DUqADR%2Bw68zRWjKSNreEc3rEKeWV6%2BkUEgR4fzqTDuVkCwZyz6TByFkmqy0bZxJy6faUQetArP%2BjTe6rmwyLyMHGnteKo%2FLLtJ8nmx7PxevydG5076LPbIDrFnEgrBzANb8cObGlbh%2B8q4jtfgCKlwxi7UO2KxW%2B8TndrNZ6AyYa4lG%2FLVupSQH4%2FFRNA%2BfArk0Co3O6uCkdmWMz5SItVsrT8MI1c%2F9wGFqtqQELJXdacDe5s5PlDugxL5fsG5Hue5H0D%2BXK486CyWDXsqRo211%2FV2JHR6lbjttHTTYhlB%2FQRENxQOlb5oOnOm7qX4eTAaHxcgvRpOgqwDn%2F%2BMHM3IklA16R%2B9nguYSdPR1EMiu2Gpk1tS2v67vbnffNwcMNzW6Xi%2BjbmzHo%2FJGzjQz%2BX5ypbFW8YC67c1ZRUOTQsz22XVqloPIsloAeITIoMuGj5wCZWFamcpZ7XZhV146yM%2FDLMIBwTDIj9vJBjqkAVPHkyLbtS9uWhyhWEj2Mbt043P1F9P3wlcijS%2B1qmEBYDN7cBsM1V2Y9s2%2FHuVV1NAdw8r8UJLkYZ1Y32%2FjI2wusZfZgiXqWLgZJxq5zGUhSW%2BzcEKMpaq%2BAvsoDUmev8yJ%2BRIp6fNnheLod4pDHdKOJxpQT8%2BrImkeOL2ufghza6TGg%2FIbtbdq7HGd%2BP0ye%2FAS2algOyhy5ldlDoJ9kawq6OZF&X-Amz-Signature=e784a931e50ae96fae2fb54321a5f11158d41e8c0b3acf3c2a2614c6f24ca7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

