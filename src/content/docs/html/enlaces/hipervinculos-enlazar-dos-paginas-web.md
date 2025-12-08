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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQ5NXJE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNda8Bchp2wa3PyXUXja%2FdzQ0xPNFE5ekvgjA15XS5awIgQ1MlvxJd1LCIWrT8SfPTknkEjYf0cUrU%2BDZIy6cmyvYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6Id26wjF6AghQXXSrcAyqrokTUaSzfEFm20jxtkTHGPmfddYK%2F0schiWLspj1HHDP0Ia5OpxdMEmKd7uu2oxrIVrdUo6CeZTHwBZ3CHjyX2ZDvhQTEN5eYMaVDAPkdLae33iRQE7H1jp5U3EebpU5vrxsit5Y8ZbWaO89Vhxw21ZfjoC3rdwNpGtCOvT0zAEz4N3uCx98d6%2BWhN9XIjtrY8CZRYy%2BLN7HiY9G7V89iFN1HURZrquHa3WAROpPEwRTu5%2BfKUF4N3eXiQKDBeT7QcQb1sfrYKDOepw9R8IlcN5LZVBQ4XwXM2fDfoRiUhvo%2BlfmhmIt6sShgpO8o13wlKFH4oC3JhZLFaq35AhtRwG%2F3dlsC9Gy2mzkGSR3ymxGEYDaBRfh2rlX8EdqTnNFcfKQdoG2E3O0kjurux76%2FzDkUp1VkLdw9e7uCl%2FBF%2Bk3f0O9k69%2BcdZCc0Izy5PlxaAekX1BvaY8Nqk3pnrOx4Mx6qjWDywsGupddjkv5vXcrX9ao14N2J06RgtyVGvuJfoEtrezDzwnbuJ%2B%2Brn9TpzwZHVbFeu7Srh7O65fz2QpRwGvzUttf3Bn2%2F9V%2F3y1Jy01blmc%2BgRNq%2FjYcHCkNLFszsWi2%2FWISl%2FYG6dFFWidfF7EobceSR7L6MI6Q28kGOqUB72%2FqXup1gl69Ta4u0EPCpoqKvclMSc2gvcBJWoKKha3esD6PQ7YDfjWoktbdJLCmChQpRS7iUPT1sB8aAaumkX4Q8q38rrorm6UGSwtfmf5I8SjFcH4XR3DmNoVX%2FoOwW5p9wDwcAUi%2BkRCKIOng4FRMZB26ja2d7jhEgqFx4zqUSyZhrG9hKzoJGS0PtVRWrBereOvJC%2B9oru10LEUOA1Xe6qTm&X-Amz-Signature=9518bd3946d7740cc536c40655b1edb6189d2c322c2e6ac03bfc14bafb5ad558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

