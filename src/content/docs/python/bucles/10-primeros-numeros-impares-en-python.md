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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYLCLNN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkDeDqpnnsmNFdEUPDvp6Jp6d2ARIDf6ZQvPfQ3zHJxQIhAP9w7mL%2BKEsKIkmTKCrOCYRlXphKHRjnYgNDpfkwLFnFKv8DCFsQABoMNjM3NDIzMTgzODA1Igxi3250Bet%2BTrhfdXcq3AMm7GAdpW6Y1tNytI%2BKvsNt5QLr2QASGedTKNGveFr%2BYek4JJC7vVXDJpsJcNklOHqKW%2Bmnqs%2BpheFEy4fPG%2FXM%2F%2FcfRnEv1XPJ1itCY7n2m54Gu%2F48j%2FgcYxcsTIXi69hxvVC4A7x33RvBgS%2Fe9%2BcgGFLI5Jo4va6uf9vxselDNsvDcwYqF5JQcHeVxVm9cy7LVz2nr1pmDOV98y6KM2XwyCmUsAfxmBZHQN0q09JdKav2p3N%2BX%2B3gAmTmRRkiyEWlQeOCm9IpbMc%2BaAzifu5MQ%2FCJVJUZPjGEOWVl0w0BUCNnk4YssN60TCUJaNjCCr9868jEHt%2BcjVpznGCT7ZF63XeyQ%2FE%2By8%2BtUuGm19azGgnEc1xshuoPS0H1MxssUq2V2N25KM6EWJJ%2FGwGfGkpy%2B%2FrZx9EnzmONTH2kqoCy7USs5IosymxO1TYBg9CH%2F%2BziiYVEwJYUkVeA4KkYKf8JeEn1%2Bm3A6xFTIufQ8tkWVKbaNRtQxbGDpp5SKggSBPatghesS4dvePbNic4QRKaQZImqJewgflvZ4ZGleYyEYGi7yQ5nEmUR4vLAMsFbD2Q68668CyjNcIPOnjW50AOOx2bXBDHFeuFUiw6yyf1aNKDwWN7eXQkTLTaa6jCSz8rJBjqkAQeUg2l0PRKn%2Bb2xF5i6rH1xoGZpABw4jKwdsMaIQ8xGfZCe%2BkcprLrcKlgWO4%2FMEQ6LjPcQjSZID04%2Frj7Bypx9fal5sBa5NtR%2BWVSSHVbxw0fqrU5Bq%2FbSc5oJYc6%2B0a7SgH%2BginEvWX40gUpG%2Byl%2BuoCLfUZ0crPFUazkWllW2uWvHy%2FB0V2PtAiaphYIDDOWwO0TuvJ6cDJ4lYlTs2ss%2Ft1l&X-Amz-Signature=b67bc2ed41d04d13c721f4579facc3fa581f5a4b91e7622c8ee93aa8d53f28c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

