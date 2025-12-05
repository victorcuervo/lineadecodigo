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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMV37H6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLoJldAg78XH3RpTXZw0MjRtoBRfpRDow5soGsp%2FH8fgIgT41GlAuU1xeGJwLyRsr4hhHctHqjjohcZFN%2B0lBOAhcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDODLxZqLDQ6mYG4d0yrcA0ztxSv0vEcEhv%2FMQbuyUxSkl87mYKSFwEyw8EYqFdOEmwHpA%2BeG64bKOyqAxB2k%2B%2Fny79jMmpHYBz6rIUvp2V7p5pWatgvSMZo9fkvJ5DK8dUYZvD%2FuZMdCgv%2F3a9snXsiUq94uxZBRm67lTGzsvT85bieGmwWiCsJaus%2B6MTwKdWGr4%2B4PDFM9kcT4GO%2FhQxWWjHF%2B6Of7AQRn9kb16JKojhan94e8DsIKv73thxoWKuQRZkV5L9F84RhSOb%2BtwLdxa8Lp5T2gWtm1PXEzNJOZdA9QFo7aieygSd6CByfQ1FqNlAbRgoGJntxYpQU3Kyvflf6%2F5QkgjwnQTZ6XpSFIrz4TL2VHcNojUXopGwqukqIoec6INm4bVqkiO18Rd7LX4HR%2B4ck19f4SIaOZYzXFHPFBtaG9Z5qcNxai00%2B97IBrztd3wdv9OpI6NMemXc1Afkc8vNViAk6YILFxtaywXusSj2vkTY9zi72PuWkxhfAxyVmxdl1Rrb64d595DtdCvIzBCgV0NPMsu16IzJqV5842imKrXtIRfJFtni9%2Bhbh4RgZ%2FKGjNgVx%2Ff7i3fEt2UDoPSDg3wmK1xQ8zyrm3VX%2BLvZi9k%2Fe%2F5wEjDK8bySPIXIsvfl7bjlrzMNLry8kGOqUBPMhlTZ6DtrEoPjHEOY9cdc7QGmN451bgUQiIvKHwdxg4Pub8qmGYisTaCgj%2FUjWwtd9sTIYuOuIp%2FIvxhDhJ4Q7JcKWyz347LO4B0hqrKgWSOhPWjmWOnjUCAaZFZINb722pOEDi3PDSIc6uZJ9eaeMwr1IPZKRhSYEwcUmRfuUh0o48F3obaHep8H7PshtOxdYF1HFvTd%2FNIZy9F7di46PfITCW&X-Amz-Signature=76c6797ef7de37381adb4308c0d3de1259408f57baedb48d067dac6ff341e15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

