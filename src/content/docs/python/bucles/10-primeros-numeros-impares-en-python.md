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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLIAZLN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLwAKQr9vD3pJzEzhu3KnTNjxcyz8Hn1A6e541puMccAiAOMuitH7CJc7KH3r7rjMp6DQRgOXgJ8ZE0%2BQ%2BpY%2B%2F3Yir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMazk1KdazdRSfnQqeKtwDGMfV2MZLOHnP8xLOa8DhpkVIXP2H%2Fb7%2BOlh2BDRheNpkrSTRjaaQ1gYgSa4UMGbR03sAJPye9qlDz8bYO7FPjpP%2FEk%2Bysa3KfVgmot%2FVt4ESNIxhWEGlFpXAkEtRws6kf12TzlNyQSFCdY%2FMSaLFx93PxBuGanw5t506E%2B3N9QgcQhwfKkyfR%2FUaW955keK9E%2FaFN77UTH%2Ffa6Mn%2FIzBh7zcGgEVLrg3rMTRxDBL7y6loL1dd5Vpnvon634JYv4443C3qZGW19KqzZnVY5uQyqehiTgs4Udz6NVBjLKbCsTYVBtyXvG%2Fj6FoEMKuatD%2B%2BB78y%2FmQT2ryPHcEUx4jFwtT34otgUQn5qkhj0UChle5h4v%2B5PrlJqgdkZN8Z53lnCkrC8p4W1IcY6CwFnosWJ%2FbjtCfv3WLH26Gn4mc3f6YS3vP3bsMxsYF1wcoJn0z59XjmK0f8TsH0G6UBimKR2mZM6drlrP86pSCT%2BwNg5N7M%2BqsdnF%2FNq1olpu7Rx0omtAfmmV7CCJMAF3l0b2tv1%2FlwJRG8bwLqsaFSSzUHpEEVkiqEIcQ4gDHOyUo3VtSOuCWV7TvPaJed3CKjKz35mIAbS0e%2Bm%2FsR%2F4Fc7bN1achrkgLc8B7HGFeqZ0w14zIyQY6pgGG82VTpbNNxhNdsTD5CO%2B4FhKJ0lLZv%2BAePlIzbTS0wSbIJ2tmAJPAr8Tn7egWXa80jDwZ6MEtqLZsdIcKbez1nKGI4QggNZnchs8Cr1%2BCVZ2%2Bj4uiuAEoc%2FPphkQfxACUz7iMSp8evGaA7Gkap8nkwwk4P2ZRcl%2BIWbJgpnE9h0RwVODOALehJVRB%2BSfmlvhtegpGoVXEXhP0hu1%2B%2FbjxvjSJhB%2B5&X-Amz-Signature=784d412a2aadd0637e1478ec3ebb472e59be9793706dee9957965dd40695e9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

