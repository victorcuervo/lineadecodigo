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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNM2LTT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT3DOMIUsbkGKfOe7Gp%2FUc0P5HvLSpTdK9JxXJC1uYgwIgZbx%2F7Jazax8WIlWzfupdXkFZWtkphm2tWpOUl1aFFfEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNhZBKeOzQDh8ipwUSrcA3CsK73ryLyD1ZmKPdtI3Ibhl%2BaA3QEJhdlUP1z9JTuQgTEbxfLPEZp4CV7V9qAAmcShv4GlvNRsQufQs5di8kSbqKGFiRXDgJXvTMIaye9%2BcifVXcIUleRpUfiUNa2tVGdRbvEf3k326QDRmHIM2M7JChLPiV8IOSxgAJjEgwHxlNt3MDtXRkIVLHgK9YNlNKr323cKSXB7%2Bk9hmY6KY9W9tUt380eZPTZ%2Fvtj8r8q9qXUDidwiVeMgZC6dnaTeiSn9hqxVEnnhgD34vztf6SaAJYL2QRdMfM7G64%2Fda2JF5xALiBUiTVdcGZDtckIN%2FuMiA1XGChL2bp%2BAMGlYmgQWj1imljQmE%2BF9r8m8G4jY6KT5EGu28bGUrd41mOME5Bq%2FDJL3t2HjWBhhVT1JFmfYRq5b%2FvCCxptpGseWatqIuLBC2TFNIzmxIoKn70%2FuqwjoebbDZ9dQa6Ht5%2B1Gz%2B7D3tPOPutuYmtd5UBNuUIQqG0iPsUSMkoQ%2BByWT9HCYX8PeXmeFI0zETBzA5kvx0f4sNHsE9WahN5kgXmMvsqnpfBIktNXLrYKxOOluZ87a6sloX9C70vhYTIWdPYyuP7G0Kx%2FwzcEjhlVB%2FEXbEXLSaTc7uQk6Qc4fM9KMJzGzckGOqUBBJRzVKdx4JZY4QfHLJy4hGP0dk5eWx%2Bsr6V9BdMFi2yahy8kTXf4IybY3azN52ffAkAoHuNPTOEXNvCBoRZWmDeub2YdTuHotrZT1I3TbaQrlYF0hgM8DwVtCtN%2F3HVKK0XMjvtseKpLUjQZptrfXhP2XzIbPc%2F7YehG29ED28FI9%2FN6WMoAPkLPVmnIMCCvkijeL7oMVPzn9cPMsEoYpnrArw9Q&X-Amz-Signature=9c8a545ebf1df5c283aa7d10073850e9af760da968f7d42c775d7660c0e91d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

