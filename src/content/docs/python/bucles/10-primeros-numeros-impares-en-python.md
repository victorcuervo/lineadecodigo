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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBK3B5J3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5tohKNtBgMXeHxkhm6NDJwt9BEpn8KdjgbRmOZXgPQIgWWL7XWD6QIMbndjbxbCRmnJmloGSrt9O%2BXdmv2P8enIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOfW6xddQ3OWUV8P6CrcAyuqf8bVIm2rWXS4PA4jM9ywMA%2BKVG4EG0c%2BHmS92ALf%2Bkwc8T%2FpKGEPpz2%2FS7ugq%2BBS3EpsCyq%2FV0wuJMEkFf9DCuVIT5UTsessx612H4E3rVOC5%2Fw8Oh4D2H12cfF%2FquF4fly9t4uYyfDtrZsvDaCwMu21pb5xtKGWGx%2FSkD6OHZLram%2FgYPQ%2FGJogbCyEg32REONmpqj6%2Fds3R14hLYFe3%2FOkAW%2BwxCLpapIU0QTkfI8TAosI21A1KfvqrotYwmld2cfMWmUyW6IM5UKsnOAjzSaZptwwzHQ%2BVEImgGIEW1lpNX4KArNnjUBX%2BI09pq80ePSuUNK1GneLwp53PT9yyVW1LiA9cbuo8Gzsn9c8fhLVxLRMnJi2mSQuR2wuuYpynCuNmETNVQC6BUBgW%2FSmXWTBBSa9hDhripn4jMLSOLoXqe%2BeiwqAsZJJnHthkuVw3o2ywgC1gO%2F4nRU9djuy9tWiwKc6mx%2F9t3FtRO%2BDFYSBQtGnCmTGencgMCZZxZAyO77dkJaTljjq1bHCByVdchTyLicFNIfr%2BV9JjZD5FtmXMg2CKnq2k6e%2FkXHGLm8%2FtdrqYB0rQFzcZXMbj6y1TDkDWmC9aPVebFXR%2F4j6iZPXPAbyWGOMWA%2B%2FMKDL0ckGOqUBSyXlwf%2B%2BT0%2FlfDwSwo9KeAT40OMuFPU%2FAlPNEbFutLIY11XdRL2ffWGY4DW04BXDyzwRc1avTqXiG0vrpLZs6DmSU%2B21dmdBlb5yTS1P92lZ%2BWyFiODu9ojo7NKn4FI8%2FTupHd%2Bf0ZBJPfgKQmY0U9utGQrHpEgjB8eKuDBl1r0zf6rYnW1dlzj6ClrKz%2Fk%2B7i0YFJMb0C7YZy%2FkFzif1%2Bqn6gS7&X-Amz-Signature=b26867b3a64dcdcd86468a6e58426f5337567cc64ce7e74035b00bdba2a9752a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

