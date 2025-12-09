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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5VD5BP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNy%2FUQwRjVQJ56W9mAczawBKn6855Ge22yFhK8Ax0twIhAMeGtAp%2BEjymzzq8CB%2FYBQ%2B%2BN1QeO7DeGL2%2BY51tFtL0KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyReslyDix97TFDHcEq3ANFrAiVZ41VT6LmmQ6KmVsTN4A3jYMQhc0z%2FJ8vVSmYXiHjD%2BUT%2FtHB2x0elKee1ONTv9AhaFdxns4rLAgT%2BLdO%2F44t7Zpcn%2FWN3EbVi4DxAMKe6TUlw%2FdsqViJiiDM0FCv2EuZiYHjV%2BcR6c6W%2FlPHCjiwGvKNYYRy4zvuHWk7z2ZKlSltVyu7Q6qV6JTuYboabxrSA9AzaELQVjm5eFF%2B0el8Yxnl0Gh9jGEzaeDohazXkpPHHrrkslEEqPh5SsCjfLrRHLh5F2ELQ42LBz1QqReKGWWzMdv1t9eE2BlnfkvQnE3ghL1Lzo71JPPWjpgjCx1fIQ6yUyTMlLVCNuvH8XZ2SxzzyIjjh1Jh1DkvDhl0823w5hspyat1pcGgG%2Fe37oRpQx%2Fc8nnL7YnSQ4zvMp4Ux0TE5oQ%2Fnb4h5TLOsQb347hC2LVfcVHsjHGl0QPFgfMygMUiraawt6F%2FnUX%2F2XG%2BIHgSgVAgReNScBYnUCQkfqPMGASqTF21Lme1j4aiTESvyZb9AmFFNPJTEAopEWk3rwKc74kO4Gwb%2BGql3IxNDGlJEGm4WKlq%2FDFeWzbi1xQ6V1ezUiQ35utJ9BBmgBx%2BC64oLrARaqmtWg%2BRvyJF5C3%2F%2BRPGHA4wRTDSiN%2FJBjqkAVGeCfMwPSU0Yu3aoknBN5OWuRYds5OuV2CPoWBQwFTKocDZQjGV1iv3fhZv1yQTf6JvWGzHN3p4N4gS38U6sAsBuhcGx9OjOL0ahl%2BaUhKtX9m2MlYw05z0iXEcHOzFyO%2FZ9yrZmBoY1D04AIRt2P6Vwfmu7DhwEqP79ZEkIwqQsRLxwJ1y8sRvCz56fpbdB6GSBUoDZTTy1ZgFq%2BeA%2F5nWpv1p&X-Amz-Signature=0c49ae7503c244604c7ee3a3c5916f9055232a712c3342e6807b130466169b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

