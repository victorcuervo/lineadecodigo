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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXUG3XF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU6nwWWOl0D9j8XV81y4eq5C%2Fvv5zt6c%2BdxoMp41B84QIgdICrifGFQTujVYpDWiVlNU1dPwD6HNBxggIuiiYXva8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPpnZCE36tJ27zpZ%2BCrcA3s2eMfqP0SDYMFHw9D23Eg0%2Fzrqgo7EHK93TEQ%2BL%2Bqc7%2F1yXgXNGZoXalG4HXkvHk0VOhzS7jUD1O59FNJpSzC%2F7NBtUw4PjIWEOBGFdrU9aqj4LFzVTJGp3w66cxivwCQJgIiCSqnbZUMtUKl%2BEJfddHrCkA6%2Fl5nHNW7%2BXTMgIyO7yp32S2teBOo%2BY10Aa8dIF1HoS36JgYix0fv18kPjCGNHAWN6OeDSyRGBSMfK6VGpB3LfZYCF873FTLGQSNOvvxV19mn0H8rZZIxpSTJOr9yEjLzL2cEJowPN3Rs8e0B08OaMw0BlPn97P2i2vvVPhanBTL%2BRNZwMzgIBdDdK5g%2BY1yWcFx1MzAyxokNFjoFL5XErvCCGGA%2Fy6FH36SOIfnV%2F7bVWsiHQtVxvrZxFQSeTe9V4CAOP7krM6J0Lksf%2FUipHWXjnjXQPiFa2D6XX54x%2BU%2Fkw37D2UhN%2FaWTwL%2FaDcS5GWlD%2BKrAag5SWa0LM3ZWXONPS5MX7xsrW8tUy9PrFbs%2Bsun5i2YwDwEeWc4YTuIvL5y5StkvH3x10lmJ%2F6lrYqsPmeWJyVyp%2BsPbebW2F%2ByCgNdn27OxVB0Ijf9jr9hR4RklVm6ZNZM%2BHpubRcJd7pGFq6rgcMIzzy8kGOqUBbIoPciOgbjgIe2Y7EBFeYDtFXr%2FzaCoPdcL91Od2GDwFMnnZcPYOcgPxcW4vd5wSXdvDpPidt0lPxvmHYKprx9osVUgHRXCxDSd34p7IIILq%2FmaORCzjdlW6uJPAwkkwIRLwBXrxrzruXZXdisOYN%2FlDwy8PaJUGR9Pd8bvP1kB2k5kpwpvTgnaBohUHSFLYwoTBm0y1uBeXySbKVGJhCj%2BLXAOn&X-Amz-Signature=b59f2c864d9316f502717071bf7f256f11cafc67759e6f00cb1ea01f306ca278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

