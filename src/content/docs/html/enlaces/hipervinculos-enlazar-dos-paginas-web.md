---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGEDK7MQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIA7YxcfQITnDAhckSu3zQhvUd%2BLy7gS9foLZ4dI29el%2BAiEAh%2FcAjKh904jsym513Uq4zlPPha40BcFx4fH6Y4wG0Dkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPX2GgM9K3SDtVPMRSrcA1FTT9Jd%2FhLjoKoAaWrP%2B33yUKQBXRvD6JZHKbHzy1PsucJTAAZCxG4bhvHA966jak7HSF9NuPMhe76sfIJ7HlLXjIB2KjLkUElkNy0SZobC4q4GIAVXtwu%2B9fcu1LHkEBdlvolGaP1BGsHcR7BPKCyUMnme2SK3hUQAoBPDU8hofPCKey7l1hnH4A8PI5w8ecCHClThDN58LFK08CobaS6LxkpDfkXV2QnM3X0YO%2B%2Bs1rqhQQWQ3Y1uRaLZDSnvfL6zMUZhmd4vh%2BmRVV%2Bp5Lay6uiRIAQr0CDw7VXJ0FihMC0ZRtyrPYskW7kfVIuxHDZ9PO4D0u40dtS9BZE%2F5pPNu24DePJCwLN2IXPU32otgR9CVaib5B0KodrMg7rP6yCRGvCrVCTm%2F1h6BEz1WYAk9tIrHbTVleVev6xF8icEWjY6%2FIaiRhwAxHFXXrVwsr3iPCqWPaZprQXHTOo8k2y%2FYLKFOnyvTjxmXocl0uH67pei1sn3OyL3kXGpK8Uov7O1VDspJX0i28gz5oo5kgWgtuwvN9%2FbJe6G9iiQYXFvQb0hI5CDkiYylABssWZHdR8%2BXyZTRKm0sysyF9fQVAV4Ikz%2F1SVHrZmaG2OMre%2BgMAdNmSVF5QQcJ8URMOutxMkGOqUBGqCSrDv%2BnKMZXtIayBZqP9T5exBPobZR70XgJlcYLYtcyiDRq6D3mmQrLc78q%2FyDY97byscXohfTx8mqQKY%2F47FKDFZm14avrN553z3sGLE4JSYCaC%2BE0XGP4BvLVQqjAfJ%2FwF3XcoL%2BL%2Fonc%2F5e8xL6zvXDMeATIxgmu2BUnAd0El9ySxN18fLnFUBCJQj2MMg97HA5KtzFxGGMGsudKD4FPjwy&X-Amz-Signature=053802a5e6e8493271431dfc499eb9b3074c10da4767d6fbc4b71a6849e3da32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

