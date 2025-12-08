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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCCC5XCP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI%2F1IYYAEBgpPyMTlLVrb2OPSwswO0P46jf%2Fr7SGZFIwIgJJqpi42ystWxuztpmegyu1doP3SgjkSI9v0FKlRX1VoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSGRthKBnejvQqldCrcAz3aczk3%2BJubZfyKlBR1vKk2XoNKBl3dCPfEO%2B01OVanRTDo%2BIZZu%2FNVr3OcLTjfFuS78uaU0fdcufGyOkQ5G6K1mYizpI%2B0eVL%2Byo2HP0taybT%2FDiFIDXEmbUm%2FSl2guiKH15PwXh3Li4It%2Ffr9hVb%2FvBZwxNoGO0ca4ROpesKiihdh2mN1Pu2RdONmEymdy7eKAPcNefzD9BurH8Zw17cqIjre31bonEkcwYEnKetNZjPkgboeOo41Wi21CImJM3ykE3phFPAVXldqfBr%2BaLKEy6SkvV9G%2F71hiv1ZBf3vrx8rcMi60DpQDuRkWBUgcqdBkk47spfTGJP67G%2BugpGhDpnoYwObovQzrzEEcM0ekpNV8aaRlx%2Fj3eZbgTnARjh0d4ODm5YhxfTwX8dMEDwSZo%2BCQbr4B9jY5Z%2BKJijITwgUB1sBLdxGodeaEqw7deCbL9%2FLA%2BggoPExkNS6h2BNE5XHxztel7idyUXu2hC34XcpTuBhsNHBQkserXjOZF%2FVIzwbjx9DawT05nSnHGBRHUzR%2FpDMHMlSE7yNSoy3Ht3AKZ0i2RDWum7lOOo77gyrekdxp4Jnpu0JVh6%2ByiqN6Gj%2BQGvDmXNVHzGdPZesfD3BIINR6d7LQ2xgMOeU2ckGOqUBLLPP5fkLJOeOW0uBzHuSJXAgX6wZ5dcOCz6BtG1nGhJ%2BQKglWFPeMY%2FywXZptpeL834pD5z61jdKULB%2F%2F%2FAEGNCXQRJPiKm1zIzULNtD12bEbaLn16Sebc7k7nG3asANHKYYt9ZPnKQGFhm%2FD7Op6Qv2Qg%2FRaDhYuHc%2BHYFSCLxiVyCG%2FRf7N%2BbJcEHCzt%2FIZAKYRkaiOWJKu7qKgtfInnS0s%2FTv&X-Amz-Signature=7298cf8dadaed41818ad59d1c0b1a07e8743838ff180ca433697539ef45a6147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

