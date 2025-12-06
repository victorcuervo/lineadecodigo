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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZFQTEB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi72j7mvAijMUtDWPeDIBuxvUFrMxecjtTjPkAUI4oHAIgMWoI84fMHKCN3N%2BGhBgZf%2FfoSI9IlhcCT0FSFS8js8Eq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCPEywv47E3SMaf9AyrcA%2FTUMhwHj9x7ItDDX7MZZ6rxtvIMlndtt%2BDSeuqtQkkJ8A7mfRjs62IcvfVCyaghym9L3jjrCE7rXy0wzU%2BOp0ktF08pjzjZJ3hWYfMbiMn2P0q%2B9KdGnij%2FVfTR0dwMRhF4T%2FGSbenav5UyyyyrdMIVidY4xSr%2FIYR6mmqI%2F4651IU6fGp0Vyqtl%2Fkhsqkb6yxEkjoSyMjjQNkSPzaF1usehfBjwTyatt%2BsktS1SRtMJKgId1PhBIp5e0XZ7s24DsffEOXusCrPYC8U4rxoqLDNOzSbHatDQgxJXAiF5EYAm8qP2RDu%2FzgmjUAKciGRcUGbaVglcrxM%2B49veXj4%2FC1J1gKTIYYEGlpD27PLzRWqY753AygtSEMlookslTx12%2FQDkiKukni%2FHUFXmi%2FnhAD6PBGLmHtHREyDmyLr%2Bbm63mG%2B7moWG5kh%2FJA2xLaXOqW%2BYNExraQpoaFq9OQCVFwd1bHbqhDVxyn7ur9UepELmzHYmmSGHJcaL9Lzgn2EIh25irmWnEB%2Fub1IYhWA3EfIQ2%2Fzk2s6YtS3XPTzfpdUhdLs3oeLN%2B%2Bl3epCvSfrTW7ZDYQPQTMXsM7njeKDZ4fqWF9vgDlJ6SkAWVLG%2BvA09%2BH5vdiHIf0cxoQ1MKGm0MkGOqUBcYQx%2B5%2FgBweFnZFgPFODcqFp5cLPdyPW%2Bp9yknWJNK6tn0Ghu2bCVbTUXIzyOURA39IijCqNTzE%2FY0LtpUqdZ2hLUe7WHsa9%2BcsXPINdzAkqlBX3zvWADmLfbGNtfL9ww3%2FeSohl%2FQKpEazv5tNxyNTYZdAMAUlSSyhPyR7IAeAsdqtImWu4IZIrgcbuz7FGeHYFU2nRnu5CbSK%2Fy37V8sqDE9od&X-Amz-Signature=de34ba55f7541af63087f25561c188f2be766e5c94c1da2cd0a27af14e857e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

