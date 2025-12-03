---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQ6GK3F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCd%2F8%2FcQ%2BK4LZ6dmd5k8eCADoiCm2h5Ye5M7Dg6UU3XKwIhALWxpJhrlLBAPoi9rnsHIqV3NktNobT5fb%2FgOFbtqBujKv8DCCgQABoMNjM3NDIzMTgzODA1IgxB0prP9LiYDG03CBAq3AMDOEcMo0AB%2BUVp80VK%2BeIWTGHXzWXl%2BxyxfISL7gtkfeFlxdlCJX0%2BAOLMepZfYO1OGXiLfNHXJjSA7yumTBaXvXxoVWoiXL2%2FNnIneg5wQQBdkdAJyPBd0VtcdVf1Vkw0cRuSayffep7z2wZV5T8dTfrWFfX7Gz5IpXSfDKUtQXPwUdcJEZ89Rh72rFMbsqM4zk%2BGxtin7BGwTlkRTZpQYJuT3rWfIn%2FwLd0g%2BMfT4Z0L3YLi634Zud%2FtyQSDz7ld%2FCUKtag5S2cjB9BNjZzVoPNY7m%2BWGdcjWbUUWvCIDAy%2BEhdFsRmeaRw%2BJAZUSyMX2RB6aMRf8pj95QyIYCDuPWkbzo7KAopmNzgNZA76lQGLI62kyYUiY4sCadNK9ThP0TLupJyIeN3TtfgHZzPa%2BZj4%2FxdpDW8fTeqQ5CbtlBI2cg6jxL1RlPqOyFf%2Be5DLaCcWjz5uZG9Ur7%2BuRGAjdIgaxkM360neJCoIaJgYIPWUx66CQ%2BNZ%2FkDASHFB33leTzhZCFXiEbAK69Q6UglOiVPbdNMiq4vU%2FsewdBhkx80U7rPK0GP26%2BPgiM7DXB%2FLoOiWaK2K4fCm6PyNJEzZiULElzo9spypT%2BEwYVvLgExW4o%2BzDXVfAuvpaTCjur%2FJBjqkAYWiMJJC0WP9CGqAfSe3E1X1bQnih1S68BcaQc%2FBdmjTVx33Vnr6Un1341Q9X0Bw66x%2FNPOZThZSB4UfLAPdiPjRxQq00V1dGzw6NWZj4z2YWPNe6rOc7CpXP%2FimTLu%2FJvY4mreQ%2FR2qBP%2B951XqFlunjoZwKwQTVMT6Y2IQj7MJ3VUFA5mUDc0YxAuWyF2XKId0i1edHXBuTDMIGgE7BsemGlg5&X-Amz-Signature=4e730d63bf4c4c7d1832e7efad6bcbacbaf3413adc303b844f515368d51338b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

