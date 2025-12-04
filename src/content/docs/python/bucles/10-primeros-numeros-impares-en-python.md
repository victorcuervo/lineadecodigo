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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDAK5DHP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCsbyRFaE6cifp%2BWf%2ByuVENBnuXsf%2FuO%2BHv4J18okfcvgIgFoQIzuZAyUaCX7fqUEdY6l9sDXLkFfDpPrjQOW%2BmZYEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKpoUE8H2g%2B1fJUkDircA1fq8WXlgGQGdeHqSb6T9Vdu%2FdMO9lp6POjfu61bu9D3UP7zFJSk0wevLnbbcXhGyMyotoL%2FzYfKMEyvWAo2pSA4DE4ihocKO01m3FpvnQif0vGRO%2BzEXBFubJgaHzfv373z%2B9obuQDT48Q4mEB9zJIth%2Bfos3qFUaFzQom56joR9JARXSJHfAaVKnoEy5CCPrnywLPriM6%2FW%2BosfJZzvtfqCMnn3z5N0CvabSvZ7fwG92ZxQUnZShN%2BibINPf2CpQwloYNNIr1hGPj%2BOxhFy15KNzrOdf9Rouu0WFWdZG0Y1oH88JCbPVZVZbLXtjEJqpRgboW%2FPjdjhUlJHEIgPpUHc0gBEUOCWNJqCU7Q9Wl%2Bw6WNgvNmTN1zyoSLiJmyWo57mdGLFpCN7nvS9bQypwQI5yvA%2F6G9LeOeWQxxXiDl1pHvdsynREgD1dy9E4vrrkt%2F2WCLpznaB3rzmWSl8M1Ceas%2FKIZKelTgTb5skhE74c23qzJaOMKdndaR9rRzQanm3UVYA3N2sv4X8A0RY6%2BRKTdI7Sjsz1ZpxiJeeESsMBn5cNBSbDX8DBAoIMnedqwgJRKobtU%2FITlIwMK9RaWxPscsV06kvBU8MlcS%2FHewS1dhmFYNQerIXs%2BTMJeFxckGOqUB2U5Be%2Fw9MSWHt98HoaDCf1dJvPibZRMEFxgjuANbgz%2BgC%2BNQ%2BQNCanqq32CST6o1T1IUYrX5QV2aVFoUWsAAY9k6cn3PReCiOPiH7Oh2h0T4QByFGouz3r%2Br8mYnHNr4Qz6jhkfTmRDP2eaUdiqRlaj2CquEZVyOE2BAPK5ncO7wHxwy3%2BxGVzPArqRovMxbflNKr00GNIU%2F4DQUY2t0whYwhbdm&X-Amz-Signature=d29a5adfa1f2b3c7ec48aaf685b2815b38f05205b3decaa2dd0349e6dcb7c534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

