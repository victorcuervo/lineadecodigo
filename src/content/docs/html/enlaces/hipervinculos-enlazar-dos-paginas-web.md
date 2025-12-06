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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIGPSPOD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPDJt8ZEfyOHHxLBy6YxC88msvUA63snrsRL6%2BVcLzUAiAzM6YHvKn%2FNpgRHX1Ho3tjDsh3EEfD9wiEX%2FXvlFdtvCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9zBhj4t2%2FiIxSmGlKtwDaIlYUn2WpXBjGJey5hvCOUhBF%2F0GB520%2Bsw97xwuTPDmS2N6Rd1TGMwXgrU055FtbsVAgLetQHaTfk%2Fp8G2cNcGGZdW0t3YBbJaLNHNGtqGIzQRC3A%2B2ZDoZrtKmdcuzoHvT8SybbpbUn3IOFOBVAA4Bogo0%2FtkfgOMku7%2F1Ckvx6ZvtwLfZYDIP0stDCbEJchFzopw9zATJNEbMkBU%2FT8YCK%2FEnpCCWh%2FtwI5UL8txQ3Oa8tnYgMvuC0GL8z%2B2aFsxGn%2FjVX9LPIWBRHpsi9oQanwhjTjxIjissg%2BN5ko42Oa5oPwRPbH0%2BOhtzjMhofd1%2BFF%2FCRWcruc%2FmjP7oAXYRdYzja1efaf3WL3HjGGsxqNTm0%2BpdntAnUp1z78O%2BlZANeF1u8hlpaPYnurnDi12MqFebOsp1V7I1A01eisJSkRxVubP8A8uNv2UHpG4r%2BoPxCEV0so1y2KPSGZXqcq8ugyF9ntVWo4EkC37o3N3tlzQpAMPolVIdGblFMSfWQm25UMGoqgORGVDYBITwWluA0vP%2Bus6RF1oTIAJQgpYgscxclZn2oj65Riv5ja%2F3CzZD2IJs63xD8xV3rFxNQl58qG9RguRJnH6rptK5KlaFkaD8dxCVb7XNbEQwgafQyQY6pgHuu%2BtomHT1%2BdI5EHv7VoGL7JaVL739WSofMBiOWQt3TbMAZqxQ5WfehU0zOqvi%2Fgbm%2FymX5ldBivtvRSC6NkVUB0wgIIP7Ez3QJkiIbdefGBzrXhyGm1CR1RG%2BBlxnO7ZHvsUSe7ZwH4Iyn5FXGHXtQdalaCwWY8IZOOK5p65MoUN2RJFVjBMf2f47rI4BHygaHJDZmd1lu0LnPe7KHe8pWQLjq5J2&X-Amz-Signature=d615a8e2b6e1684ac43f8fdfe9deeaa9fdffbbf13437b62ea5ee4b3e474626a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

