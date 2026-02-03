---
title: "Último punto de una frase"
description: "Ejemplo de cómo utilizar el método .rfind() y el operador corchete para recuperar el último punto de una frase con Python."
date: 2023-10-17
updatedDate: 2026-01-11
tags: ["rfind","cadena"]
slug: python/cadenas/ultimo-punto-de-una-frase
author: victor_cuervo
type: doc
topic: python
id: ca13bc06-c6e1-471d-9d3c-fcb3a7ade7c3
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/cadenas/ultimo-punto-frase.py
---

Un problema que te puedes encontrar cuando queremos generar un extracto de un texto para ponerlo como resumen es el de ¿por dónde corto el texto? Una de las ideas es encontrar el último punto de una frase con [Python](https://www.manualweb.net/python/) para poder realizar el corte en ese punto y de esa manera no dejar el texto cortado por un punto que lo deje sin sentido.


Es decir, si tengo el siguiente texto:


```python
cadena = 'Estaba escribiendo un texto. Porque tenía que publicarlo. Era un texto demasiado largo.'
```


Y queremos generar un texto de resumen de 40 caracteres haríamos lo siguiente:


```python
# Cortamos una parte para un resumen
cadena = cadena[0:40]
print (cadena)
```


Como podemos comprobar utilizamos el corte de [Python](https://www.manualweb.net/python/) que nos ofrece una subcadena de una cadena dada. Para ello hemos utilizado el operador corchete indicando la posición de inicio y de fin de la subcadena, separados por dos puntos.


En este momento el texto que veremos por consola será el siguiente:


> 💡 Estaba escribiendo un texto. Porque tení


Como podemos observar el contenido del corte, al ser por tamaño, queda de una forma con poco sentido. 


Es por eso que la idea del ejemplo es buscar el último punto de una frase para realizar el corte desde esa posición y que así, el resultado quede más coherente.


Para poder buscar un punto dentro de una frase nos vamos a apoyar en el método [`.rfind()`](https://www.w3api.com/Python/str/rfind/) y es que el método [`.rfind()`](https://www.w3api.com/Python/str/rfind/) nos permite empezar a buscar una subacdena empezando a buscar por la derecha de la cadena.


```python
cadena.rfind('.')
```


De esta manera, volveremos a utilizar el operador de corchete para realizar otro corte sobre nuestra cadena y quedarnos realmente con el último punto de una frase con [Python](https://www.manualweb.net/python/).


```python
cadena[0:cadena.rfind('.')+1]
```


Es importante ver que el corte lo hacemos por la siguiente posición en la que se encuentra el punto, por salvaguardar su valor, es por eso por lo que le sumamos el valor de 1.


Ahora, ya sí, nuestra cadena con el resumen del texto devolverá el siguiente contenido por consola.


> 💡 Estaba escribiendo un texto.


De esta manera tan sencilla y útil habremos conseguir obtener el último punto de una frase con [Python](https://www.manualweb.net/python/).

