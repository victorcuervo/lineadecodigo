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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2HOQTL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRAlYlY0KZRpvg5%2FjRgIbPhlHAG%2BBM0Kk%2BOJsmmgVgWAiAa%2BQ2eVnXnY%2F7r6TfPyyKcBrnYq0vUeF8DNwmp7CLQhiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9FoeaZX94ISxuD3zKtwD5nxRqYftVf%2F%2BLNeJsjzcggbhN9SFeT4sPCJU9q9F4VbCSscA%2Fk3bG1V2jT3nbZ6zTYAcgXiTzJD2DR2Qc%2BxB8bDKLXTzhohrkP%2BV65CgxD50T%2BUD%2Fa7AJXCuO9A7R%2FSnetYeQ9EZnKHh7rf%2BZjC2LPTD%2FASTCoohZHEA1AKDX3HJcaGXBXa0cmMTDsM4Cf%2BfVzize6F4xmzk4mTQdVfklEbysB97OaW%2BOSxtTiaml4FbZXUJMUok4TBXjs2mho6vIdP9LR0RUcxd1Tq%2F7z7Ijr6AX5i8kvlh0wW17ck8%2BpOkbF12%2BwYqYa5D%2FPSYQznbnGdldrusANhzXzECGS5KKTxbSvy%2B558JRQ4L2qsgzrx6cKbi%2Fb8OJpboTjq67sNvctTmERPXRhR0bD7UjoymiXGllny627H%2F6tMABxNlvtiTlKaJh6XKveQMMPfLtCd5im5Znjfce48XPxO2wk%2Fg9SiIABHtZA0m%2BvpEtWhUr6LZhodMws8ZgjvdxQBShA1rMW0hnT%2BhWsyZAOzHOHjsWwbi85OXDWZDMKzayMvtshDC3tXpPH3MuJ6gLTbu44ITgx5arZqrEFrMR7qfKbv%2FBkNHyBhzKcv2nkC3SG8EHTvvvvNIH38AjyQV53gw48LbyQY6pgHOZpCbnG6QSnnnFbBg6Wpb2mkMO66sufALYw2LxaeW0WCEFY%2FHPyqrTVYtkf%2F2ySgsp6LLfUdvpLWnQPbJIXNcry5NLRl3Y0paqHSUHWnVr0oQ6vIPnZKDo9bLpfxH3IW1YxXcu5XGC%2FwpBL%2B4Y2lq%2FqHT%2BOO6sq%2B10Z%2Bn1Q9BHuk2MfHTX4HgbmVzQvvi8W2WjfmYa5Fof%2BINQOV1c0%2Fgg9%2BseRmV&X-Amz-Signature=f76ec15cc0c8fcd3c537c4bc81dd0de77031c33ec200df549970d3e1a59480a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

