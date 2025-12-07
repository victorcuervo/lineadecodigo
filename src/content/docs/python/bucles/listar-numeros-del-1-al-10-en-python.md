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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VDPRISV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAxrIWCDRUytW%2FUXx5nTBGwh5DVlPk4qhyx1GqqIKamAIgCI0S6gsJKQcneOX8bGChRTLrmxH2G%2BzvLmUHdTj5m18qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkV5N7zrWfLNdZSaSrcAxgr2c5BxIYijotvdq1GKZ7ISYS7V2feI3ZUXIFfgTa0D8j%2B87BKdGjnY2KBKYcES8IsF2rjTTzZ6%2BLqnl8abjk9XRAKI7Tk2oIORgTh17BswhUSlo4LxdGUa1PFVmqWlJYyFVWl53cG9TDsvxuyuYqPm9YCJMZR%2FKgF7iKT%2F5DD4UqxqyI%2BpTPI335J4T6ak1pvhgonrbF2CI4ST2IYEoV22mHQTHSmpp%2FXXdx6QMkIM5ZJtdnk3vsPrdog1aiD6QPJGcPZ%2FSVvESkQp%2Fn%2BYout8GRQ44GiMgrl8JWS%2BMM1f%2FP%2BcZ0mq9IuPNk8IB%2Bd8KcB%2FfnOxTW0qZZUsTUlLcDZzbJiy4i25AVwp1mSmx3nfbe9kXlkKYf7aY1%2FecCzDKZf%2Bp%2BCalg%2FFPMaCb0ODF%2F2L5D96enOKhe%2F6cra0KSs8pqxXEE5Emgn6Qc0%2BQ9NN7bllb11LBZHgPX%2FWXogPdgP1Y99o15eNXaRo1525ahdhRg3d7C3Gwgv6CHycOsXda2U0nF%2FuZjtEr6CbaxGBU%2BnA9QFS4FCgNNUoLLHyM8KU5RYZbCEPKpToMWOhCCi8qzJxlZOIChGJCW7pZlIpIYkBj8ZZMFnptoQnquAqOvTYBOF1%2Bzl8Mh%2BjKYdMK%2F%2B0skGOqUBWNoqq5b3GgiBRH%2FxQ1Lp59iTXo9YIvoAkpn7a%2F8n%2FdTp01m7%2Fn%2BNRr1OomPW3ztAJt70O%2BxG6dNyQl5rVxrsjY1MIw1x1%2FEQIhstLD350S9tEse9JU%2BfM2aP8sxltkdn4IhpbJp3GWBuxr%2FxBEAsQiXY%2BKYtvvjNC6AwsfdyobXBCp7p3oBgQ37Vd3KLtbi2DK3VFfMDVxCAnXBYgT%2FoRgmzm1TG&X-Amz-Signature=a3a8cc63a083fbac945a1633b3df6b3104e0af11ec454ca7074930ca6e5477ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

