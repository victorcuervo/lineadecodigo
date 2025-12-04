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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRKLENF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIEDsYE9vVeeGoji7FF9BIRK6VFoJW4nEWLeIhUW8JfvXAiEA3KpuChPus1q59xaY1%2BlKf4JX571WBtqeLbkGuE3fk2oq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOC2wdamkO3DtMBENircA0lF33p8eHjW2cr8vDT43TQj99kZUzGnR43hhoWKsGPhif5PhnArTxVd%2B09sOBgq%2BIco5iEMazBoqE0RoGyt5TlokFpSQh0yagSXAPSDkYeBbXaqJDGPB%2FQcyKE7kU98bdqditCLusz0cviNhl7DV5D4vMi8oCAeCwaVYz7OODjdXjK4QImRW9qC7dpax1VHj1E%2FUfZI%2BIblWWC9cdW6csV83AQN8KW8NjYJbxjJCtAn5R7DOTl2fN9mkQC2mnKAAzCJurGJjywc9Dk1Cu2UVNzasMI8x0m1DPMGeThBLb%2BrNYVfPSjQYORo3DZxSh8W470t8Zf2IdhboJKXVJi%2F5AbBUx%2BzZRk%2BSIQSco5pEdiXSK1IV%2B9XI2UXMrc29WW1X53AElBxY2uZQudryIKPcqi0BPCd7YeOImIMPiTGGOUHvvjhxMhAFJcJz12ZjR%2BbsDzZ0C%2B9L2sJp6HrlGPPK5%2BF%2BSjWdj3%2BZ7Ii%2FApnWQ9EoG7c0wJWladm4XTri1pNNFNgBB%2BghDW2UPcTtWOIwXzGpyQu5P0KyjEFuXFtxWnd%2F%2FoYbTQTj%2FO4mjd3zuLqHsCvf2%2F6t%2Fu303Rkr%2Fgng1eOLIZv%2Bc%2FUtF%2FPCIs6Wqh7ruoC4nSDt24GGLkbMLq%2FxskGOqUBT9eeJt1bXp8u6YMMXX2x1A1kyZQDwSS8OHXmeTmIxqNa6CtMb4LCZvH1uKraLCnrFUrMblWl24FFeN%2BMQ7VmVwHSk%2BuzVtPw38BqyDxot2DETjUy0l%2Bu4hy2BSHAK8yTocr5G3%2FrXlTLQLno%2FIbr3Y59NJO4DzzNXiUaYJMNp83Gp1aQWT2HNgaTjYmSG8i749LViEhf017Jaf8MsTqCZx0vulK9&X-Amz-Signature=1f1c90dad963fe39e50c99acad782fade3bfac3e73760f0219bd88a4fe4ade62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

