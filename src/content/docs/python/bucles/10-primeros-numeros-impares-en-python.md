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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR56H2JV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiJdBPnaEFKc9poJ4EQXeznySadd2LzjUMF84mFjFgLwIhALZTVFrjg%2BmaED4u1q3%2FpfBJJyOCdwIiHoTdPFV9XnfwKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU1qA6JyxkgqSUsVwq3APjUSI9FMeVRQuJTo2ZXO8JNlQPBePGCkIOLGmpHgthnNCAJyHE0UcXe8Vnv9XOyadBeJyfV2GxjoSV%2BslUywafqmh9L8dNfpv3wnEqYnkpbxx%2FKL8TtxKa4PHp1y2tbMd9Fhh7I%2BXlQrS%2FMuA%2Foy2jBxaob7cN9PRlzWQFAtCa%2BeN7zQV2qt4Rq06xkm8u7%2BnwC3ytM1DgpY2XFPKu5jhAcp3HWTl64SWKdOWlUMYCUMQ2Yr%2FqyGIOc6CMcRdvzmk16ipRmg93yfw3124s%2B2VbUuREqrx5JnGRXQB0Y5At3ONe%2BqHLWQMl8u4eKtEcuyIVAF5uF2juYD2Io%2FMkBTArlF5W%2F0HR7u4kdQ%2B8CHROF5d%2FGjV38stzEbDJQx8i96Pd%2B%2FIWPnaSGbjL0s2s0p8FoR6FAH7alnpVNhThgb74B8rUATRVfe%2BCdHG9Kf%2Fm9a62Errg13dvlm9mrC1MuPJ3Vxk%2BI1lduixc5KgDpgks%2FFqywcTm7ZzafbXD8n4dVmjdsrDW4rs7qsWbBEaHWOVbksTx5ztfmDpF3ZzL9tbvBF1YY4rtUum40mr3dqsmKSLQQzlOdnKVeOoGSRdmqaMKnxRF4YR5wc1gkSlmnz1VU6JdVl8sonBhCXNbWzC4w93JBjqkAbsv3zRTbMAGjOZAFMdoGLQ91hGWgSPNzxRNvqkeY%2BVM%2FJpOFm9%2FJdpzkSb7CCNXi4l46i5VeRyEGVvxqiYQZT5MPhtOizVaIv%2BuxbjneYn9gx7iRXzLUKwdtPiBNYnhLI6toiuuVUp%2BY%2BVPI6ghTIo9aquvpcuRAx1aVrM6gxpYbtLIKEC471TDWdpkNsheZn6%2BYIg02iPC8stdSQCZyHTsFA0Q&X-Amz-Signature=68d203c026a20ce6cc3f74c5d48c556dae0e2300f5d087d890b4f9cd22074aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

