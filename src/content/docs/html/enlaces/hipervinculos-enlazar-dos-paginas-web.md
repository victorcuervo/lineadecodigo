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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOKM3XN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCALjwGDsmDZuMirQfkl6FgIZ3sAhaDA%2FJxy9OxbuGabwIgQj60CsNctofDzAGBE2Xpre7Y%2BIaToJfjF2qbxlMZ3J8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAvLAgGFirH8YaGdyrcA8trhjVzY4G29Gtqelr96BtDT1i9hmLZZaCYjFem0k%2BUiVB9KJBcg9NhJVjOx8wgTQjPwpfzoQxv4nYbTDNKkD5jZ9BlxcsytfTDZ7eXuM3X1zsOpwDQo0KmrVtWF2r0AdVvdSpcTIFIQGZNXeG972SjJ3DmDYufXMDcFaq3IRyNLBJsHVUXHDtFBP1BxJ828YW5flMbsIo46gRprF2B9dADAPq9Ja8pC0JWupzRx4A%2BsPcQiGxmPw4KvydiXXpkGzH0wABPboVyeg3SvEge%2FIIVj%2FhfiElt2U77ArB45BcHfgFPK0HE1MD0pRNMjsEnk%2FrVzZxN9dVlljdIHpOHV8rz31hgNkcajUbkv%2FEnU2JgYYo3bX8QordBukfNialQnggUVVFkwgaxna58MTrkbSj7kOgRVnzzclC86BkQwLEIxitrVmaAzvRIcCI3XBydiSwLTWyynIqQ6M%2BmCAcofVwNSYEy4pt2rmxeXyxai%2Bm6s5qRGm%2FT%2FmRYzugVXJS%2BtmWdJt5vvJhTCsrawqeOIBIclTAZJPOw28KzibureK5ou81SOzYWlLOgrkUGZTZ5BVISsxjG%2F4sSIZUJW47igZU5F%2FLUisWiGjYWi0ysVaV4VDbb3p2WwANfIYOdMPvo3ckGOqUBaM%2FlUT6idP4PrLl9RaE2tSQoLZHpzufb5wKMCyOUiHhpzBHpyOBqP6%2BtuGl%2F90ZfQSjVpjljS4%2FbVDVeLJ%2B6J53NQuiLxTUdU9bn9Kom7DyBJGoouWV5EwM%2FQbf9c72%2BVYPoRFSsGjqtKEnkmKQZLIQ6u8BBeAzOANQKONeOiP7FFFIEtGCvDJI%2FGEBYUL3mSOikZRzyNOY3%2Fk8Yt5rXhRfX4puq&X-Amz-Signature=5388e5fbfdfdafc3143737b70891a859ec7cafc505f81ec189fa80a021540d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

