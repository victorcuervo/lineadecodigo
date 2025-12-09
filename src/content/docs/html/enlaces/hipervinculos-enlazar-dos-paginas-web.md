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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ467LXG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6qw%2BROsH3DvczjWTF5xUy%2BZh%2BrtsVHWoou6BziV7PHgIhAM3hEq82quqXWADDmjfhmlTigkJXUEYPXHE5fBkux0UqKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8731DgWS3F0cKHhYq3APWLkLdhmNy7Jx74pyk9Fg1Sd7tPyl0Ft7Bj5JfOUvkFty1l58Ash78BHr7IXqPRsECAklYzbGZaP5Xg86eOHLBpr2AccwxuQGMX4jTZEWO4QIFkuMoMLHA89fX86q4uDNoJSuYfeKUIMy6Dnqtle%2FiBR1qiu40%2FicU9L3Yw1ckNURu29JiY9gCJmA3UmZhgouONgUzfd%2F2AjmDwSHHHa9wYqmy95Xw%2FpXoLKbK0WzVNGilHmhaiAjXCpH%2FvVJdk%2Fsxtn6MDFKyro3rOGHuNr2GEtufVAxqmdq1bp7706iKToSik%2Fqz1ftLTdexfuOydmSRCgeLoODcMi72qSBTc8Y1b0yIxW4WzEg%2F9fe9aVJKd1K5UxGMFmzspMKdT3JxZ9em%2B6m5WTYabrCBLgcnPaP4HWgtIXdloVJZO7B796Ixv6x2hmvdZdkskLjRk01F3ki05lLGCuMDSXB2lZHZ45M1rUszmruMEKB7KXg8XOcCKs1tCx5MGXFr2nqjbhgronTpcANd00fe7yf%2BrpECoqopnlByAJo3rvgJ9g75sk7wRDYkCYHtAaG%2FEcbOspjoGm8kQPu5ZDmNUT37yh%2Bv9sBfsZoRTzVanPguFxAJEX5K%2BNJVPfag6bMTdLUTuzD4pd%2FJBjqkAfhkKNn2itqS2MkuGSWjselakIe4uMvBZ5Vm87MF8hDi5ReAXwfcvVZHHXTsk2Rl8ux4bXAdpKPowQLIP%2F4aET%2FWH89lM65xTNiTwYgmWkURyd%2F%2BmiBE25ZRmdvii3Qp%2F5errJxytFgK3j8B5EaYQ0HdNeFv%2F6Rs%2FaDjWCvzTuIhiSImxbf0%2BuUus49KyKkqg34zbC3uQrk7Oaxosru1E4zUCkS0&X-Amz-Signature=2c4f91d5c950c17ee5d989a57b75e76dec0252fe85a23b80860d9759d987cdb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

