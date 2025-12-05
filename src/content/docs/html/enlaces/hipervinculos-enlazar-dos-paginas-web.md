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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJ2OF5W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTlYGohbyL5RAg0DUJq2M0R80tVu9RJYPgmozsr6PwYAiAq32%2BmTZdWCOFOOJjT0lWFQ1sg3g9YdeuLJ4EDuSNapir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMBgEa6dGMIfEjXdWoKtwDFb6lOOpIm1%2Fbzp92anuhS%2FwcJB8SEPMhzh8A5l3bgyb05pAoFviZqHOj1CEOqLsSMcGa6dJcaxIg7idDmVShnRnaCcfvyiG62xn5eC3Ch13P0dzX3MAKZqCMtrD4DcIR4Tw0kwXsxlipabCNUQeH%2FrhRH7oZWB8mBB0scppRDJYuck%2FkqHJF7SW6xA7zrF7Rq%2B69%2Fym1vN0KMbnOvUEmGB5U91%2B5rDC9jBSPNtMhUXZd5FizdMyQBOpgpZxxM5Zxe8e0ScNeEXHW5hKBELYTx9AcGEjfK%2B2UWtkBOZw3u3mvwI1xuYsRqw5708SVvutRhSAxZVc5EHKgHDxs%2FlA%2FeyvBQdgNvuoHF4rbF3wC%2FiS%2Bcnwn1f9ohNOAowVn77nmu8HC5%2FZOTKs5XNrwx%2B0ZryCVjbgEm%2BGS70YaHWdkZl4O1NRVgehrnajJDFDrbtMYGzxOed12w3PrFFVSPmEPNn2LQWuiQNBmO7RIkcIMGPQfc0jPbhm8IkkUfv4fO7zAgJ0DnKkfbXfmTC7DoLuIdMYeOmCcG58nvaUartrcsTBf32EzESuGZWU6XEh1ep%2FZLYRdG8PIfc9ZIhl9kSIXOnCsbKSuwdspeyMqLsrZ677cexleSom%2BRF6qleYw28nKyQY6pgEzrP2G9paW0CQ7FhL8TdJz66R%2BjSZmzB1loSSr2rAu3E0M%2Fq9toxB6gv7IftyPJ07c65nEWvaVzITzbuYPi5R6Z419x0q%2Bm1AeaaTiD%2FwoHo8IuIdMZGbBj0bOLqmxa39b88el3muE5LKmNpUhzfy9U5Yy4KzjjvwATj3CyJVbkI2pJwU5RaTk5WTeauMtByXHpIBLUdERywDa7530LZ8Tz5xzDldw&X-Amz-Signature=3fd053afe31499d9e81b2384e33d65d5fe91c234626266f9b71f3af3972c3277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

