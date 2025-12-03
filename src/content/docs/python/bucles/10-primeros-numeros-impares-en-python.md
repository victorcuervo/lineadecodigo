---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HHHOB4O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIChnxHIkodltnlGRMYvBpGkrhNTpAbKl24MnnzBEhmCvAiEAjKlftEzrscrFXTjYlbT%2B%2BL4XkCY50kJ2PXYX7vMzT9Iq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNxdI77mYQ8r%2FCRw3ircAy38KMEKsCPrhOJ4BBm5Zvid5A%2BSBPGtwm1uXzOv7VAA6jjAtHZCJSn1HXb%2BC7QADkLaIgkiRlkXLIlKH0I7ADlGKYxm8VyVC3IR2AsshEnLfiebxHGmYYVk3WUhMISjsolDLfNM%2BRgZn0BoHfI%2FAtJ0mSjJCAvN0e%2BsMdTsYa%2FdGSR7Y7rKcWGdVfTj8u1KIsgH9%2B1FfYDa8OILfwSdwD5xiKIRZETulrWMu5paK%2B%2BuzI4Ky2eCBjJrGYI9vyuHNi%2BShSuPKfHnljif8MDGVpixJDT%2BodoDblkNAxsuQsFF3uAvwcHteV6tBtTu%2BVD0%2Bk4kVLP7Vtgg6k7QeTq%2FiVP6TDxyqWXCpuSPkQWZ66MKx2mxSVE6OyniCFjTapWJf8hIw3hr%2B%2F%2BfxXzxWNebNimsJklC92zJvxdVbp4dgeJ4G1Qg0Prkc0ln00zOzpNiQWucmLEdZ4ERU%2FMRMjss%2BEFWlC5d1AGB4W3m6Mx0PLM5WLQZBNAW2q9iOXVIC0WeIIpbqFE2lRflAO1kOx6afcpCLWYkHrPm1%2Fdg18sBaj7zvxif47XFLlDS8%2BXTs8D%2B9QOxUguuWaw%2B9L35cjsvcLBdVNuJwf8EzHt5wWPM5swLnZ%2FHB7riTRALzt1dMIS%2BwskGOqUBMnmyQlFSA4Nb9%2Bu4fZedRZB44hBTY2%2FdeGKOJebIg8kqGzjRFqMktQDMhG7GxV4ZF0rcxlcu9KYiKMBHgy34zEBTy%2FQtK%2FgsvvGpynwzF0XPlOhXWY2XqZxTs9iX5dUz3gU2rT9wujvHPbIliaHnYWetTlh1Qgvh0AIrrJgLlvbG9FcD%2BoT%2BTb5TLOk6bmrzrijn7tQjoX3q%2BCZb7d3gtXHKs%2Bqs&X-Amz-Signature=223e13b8305823567b095b9b5947ef47ad10718b6c5e738a583d089a4adafa66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

