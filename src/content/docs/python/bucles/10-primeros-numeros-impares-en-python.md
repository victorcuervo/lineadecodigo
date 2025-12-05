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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R423VG2I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjksmcXTor5sU3eVlUc2WNn%2FwhH%2B2fsHwDfdTWQly0nAiEA2uqGIjxpWpNMKxZjpdyj9HdBIx1RA0fvuxZll%2FzolHEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDB0bjpEXcew4cRfT4yrcA1yejpIVct0dDMrAkiBaRJBibqDHa6GqH57Z5nL3a0rBDyFevj2f2iey%2FZYtBfLxBjD5BuQORg%2FAlKgjf56YikFJM6iaMpn2yc1IvEciIQhJoNaz84kC1%2BNLgxk2js%2BDHiYbpLLMxeLfROsjclSQE59GvRb77wm%2BZ33N6dCdF4uvxUUCrYV6bAcBWCAsOhT0nCHbI1Wgq6ESgI01QL%2BJeGWxUTc1mlRmO05J%2F9g6GCvmtuO20ucvPo2eIUtjkfn%2FPSzWlDlsk5i77nTJokwA3dY1HHl1d9nhIsLgk8FVb0lUcq3WJdOXdOm92vqodvCsZr9v26WVEAv4BThl9JZKQ5eQfnbXjI4i2Giw1zmLuh81WtnvB4wu%2B%2FE6pdbOq3Bk%2FJySeiKyBIy258XV%2Bts8JoZYyQXDnqT%2Fg0NuJtxg59aTQPMfGt31oZc4hq35GPP6x1HY%2BZ%2Fj%2BjiGAriiwvz2WL2cXHAaabfxfPb8tUEllvhXtFOkg7qbT3pMXEPV9eiWih%2FVLmhw6iFMQrftGxS%2BqIG2SclU74b5NtF4Fw5xhenslFncrvTdK9m77FLkSnyGpMMq5K6tt2K89XnTp9lz99kRCnEy3YCL%2Bvj4o89dpdEt%2BuslwnK5Mda%2FjbTQML6MyMkGOqUBp30COXbnibzwb3kTJO%2FYkDGAr0x5Jy2vbeSBXBaPadHsgZM3sGNSLXnsibe1kBz4erkDnGpZxRM%2BuHbLzgswt2rKi7W%2FEGsrnBlcUIGOAhbd2el1zkGwiIbCFMOvBp6fYAcu%2B7HI5Q54pssUMbNr%2FXC5sumQvk12AOZ2M%2F7t4K0tlayv82lZxZKRqESXmumBoSLK6%2BZoEU2jVKgEPl0A9eQSwa9V&X-Amz-Signature=17457a84b5ee1e9b71364dbf2094851df1e99b51919ec66955c97ad981fd289b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

