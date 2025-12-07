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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4AEQQBA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDocZEDSrHfaXeaJ8lGb0L4YWnuG1UaTKgswK6rErciuwIgRv4EMgNRtiHhafMlhocWKnFjBhkrLZAmSZ6ZfGOoPbwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0%2BJwcKOHQm3CBUzCrcA%2B6U%2BJUdwoVQOj2v9FZr1pY0bxmlq05JTVCpARqd1aDPGI%2F%2FUfr9XgyKTR0bvP%2BpvPPGOAbuoXfL%2FFRuh0mdiJcsYyEuzGkx8LMK%2FaV2cOnySIr2f8eLmBLuJkX%2BJ0jg0j6e1ckUgNcKX%2FOh%2B%2FFjX2qQfIDOQrlOQmoDyAKEXyNoQjaqUQ1km4BkgphGPqsdevmrCahwvRePHwuXHxYbHeRCWBJg9Q%2BmGZEU87fhGTK9rhcFzFtb7a7xIGbvw5Uw4Yx2%2FEoPRjYfDpFhRU894z1l4fRpu7x4DgAlBoG%2Fhal8itmnPa9nRNjXqrvFsXe3u7L5yy8sJs8bMR2vbnaF7PmvuolXACaj59bVRUO495svXJTUTDauSGeivdRJQ2oueRfiD6L7B093YyEPRrToaWh7pp8ECs8dYWJy%2FbB%2BSdqmAJ831G9QCEu3SiyO4q9c8%2FjJwGP0wJcQkKrjrEw5gRLEeWtqXPcd4Lyg25uMV3ijUPeqQ3r%2FNBdxAqCAu7kYeH%2FCsVj94foZqcFBYiBKAMM78LyQ8%2FY3PJvQFPnPBTJcoO9f0eGQr%2BFVhuRSwnkKUC4cu%2F7qH6DWkLMXL4a74a9g9tw8Z9bg2VYgtciSIK23%2BMmd1CYaN0zl7GYAMJD90skGOqUB8ch0Ei%2FyulCMLXc0byFr%2BLF4QFk7byf2WBaSeoFRiqSuWAEogBGd19%2BVpRhIar1Jea1U64BYYDVfSWlQRm%2F7iYU40mmyCcjT3bwkbgfN3x8jKQVSOg8fRB6q7l0s3NhqtlXohojX4OI9KMgYsMgChhVy2zO6ei7b7P6X%2BGKnQ5LVfXDgfXTraLSHaX%2BU2StKHEeDjW10n4FrfkeazUSBYcStyph8&X-Amz-Signature=d33f443704a9a333989473cb35dfb6e0c2b8e487c98d90e7ef1dd7c7d206007a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

