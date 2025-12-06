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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQYQ6VC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Q8DVN9Q1PZfqt0gWbZ52gTKfWuPHOrNr9ZWLgjw47gIhAICL%2FGNP7jUI97xBur8WeKeB5LG%2BSajyc1JuPRc803nyKv8DCHUQABoMNjM3NDIzMTgzODA1Igzpo6XoHzKXl7TJlM8q3AMMQDRTCikC2MbiMFEWFM6i8agL1JhesYHIMril7KoWWyG%2B0ZEbXUd4BcxOqp%2BERuBW6g0iy94zrqndIiPFYlhqPYzYIXnCtu9ViF%2FccX5ggElm%2F7Tii6YVlVOY9njgZilbJ39zNDcdkSEbo7aHGkzcN41MrsN%2BWQpS07tirs60DEmRc4dQh8UeAHjVqFCPxrb6rqJyTKGDxRuxWciL4SMfb9fbt5152oy6C80lZr9rdn4Vs2qXPlsPOXWGIdRdzWJUIzUHvLEoul0JTrVZLW1oSuwj3CSAgeTknJBqFrXF3aFnFxiasLfzpczAGmjo9NdcGNsxlkNUS19HR6qmKaKBjr3XMI85V9zf7IvR4Xj0%2B72IdFxyeVy7qS8He2cYT3I%2BsHdC4FpZoOPVdBQfh3rFK6rNsg3IMlVY%2BUCfn2SArocJuqgORybFmRJcMEEyrRivEINyBmpPrMVAO1iQMvGRNy3xzAPEtegA8A9vgsuB%2BtJixeFosrQuJeT1uWpCNmghD7vGXpPQPIFULysBZWcvfCrm8h3Z9%2B9aEq1khHiZifc4mnKIPghSwniDTBKAEpxjqznc1%2B99nhghVNFZlDfMyOjsHfE5KCnXm2DyOdYuJT9bV6oQGo4rMiiMTzDOptDJBjqkAU5s4rqlf8QKs55UqwcDD1113czTntLRSIakSQWwPJ8UXM62RyQ20MDUZNU0INafMahZoS8zlXOewTzBPEGAXkaA3hbDMHT3lSOqY2Opx96ubrch397lq%2FcWJLZoZMxdmwiqNG3nvrb1IC9raHvuhAjQArmSjZp%2BFFiGfLDwuyru2d%2FjUd11HfyYd59KndqVlOOgGEZNmrl9x7mDRNvJUtqgSplt&X-Amz-Signature=2b9e50a5d4b9519f3698509783efc4e4cde6ed8eb8aa070526e5b36051699ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

