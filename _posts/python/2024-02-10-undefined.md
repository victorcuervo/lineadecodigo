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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPVEJMT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFC9r74WxIXxzvgTeZ75aVtM9lsMpLGGpr0%2F6tL2h3cnAiEAwkZjt%2F35bUDED%2Bb2CBmi2PGFLgwysexRqCzpiIDbCpMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDC8XYyI9vVdl9xvYCSrcA4fi22FDDxBd0i%2BNw%2Fm61FlPnskPMOrNjO1aUtZkA4gR5saYS3QjONnkbWSbbRQ5AzBN4JtOH72XDOTDeJsFFEMHFdUVJo1yvXltOX1ZoBC1pzikYOVzL7fJnuGzI%2Fih0gLTglGjgVw5J7vPMae56TtzzvBXlAIQDbvZ5CyERJdly%2FYd8pwdFUStYBvcRwS0zy1S5eTU7XcCqL5Md9MFj%2ByqXXhIJWGfD3K2OWtmtY%2FOXLEwoCW34FEaXRDdSrEaTFnG%2B59MIhn%2FNkN43E3ab3JYw8VazfzlBDrUC3A6D1HkWA0wcm%2FMLJDXBCD%2BONi11att3TtTAeFzYGaeY5%2BSnxIAMk%2BkrSQrAhW%2F2wbhMdnoPPO5ogCXhmXBYTfNrNMWluXNcKXfnQT4jmZktSyvLl0XoExFpv%2F6fZupaMEvOW3WZnN2VcIGfigjKM%2FfSDzqDjjmkTJ4uwT885hbPGZLdbEMTpNl0Q4YcfEh0xiUKPS009rFG0oCEZ07TCgyEs3T5kh3wRzygOsOEAYikFhndWTPa8a%2Bxx0h3FGnq9l%2BRpanI65alZUt9uVyfYhh8m9nGurCwfiyPcNm4zOuXQx%2BqNa0DSIynNd2JIUFLH4ckhFKfrdCPHrqu9jdm1vgMJn3v8kGOqUBW95JplGhh5%2FtMcu9qZpzWH9G6FFDqkIFqK8w96sgPgSVmmbAuwHAwixU7g8UQzLDbyb9OTkXa8LBUHT1AY3OsI%2FaUmBip8Hb4lGDGAQeZVXStHOJmek4ggGkxiEzSZeSChk9jQrSnEuNweebmfWDTR3BL0fDdt9pD5BGiTwZ%2BhqEsCnsosLJ5R2ZtY24dTADUKIGbGclZlh0M0JIQLCNTUcb8f1X&X-Amz-Signature=6e3639a3820dd2837eeb05a7902565df584e055e16bc2b90ff69ce593da324c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

