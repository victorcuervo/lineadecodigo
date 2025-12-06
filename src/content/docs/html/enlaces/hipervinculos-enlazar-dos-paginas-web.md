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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WPA66U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPzzfMfR7P2ByiU%2FoMjFtjSVCkYyF5cNNAHxCP1Lz3IAiBo%2BpjJRLaE4W5qH2%2BdC1RMSGWFdyFVYNMk0rEyMQt3GSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMlbGQdDD4LcNga9qSKtwD24jVFoCRCda1Wn3Qica5OF0B3V8ecgLd%2FX746er%2F4YuuEAfxwp8qlVqmFDJ84gP3Cl2cIG%2FJLnr2MK6h42%2F87G86qBWGstsexP40epHy9h3f9vai5vYH5uKLQxonxyGQCONm%2F6Ss2VohKve45iPI6n7orDkB%2BCMFAnEu2T%2BETXgUBIk%2BJFtX%2BIg7GAWI0Ku%2FTyI%2BwH57dKw5RUovG77BIyHmhMK4E1NwrVvBJOZOx2ZPhknrHDz4XDjU%2F2wWs2hE5ZWQNTKCQRGroHY23F2dxP%2B3BRWYPipKiiYMhgZN0%2BFP86wJuDaOw489N2tg%2FwULrnFkd%2B67k0f8PBFQ2x4YmskKhBGmAujMwUjT%2BOVbvZ6aTL0xgHSRd6X5pPia2Ica%2FAenGoCkF9W%2B%2B4KkncU%2BgneNlufWoL2%2Bbo1506Pwc4YrbAX1bmWqyQB3SItc8EVdu0FrOW%2F77KFyOyiX9VruPPuujrDAOzPFbnsHkb720psGtCnSxVJslxOKRvVYnGdLQWNfqzaTHi9WxA9ge7EiSGggkSpX3MAS710K%2B62eA%2BS%2FLwPououEsRiQbOnMJVzLOZIVjzqWN1S5pAZp5UIFuZjsEFs7bNDZSkx5%2Bw1HPrxTk58BQN3vBaxGqSww09TSyQY6pgHHmR%2BfEVqC2wLl%2BpjrP3B6cML1hRrJpaK6%2BUTgLaF3Xb%2BSB1SF3vGlnOx0Cbz8FHh%2FWlGnwFbWskD0KxTZqnqav8i6BKZ5VWtJhZV0jkrxGVi9JqN7a4sboD6w4Q%2BeJK0%2Bv5LTJPco%2BDRGnnoXqPhNF0n4KxvcntuJV2QZ%2FM%2FX2ek8tUrwcJOAeYkTgCGQWGVdnPBDfZgZakMGDascc36%2FHSoBrwtH&X-Amz-Signature=8ba2faad774d89716efa9cf1bf60658d51ff3b052dc545f151c8c631923e4bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

