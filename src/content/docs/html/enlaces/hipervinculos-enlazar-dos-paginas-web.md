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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5Z6PBYL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO3CPFRSGA7vYtxxgDQ1PG3%2FR0GJjhEAzPuOlDZzr7yAiAlXhLvXf%2BamxRfMibePFAR66uHI1g3BgX752YPkt3kHyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVW0cYj99UTS5AEOhKtwDAbGP%2FicPsVMRn%2FJUAcVT0%2BKINzzcDUh4ub16SlDPomYZW5WY5X8Dyd9lTVFWLrzz1Q4o2e91Go8FbRe24%2BzeEns0USJikjp0BHCGoZ4WjiVhaN51q5JzoyBfftI5tTpdQ3J241CYE0paq0fDDAFhkPqAfwywaPD%2FlrylyeB%2B5PKW5C20xAAm53JbiB1z49Q1k395eSiA0fmcxh8ANi1v2x0joONyFaOfcX%2BxXqwZJJzUY5oQpS4gUrpL1AXlY%2Fmq8g25ssNMjndtrrH%2BjB2ji2FmkAb%2BAgB6mlaZPscJNUBhPW0JfUPb2JJwtSHPVfo8s9Xf57XM539jNQCw4LqihX5fbqEQn%2FVe%2BRzIyxZTC0ZlKt%2FjS4RglR%2Fx9ifUGgyIhSzYlCNY8IQVEGyQ3IpaB3rU0NdksdU69q36JPm6uC2F5bMoXlQZxOXUJv8r%2BFLdEmqoMixsSYKrELcbdl%2FA0ccxcFfMKnNREeLHT57dQZkaI8WhVZ%2FRP0qtJV2UiAEO2LxXdDwbTLLs%2F4p4OqDsRoWXaztACONvBEb3v%2FPKPkSMHe0U5EyIvQxH31zUvGOKYN1N%2Blzcb7IGJ29CmcSug8582vK8qdVvKXWPvgCzPvZReJ3OBpNnsGToqWMwncPdyQY6pgFg5fnNVTkoRVFcp%2BMQe6SSk9rU8NEGyzzoCyXlG0AP4gPwfgkWbm5zlvzPfc78h860dueYZktsGxALGkXAoJzis5x9Bx69D%2Bcmo8NfzlIBC8abOAeP6r4wMBC4Lnv93cdGixHdahwmY3eSuO%2BjDCxK26DSHCon1aTXHzGbhuB2Xo34edk7VhAQTSDuneBaCdXZJPvg5X%2BcLF%2BRKVyw0WRAeDdijNDu&X-Amz-Signature=ee0ea3e4e68ea8221583576d18fee98f77d838be49e69f022650a4dd8619adb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

