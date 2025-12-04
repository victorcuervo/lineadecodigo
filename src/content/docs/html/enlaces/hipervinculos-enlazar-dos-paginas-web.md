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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3UUU2R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICxnH%2FjWNCgXShAQqcR%2FfzUZ7enf%2FTIRmE1I0OC6O2h9AiEAnOfNYE%2BNwpiSoWzGdfmmT434pB9JniucbU9%2BJDJTwrwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCtnYEkvXrr1LMsZkircAz0QAVaycLZ8fy5uO9eTS%2FvBL9UnTgOOIOM8RIHYSaTk35U3FsE5nesoMv6nkN6iAiI8XUssjgyKJEHSUrN0SMl1LY6svKhNat4m47M06%2BVMfRUQRBociMBEbt2qpD62APZJNOu%2BhXk%2BFhAsESIuOzeEcsnOWeAyEQ05HELJY1Z83onm6Gmg2ER3eo0gg6KLd4YsRTP0pvvSmWAccr6sXL476k0NFSUSkIvxRPMEX8tJ6v6Ef5f7nrcpwNQLXHYSmUiCXcQx31yGTguN8iIcjxGbJBJzL8wgLuZ6Nmk41SyawMznw9FmO91WGHIIqB%2F%2ByGPvLKihOrtPTbX76R45FEpwAV7MSR9bmYMOaM9cYzOw%2Fz3vWMA%2BVaQpGhP0L8mV1I0Ud%2BPaZecv2LzG5xNfJmwFVVM8ziZllpkY8gwiH9LsUu1NF%2Fb1WsBTp9E7nd2vC7T4Z8nr6DYyUGZqYeO4K3kZpiOFUc4Ff4o2%2FoI08dY%2BM5oRdHzkSk7TidLBuSJJ2eu62b0tc9eMtzJ8y6dOxQGJ%2B7rfVv4GSi3k957U9XdMpFe1K6F%2BjK%2FB6F6Liikp%2B8Ky06A7CJqEI3B%2FgmICbEaZc%2B%2FncAEfSPmdLZIwSRC78m%2BgHIFIoqzJZODnMKnLxMkGOqUBSwD7UcMVefMZyqunkdHNbkUjAfiy32vuZqaHoqkscwzVVHNq%2FrDbyYEtq2T26wiaUJWaESnaUaQ4P1w0%2B5wNd9W99ifOrwrTUC5J3QSdEhFWwlLpz8GXaROYwXy%2BxcUhxlAp1XfFvNRGfnNKolEeYIGHZSJd%2BGY%2Bbv8KOY3WL3iafsO%2FsaYDU3UIteFx52Ei2TPyOq0Xq%2FovlCJgBXFRjWGX%2FB8q&X-Amz-Signature=40251470a9e6964cb3c7a481fd0a060fc9e0dcdd644945518e33a474dd2ae5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

