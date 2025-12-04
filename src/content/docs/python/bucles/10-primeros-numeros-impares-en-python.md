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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXMJTG2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD9uXWEZBU8ONN0uG2n4SLaC3A%2BdY5TANQnGL4JlP%2FYLQIhALEyzOFXH82ouZnjf21E8vN0cyAjQ9Pug8NB9hqRag60Kv8DCEgQABoMNjM3NDIzMTgzODA1Igw7BqxOjOAiQVOXrawq3AO4eTLXBWE4ui96nx3Tv5jSu026HYSB6rirdQ%2FOahCM0J451jUdTdu719XMACz0N7xdU7CQrqryGRqJx79UmFV6srATvsGY0ln6tajnDLIwStBP9fJnMI0K2Admj%2BwzBiTCU0DNsS%2BGXQdQbRbMrIN%2BVwcFMX%2Fq9RYbC1AI4LUpvdgxCMdWf2SxZqtv9h0w1cZBPD%2BxOn4BTWcbIQq658Do6qtQQdPOIsPIB4jn8dt%2F8h6obngWPqHeJvu%2Fns7jPXjM7T0Awm04PfppIdgBwN2wNRGEyX4oPGVyK1y5HwULVafMp4mSK8%2F20DYfeO2td%2FPCvpHrxrhy1wwDoe4xdXdOoI03phflkmBlXRDPS30D%2Fh1IcFmzt4C6X2ZJrhHcdesq2Cfi8mpNK%2B%2Bu0XVoavLT%2B0Y4%2FR5oqxYj0Cw7quxqLsy5CmXyreACzzHbMR3WzRRroXTPX0EzBIe3bzt%2B%2BHnIphx4RQTcK5hg%2Fd9UEwmoZzrQdl4xaOUpUeornfqSSVKPSOvs0uwA5YWIJvWzDeiqlwgLW3vzNDK3m5dZw8PXXJJLUHcwgsci7WWqWxMyIlHU%2Br9veytXgDQdx90PwUXpaca16HMkRgejMZEi9jODIdRwVVWa1NTNx0O4MTDovsbJBjqkAWa42G5zCjPAJ2FwW1QWH2Nke8%2BHGjNPA640qvSdRECqiNmT88gSPqIyp6HjV94Lt73GGqYN2xpwYhKQNn05Zb8WadmG4R3h5rbIQAkf9aZROf7jbTagljH70ynguEyPe0%2BZiH1VGlWbaQynPOlqXRPQKd3rFLRvJxbo9PJj0jABYTaOe2rBSrNF4h9kfvbG%2FNJjS64SQpjdc8bQ9u%2BVxk3QLXV0&X-Amz-Signature=2680e1dad41199f4b17db052d99b40164abcb150c3cd0fcf9bb7c90fc4f53197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

