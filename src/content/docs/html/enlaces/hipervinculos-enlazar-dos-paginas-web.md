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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4R3ZUXQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T202533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaN3%2BKeK%2Biybswtp84KXbJLslLSlE6HXf1SNgTXagYIQIgavG3Z%2Fm9FOOfhkgHLNzDzQK1AytNpInHkEPh%2F017TA0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmCav9ZXbCXJL2M2yrcA8x5UNFu4yIRci5%2B2xkpHtjMMkZxa3TrCUKee1GsN8wdoqQLZgDp1WR0FfYv%2BSG6vza2kjbax6HT91KeMKFC6u0xvYeaYreSH1kbu%2F83OFJxM5NDvqWGhlNoxDpnUENScDn6LeiFNa3bMYHKGmCrWYKPB4IJCZjY9dV2M8NOpkJs3GJFKq8YrXmxZoFUAyKWOFbw6SM5QYIh7AXqg%2Bk8KTOHJheAA7F1F2q3LBSQ0c01lUOf1vTD5UoyDr5vY0Wv1T%2F%2BuYSKTvqC6turPuItbHbDjc1vlgV1sNJM1SMkwY2c7OwJc42khe5KJ0Ib0l9hWuz0A3Rc2jA3ioZ7BC6DyuKLyJW9K7Czhy20gVtQYPHp1XrJcFRoIJ%2F3atskAEq%2FPQOqZDXuK4JZJNq9CfoJhvr70F%2B4zZS99D%2BU0onli1AuNuK%2BBlKHvGFDOj0WwAKg1beJnPv58XUVkUNolauyiM0HKu75aBuzY%2BSUyjGfF99WSD46WMyUDUqqf3XRtv1JfxDemCSKnCzSVULOFf03phgtUPcfnwQji4zNWKuYciDfvpgX%2BMd9sM97WaPwG%2FglaPxS6LFLv%2BXXJ6sRCG0ZxhAzTOv7BNnja1xAZaniiZXFPeogJDaEnmwLA8fUMOb%2B4ckGOqUBgisncV0iNaElYE%2BO0GtlCxXHgeint9FTHp2cnmg%2FH1e5lifRmI5AJ2mxxTHim%2FSv95dYKoyYR3RBRcKlKedV%2B54H%2FKcUdRLmpAP7po6S1uIlTunRwBtl97Gt8n3mgoTldXI0luKpKACzmsoQoxBs6cvlW%2Bt%2B4YgnAie3qYSWaEDoTP7NEAmz997EOW4ip%2FZfHbF5UrOACAWabWz8PlUf6hAgXl2U&X-Amz-Signature=fcf61f2db020be8166e3e53ef500495eb25eb7386d05fa9d00ac386b138c4f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

