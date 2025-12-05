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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7US3YR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDCVYZgIjbj15%2B0BLpLF3VTRx898mVK6lSQK%2FM5pPObQIhANH308ci1MX0ztavqanw1RsZn%2BmWznoo1cN%2BA4J%2Bg6gGKv8DCGAQABoMNjM3NDIzMTgzODA1IgwcRjYQkqLxlPL1Dqsq3APEktfhATw4Ao8FUm%2BgTXBRLPo0XFeTA2opAH4xs20MhLFJzyvqamqxrbFe1BWftMOGrCa5Zh9BLpuyXHDjx5gYHtSO%2Bat2YC2p768WvZPDt8yYY6clIsFMyd858tiiLsawjl01q0fMVc5qingYiNOYhucyCdccRpMDxYml0Biu5HXRE7zhDi7eGZTxCqxaC4u3n0t3r4cyfgZoAOpgjRfYqWkDRZD%2FcTleZtfcTQ5dxF8kNVJaTg8rl%2Fudnovb5zFD614m7oWiu0KN6Kaa%2BYkqM0dBFlAOsuR046nTCI8Yi6UniQ1V%2BLyy7IIJOcnfQ5YxBmlR8LzO0VrNYC2QeWkzRqgVv186526K%2BYwMcz5zpA17CdZbaFGWDTHYLsK9Ko0MGY02Ubre5gT1VQzg4AknidHAW8XAey9qzqoO0KYaeASAB748QA9zjlVHm92YFezBeHUDEud1Jer6OSUbmnUJrZf0tIH8SS10VAh4mstnrb142xS8H%2FX6eLiN6S8LTbr6fT08LZVwYcbWS4a2TzKzw%2Bg%2B867wECQpkgv%2FO0s77nGFyivdhlKbsC3h26jvPNo7oqf0WJkDetttORUnnEOEmWrATK%2F6pcGz4WNK8fl3Xukt9NvBrdtPZTD06zDY5svJBjqkAersFxoiiupqpfULwj1NPwWMyk4QSLOFfVf01WPwi8HU%2BBmYY0CvO%2FbUYd5UCnkFJvzNb0GlD4oQ7T4a372w2Ll%2Bcq3FZgxA9zRYzqRqw%2BNNq7Zjs%2Bs1lpo%2B7NovPqcHlY9XcIIv0DvLGWkNojJ6lv2M3oyTXs62qK%2F%2BmlxwGLien5la30AOnaWjdOf0BXLq2TGf7uAkQ1VvCjfCfwVNso%2FVHav9&X-Amz-Signature=318a06b64e4cc16926531848093b468d5d109d24ae511f2e319258354c512c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

