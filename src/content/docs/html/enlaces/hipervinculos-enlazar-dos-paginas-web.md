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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652QE7NB4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiE7GOeFxMcDyPP%2FcOQ9GcPgA7zFdIuIc6cqQKvk7uPAIhAOT3bV%2BI4Na4ydNNrmHyLdNQsyxXTrBwzNhVaQnOBc0rKv8DCHQQABoMNjM3NDIzMTgzODA1IgxJfyEKaoezVWwmHbcq3ANqVa%2FTvIMYqMfb8XcMgfif%2F%2Bfdi%2BcRJs%2Fik7dc1m3V3Qq08jT1K0%2F2NdYXBYUOkZjYN3JAcAC2qmBKNiYY6zsz%2F6jPTvvvyjFMfnzJiYET7Qa6m8r31GUbhPM%2FrGvg8T5TiHuCBjENuH98uyxkGXqTe%2F8HN3Sim%2FdOkCQnpW%2FyllN2Lb68iEsOswCrgvNTW02tP8xaBa2Hw5pnFWF2JexUMbeP7MpvcYUcFrYAyOUtEZr0jdPZcdTFaitdaCOCNIscwdPqD71NhlxfADKTEAoN7YeLpC%2BYOBthprreoqgDt6zVtL3U%2BJjboEMJH%2FvZgyWdUeSM5Yfo9c6aDTP7cRqLvB%2BaWMc2PuReVZj9ptL41O7%2FgXqYs38zCReoNWm5Ylo1LGxQAQRv%2BcQac9I5HILLoJ2ympVkyXei%2FD04IBk2qvoxBF85uoX10yvc7oMk%2ByvJ%2BvdcszYNWNC0XtbZtE%2FX5i3LvVwZVSXj3SPhF8VvAB3qSa%2BPV%2FlaCRAj2j6Wjd8Qg%2BNVHB%2FM0Uxws6ofyr2VGUVtCgUssBtgLQNQmogf82JXLV06xtWIsVlVFgtb2HVo2rq7qmNqfzQ1WhBmlcR8oghxCCaJYLE%2Bp0di3lKlNwS6xq3mg9lC3LMv3zCLitDJBjqkAXjtpkkUC%2Fv2pGaHOrpB8KE07fiGsFR2NfW5Z7%2Fw3IWGZofetFeQplzwVDsumR%2BtG5MKPDybQ6KIBm5gvsQHL6c1iYPD0jzCyBt04PF%2FEirl0F7RucDpr7gdoKC4LGtgikB8nRYXbkeP6mj29tTnnVqtzACp3VBqXijZFbPH%2BHgeC7QoRwSKiWOzbbJ%2Foh4V8W2XPrk5VPUSmwUNdH3f12wbLjTO&X-Amz-Signature=bd47f836d3e663d7a10503cc5eb01c9ff24f9fba328febcec8c5fa3faceda84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

