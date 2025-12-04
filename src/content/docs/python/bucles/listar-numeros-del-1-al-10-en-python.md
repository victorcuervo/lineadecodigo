---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MF7IN4G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDkSUE2MS6K4OzaBHMLBEAqO9ch%2Bh%2BN2%2BLtb6SJXIINkAiBTx5UBabdp%2Ft7gmBC6Sis%2FfyTREnl9TfqCMCIxcBsw8Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMoQtWZ3tuWl4pZ7q8KtwDiucCVyfkQXbS%2F%2F%2Fn6xmoZHeFAAkpfjFC%2FT8%2BB4jHnC%2Bym2biVfPPiZodtCW%2BP1JNjFCiuw8ey%2FzyqZXGtt2P%2B3%2BiZPxVcURi16BhCa7Bc6g%2BMIlVI%2FZhagudEDvCEXDaKGixw1McBH8%2BMR%2BhGDXKjefyAZ02PNv1tRQuLmbWbEI4yCH2Npi2nHAzZCcQer%2Fs4YckkUYItOjORrHTs62p22Lhgtzv9fNcAcAT1WZ0zkqpQEIKWnLQvlx8e3l%2B8r5l9gkbjxZApmF4A%2FhJ%2FJAFgTYog%2FoXOWVkfBz8wzG6zz%2FbyOlPwzEv2OafiEmsZ4z1RFDHBEmxag5X7xYMCU9Gpyj3N222uuWPdMgDn1PbPnEdr7qGLc2G4VIMv482XBQrARdLp6Y7XEan4IH7JuV6v0B3Vvi2HiMvLRtbKTTGXyF3auvZj48XND97pvXK7iYKffEVk1xO%2FurSS4HnEa0Q3AUhTwAc4c%2BhwfuQzI4HiATFFI6nVK6cPeKQibLA7zFEl8W7a%2B1ZPBMV5mv1Dp3R2cm1FR2NqgdhWg17HfBtI7DLZ3HR6DMFm2kSsp9LY0pndzgwoA3Q9G1lvtWM%2B20LpLGqWQB5jTDGssU4QGnzU%2FawTHo13LbweLnCrfcw84XFyQY6pgE6%2Fu%2FSTW5dRuwjriwzN%2BJAIqyeZ9sA1QaxT7QHaqvDnjvEZPYBL6KLDciEPBdlCB4y89lNC7PI%2B6d8QSS1B3nf4cV5MbSwmNHp5uEu9%2FKmWTRpKvJ%2FnMslrLoQeefRPnmpvhiIS41dx5qybPw5kC%2B5lDJrxFVZwBd%2BB%2Fo2dzDGGm%2FsZrx6v5JQGjnVRzLFlJ00dhiXHoy8JjVPPCb0YZjUEkQ0Yq7D&X-Amz-Signature=4bb35996a38d6242b7412b40f4f05a92210d953efc5cb8d3e8bde0d978b32e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

