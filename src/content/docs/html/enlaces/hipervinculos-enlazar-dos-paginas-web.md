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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSQ3NII%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC9HNXxTIaCSL5M8aIhrc3MjWOkVFx1ytlhqiCN%2BYGcAiEAwFgzg2ccAdX%2F3oDPBvra84oFAoDRqiPRtNDQEZJtSXYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDO2jzIa8wF5Bm2oPYSrcA79Tls6TYTk36OIP3Iqr0sC5%2BDOXD0hWw55jQH3RzG%2FJ4SqeM5CkVToIosmysqAa6Ln%2BS9iVdgaLAF0MvCqpCUXMmjFFOaQTnsALLFrS2ufpzB694XitihfgT2%2Bgm8g1LERHoA8uh42UMrE1JkaDlrLRL5K3OAN4bbGaNeZwbrEQn0G%2BmygX0IgGfQsbehagC9esrG0pRNXLJCjChEcPkL%2FJWBnYqosU7f2rPqikcffcFnlrI3UyGAO4H%2FysUcjyVgUynNBge%2FikFY7vDjt3vybERphdsYjpEA%2BIvIlS%2BVy3MUtcPs8PXOUIzaVGx4oXcCXRtPxvJfN8eP2xpAFF2uwbOFfh7y07QpBuZ358c3SFJvTDXVt%2FKsRHgNMesn2rmZ3o8ePjzHlPyfUqwlc30G9VVep8f6v0fWzMPzgusIsdaFFUE%2BStrCHJ8nR1ukMayB5iCQGkjJfIzOW7jo4J%2Bm6J5bpSsxcAQDKaXY70P7RRAQBscpb39cwdhEq5DkjH0VA990r1Tizrz51FcfnwPBE82GO5UHIcxzhN7EyZUN5MlvMWndX40O35YNw%2BBviThLE%2F8nyrlpw5CN2VW7hcJ0jQROMMNaq%2BMwZU3aaO2eLTubL4YkNv6ox4ZhwWMOj8zskGOqUB7PuQp4ZwRazo7xyuqL%2FQ4ItaDym5obWPx0hE3DUpk7U9n45JTlxbljmB5ElF2EuAhiqAHtVfa%2FAb%2BEI1TavNkujTCuQaZExwG4TxbBAsH2m8VtA1nB047UrNUcjrnlS1Qii5L%2F7vYPGO7ByVM1vk41IjlhkHjnjqRMvxKcANPr5NJ6gTQvjwm3JuyEoCP%2BgEJZ%2BkxASVWF3Aw0wZabz6EbmGPkjw&X-Amz-Signature=3c033e3bec4ea9cc13571d02d70cc07ed941241405a140fc25c828b53ed72caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

