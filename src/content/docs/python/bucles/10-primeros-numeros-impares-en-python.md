---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFH7Q7I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCmI13HRLz51AbbnoDOB4x7v6R2CuQKF55AJV0y%2B6a5WwIhAI9x83FFmALOcuF8Dftd6%2FsnYF%2FajtnqnMS4JV0366VpKv8DCDcQABoMNjM3NDIzMTgzODA1IgzfSIHTIRyOXlAL1wAq3ANBifltAFZ%2BFXFMn5EkUYEwx5Vm%2BhKJQRs3r7N0o%2FTcGgL2VqGHboEPsYB1HnQpOXReq2Yg5gr5a4CFayDb3HoF9ukhjcFRjULM6qaH1DSMkyyP%2BnRA0pHtbYiQDWrGavR4%2B9E8PBPfAnBzSHJXfQUQFPWYRuPHzUDj%2BaqqGBcdX7ra5N%2Fq4W2%2Fixedmx7aF4a2Mqf7D9MKkFFBcFBn%2BsO5blsNkscKwZ42ArupO1OAofemsPcNbV%2Bh3SBudOy4qlbbQ0MDyPcdkfh4Q5lyek3l5XiGoverCjnv3njYJj16Cnvu8skrZKneP2qZvE1QBXfvGn9JYAPSo%2F3AOd5tcGzKN4uSW0El6mOkaK2iY%2BjOyY9znCY%2B8o7y0B1g%2FNYGrrLrLqrsGSaU7DVjJNxxPO%2FqajqtvPfMNrW8EsL4Rxi%2F9uBQu75OmI5gSSxqyDsjz0GTHiKOQd53jz4MTEbBMTLniiZOWL%2Fp7WbjEt%2BVNoO4Zgvs956W9prsDIV%2FhUu2DMfXQ4tNPMlycrZp0P5dbyhpkgM51fGfYqP1e2yIv2S%2B1mUHtdID%2FOUL3PqX6ZbLeEsiMmXZAimXpEuHMlW6MOjSgbsU4kFe7SrpCOvWxCXPiTibx%2BZfEoU%2FJLuxEDDB3cLJBjqkAdiKhfoYTT6eaHpS85LYzXiKKXto0Z1OJzEGd%2F%2BoMKwUIlbyqu4Zcox%2BXF8pleV%2Fll6Y9el6%2B043w%2F4BnFzlRDfwa1LJmFH%2B0wBG8OHDKVqiLr6apy0epNCP4OwQxjRlYrpoXVQxEqVG%2B1%2BUsXmPzM614DFrIYxZ5UJaaICWrgBuQLuU59s%2F09fm5rbvjG5aEDk6nCE1VtdD46mnT%2FkFVocrX7u2&X-Amz-Signature=c0c303a0a1d7cd33870b5291d110b539368e004ecb72f3f1d77b97f15621677c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

