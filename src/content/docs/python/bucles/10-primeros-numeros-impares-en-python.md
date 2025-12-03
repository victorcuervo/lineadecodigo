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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURV45BE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDMnmmMq4G93bdCBAi0MJrAFrk9jvybIKkqi9mUvRdhGAiEAhFZpNgCgtzzHef%2B82EfasOPpc5qdOzNLAhI834x%2FRmAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPlau%2Bn1ljVjePB1ZCrcA4weahscu48BExyC2xUXs5RXunywINpQNQdHiv3aC9BDAm4cx0jEEwYe8jkxiNtPhndg%2F6vEfRjrh8LGbli1ufIn8%2FdtGxQ1PJJtqnQXJJ0cWTuZaUkVoIv9BtsTHecAtTqJSALyVjv%2F4YZMNV31eFHFHVw7RT%2B%2FdJgodsK9tsdakqCHxueoFAlwE%2FQMdJcZU48lXPyo%2B%2BFWvCfOkyNTm8uXTi%2BXUvV2sGlEJC2mKXpTWoFkLumWItqfl5SrlGPR6sLaE5OAbB9TaRAcdvdK3%2BUcSGEMEOQl69j296RPid0%2B6qLZJPQpoNK0IVAMY3KigSNN7iNDK%2BTu5794294EQR2jugm%2BOYCifY1IWlalfPpB62Q7%2FRn8O3d1xjISUW2p95SJkYJj8RFpH3ggZRf6YWBenM22GsQHsWT5YXQvwSrsEnKNp1zcUvOQqqTcF3TnDEB2VBowHWHM19oTSE3mktrCsc%2BfIj0rrVPML7kogYnsZBjekF9pO%2BW9PSv1JXMe0xsYosFfV2KHIJmQlFsAw17hGfU%2BimEX8LjihdFAXiPbYKf5P0T0E6z2jYC7mmxGqibk0Pkj1WbOPs1OVkxTZHJNkQX4ehZlQDgHZcP%2FrIO15zRV%2BCHIwas0eaM4MMCVw8kGOqUBNn%2FCsfHkplFJAX2QF%2FjvMtnFwMWSrPudT1jYs2Qun9SONf9hRuIxh61QlRnkCEom7trn1V%2BI7Kxe3QBbkTgsFVFoN88IaPeWgWaPf67AnKDSbf1Zn2x83S9tIN%2F8PM%2BYOT06j%2FVRbERJgP1rHWxjo0tcmf4nxdG1GHImwWbs3fEjZFRbtn%2F3Spsq5XluyyG%2F%2FG3xwDryGSokl9mBO5LknM2sbGCH&X-Amz-Signature=acee02651b509458fe5833c3b5c615021cfb7ff98f644f619f58a1e129a91544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

