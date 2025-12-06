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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M7YABMU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALUXZCoqWTlbejgdghKJvyCupD5Ud1mQOWm5HffzclpAiEA7Hm%2FfvKcAxDy9AB5V0UZzQcZap443k1xNwpin0rTVCIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDISsaPTpEDa%2BgHCQQCrcA%2FsSlD8BkuJbF%2FYqG6xn2ZCIX0Ah%2FLdcuNw3HKV3j0keLzclc91MsvCxgzYx2A1I%2Ba2CGtgkyauT2gtmXPnjPZrFo2V5hkhxCJxJETUQaS%2BUOTA6jTIGkVaqrbOhR7eKhc485teTn3N8hcBqR20tt2ABqX8HeynB6NmrblcRCW%2FRtTb2FiHHZoXkvS9gSwsIqGTvrkn47x%2FB4pn6BaUTB99cLBiZQ6CRoo%2FGAmlSs6BmaNfS0BiVZ%2BMiW%2FyiHApNEjWbaBlGbAaLSUTBplxX8szaCnJ%2FGFVeXVKP7jfHgx8CrxljCabr8eoQpVe%2BWTVtrP2VqV7J1NAGOXI%2B89rIWvRxnSAsSmsZQttlwsiHsGCfOQrtedUxz3wZWoy3Opvn9UvUXN47sAW80L%2FsZ%2Fpnk1CvwU%2FMOy4HrJG5wcSOg8gt8ILMo%2FoJNZpx7%2FcsQvM4dai8C96ecvcPiDC0gYXHThlWvbJSoVt0RQyGvMn7YWarAQyEoVznJd2rYHQKKBRqO5rAMemxbEhGJroKXkrpCMfg17xjoEu73gkzta0L85tjvm4pBDKQhu62p4H9rlIocnOec808zakLO6uLqWiMmzGmiGK6lCGAXSMTacNHQ4vY4kogQBq4k1AM4cWPMLvB0ckGOqUBUe0j1wXL8qp2w5QmFKm2VUXmIF2MJHd6SdPAkJWPpLFlwjoDwzYrEfc5jyGDOoser0eJs3LaGYpDJkq%2BSbfcbL5MRUDUiqJ1dNv2RN8uhBty%2BuuWW%2Bb7QXtOoycXj9q55T1Qf05GwBCCiVGlwxWO9Ye7t5m30jbbzA29T%2Fv7I6dFXusbLDtqL0AIkh%2BVaxhJud5UFoZBbyfjuZwz9MSgojni7xSo&X-Amz-Signature=7ad2ec53601a8ca03d648234004644c8e9a629e4dfb590262ce3f72e37f7b689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

