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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLDVXPY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfHN1CvBwzHm%2FDuUbW1HhZgKHmD0V14X46aptqTAjoOAiEAytPboSl29wpwRp75HgOJjlofJ%2FBP1Z8rIG8IW5n%2FFaEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzHO45zGYWbPdfulyrcA7xZFE1Ht8cYCbtzP9%2BNNEraz2DHiuX5onT85tK3dr0D2O5jXwe%2FkV%2BdsLhbyB0HWNM5Ia7vmJYzLfz%2FE813zpKkye%2B6HTiBRomjXWhzEOeKrweAvLqGQN4GpnMRHhq6LAesfUH63Ow5mK3h3Ssrmfe1Q86sCph0fgtjf4IfeSBx5vooPACqjNLb1kP%2B3K79weyB8q79DLXQR5TGEUE5oYJUzIaObf4YwqWoiRzTnlZwpKJ0G5xh2Lig8hBksPrXe9rqNgdatZXUvC9Sc88W2Rqq9eHYdlqxhefjW%2FBt102KaalVA%2BNQ8pd83oilU2GhipXLkY8x%2Bo9jTrziwTha70DUU340EoCnw4l4WR6GROWFonTC9eN8H3CiPV38Huqig2XucnTexCmMEzX9DDzHssVJnH4K5cAfnca7dzF3LiZmNXPC2EXiR93Hr5VMggaNawbYjoP61vG7XXnD4muP8mmk1SGPHqpBduW6t%2FGou14FH%2B4e%2Ft4lyFAQxtOLiHezlS6R7qeXIpw6ggEBY%2BRlBZiSISsBE6z%2BoqdVeigtjRDXetIT09pfFbZd1uIaCFbkDMZRjpchS%2BMTB65HU%2FlbGtz4fL2niuAuyWZnNu0fChfClsSldfgJw%2BSidWRcMO3o3ckGOqUBrlpbyDfYU%2Fdj8Oh6n67NvX6Nbi5nxs2MuKoOJHHM7pSaqDn5i%2BiF0xdY9yBLar9MNu3bPOWln6SAZENt7xUtpmDkOgiOHYOwHSl9AMKO7X%2FmdjCFCLN0nmVG29aqoisRa1fn3rarr5XMxDZwG%2BqFSNe2y23X2y4M1OTMEX1m0Vv2%2FjhQBkypMUelKgsES%2FTBFkYn8Bbe3m33ZXq%2FNDMf3aLBBvol&X-Amz-Signature=e63cfd75bce74d81e4d1cac0d42022cb43663762cb0025c51f68ce93954e21f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

