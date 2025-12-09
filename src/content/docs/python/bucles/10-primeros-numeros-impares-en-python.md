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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KEYVCG5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNdMphBwFdoweDSnlS4gTNSA772YPFPEXoRim0CczotAiAPMI%2BRVkl2fR3jTXm%2BccwkiOmASSCSho%2F00kOpbybHdCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPo5794xWoHYUkksvKtwDkZ3j7BJvgjA2fEZdjm%2Bt1sE29VSe0g7uS7k%2B%2BpWp3FdFp%2BFvMoimqxN0CzfSyxqnPBWIsPALD7IIOzLvKwY0kAzZ%2FTvKFDHjCE81qSsYMghvIUeedUEue%2FfLVuaDbB1mImpVwSX3ZJH6pWqBiFJbR6i6VbDRkZyRc3qnVmZIxEMKyI0gKx0cjNlqAy3P2f5QYYFe3HmC70hgVoN1HEVgPlevVN7j2MWxcStTxe5B0FlgJBYErPhJfXV%2BXe6cQRLhNC3kk0JayZA3Cg3Clc5Sotxjp2dFvErRjTNIRr28z%2BA0Kj%2BE7cpuInIm3Rrvm%2F%2B%2BihhXuZ8%2F%2BqjTqSbKUsWakibRRuvq26Mx1Jx4Bdf1KJGn1cz7VEgMeIthZlCX9NdpXokQaHwD7aBR88YcHA2kd7A13xYCdsZ3uNuWy184LUjiFw1HyaGkviLQjn6DREETFyRHGjHtEQVBp9GHz4NzFP3zzJbIxA2MAkaHlq6C5PQ7%2BcPABjZTbxC75vetP%2FlKmh9eswNd4C7elLu45K0uQ%2F2tKb7HSILnJdHaC0jsNnNI7SKVWu1ZSNkYMGt%2FGaq3TWge1YIyxwYY9zMHCfJqV3ugtH9Ic9eU53hnDHoW8d2FnBNnVSXb2w5H3Pww%2B%2BndyQY6pgGSidFc%2FaxJcqEgAs%2F7cs0rzsqbLoHcHe%2FuWxE9E5XLEfBjZz1Scm57dCq2SdyR2FHcSokYZm5V5dhxVP5t92L5jF%2BDELB8PvAe2v2VVzVv0ipHaWFouzAZ2JuYXmHUpLeKatV7HiXofI9B0vIj9ha8%2BErs%2B32DneKYebcHeY8lL4sbU9Y2Pgk6kbYyLrXJoQTgYO3UtwJ1ooDBg2W1qD56MoNiXLg8&X-Amz-Signature=eccf89b61b5dd65f9604814c45bb32774dce54b7ef10b3c9166c6165c9fa246a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

