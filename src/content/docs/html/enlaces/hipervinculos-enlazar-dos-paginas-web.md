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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFS2552T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr%2FtFjPa1xQx8KiblDsI7gzNYOYxq%2FitNT2Jc%2FOxa2BAiAal6M8iwVae%2Bv%2BrpUiWyMEM7ubTECCP2J0Nghn6gQnNyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFDpBKEvgH9h6rmB5KtwDPqnDJ2zk%2B1037jBOZhqfjqP%2BkWL47Ma55Nv5000%2FwbT3DLWs1mlbGXtderSXQdQ3KEr3AmwTIoAlIyVuXzii1Fk4kvG%2Bsr9RdflHnhxKqX1oPAQaDEf%2Be%2FFsjTLRnR6s61O37n%2BYQI3%2Bj%2F7qEQkzWA1Njro7M7GL7lPbWkyeuakWzvUArqQMFy0mAIaYmVbZKmgJ88dttT9kYpeZH4n3Hrx0g2Vgd57eiSp%2FVEGh2mYYyNM315y2qyTxsV67R7adgZhobths9lCK6dysKG23E8Q2%2BWq4aXlmRLQLo20pDyEvUfMbaMKGPwjo%2FpOv8x8%2FmoZT0ix8iwXS3vjJafErKhNJ0zunw8b9sN2VSdRuaPO75ZoRo4cpQV29TKE7EtW48Y3iuiTdVeEimrwFSNl60IS%2Bc2FQxfNS2a3EpZTLJ94GHxf49pbu%2FUgo3AawED2EdCX8zfCBfnK0HKech4mR%2Fv7idqzaZJ5rgx715EfFqACzD%2BWeUuxdKR%2B74VWn5%2Fl2XpcbcnNpBcxsZTsWQw%2BL7nnU0crQW4mMasdO2dVOGyMwu0wUiNyAfUP3IanwbGlxjqn2Njjv%2BWIyzer700mU3IBn9JedkC8ounCy4L9V6QBZBmo0CKMPQ4Akp4ww8eXeyQY6pgFL13mar%2BoaOCIew652LvZmFmlq%2BS6tu%2Fpd8Uf4hXvsHgqQYkXdnEE%2FgL05ieXXd2Olv%2Fx8k0jjt9lEZkarXK7n17t2QSA%2FZug3JC2rEIHofkKZVIGMFiamMb8%2BQekzb%2FUQ7OSe8Bv05yeSYI%2BUazilMOS7jPItJqgTDHgWG0e2v%2B54XYPwBLbkNHzEnwQ2ZSfp8z5WGJQ5SzAmtOSrmKUFpiChSJcP&X-Amz-Signature=526e50e1c869aa05c91419f85a48dc128f8259a7eb4930a13c0f8e7a8917a33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

