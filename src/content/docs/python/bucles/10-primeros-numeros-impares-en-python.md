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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663QCLLKR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDfGmPoFtdSiK9SgJBTjXaP2Qk8Qsynfuau8LWmgPLvAiB1%2B31kkimDps1YceRnPrJTojV6WJA2aI2rKXGoQMBuICqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Yvqxv42soNcFocmKtwDqIEqxxaqdvaGQ6c8pgWjPxvaZDDBODd8tNWT0%2B3L2pWOvgoJ3CoJdJljx9Xa%2FKHacS017iIdNPIG3SFtBjgJR6XT8xI7ZXiLHKK0HRCFnBBZP2hMGE2Zex%2BNny1v2Jl9qYTIb7E1qPtei95M3Odc5DfvZ5G1Jrt8Ez7xENrqnfnU1WELPVNU62haK8omRMHjhMEBFDERNasPbnEOqEgBM59LuTL600VM9TvNXvpQow3OxM9yg64eyWgESmEFDgxkDh96RGuTIK7G2L%2BimEy3L54EpnWsnamkOVfRlurnGY7srFvM%2FOW6DmCmikh2nDqk5%2FbLjqlhtiJSuiWztoNzzAow%2FJylb6dPJ3WcwuhMwGzocU%2FpCRrycsHnVwtOWiJLmt9KMd21Bbs%2B36bLh61FsDPevgi%2BaBIRUqErdP1RK22%2BtuFff%2B2XAhh6jEChS3%2FKaxk8BvfdQSttEC%2F4DlpVd9a4kuu%2BWz2utEGP2C6JXDvRWL4ueXIjpidRGPs0eKwKq6SQkG6k7sZMwSddwCTZ6v70V7KH7xZ8pdeiJETHyAwwQ8cnDwm0eDsH1ONP6z%2B9QWPfMrVhGw6y9g7dYtn3aGK74EVKPIkkpDqGVPZFbx3XfDE82Ece2zdivh0woO%2FYyQY6pgE%2FLnj7%2BkMi8YhYOuuZK97WVG7yBRLLhRRV2gPfVExWNOJQW%2Bu8uW2%2BrH9H9xSa%2Bh%2BL6NFM5edFooEoMO3cLSa8saNEwnE%2BKQ5k0LH389EUykazuUb82aKCY%2Fp8eQLXReMx2pnPC5csafG7meKeeWmJqc8KAVIKR%2BrIU%2BvwtV%2FWReAuL1JoaFHrKLQnomtxxDIsqpffOu6nTzIU2X58eNkJTmPORFFu&X-Amz-Signature=628746357eb62a4fed41eb06f076f8c075f264b94d9eca2b2212b10ceeffe635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

