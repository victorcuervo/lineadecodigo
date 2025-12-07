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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466352K36CO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSS80Sk6q93IE6sTK25JT%2Fx3j0Yyk1%2F47s6%2Bhi4qhlFAiEAwjJdZWhs0GktPpXlVBolqRhPh4YKOYTuRA%2FWXSWLSokqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLyR%2BBYiBzHmdcJ8yrcAynftGwQBkDOfBg%2BplyIMCrh13QFdgFjj2LBY9PcHFZj6AToyS36z1v3xkuVaF2Vjpj5XdzrXOTP4GAYls6lLNGuRXHMd1xPjdQ0GDCa8CgFp0Yy4N6S6U9VVnLbadufW79aOkQmMEBGeNwY3Tr3t4GkOPk9rYntR1O8bdhkQ4Ki9WL5TJAVjODSKT2h%2FYX8OyHquGjl9Rvc6K6Jm1HvdkxeJ18jWO0A5Z7eQZ5L77NGVTAiNfFXdmxVwKM7hijNUC%2BMTvnU34ZGJI%2B%2BmE67gBjRx2Gay6YXtwMXDKQa1HL%2BMcTDC%2FDM%2By7jMHJ0y2nUaAhUgIKfeBLcX8IWUluswTnU%2BIjr%2BCUYrMc8e0lwwyM%2BRt7kaN8uvwzQDPPAvGZdGosvzz8KxBIO%2BVgey76kkiusl2d9MHH6Ma7fyrUZRwfN56PFJHFSXKxMbKUAwDoX2qsYgdRe3nCl03j2WmiwzZgEEqIfIk0ypiPJbuarQKCUYvwFSp8VJr2gSVCqtH5%2FIv2NCMtARII7FM4PxnhKlgexc%2BtfKlmLRuhUjsAzqXXUqujr%2BHeFNZNZGuDHOlZlVu6egYis1Y82FSw38eG%2FOcFXAQaridXw0Pq862IkEfILGQy9GEzcnKKWvRfbMLuh1MkGOqUBPwxnObjQJqrOvlUMhF1aiGbi4VZ%2FPdp6PNla6IVH3VTI9MJKg38slriG01%2BsO0%2BR8HrvqO9XLjMtQpI7iPuevLtVU3SZLpZmEqsKYIeT2RzSYxOwVwMWp2CDlDKND6r9JbKOet8xLAzuzMS%2BjViQcn5e%2Bxgro7P%2Fc9vllrHMfimoGNxX6cMZSbNSwp4xu1LvqTHou8wY9xquD5EPf7ADfgzjKHCw&X-Amz-Signature=3e570e34f550bc3a08d1fbabcf4d2c1ca5e5e9fff0ac4f69b92eadd1732e79b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

