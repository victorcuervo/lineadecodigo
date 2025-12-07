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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DG4NX5Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9E2tyk1My3I40uHs6IjStdYcQxPzeI2vahynuI4kLZQIgVqH8aOzI5FX8MJ5t%2BV%2BwjT2a96bA1eEDMyiTQpn3iYEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7dKVKmkvFGvA2ohSrcAzXrlxk6to1rVdk%2FSXkO5O12Nw7BzUm9qRqmmQnxLFfrmA3j4ad6UF%2FbV%2F1fZO4rrMWssXikQ83SX4z1V9CyErnPlZROQKqIZ6on6l3XFWp0qG%2BDQB9I2LZr5QMuVg24VWTRkttfw0DpM4QYCPtCzcE%2BYjwLSYibqy0YTPGWj%2FlklM0QCgwZ3VLgJar1DSayCdTFt1tzQy%2F554qylRsSfgTCroqDWz45ITLzi7tb9960bwno%2BPXCGTSFIEDa91XaE2G2f1RdHpLzmUueQadzkHE%2BpOV%2B95pckCi98BQz21laj5pQ1%2FX8cPpGfFYlUxriDW51WBrizG9owIAkDIgAP3%2BHPg7DHrQc2Wx7z%2BPdjzttEfGEBvtp4W90ZtAW%2BYUKz%2BZbIh01YM5qjlXLkLBQAMkiEvpfcexWiD8tGZc7wsKLT7uHUqxhxQiBzXdW8Mqe3EdAJo4OeDBG5rbAfRMeuky7aRltdG9Po0WDdUL1ODdWI9YXYQbaV71TcsnHKpD0vpvepBxNbbbPsd1%2BHC0va7Bh7AWNplx2v8HEK4OgU2Z3EhqS2N2AdeHBzvd%2FcmHna4Cd6TGkLuzxKCa6xaCfKFpiBQX97%2BJHwR%2F91jxyRT4KDwk53bmZ0CrlD8mdMPyZ1ckGOqUB5CkmZXldXktv50IeCCry6gLfFjTsoc3qz7jsCi8ykrpJ6wDrJIOuqe85yQvrXXdEOv0dw5QWmzpq%2Bi5qsQSxeCzhLgeMbGfd9gaM1kmKHyRPaufBDk2zPLgwdlaIzgws6wUg32UesYS%2FIoGHJ6EtUIGbMreEnxgxHKqbG79xakvhAOzBlCFhjRAr%2BqwP0Ww%2BBPWXzd3DHP2rMWdM%2BNVvF9eaU4%2Fw&X-Amz-Signature=7d6006e44df229a0a79143af45f974499beec3a1fe9f92cb7d98f48f993e169f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

