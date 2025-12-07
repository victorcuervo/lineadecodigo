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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKVY7U3I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDasmu22c0jrEKZ8Gl%2FjgWgwse%2FhGAvXuCV1ekfCS9y3AiAYvh4WjQ%2B%2FHem%2BU4KJPR4RdPQxjWhRtjcDfYiENwb5%2FyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQAx5auZforkbDx%2FKtwDaefDt7G0LSoBqjfGEW4BzV6zEgoUp6i3273%2F4MfKJNhaW%2FQ1nTTUZaRLM7bZPLvlFkCio5hrk1z%2F4GJThUToOr3BzVGB3sDpA1XciRiUvB5Hlq%2B89aimKru1ukdId%2BEMdt0OgSH7TEzIx8e2ZQUA9Ebaguksnp8V%2B3Lk3Q2LHLpuNYZfxMWUMyU9J38P3oYQau2jSqM3JCDg9zSb1uIGRu3iRNvYA6D%2FXnKbTbOYx0qk8PR%2FXtGcBZxB2gqJmo4l9GajMKhy1woW5%2BCKlUq%2BydL%2BoJRc6w15F8W4NG3tWvY1Vt6xh70XQW6bb19Alp2rpMsOw%2FtdjLQkYWbBkqHrsHof%2B65WxjLJz00W51IqEtH5M3OpavEOGyhzRp4KRFritnzqq722PdZJWN1RTNa2b8YEtgCGmAhWulGKCh74Lj06%2FhUaxjDmHU%2FZJagD%2FQMDYjtelUkX%2BNtUVXSviM57CI9oulVKLt6wEdW%2FeHkKK5EdpmDdR%2FGzBGIqscg2tU7JqN%2BGaFBpcKOj4il%2B8HE0YpnrS8JGmaflbTZdWdsm0%2FFn047mcch1XIii5m%2F45aGChEdGhIM%2F%2FrCYm1ihrOEO1FiBTuPNAqjpq6Ukda0d2PmB20oA4V4aLm%2FwQCUwh8fXyQY6pgHTBhQRdICWXsLOW7npbUiFZ3k%2BMBP%2FKhopKqPFc9NMDiZVQXrS%2FmrGxWGs9kMfhUChMrTo7BnO%2FlvbwhOYIi1XqEOO8qmbDTFMAvD9cXw1NFjKDYdsuiw3mzYkyffiPsDjmxlJugANCnG7HpeW7zI60hGvztsFihgCJVSa72p5Oxo3HVqxLHeQtg3t3RSvrsJcFuuIa7OtMKgKAfAqCnLBOcuboLQU&X-Amz-Signature=dedc4321e3d1a23bf1c307ab76fe874a369af084bfa1c34e5a18c2f9648b9f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

