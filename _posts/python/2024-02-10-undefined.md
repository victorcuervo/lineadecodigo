---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQ4YGMB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCPxUCiE42AXIO7ZOMxSppndrUPHHlNEwnxCxvPxeAMrQIgcS1q3sW50KXpNp1QuktjDGkKaJ5e%2FWKAQzIzdu%2Bg3k0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGKrxIiAXBzdmM7y1yrcAyv%2FR%2FNG3lMOlJ%2FlxXV2BRugjrf5SQUr6rEKh3HXhFF2t6hXAvcUtUlyKwKPcY4CHQhxm6X3GG4UHB%2BLjKd48LnAULNFMwXnZxnbA40%2FHKN5t2zzXu2R3jrOzDIfh84m%2B6fkQ5%2Flzgx0l9SP8eXuL4ppfg0IdM8qo73nJO1JCTATzGBBKuaFVvWkwBmrMR%2BH%2FPUCYj%2FDEsQ0mBmvRBBAOAG9EVeY6pD3wSFHKFu42FTYSJ%2FKc%2BxBxQ6r0sHIdu3lV4WKZ2ukFGlFgFM1mMEViXx%2Fq8CHipb2GCqQD6%2BlB%2FOKde0XNkwRfrwPOBIsE25QXFv3DRrHpoYUtjo7Px4srq5JECHojAD8A5TAmRkclqmFPbeivjUo7D8Wz8cP8o9t6zhs9SUi6PpIIOadj5H5%2BBrEyIyZQAKYNjBZTIRnmKRi%2FNMieAP%2BnrcvgJ85Av1OH9JaR1ibqv3yVgRIvsPLKUlAZGwyLFCB2RKcByPV%2Bv3hmARO0v1dwy9JcAPE0szAdFldHOZL4XYDmidY5utWfPMaN1PdcpSt1831xn%2BL7MhnZAt69l%2B%2BqeSVSPIX3f6G4Q3doYEYPH9IqGJDD3Osp2ZO7Rw1LGNZV3pYKVvVAuO5Ueu%2FztRZPBCxlSrXMJWuwMkGOqUB07XkNG3FqcZ0E9r1St6LP1grcJpd11twOgnzavwPX7nAQON37Tp%2F5%2FlA22hZOJdgQY0RQjunsIWqRcEFxYQHxPZYI5nJDMF8UadkdSyfzcALcdo%2FGDKDQkspKhi4OhP6T4WSRp%2BgB2i%2B%2FlvoDY50yXIiaui2mUcFHFxAWpGATzRQaWbNL9aqF%2BtpoC6REMAx2p%2BzSD%2BcSd%2FQHOnkCe28YVyP2i3r&X-Amz-Signature=9b078e176364623b7e55ab5f4ee74bb019952ea72e4c2ab5431c5f339d779654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

