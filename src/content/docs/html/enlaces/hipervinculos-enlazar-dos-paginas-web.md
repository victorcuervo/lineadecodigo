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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVR5P42L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt0syzvmgi1CKRXrGeOmpxOxwVb2ZNiKZqfqns4AafxAiEAs9RtgK%2BZQ7fpGUFb0bcbCyoRRJxaAF4rHi3O9asJz10qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCzA39zaoytXJTpICrcA6%2FgCmf4B4hhKGf2xSupPOOOKG0NDQWPbZQFqr%2Bt9GljCmLH8PMY8U6D71dvsInnz3dEGsVMaOWBBfIgAOghML3LOpk7ULPtxlDnnTmUXdDwe7UorEtAndYiq1XvaQw3xY6KvGWmUyx7kBQ9lV3iPCJDDHiliT1APkYUwipPDhiEea4Z3LK3ETQsOUrLoFV6PXNlmLBNUAZoz%2BqQTa0eVBIMP6nqXEkTG7XQ8%2Fyj1Axuj%2ByAHbV9QOfubmpfMKmFD9KzeYuf6Y8XuG3h%2FyDfnou8VPSWn5zG8u6w0RPuz2T3Zld9HVPZd03d3lOeuoStPl0dWVSFl%2BTfHtGzra0kuhFFZgh99XVqHQnpftm2XR8KqjJXvMTfZDAaUXLAfz3kY7pkHQH7OO2cSHHipcBYWMFFPGA3PHALxC3IYWv1Q8XgYM5iXgDfCVaT9%2Bz51ttaM7RSN2B3TtiqFyc4oijMyq%2BmL0WPgBmRJhrmrWU07migf8QRrs%2FwydKy4OiLH%2BgydvA98COyqKaUOFYKKZmQD4GKU3RlLSyy3%2FOcSqcoWv%2BiIDsPQT62m9oHKEunzzMDr3Mm59enTnro4ja8%2BzWK5tO5zKKeT5AFzKaWaNywy8%2BZknZLLePhZ7IkmD%2F3MJSU2ckGOqUBa0K8lsFhb1YWHRfwUSlCAbJdx9DLBwezHsnIwe1BlyCudvHn7fzpT3cE7I2AfHI4guKaDVc%2FTDNPAZw9WVWDvmnWYvYkdpeWWqsxs%2FUshldwlW2XKhg0YPMjLHRp1SvZbslLTJKyUHOIWJV9HuLmFhRy60gA60SBj3ViixgysEitARiPJUzS3FiyaOLOz4%2FdfVIqdIhZNyK1zgugeEWpCoEiQGPA&X-Amz-Signature=5a5928a2146a9a7b4d2abfdba2f116345980d6eaa3d7087fa7683d2b0b093e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

