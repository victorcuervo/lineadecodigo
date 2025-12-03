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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFW2TFBP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCrFI6BmxlFmSLFFKLLFWEbUxgwS%2BZWGNJ3zQkUsgLENwIgEJqlLjsChvI3meiJ5NzmyYGlQ1TAah7Icyp0H%2BLIigIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBUXnfcGtG743VCXBSrcA%2By1hpl0cYP7YIoZlzI%2FKpow3Kcsc5TXNFTuh3MIBbxzUKqBBH8oTFuEaoK%2FV760VjcR66YlwejUkgpmp1I4BQka2gEL%2FL3lLnorcdTJrLpj6Ax3sDRllUw%2B%2Fdxtyok%2FJuTr%2BSsYh6bsRxiyjHA8qVFbuiwkHtfnIGJLJEpNMfWdUO5qGso7pTAsWoacsJgoRVoTJhOviRi7GA%2Bhb8fv7UddUt3qm2Jn7zIcDNLRDobU39cyckc5t0YKkbglV87pfbumr%2F9i9HgVWNpkbf2TJzsgVRPAex73et3OuM0KGmpJIC%2BI4sUSjTjELa7X7L1MPZU78t5WWf%2BSi7sMLlNY6MCoIPQ0cmFNBlXUf5Ys5LnRHhH%2Fhi51lvdJPDeZhBK65IWimKaj91IHEfVaa5VlihM1kD%2B6e%2FwcXYkvjC7kO7ocZdkDBwdbvMdsPhyK0XepLhwEZ7Qv3yAwBluLfG1R7%2BYo%2F7Wjn5gIrTXLrLFVtuC1Bd%2FCHJWrHKOh4yq%2FO6qy4gjcz9CBDxRit%2FZIPpVWQtF72325UHnZfacQkWh5aPZK%2BqoSiOtldKsf%2FYvid2M2ZCKzNn19WVDNIwKCTcR1mr%2FtOLqrL4WofDbfYIzZCdM0V6fvzzthbCDpErmyMK%2FcwskGOqUBgfjVMVD2KPbB7o1A0cw32oMzu7xU5h8TBd43lGIAeD%2F8sYygRH1g4OlpOz5FJ7le%2Bfgtt%2Fh9zonTJ0Xq%2FiDWW1gXGd8YFnXHWZbkwLSlWgGAe%2FFLYmsTaDwAj%2FOnvso1xkxuvga6LxvdNFgtaMZNY3kulhhyXtiYeRS0NwwCb%2FgE5ybQXqSHWDqQ1KDnpKkh5dbTlyF6HM8Y9%2F0%2BpAep%2FHTKQi9%2B&X-Amz-Signature=0374273e927f3d1b0e5d97c50c0103fc67b1035c7724b924e79ec91dec636006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

