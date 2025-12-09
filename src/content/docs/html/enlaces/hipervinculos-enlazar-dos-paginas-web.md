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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEM6Q3W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfrWDnqIcb17KQ944vvwWAGKatsWm2KHooLAvgu0SNqAiBogV9D5uPPilZ9CBnuNIrB45wmHES5zzwlPZafqgC7vyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuixMLgJ96MMB2iWwKtwDIoMXJqquT0%2BaI4LTv%2FQzcffhqDCtrNmJ%2BbqknqH9GRQqFFbh%2Bfp3%2BvgM7M%2FUxs%2F4B1NnQ8Bwa9LkY5RnhTkZ2fTJezM12gGSjhzBHXFxyV79%2BkpKCV%2FQvQHg%2BFzw138mVw%2B9iv6s1wyWmIwMUk9Lplc2dqZerdjH8izmorYps1B5%2B7LC%2FRmsTvYG4BxNGmkoXM9kjQDXcGJJXGGvIux8RC3s1%2FebOqX75LSVo8%2F3szxFFUnNPUnDFXkCISabKg4KlsYzEqmeT0EL9aBMkvDxO87huBpMOvebe2gbeD0vW9IpgwSQ3r7IefHaB%2BfcQgFPRWU4rT4F5YFctiWDouB3flxb%2Fy0sgCmb%2BIFktpxpJPOKEXc2MRqxF7O5D%2Fef7IwWJqLwKmsiHnNfqGjoPDcG5e3mHmRrUQTbz0smO1ykieNGwh0ToH8YGoHmLsWaoCtlyso0QJxs6tm1xoMJx8u%2Bb6w8Np8ARxh54mkuWjyrLei5Javudl6Jw%2FJRoXpe1O0G9IOu%2FTmOfbz4O7vscyXBv1OYJ%2BpblnGE8NPczspKg6rHHh52ALQfDJ1fdQVvVwPplL2AdSOTpFxf6wVLCcRRTw2QQpuGZNzdiZRSFGLCIPAMEVoNRsTjFtEtN0Mwz47eyQY6pgGTeFKTeUY5An2YGf2EVoxc8ONAP%2FmtBth46bk1C5PQ43AVOcOkoA8HDeiDnFU0DWqbxIjJ6VaumD116MAfDey%2BFQv9rwTCL%2BZ8qG4LDNZG3kKQIYhpKbNbuknbWKxJgXlPvf6L1EgkBmIWVbTbwMY%2F2fXTI0fuSQoUQj1e2H2dB3WeBbRndIbv9h09lHhm1grRXWCJuIRBCo3o94DE5R2kytVVBEU7&X-Amz-Signature=ce2fe5091413175617c0035f34c222a0f9a4f91d3415bbab10d618582322d2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

