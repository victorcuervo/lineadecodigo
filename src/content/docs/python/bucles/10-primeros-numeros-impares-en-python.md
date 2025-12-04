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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA7E73A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCbCGvGkK5Kcz9JGwkiRxyMM6n1heKRStw%2FN0%2BZT3sGnwIgZ%2BbsTY%2FQ0J3DOyfwFpYWkUBYPkbnbGt34lE6yGoEodgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDWtszQqOt%2BwEY8QDSrcA00sc%2Bwnz2Zp1idVKaT3bQ8H95abJpbllon6d8ergavdT48Sna%2BQYzgprRpnj1RcDtS6Ue1UzWoWMQOtAdv%2F4j9HMIxfZaXbQzs%2FYBa48Mp60P1nWDHx9v%2F5x71xyWGJ6QYmV9UPjzxFK4%2Bp1aCozKoLFdalMYvIpHY%2BWbxRRu5jIxFW4o7rmX0bvuGheV0Asa7eq%2FoOTA3ClAenJL%2Bc%2Bucx7vRmsl3NvdFwhvGaka2TrnnVmdBnX%2F7zlAHD%2B4Jh1oIEWBepmA7vhf7A4kTicmzbmBo7DwSZglrbQ2X31K1lAKS085Z6MVf3IgMTekCcVGQ8gTqN0ZM5ro6FxI3DYoDMIfMQiXuOC50DZAaxOqntD2ZHhW4tdRO74d64ZyRD56zKN4Ny4qhjetc6GG5DfhRmWLxjsG8rsjF1rxHArYiGrEcY0CWW2jVoeqRVdqLHGOdmuhl1pp%2F%2Bz8CC62Yn1PH7y6rrVJZ%2FbrmkozXPlyPXTzWQEasE93NVP9QTsqEpgcXkFttghoiS%2BIrWRnZZUT1wctfgUkgL95IRuPzWqJQ3xAS5VGTGy%2B6GsHr2LejJMC15eZu0m4JFq8UvwxARC%2FT%2BqoS8Gb5TJG%2BAKkfrjPtBMt8tcA98Phc7SsssMJqDxskGOqUBm4AX54meJuuMX6lVGh9epdGrIachn0imEJJ7ar%2FqHwfeYgnE%2Bql6RQVyVLovITz8%2BIg4Py9S78Uw%2Bhs2yxKflgASGQ9uOg03Tf9nV7f0ZzYuk%2FP3m2izvhq3iJZf%2Fm094l1OJSdSRahbtqcxhM8BKdTRDwJGkadogL8p2%2FrCFnPWF%2FFWHP01TrVlmyVF2puWEaaA6wMxxizsUS%2FWmdgzSWhXCTof&X-Amz-Signature=77561724758d62f99248e015a995a0efc9b86ea71ef028a4b7c0c52584824f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

