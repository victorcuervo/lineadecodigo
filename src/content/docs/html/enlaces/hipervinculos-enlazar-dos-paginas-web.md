---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEIIYEZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCw7q0edWtA6uFs4Q96SP690B3GSx8BadsE6bvbEIj92gIgPNRMyjCPN6YgJ2W6kHgwscOntJhY03YpR12EoNUqMsUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOZeshFQJp%2B9%2FSVqpircA89gjRdE8rk8j9sIRWWJCkUDKzrMT794nwP%2BO%2FHLkSMoACwSDd23JpbU7m1j7H6iJG7ZdAUbq3l2tZxgGmJ8iXVFF5HisWPmPjt%2FocM2vuvAzIU53HLtIBc%2FM18gM7FKr1SnmdFHdPoez5L7jypeTS%2BwDm1O%2BJa1xxV7sKCV4OeaPQXkWgbzivZrxFC3qojeRRrrHH8KiqUZHXMSdN9HOYZsb2flTPqwKngYWBRv9DfutfGv1BGHEAHq0NRHBNuzsSHJ2xrf0mccwLVIdW%2BZM083Ak7MZfxGzJYhjR%2FFQkAqqyGGQaUkQzImlGWeN7RcS3bbCOwvQwRlbDNG4JPZo7Tsd6KkDiaRJ2LwzH4wSO%2Fweh1hAilns3J1OHacO4FQ3mSQ6SLzp%2BhyjHP9cTm0ufonDZg%2BVcIhso2eKmukM6yN2xvuyPyPR90QMIdmCKRGbTy%2Fu9whwf%2FmmEqe8Rb4UeY%2BR9WtEgbOcQfUM3n%2FTYRjE7rt0F%2Bii4xngbPIrKqYbvPjnDCyhvNZWet6jUFkDYi2M13lpKkGCj8CQ%2Fx3e2oxB7AlfSWhXciiztYrws8wwYsGQAtvblHxWBsmf67QMpgy%2FtfC2XX5kkfbePeWxPgudxj1oToeXQhc7jvxMM2%2BxskGOqUBWFHgTrvbaYvTvvuxD6gNkBhoMGtGwhBZCF9u6XfxqydslRDRWiUQHDyqIKetyFRLSBJkKxTOmt3ys%2BvR%2FoS%2FlukbXU%2BK4mEisz5Rg%2B2gsCULPXhBhgpENbeaj4Il%2BPvBwwM%2BrYokA67pEex%2BrJHIDNEYmBEV5lDN1rCxdKBTloYazzbqjU6RuRVR73j2M3CLDmC7%2BtiBgG5kqcdsHDofjeG9%2B%2BZg&X-Amz-Signature=66c7ad5b739d8a922521b0a1fd6a25f3d24a41f60e0bc2ab29a04c283662a576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

