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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VN4M63L%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo7U2DSZviLCpD%2B1dNW4yUjOfMdERYtuSYR5F433iolwIgIKPNoULtsrLYkvRtehijM%2BUnBCW3zBpIkXegz222unAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcnyBiA9hQ%2Bce6nDircAyLFEyH5x%2FDVa9WrpVW7Dd8Zc7Nq5yzrPsp%2FO3ZNVwzJZu8DRNQWQDDj4SdcTX7%2FyrMemUek9c%2FnmHLtqNudxq4WMrxzohoErkw4bEvOW8DVKQ4u37lPIhlNBcjhBMlF%2B3uVH1kH81joRAjK4DLxSrhtwaH3MdkcdcehQcRXb4oqCKErkhuBaXCuIQixmo%2Fg82CwBHCOe%2Bqa6C2aoL8N6XoBJiww0OFM7Yf8kUMQVB8PKtIsT5ju0V%2FforAPI3hPVjqt4XsOodn9lPxdTX%2BHnZhXFzTkH%2Bh6hUTXLMZ2MIPTFDv3qmfIMHbs4yD574CvKMvDj9UtWh%2FUhPtR3QgRrvo48bK9XRbddlcYElNnNzYuiyxV0AVHYECnmfysLSGW7nt1yKOP80Wezkh%2FyZU2uW4%2BqbURZuG5iVuluIaASHAUobUJq%2B1pNFrpofOh5xGNkf2%2FeKQBkshZk8UeR0OxpBipLJ1MWaYb9%2FJGFsx9Hill2maBNj3by3OL8%2BPGRLojZkvteq70vn55Qzn1jFZPXxZwZ8zgK3SAG%2B0K7bb1K9do27r0buQLOaWyN%2FqZgulH11yG9X7mxbSXMadOufTJWBf1REdiIyceMAI6rqLX%2FA73g5yUVLf8e7TFHVi2MJHe4ckGOqUBaHBpBRFSv8GKCfwpn9B3kGqmrpKtFB47%2FOsmVycTz5x1qcFzTm55W7T8KdwrfNUqQI15LTyBPhvbJ33hS0gpltOHw2gC6gbNoUXRoxKUKDQqwr%2BVGTtwTIWIMJezwYE%2Fou7sOSyPiLPsRNI0qGquoBPnoU379G71TjdU1j8%2Fa0hq8w4jkFt2lzmx58nNsPZ5j2Mh99HbgSjhP3op1%2BLZ2%2BCp6S8O&X-Amz-Signature=663a87b89841449f081264c282b5bf554c741ddd8da9c06bf3ac749e3365e646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

