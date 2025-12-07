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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGUJ7G6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVan21H2T8S4vOG5LdzQxMu4%2BCKl5xHUwWeng5x%2Bs4PgIgRUdVKQhE1fGezYl3hZUW%2BAEt80r7tKPAbn5Hn%2FOo55gqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYmkdtv0E3WmJpLrSrcA%2FMFUEk6a85tx1TcETo1y%2BNWePoxUHPDT%2BnuKVdMW7g20Ti3QJXrUKXW5BhUk60G4V3JDG%2B8L9upc4yRiOlZkEp7zryrO%2FZOoNHTIr8J4TEiwV9w0DW%2FjMfK%2BgX2SCFenGB44XUHv9dCsvaAi8maHeeFZioMowgG5uqGPcih5w4dRGEYo7YasGiZMghIy5GoHdIZ2icavo6d2E03vWKOQoZdhXpnYGO1tWmN%2FP2XleJYFOssipWXke9ObpPoxO9H9eQlzSCjYaY2jed%2FNiwY5pt4qMbIs6fpVF7AYrav7tNu9UBIIDulFzpW2lPSpEh64lBG1RA1PNOvnunYE4S6%2BCJW736aJsXwKrmDEZCvsTwBiuVxNVVVaSd2iWrfBLtEJhEwrUPe6i8U4aX2WWH98OtSTnuuXUCpjV8LN7%2B4G5pvRfa83DlATTdioXM9samaMzaaEAuuAWnoV1COu275yhRkOjAS0LnxWK%2B9IqXWWO4Ct0uuWIdyospCUKNDKtx2dv%2BCeENV94KUfyKLCunr0jXncvOVe2r2qYqR%2Btmj9QuVju9kVNcQFMbs0kBRP0FYOkbjHPpCDDQXEsKhBKaYoO1LokZPhZChIJnmukwp4iTbSRhjPyyo6Mzyi7LEMKC51skGOqUBfOQKa5B3HUbE6eAeOnH1BLkv7wd5MhBZkfESA7Co3dLZVBoNkDZ1s9xMqpaJNXC%2FErTT9ODNJE1ywxD51nDWKeKav5bkJXP9XDxr3wGtEjYCZvWMVII2gH15Om0N8rzrXYe5ZdL8TMN4kBDjbmp1zdxWRhocnozsdky4PqBJz4S5mIxe6t7eTUKkPnm5ByzSx9ykalV9itsU3uFxj3%2BXGhT0H9uz&X-Amz-Signature=59fae94610e8c35aaba21f9ada6396ebb6dea0a16419e8d58c8eab7856c7218d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

