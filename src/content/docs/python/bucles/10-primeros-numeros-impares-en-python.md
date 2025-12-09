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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNIX4DU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9YxgT3rYh%2BAz4Uf8iWq8wtUgjUMcXgxffhyWqtVzTCgIhALME11qwsstFSdHpxuk4zWwkmP9yoLAAB1nurqch4%2FuyKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2gBHDa8PYnlXnxRwq3ANmcrlXmeA9Leg%2FBiJOuPVDKDQRJ9Z%2BuBW%2BgxKSpi4X8zb0yZnPEarI9eXr06NlYO8hEGDN4GqM8rMAoy8Mt97v%2B7TKrXmqEYO29NQPdU8BZx55ZWojEJ5rdL4%2BLbQEHfCWyoUYzMahHNMdgsjBUksOsmH84jp5cT%2BekvnTrS%2FRyR3Ey%2FYw%2FfdRSNNnQKYwSB%2BIeOeJzrsYztcghWG5DO%2Fxi0%2FciVmb9e1vMxuiF402hgVgc8mOMoW%2B0hLzcSgH%2F1W%2FHNyBK5CyGOOUr7GHxzYTPSyHIK0fLth6SwtHLIjgA8car0iZ3liRnXyxHwOg8%2F%2FZAzzMc6QKVBl%2FQjHROaY0%2Fh9oO%2FXSY%2Bkg17oydJJVgQ7S6Aikx6mjsyBKSTSQbONRVw02JNMJczfzB5ULfOkcdme8X5ibW0DOJYD%2FCayYjD3xhYlp%2Bd36mJTiDBiSggRLPbW74BZ0HVqdfxcxyNxcsXNGZsZgDnpxvj2c%2Flu7qB2qMjtb3%2BUloLfVcbayqEoAzribP2y7y6SvTCndXDxM4edCOng%2B1afGViMzprwF%2FLstco9pwi4UZf1bt7HwKQF06r03LCLXBx3ztnuuufWiSOFT2MQPlygE%2F2cqnzm5xdzIKfl6gAOAgV7l%2FDD8jd7JBjqkAUlu%2FgLyKqvrTPzV0K%2FK0ayV%2BdSFEly%2Bz2CYQDqx7LRTq4mru6rTcm%2BjdluPHVa4aflFoaQOO0XEP6zuai3E8TkegEhzLTAuD7yIypyMBl37EBnACD8PmgjMhO932Gl%2Fr2VHI1kvpAfQcMjDjM%2F%2FLJYmyyysCkLrH6S%2FnYfgDscXfPXMT4wQULPfdzRN75YQ%2F1EoLlnQ7gRLtLV2Yn%2F2A63HpoWG&X-Amz-Signature=c4e62b0c01835c53e3adaa88862e011704eb36516f183a1a9b309d11014ccc11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

