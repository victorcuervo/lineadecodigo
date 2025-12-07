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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODSCW5B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIdFr%2Fz%2BIDTWdWbK9JRh7b2LXq6HV%2F4FdlCNX2yUteGwIgEJojiOjuoc3bsC%2Bjcpw5MRY4HNXJE7JTKAcEsJ0hMhAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMS63nPws7PpK6KQSrcA3eds9UzTjQ%2B4mb2QShBWP7H%2FHErCzWE4mMwSRvrCq1AziFtsDfYlup5kvj5ABqRWwZjdSmt5lLdOn1aVz8%2BjcMKKPNcC%2F2H2KsEVHmalQuGUxl4r%2B2Qq%2B8Ca%2FaU8HVE1BVLMOsjGg6E5zZ%2Bs7JRqegLSUSlysrn9%2B0zFQMxdPArI3Myl6sVHRbP1GkNK9RhWRnpRyL60EMeBoyyU6MBoQCUZtwBB8VAVuBpS9IO%2FqUEwX2tgJMrm3Qxs1ZmGh8QqY2ZDMjGQXsPtmu%2Bie8KXE0L%2BaIepsCtnuhQEiA0ygisE6tE80cgHAv9Qr3F8Vtdd2lKGWDdRT%2BSrhKwOJpB6Uy2k6dMs22QI%2FQ0oS3fwCBKHeJbtSyD3Ul5rAk8wzG2oUYITfajDRpu38Xz2trXwVj9GHNPjdUxL2yFn%2B3w9YYYYD6ODXV9FEWP2vMY6m0uFSo4AaUQjg3PMEtFG32VCcIhEe1ok1nB28CfGEiw8YarZ7y7IxEzml1NlUeqJXXZVDmy55gJwkdPAUTph6CBcJJaSTz%2FDwpt6%2FClgbYptK63BNp1oy%2Fo09oVpAhIOaZ%2BMkCkeb6ItnK2iB7KIs%2Bb9J2fMGV%2B6uVxyxsKD%2BSAJ8xIF4qud%2FHAMx5%2Fm82nMLya1ckGOqUB3WYDyR8QcOaQ1o28q7PVSgISiX8mVNMvtMpVdX5erAYzEQBC7rlKM5ybi2Q02otPwy6D4wnZIgv5H%2F1tgd623otfPK%2BdO2z7jvmhgo%2BYeUqQZP3THNq55MZgdRxd66UDVC35EV6pP9cR5cMSXiUEb1GeysNmaJeoIdOJGJo8js%2FP77d1CIAg6hJOWKSVwbR5VnHx6u8B8Xrl8zwvqOuIgvJtvUr8&X-Amz-Signature=302e7e111af9f6be1f23c68dde41676e950eb5042f5a23e13e201bac3cbccf3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

