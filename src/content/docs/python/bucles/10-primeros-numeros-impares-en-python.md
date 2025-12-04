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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUNYJ5F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFRBPGoTapz5wKNtCTFkzYsNlienA5hSTQ2paGu5Z%2FY2AiEA%2BWctfz5g22ZlFwL1SqRaa2CxwekmHETKfLDLYRFwHK4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFEtosaVluJjCg%2BwCyrcA3727QULrhvZEAHP%2Blx%2BzDkzqhXJNWHlLlDLDSt%2FjItKgxMAfKuK4jKHHZ5zfdeVtml%2Bc3Jwf2UpOqx%2FHTKvcxdfU%2FTyUBFb8431MJ7xqf8j5d%2FRajSSLGInKRL4L1yiwELkpDWYH2ki78Cns2%2FWQ3lXgcyMs0B7fLE%2FMFl9nByy4BscGIS96fvIFMSECAOIu0%2Fq9x5YpUWqrm%2BTub6F07MeKLqXMGheZpL%2BmlLwNzoSBS4iQcrKo6SHM63Tm2kyuk2n4U9pWEq%2Fks%2F1QgRcPE%2BEpC9Lm%2B6bM1DnhPWNhhmMhPftmn7EBI%2F1lhvdxFcF%2B3b98GQimGXH%2Bn0tlN3IRkEEEkMzE0zaf3zcUKYXaOF3vkftFRY2mVM0RLp%2F0zw4GNIwhI%2Fgqnj3kj9VriNhxYjq7kbd2MZlZclnHg0K2Jb4xVEHTzGNhWlc%2B9YjugwzfO5BxISDbXHQ%2B826QEq9I2mF5ssuDCdhFoCn9f%2BDs1sARLsuN4FPmZRzWgzJmWbpyLrll%2BLErS7Ri02avUyZtb7vtgNfliFf66g7AjjVObylA4OBzvK7%2FFFTb1Pg0zKCT5C40qzPw7O%2Bddi3DUnLs01wYly1YQMeNmuAzfO3lwHdRsZUREwE3Xvld3FrMIiQxMkGOqUBcNH6dI5NT5wjI8vbxohJzQXUN8RCHylPSvoGdWhZdiEcWZ7Mv8z3gxIXolukQIs62x5hCx6p64ItCPIviqbHl7WJdhfMiPv5WX6ZjkwN9%2FjIcbeHtqMSuu1fWOv%2B%2Bz%2BRpZ21QZiOyBvQD5dG5xao4aAusxy2d4Hr%2BxPLcDaVzvohCakzML7jvDYlDcXdCwoxgj6L0%2BElEh8NyazTgpYXGD6Tb%2FF%2F&X-Amz-Signature=c7c9dae657ca67afe995fe81c056761f198101dce5801804c57cc51bd00fa97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

