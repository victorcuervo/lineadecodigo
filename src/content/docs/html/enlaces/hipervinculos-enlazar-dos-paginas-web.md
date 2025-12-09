---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMYNZORO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T201906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUi2OWaHrqskDpPSTLHf4SYHGJ2Z7cmMawJrNlUF%2FGWQIgD41priMfuAPC1CXJ4ExZk7DdBp%2BNl%2BfmdjtwLuscRPoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRCPUML104KdopyHircA%2Fz8Xy%2Be8op%2Fy5XYjXODfB82paPSvuwAjc2bggjIT9cnkbwqXHBVwKV8kgT4hp0Yb0QPS7h7kO29gFHl58wOw%2BU83QeiH95CM9uoDIxRi5Ot3iupK%2F5r1SYOeiZm2dst32uApxU%2BlcRkOafCF%2FtFFKQhwnPsN8kURw1WSCykNhM7RtlsddJD0kpPGsbfbAJxOD6X2ZdKhVWmAkjPFVOeV%2BAEmCoUtcq62kMl23Pqyld1tjX%2B7OqZgw3NswJgB6N9fkUyxSATMXA34S5L5yMHAhgsDy9T5AD3Unn2w6yt85NFSJEPvBMk7QK%2Fat134Z4h7RaQJ5BXpdblJ0WUmj1ogYkh3dQRFULsgAmUYAtsNBM88rPDYc%2BiyJ%2F3Tyz8gUV7jbGyRVXOWC3PUUSEI6cU1KOQA66hXCPrxhFtTmmRj241WBoN9I983ncws7UgvXwi1ZtN1zVCEghTCnOhHfyN1CJ1Kfq6IlU3c35bTsWU0VTZu%2FaxD224WTiEvgYJauNsjyCfUTw3A5Pkgh%2BLKoDNzrLWIyGtO%2BkWRKX0kfNL%2FdXU2rdEBVcYEGZOOBVOxdQOV3i6T%2FqkoS1AOMiYWh3GDESQl4zJkPjh%2FT84vSY7%2FcFTSyU%2BShPYxkvuf5%2BnMKL%2B4ckGOqUBgJVrJnIcBE8YPeCqisAhR8qezpYx9Griyoxs7Jv9aVTTv%2B8g7fJa78E7zpGJtNSOBLHLFtIGGRa2j51VAaI09Df8%2BfBJsLb4wW8GgJp4r8phAc47eFK%2FklthqS%2B%2FrT9hL7XdMBN374QQN7wJTN5985Alk1orG1VXujeHS0lKbgf%2BSP8YVZsxla3OirP6%2FJxS%2FKVqe%2Bqk5ilWbaKEJ4%2BspL57VMDX&X-Amz-Signature=4b098ff5f778fb6e2af0565a90b2b97be9a9943d622dc725837c6d3987f68cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

