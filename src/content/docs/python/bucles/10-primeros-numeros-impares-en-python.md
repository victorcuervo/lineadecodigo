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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CLLOCYY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVb%2FS7Un55%2B54BUTy7Ha6F4VP2vFKb4tSmXXIiJwEIBAiBD4%2Bi%2B7TuRHdkffXkkA2nFGqRTKZzqVa%2FD7QWPZh04qCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiACGXmrRfLpbuWnHKtwDAbTHHsgdMLX3auzbYXweToe15qFMregHvv%2BP9H0R%2FFtry2kO%2FwDVq187FMPfmsLgoRQvfwXFpOV%2BK42um56HRsX8U0wensVsN5EfbSkRYg%2F7x4g97sayaauGKhw8w2zvioy%2Fw1EOiLXWjoH5%2B2lifkTI%2FxsPQGuJLjqmttfLF8PN46Z4U%2FsHQPdV%2FamMAriH1gzxyx1m4YKz2NltNutEaRlDpydqQpcb1S76gPp%2FhEauyuxdEbY3hQJmWm16BC9rlDQa%2BeJIxb4scBXwIqgPGB1fUPBLb4je3UbHT0Bu%2FZUUtDT%2F3pxbMXPlLAR1bI8e%2FGxU71pqwXgy9pv9Fxj2Hj8bP9XEJpNg2px4QqEVzRRkaK%2F4T%2FJ6TL%2FNK5e3ujK8i1WE%2BkDGd75whRvB4zTBNMXuu%2Fj1wadPEEE737BOxI0BTdUpUoLjJfjdrSwrHU5xWe0i0VLskvVklFnLArF7aC8YB31i3Odn6EgpK99SSaK%2FgCwe4kizelqYwy%2BzR5%2FyLaFPe%2B7CINO%2BYesrpJ9bhewisxDU0sn%2FfcG3hzVAJ4g5xJIzLnSmnCDNLduuP3F7yvAMNfNh%2BeEOXDMxl8n1nAILXbV0X6XKqMSaH%2FQr%2F0r4SCjWHS1Pz0BJd5gwl6DUyQY6pgFiV9Ok6qivg5mMX4h53vze6J0C%2BavAgZ%2BrdEBvzmaSaBS5yjwuPYSDArAwCxHEGUvrlqjuvEYt%2FKh9zOrBFX%2FyWHDAp1%2FTtfo7lIgUqTrf9H4Zlvh33CvcQpKtBWG28PNbjXxiiigxw39PhmTtstdF6StZHAJCd%2FDcf5nleiruhejq77WW5YXMPI8Uoh9lsLUQmx%2Fzw86sMSQYxRCR7tV9dr2TeI%2F9&X-Amz-Signature=073bf22de8b734f6fd36a3570c4b2538b4fcad52900318be4a66db64ed36336d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

