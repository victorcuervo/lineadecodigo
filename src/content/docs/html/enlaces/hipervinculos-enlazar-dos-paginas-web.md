---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJV4PPQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T203344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsyP%2BnAz8P0FMHK1WSw45evoFIc0Uu9xY%2B6x%2FSAPzdPAiEA6S8seFP0KvNdWeMBWOmrv2wyjUL%2FmYTeRE8utWTBG4wqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3Ivc7h0BF6lxcb3SrcA51txePWechlPo0ztse6aPgsb9whAowWUPSFiSs1udekeMB6%2FXMMOOMS0DZSTNPXaPr%2F4hgg8sImY%2BbFQwFFQgR4rh2D%2FkmLPy%2F0u7QcRr2DcogujzvHvv406MvQuW0GbyBobogVswe8Z%2BIXJbMZDbdEL9VdjJ%2B8W%2Br1ksdalSjmo%2BzpcyVGrBQAQCHga%2BLSOGdVImMJ0QrXA5RUGewpdpsW65aEGwhIUmv0rclthrIIJR1P2i0PencHpWV1m89n5563PvTxpKDF%2BTfifJMrcghA820JPqK2ru4x1mNgRzui0EE8wS7kO%2BW8cqbJ50d%2FJ2zl2qhuh%2Bw0w6fiNM6AtbSl5X%2Bv6Lpc8hPu9NaUiOAEuVEQgdtPXDLF1%2FWlvlJG17g95GytAf%2BPVlVJU9iqax3zNQfL3VR9TkGlY7JELKn5GET7287OR%2BzlVrKIdQ2vhzS1JDfb3VCJpBBwa9epOHxTYx8dWC%2FWgTy5BPA2woQ1eLkr431IbckAOzvKkZ%2FBLuCGa7aKV3FqXHHq%2F9ZYfGR9U%2F%2BNhtYGcx4zzkmcpIjMEVN0rqyy%2Btkrn%2FlXg7lSe8Ju%2BdDM8Np%2BAuY971OgKVqxOHWs6fUCz1RCsK30pxpPohTnw2ogajsbxnN0ML7%2B4ckGOqUBOJnMnlkQT%2FqIQ%2FOL%2BNTV5Lp6E%2Bm0auNxpDuqTGUc3ciZutVFgCsxqAK%2BZ3iIQCEk0ZL4uOIHAtSjyiwn4Hsw%2FBWE50FWaH0AShvD7jnphgYPvazwA2ovh5jz4ED1fg7V%2FeL9SHgRSEeSW1%2B8H1gwQnD7Ay1kqVm2vKVsKHcXSUSkgdTerD6Dth6Qb44tPqBNUkRSniUuyXwGxxbVjE%2B3M865VWhq&X-Amz-Signature=009ca29d44962a4578704009d5a910c322e3ef66834f6c03aa8e69ae6f2348c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

