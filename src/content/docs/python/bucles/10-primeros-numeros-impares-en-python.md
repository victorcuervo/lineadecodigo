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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632RF3RCC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC0Pzlzlq02np%2BM4bHlxjenGOtRrXw%2B4xnfZWe8hsM41gIgaNL7LNQ1Ucm71DGDKu%2BvubSvmGtUnbzOzpdD50QmFBgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEI2CwcNG5TvWwLDzSrcA9BEFosBJHcQ55TxrENtSMgk5CipRVhb93dENwn9yyOXELTD5fLfSS3gL%2F0%2B8SmPtfMwB5nZ%2FGQlKIRnhcS0EghK1ulWnCaZgtcRUiiYv0y8S3sqCuF5MAZbg15BX2HrJQ4vnNbPNBFqJekzsyqUbacBbD7UIJMh4OO6tAhPljobvbhVyLrVx0L07cWqw0hAi4Sl%2Bkf2cjtHm83O5hvxl5vqet7Lry9TW2j4cHyuLGoeN1%2BTLGpdsD52YSwOmD5Gfih7ZQ21LSrGPq%2BNvbvBmvQlQxqTeTDn%2FzIoXtMQtpckEPghWhTngo%2B4ueFKkuC48wtxyLEGJ41KgPlgK0gMnT21uHRaYubea7NtwGzghJeTh%2FH8eC0%2F9PqDvwmWc2lzq3Dh9y0HHYvZtfKv0JCDqpp1sGogMw54QTAvij60WcWa1dRfmn5dbqvh9R%2FjK7ZyNwPPIOXO9az95uo4rLsmVFZQzZ6mJ65w%2BonclrRyGRE%2BRVfojxvQ92qkqh7DYKQRUw0F88lg2WPw7C2gg%2BjtGRvTf%2FMjEIQXhbbHYIUMdiIpNvTDxw9k1L5Ty4p%2B4fcnVgUaEgCiCsLbfrO2phr6sQzkUswaBC6jDcfHiGCmqRJxzYsJLX5A0hwIv6gmMMyUw8kGOqUBNAgHaVTaBuEwE3byXbVlWEM1Oau2yEA3mLBKU5%2FNSNB7B7uCUKq6iYOmYSds%2BA0%2B0RkKoBrk6DG8U6v1MRuv4BlVg4KKu2%2BsN3Vod9vy5h%2FQM%2Bs3zu%2FKKhRhZW4jTDqadc22I%2BoakFah0wfnmlu7YofYm7wWTjXK1cIucoIN4Fx8j5B5XTTDVVVwlXq8yAc4E%2BHhtbwtyRhymUSMgZJOZs%2BjvCZh&X-Amz-Signature=0e558d8382021b7bea8925fb51eb7fb096f0d8d236629232a01ffe1341d6124d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

