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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYUSXI7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrqizbb2cD985BBJJJE9rQPCAb%2F5m8K1NNo4rG9zW7FAiEA7vUAZYHyjLb2aBZRBJvx%2BIyORHBst2rziii2JDIYRl8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF68WMLRMtkNplVTRircA2Ti7yK3OCAlAX%2B%2Bx%2BRXTL7doFySk0gZvCIJLv4DA99q4BSiy5zpNVgjuWHdnMWntJjXFkvXwCRivuImofCzhwGcmEP%2B5pFagCUrEKsTtfD04jB9VKWPWpMx0Uq9XoJHvjsTgjZcSARdLcuPaS4FmKrVPk1NmdKeQsOOOa2WqW5lcISid6s0X5YclqqG8ZTvCqWWWEQdwLj60fN%2FhAdFC2qxUQT2bAIRKGITz5ZosCa19KLNj27on5stke83EP3zOiMDHp7gSzFY0YOrLqJDpy1uPPFYkgplqNpEL0dSwGNk1PwrlsG8m3NUJJG002F5%2Bn3u1K7XIjCh79oKyKx4AyUBL2UStAp9qiYYrZmnzHmk1fXBZragrpVLR4yhznaeM3VKzxH0LHfL2UHuk%2FnNF1AGPy61M4uX4TdV7tIP8al4dqg%2FokvyMv4AA9JDvkdm2z%2BiZg0AuRDR2yJ3y50ZHmc4AVJeCCELzG1FDCrmCGLDZ9FeOJuf1ujvlx9qU%2BMINCvXzjrYyhsht3rXazyKw1Rwuoru1VVvulFSnjhgiOD0QHMUZP5FJrhmgDpLvS%2B6fdYQ6vObHGEBVRPJHNSXSvf8AhSA0%2Fvwby%2BdN3gWKiBT1oRiPOBWqQTkqlKVMMiZ1ckGOqUBIuNNcdoC84FMExGicTmW7erU6CxjUhRiFGuIlehyBU8qAnzUp53%2BUAMmm8kELFllbM6vXAOEbEJlf69ou1zOr5C%2BKad%2FED%2BC1zolupRq%2B8qaRrfO3zYgWmg9YSI2kCdaMeDuvg8LwroZxedVVkTPM7l7ZIQgtY2ViIA7uEhPLGWn29KhqUeMYIXudipNvpkZsLcN8lz9voi5A%2FbdFK%2FyOT5ygdU2&X-Amz-Signature=690e8789338da8fb18e96c2eea3451f26ceb263d510f491972727c9258b7bb8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

