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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZSTZF4V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwd9nd5LWW9e47WadmVT%2BCvaVH53EVja1LRzAStTg%2BNAiABhzfa6VrqDbrWARdynz9XROxrzomK4QsWMkRwzvyVCCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4zU6vhpPBR1DvpF5KtwDz9XyGYNh4LnJpFoGsbvKhidexuvWv2z5kdK4XLPM%2FCdye0zB4OVQark7%2B%2FSU3LdktGuiDgzLxOGH0tP2y4YMs6FrveI%2BVZelWn97hEwf%2BH34Zb60iQYjKpykdHpnUa%2FERj1B0hOXaLm8YRzLN2mgLK3UQOhEaVK0voXU73oHoAgDXL7g9GfiKdh4FKdCFqkkB5eXNXNqdx2UYu02ULL1tc%2BqWw9kTVBYEkshrfyDCUGKBTFOVU5XcbipwgC%2BzdH%2BeYc%2FFei4YlfxnizQggi6QvnNs4jUP3gEMLq7pJuO%2BthJ6ks4RLKAmvIrBUanAV5UoDhDSebVHgtl0%2F%2BcSDnlBA3WfteEEBg08GoOBynWevQrQ5UegEJB0oP2nDfEx7Hc1AXbxYyYvfJ0zjIOM24IpfB4yrB6Pbw5upe9SCPSKD3LFJAq%2BwTu8L8jQ4oEs%2BRaF%2FZWWwSctl55DlrjHR32Uz3BKmhksyLWHFAgElWKFsOtLeh1Nt64BhNsAXqxnnUIsBTOPnSTRYlBBcnJF9ECTH%2BflwZdwMxsfAbYRS5jdZACBiIHzU%2FeMe7jR9Jq%2FGSnjszNO8HOEREhN5YOG0j%2FpAN1YrTBt0IBCjoJ5jFv7joRWJPgngMo2NGoiZkwgu7ZyQY6pgFJHY3GKl6zFAFdeYoiffxlG0CUy0YQr7TCpcyKKmY68Ux6tf4WP2sYuSnlOn8oQEepVFniI7EM3L7k%2FkDpXfb7Dpf7IBL672Iva1Rya2by7q8mp32EcSoQCJ0wR37mYrN%2BOSzv%2BkxmYFPUu5eLdeKiEIiF22i1yBLofVrp%2BEeNp58PCxzs0lYmbcvZPIivBF%2Fl1PwRgKYwGYK4pMUzvIIbNIGkgOJs&X-Amz-Signature=cdf83e796109f4afcd4da024a7789e457be92412d14aec7f31bae8b374519fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

