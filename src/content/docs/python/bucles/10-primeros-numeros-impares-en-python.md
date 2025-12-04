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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWDVJ2N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCFfTe%2FN8UgZ0Ghq6glmiA1TVj%2FQ%2FMoGx%2BnT9G%2B%2F0ajcwIgFn%2BJ1b1Sy87mQIUl80HYHsoajPkt82kp1OhSug6Lljwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHTptOUQG3PcXMsczyrcAwVL%2BftypopzUQnKwGgzbc4yGnNXEUXVzEMWQM6pyhWC5wP6Ad54jwxot9Onl4qYZukj3hBRphg%2FLyykjHT8RYyoAn1ewfXEv0vr30sgdDQSvDFQDRfuf9DzaG%2BqYRbmhYyVZ2944n2AJCVfDuTdw4Qn2X5Xl3v94sd3xkwFomqEevOF%2FREukN7DPBLOWhiSYaGEMvPKSyypBwSFNSPDP6GjlDvhx8fGdT3sEUyOxZv%2F1eBQ6aCowxZiREOOAePmo3WMkzApMWBsOpNiffXGLjre5ccysdNTP2RgxeYlaTUgkSt8j1BkwB6ROnLMANYQIc1WBlaVUCpf84zdpCSiOs3tDcm5al%2BSAyTwB%2Fv3gsNKox4jZnndK%2FD0p7D%2F%2BerIi2XX9zldcK1cOAkjmQeBwOaxMdqYHo6hNauYB2dx3COuiQvcw1Tx6%2B1bafj3y4AFzyeg4IkOGaATaoCIXvxan%2BiRcuiKL4cz3oM1BeUWuS9RrBN896Ft2wgqSM1r6KCuzsCSRoPT4ekUKnWxP2zZPFAy8Uh1W4wUqX7if5MzbXL%2Bc1qaT3mJPAy9g2XmoBSotYbqmqRHvbuYMKffQwh2Yjeq6i%2FL6GtVEjU2siSEInRana%2BbygiTjQplMMsuMLS%2BxskGOqUBHv9bkBF0QLTjNjU%2F0VsbgqqeNAwZn8G4ql2Q9%2FIHpNZJHf0af87HCNzB%2BhLekTOgEaYCtlyCXJ6TPs7WYeWsjlBr0ErXW3vUIyySSWqyc7YYih9Wkc09%2BWoZCCsHU3jjC2j2TMPa9XtX19611bgIznlf3hVwtFCn8UeVSM9qNbAyvkdUjQTJnAzpFgJtHGl%2B0U8%2BHp4d99L7VM4dhf27JLIQt6Y2&X-Amz-Signature=00c7ffa7c558e9e5d6ee2d5293de7b33e651054b7e4561e34cd2ed6017911eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

