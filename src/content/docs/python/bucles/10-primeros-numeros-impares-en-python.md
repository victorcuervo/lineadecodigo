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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJWZLIF5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUGb1jMX%2BirPQDRLa7nYa%2BR2MtvOKaWZt4Rl9RnXH1IAiEA0WaRCvvdMzmKmn%2FYH4wLMSLaUxdEm9E4KA%2Bd1pCQo5Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOOfC9cf4E6j5PZBqCrcA1qCXF37kykD5TMyQIgn8cT3EsO3YKFoohdANAZu2iJPewa9lF8vbccZW%2BWd80ErXNNlKyHKX9tE6z9MVdRqQuZQqsaOtmgGWjA%2BJMyKWB7BMKXQgsxdezNuhPtK%2Fh4Rk%2FSTyFlxLRF2fASJ30heB4TU%2FzF1QdHIsZpy1nRG2PS3X3%2Ff368vh5q1t3YVshf0WtIzTbbq7T6eBsfBtTJt3A%2BaaXQdCjtKUZxJGsQLGKacNIvOIdBG13BNmPqltQd5TXO%2Bg%2B47uPg74wFoeFceFwqnqqS8S82ctYVSIcU%2F%2BPRttT54yUVDqF7%2FHk6hcywnlxbLXxTN7LUebiGr0pC%2FI3lu5%2BDQJSx2B4us6B0rn%2F1eC4yr0IDJcOuuMjILfHnlCV9Tl%2F%2FAxHQ7ImrThTzoV2JA0sfonMYICUIWj3uk5ABTPXJq6VSktRIIzlOprMb8iUG61bKUWDj8VQCleiU92%2FlVrEvDFtBWmaNi0GAu20pT7MQVrnu70%2Ba3C8VIMmO3u41oOZjJu6SH4HOQr1WKKtPmS7AE4tCoRsMd%2FqZHdDxd3R2UT5l44MQBc20gXRDlNWTyqM%2BplJ4IHPjiO11LS8qwCd4zSxCQNCEG%2FpUtO73KiUxoFLptsykOZyA8MIDrz8kGOqUBJ3AoyoVlEmtmKUVBJX2dt8a85HDCrc%2BNINs1wkydtDUGd5YmydVcY3I9CfaA2VMQJUrJ8spBkgGjt%2BsJqqtiW22wFw0Zr%2BuVeIgb%2FnWlmImqdOqRMZ%2B2YB4nmzRh%2F8GqVs1RSYQ4Y9UbmLTJe4%2FRyL8k4a%2FeLR85Q1sQuunmLtpn1tVI%2F7UkTZX4mbFyGbI9RR6SIWgwlZoC%2BUm8oWqP6rBUZsoV&X-Amz-Signature=142e3aaba810d3a4e38ec8db6bc0fb3ba9dd36d900e0a678a3f275d68c54978e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

