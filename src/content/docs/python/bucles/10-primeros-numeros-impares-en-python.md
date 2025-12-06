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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJYY7S4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ZHWvV3WzeImBTnPOvIN5419%2F5486wqx59RPliYuDdgIgE3cfd9QQfqmBdHwhlf2iw9A5zTYz0kJzR7oDp%2BSXyjMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFksXVIcTCgdHvRSUCrcAwVuMsqpDsWvwGY%2BmdMJ4tnZ2BQvb6QLHCRs766fCtnZw7PV2Drw1i7lnv6YL18hffFlQWZAH%2B9CX1FDsb79lTr68c7J0bV8Q1xLdTcg6VunE4cEDeB49r6YeMnnUg4Tbb8g1AxxDteASZxpYdi4W0cy%2F5LFCQPld%2B3M4uTuw52FrB7Ib71VC89Bcwaofer1ZKiNetL%2FYw9NqEyCTXD0i18oVtie8c93e4S%2Fub5enQ6JFhn5S7d09fOvXfslGU9wkZ8nBsYg6MaqKAxVnktrahkFGmQi8umDgI%2FFRdTenz4hn84TOFgOHpP2Xl2dr9dbhqkx8phl4NSl4zzelHE%2F3F367Se5izy4kfFe7Pfy11FQJ2Db0GBrrynxr3N%2BjQmQuU6mo3k96H9m0BFjs9v0KIdLsMKYuJwuheQ%2BWms%2BBnuSkH8tNePprMbY8pGxTE7TOzPHHaTXTCpto46zrEZFcoj9Sl27QpZyRR0g4MUvbH69AAOtkjxOrenNC3%2BL0Q3Mecdow1I0V68JIH9jP%2F4Da4igLL9GFzrVL1Jk7ZAAJrAQCS1mOb3DfmIBDmY8%2BY9MVI7kviYASutOLAE1yDz6mAMEJns9405IlIwUYAmyb%2FdasNX9G5JJxdoQlwOSMJOozskGOqUBRATJS44qlha1HaOiQSZkOcoqiAF3HrMNYcV50VM1WYyvsyWdxNqRecoYi%2FPS4UZ62RiP0VNFDLTHckZd%2B9xZdwCL1%2FYdUjp8%2Bq1wFoE8HNfJPX%2F34Ed1oJGhB%2Bgr1OSyvKSNMeu9gPCRLAemRcxlIBWzjDImoJ%2FheJGmwKyQ5ocuk4qcDaQdDzIGqRIjQMobPIsDDrFUdC13%2FM8nPFCrQwM1da4N&X-Amz-Signature=30c96897cd05072dcce8169d77693ea6082cfc350e0a5eb56026eb786adf8f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

