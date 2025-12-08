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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QU5LHLV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH82nccOL6d0Eo425Iz%2FytI4%2F1NAPJ3ZlFto7x0dqlUwIgRNlm2oAIv%2FGQOHb70b4vIIjhmNZXLBJFNQHaqaAHfe8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBT6Fftaefj9bIXXSrcA%2B1obrlbdkCUqkOyC21kaCM7cZUv%2FtIYtXGO%2FFMf2CDDFvSV%2FXe3Zx%2BisfoLaGmBH9f1UgC8Xm%2BZTWSaZpS3Lm7xiqK2%2BqEtFAHEp1IYugjHzft0%2BAA2D6BY8FVpGKpiVeQYqle9Zv7GoxZr0sJKbc4Sieh%2BFHQTcsmieyWPcJwdsKyUpdEvK1tIEiR0h6GfHc8yF9oskzfORjHeAcTfNh05AesqkT9As7%2BAoiMiuEsiNtWO0AGYV9DttnBvmxkx0Z82UCL8sVtUH7fSMXudVQwFnTj4%2Btzh0jQs9VlvZRmxnYKRjRXqQORsBuXi%2FjCCw%2F0IMisQUSpxcP%2BXE6huMHHC8p3rqWzl5eDGQlLZyLHxpfYMyLzGA9c%2Beo75ZJ8hO0as0G6hh4%2FW35AgRo9GCwFHFMLRJ0gzHzbylQj7hlYbBFQxjRFXCbeHE4dy3yxmCCmTnV71aHDFqKwhR%2BEqkDl7Lb7ATUFcKm1dC3c7OmLEv5qHw6STfvF4LOYuejzyB4h514ZcUUHcttnrqhSJx2rUXtu5Cn8zXQrFxF13Z47MCHh70REMtgxqEk9sriHqb9R%2Bb43WDbeJlFYOG96qjyYQKdPzxPWrIJyFcZwOChkMJ18X7CgLlaNvH6z7MJe03MkGOqUBckARaXvq1BD2XDqx2K%2B%2Bfqlm%2B3eIHuelu8XKpIpofavdejbKHWdAFRHl%2BI2gMarS0dKzMQgI9anArM%2FQEU7WoLFvYPafP0I9Bsuh2DIIqwV%2BPh%2BaihqJUOPmBqkpLn5V9W2mYZtkLNKsQe8yoSHeHAZqxh%2BVDFrZk4TDhKYvWGvj8oFTMdnOBORHVOQVHLvp%2B59LSsohR%2FqZnDnnBejbdfSONREc&X-Amz-Signature=b2ff81e5eb8d4563e921fa4c319a6ed6ab2c9d116acb4145643007732b24f5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

