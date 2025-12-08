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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRSBY3M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqFcm%2FIaTfvaGDVXGf65WmNS2%2BRo2siEKif1FM3P8pJAiAZMgByY7Sc7Syq02UDGN8ffYZ8m2v7400Ypu3gni3i1iqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWMryuNggjRPtlyLKtwDlaKOp%2Bpr4HGYbp6c5%2FeqkQsgEzDAjUbAUhFqSKDIATl6dkBJt0aTV2059Wl1AiH0e3yWTjJCo7aCiH5mF5eg5aOGTQHXbQfi%2FYB3B%2FzRn0Q%2B8yeBrOOCyn3Q0f%2BQ2u%2F1dZz0DqgHpFoXjGYlpf%2BkC4%2F2a5et2aqVopKDeoUvsfDZJVFsZslsedUSdrq1db5%2FbAO9Vam7xZo%2BFoOtLzzpoPRFvgyZtwjSFocRNBb%2FvacsU0wKcXXerSaibEM2vO9MDGK4ulCfB8ndHp%2Bjsen%2BT5V2Mk32VH5ZT50yZShzBXSXuCCjuht2E3O1JgrRSx1%2Fox4dMAiJxdnQXBbxdcIZjQDVeleVaF8hiE7FUzsWf2JhlbLzUoGFhKJn4XXxIcY1yCPf2nJ7415a%2BC7qyO2nEKQWV5cWdsfvgYY9L0QbaEOdrGQyc1PcNrpVhNmgMLbaW5u7%2F1Oicnv0cs0QQcP9i1TkU5yhs9d1HP8chEJVhqY864w%2BeK%2BLAsnTAD6osQwRQ0dVt74LxcQcKQQ5mv5vagY2IBMikeKGn5t4Uw0F6UvFI1w0AOCiAty5TyNuuU3gn8RbbBMP5BUg03WK9JTVFAKgsI%2BKKM3EdAhYaySYI95iTk%2FxlG3axpN4uLwwoe%2FYyQY6pgEwjMDlFks1o%2Bb4k2u4DoezGA8xqBu4Ey1vheHW3xF5x%2F0x%2FAbL86Oc%2FPW3%2FgXKqlFXAYrd9DC8jFDngvG5gm7Pe4hS57gStxJoIaJ6HIssndT2M%2B3rbsz8IPptkp1co51iECrfprPz6ElUrt5RKksopzdVxmDD1X3c6mWi6Z7BnaBrioqEWhPILy4JNoeTtrkmC5bxU6HBkjLUUgdMgxhC4po7FQpz&X-Amz-Signature=b5809dce63f7c82447e5231ebb8011ade7b9e5dc9c9c3b130b15aaca429cd349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

