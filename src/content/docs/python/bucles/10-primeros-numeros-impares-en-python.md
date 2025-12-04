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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43ZFBSW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCNr8hyHISQsKqTCHpkYhK1Pfl20pSMYFx6QN3JsfHPXQIhAInz4Ci0zpCXCu5vwEVFIMP0qE1565gCPSLJooyU3yt8Kv8DCDoQABoMNjM3NDIzMTgzODA1IgzrPHH73UOdjjHkMQoq3AMBsXRU2bDD8v6bU%2BfvKoK3QtJYNL0ORctNXH0O6zzWCyZivoH9z4euHBiZRyXecoex442X0AZPyPxejQ9zFJAvt73bF9DhCS2DJ%2FtmqVTZ7u3h5D5LOfGn3nMmPooRT1CkD9XqE2%2Ba7yL3NGsKMkes3XsDzuhqJwVw2Izk3ycgiRuAy50Metwu5vjxpGOmCOCOYj9%2B%2BUYoYK9L64SMvcFLh5Ju6aDgjsmlE%2FWh%2B3NyNwKNcYFkjKUa1NNR%2FunxLHN4w8GCyoNYQLjtl0apfeEQNu3fdBW6Qixm5vDr5O0CWv%2BqL%2FxiDUravcAkVdmoE%2F70UGBtzHvGpe7rb1Uutlv4SvKyCjnxCnje9jJnj5cCFsLBrcRpKcdNvkCXTi5E1LO3Q4S379Dzl0aQLQXneWhX8EEJiPqOXdy1CIxd9YevEi7KELbBKQTa5PcHbjnbSXlnT%2F0Muqzs6d%2BG%2B5%2Bysvs17SAYZv7uSfpTP4VPkgfQrxmHj4UrF69n4G2a%2BPiTNEIxQdZG42o6GOpAtvjdXG7YpuH4eO50BysBnRYAEJpGMaZKddaBs8DfupgHSofMKWoMbV3T569hM5xtshrf7%2BIhofesn5jPEmdVwsylsbtPko5v7jvAeObgnY%2FrezChtcPJBjqkAZWd7293hm0A5NjQB7gNuR7rXukDjexIcpzd5dZbS7kXUAWEbsm4H5DMRm4sRBSVqmNAR4g1F5qXo1EXEeZ72pSkjgRnQYh2EHVqsKRumG7lsB8JJWxRo8YfNzPWMiyCsDGKtmDizK0TjpyH5krgDzw6dM9CWk%2BM4p%2F73bxxleZY5kDdmw1BdK9eyB6aiMcZbBmluGvZTy%2BgApy2vhgFs3ZG%2Fd%2Bj&X-Amz-Signature=447cf8cfde43c5e9b0a9c269838e6dc215b1a2b4ff2e18dc7f9f547e6995dd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

