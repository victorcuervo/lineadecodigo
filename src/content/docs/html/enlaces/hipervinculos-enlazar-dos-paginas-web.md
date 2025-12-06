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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSV2PEHW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8g706zeKokiGbPMVNPxl0mHgzxSjoZLz7bwhby6lA4AIgJ8c8Yj8dFqdR8oItEuPUkliXaUK6I5uFaZWkkwROdcAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPL08uPSYYYIs4AYXyrcAygkMph6tt60czktbg9P3pasCbnAQSD1ZaOwFH9Ec6WGSm7atk1wl7LYz%2BnkwR0xerIH18zCNnz4uy%2BCf5584XH4nDvJ9yykvdHwDeSAaZ0htOVxEywvlMDIo3Zhv3zDU25kHlzQt99vub2FrYlKQDwI2NpaWgi5LHQyhOLvieuqX0LfNhRa1LsrO%2FeiXuvw9yZAbOslFXyv2fsh5vsUFTBd7UkMAVQH4wk8IDz%2FPgfTDToI979rgmWFbPAFLwyGA23OgHCzAs71IrEXTPRlOYRkNOuvxqDn9hV8VqgjclvJEmHMj49RcTvxPnQ8n6EW84Slkoy7uvo9ldazXNbtn6YTnSbSKiXcH5ipSqbxQQde8mNCS2VVwgCzC%2FapA%2BygnIff7Ncifc26HTaZtn2gFFMopCz3v%2B1Xxd08Nm3aMDiO4EAob4zoySd9%2FNKbGB7kaaKTdkr9dE6nkSA05A%2Bdpv5ZQXS9DpEYnjAPb9S6AiNdgnU9uvCjGP0U5V1FVg7OJHUbGfWuBDTet4Fw1XwncaK5QsjjtY%2B8TQrnnWzwykheKBMpDdllx51ZqrL5yVTnh4ZeDgTaUY0z%2BFkfq9JrEMOLxfy8OgkVfGnVW5Dh4%2BrUfycKCRVvIDUzxy0VMLDD0ckGOqUBzJO2RyQ1o4VwZ60V6lQ%2F3MldYl6YqNCQiIm%2FmURhg9PGId8%2BuuSFwtCxxbLnxDwZ0zTL8TudGB4IDDSnowyrhLvPRuwbSKd1IKpC1jipC7OgnE7a2f6Ir%2FH6em8welwnhYeqNTHMCb%2FmXFJLXrJQ2y9Lvuvm2pxU4e9RxeP6cFgmx%2F70bT4Cqgu1ZxbahHfE6WLvfSev%2FUYYz1RQgJEWLWobd435&X-Amz-Signature=ca26bc32ff01a6737f84a9e15eda86ce43d045f7579b0215cea1dd6accc19f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

