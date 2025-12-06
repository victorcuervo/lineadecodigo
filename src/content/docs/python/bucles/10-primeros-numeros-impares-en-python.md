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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FY25LE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI5oM72Ah9A4zio6P422UaOFloUhhkxxot9PCxtRDEGQIgcbHrpZpinFNdVXS6DBQecZxnP2nid3NQh7sw09G6Rewq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDExweVmQr%2FE543C4dCrcA0XKFmLLrTQ2430TqGsOl%2BntK4rmGoXn3v5FptUebghU3u0bz%2F1v13dwvX42zjhKke2XNYqKDFFG5Ozl62gyq760EEENjxx8yLlgCttSGVvL5zE2exjeOXkWeCihsOzjOMloT6jHrEHorpUYYmFR07WuYQ%2FUBM0mTpNYSVh12MX9lHm3fCMDoPkj%2BU1FA7JfOYWKDwsbEzH2%2FA5Mkhrb0vkKK46BpxTCvgCmKywpIByIb385IEJ1vi5uLHs4tP34SExnzIMyYVePAVeYVf7zEAoMv2gUsxscQuxe32Gfr80gBEvX%2FYwCRFN0%2BEVdfkwAoKaQdsCNTih7yuX5Aw8QSwaw%2FtnNCRh38rlMyvqHd%2BzZOuRNE1ZZVQ%2FOSAdKnaIPxWvED3iWgAKkMN5wZhx5%2BLMB4Rl%2FXQM92wXfClaRtcVoz%2FtVhHpxvxFZ0t%2BCjL6tiAI%2BwCflru74hGDwucuf0qbsWZak4VG%2FBLlwkWsXD1Jw5LKWqusbkpGBmKKXDhdSaWYUZbbKdf%2BY86pOUmXiv3xo5EthvOxb3Dt2l1WH65xwg8wDMcljDUxv4eD3hwE2PnAxbHiUrbmTtQ7357Y1ziIo4%2BVMLvoJMBRmbcN6IvipomXMKDv6TcDVfnB5MN7CzskGOqUB1ykRJO13b7c%2BJJemjdsKXAgjJeA1pdW6mR4bj0RZ1%2Bcqf4TfRHjtDJlHxeTiiXO9EzqfX2UAu%2B%2FQWAQo4liqWoMXMiF69%2FJBVFQ6BdrvVosudrhJ42e2iRB32gdbg8WzHcgea6oLdSVa3JfT%2FezOYn2%2BpkSt4oK9XJCAXeVwQrFadWElzUflg2kwB5%2FSj1ynJpHJsaSxnsvNtfJQ14nQnSl0P%2FJy&X-Amz-Signature=a302a501e29d99340ac9c495882211741e735c70cde929b95dda1f0c342031dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

