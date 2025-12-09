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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UTD3GLN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClzSr8vFsoIDDDm25G%2BBF1jcIO2r18EQaqFGOrfAEMTwIhALua%2BZSGh2Wk2Odfks6W0rrsEn6Ga48YIWkZDFqOOkm7KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlEoydMDUiPGdjq5gq3AP%2B2Hk4ZE7rd4HUiiSIUIlPjvGavryZnMsr43hISUTwlJakXqGv7hkp%2BPpMRPPeztL9Xt%2Bu4KtG5FLLESP8jxOonP%2FCJip%2BfraZiJznVLVP7%2BkzNtU14qQt02o7qFhX9L0JiBnTIKvxTFLjKJnj8Iu0CM7%2FFr2vPcydTT8wt79v0RIxeCnauVBapORilmO5Gt6YehGnr2rr4a5goS%2FbYq4Sjqifb0PCWD2exqLT1jrNYLJMNu3p0O%2FwxiyDC7CfMVLkoX%2B91PAB1iJ5wef1Nx%2FX6EmYi%2F9cYOuj%2BoYk9BtqIQLrWx51%2FbwLzAMop3hDC%2Fikgfv2NGU4jdvfyO7D1fwx7x4ceDzUOZO1B5iEFCv2M8ZRg2DdSmHDYkgJxuaYVvMuotkY6UqgEHKEyc1sDq%2Bc02pGP3oZmiakZ7%2Bqi%2BAWQ56BZPB320mt%2F2gwUrs9K05ZREOUIIUH9jTE%2FOF5SL71%2FwJBSRJKwmPGfWWvIZKf6ujsjcBo8Q4FXLp6UifKIvwrSt0bk7iQT8k6tOyW6Wmf23qZ9X2ZBG0rjsSP8Dvqe%2Fv4LfaWhHS067zGKZZsRG1Vr69EumuZ%2BEyv6EJFFMgl0SveOl%2BbsnUwMAMUYSyTFx%2FsbC7JMeV366YIEjDe5d7JBjqkAWsTDVFo1Ypr3tJjFkrhErmm1DwOACuupysisXAwVMaSLnY%2B09Ld%2FedV7YO4COcxgbI3jhk7W1PFylQ0PHUd8e1US7AgF7nrf56RhYuNvf1Fm91G8sK%2FVqQAVRyPI7OadfJVAxzyxQnIPiXT9duxV9v8fDr2fxj731KBEwqA8CpxVeyVFSzXcKV2GbzckRoSfyOlnqBJxvgkqlPDWJTM3P78NbMW&X-Amz-Signature=910b9f7ff1c7cc9de3e8693a6c7503331bdf378f0decfe95bb7f05b3c91389af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

