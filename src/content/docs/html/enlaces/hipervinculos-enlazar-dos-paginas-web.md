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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAT2KQH2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFi%2FL96cvB532j%2B8CJ4Bw5gY%2B4hReGzs5w1M6FcMUNoAiEA6xuyx3DxgXh5ShlIEYfLngYbWDqqFpJFu7pQxZ2PE60q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOW9iTA0Ur9Mt5CvYCrcA6Rc3GW0F4KJCzoD0bg8pLjW6xn%2FltI41dNefZciv9kxQt1ScTF89zusElgQ4vWIITp%2BHZ4QI8RoKQDxBH3ijBMHE09eawhJ3UEdI7WhEjkMbB%2F94OEifqp0xc6Lk999FP0V5nXK%2BhheLa9aEwwpNjW2v4xc93gaAYRtVYPHKpupZpaTJ0rnSMTkR6eE%2FQVxxlHVIawNgk2SkaJhsIO03AX7tbNZIj7rtBiapOy0wM7tZR2HjwBhF1ugVOBzUMH0HDBV1dVIFFh5YRJbmg02TfZtpkTHX2trpIi3uOTmbW7cdx%2BCXEkIdQm9xS2v2R5RjRTK0e2xPA6e7CGCk1BvDWoQeaoMP9nZaUtXWl20k6Qtb02uLyYrqvdfR%2BUXbj8P0YpCB7Y5crGdlkqdqYg9S9Il%2FdrblyDZyGHdGlvOML8gxB4daxQ1kr7%2B14x4Upu5t5tqQ08DHnLBpLVNf2PfVhrnobjzkMmu2aDOe7AyX7Lu%2ByVAvmG6rXo992zOzt4e8RTUdZP7j5cdKt71Jac%2BEKworiK8PHpYXhSIog8Spms3gCOlvTlK2ssLiryiur8aXsAc5dHesNcLR%2Ftl5j2nvMejuB%2F%2B0e6qPlRjXEw3WVzEolspHyTR%2BmwToYj3MI6n0MkGOqUBdetZV4HtenCGj4KIpBULub%2FLpifgA3AAI0A780xpwOLHcXidjxvzeGyQW1w435%2BDXcYxp1dQbPKLirtSItXIgTB8BWYBgs8VTSDx4lXfeYXkE7Kmxh7cE7wEUpBp5XtlmU34ydyoP2ZibpLBs6D9FKzWVWVXX8%2BGTxLXpuV%2BH61Qwu7XJUxe3kqwIPr6CCEgoiNPAystNQtEFHJOpCRNxwHhhyJJ&X-Amz-Signature=e8b52229907bbc17dab1236691721b5d233e5932598c5205cc7f87388e250337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

