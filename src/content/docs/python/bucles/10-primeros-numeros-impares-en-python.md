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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK73HRU6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBcEPr8hBEQsCyXMPzaT02xQVeSIXHHRDhpY8uNJAchmAiEA4qccapXUyuixNuH8K6gk9N%2Bt7c7wbwhuzNWiOJQblVoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPr6%2BRlcrOWjpS%2BZCSrcA%2FyPyhdDqORu7inuqc5kDUbEZ3m8Amgo5asAibiwWFkChamGzDLiacgH698yEfZS%2F2I%2FDyX79NVOfYMlsZ9OvOIN9aA0UYDcspSgVGDw4lGVvf%2BX%2FK896ZEJnEHLueot69pkmNALB6zoLnbZqt1%2B3%2BD43%2BBdU7LThsQpJzL2v6Jxaxh29FMysonM6edKjU%2FTbGN8w%2FOgQjARphhieDo739iEpoqXoJ9%2Bu6aCrgwmI0n1wgN%2B3jhw2avrQyiyXokJ4tJC8CiALCsyqGUKpvOt0psGQEhq6aDRcy%2Bco0v1DDUG49bCA1%2F2ONqHgSTPvWOX5QBp2sbU0qYkQONCGYabio0219TjBYU3ACCA%2FR5%2BPm5UcZQscGWWtBDijyRFTwKK1p0ISJDyvUTsmPjTFs37kVTp0DE%2FH1c9FskhD3oe7%2FGW1Oht8hJyISj3UKyCvoxzE6DPcrNxPTH5XiLXcvEeKnvztvmFTmAEFP6UB4zT%2Bcen3E7bOr4X8Pmh9QBwW7%2FwJ94XmIWc9GN3KNMrSA0Uyy5AtSx1cn2UYsXKQC83UvuDMF1sxjE7ZOaMdtQWYTgNgTFiUb%2FHZ2fljNDF3aGm0Y5jNadZzBfFR6VYWcVqa7f%2F1xTOgbTVv0TCp30lMM3KxMkGOqUB%2ByVTTdbGwGZSYZ5dEAtVtYylURyXhUETeM6Tb5bsDW7lMHsulKcmkGE1z626cCuKaB2TkoUwu5tFZHlpARhFQupy%2BPe9SQCcLLOzHKFTF0e40vvF0Xt2vc6pMdziBQso84sNv1WXwlQA3rqZ9SbyM74rTm7iNXv9kI%2F5mddXfEc7BA%2F2lhaWGH1VtEnq342xxGcHi2bWSXTMRFUmE%2FfwoxlRD%2BeC&X-Amz-Signature=d957288086c375be3ba3ab9847a11c4848f007bcd66b92781856d6ffc57c8ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

