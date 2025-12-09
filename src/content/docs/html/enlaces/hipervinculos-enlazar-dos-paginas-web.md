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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBFCGHK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T203148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRVWXOmyhxVtmWNdSmJrnCmXfLZQQzUEfiIq0DIUDGMAIhALxRORTrINMAxXb3w1S6oyhnfj5jLp278ijdWOufMv%2BXKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCw0lf2dbJl8sDzUUq3AP7YNwIrPhBdSVPo5XgEUcaPJOXCjudqoDog7KH9PIGT9yowJhEoMnHRlLClCUwaXGOYneE%2FjUE1Buoiiyy3rdSFb7eiZbs13tpOulfVgAivSRuypD6OH9GT2rc%2FH9IY5FXQdKQXzEMMuxMr1PuYjG36H%2B0IBxkBbq4MgPqnsIL2%2B5pLeMw8rhO3vtjTDQFDfS41YqO5w8UlpriL9gDYK6DbbepjPgA%2FOARlfE6O2YyNr0PB4%2F%2FCxLKlCi8rFHFhwWFCTht7D0h1REiDJXkVQ8QSuRQ%2B0Gmb0UwI1e1jG%2BcYWDxdgPvL%2BsvZyPnMr%2B8hIHY3Xv%2B63TYC1MG9s3%2FRM6hcEZVUztzBFC%2F%2FDdHNVw9nt8%2FzbHPQ%2Bh9ncOQn8wyxUrOqku5xI%2F2q16Fn6RmalIQqTs3aePIaEz1WHuYR7gHOIYkaX1sY73u32%2BmWZ76M3bbDYoF%2Fj7inqgEkB5Uo4ZV4gqlhNrXwntnsG%2F3qhXN8%2BeR5bhXpv2HnDvrA01J4pmUqujgKWd1zRrEgmP6i7ocqXP6%2FOj%2F7TR6TH0YVa4GMDy%2F3Mdn%2FecXIO%2FBs5RtqEEO30fbWk%2FCNZzvNxfhZvNEXQIaMY7yi5Om4v7HfK7nBROVXgmJoozUqQQG%2BTDs%2FuHJBjqkAebG%2F3PYTyU1nDdLeda0nCL1Nm%2FUiptWuy9VcMp7ifgnB6DWJymIM1RtL9eywvceh8uH7ZyYZRcsnTVC%2FDl8bkFqNsxhkyPdzyz4i5zK4A5Z0wJIn%2BRdpcgmqGS7iCh8%2BOfs1FGKK0GxCUeoLqV7dRX5jOECBghZmE7h2JCqviYz579%2BiTlsUaSufAINMPgLhTV5AyH4CWoSL4VF%2Bmpx%2BsbI5zIz&X-Amz-Signature=ed15b8717c76d64c9327c3ff97fe56e3f51014e92ae62f690690cb6f963a4b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

