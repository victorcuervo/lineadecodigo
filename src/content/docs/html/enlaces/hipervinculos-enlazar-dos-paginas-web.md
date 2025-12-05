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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VSIGEA4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVaLPsPYakfVgdkflHKMfThdorSTomiGEFEJI8hQ8F0AiEAmeKvm6hO0RiJKfbgSFDNKODnJJnLptNkdkI6EmJfJoMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMgqX%2BKq7rloZwiqEyrcA37cj%2BBaXEcX5h05oW9fhAR7P3ymehSuZ00NIaMwPisdhIn6MtFusTKAM3TgKI941PxxfJIR2IBr6snhV10KGEWttUjZdzEtmwZf34I6bw%2Bxi6c72N3Y1bpjwTF%2BJUoY%2FX4zXwqTsSAHjjeocyMS%2BFwAS79LYaRQ1KNUZ7mLzRlxdJbNcKv5pwSBqm5WW6VuZWRy66Pn%2BDx4hZPD7vzxwDha6isdJuZfm%2Bs0TPRynUM1R5LLwgKWoLjPCnfsyBwt5US0mvJm3n%2FzRtLnuE0pZjqUwGXnaeM1PYsNutEty7M5PX7r7aIQNaKmOuTNv47TPf2fqt4DRhVHH8sj3CLlLossdAbshKUgu2d1hYbuF%2B7eGWN2447%2B%2B9tiet6PMn3OOLAQWAqeHst0SwopkLM%2FRkm%2BcoM%2BJVFPwPADrrHGuWg2OTSLIOuiuvdspFqoCMxQXUt7G%2FTbKdfVhlFn46yzPRwrgtluBXfrxXKniXIXKSjIM3JmY%2F0JAYC9RSL2JR9n%2FP9uH9GET%2Btkee4JtHP4KxzFnCGmQHxcuhAEI7RuK76xOpAcxxLDqYxKTGix5IZwWfiHRgjwy5%2F7BBdtZeG2Q0xPGtGoDO8JolRdL8nWR111%2F1Q%2FOJj0Ke1FFJYPMJWMyMkGOqUBWrKKfGNdZ8%2FzPsYLFm0e8Bqpnn3AZRh8yvm1tP1UM%2BDgpEGb030Xr1dkapeJvnOgydP1tp%2Bn6Ff9MexokPUnecntiJifXoj2kYCqTYkOeiDoGfzvt%2FuV9c%2FRE%2BSdBUduK1z%2Fk%2B%2FaGPG3W0kpqgOBdPrwfKui1io5ouoaLV1ai8NRMJSeCxHaAmP0AsK8UELNqdyt9b950cMzlAPKnClg6cRlHjMA&X-Amz-Signature=139ca0faa3965fae6efe59ab42dbfbb63ff5c563f0a309821cc67585f4edcb8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

