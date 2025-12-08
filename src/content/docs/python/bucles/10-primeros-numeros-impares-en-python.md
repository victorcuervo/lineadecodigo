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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH2XJN2S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ4fr%2FYSxTYfbrMDC0yuGd8M4s9rmGzkidqijl7GWfNgIgA1kpPhInIwrT2uAeTkcPYejf1q%2B9jvZcUhRsxWu80twqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOrzf7G9L2E7jbItircA3LsIs5zYK6ENdr2Tbr1n2%2BcS1Vfesj%2BeS521Y2MK%2F5l8SVvTXcO3TBRzzWft5uDa1e%2B9madfRV1R%2BLf5f7P8MGWEMgUv5hBz6BPVao2jOuXv44Np2SARE3EuiAJ4zc%2FSwhJTj8MED59gKsGwMUejrWs7Y9M%2Frae%2FWrGyvtPSWdD7z%2BMDJxt3%2B4dms0WmUKsDMO8d0%2BgsIcIYIOzHMriqgQ2hlhQ4cUIVNM493Ig7mCtQJF%2Bd57h8d11c8oMIET9uZVFLX%2B5xfB5Ze2OaB%2B%2Fy5wN4pr1GmrEv87DiiSzl69pWMZ5MgtKhFcb31XhyjhL%2BE4j1w4Gcug1qk2BJCQLREqBiNkjNFDkLjv3dU1WRHp7yNUWoIwhQx51tuK1r7L%2F7N0W2ZPfkCEn5LlaZYPJTZ0wITyMeOysvaWT52nhWJ6i9Mkx3PvXWr7yhLUiqsrAvXECbpgJXLXiZLIw6%2Fc2yErDhYm0lB5ujV8FeuIFZ0K8WYaFi0BOuUPaQf6AG0ZGRn%2BN29KNBZ0chqjy7p0waas5dMV%2BDgusHyDG1HWVB68x1oar6lEI9P583Th0r8zsqN0dIbM9nXzpET9UzF27Qv0%2FX6SpYYl7OeCO2M0Viaqq7Y0FhV6hKhKqSKUjMO7v2MkGOqUBiYD4Aavu066dUpPG35W5Em06yQuhNVVK%2FBDC9F6ABbLOMaNEjkFr3tWSwSBhi079GzHvpb2H1hoOIhduouv3X1UfMdeavwnMAkKkTyEuVd0j%2FOC%2FOqZcWophvfzWySzmlaX1oY2vfnk1iV5QKATUKKUELAW12aHvDgvr3tOIknSMK93UR7BLNNKG5%2FezngzJ6Tv5im0DsAsGxKDOU4BCAG6BTjil&X-Amz-Signature=8cee3eea5baf6df9e53c65009c713ad2fdc8e4505e6c0a45258d13361f7de550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

