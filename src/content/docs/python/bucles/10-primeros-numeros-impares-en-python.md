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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIYU3L4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV1m9%2FGUNmTSo9KnQmTeJFBy4GMfJMgzjKS2bmH6n%2FSAIgXedRDMNCKZb%2FntU4zxMEtZa4A2Jyar602rfOCiiq4e0q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGmcWM6ggFGdRl76FCrcA%2F1IYna5QyxtzRZwJ8NTR16z1GyuU6YEHEB%2Bs8FnGGgJ9ZiGNAaYvrzPr0Sv5RXkI1QrnUz39jURK0EEc3MLcW5%2BVfPnzH3VRXGo67ylZU%2F2qanUm4PWesdh2dBQQqk7EwReZJtFbSmdLHpnHNx5mQorYKtgwRTzPNGL7Kt9DzJh7XgItYMLH6DG3RKKJwbDkA767Ox8uxnZkAfYQf99wwfYw91q%2Fg14iH00WEiAu1JnQ%2Bg5nP1qmyzgFC7S1L%2By6vdMAxJOo0Aj0o9G12EGkzF0g78cYgrJ2FvEz4QhB%2FKE6W%2BYz4xxppJcbAjtXLbVBmD2BqiRg8kWaXxc90aWpes9jxZscx%2FQF%2BUw%2FdBV6K26TZdrydhqu%2FabA%2F6SjC%2BhCeaRoeVk1MCbCbBGHMCQIDbmlXz4m%2B1c86EkI7lWYf3sureQFXYy8%2FwUT0zwLbj6ptOd5Z3aukmH7sH%2FM%2BzrLKoBa49LqP9y2Z9D7mIqMUGSInmJsIlsNB5bzf3P5ZjZEJmNE7AsgnqEFr4kfq3127WGOV%2FcvqsrSXRfhmJBJuPE%2BWN3t0W0%2F7xFP5KqFG1ysKqXs8n79gVaISemHakUzs8ppPrAwGoL%2BXoh4ZxD%2BikegExIABpx7HsmmSLKMM%2Bv0ckGOqUBTdkNzNBGjjS40EzZ2K4PgBVYmThX7RbZGN0PaJLMtjQdWhqNuyV4bTjo3HwzFgUVFSkIQ6Im35D7VXTde6PK2gJAzSf%2Bdbm5J95yTbH%2BG410aRgexIhMMuJ7tqL9WW4oFktwENsEz%2BkGaj9kNBPipH5LK4N5wgvQ3UDo1qkVQ%2F5OJ38x6QMemEs8qw5sqNY9kiInwuJbDEUIEA3GXw6yCN3Zf4JH&X-Amz-Signature=d51c91288f3ed90c4bb47e6f7529ce51abdb38648760726b7618553537d7ea1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

