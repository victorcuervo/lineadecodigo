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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I6QZXLC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqb8PlOZrxR9ks7LdzwRP%2BLNeneK5AweiuQoFvs6If%2FgIhAJNc%2FQfLAFZEdvI%2FhPY7Gai79n2D0X5LBFAuyrKKa7alKv8DCGYQABoMNjM3NDIzMTgzODA1IgyH2%2FHtaxmaikoOMOEq3AMi%2BljqvuvR053QH5oD2hoRO9vWeOO%2FADqtfEBCVmTXHWxcXstvYgiasDLZCqF1vcjBxNoDMnyJ%2FF0QaO%2F4%2BqTatPXo4R%2FNt4q4Jne9ZqM7S9FVESvZ3au0CKeneCFtxfxMIGASOV%2B643eCbu7mFhFBvtZuhSSN38kmmX6iPUzTSWYAUDco7gUtLEfPXEzVpTHDMbp4IlQQEsRVnCMejlDIlP%2B4NWmnc0vDwB1K3WMB%2Fk%2BU9KQARw%2BREJivw8tS7WbYqtxXcJ6owToc2plcAYCdYo2jBwRyOLMk%2FlLGQj1n464slsu5aVe%2FEDwI2cgg1VKN6yPAnD9YIOV8%2FNKFi7hKJZEyFAGBCs90l93PsQi1FxNunDTPCf7ubTo7K40drzI2Z8MHDvIPj1rBCSgldv8PFlvKyNRk9l7yDqnw1E%2F4nAWkbV4vleuJZpBs4e1dskeqP%2BHk8pjBrBRxEjuaJxQxtkVZvtf8ksn4JgzJi2FmstSTc699w0LgpMOerlLQfGMAKOKJC42RqLsnBkZYgCpL1hC%2BvNitTJGV10TzTNC8cAl31wlT%2BkAEs07%2Bfkrb9Jj%2Bz%2FguOZFesiEnzj886pLEm91T%2FDgYRadVDAUJzyGxyBwTiGLDGuNROyr7dzDAjM3JBjqkAQEEVZlh72PPWZF3huRa4cNUNSf92QnxWLsER9Rwmal0vXBOobapuMGtx8HGuxeP55h%2Bacb5R9%2FldMoqiYbCLz5iaqv1gbpP0u7BFpdLyL2280SzgvG55vCsQU7u8B0DIvOWBVCTJw4uTLC0K5two9u%2BlyA%2BpYj5K5n4%2BO5FQt%2F6gqaPcLB8LA5UVgh85ZJsDUEcndltA2kzvM9fgRdkkfVmGdGs&X-Amz-Signature=8fa709aa78bbdd5c1235344acc0cd226dc6eadad03c70490effe7276348d9ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

