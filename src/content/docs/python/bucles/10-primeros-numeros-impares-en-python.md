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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5KWN4C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBNNnn64ffoVwJrIMxvFRLeeEm5ZwMObV8oKjiZC4iFFAiEAwu3JLJeS4SjBjKvJG%2BCBQrFW20IIitpRGAqWtKFqpE4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE10Mg%2FT5pzV%2BCmtQircA1Pq5tw%2BtRgfXx4t6FgSKjWTblFYdGv%2Fxxgw1V8P7knQJf2yokB7SSvBF6vY3U8JxkraS4CRNF34s1CNWKSjGlUeyUPmJq7BsOOsOwOdQbYefEek5KGf4ZpramAXnPZxsWumGSzhKiTcDdbMsZXKBlWViJ2H80Vm4WxMXZQL4V%2Br6%2FyRf%2BjKiV3M2iZ%2B46zf4ebkzB6VbkXinR835zw4koZQC5FpRfUdVEzrM%2FpTCMJmvMqNdttWrT2ciOeIHVMnZXY8Zy60caLt6xczYdHBoPrs%2FLv4SE8AdagweJQZW0SJEb72VZKO9MkjOxMhKnfxhyGeibeFGlkFzJXuyKAdhkKpgSU0vcuGkgWy%2B0YzrJbgWLHwWDXND3dmpR2NYlbyD3JPKfcogQ%2FuPf6dC5i9IFka9%2Fz75KGb4Mj6mZvsR9V4T8QIY2WMIrOeqhRl5hnUiywfF%2BIawqnOawwj9Xr7gXSPbhMFyctSlva29tJTSgBiP%2B1REWAQ7RarylGTyQ6uh8mklCPr0FOh0lVowePyCtG6d6nRslrWzbSWJM244FmpBdqBVMYnZlsKRtI1VK3xwBeuBOwQRPi74wFcEcclvCh3rHqxQZpa6Ll2TXZpkpZRt6lcjVB1dtt1rOxgMOXKxMkGOqUBrr1DCswGioCE6x7onQ4xC5%2Fxa%2FORNCXcBMHrxJT7fOy5TgswhChGFTdGuSrAIcWVU6zwbMxKj13ZVrvYYzGdEJCUf0hDDsKReyhAoptyaJq8ApjqUrK%2Byxw0M8jJCPEY04fPg7xes3kSKcw6Nu4gKFU6aru2Ikcj5HgdSIfSDdVJz%2BV2X3GoJAmk7mqXmiPn9rK5ibBbZPzQlwAXcAsaLGdEZ%2BhY&X-Amz-Signature=71b66cdff1bb341d55892bc5a288e64bfc6cc4fae82fbb34352f16ab63404c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

