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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674K2LRZM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBarblfbsmCgjPfl48xERkBaXdZ89jRlH8Ec%2BptP03dRAiEAqUOu4nIs7GTxGxVwcaKfVGzr7UTBxpxnjl56qSLQr90qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOezX%2BTxI%2FPdChJNyrcA0sMdTVvhnAd40XDiRHwTkKKmhb9skC2Vap5PP8KFAnUK8MQjbGTY62BVGugxGaJ7QJGI4rSuFSBL6%2BtkVqgzZAUIw9%2FKTdLEQMNT5ujRO0W9PFTiUEoIT75SekFNydhszZywcgpR2UlWEj01G%2FUiA%2BC%2Bk7njpoQkz22oEfEIHTm%2FL5Bs2js4WZOzdrwsS11BdhhOJcVe3EVHkv5CarEcyn0WgKx4VUQOz1yeSBaa%2BFhv446IWWhgR9lGZmWdW718qbO17boTGcp86%2F68t3YgbqBwS2h8Ea9jPRidTwdYjNSBTM2szSRWQTZA7AzGx7%2Ff%2BYl5%2BZRxVBe2WhFvu3XhSudyFTJH0VkduqJk0HRdDNgy7YNSvP0LBGmJS4%2BTViD00vlmW2iZw1akvLiErIy0SnqcMZKh2yXTD18n4pQhsFESyi33mJax7gtFRl4rvA2G5KT7pm%2Bx8V1dUdDsUOuq28P4E2wAcqnzETbnIeKcypCUcWSoLq4GhduVAwIab5YPAbVskRta25Cva1YOFJ9VhmZJ2mHOWLSIQcFb1txurRmjMNpOx5GdkCIlVCHP%2BijgUVclAY03t%2BlqaIshRyB5Nvvv0Voa62UYz4MQ28MNaTFtrcFCI%2BIw9hcSvdfMKyZ1ckGOqUBZbFlMTs2wzDoAB08rwS77d3RUeWnYxFz%2B9WNDZKIL2hSnkv5jdGauFV3lIgujA%2FdWZ7mAC5ZVO%2BgIUfruOcDST2g9QzAhno6%2F1Fk4e6vZBIGoY2%2FXJo8NAE2ymCBvg%2BiIigNjotg765k0Y2Ab36dCloq8qXDrAYq3hn60c9Rggw8m6hBQ5KafnTbIq1cCadz9eJPTyMX%2FwwtWA3FHLV%2Bx6Xq7%2Fwy&X-Amz-Signature=ffaf81f67b6e08e7f1bf8b1bfa3bf846f3500a41ae8db9bae16cce220f41f512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

