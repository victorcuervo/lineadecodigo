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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCVHNVQQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHN06wmMsCNdkfYn50VAfa6T9SF6xyZr8m6mgsI%2Fh82nAiA0bm%2B9vs%2F6peEQ541K9ZXdiYBXC%2BgpZ%2F%2BMVg%2FQIT0KyCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaLJZjwIzuDm33jb8KtwDhEibXCMLO4QSyWwAbsbMRfJ1qlxNlSV6o0%2F5joyCd253oaeXQEHmraQ6%2FWQUOVKodv%2BH%2B55IvdMsEhJM2yjaWfUvS28EjfiumpVLNjJLC3mNT8Kcz%2Bs%2FXZAOpJJTHOXN2wbdmv3%2BpINk7r8oZeniiofQ%2BujtRDmTWdc9cwYxF56ymOt8Vi8ibaUDoLJGlktXH%2F1mvXXy6t%2FKenjMxpb5yRfN993YgQ1lLlJPiX%2Fki9Oi%2BeSE8DjTQdELqmfWyAy3fVlsrWxPYgfUvVUIQfn8P6MFUjjUx0O3J%2Fjo0aTxLf6SG1Lb5UTc0EkBWwb0Z%2Fd3ayofL4SRm0HgG4cCsMuWiTrGsmLV8tSaUIjlC6D1i0WIqVFDbm4ZZBObAcELm4o0lUEvhg1v1t%2FX9kHsDD3pLWvE8oOXGZukF7EBfMpf3LXy6OGa6i36nTsUWZUzSrt%2B%2BTOVVg1QAZ0nHk4oqXntSWDBgLA0vKjoBAbaFjSqURZCStjt%2FDJJc5IBtmkDLxpiEK8h5kHLlR1H1os%2BxZAH57Z2FjDzSVKhcnWDu6qWrIAnLDQSYXh8jq0kaFKwgGjBzd4lSk60RkYwNQ%2FrR%2FKvQ5zhxRfn0ln9f9apbgpk56y%2BlLyXvlMUN%2Fl4HAwwwqHUyQY6pgFI%2FY0b50zrYMN6qAaP8%2FAyrCqFgx0AFeVV7UhNGRMztr0GqVdpuqM2SbTDiaEADc%2FGf%2FCKDdA4D0SIfgnVLlT8METuUm%2BaryQqzVf8y9L5W4ReWaS39ood38MQ0yd3CDbtvv%2FEpjcsthERN1%2FdCIdasgVYedlDkvnk%2Fe0JyKMK7qqTwK3ZPE3%2FEDPSV4Yzv3%2BYJ76QsuGmWPDMDIRrrPlpRKQF16Tp&X-Amz-Signature=64adfac49d5a34ba9a11dd4ec664636c607cc6cd68966a20ac7110f444b6227d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

