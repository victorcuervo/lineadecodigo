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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNE6YDHH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIaAYq2yPzSApflaOU8xrOALJ3p1ZwxrofFtvreU8gEgIgGH6WCaCe1r7H0FrNRfs2gxPuKHm376t8ZQyNw3amRyMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4OWp%2B6Jt0F2yKd6CrcA%2BSdFO0uBbzBiMgCMNdHyE%2FhXx0EfQz2k5BuLAGYG3bWzHvJKzjX8DZbkR50xUAzR4PP4ToOnzv2EralfBgbsJhH1LTtsbminJ%2Bq4XTWWJ%2B53rSh4e%2F8gcjn88UQ8uaY5CjR7cm7EsF55PdEyBxgspNdRmLoI1mOagtxEaWQIgsTFpn7z63lWEmNooYC1jtBLqOhk1zlm68uklZi%2Bvwgwf09ZPiBLVnJK1EfY0AHiBkaicjWkoEL6lkKYgVhbvlpgKrOZUNKWvM73R6sEY0udRn%2Fal5pVh%2BtL4L3vS9F4hd7HSL9EapU1YdyYhy%2Bb1K0oWrbPWNGoSE4QcQI%2FWfKFuqybPk7JkctHxa57HoYoMpCOOoFzwGU%2FlCqnUD9TvGepr%2F9eglxxpXPWkPzbLw1MLRtSPzqdod2ISbWMEoAWTf3z6lB3mEzJDH8mdyTES5%2B6Bl1%2FmnmBou2zT3LOHj0t7YmG8ExCYCfwBK5aKI7rAiabwqs0HVxIEa%2FY01uZjk0jQmwwh4mnBmlnXV81pfmQFRGob1t9f5QgGkktwXecBqZCuM7pGU2wFeU5c8KOXx5Ig%2BVo6leE5n6TPRy1OOIe2OsBRbgI3rcYndwu7NRY3ekxQyCAD9EFQcJf6FyMM6f4skGOqUBEEVnDDEzkzRIr0sx371FzkR5yXHmljrd%2F6EJ04yBy7k1PPS1QUAQjptyhWpRbGoXOM%2F2tnxAoORZqihiKK0MrTfZehqnaaMGjFGsUzLGu4%2FAaC5kGmYyZqw9Q09AMFnY210ESkQNeoObYcKReSe0pGNzoHnKpxTs3xM579a1gncaC4UE0DZ8%2Fu%2FYu%2FWPTFLfkqHpBOXN7suSVeKZAnXALHa6Kasq&X-Amz-Signature=3a03a9603b65e2fbca9928ae552fc38628976799bb010aafa77578af32c8dbae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

