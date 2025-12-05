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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYYIFR7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDBtRjd7bri%2BXvcztHZeSrauN%2FRwakZKhKwFQ3E7MHvAiAUWmCtbZAgN8l9b2LOAUO2nw2uZ6%2FlkVPSeLRvRzTgPCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMNAJhLVh6fREW78N7KtwDlZRn2MLizBAnJEj5Fc4aTC2x5eHQMSS1i4v6g3a88i1tzATvnTinaC8XIGYyEKW7Sqy4635B0e0Ub8UCk49MvqokHl9Qb2ANwen%2FV8DXgDN7LaXwfl6N3ZC2ArYqKlozPEnzwyiStKaC2Y6e1m2aK4tjVWZ2AzcQu4bpOSU5dcuWc6gLIsglKoumXsK%2FXDo3MFfiDTx%2BFUGxZEw0EZc%2F0HCh2ekNrv1qAux1f6Tsnb7y%2BT3hgGHAxptNbr9OccW72HyXl1%2BJzFFxoI1T77QjKDFy2%2F%2BRAVjjnlm7lJr4gHUsDehpEyN3lSDau7k0CWzDwv%2FKVKNzlxaXZI1jC4mK%2FXlRC4xJnTXqkwSRvDHtcmiDy1go2rIPqX9KxntvH2Mlb8g4ojkM44SLM2DtombQynUKOp3w%2BaPanLrLYF3%2Ffj45uHpegS3PPSlTS0T1kWPA4vnzEaPmRawHTq7wiMB8VuYfymQ6xvxY3gwDyHoFAMZzbSKGHzHJP3Ql6LDqkqyNEJrXvXXvnnpuUWb5P8DNb1JUCQ6WV%2F16RwlgpRAua8BeddD77Bud1tcWl7byG%2BizIDyujcVn3uSsG%2FfmRXAuriwncji6knzxdOwRBGdGIJZ%2FrL3BIAS18jWyOP4wuavJyQY6pgFX9c1%2F2cyg3KVbQQMMKxMjWtW6tiHix3G1JihP49wtrjAN3atzEKboQmaqPbFX9k6oDnMncOOrXdJwdMk7kuq0cFdOaz%2Fro9bynTZhsM2t633bjodZhDOGFZmQnU22qHRCDwZGgEwr6ehVRQum%2BzRy6ZZctH3juI3NWJuYRVINLK9hoxlr80ev%2BEGTz4nV69P4%2B4DVxUwy9S9Tx5iavVSHxG83oGIO&X-Amz-Signature=4ca0abd72ab02b3bd5ca91a62093fb4c3e7367a781f5a6ef8ffe5270f7c46d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

