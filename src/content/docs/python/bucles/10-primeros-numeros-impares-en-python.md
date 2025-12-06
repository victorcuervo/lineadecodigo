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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2T4K2UC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC42Nlkx%2BDV3hQbrKeVKCGn1iAjcIXN36zJjMVoVM6EHQIgJZfGnrYx3I83YDuBX1bnJN2X9BOyh0ISSvjZRvTLyKoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMuR6mv%2BFUYzkWsqXyrcA4XRdiT0LwTMBsIpZ%2FU3kXVed8gAn8pQQ%2B0k%2FusrlQbSQ2qPhVjuWxP0GuWhrqg09apDn1lCbZvHFTKE73op6kVXXHuxGKGv%2B5dyxXYcbFCDwj9uXP3Z0rgIR4Zq3HpPBQV0u4rw7YUE7Az4kPfgNE0YulfXBUAum9ohCUKuo6ROKzVQsGvV3qUy632AlxDILyefg1DRyw%2BWiflgw3XEDpJueP6d18UWyhYJaELW8TRUtVmvjw1HXPlmGyoRMaNQKdPqXECU07RWVuFbRsiSrtmN1RKnvFgkzJuAa9vUGT%2BP2M0CEbXJ6OYvpRXQdzr1zemUqLAZgWG2rLo00WgxsdoU2A5vQ4CDcBq5LYNob5sO1JB7jj1GkiM033uCb7OTz69tmWM4xx1dutpnD6SNlYmed702rJmg7XYSyxG8h%2BfbLQfRxqELVLiiK7QmKtsJBKbx%2BGfxUuGN7y0t7P46lotXFx%2BAPYTsAprKHV0aMmJwkF%2BVrFPdvrvIbJVmCULVCKvjRROOdf3Y3FhYPKutuhjAjubc%2BzSebAAqZWIKeb%2Bh3Hiuvr%2B52RqU1TotY3JA%2BlaIHQjQIdH4kMkrhaXw55tCALMsiNXSIpML0gVF3eKx%2B0K%2B0pLvf7jktAOcMNj9zskGOqUB9tQ0kxa01N2XeKiufp5FEpzGhzQkezXfe8Yc6OWUwK%2BFKX%2BizmV5xRsHlOcfOJqH1PMmUZrZirTLvqo8KjiUpl9vYb71DsM4jPC3xmK9orZLg2ctsji9JIiFfpwSGLnwfq012zyCkrsziiAfEesc0VpLtcKtz%2FrcandsPIp07KSsCuTpYysQ5mTXMMa3a4EDvKf8r0dpjBawGdODCBCsUWPVrHXx&X-Amz-Signature=abcec1fba5764ebc57edc40d73d4e4b18011d292eeb80e933cab34c42d88d442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

