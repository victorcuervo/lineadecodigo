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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TPPYT2I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnC%2FLMVC0DMozv899aSklg%2BZwip8vfaamdFnUtdTiq7AiAbxlYZ%2Br7cDO8DbMRkklhd%2FZ0x3JpHMJqIi1K3NMFPmyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMDsvEVRrhiKQpM1UPKtwDViACEzSJdXLicmArRSqrAWWqapoyR%2FshSw6rh7wfMkCBYLsYevh0UDo8AqVZ8bd6D1QH1inon9TMSQVBQh4FotUJB4XY791BPhdd6PBPtoGhZhLAeHTtgU1NuELT2fRtDIAgak0a%2FZMWY3MxdbKC580gB%2B8YkhajCvxfrCUD9FKS9Js4KsbvSIuIJ%2BrEl5SZBiM7XfDyMNcV146i2ZZ0M54BGao%2B1dgVkfaT9EYjdpfgRZmt52wh0KXiWL0FCfgkq5qNJVYkCmQBosW7KVM9cDuIIU5PxTT1yzOFq6%2BvUnP3BxWDwoSoeYAFEdZymuQdv2bIP1UknRF188gET7UrEHlBWaBKkRbAW9wBza4B3xFdR4QjLeDQiURYe7aKKfUhqwgTCHNsq7oXrtSbRNwzj2rJW31MhYH419VErVr44A41UOrEmCzFx1AB9EPI0tdXJLkRL3ny%2FVcr0F9r1cmQ6T3Y%2FsHx7KL%2FV1Z6B1lEKlWWz11N8LqZHDH68aCN7OPusVMklv4BRdBQASc4D5JTIyWj%2BCaeEOF5mQkwLqgMcUFPOMs8qElK%2BwI3RKLWfhlD65rl1B0SrYKe2h7kiqxnvYeiSD6Z96SIhi5c4tlUG%2B3u0bf%2Fo3MK%2Bt0890kw79PKyQY6pgEHR9KcVTCZDKgl%2FhuaU21T4%2FWOQERrU69a0VIYrY6hKLNrpV7vu%2BIpGBTRT7MycO0rI98WMRTLpBMLKmKECnor9vlUaNsiM1AxbA5wlH35hbw16pAsy104EMKB1%2F5tpbyCRceAB2KA9Dl7359Cx08nlDm0bP33R1lf0EYABDLG1ZN3Roo2MFlL1C5kxxh9mQ8GyW4pgjuYx3Nf2vzMDjpNs33NZMRn&X-Amz-Signature=9cf7cbdf35f96d0ff29ecab04320019faf0f8d392bc398eaf70b809c18b3d05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

