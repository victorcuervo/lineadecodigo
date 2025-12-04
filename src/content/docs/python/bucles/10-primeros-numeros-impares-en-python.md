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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBAUVE4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIH4JFn3UMDeuEAYqR3GcWwI41PkR3rD8GD8dVh6kKUnyAiBw7gG%2FkNv%2BRUB62O6%2FJn9v2FA4oBm4GKosM8boTH9ZBSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM%2BZ9KErZYHpWsior%2BKtwDkL1bsuXYXa%2BSuGF4WaxM05wiJFlZ0mI2RMgmmip26HuHIgyAabkEpkzYc84VsxUC4PeWMd5ApGg8ItWdfZqv1Ut3%2BrOAajn%2BGAoMHH3gKqkXqziaTRMHuH8wkiDTqFm7PzMXjqcFmY1QJlSkJ3jB1hcBrA1YSuQ34WH0q2dbeEYPD7DGKwSAks%2BLW25ccMnJzk4MwlY93lAdcofSzLKbV7ViPuBUToE7x57q6mFQbnbgvd8vKbDJ85iGDq17Jja6e4ZUBKDuUWD0yTNPV4Uj4Pyn9WAtyQkslQb5I9zqMkPOQMfcgWDTM7n7eXO4wKEY2k04gKzPcshm361dwn28%2BvdYvF%2F2dRWi%2B8zvEhj9DOU%2BrWJgcUUWdjmnUZpmrhndwhhD6ogzrPA2YWA%2FzlOulnJjvnmLHUhulm32d1mSaAxItvbTBTgPDT2mxa3uXJ7lwFkX9CPvt2iBbmyNVofiz8BSRAJ0YvrHI1yXygYEu28fAj3QdF5Kt1bmNIdIzj3%2B%2B7LGCJCwo7w1HXFklnZyplaMsDh6qspiXFWroDDlpvqFZSPRVwbvjYbGBB%2FyUcQsjNPK24XHB8qd7Hi0tHuztKxXyvsM5yHAhgUV88NMIPfP1yM%2Fsw4vRMCIB%2BAw5K3EyQY6pgH%2FW%2FNk4KAc%2B1Cu1oQTC9BFcl2jglBQ4FzZzaWM6d5nGob5ekkT0x47YHK5CgrPmSf0KYzsiVlo32GlbLd8WxTQ1%2F45j5t6gkrSENsBbkQW47DlAMpjEr3DH%2BUXA2kV%2BmcNtxPX0th8n%2FlDm5aiAKrXuUHsKsLOkLJec%2BOW7kZtMCAvRoHZLYuO8zy6j1MXXAcl%2FKqQc2p4JAZQjKiqMJYU6QvbWBbO&X-Amz-Signature=59800b6ed8b2e6d2121aed3f88991b20758a55390e0cd4581c4d037dd1055d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

