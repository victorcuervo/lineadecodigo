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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRCDRLN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDoq%2BecXmD7%2F7C9%2FU5NW10%2Bh%2FD%2FehOvYKbyBGVvZwFBfQIgYWVkte8lD8%2F4qFpGb8tsF30Em5JmnhKq81RASqbW7SAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHp0TkKAZe5w8WZ3USrcA1gIE01obVA77Wow%2B%2Bxq0eVUs7ZbMVEFauCt8EVOmynHNJNDB0%2F6bFHLgbbOoCXTKJTIpoa1Pn%2FX0Yv%2Blb2WY942Xm%2F09iv3a79Zdv9tJm81pIBdmF%2FDnqhSU%2BgVgm8Fpdr8YENGKjU2YAhKuWe%2Ftg0bIlk54PLbopLcg9k3OyAzGnl2vITjj4ORhq57E6Nvr1nbvY2SQKMF0VIs6vD8qnLrsuJ%2F83%2BrafydaDTf8W1bGHofkRk22pTQ%2Fzt4i%2FR0RWmbawXRwOARxPS9ZdQ1dK5I3LCERzmmieOJR2Q%2BWORcXkBSCSYgerh8G2XTVlB%2Fh%2BmbGYM8wDuizS1%2FQ4MsNE2W0Q%2BUL3LKGd5Lewqi%2FWl%2F%2B0OP3HM4HAHSBI4BkqTM0zRveXqa9%2BO2g53YJBzWzCstXLEGI2bVIOzB86Gxt13ndvntAzvs%2BOyGYXXsWXQ9QIvpFIyFHFk0ppsR7BuDvy5I2QJwbyY0SW978IArLQ6qHAUZE7n5nRuAU%2FN9N2qJTACLd5pZqD1dgraExdd1DLjTwWcUEW6hO%2FBzyWjo2WxKDBMLjDJsv%2FUlQNRk3k2MsLszB55vChizpNDUW3LgjR%2FeRaROECZYpBJYPDbTfwc%2BrfTcH%2BIlInCMF3UAMIS%2BwskGOqUBHzYV48ZrRnu8wujmU3o8CZEygpLjneG9NdnxX%2FdfsHmjxfFT0zfWnuuTSqdLwhXgJBfEPGNEEgYfUM8vs19kCyElDu%2FoARW2eXQRng1JkSHSO4R74kmrV6fPvnWtmh%2B09xtt0KPkdH%2BJ9iRqjnPVVd2B0vwzsjvUnjCsFtrkv3rQ%2BdclXUEvdXVm1UcPgAhKi6gpvcFyLGvlBZqHUc%2B%2Bds8CU9y0&X-Amz-Signature=63723daf7a32a76e3c424f7f7d2ec4bd68f5afff076b3961c862718fb0459ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

