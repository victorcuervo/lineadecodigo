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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSS4UNR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaxKuGC9Zg1E9fgvFFTYViASFd7ctWYgDurNTZZdR%2BcAiAeDKvmTKn6WMjPpqxbodAkrNloJlqtkD%2FabZ2gTmt6GSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLdAy26GgqYOIg0%2BMKtwDj4afib%2BNjEm7DkJBotczZoqA80rmnuSYpbslDTiaH%2BPkt8uQylM66v2%2FPL0wJoVE%2F67Pmqa%2FTcvvdvR%2F4oKa9SRqQGoJId%2BhorEP8MV%2BtyfX6Wsk%2Fpo7iUBrh%2BUnmLfwIdRa18PlzxIMc6TAY9FIYKLXK7PSrTGOxhncqwabC8Hne2CnxKno6k0HwEY%2BWdNfbHYCBD7XJaOwLu09GG8OpV6GQzeRes8ZCDyyafzH%2BYtPFS4MHobwXTSIWCB86A1U9NQfnB%2BRMSji3jFrnDmqFB2mREeGzotqxevWvTOe%2Fp%2BLSej9%2Fh8FZk95vkUFu5EpomqVcMVC%2Bsx7uFRtgoRAMFEZPqImsP%2BOI1HYSo%2BdeV7HgOMCIdtaPy1SAdJeQ57P3vceLzj9e43BdDPsSsJGPhyMtszeeyAff2%2BV%2B%2FO03C0uhw5dqWQ7d9O%2BmMKW1Lq9sW7CWx5QSqYOSFKOy%2BJ3iE36Rij6Xf3OyGlZail4tc3CJf3YcAJ9j%2B%2FQ%2FK0Vr0xT6yNjJXVUx00PUagA%2Bw5qig7MHh1a2FIA8sHYtL28%2FuHqK3o0f1njGBCQm8JAYNu%2BzTYII6FdZAU0%2Fv9MGMFmZzlZrtaKPD4MyPAzUcZxdFkZBBzVgV0UeHUcytgw6tzcyQY6pgG6iTrkERH8ZJBiASHrix1Jzwjqz47vQmoywYTl5%2BwUR%2FPOsub8Pn4EDiL7yr%2FLZrWWYEpx7g8Is2%2Fefz315Sam8eLatGiNiUs4L%2BWYeFfnNN%2BFIO81d08eX2b57%2F37wfy1JsksH4rj0Wo4ASiNVp%2Fe4A2S5pol9cJysNfeeIv1QsWGPsPfOdiT7kNjaFtBKCJBTNWcIpIDb8k7Td433QwCfOakJGYs&X-Amz-Signature=8254359c62fea1a1c3c0a9744188cf879e9551876a56d0f578358c413a26074a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

