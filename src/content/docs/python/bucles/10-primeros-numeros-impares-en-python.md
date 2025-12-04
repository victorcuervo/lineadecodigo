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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635OLLPBC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDwMg4hFvLUTP0mC2ql28YJ5tk7XO6lopVbig2r40c%2BDgIgFC8LSr04jAuCHiR3xdeIGZ3dLslKD4EJcn7VjEzDL4gq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLyr8%2FrirYdooiAEkyrcA%2BvKIxdNLnYZRGTzuWGvFkOC9jtMteEfi5YE98eY1YLUitJsvXAAFGH5aumqnGhBmapwPOJN5dKhLsJ3urKOY%2Bsu5cF7UKEnBwAq7zoIFQviZMA8MYCAv2j2B40vRt9ixLLhsSxP8km6J44K2lOqBvOwmxLng3wTh1j%2F0TYUhbjdVmcoWeU4wnxWFeaK1RoJ2774u3wVNTyGU%2BB%2BBFkQeI9PzYWxqsQctxP8Mlv8DKxzRc0gSmAByZrZf0NS0iz2i7CCyZywl9D%2F3YbFVG1WjottzceGA4%2BsRi90LeKOw1q7wlwo2VV2IZyVJ2WxgriX2pHZj2gThdhSuEjQvQh38OzUl8tJbvH5lw9dZf%2BUTzjGWOA0g%2FeeOsmXToDZjqgUM%2BA72j0eO9Wc4sqCFbeIVznj44xq2Um82JQLJef3v11WG9cMvFdfoZzc2%2BKz3ksd37RODZQNAD9mziCgLOhxRFjV%2BLIYaYtS1waIfXuF5yiIk33DkJu%2FvyfGoOV%2Ffpz5xvKEgSrh9lm7QqtOBGQqN5enubgPNGwsCBeTQtui%2FDocnQ59o36jeCOJJh9qLhpn8EllbKTPQFT2ZZzBfqk8Sx6gCboR4LSCELjKpjcT6LM9t7dlEedkpy3zsHPCMP%2BhxskGOqUBiOIlNye4jfAfeOTa55VcrqB7GNLx564gvMgRfUPLdmfwk7EUJu0OAvrId1IRedL2HVOLzD2VOuONsaITjmC%2FVjuLBrgy7Il%2BuWJOm3C2pLE3DuhMH8eDtfCgtHOm%2BH2NQsUyrIBfCMrXGcmZ16vrK7Hvt293azhNe2yDsyJWxR117NPJLhiWxlDnvlPSWFd2A046iEh5zcNEehaHOa56xiIOagcm&X-Amz-Signature=bf1155f02e6198fc03ee08ea77e4d7080ee5ac1cbf48aa0270cc328cdd51eb09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

