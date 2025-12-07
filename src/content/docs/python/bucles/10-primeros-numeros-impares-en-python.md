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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646BUKA5W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE24eryFS7aX31GWU29VSIper0vgzWiNEl6e7nfBtUqXAiEAx91P%2BRycbCGoddX%2B3uBaNUJK78PvQU9DwhFIbkGXfigqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpGpR0V3QsODsuB%2BSrcAycZ8%2BoaK8WX5GbCi4VceF943zr8xZCbU363X2cf0mJnsbIiCl3%2FXnxT2EcfOJ9yD3FC14uIhYxQhZUj1rlJuVELPBIjC%2BzR42Xj59sY1%2BFIfJUm2wibAQA9iP3Osl6dEoRbLkBq%2BGIFqU3iC6srLZzg8WVQYSggggTumhv7RboCoEwYtm3qP9LXUTzBm%2FgwGn6oYg3dsg7wA92FslxFsJXf4KAl1vsq8DnNORLaiX0cSjmG3S8%2F8cQyJToOP87GQZILqQklxeHmnDuB2GFEw6b5crHhTnDaj7L5vNkP5I5zPkIdHJmjYgvE0jO2Vz5R6W6cU1Q%2BwtidSzY7j%2FMtLHyS%2B0fV7R%2FQhsKLwDvp1NFncHe2uNGYgvmHWSucAhapDVzG1aim37SRvdTbG%2BFpxngEvGnlkz2xPv3f%2BXN%2B8TYlX8ypL0YL6MBqtRyFD9LVK7%2FZJGgIW075SqTKcXuuCVhUWxjK%2BBhC4ohieauCMoTW3s7p8BpHzskyI0SfmynP3JmVDrSvA4WYSq3RZ8jEzGpoUyyabUaK6iVpxGKUpHlo2ZRPQoNNCaiKlRQp4xrvHTVV5FcSqzoqnXg9mX%2BAObnoDUohbD1jeu5OiqLrfBebIm%2BrwkV1JdI3%2Fs9cMMX90skGOqUBtm81DqWpTPtd4J7Ss5uboz%2BDZ9OjCK5JcUP9O7VrWvjQCQmWOKRgVD24lQGjRPIoYVYrOkiIzwDZHe7BJD%2F1LUfbdiepISqWoA5fW8Cak69kD%2Ft%2BfXDefJS%2BpCzVkZvB1k%2B0s6s7FUWnZRB6gdPMPCJKkD3ynASCB2Ww1KbuUmGFiRrDRADXgEgW%2FChLBufCsIjPKuzLiWL7uK36mwhEkgzpR7N6&X-Amz-Signature=5c5340bd53cbf3fc4c60bc4d93ee3b926ad460fa709b9a6f63fffe2b99ff5b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

