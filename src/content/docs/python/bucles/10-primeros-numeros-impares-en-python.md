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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X3ZNE5O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE%2BG2zEGZEuDOcZ0QQlIHk98I91ITlX57BVG2D%2Fa%2BbCFAiBzno0jZgwBRc77l5L4vECCXJgV3njLJqyip%2F%2BS4yySoCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMM5a9TMsXyM1pxI45KtwDF56bYn3MGLXkaLWcn8RFdZqd2kraZnLpjB6urlqnVG5O8eeVli5q3louq2C%2FH7FPobYJBrGjEdEG%2B8OcyhXYYqfTZWsNBfDrxT2P6ivJOqnk%2BDW0%2FLrLiEhd%2BvXnUhI04u7x6DLA0I6xvROKYQ15aYzDcNoeoYxSKP0OoewDS7F2mp9VEMs8uTdtXmpEzbY0XECn%2FW%2Fl%2BAbIsnvIgzibxqY%2FN9fx32jY6RSB4pfcHjVoSR7PkiqiL58Gq2q%2BZXMElr7gl%2F%2B0YNe2XZ1Cv4FxPJMHx1Ygd8nAhXG9jrKqt1roGlFANP4kRXg4QdCsEGl8nH4aFEK9IUlRJN3wemC9VU8SHtCFDwA0OcOgV%2FpgS5W%2BQU8ZXNQE5wZg9KgsTCBclT2%2FKygbfDhlge7bHga%2F3sHcerjTjrkzEmcPFOWTZv3y6rkBlkkeGRhAC4tIm4yoYYq%2Fxo%2BUM9Sc4%2FczPaLa4iyOb5%2FxMrx0Wa2g%2FW8hM9tootC%2BYV1gDLp6xXAR1kH3Slamy6gyuqLdxxQsxD6vxmwIn50mj8bJ22h%2BnyC4aznQ4YaGfNsjokWj5Xx1xxuiT5ojLSYKTm%2FasIWQmwb2LWMzPIrPCnjnWooVjTqx%2BeH8Vj%2BDwCg5ziGHWHYw3dTDyQY6pgE1rtOw71xa3PEz4ZxzVszNlgugAjCqYNvA1aek5MpDcB1kUC%2FjKgeHuePgUO93fTz8FZugWThyZffCSh9exC%2F00XADC1guIJ37yXlgKHVR1ITM%2Fq1wc%2B7ogD3JvxURar9wZ3SMMmwOuLA5OijWxIwR7DO2%2FBhmCDLlUtJ0uc8p7JnlaYlwd2GUuYEwPkSkPZsZM45wsB8MM0mpg0K3PyHBwrezYMPu&X-Amz-Signature=3011e20dc269ffad01082096bb30559bbfe352c3dcc3453fdedace8234711b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

