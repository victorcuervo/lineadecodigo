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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPZD7JS4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9Us5XqKmL5m6TbiUdYrsVqzAvo2Zoc5jagb%2BUEnYtAIhAO5P6rGT4W4%2Bt7Eb9bj19%2FePuXC1TH7kgR7l9I5DhaAqKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKpvNCVfzDY7aL50q3AOhRNdjiFHML%2BSQlbz8ISLoeMhS%2BtxqM%2BQSLDQ%2B1lnzduFNv4rkj3IvnlwLy9iIuLbsGg98eYO2I2eILPgTy6eAnuetiSVF9NWeQ%2FWXQHDRQ3NZFpDwseRItEn13UM4mDsWi4waezcjz5Wc9%2FKOVqAaRGUAvAo591E5OshvC8N6SmA%2BEqLrgDqWuPVATsJRNYRrT21LybWiC7grgm%2FZK80fb9A%2FknULxme4eGtb486FpFEsPOxq01sfRQjOs%2Bw2hgjIPL070rBOPJrhOrRujg7T8WjR2m7UTgPuPSA8hpU4BZABeYOKwIOWoTSAzL2Tqg3m6LlEMbrtXkfRe0rCY7%2Fh6WyWiQCH2qoWIoO%2B%2FUZdeQREQhO1jDhXeLYRajl3YhHZ3qQmnXHoEDVKZ6VuddVfF01FWPFnscCQVczwL%2F1pBtnHsSAmSvD%2FwyrJ%2Fvm4pGLpUsRiPQetuGBQiB8iK1iYqAiZsm2KTswagPPgTwrzNQ9nmZdjU3yvz8ESRIT5ba386IcxmXAGBe3FYhZfcT4lUXuwP%2FmEoY7hw%2BGOELfDvFpC%2BsImIGBpti%2Buup1aCZwfTljUUOBrYhacCA3erdYWbgGaNEyUR0Og1OnOBX50lrpp1RqN4MfPZzQPyjD9o9TJBjqkAVPHviUYfHBqo0ate3guq5F%2BJAYUcqtpC8uvYxgLeRK46WwuDP4nskrQP3YaabNn2MYqJkPRDBPRmvp2I3APabJNC%2Fgnllqw98GqdDjWY5IRSXryqJsEa42ZoLO3UPZCWXXkp6ksDSytW6sxZo%2BOEHW2X0VO%2F2%2FpK%2FUvVGcWvpjeJ%2BtjmRNOi2%2BviwvJNRTfyoUHctV0aivVVA4Wy8%2FXSEc2EW9%2F&X-Amz-Signature=d9d776363aaab8bbb1ee5d7ada353282d6f68b0586bf765223db92e69954f02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

