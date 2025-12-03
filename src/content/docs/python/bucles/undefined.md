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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZKZFYP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCT4hzg5XViEDiUTBS0Iw5SjAMi7L%2Beh6z1Sw2k%2FetmWwIhALb157BAMx9norbvzOdqPjDBXlc6EK%2Blp8oo4Ew15tKvKv8DCDQQABoMNjM3NDIzMTgzODA1IgxlBGWyDV%2BaW11FxYcq3APT0Alfw6WN6QgCxbF7qyxM0BOfp%2FCSJLYwd6SwZXJCMuPMCSKyp603dCG946gcDxR5g%2Bj%2Bxjcw%2Flr7IZFOBtm0sRGpPaQ%2BRFhdiXsMdlojTx2TL1%2FBBzcnEcBFSQVhnFKbWPx3nnJZp54fXV1LeY9JqtuWH1PVSR9mShWaVrOaGq19X8Tsnpk1jcSBza66UbrEpnXWlNhvspLnkbCWx3rqWz5v2QUw3RgmKDW2yij%2BxoAXt5r%2FvUDq8hkPjh07VIn7H6c68eN6tGa7tv53uxDk9Pb%2F3UcT1OwKrJUpYXOLzjKihh8EGGQMfCB8rKmiKfQNFaV4zUJkny8d6Z7Nq5TIN6Lwcjd%2FVCejF7MoPolkbbg4iXO0JEBl%2B%2F82%2FILdbw5KhN9ztfAqm9aotT1S8UiaaAKS8zTNRcuXoarFxHonpVp8%2BYbO1njlqfkhD8XRfeUY1O12Mhcm7FIJC3oipJQKcNpp9r6x0GXyrVSFZosT1%2Fv3H9TmGW12EP9kyJZHbYQvm%2B9fVA%2BE%2Fp%2FE7NH%2BB8utwKsj50F5eAiLHoZQx0gSMQldOkrd21QAiq9%2F631PxsHGPPsW0pdUE6zafOyZbyMDQsCM03lFLeeVF1Yx6wnFhCMSRz%2BIThEJ5A0egTCykcLJBjqkASi4AlvoSwoPPJkv8M0DQj6AdGLzfLrJA2N%2FsJMAv1%2FMw%2BH5%2BC964L3%2B9yCkuM9eKlZaRQnxFVufh26B8d%2FyPfK%2FhFaCTYBZ8ah4Y4GbecrunC6ePx67JI8dM%2Bov1y5ki%2FdKDHJL%2FWkAqCIftrHqzcVugFjsbYAtIOrTKDp9Vem94PMWSkz7g2dt%2Bwh2Kd1cBmmz%2FNCm%2B2CoFQPK62tKFsnSdEYS&X-Amz-Signature=8f1ff7dd6606ab4f64a53d10e85d3e9d678ffc9a291aabccfb1d06a3c9c1a7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

