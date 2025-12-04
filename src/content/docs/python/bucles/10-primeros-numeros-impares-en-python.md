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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IPHTNEL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDSMCofCiR5waxLW6r%2FzXVuPNcaLQJ2RElT2E%2F%2BaVicDgIhAPnnxINbiky%2FTFA1hS3Wl99fm%2Bp0wUMoquojqvcvg8rgKv8DCDsQABoMNjM3NDIzMTgzODA1Igx%2BpEm6TWNBrFkku88q3APTM3C74ZaMOEnFdU5%2F2R46SWbbAbFcyDV16vElcZb16ocsPs5vC5VYDdZSCZXjmDuT9YiEeogWVVSD%2FVgEHDNYwAno6zvXlEoQ%2FDYh3y3gz8sJbLsiURBKdcEIfUU%2Bwz9%2B7VSKA%2BcEUpIuafj0q7DQ6cemy05QjUuppS%2FMO7sO%2BTvpolcDpMhtJ3ewSVDhEr%2FteMxSlZpGsC0kKJZ3uVEvBUBys9u1DMY02ZVL5vB3hCzZgXuZ3xmxvCZ8FWfrwIy5juU%2F0spqMXwIjDX3p9pY6%2B3o0oGn%2BI5OXYVHyUev5ardDw%2BQFkhTQMdVsmZcObrh9WPjCsTymBlr9PzuE9Ly9bkGYYUZHbPRqtxuRG4t3mZvUbZEU%2BdsdKZ2u6I%2Ba8wX%2FSmohUdDWR%2FCMtaVlTjzWwbo4qdHeMqnquMzvC4WbwmUDAkUvdB%2FY%2FxRA8tLFKquxbUnDkzyrOBUV1bsm1RBGIwlPYRABEEByNkcOncAfzkQvn6O1PWGk8KGG3vX72QD%2FRbIgxRYMlsWk2%2Bw8xc3a3MhsJRRdf6rLsQmm%2FNahp3SRHkbGkHE1y6oPUU3HZNDV5pAk5N9Xx8Qd4Uyj%2FzwsH6sYIhOB7hb4le3INPlzVmAlPJesiCfg0t1hTCF1cPJBjqkAWagA4M2rjo%2B1vNgiPbgCUbPedGYazJ6y8ZeiVm1XM6%2B4Zpv4wJu4La6eaPWm77lYur7F2stfe3cuj2ByddcULMndntGZCL0UW%2FiwUxpsa3rwWXzYLBg8SXQHjBg4Dd8NgU8OtItJ75GapVvByRfrrJbzuf9UUoqrUr%2Fh7JfjrovJ38T8gK8NaDVNn%2FuG7wZugk%2BJhUPineIopn95ptsnKyIBnK8&X-Amz-Signature=ff3917cc3fc563693913026ed8f6f1fd5bf8b982d35a56044cd02bbcbd9efa0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

