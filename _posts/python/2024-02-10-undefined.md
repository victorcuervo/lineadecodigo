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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAH2DQ4F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAU05cq6ZK4%2BT%2FPwEo39GiJvEI%2FBgDnRZ42efjVP0hKgIgAmZVHJB9NC1olaP7uSTAdzS%2BPPzjWk6sfZICHXRwSdEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDD6s3tDv9A04Vd%2FwYCrcA9er5RFFA%2FpxrsGlODJ8YxqaXsI7lwqRXanMjnLQnVHFzgIHdYSx1Et6a9EcDot2c7nnazGtKHs14qr%2Fi1yY1LpD7genKNQK76RCh4on5Otdd0UN1rUjbmhjGAr%2BJJ9k1T%2FIaL6huuLzBsDwLTAQ%2BYPArZBo8G81OsqvLkQwGuMcUV9eBIfPi6pmlQDj82XbFeNaIXexaEXdO83GgaV%2FqZtXAsRBZKtZT%2BmmuiaAzx%2F9BmlKBh3biY2%2BCXNl7lSwSWsscOmhqPsNmBXQR0yLOa143h40ODhUT7XnatJlZdB%2B7h6NGGlVD7m3yAvP45UdJRcZaf2RmutJO6ykqvl00JW49Se3%2BXOjAZ3DDUgWHwlLzZE9G11Tcqwdc5GV%2BY1GhfNe1lw7oCMAkbGAi4bpwSROn9reE24SWJpzLmrHN1gTQvMuLwQgd07O%2FSxHtNseChuWcnNUnJjzJ6%2Bsra2r2DacOA%2Be1u4rSrstikC8TypDmYBP5%2FitjW20SvJO3VO0svaPnoTLL8pgGe4OV66FtmieOJ6YoBczPj4JEycnGKEZNiwu61vTSMHygz45J5511v8%2BjD34FRvx%2FPCvY%2BTqrKeopuBeb9kjkRpsWBsKvNMLjRszKsyz%2BJC3o7DYMKrpwMkGOqUB9%2FL0qjVituvCHGNSMQAko2gxtJ0JaVyPBs4HxINZIHYHtz7OeEf4zdnySEIr62BNUVcFXPELZ4hAMxqUz3XZVhDxf3U3oIyEvGCKZz3VKbUkiIjlwzKu9hgpd%2Fy4fvt%2FWPFvA3gC2fNoYzLopOM1sfHBaTPonOjBGlY9PUi%2Bv5xUlf0Q%2FxDufU9ljDOEM4UCtIN9FKmIaXoNiIq%2FnHCczBth%2FTJC&X-Amz-Signature=6083a168154c51994cfd5de06c4735433cf0d283c5ba9a478fcc908702ae3365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

