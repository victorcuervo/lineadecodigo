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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWZDO5N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCtwnFvkcyww5rzYTGevHATSatt3%2FssAPsyvXcd69jCKAIgObJ%2Fje05COopLXHhOowV96Aws9P0uMJCbNwQSzRrKTAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLbpd697xv697QoAOyrcA%2FIA8psNTDerSN%2B7L2BkSjVa40byZB5ARuErFYSc%2FgmyBgOkUZBtoF99fI%2FyCq%2FQ2qZ1PW0x%2FEBJC2eXF1g%2B3DCisZZk7j2hgJPNO937VzQ6GfvWZQ8bTVE6cs41NQUGBL8AUVRZAaGJUJYVQ2lH9HdAipS3adOJi1kl8XmJLV0fgxsRg8hzie9tTxwrkdS%2FyNJmZL4Dut0zVew9xNYi00Y9%2FrdIMZmUfW2w%2BIaXfSdoypnV%2FCR63Pcm4rA8jXeYoTuswzTVpspoa%2FoMYzpriMUIEnGe9GJq2Vj8w%2FKvaVC5cWG6uFGPjpVOt7FqHhKKOoLgjd%2Fyr0Dc3i2DQHJErMLvPix4SssjFNtDQBS512gGIVoZHg1ECHSb66TlqM5x1CL%2BCVJp0XHI%2FAVeo6Wn5UIYiLt0xcjss0j%2B8LvOvKd%2FhX3aj9dq1fF3RF90nm9W75%2FQuvzJVUFB1HvOtDe7gjyIh3xb1OsItkGEeZfxCH4hEks7jn4GyMZf9BvcUjap1Tdvgc0vEsnAHKzm5r%2Fk0a7JIHNOqun%2BnUSG%2Bgy3oNEng89ill9Wtj3%2FpOIGpSUEq7K%2FnDkMqfTZxLkOl%2FVYTHtAkCFIJFYqsSrxyJFeZku2Rkaowv5UTV%2F7z1%2BpMPKtwMkGOqUBwb%2FSi9gWDuRjEaH8qS6J%2F1zG%2F04iV0DCK6ZBk4WYkN0HuZQUpM8ERdFD9AAyxmHOemU2S%2BU1G45d41seFHWr3p8LSkDV4wx47YnptThfg2TKtf76lepLVOPfMLIuMGO5lpJAod%2BhFMX5xe9PTdrqO4cbpkxmvZDr7qpQY5P1zsyQDipLYlQWF7Uj7wvBdsbfOyu86X3%2BomEIqSxH3jkKzz%2FVAoHS&X-Amz-Signature=1df0633926c54eb8219beace15f4d9ba43d9a3d1b46c3cd445aa66f12c2a3732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

