---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHL6TY3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyS%2BgmukzlWuH1IrbYpHnxyfvV17EW89L7GTKBKnGbhAiBSZB5W8FvNboWk5VfuDgY%2Fp79wBEbnp9IIddDr4wLY0SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7ansC%2FZQ25upx3%2BrKtwDuFivzDBxKxy4dvvkumR9omJGrBy10WD4r5%2BKR4FgTlti%2FqCrfG3Loy86UOgWgze5cKRA7DHLaNJWsL3qpAxS%2Bfj18JSFM7L1TnNwUk8JManCqOs2xhsnGfVv7jB9rpPS5gGlo6atWPNFn%2BpagMkLwDzvyTb63IFuHjDqHGAbw4MbiyDo6TrG6UgwsfHdApok3x3TjC9MAVduA2qoP289fHcqrHIRIUINHpDWXBc5QHOTFgR9MovyfXijkeGh2uNx6HZB5qEP8MxG8M7Ys2n7CEngUbzQLN5T0KrchYpPnzufcM4y0X9uXvy%2FKbfNYYVN2bSAVjFw3yqzNPe7saEdg1bKUB3CWDaIDQIYX23C2lb7lC%2BxgFXPb3MVPszOcFW7LXSFOYXy%2Fsb978ulGqNAvtoZZE49bDkY3a9GYC1LdtHdrcT1USvgZM4NqO7LjP7tVW1VHsqqwIW6CBMGjnkQrdYYYVG7W%2BMj6YKa2a%2BeHkni%2BshHmeqGQU4SYonPUXaqM8XeWzUx4WA8qGACpoctxTNJExjPLkecYmeqPUaitTBkQ1wQMs89slDWadCCTWlDoRcCWFGf12hCUEkYRZGfy75J8RVevDnvkXjSDUZQ%2BdNro57vcs1XRSW5WtQwwJrVyQY6pgHlh6cSL%2FO9%2BUEsOvC0a%2BBNrnsnFDhLIeKAp840t9qEHLXNkZ4S29rwM5WNknpMnTc%2FyqscFtj0IR%2BIDI2zgVKCBbZvue9T0s8J0M25lMV9olGQQhm2zSeU6eytbq94ZjHy1Q4Wp554dvw4Q0h%2FMFv8tveMWprCUM5jcmaHlBGdBkiYd%2B8X4n4chv6%2Bv%2BZBdACWeCTCYLf%2FT4DFQr%2BN5OUlzZ%2FgbyDP&X-Amz-Signature=76a9657c542aa699ee062a6b9013f0499f1e59e13b77e5b5eab30bb2bed7ac7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

