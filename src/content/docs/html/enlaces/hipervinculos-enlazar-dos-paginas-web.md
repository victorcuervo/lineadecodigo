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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGWRLKB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf41nGvEL5ZM0HHuvi9pVaMh9VU8JTtavjYnyn8uWmNgIgX%2FsZoGGbTJsSJ6cJQaDF57CDURdUljSOYE5ggCS2klwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0bGlYCE0cIeopaoircA%2Fv9mR3wtwmnteGjEYPRKtJo%2BR0FMqRBctR8ilghMs2MIZVuvcJXMcA99C%2Bs5qz1ss8xun8TZmUKMASkrTXnIvgj%2BYHlC9MIw8fml2HNXzBgkqklI5vTdzbBXubo9tk9Hhp8VQuazQJHfw32HmQw3cBwtpcYNu4yzgvTq2zsPgqyjLRVilQV5OiOEWsVm9Erlydtq9nHxnsRvYbkiw1a6ZG8DKwBFULg11gEEzrJphG27WpsIfv4G4d0Xhm%2FMmf%2Fm58h1p%2FpCqm47V%2FFYaRiig3bigZxpaeXnFRWwezrZQ5g1Pm2%2FdD67JTbOxQ8MDrfBqHMorpz0ltS%2B0q099aUfFbuzbYjN3CtXEAfUbCXZTXwqZ%2BTm1u9q63iSzlL3EYOnB%2FniF4inUVsbLV0y9wO12hlzox4H1hLXUCYEzArGoc%2Br7Ad2efJ1742jeB24j3hv2bJl5%2FW0QCtht6CBXlLWn3%2B5nmuuI8czEwTOs59DZjCxeWHobgf7G%2Bq46MemgLMja%2Bi148CZk2Wz1G1cuE5F2h6rMSU5ymqqbDdW3X0S7GasjxdtCqaexAyXMnwXjN%2B77yn9%2BVHj%2FwZ1j%2FqRAhvJRWOBhnhaODagGzqdUbItKMKTasjVL4zXs28pbkIMJ3e4ckGOqUBIrx%2F6ttyvuR%2F0PN%2B1bSGUPUTNaDF8yi3hzi598nASZukGPZvuj38Z%2Bah3GOBXiYnENGTcfQC0C9vQbhl%2FojTzwcyerY5du9NeGkoTiR8T95avvv0wEllH1wUKvZe4dT%2ByBS9XPd%2F4xvHdK%2FmQ1qBIWAI10ep1IgluoPxEjhmXKWN5MvHzXpNxkvFYDm9bPUFKClubp%2FrnYDq3TGDpHVqu1q1rRHX&X-Amz-Signature=5160f73cae71593a7fb2d97baa4d648ad36df9021859c2836143fd02d4111319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

