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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJERQRB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQkWsUx5KbtDS46xRIVi7lyTLChItr8f2RiiDV4FStOQIgSHfw%2Fk6lYse9DurpHXyRmJu2QHbTY3Xqzpn9XHUmYD8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD4dSj24%2FQjOPh0mCrcAysKJjrPmImRkgmmYSSJUwgPtNuIk09qX6qY%2Fmd7%2BF2bCdL6nib0SQOgYaTwad6B%2Fw%2BpFAzbq56Pjzm5NGWva%2FGLeiWnayy9mopzZvtLXhfr3h%2FWVIwyFKLkFt%2F1tcz3sSLFzVnztAjaQcf2CxmpFTZ63nc6vTenYq%2B3lla53P5gRvggZ1M3H24wuIH5WDsFhXAfaSki%2BtAZ7OzqQ%2B2ICmtLbaHL89PqjhJVE%2BG8DabF64pMAfb1aZomq6DiFLSQ6OGzw1B3MFm0zbQ3e1QYZdoWMV1P4IAgh5BM6RHCJHO8XM8IFgsRc3HvD2%2FX9n6YN68fByMJilTchGh%2FoeJNyAT3%2BaMkOZA4j4CZnkEVc9cRxdG1OspJLNvKiuGipGOZIcnWnNAAWxT4iQ8kaA%2FA%2Fmey5cVrLMx2r8%2FNkZgSV6ZzZWmWxr1AXxLXpgSad%2BWNTshtRD1aITdjkUK8Y4M%2B48DQ4LXFAI%2FhdR4y8hc8rJe1pICnReo6Og20OZbo9jqcKJ7ayWWfyp35D%2BHoOLmWdkOwDk%2Bnt9Bc5a3qv8Pl38c7nDsskhb8ZhCrJVdYL0AHnTEG07DHcK%2FWc6uN7D1aDUq3VvifUXEl8%2FjjEyaIHFNaJDalMDlG%2BqeMUgzDMLHt2ckGOqUBbBSkRm%2BTRm5G%2FHVZvVb17Qc6zhdjQtobrf5uG1z5CvdWr%2FsG%2BP9Jhw8eYMjcsjJVMOg65TfMnf4OXAOrmCHZIAU7OIYRx6701VrS%2B1YgIHPm10Fzr1HmzH0X9OXMGXlaSjuj9o66pT9JtAd3SUTxUWDviAytaZdqCu9AUvNgDU5qHEo%2F%2BPsW6ul0munYzqej%2BKOmVxfrjP3EEZC49To6J3xGAouV&X-Amz-Signature=28ee15c39402a1d39827e59c5a84ffbba2ab565c5678d4da2ed1a52c49ead1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

