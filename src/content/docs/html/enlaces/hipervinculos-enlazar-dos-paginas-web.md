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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EBHUA3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCElo4g%2BiWUVx2yAirpIb%2BMTil7NpuneKuw8LRGwinQhgIhAKUBpAytWJxmTQRFTTHcI3IbHvDdLJoceJjRZKVGOi38Kv8DCHIQABoMNjM3NDIzMTgzODA1IgzG1lpV6aMR6s7oxYsq3AOSjvEe3kJ2CtZwm0%2FQ8mRkMJdqaKEzuGrC2SXbpor6BOGoTu%2FngEcjEt%2FYmOWHwaBCq8C36lw1%2Fp4CgLD637SNyU7z6rYESf92DXC71svSDJKYhnEtnD6NAcw5Zg%2Bo0ZfnytwTR%2FFqbFhhz%2B90R3Km875I2p8ywnc3GRaO0yGsYjc3O%2FS%2BeLtWLXaLoIunF9MkTIc3pRaatKH3o02ECRXP2NM13hQQRJeJl95mk1y0eDcD5u9mSoLc54pJVQKBmd1kALlEjBRVl2Rl2nQTDMaahSlRmpePubNnfXG%2FPsK5ATgNvJtYP47Nm1TXvlYlBc26D97MT7%2FnyYY9U%2B8ZIaEpcJCeA3%2B4O9MvGPSWGql%2BO2Shn%2FhrcG2KorvYpQq4iuXY6mdFB6Hsq59o1%2B8GmNc5l0VGdOvV92b5qbfLQcrJCbVQ4kzv4mfRa3Yy2gBG2D3QSXWwt44EQjdI%2Bl2CiDscIbfHfXoqj%2FAMC967M4Yoml%2F9Vj565uzG%2FayovgFoq5UMtsJDL9bjaZhzT4VAgtOsFgJjpI946w1ihc0SiIFJu1McKFUGSQrPVWJQFGP978f%2BJ9ABF25XxJRQqK6BHgLVq3LINdCeF5sgOGVac3xD%2FBY0EhXc9vN1hCaxczCs68%2FJBjqkATZFtMLptpv07Q35B4wTRq2yXEgdFCQlZBpOcnL6DCj5i2IcdtWoRyZn3J1FMA%2B7%2Fch2aeinMC0K%2Fu0uFDG5brH0V8RLfWNwhhWba65iJ1BJMgfu4b1zQCDAmdHs8kV2B0Nne5pdYQo2rMwbf7x35mfOSlmEKJiUHbhQTHvnTtDEAPUDV899lcpMdQ3HvNsKx3em3t%2Bfws9rM5OEAm2%2BpAV1UwHN&X-Amz-Signature=ec50611ea26199c3fc4998a6d9c9ab47c16755690fcae579abb218d166cbfd6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

