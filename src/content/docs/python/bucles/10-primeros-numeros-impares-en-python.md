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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ZVAWBB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBs3%2B1H%2B0e1IQEJqIfQsMYFAxThynNPR9fMwrXvo2rSgIgazxq85UbjAKg6ooreIgOzN%2FwalbRTxFafbJltVomP%2B8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDE3hg6%2BR6CPeanVSECrcA9mFdjAfLo0F3citN3SHaMVDMJH9rVwmLSw4LnuFVnkd7gp2lZ0BQAmbPTKqbuUMIK49rkVWm%2B4vixEl6Pp6%2FARUNlxlJW4cUCb6VRZ0TwasY8%2BQxwkvscO2iwiiFetgVM2hNaue5A6sG9NX9NxZBJvQf2CcGbMap%2Bw%2BqIAutjl8jDKFXlfBCylLgFsdwvH%2BCnO8FBjeP1%2BYflkP375m4xLYEBzitV9GW9k%2FQUQduJ8opeCEVzGVtEVbdcu918knbwubrjxEDiJYm9TXQ6CMqHldVf6Wv8VIqtaB63P16EchgUYV%2BxCqmI6Cpg0UaIpDPBo0%2Bn6FTR5D4yKzGZdGWu2qI1yKVzLFUwh6DAgVGxeWukC%2FjeQAqeYe%2FqY7Cn1X%2BdwcqHu%2BsgfYu0BjGf%2BX6UqhjHh6a%2FVsl2cpm6iAX0h%2FSPacKUm%2BJf46r8FhbrNmFDc9by1FhWaKDBZZyVI69opIy6AFlsTgfKIwWtt%2BuHVZXX%2FZx3zj1yjWLPVp8Hzsu0Diu7Xq5OVNjOxC5GNE6R%2FJ%2FCs0WrVnWLX2oByGLErex3GULj94aO0bu19D4NET2MfbkmfU%2BAiYlQRzQNtMisymm7yqM6epmshUUOBSJj0zyUQpiKRRE%2Fdz3F7aMKPrz8kGOqUB3CKlRuvpHshk2Hc0ipTm%2FB1QIbTG%2Bg6QXfNNbxLE8cPKFd93HQLVhx3uACvoc1igjxTUDrg81iBOAPphMkwhaDu%2Bqc%2Bfe65v6CkspWh2SDyLC2t6n%2FGHhWxvrOETLkNKdVRiCKQXvxmpsA%2Bi3uQ46md4Tz2Tfx14ckWgSlReuZ6CRyNIrbZss90xKJ1EK0w2pikXSKfMmp8gC8oMP%2Fkg%2B0KanbI0&X-Amz-Signature=2a337332e5eb267c08fe402c0f5d46908d9e42f541cb047399fba459321ccec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

