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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XCDEYPI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiMcAQCU5Wo09rW0sNW1d88JYm%2B4WD4ebw%2FU0xus7AdAiAk0esSpg28fAN06VNYDyN%2Fwu9EkS4mOrAdN0jYY1XkBCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJttjOiur7%2B5eG8WHKtwDeaqVO1X6JcDyaspuP3rpFZZqIkCAtVzwI7caTZC9buXHR8GetpmULWaULKvdEH7ERmvYDo%2FYGf%2B%2BiAoTNt41Qdl2VQrLX66Qoh6fC%2FR9xd%2FH7uE42bzrR0OLdNyh9bFZqTVXxtpaItvQjdFsVfMpKz1HmQpSJUL1fOwjBvGbtnM6JY0m1KbQGqDL5767gQ1JPAs87%2BLFnq%2B%2BD70caUQ9S3gv3IXbRJZPMCvOnNg2sw%2FznYOUpSFDPD8JI6ESii%2B5IU9YX8bGLPj21U1e%2BHduWBYcA0XC0Q%2BResfvou7N0O2iDCQOoaoEh3z83DYGDNC2xiv1zvFdYUIFVMXYvjP5wzUiNQzNwayHAuD29b3rB8oqwpnXpEHf3Qg4T1R6ON039wtUgOfwfmwsdQFZQ0MOp6x9w2wutgb1tIHghxPQx13%2FwaM2nzq%2FeuVuauAFdnsPYheohLH9x0PcHK0b3YAUpHMJfwMfgn5JV6yXSG0qxi%2BozQNRWYtjLByX9SWaKCNQXqdeHmDJAEMjPVvHqpjGT6nuUempfG7hDRfwYDvJfGAYsrad5FPAPst98pYpohE65fW5YtrWKUN7ferOTSgIcRD5wMQysJBq2IpuRSgp4L5O3thpH0UX7J5CJYMws8fXyQY6pgGk1jQlcdqox3nzpOYpYMWdD02NgQ5LWX2xjl7Pz3JD14Yf8sWl6xLI55phH2Ch%2B5TsJRp4fP9guI%2FjUrAY6ura4pvqKHA%2FwfLhULzOAEOqesgcjQItY9pWxAeQJqCctPIEcTqAXERX6PbF7vFxjj65D39i7a4MMUrkEBKD2t6x6dnq93XzTR%2BEz023qjtRx1lQmJXk9B6qWoa3V%2BoNaAjk5uhID4nC&X-Amz-Signature=77fee612414e7bdd9f250bb2d1ddbb7ae3613c89600650934d245a8e254d015d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

