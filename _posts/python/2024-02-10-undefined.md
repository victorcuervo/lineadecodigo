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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NSBBD57%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDFEAqZXuVicyL2P%2BNxm7daWS9Rwd0uXTZdA80B0VyH6AIgYLE78Cqc2rNcbL2LVWYc9aF8aZQC%2BbmOWfGlPys16OQq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGt2rYNcHwIi3AW4%2BCrcA9cb%2Fz3M5nXZY3fL0eLxIxP6%2FQQI81bq9zcVjQ2AQAUfOGjaLCil206kcLvHDLbun0z0WAechnfh6fCYjpxE3kMA2jV%2BuItYcm1CMmd9VzNUiSfv5Vv3%2FAPSXhG5%2BSe7WaFoqddYlwPcaU7uH%2BXgPy%2BLczZ4wTapkA7mBEqvjvlk4DTyqcfyp2hc6U2wQYLu%2F9e%2BDSFc7kky30TKaJEtcwf%2F53tZyv9Eq1bn3kCPWPHLdNRACZvTAhkjajwvgqeLtu%2BP%2FqrRlCMMqdIk6VhVoSaRhvAA9sp94dM2SCl76x5qpCXijm%2Ba1pj2UUreR68Vq%2FlM6SH1KIASIoPg3FzA%2BmlVZJgpYKGt0RatI50k8yxdje%2FEAd8OJLZ%2BIOtFmAjs3l0JCba8iINodac2qjDCLR4AX946GbTdLfNcPyHw13P7xWoDpzSLhXZf6BEPeHiiJnp%2FGDoSAl3WXqS4gJ4FBTWgEpLeirTAIORDOsc1hO%2FL59XY2RjnpsLPUTYBDOH%2BG4Jr2FoHZD68eqOt2VWKOpcprwoADxbn5AVTUUyhK5nK7r%2FUwb3qA%2FMrP%2FMvMupf8KkTaW%2FNrI5LdPWaG96H3khrphG9s0mCVtjItPpq5%2Fp%2FZOmN2cBpqFe%2F4IDuMPj%2BvckGOqUB5ovK8BKqpwl4bo7hprc0X%2FvFtbXklgxfx8poem3W3RXb61StrJjiEUDyqlsc3jBacW46T5hQRWKyuoQAomcmf0tI3HyCtj3480vbSVWyu7Xh0tvdZmJZR%2FKpFEMFH5V%2F5F6ECGw9J%2BbNfEi%2Fpkoh%2Ft6fhvwTxXXV8Duvd3xIQ2R4kPAfDfcSCOT7kCzB%2FJH%2Fm7LaDKpTn7RymydHEaDkqSrgBqYn&X-Amz-Signature=659b32787078b2f19c268298940eb620e9136688cab5db65178af6e13ce41553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

