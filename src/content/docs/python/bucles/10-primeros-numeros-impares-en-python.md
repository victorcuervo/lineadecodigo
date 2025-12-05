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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2WG7Z33%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9ysD7qo84KoJKdngIqMe5RppqdcuHWQa%2B8sRILgyt0AiEA7gwqx6t2Qo5UX0PFV0ZP4tAY%2BZaiRe6T3IlH1odQ3l4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPCo5ixj8%2FYaKQInMSrcA9y3E0NHvKjhea3AlHe9sQK3HJUNdU9l6fb0Bdqhpo4TJ32oCD6myYROibGE15ku6Nz%2FBDMyiUPVzGf1x5dCRFxx1%2FUNCA2NVNfBmHmL1DJjWGJhCUVrqSPTLgSxLX9%2Bx6gYOScMxwZVeHcI7LgvzxjSu2lhC1zh4PSJ0VOzmPkZsE5twfMzqTGogTk4ywTu8%2Bvmt8asNquUY2mUkaKNQHsEgtO9BrzISBQ3aHczGI6B6mkLMHZp%2Fxcna8ymjkUiKURsuR0EKH3bU004qyG4uESBV9eL9uwFMrPHkXX2skdXKxSZFs9AhDXxqwKFDuTv13ATpyMkWha%2Fskncr5IWUsrBWixdrvWN8aNWwFhxGoHUPEtaesOEzBiVh6QRt5jc9JAnueYDVe6c4XVAaa0nsFh%2Fa%2ByoSoyBW8pt01vMownSS%2BsQJoO8cFXQnvGdFIwM1YhX1OG7y8EbRfb%2FjfBDpFzRdCbINxVMPcZkUjaqOMsvnFhAiSN5Koy5Lj%2BgvhnMXS1DDKIsEKFMrcdccp63pDg1aUUOPOMef24yNTf15RRFJT0L7y%2BrxBlElaLQ5T5bxrKaED5sbWvgQpazPFzM2VPxDZJdayAiWk1tDIJWDeGSEMfQEbc8jp%2Fww8CoMKCMyMkGOqUBMzsPrI3gNWfljP4f9bgnnbLU30RqJkMw7juQ5DkNRKRkBQ%2BMk5w3OIuqi0SIuB%2BpOUWxSLL0bYqPthhtTWgzJI1OZJ9mCpSrpfE%2FkDulzN5AjTfP04TqKabjPBOlnCHSf79lt832pOx3pBrcwck4LwPOJggphD0abEPajyMjedp5tjpVP%2B5o2lEGJqMduW%2FlEPc%2FzoyktFk%2FvSf2VDUPU0EL5NDs&X-Amz-Signature=cdbb625f2ec50b308b9cf219f9e813b1648fd5e42f731f45b17e04d4d9313304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

