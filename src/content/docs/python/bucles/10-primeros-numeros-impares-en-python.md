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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDTNWNW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe51LrjOknon8QrPZae%2F2tKznlp%2FIKdjO79g0FcrTa0AiEAqv8sG3rWTJ3ns4LUMs6hR8eiyE5Y6H%2F7zePETzTYY5Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLzr0py4d%2FeMjA5bWyrcA7YmY9ZtklUO6mLhKY88d3suZQP%2BgUehsqCfs0wjhmDwSFHxpicIYnB2BvsF5%2Fh3Mp2aoBTDBHvgMqF285e523v27fJt4AtMKSsEZTrNcDFcfzUxc51O%2BYhkjkz5gnGDNR88w1a3B19HCtoX4DDDq8RDDYvioKKFauFksb%2Fpz2J3GAVcYwgWVgzJTK9EVYZwp%2BpvckM7i3zOb0dUnjrVSQoAgB5YfxFPUQHp0aQkrs4RYDD%2FCuAjXnoBaOmvxxWML%2BuV%2FPl8aqL60uHQxunawEaKA9Fn0I%2BlkGJldK%2FqsXbyiv%2Fy28ZQ2uZi4lwK6v8nb9fsCwT5Usg6%2F8XT9NSWfHatqAoz09ylge%2BHv%2FqiborBQhC12x22D%2FkaGcZxA6GFpH033pnwQf0QVQ%2BWCbOZ80dI74EwxfiQPsbOossd2mCkXxKKEeZiplWgJ0q%2BehcIf2TWJ8dukL7yuAJw6ixi2rFWgm%2BGwCd8w4myKycZzAPDelDiClgLHAyla8TNOmN6c8sffG7P16T8Xa%2FMRD9bXxyan2sHfBRrzM27N6Y2DrTUsvKNeBDrFDsLLe6svZRCRTCRwGKV99mfzIOVvZnjpMzGLrt51S9FzjZgHCCd3p6FtggVsOh93ynAmEtmMM%2BuyckGOqUB4K%2Bp0L9VFso524hYv4Dg%2F9K1FrUsInKqvcjGxxscAluyw%2FfDXP6J%2BxVmgXuHslp43kIP4AGgPYday0JehR9pOD3Otc7HtDWTl%2BwbbMqdtq%2BtKsK8vhxGVX8u1MrLNFOi%2BYw4gEuUUoT8wWZtms4BYXEkWKAxQ4wyDB1owZI9pIPPgToMP0xJO1PjbHvfCMuOR%2BtIuQWYubJHSMBJ65fg0915nm%2BB&X-Amz-Signature=f2a608489808c529d46cc5228451a3d868708d80dfbeb143a72db92e0063ec40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

