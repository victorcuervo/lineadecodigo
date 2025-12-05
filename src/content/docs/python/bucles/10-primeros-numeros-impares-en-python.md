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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVRUZF3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYiHZRwj71Nfpq38rdmfms9ULJNcCaaH4twKsPTlGCZAiA4GnX48NK0TjvvPnWqRfbt0u1R%2Fn4L4U6MFmPknRNAqSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMTS4kYZ3AuzRlkPd5KtwDPI1KKu58SFAZZ5dCqMscxjvIvwfHW%2FZcrrS%2FERDRGVctEvT9jmvgVU7hg%2FZbYp%2F4vGGxhUHVXBYIJdVi3u1C5PsWi%2BhVajiqZ9BiGRnj65QaM6bgUaxq5gSC5SNUtb%2FghaTA7oAViDj4l3MT04Ew3tFzsqX6%2Fish2v1FnLj61IiixRH%2Fkul6Xh76FztVzDo6Usn%2BA8Il4Hkvl%2FCNO%2FnLYi7MGEUztXE2NdwCq7wv%2B4BRNiZpVtCyVRMfsJy6ahMTQdZ85fD5a1umTyGUJPV%2BL3QNy1o%2FidjkcnKZA0tgXYjV9lhSqxh2%2F72GvoLVdt5ZJ%2BhLmzx%2BdhSxugrXjZmXfBtY49aMpgwysrQ9JXDk5A5Fn6ZsmnFFf8zZb5eSucfHSiwKz6GQlCG%2FPW97aCaHnMMTV7uh351ht333Gr0XfUjsjnbRdlFtWemehjpf7TM%2BtrusZxGFC65XaTdDW7K3H%2FIp1eu0A40PciQ3F6ZhnC9%2BPXuguFnKxRS4qxYkM1bxQWbSuCQT6WFQ8rdYfk%2B1L1IAeqGzsOVwll%2BiXm6otvfcgp1uPrDZToBuqNl0JL6MuDC598vB23Q63P14trFIov14ZHOV9q%2B1LQ8c3Nqkc3eL91NRvgF3abrN1g0ws6zJyQY6pgGbRHvyz%2Fa5Uw%2BasQAM4YhkQyu%2B99G6ae%2FMvyJPeOyfQ%2FwKcvehz2kfeJuoCYCIhLxVLLrDspJfaUO2l9xyWRpz9cknzBag%2Bbj0qt8Zq707sT3g1xCwwJ0BVEkwc2eok0u5atRM8JKLCru%2BB5bPy9FgQmi5ZAl0JDAONpOZtV%2BQ10YpBt2Swnq5u8Z%2FO%2F4L8hnqmkeuKaJklVM4iewj%2FbtzuDZzI5Jm&X-Amz-Signature=fb2ea26f44e3438601f44d073c88592c9e1b0e3c49f1eb37148d27a80d24ece0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

