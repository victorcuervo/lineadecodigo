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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3O5KV5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAHufeBEvp7j5P5spVsg93RArK1PeoT2pUoSR333JuuvAiEAhR5ir75WBwVOmPtTiCKYTVGyum6lkAcU53%2BjHV%2BYF5wq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDD%2BBkNLPGWBbEfPJHCrcA%2FxVZXhjqmrMYoWQbsi0CG2mPylJlJh87VeTayzBKoFEK4rV%2BLYXJUP9is8L66QoiJhtIaGlnUoWqp0Q0R%2BaNpvwXC8nWwuDIE6E0jYcDdhsKFd8x6rgXXa04Si%2Bvlx4uzIQZ55UN9%2F2oHYjaPrrYEoAa4Dt0NrRQuqa5uPJf1CAiR9xliG65NgGHWubMR%2BeWaFInBad8ksnJkmrNXvr7uyz%2BbcFwHEK0iu%2BzaOvl8NUB4FEs5upuavXAcmPpa3Kz3MoC9frP9rRClgEdjnZf%2Fz2WwpJ%2BU1oeYRZuwdxyM4%2B%2FanLD%2BXFIuI9K4A112KzLe2V2Ur4%2BHaSMxAlQJtkxMItvsTROkTeeFlgqE0CEVT2kLD7wXzj%2FJHO7RLqr5wgODsU4SDI69YBGlawXlgaHceTiSSBZ6%2F6V8GNwt1uQ0dOh7pszTY2G2DhxHkdPttcdF7XR3Q2zm2TigwcDL52cVQKnWBFoDjusX8teoWx6PxOoiKQ09K%2FjSzcwvQXDwrEoTrrvl5YGSnFLBK2rshTyqykT31wkxmv9LxrxkrHKJxN1SODak0tMWNZYRFxKoohT26kgqy6aPjTzW3HkF%2Blxx3bVj7TQ7C2CjuoBzOxeRdIcN%2FaK5qXrO%2Fc1u1bMOS0w8kGOqUBaC6V%2BvOpGUbruo8eQsN9TqEb3Mj5%2BpMgDPWavSlydqxXV2UxITGBVtfGjh3hbYtc0znkuntRpl%2FKtqhDzX64Qd%2B3%2Bg00VkWu7an7MIeC0ma2q9nN3i7M5IohcFyuneewD5ivxNC5rLDqz6IShCmn3d6POFocsIB5VL3i09T35Ur1CCnIKXx8ZFEgHiZz0cdEzm41k0oafkw4PrAmQRJEES0hoR%2BM&X-Amz-Signature=bad698778ab346e3b6ad7571bf1247fdd51548aa5d8e53fbdc45ef4b50271f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

