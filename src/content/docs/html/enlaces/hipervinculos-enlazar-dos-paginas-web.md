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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUQ2TBGX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWKoWHvOogsiPVoLFX2F1R2eKJHiMJvVjlB9H33x4lYQIhAOk8wL29X4zBacQhqzLsRRIfOVTfH2DhkPBS76L7lk8%2BKv8DCHUQABoMNjM3NDIzMTgzODA1IgzBNbxij1c%2F%2FqAG5AYq3AMxewIZbsXOoGWc0Cs%2Bo3Vw5D%2FM%2FsUn4y%2F5Z9g7M6ai378hTayuyzv3eSMa2uH1o9B6uaWw8JS8XJr55DKEfuUtQCVxrBtL4Sik%2BXEwK9NfUbANIvxuM9g6Tv9%2FK2tYx2wXUPYKkixe7Pzc6xag%2B6%2Bkx5i0YAJNZfmRAs%2B4NwGHVdOQem%2F6sbIbZsgQxmQCGrxcldZXD9JyZ1wHjYv3Iwys8GicByvVkf%2BJhtDWGy0s4ThCpHYSiQG6TO%2BGHjDRzCc7CwuQo7HaigyK59KgjzYdv8k5m2a2Iv6Vxf7aycfex6uQdk87zrNCqdWNUPeiCHkolM8Okm%2Bhx2eaaXylgVSWL%2BNGub79Tws86IbC7Al6h%2BcIZ6Q%2FWjQEJqUqGJtm65l4jIh%2F40LGYjTnAhhzSodNCPubOvzpbNJEEAwT%2FRUBLbY4KtaqbOUdzV91xqh%2BE9LY01GCHo4jyDzuzBgsbR3ysNvBqJkIXS%2B2wZyHJIFB%2Bhbju8NJnRaXAdjbbNGzcMGNoLcSqzoWKyErpIbP4FsDT51GTvRIKEZMWgbXP9jX6GloyVHlONZ6P1WGIlevT5%2BWmFvVnBcUkcXc6jPTBVh3D%2BT%2Fk2tmZ74GcgVljcnrw2XFoLDOQ95Bt0xP3DCOp9DJBjqkASNoogVAuam7eU%2FnaeGpB2NPEykIIZRL8U1kHAeh70WKN7aO9jMKdA3A38JxUFYbzBxd%2FbtJTI4xrtlPXNV7bH5vHl1fZIrH%2Fo6PvuRoJugKdSm%2FA%2BgVkc5EpkyvUp%2BSiZ4EdGkwb%2FE4dD71k4wEsRZhEKI9hypM%2FfWQkIAjynukD8JRmdiSOesSFr4FsHQDgke%2BXikzptuHlEe74AdQGe5wDs5z&X-Amz-Signature=de7c44b11c06eeb048cf6ab2f886c91d1bb6eafd6fa8ca7fda9133485cdd44c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

