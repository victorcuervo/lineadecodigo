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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKU4O2XN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQElrU%2FiMbk8MfDk30gVPa3pNqTARUfJPNSvGJomY8FAiBH1%2FT65biiJCYV29HgZB%2B%2BpxZaAnzOuLne8Va1xyy9gSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMiAHcpWLOvmJqZYzgKtwDbOeA9uUaW33WmXecpWQvw7vtjyh5xfi6tQmBY%2BCtgZk1KlxF3MYeqRqs6H5Y2tNUWzupWOV195H56aiDYrFOO3%2BUgPZxK0sJDdA1qCSyUN60F8017KKmmVhqLDd47J2fCrgoRJwV9yz68B6wiAv4DC%2FQ%2FnLKgiF6rb0jqcJeZkXVoEO2P4t%2FgBl4SHqptsTeT%2BUuRV91Jbz8ktuKaDZLQrnWmMKMyewosWXnD6cAxyiBvdzTVV10%2FR%2BQ2YDAK46CbZ%2FsjQLIn6w3atFMHCvZ2mAPDYYWxV9lL0N1NMWG8MJWSThPoBa0aPi30ezag%2Ber6PWp%2FmltRRR%2BCHvZIHsHaFOmIXwygM1Iyd5lYtDz4mzlX4hRx6YKGNP%2BgHz1T8EBArw9SeBfsLVBdI0YJ%2B5qMs%2FeQSP09jY4RvkGvuTcI5WDbgarmL3CLLtnNBH9tcSIj%2FO3%2F4TNpFLQrtIByo0tI97wGz6cpkYygDnR4wvcWNOURLNbqOPWZtBI6WtVER%2BISrrEGlt5hwl%2BaYSX%2Bvt%2BCJw%2Bzibj6uyHWktw0VovrC0w3ly2tMfawjsF1Z06TPIEFb0G9gMXMw95FX7bcYGiU0cIZnhDyW0cUhz8ZkLjp5Woq25sG23sPYstB0Mw8onQyQY6pgEWYNybUwwEj0PPpO7FPdHVpvYuaCn%2BFojChTeJXF%2Fe%2F3qDdLPF47EAeZKN1ojBIRRycNKox3pMa8THVuo6F7TYscqR7DtcEn0RooXLEcGC6SaNW4DKzfAyI%2BvC6ZTgAqWjFHlXpEHpza5Sd8R0lz8bPEwt1J%2B3vxcYM88N30vIKMnxXY%2BPKP3bn%2FkuA%2BlUky6OtC4r%2Bj3UK8nLsxDVqb2mMDTTwExY&X-Amz-Signature=289550d34b5aa0b6089206e6c13bcc0e5ec8b71948281a6f9905a93a91a4ad3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

