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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFXLECIN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDh8D3JVnLR1J6%2BvEZgxD2ks%2F85vfft%2FhUIniqYHDWawgIgYT7ER1yeUfmLmKTLaquE0YcYRAobiFPJ8B5LJz3%2FqCsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDw9wIudouSGXtlnJircA5OJ4NLYr23BgekF9rCJbOx%2BlF7%2Bo2EpEt8NXjoLSEK%2Bsgaqt3PCJez3DI43GwM9OX%2BQJO91k9gT0F7eCqtCEZFzz28o1karwEaRQxEOycNtQWe6u1t3lQHf3TWjxbuAbuafXsCRtmm%2FFU%2F8IhLfcy4SjtKep%2BQkRkgWLapJv3PgVvgWIBnrEHUHK1GUO4OOApvDyIscDjMpDo2kSH0FUcRw%2FNIgQhC2tjOEG%2BAVjhQ9gNLDEmUaMiqUElXkDu90UllRntMnxsBZ%2BHbY%2FlaIMLWL2M9LFfwItsbXNNGz8gF%2B6TgSkt49XBHnFoL%2FjET2wazT2QcPCGpmGqGdjQjhPMGR%2Fjg2g609QBs02POiPo261z%2FzUWh3l7M3kcJ9sOCzcwFXGDdMB6hFDzZvciAodKLIguaKcWdnkVkFVW7%2BjioNowEMyd2%2BOBWn7MioEHJk1VGT7RPdHRPIW8GRzCD6F2E3LrpVd00MLh1g1QWiFk9w5nVp7No6rERn1r2Z4CEWxpWYvLxgPUcR%2BTHqtKqhjtkAZQYph2BxfFl57ALUEuD%2BAWWhfqEbCzw%2BLdcY24CAVh7mqIPUOuM3Sa61Wq7aYLSzeu9odG08flLnNXSl0fWVeYGAz%2F5Qr8Dou9LrMPvoxMkGOqUBvN3jeNtCdfjffq9s10b7vuVTfEEmFczcIpLDrCJz%2Fgou4Cj%2BzlZb1GVLsQk0yUieP4B%2BP8TkuJNAop6Ybub6z%2BDeHM5tiu%2BvAfW95CK1jLbwOyP5CpvvKrE8cERFl9UTAJiomNC5kwuEnaCAc9LqkovWwNkLlPFnTfmOfTIWPYa4qnAAZ6VSQq4e5M%2FvQ6aP62AXU8QLdsdW1%2BIrAaEOsxLks2da&X-Amz-Signature=3bc5f67a4eff2e0963e1ab8504514fe7342aa58ebf040f2ef87979611cd2873b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

