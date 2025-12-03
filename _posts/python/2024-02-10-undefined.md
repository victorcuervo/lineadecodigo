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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECFXWXM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCTDXwJHb9muotZ6NEmKSYXDTsgrlHpUJ2cGWU0KHnP5gIgG29%2F8rYF4Sy1CtBiw%2Fc%2F2VgXE0oTwd%2B4xuxWi%2BF2ZDYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJF2WOJNDsV7JrtblircA1GpeXoEp5gzi2xR%2Bg0N8U78oiLacZrC9V8DRsTD1fnkcR6negxqMGqkOXFwMAhbUdJzr8yF32Igu6J%2FdwC2e9R2kVfw12diJTf4S5ERaVCSeJrcaort3ZegfSYKYRauqXRjZyXtvfMS1izhnhJpovA62ddpNZTd7D17kr23vpkOUvqSWIechZ56lZK2Yu1Wi7aK3DZZU8KYCsmYPLLHJO1z6I%2F9fHMvpMp2eP%2Fhep90oWTKoo3jWIpxgVQG%2FAw6QxqxSRN9qjMPYRXW5FtjEN6KJ433wFEmmM88qPYIv5eLhKHHEHgSiDRK0VHUMlTTj9zPXoYz9zVzmKn0eS2qyOUbdWbs2zNxTWqNftyIFejT2Qw%2Bpm54HJkE%2BqKczm%2BM43yAylBEDnqb0GXHAeMrB%2FwvBob6246AFWaJEdrS0Uu90GT9r9hoPod3bPBO%2B1t1WOPi4DjtZL4X4sOQQQqY7j6nsR1dmfHfeoGlrFKFyvryFAKnd%2BkFPLuSIEGIC3Ga9E3RxLnCLXTldGjtwIV4QgN7FAGdVD3dgICg9oBUmxwDrRLTantKPFEM1fXoRMs7sqlDLnQKJzx9jVLFzNXgb7khBrZVox6NbdEVPjQ6MvF8BmKWcsaMXWRfJIHEMJz3v8kGOqUBZXAsBWXSMeZUUbN1n7W1QkeX3PuIGiXc7%2BoFfDYM03kAvcUeW%2FBvKbu%2B23mr50Hf%2Fhh23D652o3MnNvzzhO1JCHWaExl4lxhtsjVxf9b3m6%2FhcFmsFt7IQUIZQ%2BOGAr3EdH7BbZS9ixcJukJdh9FvAwt6DfeL%2FiaoEQcsFrZdvUJmzPxk%2FxpnzPSnpVC79UHWL2tp4NVCGaPYc2i1e37n%2FCTwura&X-Amz-Signature=eaa84c77ffad7e88b778a80d1263af2381542fdf82987613a35531907d8e34ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

