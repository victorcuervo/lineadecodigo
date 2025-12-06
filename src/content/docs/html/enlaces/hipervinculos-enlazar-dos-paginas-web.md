---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLS5SPZW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiD2n5is7jMX9yfph%2BW8w9EF%2FUy7xvPmWa7ZOoxsrprwIhAPr4pNcojbujIhR4jviSHjPPKbfAeqOJi7vTCre%2BdZ%2BCKv8DCHUQABoMNjM3NDIzMTgzODA1IgyDHWMQRu3%2BRbVSklsq3APJMSd7oU6146mcQDJxvNjBx904WVvzFPtn6vre8mSWuGZLPyDky%2F6q7iREewNeLG6ElyudXanJsWMTEkEXrNO%2F3qM0s5dN2ndQh0xz8iU99T%2F8fJugQ%2Blr%2B%2BsGJ3vcqOvlYZEsFuxjYKPmOXflBn6Fz8aJLyar%2B7Gcj2Yzr47TQzDZra4R3mGC8pSLyac%2FCz%2F19niIDngOHDOcuv2FuFK85DkyauuuAjSpAsxOwsHNy%2Bx0Xog%2FBk%2BhTOIIvMi35uEeZdOYAY8cgEfyohggccM0l%2F%2BRbdDz2e8P3Mof3iIRrF9VZLThc7fer%2BhV%2FtmhizSojMhf0na3jIQ4uC2CDm75sqNXbezhk53oZK2Xz2JC%2Bht5tyxZqUh6FTKYxWJiYDNVvGCu%2BW44Dysv3gE5TosEui%2FX8lv8p86D5zeQNXZxnbN%2FJd7STkWFFfQu47djhcu2XAQruFDFJ2ly0esg3VLujuyrBNsAaWYrgpIb6nqNefYExq20wyJLLTjO8kz3TDN426WlHqJauPyKWr8QkIXe3udNHYP7eyjAzJxkSIczebos3QbS3cim2A1WPS7nhO%2BI4V67WcKJiTpI81kg9KboLa8WL5AE68tPmTGs%2FAnmrA%2FeSiLejx9qJR5CRjDOptDJBjqkARrFXqyCYD4VmRGyCUYOiKiTntrL6mtG2cJn%2BbJ1HqFIdeU5eddAduEoa6MAN2b1GTbvQ%2B15EegtLJ4kTwFKQXB5i0N9XCO94KSy42XQZ6MdTSSkmMkeKnpHI3QglZdHSO%2F8PEUC7q8w4rGJPEhUJKMnqkkQH7Nww%2BYFtcEC1VkouIeIawcaJGwYwsPTRynff2vNQY6vV14g33SeKJsxobLb9LuL&X-Amz-Signature=8fa91b318e51ccf832b73d8f1fe07fa27ab5f5ba62833f12e0383a1bf9b90484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

