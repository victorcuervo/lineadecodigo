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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVDBQM5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHN%2FApRYl6XthpEe2c5RxbTf8qZqmfvyCvspVeA1s0BcAiEArq1QrE%2F0O7kp%2BksxozP9qsQI1psqUbVfw4FQlJWukjQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtIx6W3jh%2B7W%2B2dFircA%2FzoEpYkSbb32FGAdpgm7vFxPhPAVUX4YlwfY1zKtYfgXLVqCwaHiwbCn6PrTKzrDUURH8XQM8yBTsS%2Fvaf0ZUYy8eoHcTIui5xht6NaUCcAI1B57n8qASSJObFs%2FyhL5NDctbt%2FJbeBcH8P%2BlV%2FsBFytSGBz6bTPQi7tm0WJ6Qqorjc8bxPxXDUewwZu495PyGFo15lDwUKwnx%2FF8w0Fykq3VE8YNfYsrpObkAUd7z3f9Lus7G90bx35YfnxsLn%2FMxvYuze3dXImQKqDawld%2BuRf8y9XGHoKwb6jcNFqcGibKHOIYj2pEe2if3pH%2FrdCuRTvhgtSo%2B6mL5u8gL%2FGjkCQa0JGs%2F4dR5cABsZbQByQHDKFRGSupQVbXSdqTupUhyCoZ%2BRJhtbz%2B1ruYslLpQQe5fmxbhH%2FssHcMJYIfY0PIJvd6wucgIKkfSlHGV4IJ9oyaFMF42fS4fsJxdpvZk4ZMGDAIj%2FDl0xSIrQWI1FWgn%2B9i6f5L3WyY4K3ATbu3K6Q7PZn8ca6WEhDuJLFR4ROsDcYx1z%2FWmt8e0xPMJ2HfzdhYXTvfB9%2F1S4ORPRhfi7A4SLH6mzk295%2F04Fsp%2BqB6ef5W7j5ldk6Eq9X3%2FsyVHEA3ndRBkcw5thMPqT2ckGOqUBELH269ubRoRbOeDIjt8N2EoVunV%2BgNC62XmDMTpGLyOeNC%2B5W%2Bq%2BmcoukbiHmGWETMDaAFeXBrnH9BQJ4vyHib4zHKxqpZ%2FkGny7zKdIzTEYUFKy9FAC0Tjll2PO0OfHcCuT717KZYjDoGXNO2Dy4SbdKPRTNS1K7mhLzP%2BR%2BCh%2Bw9DiE16snRZGkQzFPAIxoUwdu3P23XozWDs%2BSXyb6aelxa2a&X-Amz-Signature=a7e7f34a9c40a3943e73325704be5d5c775fef5ce32bc22e84698c3eb17acb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

