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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVXRMOH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6d7gJZ8a34goMMW7piDdUcllfTS0c76Cst0%2BBtKgFLAiBcyLQrEDhzQb%2FUQhrFJQtZ1uGg1BCtaWCLpMKQN4cfYSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMfiePWLi3CCbtjUSCKtwDxX%2Bi1REBBxVrod%2BWyQ3HO%2FzIvbLRws8Lz0AUUQbsql64QzKwLlv7jVRRD33BgdmcZBabUDV6oj28qjnyoBwCPGxuXb5ZKySClS3FSPgWzAassLd4HiZ3xetvSAzlxH1Psb39c5zngkV2R5Sd%2FDnEX7XD7s%2BjeTHfLUFCbOk4q1m6RS1iKpAVD8qwn5CLTU5BYWfMhVrsVxVUkMLyA7c%2FeSSg9p3x4c%2FXc4q9cH%2FziHIBZVv2MyEytsV072WP3j%2FmN5GVFiIMg%2FTESoS2WUU2Dl86M%2BH%2FaPtKdqpNNKNLaFE%2BFQSTBUNLRtjyFzowk%2F7KP%2FKbmW8u8Gg6%2FplXid89ymo%2BsTOWOT6H9CmdoKHluzOclDpRr1FJN5idxCPWqhwiiNW7LLpmDMHxgTl0QU5Hpmb7qXB%2Ba%2BofgmiEYJQV4QALr0i%2Fkk9snJ6kWmTor06ZdcJyrvix19L%2F2faiZoFCHu4NBDPOWyk92UX7x2mEVvwu849SrxwWvtSDulbGS3NekdgyXOjoO8gfg0u4Qwv6nsIXBRqTHU2IIXVKUhKfYCGR5VpnHCIWsu7yR%2FN6%2Fn7nINb3a%2FjfKSvpAYmdE0h%2FNdadz%2FfO2cYfok3yBI4rP0GgQI82NK%2Fy3op8TVgwtK7JyQY6pgER2i5MSaY5h7i124VkPFrSZklfxpGeIt6lzE4lBiyXK5U2Buu%2BCeavB0D8Gy75kLzsIo10KcxPT0NrtYrSADRaT1hUnwsz5G6YNUmdWjLrhYpuIAV3Hyb7mQwqErM3%2Fj8ho7LS7DhRsAk7xAUQ%2BcQZ26PTv%2BwE8eD0Kzk57TFmfH4MB8tIPlSFIjYZwisScIoy7dt2XqeoDU%2F5IF4Vd5%2FmOgyRECek&X-Amz-Signature=acbc6efea82a7d92652d7e34709cf94da28a5c4cd222ed0628c512c7d44874da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

