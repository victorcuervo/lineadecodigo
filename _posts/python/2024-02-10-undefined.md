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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY757UB6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIF2N7nrd3pHXAIaXSEFM9HOm0XN9rIqLhCZ7fdxUIAm8AiEA2jVRiCOoh7OMi0EVkgFvxhCdvBKlsPvCSCcgqrHYO08q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFZmYY%2Bi6%2FGa%2Fc1WlCrcAwZk19ZYT1cWOW9wG2Mj3tFT8dCA%2Bz4rM%2B8MmpTP9fSdNV2UHgpZMr2g9j7334%2FA7hp7m%2BgbL8ClPl%2F%2FPzzYQ5F%2BLJ1TPZ2dNC%2BaKaq4ftkHB8urjcxOSnI9C1%2FG%2BDKNYVc2rIRxP%2BtGjWFlbhUfndkpKRnu4vJoaGlqLms%2FxjFJW%2F87PU2wjWt3TJ6Cp51nMMsipfTviVAp0tGu777Qe5QWGd5rB%2Fb2%2FVCDEXPGKu1ZDk7tmtbj2dN7wSfZJyGDlOQq7iQaUxs3nZb3SxRw%2FU%2Fw5%2BGU0MLwfJmR6IRQSgt8hr9wFCZCk9q7Sp9U%2B8PyeZ87qrUmWlz5atLEYs2ZKq50wFS7wULRCCn81NyCYN%2FlHuDRZCuW7gVF%2Fv2ftGTQPkh14kpW2mV6RDmoIL0IYbxbbACltlw6qZ635OCnGe8ovxswIRS5yd3pgS6rRAyc8S6X8Nasx1IhT5Uh1vrTt5wJUDl9HDrY20EhkhiWLXqTGov3fLnyLv%2FzjTT86TAyOCSW76s2M81a1UmYF3USQSFBsNdp56%2FqMQ6BIIDrU4bFEu3jbxVeTZsh68g2QsvoECgk0z%2B7Om1AqHvudLQ9CoGsteMLfrd%2FVSbe1k%2BYWpPCmlfMlSZsOEXXabPfMI7Wv8kGOqUBCMxIM%2Br9DvYpg8x2wuNAHVoQ%2F0phj7BXOY5ntCOLxo%2B8Gxw%2B8Pxq5ZqSo6Cr7OAEvMJEG%2B9flwtoimniVCx0v9ZSKFOOrA8o6cKUe4%2BjZLR%2BkphqnSsVD31A%2BuBhzFN5EogNicsS1IopgLUVWK2KFnd8csP%2FY5akkX7C%2FgIZWTE%2F2%2FyxzD4dmulgpDB%2BAF7UmBsAmW1jbQaOFbSXn7q%2BX8vNc2MS&X-Amz-Signature=229ad53af6a4713195dbc960f52c1dd153994ba5f7b387b049648621e783a0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

