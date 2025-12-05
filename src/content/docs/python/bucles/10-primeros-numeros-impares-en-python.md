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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBINHSH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASC9EyYAbfXSLk99Yfq%2BNm%2BoeLgo%2Fjt28sKR5B8Ty7EAiEAghXgWveE%2F5uA6a1TcUlcuX9ocdaNqyMdRH4sV2dfUzUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDFMKwETWXX5c78p0CrcA8Nb98%2BkWe2TNDHgWOc6waNmC5HGXXulDXoeLXM2xyFoVFW%2FJbfFKK58a0ndNFBTCDJI3FFH4iB7bEDcGsDJ5ouyXBy2a8MK9Mdce5%2Bga%2FoG537Yu78uub6dIYIYe9Vgrbg%2BFt8sO17ebsLe%2FUYTOQLUNKW1u1Hahkg9Ip%2BXKisbq%2FgvssDD2AUOzv8pw8o0%2FErqL3GJ56jCnsREhGFqbmYluO7kYiEs37lzW%2Fh%2FZrqiPZ3nuehU8gisTG26sAsiM901G%2FWyeaUelcqIeehYsbStp7LzmtoSKy3Wu6NP1qUxJf59s3j%2FYKGfISAqmQi27n0R7PrxYHnz6HWwfoFKhMF3DCeVK8d4PoNoufZ5tIwHgxCbXBAqSzYycBiq%2BWz3xRtufzFkmOgrNpt7nui%2FRvCPu4aFLEgrUol2e4vqood%2B4NYtdL%2FVwHQb2MWn0HpVFLnb4WB4jH64K2SCM3FMrFQfTMMCHeZ6k3%2B3uGzZwr2EqSzdgdkwSsIjHFE4dkIqqI4Qwyse6pxxy7Xl1Od78RlnIk5HxEYAM2IXxekgRsJTpckyYgvEP%2Bpu2ADVYPXQmYUtOWjgtnI3FmkwiobNpzNxjFvQhLHZKaZaURMVykSKT4AbDmasGqwqzsDBMNfly8kGOqUBqTeGoXVvVTktNK%2FnhJbK15W0Q1frb3zfFgGm%2FOPqAwhuVQVHIFHwOuOpSavKcAc6tTLXlGXmQjtQex2FD8UB83QqWyKpFkovGSfvhdiAPq7hP9HkoD%2BCGxhu7GMAEmVBpuerHhYV9DL7s6%2BeBLsQAnPe%2FsdQ%2FJk6ILkQ0qgTyEr4JQlwXAteh1x4VMTy1YYgON0RlJrvhZu7Y6gTDu5lgY%2F6l%2Fq%2F&X-Amz-Signature=f45c9688e122f3d88a9df90848e701ab15bf05f9e5f8375be30aaac91ec2a9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

