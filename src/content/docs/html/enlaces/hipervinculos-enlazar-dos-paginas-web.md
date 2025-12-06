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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM45SYHJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaSckeP7PcfjXHkXjUN30eUlUUY3jRnuxdRI2ESc03BQIhAJZXZQiZJo41JFklhwBPD38OgfJqlT2X2znzgdwdy5i6Kv8DCGsQABoMNjM3NDIzMTgzODA1Igz1ENDaKbGnVawMJBsq3AMA3%2B%2Bc%2B6buCGngmttUKp0jg4boEOxz3mVgOy2Lw3elWIxRWcDxzi3GE1TORNid%2BUmlugKMnPUWssUe3KsAJ4kxVhmEw2My%2F2LYWhXsH16y1RERjepc3TvYmFZKPaQWOQRk5vDgA5xt20qyb%2BJ8PIOtkk64UNjjFvswZXc37WCca0%2FGO%2BmLA%2BVT%2FSs2odYRl1vYNnoy%2BAJu5D7GffDlTgWSgOaY%2FKkpxUYRtdcBg7jU9q1Oq0S2sRqDGmpuhnh2iomUmqoRiAPEZ%2BQ78KdkCYeRi5NASeXWiPI8ykd%2BePogR3YOJxNpKaV1egrdMR8fsm2ScwfvVV6UgU8AbUDTDvrUHwh8iV0ktxdJ6o8NouWGJdfif8A4eIDiz93RV2gNBuoAsgcPAz%2FgOvgQHHDArlF%2BJeesFpSZTmc0sUxvX8LlwRU2I%2B35QKO%2Bs%2F%2FeBDpA4xf9Y%2BaWLoNA4%2BTOvnFsrgvkGruReaqMYFRqHMxXyEHgh9zgcQmzjV9CyU2nwI5Wn3y6ylWG2tJWvgMzMTjEq6xVldkW9Rz95uW9cNiJY8gbmHXVRABW2dlvo2DGZHDfJ2QvBlCAvFvVaMErcf%2BwIQprQ1lrUVPfaKmHP4wElUeCnGVxw6ZXlgcthsRjLDCUp87JBjqkAXLIeWb7AWvsWcq3fxjxX%2FPApPjR9tCMUxREpXwxn2a65QQLSNlnejblMfvbtx8oYKifqnjLNseCXRDti5D1DpkxyIO7L3CPTjZLs0dAp4RBX289zfh%2B6N%2Bcyh0NDA2q%2BD1fnTa1YF0xtPD7As7FLQ1Jp0y2hEMqf6cUymW9S5DFP6hm7LXBTogzSKpittNfJhSIPLuKWIIh96n5Fiz492SKT9W7&X-Amz-Signature=6adf6e24db549f60dad75241131e984bb37bc09630988e8af08dff1e80acc6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

