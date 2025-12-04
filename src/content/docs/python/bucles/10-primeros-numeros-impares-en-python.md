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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMRZHH7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCIADIpQJqb4e%2BfNBfVj%2FXz3YCcvzGlRJ%2B3kiN9LiD%2BRAIgC29dYvL%2B1RPNapuTtd0%2FwY1zZvGpTnuGHl0KFoN1uSUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD%2Frxok2qg9Fgth%2BJyrcAwJIUxf%2FyCD9KHkuffdHgK9bDGXiQfABAmOqkEUPMYweT05a7DjI6%2FcfQiu9lmpA%2BttSGcsf5Q7My5dbBpEqmd4gim1PDrKL8%2F2gp5kIKc2Yp1loiVOoKJKFbU0C8hDEawfbL3Jd22gxTIRcrZLbQPPCPz8dlXmN%2FzobsG2MEs6jyW8FmdA6JXnBgVSgGkCUdQf%2Fc29BuuNte7afLVYVlSEviK5Wb%2B%2B8zcTvfRGwUvSURbXvNiApz7ELywhv1NVpgYL6v3spgk73WjAo8zvAM9PhNp35YHcUQFn%2Fv%2BES3nMoaCsh9Blz%2Bfo%2B6Wqa7%2BHRNIaWykj03hvzfyg25xXIxyM5i%2Bh%2Fl2BEx71e36RArwQvU1GYJQifp%2F15cW7Jx4tmOZO4n%2BwXFZIzSkSZnoFntxKN2wQNOT5upC%2F4o2Vix3m7%2BRIhWf9Jq0ga22uk7LNw8BNhfWyMRwRPVPXpqM09W9HeJR73LcG8TC%2ByQ3qAfhOMjOFw1i47uTFNQ62kchsrN%2F5uDtobuKxdKV2ax2Jp6qmttsw%2FC8k%2BhSuUIZd%2FYGS%2FwQsCPhdSazOQU2DPDsNoM7k%2FZ9DdKkWk2DYYzoa8OsFX2DpHlxnIfjrPAW4jSDoOr6l497%2BEEpLgqpUoMIGGxckGOqUBLLvGgDbRZdFPuQUoPjvnL3h%2BSzB8oUggmMoef3rRMsvO17CLyfauWGH22Bryg2A3nRxk7RVyrxDWiQeFlKpcAGoXxiR4q6If8%2BNrW8o5QaIkyAW7hGQB1xclGu5zTke5%2F2DH9JnxnYNoyLrFtgWbD%2BDSzVXHuV9OWwRkWh7Ym5JUnXGjGKKFRl10pBsE6YQwFTbrXr%2BeZ%2FIDpOjyzMZNf7Usa0mw&X-Amz-Signature=ce6ff8bb3c46f46e5b71636449b6f16d93e078a77e5abe0699fcc03db76c6a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

