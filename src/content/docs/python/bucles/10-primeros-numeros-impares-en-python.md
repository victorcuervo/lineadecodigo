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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRKSE7EG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FSeA7Ja%2BIOzZNgs7xx6enjvuUqHwpD6%2BKBsHi0VqN%2BAIgGbRKkARO8kBjUU%2BAce9C7ihOaJVTeOE7KFbIXMwO7p0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCHHzg76YUaxaB%2Bv6CrcA5jX4N7AlCmRMa4ED7YvmByGz17UbPOZglIQt2yc7yZp02thkZdaM450cEnbUeCsJx8aH5XKqEz9AHhA%2BKdc1sgBO0tS%2B33G73Bg4iuBIY%2FbWmMiLumj1h%2BKWBGako4pcXQ%2F%2F67O3DCjn1goP0X2b0BE9IV7OHw5dLAkqZlRp04upfegzlxtFyKBHK0G5lcRQERJyUDgxhOmlD36HgEc3RnUvcl3yUoAlVrgSUuB5VE9oG3ly6sxbZEVhye1loWTTKe7EfHQhmQsHH8xSPOwKBevZoUvl1MkON8MA%2Fi2QOHpRTK37oUsOiF%2FKB0%2F7gKW2%2BuopiQ5m9TfHsr2OAyRargYvGMQuUG%2BLqs677%2FG1%2FjjliuQf5%2BlV%2BPwi4dk5r%2F0%2FYaNVqRusv0CLKbG3RrhQCarolzwzKGyekCVbGqTaSzqTo1sF2JapAwlSouTKVXWRb%2BhIWxBKoR6q9Y8qGuEHSbXBuJbi%2FjYWcUslquP2VesH5IY6W1UFYugGj%2BnbhVtCp8M5wSNSHk9ADN9xB6PgDuZRzBTcgWFOPJPNc%2BhnILsIbavNv7%2FTZ4JfaE3RguhJTabnBceOFPB47b0qDRXgCHMM4KxTN1wotLi0K9uy%2Fwosi2GSSZqSAyw0FmyMJ%2FezskGOqUBEiujK5KfHFAgtYcQyXjRyfR7UPihCeEvHDPslxHNd7AXlng6ytu%2Fy1%2Fg%2BanTYabdMYOY7RJBespdY8TsmlsKX6vVa85QKB07W6Ve7zc6QrjVOp%2BLPh49Ogvbt4XE6ph%2BXuqtMn0Xr6NMm%2BbbMd59wSnn36Vk54EWcWr3GozeqnaWCU0evXi7xHNkzCSkJDeTL%2B3IMBFmoQGyUp7gjrVgw1pqDxtY&X-Amz-Signature=2f69cff6fc4fd9bbe7288e692c4afe8eaddfd2db561a32a8cfeafc02a58f809c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

