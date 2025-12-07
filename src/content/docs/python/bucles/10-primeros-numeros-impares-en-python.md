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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665AGETO2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuowecjTm3bK5IUH1KMV5qFSJjo4QTy5XJ8AyfCDkDhgIgTFPEf6O%2FwQBZ88cyAo21rEG19MIl8oPpO2bYr32Ed%2FcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6N6WJEItowitrcEircA5WsPHRhTpuXPZp30Z8cikb%2FWSspEOuIGHpK8yqrLrKATRadXJzURVnVJuqD2zJ1MpWY6qQ9WKkSPSk5af8ptUJnCLI%2B2AZNdoMZhMNy6%2Fj3%2FcTvD6kyLOA803YMuHGOVydg%2F2HvxqDrIINoJQVVmyuoRCiLiwabHfiohcHIUdf3lT70g3fK2137dsbDVpDbnOJFvs7%2BiQ2gvg6vSyU968GpkuADQyS7xpivEW0aMkxUOiKbloFQvM6usNkDQCj%2B3scVUOmkgNucUgcFUP1xcJF46on%2Fvyf6Hmf9eNSYo7qOvsnrNHs%2BbB1vjQpuzvTOcyHzTo5XO3wyD%2FZeFM2Tx9222In00z%2FS74ZMExVZEgIQdYjzBh1xuuQbb6Ljv7LoADAdA3WzieF9z6i5MrPKFmr%2FycwB7T43kd2VbivLkdhNa914UiL2tj0CHL6CBIFyDWXlXsD71jT3G3ebMoaNBHovxPlKiWsV%2FzffhZRmmFSxEjBF0JyUPexggbNIzV7RqUP424DXkIkNhNjhRmO%2Bb4ppXcdxM%2Bz9YKzGE6STCddJd%2B%2BsW%2BnW3j1aQW2qzbtI5mhrCVe2SJ7xNSaKf2Zq5jKCxiOr%2BY5yvl0Muc2XS5kkoinB%2FDdvodr3a48sMLWa1ckGOqUB27qSH0WtTmGM7aw1b1%2Fbx9ONDdjxZJ%2F2L%2Fl%2F5CbFAWbDY4G%2FJe10lepdbpoJxfVSamHI%2FZLsESPUlx5UNX%2FCaNN9s2bQCRUxDvFyuT6gK5fY2hGbiCBh4YVcSGmRcmGb%2F0xfBRlsamneDDpkDVQ8GHcufhwpnrbHN6AWTJWVy6x1uusucPOJH60Cp2AMDcdDAetWHiA2Cabz1bwYi5WcnKVaOGOw&X-Amz-Signature=e22b6f6b9d8250092767c0f90604798b8697aeb366c120f73c18a745dca609e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

