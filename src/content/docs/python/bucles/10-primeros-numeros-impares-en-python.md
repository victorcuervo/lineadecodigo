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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYBUD4O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB9ae4hiVGSlKgDKLgYParVW3ulGQcXvMrm1i54AMT1UAiBvQPcXDBjx4NTv756sozEMF0r%2FEOfV4C45TyLkdEq8qSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMXDn1sMausCEwMf%2B4KtwDOGy3RvQ6NFEF0TJCU3Pu%2BPPaqJa4Ze%2BqFV%2FlqlLZXoNS0%2F4ewngvZ9w%2F%2BdRFEe4OJp58LwkKwkrofq0VE5wOkCwRw6GIResBmyrh6wWpXArMVwKLmoQIvIPOMQvnf%2FVId02p98U9Dl9rJwTjROvf9YufyG1gEIF6wimJP20ooYtFa5JQ5w%2BON52oGInkInrkBPYTaRzUIYKjQK0HGFUSCK75k3d288AqIebSgdGVAFhiNKoGNYNvBiO%2F0pg3y5%2F6tyFI%2Bbbr5agdKe1IelgsK0ShT1%2Bi8yPtFKuvN1z95p%2B3s%2BdKxILdC1%2B1lHGkwVQ9o2Rs%2B7aZrii7546yhkchFLuIT5NHSNg%2B3c3srVYgZhKwO0HafXqa2imJ4haIZ4RyhAt62Nv7hd665ppQdRvaWai%2BlkZHtbTMR9BeCQ1gX9OtbQYIr%2FkfGvWDs15tj1724lbqiu01Z4WL%2FgwrOYMHXD0Lp761FraQ8lFcZks5w4lfhEEDHeLAkbd7k40NmF%2F2j8xCR9sOLWifksdHXsq9g6Q5eopuuHrlvnhLsgon97AxypIA3KNpIK2EF%2Fr1DLx%2F%2FG%2B%2FdoiBbkzTIxWp%2B7BkdwQz1IJ%2FH8kp%2Fuu9sU7aN4RoseeEBchtHq9q7uww%2BNTDyQY6pgHLULnhI3M3ttMCQY6nWMmIxfBbV4nXbMKgmi%2F5fTzQRXcwXg27%2B6e9QGYXM9WzMby%2Fiy1eYduyVRFHxIs19mejSHbPDw0WcUIxoSPqTJ3bO5WglCTGWu92Zsz%2FJoivsBGixhMUVKqBA4OpNUtt7LRSOeyNHCqaRv3h33Dwyl%2BqWZVTE6PM3kPbOzmzi1Tp3TZuuE9EvgfgUYQrzvzRz38qQu1EW1%2F0&X-Amz-Signature=35aea0a15e5225606c105c9f8cfe6db4174e8493567941483c7014cb9a4ed711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

