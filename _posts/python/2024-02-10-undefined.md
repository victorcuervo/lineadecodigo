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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4U37PF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDuc%2FUE6oY%2B7CVrUgQ7lhFfqPuLW8Klqih1%2Bu02sGq9WgIgLPDc%2FxxX4PYGJsbE7wMxbTSUNvWeLZGN4go48F67%2FLkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDL2MTfY4vq8R1MtKPSrcA4K4pyw4HLV489K80RLK1ZfN96ez3iMmj4OEzECJMSkwyC4sJ705k2tmd7fSRE%2BFjpyugAkksem2FfDNfvTSZ4N0pjLbAFKQ9Xa3SJwJEuJ%2Bhn%2FMBUaxC6UZVbR1XtuHzvS5NScbSmHLI3peCjwdDEtwK6OjWtyLO4xRtj3zF7sSOdGsLbDMW7NarlR0oUlF%2Fb6oJvitETpoYaFGYHhCf01U%2FZDg%2Bohuc9wgpbBRKA7HwLeWrv2450tfBgq%2BSkPcrJz1BZU1bBVWW9%2BY02PIB%2FlRL1BGhq9DLOtbZQpIdExfdimI9UPwmbrUk0MR%2Bq3tK2IchjqlDy63agvii3ucqXfxwjUVn1%2FyacPgvdB7bd4YVzsle6vbi7E2hcI3AGL%2BAOefTfDXTm42GRWV0nYvIMXBLXMBxnRcVlIgIukeMRcuRdjbdBbMogynE43wq%2BVJVRZdXPhb46ykiUUpxyJK0EX5q3ty4reGF7DPuzd6tKaYJz6DsrhLnI%2FIVKitxhw%2FRW7gzEFcl36jDDlSDI1v8HE4tCZ8pepCCjFZspd%2BDcktjjB5IHrMsF0Vew2G0fXif9CV1%2FswY17lqtAtP9sFF8cjieKwrxLlTPlraYZOzIDv3YQnLJ5VKFXYjztpMJrpwMkGOqUB%2FdIlGMj2sz7RZgbm7LDITQODrAzKWIDKHwyvNqy1F4%2BWaZHRfxoTEI7bG%2Bi%2FL3OO5363t9tDJSgGpyp4FCdKdtru%2BjXUOUgs6EaMQdnZPd3%2FAuJdWTOFiwbWMxAJjEqXy%2F3kNa7ijIHsHUbkuMSuuuR3EMCcvb7Ish4GOE4vRnAMm5HZo4DPzhfqPNQdRAPfN0m0jLRvwsW9nVoGerCCKw%2FT2pZ7&X-Amz-Signature=15b019af4c5c44179da75d50798d2880797aa2de205f17a99caa246dde6a02b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

