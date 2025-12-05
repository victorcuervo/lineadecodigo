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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQTEGC4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuAlu7Lu5k62hbNTeTBwrLBqWhWXBTiEpp7%2BmouxHbAiBJANp4YvFfWwNZr%2BIETm8BNfN%2FrxuSQvrBVbsNw%2FFMDSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMogTh6yQDRDFRxfIdKtwDSpAFE9l4QnLLQdKJuAgde5AvQ4j0RH6AtntZbVRb3cWjJha8%2FeMPFA%2B2YialCFuMl6g%2Bb4LHnvyvEfMtZ9OF6pfO7gk%2BLZzS39TWdvjh02cpp2GMqs125IKRa7Whyi1NOZwz96nJpd5r%2By%2FoE2m5bAQ2xdkc57v3mKEm%2BxDg7C9jr8kIEGrEyc6ptIOa8SdF%2FO5zoSJJOD3m%2BRQTByUSG5Qoi21%2FlLf9jztx92dqO7nMzcuwbl%2Fq83Q6DXAGhZs4NtSlm2qBi23Oqd%2Fg49uAZfkhyZURyF5GwBl027v%2Fq5Rh2%2FI6ooD4BqoNi0TMGwT%2Fu6XHYStPBNTBWT0yKD%2FWx9DKtnpUZXAzCxfQmrywmywR%2BFff3l3drqs78EufKCDov%2FkbR5EnoBzbCijZ6VycXesgqd3dPEiGjqRRL8cq5%2FCxNJcpKCkgNp8WHsq2WELmcQRxUF%2Bby61oYz1MiCmb26RHTt9IT4WdUAS%2BD9dZod7Rj9wTvJm8EJwFT2hWgHGcE6rELiiGcElEBjOfRlrVKt0pGkd%2BSMVFUaKYzQxsfepQAu2radh5PN8NsdnRVh10wKbzmPzB5yBPasg7A9GlFYZuV9fxj6PkRzKVYuat0zA08VBF9A5nAEj2nBkwy4zIyQY6pgGnzck5O1EaUpvOADad2UXhRzdol3KRv2lQ6u4fkzcAq3tGCylIlHGiQ04kNObfDPpWa%2FRJn1PW%2Bd7P09qAr4If9fIUw8CbR0SCktgo6t49m0fdI0mtlKVFiu0svAZ8TmocX8MC5QAnh9TeP49YM2Iqt%2FCU5%2BvYN3RLfzjWB5KlV6lqKoCVjqaiZdo5dn8y25YhCQ%2BN91BdVuTecdFK1t0PFDpZs3%2Fo&X-Amz-Signature=db33963c674b03aba80d102da5b74dfb362f3b54643854d93b632e23910385ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

