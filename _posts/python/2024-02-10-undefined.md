---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TM5LCNM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCfaV2ie4hV0jiZSndLnuM9MDQZq08G4U8bPJdfbbjiAAIgNYlXmfzLIRnmGDhSqlnZnlCfIn2ZomjnzhqP1kWGKl8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsCaat1IsRx1FOetircAypZJr1gzQRa%2FXq%2BTAdkoTSbmnEjfInHCtzm4UiWyj2FFw7xNpWvAN0iqL%2BnN71OqgOGd99gzr0igE9zypmv3t7Wo9Kja0yllUfmEQCVQxS8pA5JErGKHAzSIfB1GLxoJdHlu6aKXtCv21Ub1V5bgJ0UZdPdo%2Fazo69CouWQwWQ9UzGFXbFkM9hkEO9EbzAbHkrG9FUxFcp5KSN4XaciexztBBbKjTr4ZeimqFVyYwuihkcvFsRFsaOUTb33PN0Niidfuzv5ePWkiGFwiYdy1L3QyiKbzBV5NG8kskYtHKuMIO0LLEq9YrSC0Dvw%2BRfbV5D4jt%2B9R8pzE%2BynBTxlE1Ht3923Olbpl5GJjiyrjE%2FDn240I3a%2FWJ5niVKH8v9yxjVgLcGnMarRicwRIYH3iuSGQtZPp9Mx6BmDzEXQMbqdixgtx4Vob%2BJ%2FjYJjQ34AEaOThlmus2AG%2BHsH3HIy0mB%2BL9LktuIj0r2qWSy3ajGxnIVew5zqfY5BGOBRee30lOmPvvJRuic6JnQ4JtDL46deeP%2F01308BZPbOrvSDzISdU14yRdV3lOFyaKdYx4HAbjxALHsgfMAUR8bNaZuw7ZsoJ%2FkFlDf5WjRWRMDG3BSGsBp0aaYHHdG7C1pMP6VvskGOqUBlKX8%2BMv94YQDfgGPSDCL4NfbZtSYs0AVjhv4Y8EKCdyi76yMrQPdKoD3YQgyEJaCnfjVyx9UBULDqN0r3A4eD%2Fc8HpamTrUWcaQIGkl738uLUOfX1Kzz9Td2PR8gUIjH8Ud%2B%2BrilqgiLcVJ3%2FfS7VPoqoS2YvBVcS6DIsx68Lg6hqe6xGQEciH%2BIKy2EFvbTU00%2BnoUC%2BtvUb9805hqjKIgDNW2A&X-Amz-Signature=cbe005722b405ab423933658493938e5a55b9a020e4c3a167e351542c921b3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

