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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWBVTLO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFL9Q6Gvr4gUePshGqmXCHcVLytdOdPtWUia9hSMz7DQIhANcW5rqTbFjbHoU3kBPHwLv9R66Nznf2KVSCALQdWpHmKv8DCHoQABoMNjM3NDIzMTgzODA1IgxPRWbf3KGUPXzmCAkq3AMipGLc%2BPlXg65MWtRJn9C3%2F%2BwyeI3C3BHeBKMuwhWfjIfCOFFVumA4mFYsufy29p9mfqI34R0sE%2BwQD4OsJxOkQp0ledEymwGrAF7kxaI%2FXoseBg%2Fpgt%2B1zakktkDURMF4wxZUtlBRTSwGW%2Bbwpti6TpKmEyiH67%2F7fxFGDkWly3RV5SF5L%2Bc0uOEi2bRIrlpWr7mjTgzWNxg8jOfeP8s1ZCCFi%2BcCbMDzpjDtrg%2BOj970AjsTSBiqT5zw1M0V7GDsQPchgbF3aGGvOB3hGTkjAz4Lc8CyoXjezL7yQHSTkB8Yn3GeF2Vc3Hgb8ocYM5%2B2MBHY3Sq9hGhrnxeBqIZa3Kxge385QatHive%2FIPzxIiS%2FQmY3ZUuuXXU6czQn%2BeWKUaCuyPiSckjggK9XPcBUSG9c8rk%2F9th1HG8xaXU1MNk%2FWg4PvlmyMyNkcHLdRquhJP2IuCacLHBUsYTUUFyhIOlV46Tb9fdWRmgw6mobUTyay8PmrBrlpFPQm8syIOk5brtPMCdL7D3dtCNlHGGSOk%2ByA3nVTR2qALOvZ8Bh2%2FluPlxv6ZhDOzw8ggA9NiVz1PPv%2FjJyH2sButfnTkG9lPXru8sTD8tyadv%2Bqcu8wO%2BNSIxhQdpbrQtWjTCyxdHJBjqkAUkkCso1TYyDb7WPPcfapLYLBXHntqwg9v6%2BWkwhbKssvJo%2FvgQgzAvrOSQM158mBlXsab3n7d%2BeXLtH%2FQh35Mdx96uRx3wYXzOWLrBfMkf2tP2up9CMsqujTnNUkvQtghjPkaO%2BJyU1lpfKcVRsiFiDb4zLLpUj%2FycqI6WPLv1PmkhM8KTok1Cskoy7fmJajn8QeG7LZx0v62N4SeMKqjmpK7CP&X-Amz-Signature=f2729aed966c8364762aedb7a039ec35a07ea8cfadb30d63dd6a1fac3e9376a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

