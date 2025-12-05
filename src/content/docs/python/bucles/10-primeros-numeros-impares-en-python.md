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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSFJ3UC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVxUGfKeINV4LcbybY2aYsnodmoqC1JijulqD85NCDAQIhAMmOH%2BBb%2FQgXasOZBNcpMjzPpVvp%2FpuQrjC0DwXD2QSOKv8DCGgQABoMNjM3NDIzMTgzODA1Igy4U5qQVygWH45eJmcq3AOE%2BazynOXG7HNkcd8tFLL%2Fd4eg3rOZ3JA7bdZ7VktF0qHTE5IFikP4%2FAQQBB1%2FMEC%2Fnp8b6OJg8uzLS6jatuevOiESjaFGLhoPDMBLDqRE73iYXwEk36imaamKsypgGkyanmMxxEy0C4BPG7wvu16L%2BHL90WPSMS2fpgssGW%2FlUY%2FMD1IEf5AiF5fHI886eZQfwFZ9rdfPAfdSCT5%2FXaxk5zQSLPNRTXRhCdrlffMh8CZlTALL9TGEP8mIP%2F0HX7Eux%2FH5oZlwX3Lbs9Rww94kgOSFmofDAhUSg82FaqaxBRxm%2Bd9gQr8trs%2B%2BtHygxJ9u4JBsHBUkj7qC%2Fja3bR7QzoToHon7IqnPpcpgBv6DnOTl9KX%2BQNJO8sGbU8vDVlHbNzTSmRtxVpcG1CGqYGFtjNpLOQ7J%2BP8BcbKfeLHH382dgDtkX6rOoU7uRw%2BYc%2BGXgE4OFT%2FkaVVZpmzL7fdrvmCG1uwsfF1j6o4iRVXGIZf3xDeVdU9RLp7dSYrIIQY9xwS5eQNL13E09XVJw9zXW7VDIBHUpnzlITmhmZO5BdLIGhljc3ln448Q8QXOvGWxa4T4Ws3MBEwDiBUl9V%2BnWFT8Vz6%2FCN98lq42xAqNKxY0a%2FopX3k4v9U1VjCKxs3JBjqkAbJD5NuxVtoMv8YkUQ1Ip1WqZApBgXQCquFkGwft8w5JQvCh6I4TX9o8wj8Lmy7uDt18fg%2BDu6Vvp6CoVOL7pRkbJifgdBk%2F4i%2BrnxSFnpPStYJKqxPPpfoj%2BUgGeMuCmJpbbRi9%2FzT%2F22JUmkrh5AOGTl3FzwtDwgOYlJ9txiM33Y0gdOGfQnMpMcFpBqP%2B7wQ%2FoC4MVDOEUPuaBsiCUjV1vC7%2F&X-Amz-Signature=a550e27afa2ebac3a7491a0c585057a79ca98bc891e3087166cfe1fe5709ac3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

