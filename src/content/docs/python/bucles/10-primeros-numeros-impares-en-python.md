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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QG65GNA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE1p3PssXaERovAq8KS84%2BJnUuuJVbJuHahFIKqlEf8gIgXVeo8POhZMYqRAawlcGpQgPEmf4WuUc%2FY5j6phXefj0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGwBj3eAuJvIkt0uFSrcA%2BZbkdrzUui11lgG6BIOEfuY2LQn2aH1Op6el1pKVXG02dkmdfhg2CDyxTHISh%2BMFvlzm8fQJcvGNsn9Wbb3PrVuMh%2FgQrj%2FCdFGc8UHWJelAgHCgQISVgQhRkG2yXbRm8vasR41B2mFje6Dq%2Bl%2FyISbkUat8%2Fxp%2F%2F3yrhU09KtUdRPdLZIpIFE8HAN0dTAeNNivqpVi4wXGBYcDAWE4ktQDR7CjJnGNs1G5kshtA%2FXzUee52CSQxcqBMmNKpVVLFIU4JzEqJYtLPKFD2E25UhxXerYZhfMQltYVgc5G20BG04vjbWWx%2BEFLx8%2F1eRORehuP%2F%2FOPbVG5ElS%2FSSkV4BE3GPqI9tggkW1OqF2vZxMir9EMQjaHZocNjJ7IZLugFipKk3BBwOV6j15ihPZ7k2bT51nev%2FwyjB0BoN2LbSdG6aoWWy%2BewyYc5Z0WXbMR5x7Si65j%2FwLHYIXcESiMeK55VeeehLstxmoYzkq%2Fl28zzN7sOFsvfMsVsdc15JVYNdWot%2B3A1cEF4cQ88bFGcJlhNRdMSuVn%2FF%2FDFkqzBMChbSApFGrsNdkrH1zlo7jOT1QtC41YmxSKd%2B3n8eGeuCHV%2BVPYv4dCoyRgQrDM9f99MWv4Ip1m9sBcO%2FTQMPmtyckGOqUBmvOprf8rzaMJBgmUr84gOazx1o%2BwhiGRuJ3noRz12GYn9%2Bdxry4icW4cstH41bpEFPCfBP5wPho7gZRY%2FedtXB%2BmEsw3GUE2qEEOQsGF3IJDr7AlXimSw6ysu%2Bj5t34YTi04dYz3DCsF3WaqjUDqbi35Jjm8tLOQfviYTDpBnT0UjKJfJMkyDlPe0wSxDAOgQ4x9gmnyJvcd85Ttq091PpPNH9Qx&X-Amz-Signature=227e47770a182d9c4e759935ae06145c7d5f316164ac5b43953c79a110ac2057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

