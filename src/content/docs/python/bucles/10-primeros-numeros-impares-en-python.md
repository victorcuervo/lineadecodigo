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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7EVCHZU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQWycurM08pXRGQKkb4sVSq0%2BBTwSJsDgAOkM8NrBBEwIgGZSTOgPFq0%2BL3%2BUA6HAAGVev3SBTHHLhKVBCpAedRUkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDLbIGtuwpRlaZRLRCrcA4SjxUWHShTYiAbt%2FdRfFeyKD92C4EDLNWD7kgUs56Y6PLwjVpwGy5oEp07jCmWrerbrzzVvBRMxZTD0On6a%2FIQq3OGbFlp1Vvm4sl0mGyHWzEQGWtZO%2BNWicIHBHNPtF3pwPnj%2BFrhYVyw2o%2Fs1537I3tRWeuX%2FJVEtfKA%2FpR%2BCo8CSR6x%2BG1zI19Ukb5QkJ6F0vjXriSHMVhlwrGD6VV%2FGW74y4Oll9hRlxWsdNgRYt9M1Nsk9cEFMYunA8hIZBETXkOOf9RK9PybNvJZs7N6uKLPmC5q%2FC0PB9SxlRflPVOH9u%2BDhowcJ9dkCO7UbwmxZ76iD1BoJgT7%2Fyoy9Km5gRJujBXQs%2B0fne6T2BI4BwYlqcCFo%2BOxCFQxOnk8AKWidmj6gLYIcSyFzZpM2b2Yx1ZCURZSzQKzhWWU45FOsKeanhz7DUa5Cebs%2FmkOxFOvXcgHzWjrSoTayXO77G8po4pt3gL1stcPTX1HP69WfjofREDxUbyMUrNry6MfN3Ub0fdoGR9vym77Kda0i6q3tT7o0xIe211gIj7zk0jnvD%2FhMB49q%2FNVQkqaHJa2vKm6JufYep50G3B7sIAAPrIlEG0PXriORMrm%2F3qAiHNckUMiJ9OmgpaijAqG%2FMPWm0MkGOqUBO3wu7%2FvG7rEddvgvd%2BvcJ9jERrOFhfOjRWoF7i70YlFON3Lf%2B4DAxy14I4vnrwaBhEzu%2FlzR%2FrfUHKY1d7sNq%2B%2BBAUXS37fnRH1osg7RSwvcdSH9G1LdiJACJ8k0RQJg3A0or23Lhv63MJ9eyLHgopu9KC9CW9agdiV7nwl%2Ftio8N%2F7sLenJEbyNZ8W0c%2FE4tSckulE%2Faw9fP487SWVRt4qkt3LB&X-Amz-Signature=4f622edce24725b2cb573334ebb9766d2584778bced2e12b8eaf9669fad81fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

