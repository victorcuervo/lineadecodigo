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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZV7VEY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBo2CkQpMX75CQsjUl0EHmkpVQO7fXNo%2FZ3GD3%2B0Hi8tAiEAhe1cDaIZ6MirB5I996Va6Ex99tVWUSn1IgTIbLfVvx4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPSaSuUZwxRbkqWerCrcA2CTJXl6I%2BUvsj4toQ%2FwckB8Uk7s5H5k7%2FiXALrHcCkDttz2ppIxfyyO%2FaERxaqlTXvIrTW6vzc05yITPcjFQESQt5Q%2B7i8%2B8UPSKo6MrbJuunsjKNOt6qVPXMPsabnW%2F66dW003cDI%2FGddO7NtuM7Dn%2Biy9RH19JyIIOD8kVg%2FHbQwIHR4NGHfXVzPJ2Zs2uazSlfv%2FTsS94tzVsAqxEQMAQtq9u0wN2ik8mG5znfbg%2FoH3Kd%2Bdjbr3OTEH1JFZgL0%2FjhpeLsLtfZdYU0MObqP5JX3%2FG4N62%2BkW%2FDQHPDFcf6o110a5U9xtEls7rNyEVWUNuo214LEptKferP%2BdDTW76wqBIsWwg4fTSzpo2NDMhd2Vv2opGxhRiQ0ncjdVPSdXiQbL0EOKR6nn3bsjlQ2NKq1WsNrYJs2KzUcWOm7RqtoSIwrUw79xj3GzE6II9eaZkuaaunI1Bfr63z7aky32HnJMiiNDyd7Q6gIyjvdowOIjNpWoFGQEEc02NuDUTfg%2FAXTAmyts%2BOwtmE3LwnofOuuXGf89y7fKDf3UPwomvfAyAMsl5m9sPl6yLbWoH5cLA4SgqB08ON4xGJ%2Bg36c%2B8L8j67QaBSYqmuhXet6apBTDZd8Xp1xFksK2MJXcxskGOqUBQ5hpBjENKjX%2F5KFVv997JaoUCKL9lhJuIjyTpbl%2BYtIrDCVB1Dex8OADh9BOkW31w1y8rb72GgcAWeDiWXWX%2BhTb7H%2FMgZViHuVYQlsOflGrO4dAT863iQ2utl%2FYdHzBeWK%2F2KuSIvB1jwHkWy3BggBDaufEP9PcT3bjod4Y0jJissgX6qYaRc4dpU1wo05p6EAnCNd9Kn98UQLDlg2Ux9KGWCqq&X-Amz-Signature=78802092715af59b146a6b71279509a7a09e070ccd57a1f720c028e5330a4053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

