---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R357KOHR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEOaXfigmA2umSWJNniqmhp6GJzIUkde7AKTtDPf4lJFAiEAr2uLsPBGjSkeTP8BBtQLsRmu%2FnuHwlRHos7axW4zFpQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDETcO6HBGmmhW4%2BpXCrcA6yerEistJ%2Fn6xt4M%2FNPHfQybxdE8l2L2AIoKI2DvGmGqDs4tigfpJ82nD%2FttETprg9UzswnuVqRktR7wfwH26agwpbJ6XjjekVI71%2B5c6sUjRW27ObaLKrLTYCF1QO%2FSxs5plu12KyQ%2BdW4xczuRuceVu89pXd1AMyOKKTGdU%2F8vBjdYNGR8Ytq83%2FgDPYi9HM0pwq2X4uCnQXRzMk3W2e51zaPbixqLl6yerDS3ocStZ2Caw%2B2%2F9u7cVjmOhcUs6NVbeBJds1kh41Jpr1HAw2Zc7c514J7w%2F3YwG3LhtK0AoF%2Fei%2FxPPR0MgpQ7oE1OU1nYktE3hhW960qiw9GM1NeeySjxuVsEalA7ppaWRz%2BsrkZ19KfyXm3KSNgW99xGgGsoSD1yrqPKzYi9MeAewMuRqnnXiqtoc6xCtxrNGb%2Bji6Q7q7FgU%2FWsya1MeiQXEdulw41TncIdghyrfIfhCmLPt49AizQcNtdFp3gEYflNzPeo7%2Fg%2BZObrRQd%2FuByebOsl7C9OStwbNe9XxexpSs5bkjW7tGQ%2BWxmzh0dOs1Z0iO9OrBfJufGjp4mW55X2RMA4Eap88vtFIAnlvm0O351X%2F%2FpCXMFXUNHMS1TRm%2B9zXwTa7pgRfYbWOXPMKemwckGOqUB7BH276jJX9%2F0urI3%2FEOcT%2BRWmrB4gVUISQMP4SEdfiltnFmHJtvzQ3V6sge3psAysoIvHLtpuPwTvu3RvpjVEylet8jZfySClqihLBJyLP%2BcGGwYUgRj6BLlsPYSkpi2Vv56oYqNeFsn0pweVMT8C6qOhwihlv35ua66CsMKR8PmpEJ7Z1kCdfOSWzbY8ZFx9rnDoTQzODgiPsjSF8m04qAIWJm5&X-Amz-Signature=105e3e95b96778df699266efb11536ffd3ddfd72ed0ded01d7d0121ad912fab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

