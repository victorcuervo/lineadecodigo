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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WY622RA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T184535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGdNGV6KIFJmq4QXXGz8SzVQ8Q5tIJtl9hSDAg6qaX%2BgIgGzXOjHQ1TVdAGu7YikAC39LyNynZEuPJ4iLutVEc%2FtUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEKXW4up7cz697HYCrcA9zP6RcKSoco1z8SoFp%2BfUqdJIOzwr%2F0ScA2aTTU98bUbfayBSVNTfAzn2rBafaP7jaDSSavc3jYctDRXUweyTZJm9IRDahMBJP58mecmOPUnSKoqVq0LnLnHdn4cQ1qbp7trutSo0b%2BonqNcV9ppflIFaLk0SV9DiMb%2BsLOEi1zw06to%2FInF6N5zXcBo3lWTntYhkUKDM%2BPUNCkGmifma%2B4%2BgFSXgNnRGI54W0Lc9%2FQU7C2MsMq8bxq%2FKzlCevWkYy1NEqb1V0zunCt%2BL2R60WQN2S7l55apJtz%2BLbCzVPpfMiFdqrU2u00P39RV0x6P1qQAsYfQPL0vdbK4ilJDqAaduAK1OXXM%2FrD8nYUGHbcJNsACiVtJiXRTBkIOiG0otyA9%2BVSZCVUEKOVD1hPkEJYoo7WZJMkChW66U7mfrGS%2BO1vJxFUSPQJ4exGINm48nWA5ZutS58VWUpMnWQU%2FUZMGXLg%2BhSA4MjFxa3qn1x1ISEQ1j56GF7dERYzSQCkIkLZrhXl22HMSxgLy5QZ%2F%2FGLXOd1JHrRM64tOCYQf9zHKrrHdUpvXQJw0cAyHx%2FG66nKInOeHkpLTBJCcHcUP23Tmv9xycabUk7mrgLV%2BNJXAgofpXmwCGlkdZ83MP274ckGOqUBXWMUCRu4PEfnblh%2B4PowYfn8SsfA%2Fiov2se9A%2BUA%2FeFdTMMY2VmRR2Bde6z%2Fvvto7nZXPXgOzGRYkqZzCv%2Bqr8YX7Lnv220Eot8fyQe8L50N5YHLrHVmtd1j0NHq%2B7MJ2yikSy%2BWyEo9tqgzBuv7bz1eEVHBXMIVh8dhKAnPRm%2BZF9vy4IMqPCvB%2Bv1WXyiSBghUzf%2BA38XoeFFsn79HIpy%2FCOPA&X-Amz-Signature=7f0a11420b5b02bd2f342327f973116fecc61395c5f5d9447a7757bee8caef2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

