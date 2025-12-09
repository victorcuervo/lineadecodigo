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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7UJWLE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXRccgaoBuxHIBP6QLxXlRk2BLyWwUmEznxjIJHcgfrAiALmeTrMgpp7aE4RgKKDcHKQTH0yh3Z8IBw8SVdvdwA5yqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DY3FXbQbcbkdKVuKtwDhtICz0IiaR3RPoPGbBLsAre1UooBj%2FJV%2BU%2Fb%2FmjujXsFEThK4jXxBoM32udmLBE3p5DrHXYrRnvwF2%2FNIjaa15jWkQO%2F6p5rM71qS2FY6HjJrRc7z1LBxC4cgHdNvTs65plVMeyr41QIqtZEHEvm%2BxbKmqyVckHbAEZVCR3KgzwyFElxNgqlL0v35nirX3rgborT5C4ijFwndIu%2F09Lwkr8OKDqhKko4uJ61P43P1KW9Hb1gW5tNU5BGkwD6PrgozckFcd8qNzdmg7MlWA9kCoT9xMvc1%2BuKebPQAkJcjwe0Q75PXbZq41fj6ABjKbQTZmoJbEsWKV%2Bki%2FjJYPExo6U6B4oDrR7%2BGS2kgBHFb12C66wCiW4wbO%2Ftj3LxhbGCtDsYUadcZ9CvPH%2BQmswAg2nhJ%2BHCaMh%2B0MU2QW1w3Y3Dni0%2BKCBIohMgWEjdIG0CMGS0e0dRmaUeZjV%2FYawHbseNbhDHpAYeGeZzKrd9EoszHz6u3fD7SvG1ZTjPu613NnCtwgDaBgZT6eIbgXXlSGfpSnMANe7B1NBGLKZPyDR5SbxlopqsRGwNKj6HSg7h0%2BmYpt1vI5B4vib8KdDVitHf%2FS7ce9UcE%2BtwKaeI9oH%2Ft6HQL9uKC%2Fn3sMUwj47eyQY6pgHcsAT4PsVq0vE%2BdDKTOzLEb6KC8jP3Ibm0R6NUWvmLqlnobMzKv0f4addj7ramIxF7Wm3fxJGhwnFt7rBqamyNDXg4PjRB%2Ffbts74jjrL5XorDfw62F1uUyh4OTGqWN8cXv0JtXIUWwJj3%2B%2Fay%2Fvt%2FLlzNUi7MzeCYa%2B6CVSxawhHQhE06rLLMBPMJuvCoFUtsqZt1Kj%2B6s5TFvrQRzdZzUUIn532C&X-Amz-Signature=8101558ab2ab8a8c6ea9edecae5b1d504be21d33fb0d58a2de3f1813e86f1d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

