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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURLET7I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvy1X0ltRkaWBo3nCac8YEajkxfBkRkaavfvUj%2BWfcgAiBj0OyPTJQkWIvtD5qz0gLsAb4hqUBtkhFVFFJQTQ1x5iqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkSAHsZJcTMKaRz%2FdKtwDPXg6jB95bWSc1siWOco62l6mk1U7ToU3oFg2BVTV0ZgKGHYU39Nf7CXswbrsVBYepdgISCizMiYjXV7PmA25CNorCt8D2j%2FxK3iJAwsfqxy09xfyaB8ijYLivJgOT%2FPeEwAAkikh3vVsjrydzgaLOmGhtLEBhZH%2FrdlUpGrZDRrX2tofVPbfwkzF4l452vP74eTaaauGzxizf0WaS%2BIl%2BMLO4mh6%2BPpbsXI%2BR1Zrkw1%2BrAOFVOxEnNug0rMMB7%2BDKExBy3AkX4DiNI84eqc5Jq7FQnLKuR2ky3Yk2DgAS%2FY7mOqV4oOlCCjSU15qrXuxcQpUdFfN2deF4S9AiXNIO90zOZQ5T1Njt5KfFecdKodUpmXDIEuu9oinD7CI2r832lXLFXb%2B5dEDmsR5tV1aYlW2pikBXjjbV%2FZCWUO0eiQNjbbBdZZuHsIYljbNqOaDfGGh9Ipz2t9lGSxEigw85r0CsWF%2BduQtg4CWZTjPv%2FlypMTxNdK%2Fx2SE4tm2LpHBq8oqNRs%2FuOsoreiFvl3IT%2BnF4hUT%2B0YmJ0ZZVn1iCAzmJ9JL3y66Yuc166lGDId0WkwIjFvLIfK9JZCWaFH0vIGghR4s4s61xLFqscolz5yR38lnrfAaqWzBpP4wxsfXyQY6pgGMklQTnlpfXWR%2BXroaBo3d3neAYRPDXr6182%2BkhVdftvKOHbpuXc%2BaeffLTKd4cDd%2F25lUwjBn7VUg1T9JkPIZnpds%2B8CyYfFOpmTqbZwLNfLCrqtfIzcm7Dlvo8wJgizB589MQxm%2BwexnBm0tf6ec31kRoNzm0on%2F3TfYhTPB3BvZSqKfFFf9Vjdvv%2Fm7GlGgNQzPTVyJcfEE7PShHcCXuUnb0Wvi&X-Amz-Signature=b2d0bced921e40e38976a643e2e244a0bb1903b988ac4643fc62ed53632b24e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

