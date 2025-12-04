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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KPMBOK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIE5zqPJol%2FtMP0QpGu9n9QprmNeLhswUqJ7ziZCJbKPnAiEAghyK8KN69NRfWYBD%2Fm2qJ84iUodk9o1UlNJaeDnHrD0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKEIscEc%2FvanJWyuFCrcA2pymYyzxORulFl4iD5eLkQVj57FCTvkYUE1mSvfLSRIqunrrtEQN8yArEFfzFNoKWfhit8Rg6zO%2FdvS4ZtWhv4XW%2FgJSIsun160xAWpqC2xoVfX5EsQl11woPllDu6jCKldk%2Fn28m%2FM9FbNWWICCSW3kVYz0HzqOhrFPBHVZFbw064bSsGIcBHkRiZDFiiv%2BqYJmrMBtst4QvQ2T5e2WE%2FW1LeYUGgz4rB%2FGbMSXTJbr1li2ylKfIpQoTub0GRmvrxLLqjH605eQrAg3OvZOM4oMvKOdT%2B9FCFhCIBrfHsgp6YUB2dhmm8emLts%2F2GSc4e1jk%2Fpna40tFs9Ujp%2F10uwwLI35sgip3KHmYJRlkparQhz3YCGUnHndRCIOxLIz318GR%2BkQ9DuXhJt5NA5OlMfa0tQQXu8j1CwzV0KRgdLrDNLjh5hY5%2BGPZ1fQr6fiQpnfT38gjz3%2FOuX8M92Opzjd9Nsz65EA2eBIP02bVYd1o6Ld8fDqJFYTErTbZL8auPKL813XIxF83kfh6w7JOHyJm2vut0VYGHc8xeMui2elRdLovw7UD7qOu4aoCfccLNfLiexZRdCe1ka9CrmzDykZkh8a2curXoDG1sEpof2VfEey6ZAPM8Jrn8LMOmDxskGOqUB2q7fmu33A5lZ1eakwi5kAhke8CyOECLjhQKF9Ry0A8TWxCXn%2F8kE4bFcXvGO%2FmjANF5t5zs0U1ioc0jmONmBv9208%2Beyl95zOjWGpbBjJDrpQqnl9pvUnRtCrP5oOGDlv4FWS9QiJY6W1E9twC3oDjt5xxvLuFviO7dVzAtNwQtbYnmQ5yoOFWT9R%2FAMrhrHrl5dkCJPc8CqhJOvf1QTP4tdpKFn&X-Amz-Signature=7fb6455c1e0b2e1f93eb479f4db0ec53d8c7f92619e1a600eedb0cb015d712ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

