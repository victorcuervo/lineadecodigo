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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXEDCZDY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJccud3ZtLDdR2nMv4A5JpVeFnku4VEfFFJg2kYEdpwAiBydflJpkCNuQwgUmq22CWHkGWqRWrjEArO8wzn%2FAPnpiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmosZFczsMd%2BPaEU5KtwDCcXfUqA%2BM8T5MftxAM4pNl2P3R2bPX1JIt6Mx7aFZK%2BS6xyWR4uTNt52GY9rjVo3TkoPYgoHv86%2FQSXtbcZ4FglqLGg6heSvX8JaPNmDSIVrcYSG%2FQw3YWiomNhUUUn0pdKoPURdx9HMxOnmnSLKJCF8ceHcq8acA00SrOJw%2FWDS7KzjWiiBfJVr9zw%2B%2Fn%2Bbzr%2FXUB8vKkumyPeb8%2B7LKn%2F4ao8466rO%2BzvoKb1MjNUUFXRIEAfVa72aEJiGiTJXgJib0lwfTpKyhnJWVfWWp6zyu58tPDe09I1eB23gMxpubTv05%2BjuPIs5xjcotnzYEa0eYSzM0UusCcUFsTxeNQfA4stolGFFk%2B%2FxvEoR9x7DAZ80aBNVwrAdI5QWpnmz0WpF%2FzcHuKBbyvmSRmTiHQHYDrgfJhQmkTpVsm%2FQ45VhzU3x3V5cQEESMskppdsme6wsrzQNNO8t3UMj2Y7e5jdLaI9NLoueTVBz%2BW2e8Wkt1HAwb9iYVXvkmwOFSc1LRqj52N5wL3GP2chhk78vqq6fGtb3ug5beBIwlbtp0AHG3%2BmmnzAA1Rdc%2BrYbzeQJkI%2BUa8LQpxYd89vVENYBV1NmgzLnXcf2V312IyfkPZ3%2BKkQ38ft1q8%2FBju4wuv3SyQY6pgFgzprQDUxdJAYS5GtKuOnrZnO2v%2B6dRngt6j3%2BZ3y4v9CJYd%2F57Yb%2FUfjQLsOES0nhv3EkgGUaGtUfLRP%2FVa63GlFByPd8AQye2z3YJjndONV16TZSyFqWWNuutpwlK56xybss85%2B%2F7PzYo9rQ4NBIixm2QQ6gTDSP2%2FCJHDH6ZgFSb3GO9UOMjuo%2FQpsP4FUc2QciGKab3hHkj4a2XesDck1meTW%2F&X-Amz-Signature=c58576cd0e996540470540118f22f32db3f0e9528b7fe0254a038917d84ab17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

