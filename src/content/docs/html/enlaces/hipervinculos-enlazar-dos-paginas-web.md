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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z55J43XR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw21IkVjPdpMGnjrxcvw8DgXfIgQTu1QA8H2NBggMbeAiEA4gJTXe4bud4CEc3JNGXDtkOAuPvIpXSnOy4bGEbI7TAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsp%2BU0TjdVjj7Z8gCrcA2sTZEBgX1suhKAJhy2ujr%2Brp6zwoMCDebOuJ%2BFpiMxLSbpccesiEwB7JzvSH2G7pMLTxO1QsmjpVtTtcipvuG6HsXebHLzvqo03IOS9bZMpSZ%2BHBMysRQvK3Ji%2FEEVQAO3%2BlXWcYY785v0MNsGbpiighwQHiM%2FcR0BTJvJzEuv1ZAhhcuCufsZC29p1Wnw8tqXDlBiUnhkypXocMxAsJpP72Lvt5gHEXrqzBjx017oPgFWF8IxKwUO3fRcE%2BDbjYP7mmKMRmcUE%2BtRo%2F7ZuWjFae8duQZcQL5hDOlm5j5aOFw5%2FX4vxh7g%2BgJyyLeKoOQie4Gtkf%2F7zyjqcdwVr0%2FR5ihKRbbow9hZ7HAalsr7diHeLeLrz0yATBfnjec2APeV9cNQlE%2BB2BkUikbzCP0QW3Y%2B%2FIuSliI9Ad1izUfT6aTaGKPycvi67Ausy2X1CIPDRQlnX3YV2u%2FwjwPkJzhxhiZmdHgYtimj7QnGiuI0TnhVHf3CvHIMDWCxi3BsYZA7xa42wu8mpuRX3tA3oVJ2g3njq8ZputwJ4oqGTsmhqKV1CNV8B6bc%2BG5pDIWkPxR16k2ihh7T231EyFJmxzoVeFHRpNjBpxBsdlCRFiG5UU9bqlNSzZQQWtJDeMKW%2B1skGOqUB%2BLX7iZ4zR3YhEywJwCrkTxvUYRADcyRW5sZD83gPIUHNlfgBDdkJiJ3khIHG1WLFrVwYfY%2FvL%2FQd7mb8iaioosMSH54P4wi1EmTKTxMV%2FC1Eu%2FQIwtqTlQsGb2gTpmsvNYieeKhH%2FhTCqHgWhwQDv3%2B%2FptlVrqcyLyKjMjjcaYYSxx9rkKwbNBFzuyW0%2F9vYR%2BhCgJdDj8TXNUMZ0%2BiRYmSb5f7p&X-Amz-Signature=7717bb383aeb6d7e0894d035b2704d2a7b5bfcc985d41e9b283a66ef69b92bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

