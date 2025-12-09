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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RER6T4OO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMVrP%2Fe4zg1ofCrHTcoTplebRlipinuXbE9S8fpPbJZAiB4yxr9SHchd1sUE8f7zSn0%2Bjc2whPBHZPsEn2umHbsZyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKX1GGltNOsUs%2FriKtwD4kLVVz2C%2Fo3dPaeKgEVfvAkstdJAXA9xIfR3O1zkXmxUStZv54DVAtoyTqkh6RFkqXPh6L5o98uP86LlOzy%2BfpdBLIAYZT9SOP8teRtK5pYyg1be1zD%2BRwQd5M6zpaZUCIRz%2FFlh4vpXEx5lUfYH%2BtgWCy0%2FVWwp6aXuHq9CG8xoTQ3%2FEq%2BZ4%2B2cQD2%2BVR3%2Fv8dzROyleolC33TuUKitF6t0O4UrY6ctXQ02R7KOL0KoB5Ro02gBvO3TIIRlqZMWM2yR2KrBs8BA8iNyzM3PzmMIv0VcpQw7SGACUTxEPKJAaMV0cXypvnWIrHNetsaQjhcXFZUFNUgqzCcB1oW2vK%2B7Sa3X9cWB4LwWihlSx4paCg2XeY2aTrwe77rJc26Dm%2FyMrlT0K59iU5EsjZC9HrItCvUveV3x3AhTOeMw7EChi19fcljMnkllbMJTLPPCqmON0nJ86ibAImHLHRL4rhlMEbxTlsdTL5CmDQSUuK%2B5siSHWxx4%2BeO0Dege0vmSdtMGwllD3xpazWZMFev7AZUunqOOdn3%2FE9jzZbk3q%2BC1ti3e6LfxzQw2wVyC3FqMJUkRFe5QWC6OJtUAE3T%2B0nMGtudVeQrX0qr9z9W4kJmzVIt2H3y0VCrX%2FoEw5MTfyQY6pgF83vbKJGCdYLs9ur8Lxw3pEVKnA9RlTK3Jd%2FgTapo9h3C%2F3KqZ80E%2FpzzNBwAmcLrWDmL9tHLyNVGjX8UPeYO94DJ9bUXGLL4UPtKpc1DZZWWbrqKSHTxPzOWvwnFYrnKg%2FK4bp7sdiDd2GC9Esku6vhDQ5qqMe2zTsl6nsqdqjPwwGhw0vx6SqXdi8J2J1EUv0DipJr%2FBZalYtl%2FhyejHvMpUS6pb&X-Amz-Signature=b1c1fe9cf06d08bde0b820ba902d153660efe91f4ecb915eca58b70394959fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

