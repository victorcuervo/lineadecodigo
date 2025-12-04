---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL5OVD6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDU64KXDYrIZQ3WKOtU4GD3s%2FO9L024ulYEisdo0tsldwIgH8o%2F3hbl6nCQZbXFLW2Autuwtx2ryYx4A2GKzrUDMeUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDQrXR5bT6hchz6reSrcAw2Q4HKJsFYwVcF01VU3MMk3iPp%2ByLWPDMmLQxLymfuS0kuoU8uzAzCOffjRhOwt8O1yh0towrfbI7IpR25JVE74la4AN9KjY4Gw895LxX%2Fw5nKebIb5SI0T05Dt%2Bs8zkVzDzDydTlMHS6MGTT4JhiSlg%2F7j0VArCpkjTRT7n5gDnIYsXSNNDc49b9L2cxruBFttvUYJF6OvlOHn1pScYHKBxxFtXKHxUBxMl%2B9mpguqg2HZX7IYYZZ9NIDtGPiqgAP7RQZzc9ZEP2jK%2B6ju2jglGlz0%2B89Acz6hFgMlpj9krczyTGVz%2Bss0X48XXQbaCpvXPF4mk7CCAdUbpnQ3eE1SMqDxz3tCF%2BBMx8EO28YHFu6E465fiq5Q%2FBZ4Bo6fLf702ztT%2Fg27kiVBhyfEIP00AAMmmKzUY7reHPTtyC949Q8RWrY3dZQQACpNJPcaF7Vxp5mwwP%2BoiKqZDI75EMIvPHggiQHKo0FP9Iamf7V9wAihHvlk5gQNACQ0%2Be4KloJBq20Ua%2F7khaRTQ9uGhiD6XfMpwp%2FJbJe7Ne4wxzXUcxzBwjpB%2B8OBiipQ84QIYh6UkTouSGPzJQp58hX6etYEbStQV79gVbkPmIUFgWcHqW4BNPRxSaUtxZifMKK1w8kGOqUB5kFNrCoZ1Hwm5L%2BPW3fiTB3q9EWl%2BzEdC8kbnQcE88JUrgQJUiv1IEmlDut%2FYBIyewa9%2FsRdtSYOgtdxD52dPrDHzz%2FCKIrEDj9ATBFz3I7xgSfsLZhKQCqPIV0lcjcVjBLSbfrWqoDkG4VC7hmpeMsE8L10ZnsVfS9FZjNdmh3zyz%2FFNYkMASb3ujTS%2F6fKBQlgpb4FhPqo39Hnee5FGIgVMBv0&X-Amz-Signature=008d4aac174f51f770824d0de42c7dc8fa2e944a910beb7e9cf2321d3f02e722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

