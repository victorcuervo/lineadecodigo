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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQ5PEN2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoClgkT2S3sh2Vd67hOBJDDMKFhee6BzF0n2Oe9lhoswIgSDsbd2Q1uXndXv%2Flp%2FVZFBMcQXOSwIp0CxZbSGBvHgAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEwHdiLaztYq4HeHSrcA0nvJMVSR2Wvdx4uiR4%2Bjj5ePUDGDox1%2BaU9Iqh2wMjTga8d3r6NpKcUIL%2Fwv4boBVbMxH3dvtUOdaqwgnEL10MXreX5cU8rE59lRnXueZ9Lj1bHyg1mHJiFmwBv2Thsx979UcQBa%2BRilQq60fogNQGLJy6GXC%2FVz9nifpvEB2M09s08sq0%2FnFwTA6W4KMgPfnx3shWcJFQSeYrCiVZkcmhIwnyUAsdgVUvYzSTOg1xez6yGPSzoSX%2B4PPIO9mapHOz6V%2F7nOtaONT96hFe3LTK9FZkk7ASt%2B9gknrkceCRHQIOfyfP5GPv9VRxiu8JuOA4MX1tCuz%2BDHEEZta44Nz0AdzqYE1%2FBUEQ0daYh6fg9syyLNv%2BQfYDdQ1j6yOqs9ht%2BoIw1tM8H9AOpWA5hRt9aGPv1A%2F25QJFKCVqqmNHZy37khn77NUE3C3IdAtmJLo7vyV21%2FOlAdAysuWz%2B1N0wI7CkTY%2FVNzPcLCT2b9ibsr%2BgedC7RrvYUuQjLW%2BvwnzU4DVtRURra0yfZ6SQC1y92am3wOjinjLL46gaD00zdqMOMjCZey5uPNNsFnYJiVA7jOuJX3nj2JRncqTSPnnbVg2nlig1Y%2FplFJNABxc8WwEij1f5RJYCWyEHMMmz1skGOqUBdMF01TtexDThq4pJzRlafc9qVZHLT%2F4f9vCrkLWR1NCgn8jsOwOK%2Fl3A9re8NubczkF3WWxiudq2Nk0lXxDtEfCB0vfN0Q6H6ZqOUtrq%2BK56qF%2Bbh7fwE3%2FBvLVjdS2tUrAIQKHXt1X3PmXxF6ULCW2cVBfud0ETYE9SPNjuJ%2FJDCB2vr0OHecrHHVG2YCqumSR%2BhQGnPdSxq%2FYRffP6oiwjcc91&X-Amz-Signature=a48abc3175e6b0cca3d3d21d9de2a9484157e614122379690fac42592efb84a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

