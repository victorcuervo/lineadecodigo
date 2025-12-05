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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSMXMTU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYZcPQIKlDRu%2FxfKqb4%2FU8G5D47MN7BRXqyQHtG1b8aAIgA4Bl7HRy%2BLfaWvHE%2FKgXx6bw29UYHZHzZwJmrCv4Yxsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDAucseOMLVu4ND0CIircA5g3Fqye%2BAJ4BvVRXLJKXjZ3DJSHkxozgi3MIC%2FMLTehOxw03hqWTXHches7sPHeqSA8m6efooaC56RK88XOVKDCX7d%2F%2FTze%2FKSMm92mdvNdC3vFRye%2FllCX68E06njAk3WSUXXlrL0%2BX30qV%2Fqw%2FG2Ud1aFyuDuerUw%2B05mae8TnwIdhfP2SKm%2BhyiK8KoVroOPnq4LCTTHI9l%2B%2Bwdol1OHx1fCU0uPiT8koKV4An5GjY4OCy2DEnVOchJ3T5el9NNG%2Be61nBYeJq9rganhJEXDSnLVUIIZ8fa1WAwikb4nBXh0wkDlh28rAGZB8N5k2WJY9EKFdUjjFpuK4i5z24mAVBK3n2ExeDW3Q6JnnBRu2pEwYw5kwN8kPvsUM6yVVJwGVbkaqRoLCsyX7905tzJjkNbNuG%2Bid2Rh2xB%2BdEYIY07iXDzmvMecmEsidyJ6VxeDaSHflsnp9%2F0UdNVt6eBndY1IKOdBDP%2FkXYAzCERWhXhSu72Pmdt1jHQ%2BdpiDr2QHNVIUxQLL3dFhqaa9M%2FY3ZM7KVhfgPx9BZ5WlPmHz4ivlS5%2FoKcHKGuR5LRDAK39UTI8mE4YZt5B%2BOa0iXXzGBVCkavanWrbMs4za9ONbaiJxt%2FzDlfA4EttBMIfIyskGOqUB1LqkvaQkfLsIOC4Af8D9hy4kPTTeXzRnLi5eJIQ4PBvhCco%2FK7qQWJrL2ppc%2Bf5wOgwDgyvRVzSxDH%2BBH%2FFQ1heu4h6A9HaeSHfd9kSltp1H%2BSu5F3UAz4jM6NWi3NU1si4bDK3vW3NZgcKodUzDFglKc%2B2uMtq9XTOtU4lufEVZ2r8oLzEV5uOt4UvYc2WDyQGavZFKpBm27dhKLXDYBaBFTuHe&X-Amz-Signature=1dd3172d28c31549b4cae98ca56f479a0d61d824b0493e63e12ea05421cbed27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

