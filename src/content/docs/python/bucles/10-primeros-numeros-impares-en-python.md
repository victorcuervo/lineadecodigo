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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEPPJOOF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4S4Y0Zw%2B%2BcORnV2TMG7J1ijxSwfWAQkmJ7%2B044HLjwAiEAkikh99IHrZUUBLbZFREFSki25o5SHXJfUzc4%2Bfo3bAoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEo5T6VBR1KVeaKt3SrcA46qsb%2B1TUwEvgca1jHDjG4expk0ruV%2FN3oGc6E%2Fd98ShoiGbyIwwx6bInWVNY9gXvW2RQsERGkPcE1L0n1Pbltf1ZZLgUPG1l%2BH24P%2B4YXy8LXcS8c7BVTQjyIdjkFKTmyiAn1gmAXviBaLlU5sOnSuZ%2FPFzcF41f9mjKWAb4rPg2nGrtJxvsBsM8B9e1ZXpGWrsbRptsP4dP0Fz2b2OEt927fzH9slE1PCHwc0mDdxlgiUxqpAYN5%2FlVNgKMb8bboZizhqy3Y5LreEztNckl2W81dTyVHmSh%2FPQXIVuHSxYG0f7GglYOA2ZyKuXTKbyKUksmMdCf3vGs7LMtrSCYsgX%2Fxeng0mo5YFRlI0dejoKisn%2FImzJOEuT2MeTD9lrYh38xyiYp8hGBXrHx1e7fGqvxk1uwV%2Fc6MF0BwwKGIIfmltm8JwAFYENiHmMb31zEsXqRHf7%2Bn8BACJLqrHdE1rdNywcrEf09qUe%2BDHu9w%2BBDCQdEe1%2Fmy3JZ%2B%2BnLKi8j31%2B4JDVIECk2Wg6KkwshkW9uhOkLNetH2ORY6bVLzek7U8kdh3UOlb5cFtsCkbblo1J5hA61NkJ8YfFX3Q18ZPhx9PAOTDG6m6QWkmbG%2BSEmi9l4GOtMvx3JWXMKP90skGOqUB5y5TuFTOzHS98IThR%2BuKKDf99qmOzAvwX%2BkJAaBre%2BcKMdTybS4nK1xqHFi2V5pv08VDI%2FlmuxYc7R4xsjWx%2F1r78CBUIgFeH5Thm00I5cEZCVtwEC7L3oVCGbJVMYPyckhJMqLrIVxvXNa3rzTbf1y66oxTIHtnPe2hX6MxKQ5HRbX%2F9q9gUjmshwBK13GpbL%2Bt2L%2FHR6aBI%2FFVf9Ft1S%2FUeDdU&X-Amz-Signature=7f0336795f49764528ded3c1a52e5583b774841b083031edb283ace3b5a42fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

