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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPBLVNW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi6Grmo64AlHJym4igvj3Ap4P%2F%2FfOquv990yJkG6k1oAiBmtmkTq23fUR%2FlKJ8cGql6PO%2Fqpu4holtUJ0mh%2F1%2BWHir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhJN48J7mSD%2FJA3HJKtwDgcrjQDzp5wih5nr8fEKEk0uj%2FvXbsxd81pBJtB4lr1taKbJwBuw2vVrF4VcB00GnwaQ8s2a7MTkbk5%2BBAkkDW6gsHBUXmvRqX3VTvmz4NWmFof7LU%2FkksChrP9U%2BLyf%2FrujLZKvTp7j7lE8ELhK92dQXTPRKNiZA54jFwsELHSpdiRYc52x3jQwwA7sy%2F%2FHPS4WirU4xHznVa41O67nzcP3rpkarbeEMlw05K%2FtMSXIglaXGFVg%2BxjYOEHGOO1CnBsvbIozaFnvGf9uu%2BCeaZCloF3EenKQmaVYKGAphHMO1GfC5Bo%2F7JCwPWZ9pXPAlqZh832sJXAlDui7ojLzTS6K86y0D1GDpJpS2dSoxMz549Nc7pRQYkdRJm8kG6b6aAt4W1lngrEtK%2F6T7b23y3sLQ%2FTdOjibZKH%2BcxKSgFDkfM0xBgEBcHwMsK7Q2lYUUMoJfafZdLW9SxP6tg%2BlN1UWvcGmXJybOZFAmRm2IZyAg5OkGXVJt6vXjjG5OG7zFluMTycT72BJnb57e%2FHqn35gtzK86cGvUeG4QgRDtzTQE7qiiKFzm9RRRlEl4MITPc1reQ26duMQsUpmAOUOb%2FcPRjTntnCFLeV5usABMCXKfHx2aK%2BuBGpgb5MUws87KyQY6pgH%2F061ZopmzmcGp1O%2BPMpS6OW06EH67d3BX1IlBgYiEvWrVBlEj%2B0u8TEmwF5Z%2Ffw3jxg%2BdHVan2VTcw1Q%2BR49iuYEj3Hx5EfDQJJIjEGvoCF%2BXDpOb3RmzOG3crykmLpH%2FopQW9ZYyMZwYGG0gTnRBsgjYgBISxb%2BdVS47FPH8CA162KfnG9S2CkKonoP8g%2BFk0op%2FgN1zeSPOIkggv9KkS58v3800&X-Amz-Signature=0875a747da67a4caefc7b364cbc2a30e499b63eddda2cc5930d819b90250a224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

