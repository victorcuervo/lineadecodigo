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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3EQCI5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN6n9wa%2Bv%2FXOa2C4zUHBONYsjq8U4J57fCh96lUW8DsAIgFJVzHUmV0Yx4tvCjNGQRssXbuoYttDyhepYsnRurCkoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK15MMzT3QWyadQoXSrcAwfPv46ZEWfsytbZtzjISOT%2Bjl6Mkaf%2FEfozSpx9GSS4Up9ckeDiJT64OkekfcC%2F8OfG08%2BbgrPIaJExcYqTTWTzNDIPzxoy%2BsiAusbOFI1PRWhqFUO3Dht4F7UT7%2FG7qzPFTyQTVvzgjGCrTdJpxbtA2ISFGzUZdfg0l9st%2FyQ4C5LbN6rUGTMjCksWWlkHONESNPnQJNLwDC5spF482%2BOW7QA76AyrWcKbG6pvZNfuLHInaz05tmjwEDzmg7%2F13R5wiQwn2GgljYJj7P%2FGj2AgKeBAnLre6UXF24wQW6%2FhQohK8CGc3482TwqNW26ykfmgiTLZpJTE51hU7D4tEELqDuCY0t9Q2jyWc4zLem6lZEwlfnifGIwdT6361NiSFH2SyRk8e67VXsnCHP1PSVIzdw6lYVItdPFnd%2BXfx6HxQMf0%2B8ppSmNTdgI3s0OxQZatXdYW%2BRKj5kGMWWcm1b3A5EFhVtc1dF6oJoNqMrfQB3I3p%2FzjaL7ko7%2BBmaFUaayjraheqriiYeph%2FLNh7vIc5%2F1knA4jv1DFdIoPmZepPzkCWxOT8TfeYE3I%2B%2BW%2FxwImrdr6FV2kJpEqiTt454pZz80GfZtkKF61SWshX%2BKlvByUS2xUl3HgkqqUMLvy3ckGOqUBnz08MEXgOoe0kJxHLWrFeX3fVOkRB4SUasCI1HNpR9b0LK6%2FgdgRxLuIIkFKLg8ZCE1H4d6K9RoyrV%2FS0QeCMSBbK4OIa13ENmRqXZRTvObLXHTrFn736IdL6UVihplNs2bP1nQH3toYNx%2FolfjFISDSuCUUl8U2ej1L3c%2FjP%2FoL7fo88P1rGjCTCtKlw98kBtzFcXCEDXB3HL15g6H%2BY27rsro0&X-Amz-Signature=89aca13fea2b15188d6eff242d70364b5480b4605661e7f058fa61c6a0023a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

