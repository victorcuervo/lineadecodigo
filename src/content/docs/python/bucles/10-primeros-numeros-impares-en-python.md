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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LZYQSU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwx67B2T%2BVPOkOwuRAWCdymdLGfWTuTwzlKTop7iJWzgIgZqyjNajGdJ1LFj9FrPgfuWl5ttAc5AmFQrBJkTzfT0Eq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDL4zxFtdKnsW4o2ruyrcA96iKd0620aE4pXnpZctYvDm%2B5P3dvBYquUhYTPHX2Chl5skT87ZQ0t6ol8unJU37aWEdt1V1OHZRML50vGHnevfeZx%2BKUmdbEJcc4bnjpKGL46O66ncxQ2NNG7Agwc36YY1%2FVUsiSir5WgsD1AVYp9YwzS80pl0AKv0BlYTRHSeKHteGd%2FDMIX06zAie7GHlO%2FBLnPiyBoasFLNXY24Ulit2FyU%2FZ15frcQe9dP%2FkPHCdAvMTbI7%2FwejPy34emuoYQCcRvj2h2Z1dtORIoJZyokBPzvo5suQHvWJbfAtvI0W5figDUHESxhl90XSlQK5CyMDUEH4pYzZDmsvwEPXbkWs2%2BNqG8vhWx8i8OL36VVGFBlC4YQauRno%2FnVOkNMUVcMxUAb%2Fn4BqwYdS3N7hoR6ZPkuiLpOgs5%2BEMqezvWKruNTp18PAZX1fG%2FK5LrEfdSSnp%2B0j%2FakOKUMP6jZsiRhP1jY9AnjNJIGPBnrXx6GEJrsvRGF%2F6dIPv1Apc60rutz6OxIOzYNCYTnFT%2FZOqQp85WeSnGW4c%2BxlSy3qm%2FQqdLBUjXBLuHPKIAE7%2BgoiRcbj9bhXVQ%2Fd1nH6pov4Yxv7Zrz6cFamRRhCw0UkmQuy%2FOjKMo6aLiT0ZDRMOPbxskGOqUBfuuU55VGHRpUn%2FyiCkOOh06vSlpL1YmCku%2FKoHVGv4JX7t%2Bffd4YXqt%2B4DvKJ9cNQ8QDF1TgZU0FTj%2BmaN7zyaDl7rWjoZN81CsfZGOBTqfG3xD4YVH7mH9axbdMNjuJ4R3PI%2FrfTkyx%2BsGKWpPJEKwEQ%2FyB0TXGCNC7WMvpvpwA5Xbi%2FqdVszCkhAXvDimn1DvbkgSlc5VglUK0MASdsWbGc9E1&X-Amz-Signature=0d9b609e1b57dbd1fcdb3ad8e8d687f5bcd6b9d97d68750fec4b328cf2b94cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

