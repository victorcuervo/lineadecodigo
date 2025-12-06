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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKNDBZQB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC39Etf2OOI320Pu7oqy9U9sMvrLeDva1WrtGRtxzMCcgIgOm0xWTtfJnn125taRiCFmaGBtovERNl7xJCUdJAzjR0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFFCOK%2Fe4QLjqHUgdCrcA9%2FHXQs2GlvsJqo4OqVPPDIRmAGrACRMHAcDSq4SCx8jGtl%2F7OgWO3DINMMcdYhuaLA9IrNrqBzDO1W3XfdlVTSyvJG%2BmDjTsBbU5M4rinIbIuYkqgDXZQqWsS2RtDEiuxehuKbbsifS%2F8RP5BlzOHDVDVfQTzDgYx5Z8o%2B%2F2Olo%2By14f2k6pdX5JhrBEeWk9K6uCA8qohzAYmiAFAtAdfZy%2BoptT0zeN36pApWNIr5wzN2XyFp1UN97tuiD%2BKmgFBtmgRgrvbPSSIdq8dav%2BQ4vtw5EpRQK7dFu3so3%2BOjsFoulOfwCClPQgc66hlMCH0%2BgiSMcwHzbNXtAKTevy7RdUv1It813v1NxqW9rFZKhJQmlS%2B%2Fcfj68EhfcRw9VCbFscKPvb%2B6kVlAWMKr5yokvmf8tK8IhUmG3JdL17H7G91nlPZbRezqgMfHGjqLFx0VrAtytBKyKt8HUXmAM64gZ1AtjZ0SSMPJhx3TczaZXJtDjBc%2FNrS%2Bc1Xk%2BSopBsmm2TPkHOezbDMfYzt5V824ddPZKvB1xXFP9xBBE08Zd5EjVpY5UWIH6CMBiNfulggqlcDdGqnLGIux0rQjkMGtpQ%2Bp0QdJwH3HtENXaKg34aW1z9MNojhzSEAqeMN28z8kGOqUBZGAT8wk5l0JgjI8%2B2Iyl5Dm7nxSfIJ66Ae6M6VxoYIDIoAsQIuS2NY4A5uF47h396klE5RimyUM1SIGgc5uiWLvVPE%2F50i46PE7KutNnq4UZMOooCFgU7ZUr%2BgvO5XEqml1eeuhcTBiZn%2FjXs66sM5mTMTZjkYMSCFZoJPBV%2F%2FwIjkGkVKwQO2Xhp%2BeIFfNfUPXnIH1GZC2DU5U29jl7dfuEO%2Fj1&X-Amz-Signature=ef47dff20229f7ab9b35dce6535fabc634551c83a7b5cd4b1147f49f1108b3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

