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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W2SUBOS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQx4hEqDOpvz74uBdAMEwPGsg8aSrRY5zTeZxpSpvnRQIhAKxSE6bdYN%2FfUL7Ko3slDWtNc3iDp%2BUQJJWC5viLffXCKv8DCHoQABoMNjM3NDIzMTgzODA1IgyV9MPoHK5D97%2B1a0sq3ANaJt7IK5NJSgENeG3GOsXV8WPnCl3AeZveKdcSRjdpDnP9GzPKWNmWeQ81k829YurDFYzFSG14vQyZto5dnfmoyxRb9uuCTpgcznoNswXP1277R2O065PmKuvJ%2FtLTcGHP23xoeAvYd9EiWnnjY4AgkiUvviVzpU0t%2B7EF2nCdVPnVKNgXXFJ5SyALNYFY3J84ZuUuzHK4xeJJ8af47eZmo7%2F4jTVeDpRSOK145rbcz%2FqxzL7SwtMhtnINUvFjnTQSRwNer7olP1nxDFM64QGb65gNa650pMVtpGYS0yBerP%2B8WSZUxkKxn2F6iYqEtbWHrQzGxG4TeDem0UkGD6mimipvy1sOeJHjqtMI91O1E3pqq%2F6UICrfCMNG2Dmunu2oLuHkolupeNJhD1PRREQreAXAmLrQJ3cqZOXpT%2Fm5g04t1dbW3VWvgAc04tgXJZ%2BlLoQ%2Fdl0ZgyQnQtLcdYTCixqdMNk65tRiNVGIu9UpXgODbMcfzN71qRamTj6ax4sTcAQX9nvtGyyQ5n%2BNne%2FIn7LUX7w3HE%2BxL7sRG6qHUc7dHw4pCDwi17TCWMZZ8ZLAoFFpWg4YwstQEYKmLT%2B7Pvo%2Fnv6GA8fUKpLxjt5qr1YDXkImuhN%2F1ucDYDCJzNHJBjqkAZx5uXZcOQ8s5QGn1QPtUUSjHf8s94tKVBnEDhhQZXII7R%2FnJPNN%2BgWsILTZYO0d5STdrNgahgR%2BUG6BIfdOViWVgeJUeP1emcn6q3z4amHoSqkfChRuMY9HupzD25yH3i7PWVm6BV2LmF5L9Nkk8qMGjRURNO%2F3ZOm%2F3BBdJ4jCKj3v189GpYMOW8WMbIR15u9UGGLnrnlOzADKu1KWxn36kYLP&X-Amz-Signature=ef7a811d0e22cb4bb64aede2d655e312cf999c23b61e72ef628d97ce94b2d727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

