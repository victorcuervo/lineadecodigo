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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TYNE3OP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD39ni4lOrsnvfOsVOPb6poBIGVk4LB5XoeCB%2B3Ni6J5wIgLV7JCPBf44UbdO34JVB%2F0w5Y5WacUFtz5YeY5rN6ZYMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFWg990PeA%2BFMXqDryrcA2LW%2BLlAHoVDym22WpzwYVZY94BiX%2BzyvD3y2y0bvlkq4eUizVZBVEeL6mTwNxAn3oFSBE3q59vYnkC15Un%2B8Mr3Gz4GO2taA6i%2FYJpUAOLdy1asOUtnjmVhKs8dy6vCDEXud%2BdqcKeakLPDzH6fretkOMhuL%2FLTxQ%2BTP7WTuDkxi97tj58uKbFx5kMqsSnDc12XsdQq0io1DXSXuqxseY0O9Rx74DcmgRj2%2BvCS3FLXgAKckGlASwj%2FfMiTYRbHguladFaoemUm5u%2Br63%2FEm1YlLiDsPyCareKjXdnEfB5%2Fcop3CdET16VFyHUHk17WDMVrUsWdUiaSY3n4I0UNT%2BkPE1G06cLKOFkeFqwF8twn39%2B155bP2ogUsdFssIEgel210zjw5P1sS71UFITT%2BymiDBLp0qw7wA87jmuhm%2B8UblvKG9Gw7Tv8FhplpMQ10paGB9tLC%2FKiMLM%2BnwBgW9IBINAANU3g4bepUGczIALJXjVKO1xCb8u4bCM10ZmwCLFbUIyE6p88R81q6T2AY9An2WfpP5pTxZ8j1JUE93tN3QyIodDFCE5VmOi4vnSroT6que8Uaz37l27GUKV8akbfwyyI0CEmPAII8e4f1S46oDsKgu7Vf87u52XmMPyWvskGOqUBhe%2FSaMhQYIW8oovTDQ1TF1%2FQBaIpQ0hyAlg8uJse%2BXzcr%2BHHDZ44MUdxJu8ysZubl6XAHZGnJ5yyOnbhuXq%2BtsQpmUsBJbc4MS8yX2CfV1%2BJqbgi5Hl9gRJ9PyLJDApTIt%2BF6vA3VjbCUcsBIkztpCCu6SI4Zd352no0RiDjJiJKhYUZrNMJOhoOwufYzWbXW9NmrvCliROepUlQubYkyhT81L9G&X-Amz-Signature=2de5c711dbbe2f086aab67d3527f6cfd371a8134cc7563c40b1e06630be46c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

