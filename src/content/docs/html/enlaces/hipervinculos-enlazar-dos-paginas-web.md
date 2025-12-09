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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZQPOY3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T211928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FuPfMCOBPLqDSjPhDddj%2BkxMv2G2790aatp9tYQgElAiEAwztfyZyI896%2BnGGmYYhncc2hwc%2BgAPlYbwWesdtTAvcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCthoW2XDkCK6j6r8CrcA7LG4wFQ4FWF1tw0lm2eWvzSW0OTP954wuuIqpV4siNhBwWoG3VSRLxzTM7RxXIc6eds4MWZxyfzKz1cD9VMab6TZ0EJS04DnxtP1sDpLS6v%2BxCtFH3OR9Pp6WW%2FBeBYg7A%2F0nOvIc8y33zvH2x56PpkDEsnuId50hwUALrh63wdO9GuMzFPkqvva9TfGflAyzbgmthp6SNY5t7BMdl2dgUuF%2FtmYBetedyrrjdiLtumgRqNQb0p1bzxM588D1ankS0IAHPglWICWzQA%2BivaOZvfyCFmQFlMtSGuCTifAsvdtOditwDgwafJD6DYz1L1Hm0cnqsuw%2B3qs%2FSYmRu%2BPv%2FlxoXjILEajt2yyMwSlq7Yx%2B2sm03Y0SiXvgw47cOkAz7sgnYeQNoVkYSkzmFgp7P%2BGXo0lbbQu8nvz6qAjxKhnP46NnsUlIv4x7rmf%2B1aeZ2ORNusaYwRouUNTSZoWDR0HLbwiSC9qH9ypnlYAzicdK0RcXGOxpa1zCt90PjPfxu8c1X36q%2FFMpCbuSJVI8X7tIAG6y4Y8yYzR3r93mUgdxY9FRMpCK%2BmjvQbPU46II%2Bcef0vwlBUBwjRqusU7PxN%2BLZk1mnQlaNOMg0o3b8y7KPuEcRYdOKJ%2BBwNMPSf4skGOqUBH74gG%2BDMR%2B0rO%2Fk2MsXiw0gkS7%2BduVDmKk5Gm33AXtNwCp1jaVf7TUzOmY6NA1UDQQuICeVGCAtlv5eolIJHaDqM%2BHzveyg9LAMh7k3M9%2Fq6MgGyii9vJWBp6UpJholov0ror0V69TGJEPQkbIlqZKpl9Q%2FvsyitxZhLDLZ04e24N0YG2fKKUMlSZtzejScgc0oPVZBLZ73U6Oym%2F31OzYRFwaeM&X-Amz-Signature=22ba4e0066490ede278e8bfeda0bc927275ec3b49ae5df430961473da8d6c900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

