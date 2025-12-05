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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILUQOIM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQwreAvWO7FdeCduFvBGrlolbK%2FzdYnHuyI0upXcHJtAiEAvRuLCojCpadj7A1szqpBm2dZmVOCLiLnSU40HVkrBCEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNLY%2BU5691KsfRXPhSrcAwaiWhT1yK7lWVP7aML7y%2Bp8jk5czllIm5ZkzERuy3RsCxcaQAlZdzL%2BpvHI9Yr5MeBTnfV1hjYJ3H2xXV3PHrTkfa3SscDrHlqn8QPrQzhvA4dNUU5buIZDXP%2FFGBBURElog1LCMCq7B%2FS6BXs6Xk9V0YqiFkqXfO6HhAcA%2BBab%2F%2FoirgaLbZ%2By585acGEnsvf5h6dinBJ6VOBKCfq0%2FDTdPuWxeSQoCZIAIe1NgOcbdfuXhjWgqqLNmS0Z75a3TduP4%2Fpcxkl4ukX1sWZjs0krOXiMBMCtSe%2B3IkZt%2BntO%2F8H4RpY2%2FbVu%2BSE5BE%2FNxr77ntUfhM8nwfgKuegJKkYMxiXkk7om1VOda09GgwkO2vI1%2BQujD%2BLDV2GKvWStGWpk5ULu%2F%2B8y5wXNLjhuKuhyenBt%2BqpWx4P60urWR7Ay92DsiHtbju9S3xzhhK90Hr32YO7SQMSyL%2FkMkkdnXDRFok7qWS1ymLMpWc1H3uYfcsWyVzBPcvWYoiRTnbxdz%2B4K%2BevMzE3aK%2BqCBtrErJQa0FSB%2BkgEwUQ6IS2kS58El5LHo10wBv9mTM64bN0EtIOX2LP5trJKiEcNzCsPtmfa0U5BXQA%2FWCxrr%2BfQxnFOVNm0T4OtJLLyoTPiMP%2BLyMkGOqUBrEZ9vGha4fSgy%2FXRw%2FDB9afbuv55M6wyrRmDtBJylBGX8b%2BdmatyXfS9yKgccaiMM2oi3fOjlYriQQw2lOHcp7MQ%2FxVcCEACDE1jZOjpmtt5TtITc%2BSm80%2BSyfMl%2FvFOuwUIVDvD3vU8V5bOPfA9HzAERC98ICg2tOhfQiaCtC2WxOi4iz%2Ft795%2F1yn9bZt%2BAYWmdO0I4q9TGw5zabI19lbN933R&X-Amz-Signature=31ab097b54a54b029c80435b113b3b74cd22e2aa58dc3ea591cdf619d4fe5c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

