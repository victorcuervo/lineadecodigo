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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D62AAB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClRFJdIeZ077ccpqvLTW66wdwh%2FNzLVEZKCrEXecIVaAiBCDiL%2BAarSs%2FzQLqi41wftoPzOvS6Leb4%2FIN9kZzuCgyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlefiOJuj1xrASkt0KtwDJFQf7YZEJChf3uLMn7LqgIgQ%2BF1%2B6G%2BtXQdgtbF3QGHwSO3%2BJyPoJRE9k%2Bpql7D%2B0nWf9Wnczj0jXzotnGUHDdm%2BZ%2FBmf3xFOPrFZHnUy3TSBQ26j07%2B43a43n2CJmGD9TlC%2FGtJ0AXgZ1UMAd0EnJ5zzyX%2BKie4KJVkunmYyZseDg1vBq%2BLrZoAlVXCFuv863mah7i0zqncdeYsBSxiDGC%2FYdcU%2Brm4xlMrKzjQIFKDda1Spe5%2B4dBkgXJjoc08fu9cUvlWc7Fwev1Er%2BNb3i%2FG%2BEsLzn77yp2EwunBHblu%2F4PpmFtn2OeLaH1NRW7Pkk7l6pyXNE3Ahx6qGrvLMHQWBZlaAui5lAXzYOCW7yaiFNgRupGW7e%2F8N5dfJfiDbsBjqWD5FYc6sQWwCevH5xk6%2BWbDe1%2FXUWEpV2AxdZIXSaC4SuGILsdCMs5%2B%2FCLXZyTJz7D94YTOItayOybyvU3NRtPFPU8a0Bf%2Fsr8IX8%2BHVbv2g1ib9qOqowSbJlxuZ2hI6HLRYX9nJ%2FpTOQ0ursghHd1OWoPnZc%2FVIA%2FcVYwt%2Bi04k9TnClr%2FuGkPsSVWgC4m2PrtDX2idbhKJ%2F07S6H8chdtV5dlII5UPJbeeIvGk1ZAo26lviUV0aQw67TWyQY6pgH65yi7VJIqdc2GJ8C%2BH17VVPOjJrknfxzW3tZufy1Cfq1ioBCVM82uCCc0JIVKNkFCp3I%2FPN66z%2Bqf3OQX406cZVTrBtZG%2Bo43cciEh9JkE%2B1yUD67YzIqfRuvrs%2B5fVX9t%2F5TK2KA%2BEY24Ugo3c97%2FfjIZToGJRgpQ5Qw7gXy46xJm6qYuO6%2B4%2BK41Mh7ylDZiB8rE2Cmk80bf7w5OpuaeWmak6zU&X-Amz-Signature=19b800ad866d89ebf4578b5487616d733aaa4503f0f5ee4cfaf0ad1156592b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

