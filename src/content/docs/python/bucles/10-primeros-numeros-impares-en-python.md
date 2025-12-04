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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZQQMTQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCID0r3kp5xPzzi95KFHF7NfU8kEfJ0JjHf8mX5JzJ5UALAiEA7PLEB15FMaxFvTXeAIHegwQVyOCioc2223Y7GOa92Tsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJxJII6iJQsV6uHIMircA%2F3Yg3zEey41uztGAo3AwO2WfSkDsJhBdIT0FWLgaT4B%2FmJky0OYKjoi6ivbVjSXhZRbnrZ64kGr9NaHDCOiNbPFI0EbiQAn4U4TburiYDXnJ94L7e0JZEuHp%2FPMczANiwHdu0OHG%2FQvfnMg%2FjXynHThfd3s%2FWBwx5y%2F8EZAfYxwsYk6ioeFVY9q24%2BG4lKzsqjLTUxjAnj5rsphA%2BFQGrM7m1h%2FqZb2AfPUPGTa0vpr%2B9wjdvVfohiJag6s15otS4AtTTFecwh05j2kdjJ8VJdJFDFp18Go3r%2BGom37LvC88kU4EZmi2vFnjwcx6UOwVn3AXJRyhdiV9s%2BrCY3QCcsJVghQY1NkkybthTr0JBTRxMlf5bWNzN1Mcn4PPUcKswPkrHkug3icXAVvy1uJUcnwPUwQItbs2me3dlyhNA0hw0nmQtdoqcU1f%2F1zh6k%2FmMhA%2FO%2BcOidnl2oIbCb0Lz7FMcSjJvjYHLCbg1IV9%2FbdrbkWfXEgmuvBhK4hwSbEh%2FXogFP18lFBT0rmncBOFXJepRdykP3xk1ZtDaX2FoDwk9n0NRGC37B4lGGlT9ySZNnDDl5%2FPjRFsAJk4Cz8cbYXWko3z3nXRPsT2ebOEwwW5XMrIpyc1mpwxHb1MNnmxckGOqUB9SP34SW%2FQlBcHYqqTaLSLFhUBmUdaoFsOilu1wMiBYvEzpujhQDeJHPWTG%2BwFl3p%2Ft61OROXNJHFmR7MyAicaMk2H0OeJn2u%2FuiD5w5Gn8u4tJOTlCp8sKBm8KnQd3l4RPqZS6nrqW%2Bl5FAJvUgfb1erfGWwRH9HGx95u7c%2BqL1CrMbWZFzA8VcEQPr4sie%2BGiXNv2C5OrgGsWikBDVyg25mc2UV&X-Amz-Signature=2344992cb486872d2b9ffa77305ad09a6ecbbf4f6f9c5628dc240ed19ac16877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

