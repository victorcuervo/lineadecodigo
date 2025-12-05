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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALFEBNM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwf3%2Fp9LwZG4QC9XECRBo%2FfNAn0xbtuWdgfQfuVp7ebgIhANKsZ1peOremp5lHOMYNs%2F1HMflVk5WDbHh%2BJHN8%2BskyKv8DCFUQABoMNjM3NDIzMTgzODA1IgwPLrDzyZ7YdRb6Xjoq3AMXyB9C9AIwBAdPERhXHLgwRBKCTtzESqqrbpQ9uiyT3gzs2HLkJj6zZAE6rERf77XM6Ko324SVlsXhAdxFiA%2B35Zqo3WM%2F%2FcJ68DMDDDyPC3e68kVcwQccAWtfR3SqNHnWWvEeDjXF43%2FGpis8nouxNZQn8Ctl1qCQ5DZXnOlkMVR2JCf09U8Kaa%2FMkPR%2Fy%2F6wphDO%2BAMDhBd2a2e4xSoF%2BdRqco27JPIlZeiXnZnU7ywu%2BAhl5G%2B8IIGIuzBWkHcQ8xESH30YuGfC4FB89Z04vatoz0bfS6RubyprwvTWcnf%2BJ%2FFUZhe%2FE4pQ5fddoqKXjH%2FlTsmfpr%2BrGlpilXL4vKWZY3fOIoNXWDAmG662RxCcnNO%2FuuVpuoo2CdOxvO0ncPMRT86CBpApJoDIgHfWQJNG3mM2yfEZ1mo%2FN%2FCBJeEOV8nNwOdmfwSKbhlxnRakMpP35aQnCU9VTFOGEbfrhYQs8dzm4xqYGvqEBqZTOH%2BKbewK3kLaJ747Ab0tNYh7pr3p5sb22Nk0SFQfCczNFeVEgmZabYjosx%2BzmDwufVo5GMFkEwBYzA%2F3p3KHx90ctkE%2FeecUkPG%2BM%2F0iuqtPQ3dE6CZfwSNmnHqv7r0HKHb87RoEVdIWBDpikTC9ssnJBjqkAQCds7SBHRmOju8pKDWFKi6zL9UzfaVyYX8uGPplRJPrZowNtXG%2BDy16oqqKBgOuI0OcPWv2OBIRzW4vkVFWAFSVQk2Utyc1rOMlyoCFvr3DIZ413WC1KAju03ukn6fDYFWkxIGFPN0TsZ3bsfuIDJiBZ8tdBVKnafAi9XCyXSi8i5SLHQAxNA4wtY7zRcuU4aYKgeKPUk5a4Pkc9mizCdT5B34x&X-Amz-Signature=4c7dee5ac462a2062a297b64612fc36edfde6594d20c97e61f9520b69c36b53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

