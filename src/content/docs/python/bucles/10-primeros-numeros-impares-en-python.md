---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334QL62N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEcuR8U8mcxLSSzok6W3KaKvaYaXDaV9RIsouAWI9JqWAiEAqVoTh5loaSAX3BO5pmnU6HTfuUu8jZ3As8Zlh3jnOhIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOaphoeQNIPHC5bsFyrcA5UudEoHeiUr3%2FDdDhU9jzAUb8XVt8pRQt5Ut1%2FSjh9quNdfopbjjSxRuYX3tS4hBGdXvJdJjzxEhxpw95YV0dexIgp4ToNptbmFxjCYp6NWWhGQhgUaQ7Y6IlZ%2BpfjM6sJlsp2GpOZqFrXQmfvtEiaoaijllZp6VoJJTZPdLCsxz3Xk4BL2sd6%2FmyIhDte%2B8B4D%2FET5iWbnXqDn%2FHeQ%2FET9nyIabN9DVaV2YYBtFEZFrrfC248bNSVrsjygKLzhijliefM8%2BW7ntlj9C7UXSd%2BhHsGYh%2B7BgXIDnuAGh5tMayUeSBYszClfuHtBr3OangSVpKziDDHLBRKtDEleM01Y6MFkdJobhAVHGofwHFJLMWdPjOnnSwwqxIzEeEM6p4u9kgP58KkB5PkbWZSV5Ag5evxhh0RjQNSXddtc1DCFLsPj1dN67ocpMzLzqWLaHMVX7gRYXV1HIn17nQtjbMlWkNoeGeVUGOscDyXwO%2BqJsuIcHg%2BSKqx%2FDjOcmeED5DZjwq4mq1qaPFlsh4FaJUCWY%2BXif2yWehoJ5IDTJVh4HvdLE0iVTamCNJCrt%2Fqq%2FC0iGS7Cay43l6zZfI58zoHvqtLqbY6n4Yy6zc64y2awKvl82yFesVGY%2BN8SMNi9wskGOqUBy2NFF1u4a6%2FZERX96K9%2BOBiv6QYqR6%2BHWbjxrgt2IpEkwSkJTTjeTihxZ2O6GkW6lmoEO7oIKWIElPLWV76ePXI2Xr0eHz%2F61frTxXImGiSx3vwPEVe96WSTKw3YurGoYwun463dGU7ICiWhYfTjqsv0qJupVwFBf%2FUWbJM0gGRah5AjQ0TK8aTxmunPcQXueWd0%2F3Wc%2B3%2B6joYxLjM%2BNlOImfHI&X-Amz-Signature=54a81c87258ce44b368f9c851a6ece92dcd803c6ff64889dc40245b30e467fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

