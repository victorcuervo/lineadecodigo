---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOUWPYM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHqIajIyxBm8mVLrE7F%2FeTz5OrYrfaRvaP%2FD1ZKYk3%2BdAiEAlV%2BNQnt7QYrNsA1eCED1NJP8kHapWWOakQsy6BovG%2Bwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGqHwLJCkfN34rlIwCrcAycs8HPKKevgUBrmLv1nxCGV9tj6GeS9Gb%2FSdpvU9%2FoYCUytRI%2FG%2FWcmwlt7PjQFBOB9JNKNa1Me2XQH0YREMflhImBLWL%2BilAWRIYsimxxV8tcf4Kin%2BozAoDFgqN2tGBOvrwwhOaCkh30oS7XOPAZWhzMZtTUt%2Bd4XsqX0vMLJ%2FxiHrvEXVIQw0HTs3Y3wS%2FM6AuitavGqcEZtG1yvaXjfUAH43a0fBUTg05ZF9CZIXfvcmC4OulN26E7y3YH%2BdSg%2F2IlhhsHHX%2BSn048KCgtkYZLM9VEDn%2BsxS3OzCUSK0SGJBeX%2FJ%2FMyobg24HzynxjhBRSC50miu4HM%2BMkiAefRP7okzKAGqMskkhKvGfjaOPAVwIDK0T%2BclzoTznDNyJTXFKhH5pZ7li4cvLG7Z%2Fhp9wsluerlnF5QO9AG5SxgYPeb31qUe37Ytlt5OWvnBtPzY9rYlgNzD3sjf3Z5eddEzS698g%2FyyNMZd68zBU2QtWL4PglifKgxi9WO34fN0wlNBD5A1nDKOUisBoN1D0hZmkiZpLigAWd5Zwl%2BbezVHzN63a%2Bws8JjHdiSWuTjsuS5n0jDBECYd0WqFKNtEi6PyyCMvr49biqjX3oEOOPbtdvfv6KyiPC%2BK4MtMLqQxMkGOqUBbCH7%2BRBFxOvkPpZ3DPisISP09eiWvLyoS83OWLK7m9Ou82m7sJWMM%2FVtx9kyIbhI5HR0rSdZkf0w4WBdu1FIhyexdgtNI05tt2PAxA8GZ6S%2B9lhD5r4BI54uitO26i1okmxYVnTTlV3lh%2BwaawPxazesJn7WyHkMGukwsCLxJh%2FJIoW%2BTEkzeFXAd%2FOO5dtAsrrZ8vlZn8R1EZqPlXyYj0HoGU%2BL&X-Amz-Signature=6b7c04be60380d5afe09c7262f6bf821ed5a4d54a608b12fc1a38e2569361e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

