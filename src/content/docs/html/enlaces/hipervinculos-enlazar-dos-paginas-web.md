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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326Z2LV7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI0v1sTvyZiDMMwq6q85etdpxzk0TyDpAjdIU91e8F4AiA7yi9WipfadH6kXjNPiukbFVHBDlhfP5Sgb%2BWYmgFqqSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDjyQt65KlrspA5iGKtwD1WAp5cA%2FsSveRXWRdOy3WDkM9AUQ6UYM8tJt6knvBb%2FPYO8RGqo5YKotrsWoFthoeGqhYwH9a34tRJmUJ6YgLU%2Bp1ZsuRNM2IJYPFiZnsOi929dp00QZ17glOhXoropfKuG7bIbo5%2BxpWlu4CgNp%2BrJwSQ3vvIZO5NrRb7SgJqPbr1vuQQMTh1dzJmNlK3H6oLweuwviWlbNwFbyRgQxGYhsRefaeRgHiaNFnplAHOvS2e%2BILdHEiDqNMczSC7e7oKZvME6tSpm%2BL%2F57jb75nQy832tsbuTOmfKoMI0bzc4J0yzxxxu%2BKFO24fSnw0HSdSmexke56lBZ0uHS14zmH9N6McDBFX%2B9IJYHt%2Bek3HzzdbpyAldrXdV6J6nfogAcnmrgpWFSp%2Bwe9bOPS5AW2WNMYSm8LHSLBa2ROmPgUnpwfA4yzQciPu96cVON6AKG7r4m2oGnBbZrue%2B9WyQC1Chq8EI77p1K3e2jE2F1qv8dODUaxqIgSV55lDkomPKRPVvtEjVGbY%2F%2FNj3D3s9eGeqSBWI9DOQGMVXGPLY5kUsUy3VnWJ%2FlbI0RBZOppiGG7WqgLhr17d%2FZNlVlssodJ%2BncSZZBXK3MU7NhLK9MO9qqmR2cqvlX56Qurgcwj7jWyQY6pgGyCQM8G5S3tLqGznp2hnNDDL0GIG56TPB21zqWXiJDvgR16ePnN6fAeHBnhum7on9v1py0M51B9Sr1OFhy8e13UqbpOQtd%2FMBgsQSFVbfyFCJIVxAeYlTTrjb5QiORgUr08FN%2F0H%2F6uNIZ3tVoSFjKBuCi%2BtFQkiqrNHUFFeEZph%2FOGXA810DXiCU2K4m1SMz%2Bsuynil0MVkZ2Pgcnhpj8u6uj0VrT&X-Amz-Signature=20d11437a3b503a69e3dd1547156f30280470643006e5108c5f03066ef4c5642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

