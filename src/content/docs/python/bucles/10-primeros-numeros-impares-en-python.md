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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AP5DJZN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOioha7atsYY7jmTUKHa%2ByfPTdSj7eKUczQc%2BYalREuAIgWUlxjc%2FiOZpF9T5W4Ho1Wx0VBaa6mS1eibFcuJcl2VcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCODx8tULzxZATdIEyrcA8Ld8KRpUK8455lSg41q8KisY0W5f%2B7wybFSAChiXsBbcNSRgeYRCyk7qtQ4FP1CQ7u6V%2B6Bu4hMR6zFVCDX1xBYsdE2NQ15kI1Yokg%2FckgYndqSYEZuSAe3qgPS%2BblFNU0Ds652YLYX45Q4uoVmbCrfdGvqv4O%2B15ZgS5mO7iiPOpsPPhnjcAD%2BCunGTUyCAN1chtWYLq8dxxitKdEYPMCW9qC9lHVjitWaqVZcgf905RPrqYGazaHRZm%2B0xHikG8LeAnuj%2BV19vq1Bzj4Dx%2FSUKUuK%2B7YQzGA0u6A7qIx1qNkO0RXuWJGgJ%2BgzF4zFR848E4TZRVFXMhwUk6vQndH0pPRHYIRikkHPS0XlIrK3PdAIlQO79A7WqisZXmEBaB2s%2FbON%2FjUNjuEh5HAKCAvp%2BepGJGY6c7P1ouZ8zq2HD5dMYNcRsr3wf49PoD%2FFTmaw0wZNvjcEHchnQrd%2FP9G3bdRfQxs%2BDIw%2Fv4gcxcPJrsOx0rud3c11NprgY0EHSyzXtw3KQDJOMq4sw1f7i1AZXKa7I5RFGawW2WOlwKR1cvP%2B2RYSLkBHM0e%2F8uyBirceiCJnuK42DyFf2BnkzmbaFl6pU7set2SO7Ddh9CizOtAoH6rcwnN46oRTMIbB28kGOqUBYyWIJDTAAQkBEpE%2FOprd95gJ7F5ji3YABjRsJXR6ekNB%2FKsqz25ZrG2qzME%2B%2FpRKho9loYDZTUchR3nv%2BOiFPqdpz7fIYTfaQ8TpjiM4Rl6HOdFD93%2F%2BNeaW7geCIT4kf3K3yYJw1MRVtaGpDat34RInlkxwk63h8vtZGB%2BaYvW9L15PRnBVfgkPEvopw9lAwvNegjA0K%2FvudIUSr2or77MmoWci&X-Amz-Signature=7e9b4ea2358a7c5a68ffd9c3669dbf66e2a65794642ba192f6b8299c7615e555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

