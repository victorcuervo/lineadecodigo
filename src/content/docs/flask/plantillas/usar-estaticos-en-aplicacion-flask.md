---
title: "Usar estáticos en aplicación Flask"
description: "Aprende a usar estáticos en tu aplicación Flask de manera efectiva. Descubre cómo referenciarlos correctamente y mejora tu desarrollo web. ¡No te lo pierdas!"
date: 2016-03-19
updatedDate: 2026-01-17
tags: ["template","url_for","static"]
slug: flask/plantillas/usar-estaticos-en-aplicacion-flask
author: victor_cuervo
type: doc
topic: flask
id: 4bc191e1-0c23-449b-bbc9-51a015776c91
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/estaticos.py
---

Si estás trabajando con [Flask](https://www.manualweb.net/flask/) ya sabes que lo primero que hay que hacer para usar estáticos en aplicación [Flask](https://www.manualweb.net/flask/) es guardarlos en la carpeta `/static`. De esta manera cuando estemos creando plantillas sabremos dónde se encuentran estos ficheros: imágenes, librerías javascript, hojas de estilo,...


De primeras podríamos referenciar a un estático desde un template de la siguiente forma:


```html
<img src="/static/images/logo.png">
```


Y este código no tiene porque fallar cuando ejecutemos nuestra aplicación [Flask](https://www.manualweb.net/flask/). Si bien, es verdad, que la forma en la que configuren y desplieguen la aplicación puede no estar bajo nuestro control. Así que puede variar la URL en la que se ejecute la aplicación o renombren el directorio de los estáticos. 


## Utilizar url_for para referenciar estáticos


Así que deberemos de utilizar el método `url_for` para obtener la URL de la forma más correcta.


```python
url_for('static', filename='images/logo.png')
```


De esta forma si tenemos el siguiente recurso: `/static/images/logo.png`


Podemos referenciarlo de la siguiente manera:


```python
url_for('static', filename='images/logo.png') 
```


Y usarlo dentro de nuestro template de una forma sencilla:


```html
<img src=" url_for('static', filename='images/logo.png') ">
```


Con esto ya hemos visto lo sencillo que es usar estáticos en aplicación [Flask](https://www.manualweb.net/flask/).

