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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UFYMTQA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGy56CN41XPUuR1KEJi9MZ9DOECK%2B5i%2Br9qALRRNb5m5AiEAnJ1z%2BoLtBOmQmCEBHTwA3A4fM81bwahec9MQCAEjJ2AqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6urXOwH5U%2FOARXRCrcA30Sk4BqQSd8ipI9%2BdfQ7NYdptPy%2F1fkIdQF6Vqr92mxiktQz9%2FGAy7abrAqxtTKYR4rlxmtdJqDrlJoDSMXSGOmtaywuVNTk%2Bd4yAk0yzYSV0oSqedcWcLonwICFtoZHtBS84NxI0TxSXjxp6LEDPm9lpbDt4v7wObN3aIDODd665fgMD9cJxbFBO89BQaopgCCnciZnFrIkcQmagypmVtlQEqSK1ozxF%2FjIIgbHj2EmxKhDvWpL%2B8rdtLu3ArhjL4MaCiBL6xNRmF4Wed27tJE3O6rgs6Rrnfrvyx4rp66Rbx7OGllFbhuY4Mr3jSEhUBol80grNME4BJOzgeHtEXdM26iO0wLn4Zsc2DK8%2B6NSNW2t%2FypK94QfFpzYhffOiFfM6PJ8qchhaSXW14CSNmCrTwEW4O5oCq308cnSI5KGSN7bC7y0CT0mSa7FNnPPff3iGqf1rKlBD0NscJpss4RhIdh4mN47n%2FiflLmazzlgp5E56QDR%2Fh%2BuS3%2BZe65giBqVYVUDtxulEIOHZQ%2FVGtTBCuwUGooRtyJMiOUVdbxk8N9nu%2Fh7F7kTwwWwyVtEZtbtN6JgCfVQ0S29AyjH6PjA8zT4SNMN28GgfrWXMT8b%2F8FgI4CY%2BUzFdD7MPn90skGOqUBiJC%2BQZ4N8xpHvE%2FPQxrC1R88LB7KlRNgiV6oQoBOILRzxJ7e0DYnNe6xFfSY8TLUhKfxJosFShuJwcZ0Z6vtpGcAa3%2Fp5Jzvrxus2dTj9R%2F105TgmPoqEMBiAXJqB74UFZL%2FpSTo4MMziOm6%2Fp6rbjp%2B%2FXZA9o%2BBbQ67Q%2FJmOGs1y8a9GSqN89YWy2SWSLI6xe9lFDGBX3c%2FA967sbnY5ptXH1%2Bp&X-Amz-Signature=097721996bbc5f8f4cac557673a01372ac929a1da8f45040d5cd0f4906d59b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

