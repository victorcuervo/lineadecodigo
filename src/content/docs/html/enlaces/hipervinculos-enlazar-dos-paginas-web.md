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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WXVIUZU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpShXdW77y9DavWwOGqoDN6kJFOr5pUYOMlsIo9qPVcwIgX0PBzrjr41%2Bx9z%2BKYBVHH5BLx0vbJ9bH0094wbAN4sgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN62B8fkmrf6M08QEircA8FWwx36cD6MBzWzthiI9kFsEJiU2quEGAg3tF%2FT2M4zL%2B6GnZByX2rdDZt%2BPx7sCKH4bGUlEdck2cN9phEhxuHHXnxNxQuWfPDeBox439fNEoidJVStgWigp4uJ7lr9Y1Taqk34b1E%2FI2Zh%2BsWMQFK4xaJVlq7LQLDHvTMVA1BtkHrY6P8UBrRf94mFfgnmAgqJ4eTxVnhI5BXGP6Cqgp2AkPJYb3jNnX2N8xkGgEhY%2BnjfiYcLLEkR3ZYCCAUp%2BkKOmMiRc1Wf%2F49vxgxxwxpvHB%2BxGbigfsVCmZ%2F5cgzZWhIppezNLhpKiSFerJPDi%2F%2F4zHor5sCCRVJh5IhdIo7zphyuVJH2X2Gxtc4N1ypYyGAzuIq2Vs9cUIigxFHZmPmx3vsHM%2BKp0ybnsyOTnnuthPON3KoLOd8CBYa9PjK9Pr%2FECQN4lXcwuYb%2BYRbAE79muNa2e22J43dD1u2Ev6yMEZ2YqaP46dEMXzZE%2B02dFHeIy6EhAtTW7OHdO6kmGvH5f372tdHeP%2BNCvz0n3f42T2%2Fij3UU80ENzzSRQcWz2Hst5mxMeZJVndtikCYt1IyJYONvjPH%2BEcLFW2c7V4n3XxX0xG9BYYQEosVWlDw%2FEo%2FZiNY0qmUcz4JxMJft2ckGOqUB%2BDUeD%2BQPCnH%2F8AZVbF7hQdOtDM80xf8jiB5H%2BkvwBOYFeaNuRFoKl8ajFHQpojCqLpkhIDYiMdUK%2FEKUXCfiEde3dQszGk1JcqkWwKpgQ4zzx6qzWJJXSTEXw4fuZuKWuyBiHPgDNdoKyg4BqvjrjcZpzRrkk6wi8CKKJJx9rEV4yY4J1csdQGFAdyLeJXEUpluDAknxd5LXYTNJyIlWvtLAaanX&X-Amz-Signature=005cc738fc5cc72659b211b09de0d0cbf4515746a1d62b2df21e7da3a42046c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

