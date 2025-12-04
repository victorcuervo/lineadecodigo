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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W672IRPE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHOtEmENcHrWuhmhJy6lRf35A4F%2FQxtSaNYC5Vpa4fC6AiEAy3LhVZ18wJIQGpWS5LH66sNB1xqFv1GtnaJWAEN%2B14Yq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJUykSv0Q0jDBMji3SrcA%2BxGDkcgQAdnKywEpwVid%2BMa1pSku3Oty7oeOFD9pzPnESo8jQBK07qmwCtpu5tBGvGdQlwmw9sIaK9qiGpS2UsU1DFLepxHqqqSYuIRsr4IOVaWYzlT1a04%2B%2FUT2S7W9p%2FTV9hBBfWEDpv%2FebMmcW5935LhIv32AHoxgHGL16nZAD017Iat3SJSWKfQXPPu1u0xaBWE4tMsn8ZqgOkfd5nD00slf1Holch%2BEJ0O5uKiSDBAq5iBt7yyFjT8WXFuo%2BJOSuTGdA2DucDmH7gwK8jr2swFvbJ0eGtyiNpRrN1oaL%2FUWfDJQt1ZlxIxI7xHby5rSFpniBfwCxXQ79UrrNctLtGNU7wrGYz5u0ZkY72rRozownzN%2BRgrWf3IReLEhMIyX%2FhTiY0Yv3sf9SWwlwkgncXyB4lRits0eGpwThqIJyUZxCAB1F0W0hhg5iCKktSp1Wm7t6TDKkpFKSbD%2BHMuVBBQ%2FACFSZ7Dl6ICJbfqH7bgtbXOJigQvZr0ohFhJx4wQ%2F6NG56xat%2FdLLGPYJ6lSLGO4gUXnaAfrjOoFIwG34M%2BRuziWGDc9ZwM7VMd1y6ibqZtUn1BYy3glbhb3Y1GBHLDrwoqlagJ7QG2J69VnxuKdS4y3HRu8jkHMMOwxMkGOqUBGI%2B%2FgCTrFLTKMOQnXQd6TD9ET%2BPTA%2FWhocA%2B8%2Bdn3JRdFqdVEWUHAcXyRTUBTmhh7amX9rV425CdzsDjT6RBD7qPk8Po3ZOYcIl2x5a6mqEmAx9foM4G4T9x%2Bh3Y%2B1l7vBQIxpRQjan9u%2BviJaW2X1Sjw2KcYddj3iMNh1rSIVFMDNtLQTP4ZSvov7hWHrCDivMWFKLSqkMS9bfr5PrPzqlqKyHw&X-Amz-Signature=d95cb9ccb6e673a91ba3a30028ee9d6dde2e07be3dfae7d90cbc529699991d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

