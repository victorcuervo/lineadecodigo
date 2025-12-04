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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G6QQ6FY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIG9tR9i2bPvy31Al9RionQ%2BZkcbv8O6yTXZqNNqEnRHtAiEAvKmGddu8ArVUQt4Jk%2B3m0DahWjRv%2FlBzS9B8Efhe%2FX0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNQQ%2FmCw7ztAxn6keircA7n8Vn5m4K4aQPGFDqaobfsnTSNgW6vhYLYlWBC%2BMCPjWF%2BLS8UQENDEWzfa8jbDd%2BPZ%2FOGbzO0yrDcs0zppSbEmM%2Bsyzl7scFLN0UBqs0sUq85IkKpqUJMB5R72YDMWjGtC8LH3sJSh54udPbKs1MawMbIvViR1t0nYbylIOmrulhygjt4Kj%2B7Dd4zMCZDBsCSBASK3CbztYo205iZ5HuDDjYSpL5MSAG8Uw8nWtZnBKvHoA3UL9j%2BDQrrp1R%2F%2FDzzpSuWPmsh%2BcrTBfzIvJdAHzi8YOt5OqWK27HsvcMDvKXNy%2B2HqQv5qWygYqk8vStXd1H%2FVOabOH6B5UIxj1dr%2Bt0G%2BxFnSRUmHKKvUV68AxoOl6dW%2BkbkqbN5W6NavrV0pyVPTkCkVERlJVmKYTLIk%2FtKiVWkB3l6yfmd2CIorFB6sNbOVZm16y%2Bjbf7wuO80S48eGYA5to3%2FVEzYf6YDS%2F7zi3FSESgF7i7zUwG%2FDI%2FjEiQW9TUXCKMXUvst%2BVVCN6zREedfyodS8WX%2B9hzSrAIe1HA3zL8XEvtbq8%2BOQNUM7%2F2TcZLvkTElKDKjF4JgloXKAjaklfY2eHhI8kxu4wNls5W984HUZZGXAkRfxqYijyusIa2qtx4FnMNyuxMkGOqUBf7bY6Zme%2FMVIAByIXXl57EoivI0xEeuRoz6fUAFOIKt6QJDybLDkYXPiGW3MFQIHVvQF6%2FWd2gRaSrdzlHahwZnRbokOFfqxpWp9i8MTaLJHQ2E4juT3uW6zUTCmRWgl5Y1L5rOJWgpyFKfyv0KmUGGr7mN0fKQXOzL2b2A2MSzZiuvK9OSl3a97%2FbsWTHCn59eix5BSEfUYMpoznL%2Bjh1pL26dH&X-Amz-Signature=3c2bda566d497c9940198a140a75dfe95c88e2652e36fa2d4e84b9e780b66ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

