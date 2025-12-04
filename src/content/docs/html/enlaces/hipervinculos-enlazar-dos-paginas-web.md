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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKZ6LTZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGXsCMx9L0FOmEPwoNzDVlNkCYvIfj90rwMr3fWZxBTbAiEAuJr6IwX%2BUw7J7SEOTq7lRl1Pznw2vJ8by9p4AebZPQoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJuZosq0c90zVnzfLyrcA1LpkcjDwzXKJAd177K2RwFE4Iwb%2FxV8Egu%2Bohxhc7UMdbVjTX3jSHrUZ6L7gxEzlNtUdxTp6Rwqy456BUilbywnT%2BIJ%2BTpwm0zA9Zq0Wojzmi%2FomQ3exIvu59ntRRUKjqNCvG3F8gAqe2baPVvP9YlhbP3hWGFq%2ByEVhUiATo1CevZ%2By0MYcik6UlX5PbbZBCzJciITSRMfSJpg2o9DBIMCURpSCsLf6v%2Fh3IVPOwadt1TANqsXLBcyo2reLi0nESGZg6ec8hVBrUFFrWaRpsKpybkpy8MtIBtrSmHup7kEJI7pZ7sEQPTY3i52Yk%2Frvfm2%2Bc4vixnYcPzR1Nq29u%2FgvbBaxl9Hen8eQAEQB2g2ob87QyMEDggy%2BJXyqyo7%2FHIsU17VOtt5Ex%2Bcw%2FEOCyzrj9Sabkj8rHhNJLFwNa0RvF2g8V%2Bi%2BT%2BBsuEOlZTye%2BMvo38aDBPEEpZPdezpCipEL11JFUzlKL8%2BHBf4QWldndraw9LhYJSrpij90EmB8ea4vBEHPo%2FGZthYfYs2ktEsLVyiiUhxGNKR0ZetSOLjB1KM%2BH6GZsgIEWl5F5j%2FAq%2Fmj9X4a7Luv86VAbqnLu%2Fd4P%2Fb0mbEuLgm%2BIlSX4SFkBPB1W6h9RovnCSvML6QxMkGOqUB8tJmQs80E79fb9UXO5NAhJNBhqNzY%2B1i348K6DKHkKYEmbH1G1ad74SGIg0DfM8ipE4%2BGlLwBxN5JIxYXJmof%2B6FQWGiB2nS5WrsUaD%2FTa64XCGl4YReHw0FJoQMpLk0uMxu8m6qqPbR3zPwSmx3ROF4NxDTJv28u3JjOe8%2B5eGg6KERwp0D82vP1N0WrKLAOAlUsjWUDhtoRigUA8lFegFxDCrc&X-Amz-Signature=88f11dcba4f4c60a53be697ab65f2fa0cf215d586dd3a6d25ed45e511fa9377e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

