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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDF3BRVX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgctf9sEpWrMm41fmWv8hpG1Deb6%2BqaNBnjYIz%2BfGX9AIgb3leJH7nEAkNmFeCqakmTkOml9%2FgsQ%2BS8G9UoxdtMXIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYa9xLJCFYezO1PxyrcA%2Fjtfhv95k1dj2juApwTX7WkCIV469yy3en3G3eqKuvmfvVVpoXO3bjLABGAlozj6zQbFws6dEttUUp0pI5FPef2Eo6LLajY9VvDILX5MyGdXPY3PSZyHfTBbWzscFW6dHQRhBMnWBw3lpJnd4hmlPo3UE7sxAZQkKvTOSRbl2EBgFf%2FB0%2FxcmlxdFbUQMBHvAqAJPVsa0UfxC3EPTFbZ0rKXoBhAryu00XnJ%2FAjVFCLlQ0Y4MJTEMtVdnnc58EUhA3aTr2%2BgE7dZMkxR5j1i1dVgSiYTCS0Gd3aZKQxBkEox6Au%2Barz3MzDnuU9pZwGaVN37gHESxpK588B%2BqI9%2FvZP2D3ZOuZKQ8%2F88qJnDQ9A6y7jad12%2BReB7mPoc7B0tvhiB6uqGIQF5EgZ6bqumUXGCCK8t9j28FGj%2FlG8pIXNCdk0H8I2q7Qkc6X81DioPTqfKkD2NGTfc58c9kqOHMxcaRdywCYT%2BbwOy%2BlyYLEbuoamECzyyD1sWyjY%2B%2BXcx3Ck1SGY4HfgohSYg1LWfkZ%2Fy1YlI9xvrNyLKMt%2F1iATvGNAr8Ne3R%2BscZvzaRd9dDzAoEFHxTzwDp0oEoK1eV8KiVJPh2xGS3y%2FqtSH8nRm7YyrhSu33O2XQDhDMKGU2ckGOqUBuvk4YO%2BeQ6gV2bxq7FZDFX3%2F5eYmS8zvNBNmen99CYqX1TLh%2FigP50%2B8qGmsHjQZiqFCJRS8ceS4Cbloj97S2bmQpZGCX%2FoudTn1Qss9yZTYNpPi9hDpArSVH4d0N0KNf2%2B7JZaVV31jWLKa6i5ArHVwKm3XUow0hYsxVIEr4%2Bdn2J%2BHOK6wRjvxgTBFXgfTYvCC%2B2s%2FLUdJeJ%2BPS4A4%2FrRtDHFN&X-Amz-Signature=ae478b45392a2c6d0cb30587e81ab76b18c6d91d10efe0a160e72a972f2dde12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

