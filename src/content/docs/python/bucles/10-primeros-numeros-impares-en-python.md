---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA4BNULG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDB3RxRSryx%2F7RgbPOgMMhGY%2BrsM%2FFLTLYOsM6BSqDBEAiBkxE51I1HJ4HGB7D9hqmOVDjoBvkH%2FwDaoQS%2Fxo6Ud%2Bir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMN%2FLABprGJd1Ou6wVKtwDpuwqMhDmV64%2FMJOmEgZSaSyl30BJL1JTDUCcUtvCKy5p2ACt52TYmQUlEeeCYCmsc2VagsnHyxHlcJnMGZm4WVynSXMuHeDpje1fg8eUMapfhf06FNby29oQZ4VQlg6dnCc19SmNP%2BB8ppo7ejOvEAB1GzLjAXephayLSF4w2L3dn6JyoPtugfeGqGY62ZhxRN54y7hoffxjjf5McmHAWqxeVoU3PrAw3mkeagtpuxITv36%2B0p6qDOXH%2BGmU50Q%2BNPvGexLVNsozT2OjLPHsPvWaAnWfMjc8EiKX6fDc0x8H7ARu4OBUoI7TNssTzWn5BsOEDxer260DoK50a2T14tmA3OxvGWcfvT22zvkKzox69rWeNtyNa2%2BHfOQLEehZTebR81D6V63VvlJk9hX2QpUL7ESUkRNBcW9hCoH7ydYkR9Ca8N%2FNM2z7EUy716HQ7wJUF0xdQMNbBPxR%2FtZkgaGrtOGsC6PYtoezijhHJ6%2BsbJo6SM0py6GWGW8EPoA2tCfLCgcXMtq5f%2BaBMbp7brxdvmfvnkONdDg%2FQ8H2Y4Gm0Xk8oESBnfcM0yOZ63WaNI06FDP4VuBgLhl%2FT9KBg6ORfkjzC%2FjEfXAL5Zi8tSG1X0XldwRvWkNAg6cw5NzCyQY6pgE7ZuKQmtYGYyZhzWrOz9KwFhbthDHOGs8xxPreUe2%2BLOanR9pqYEflxSZhTNlIrDuQV%2Bl0pxXn%2BRStmwoaCuWMZgEy0sbNRpjc5nTXqGlGI74ZpXjumKvKYElgrKw5qyFXzPfzkFko5vQrbhkf3Fkx9wif3tAiZw7Yu1pAOv%2FRyyd6eEPiaMqpj4PX3vOIE3yZnOyOyZ9zX0taMX7xWGD3OnjIvKxk&X-Amz-Signature=bae52140a845fd16e72b60e059424415073aace222d365bd52911b36ccc2c86d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

