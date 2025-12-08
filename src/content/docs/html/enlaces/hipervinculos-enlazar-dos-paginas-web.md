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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOLL3TD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkEvDmdXje1s4AHzb%2BGT9GK6ZkZqQJaBC0Tc9kmZTy6wIhAPy5uZBtnlVC7R3xHxdSbXaBCp33TWVYptRK2WzJPHh7KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsLaRNPsp7N422lpIq3AP2ETqE6w7Ml6Lah4onEO1TBR8BxZAkTTDa0HtoyerWeh14K4DQq9CsQkBCF%2B9hfBKxXoUjvGK8VKrDDj5fKXmX%2ByjjG0e4w0RVtOOCKlQGsQCIJ06xmS9JH%2FJIbiKgL2jjW5oAUi96RWS7pnswcER9zemGqs48mYRkx1taUBxFUEgRPqWA%2FORArDcMSvEOYbBSb0WIe%2BanNU1yQO54PL7wFKdp%2F%2BQOiPusnqjlk1sSeYwbygrON4ubdN8A2pPm9YVUOkaGAuKw7%2FS66w1eOVCmuc%2B9jjrYPR4FnekqRPXcaxP1RGmTh7cjthL%2FwnZ3zvYU5cQhO018R2kutIPUGUxGY8rgw5OzlLPylyX0D49QXh5MNGusvUikbS3PyrE933yV46vBTejBiJAXmBkSLHJtxNj%2FIsx45Y45QIrWq%2B77LzHRHdm%2FrOKNUV4scK%2FfHknthLstV51uUCfaUFgYbZ2Vx70gAL5uxr4%2BYY0%2FOMtz%2FwqPyK3x8SBTjZTlDzmesGSn4Kz%2FjkiraBJPk14z2lQTIo2i%2FZsIIxu1kkJ4VMv4zVCSONv5Y5hdlSXKzNoeKif5RPjv1sgC%2FgxmVC0C1l4z%2FlmG9dLEol7odc50BMIBqQR7m6ok7rpmepzutjDllNnJBjqkAYST%2B4RScwn3OfblS67KLr5Wbr2o06vF9me6PzeqmCjPyWS62u5dJ%2FIL9fNE9q0OfCSlEcO8jBiCGycfhFrpFxoUjPLT0Tj%2BFbPzbMssSo%2BF0fsdE1dzwhtOzJeLq7ijKAg2c3vXomn6CSDFFXmKNsY37gZpouh3ApJkBrwibP7jtZUty4%2B1ciStnUZaJSRH10hfXXKa6XXI2g6pruGn8cs9Os3T&X-Amz-Signature=209e6271c4500f93ce0e9fbc9d4d6544b062079b86b1f2a7236bb72621fd299a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

