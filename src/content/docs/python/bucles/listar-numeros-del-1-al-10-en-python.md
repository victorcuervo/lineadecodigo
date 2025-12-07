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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZJKWXK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICX%2BBVJH3DCMehTpjeOSwcNXNvCPG8fWO6mZbdNVW%2F2RAiEAqdcAsc48Ki%2FZX6XAkg6xhoBj94X3N2d135NWaPMCSoAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrv%2FnHDIK8YRfDYEircAwNfY1TQMkA2ed5jIN4jx2ptj%2FG1Ej4l0hOtaQEpT0I%2BjVVQpJ4DDuWdMxxoRhucJzY2Ah%2BeYObmLbt5td8NREF%2BTLXPos32GwN4wNX3hfvPq11XSp3XCXEPf2gDykJkX6xHpTyW3FTdA1YdpKwE69G6R%2F9CcVLFPBDW5TzL2yG%2FoMoDdCqf1mZp7F8d2ZX9RuMZGYtR2oi8dXKGkfjUH7jLo%2F%2Bwcr7LxRfwLAmi9hPjMEOz7J2U7jDwJbYPzAhMD3JncgIAYM7iePyz8YCJcDXSRvWpuLnWdfw%2FGc1nrH5E2VmprDDB4%2FICYhi3%2FnHOE3Zu4w45Uf46YVzOrfmIYYLcQx8O7kdT6%2Fyx84Ox%2FgGJsGcCwMFBK8BaJmoqr%2FzgQolCiF7qIlhcL950knZ2eAbBTTS3CYobCQOa0x5VWCbh0KPhrTgWQMfewyKPivWNN4jKx2LhnvRUuAQhO%2Fsns4icLv2%2BQgCniCWdlCj4IADyJgBfwD3NFTsG3Ro40l6HhBDP5Qa3DdIqC1luqNpGwohg7LSBfMN8vZORlClo6a%2FMZVBXC9k%2FlCVPsiWENqVJdcBGNvQ%2B6V1iL8%2FcjlR3GEurwosiCTK3xwqlJF0GYjmT7CISMUApbtPKRWE8MMeZ1ckGOqUBITIAPWVi79Byky4v%2Bzs7oVvlrHgbGDugcRUKFJ%2F06faywUhpO%2BJTq%2FbIPHIBklCI8VYRVECn9XWSX%2BP17L8dAfso9FyAu27wPlIWz8n0MFIi23AViDd5oyDgVlvFdw2yNaO5Wvbvg5JbN%2F6RAYHKgSquEKyHk9j%2FccAFe0QdHNg2o9cGS2VAfGaFxKaWUWr5kXem%2BXe1W0BfYwj5pluAvzW9G7iM&X-Amz-Signature=8ebf55a9c5ff84544e1e03cc50421d9e63a2a929f65db51ae0f17990e170e436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

