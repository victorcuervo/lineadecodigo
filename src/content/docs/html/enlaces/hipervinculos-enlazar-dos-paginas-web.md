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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7EVCHZU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQWycurM08pXRGQKkb4sVSq0%2BBTwSJsDgAOkM8NrBBEwIgGZSTOgPFq0%2BL3%2BUA6HAAGVev3SBTHHLhKVBCpAedRUkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDLbIGtuwpRlaZRLRCrcA4SjxUWHShTYiAbt%2FdRfFeyKD92C4EDLNWD7kgUs56Y6PLwjVpwGy5oEp07jCmWrerbrzzVvBRMxZTD0On6a%2FIQq3OGbFlp1Vvm4sl0mGyHWzEQGWtZO%2BNWicIHBHNPtF3pwPnj%2BFrhYVyw2o%2Fs1537I3tRWeuX%2FJVEtfKA%2FpR%2BCo8CSR6x%2BG1zI19Ukb5QkJ6F0vjXriSHMVhlwrGD6VV%2FGW74y4Oll9hRlxWsdNgRYt9M1Nsk9cEFMYunA8hIZBETXkOOf9RK9PybNvJZs7N6uKLPmC5q%2FC0PB9SxlRflPVOH9u%2BDhowcJ9dkCO7UbwmxZ76iD1BoJgT7%2Fyoy9Km5gRJujBXQs%2B0fne6T2BI4BwYlqcCFo%2BOxCFQxOnk8AKWidmj6gLYIcSyFzZpM2b2Yx1ZCURZSzQKzhWWU45FOsKeanhz7DUa5Cebs%2FmkOxFOvXcgHzWjrSoTayXO77G8po4pt3gL1stcPTX1HP69WfjofREDxUbyMUrNry6MfN3Ub0fdoGR9vym77Kda0i6q3tT7o0xIe211gIj7zk0jnvD%2FhMB49q%2FNVQkqaHJa2vKm6JufYep50G3B7sIAAPrIlEG0PXriORMrm%2F3qAiHNckUMiJ9OmgpaijAqG%2FMPWm0MkGOqUBO3wu7%2FvG7rEddvgvd%2BvcJ9jERrOFhfOjRWoF7i70YlFON3Lf%2B4DAxy14I4vnrwaBhEzu%2FlzR%2FrfUHKY1d7sNq%2B%2BBAUXS37fnRH1osg7RSwvcdSH9G1LdiJACJ8k0RQJg3A0or23Lhv63MJ9eyLHgopu9KC9CW9agdiV7nwl%2Ftio8N%2F7sLenJEbyNZ8W0c%2FE4tSckulE%2Faw9fP487SWVRt4qkt3LB&X-Amz-Signature=59895b65715b394017c83177f14c00b006cd9525ee0e40e856e85986d6d7899c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

