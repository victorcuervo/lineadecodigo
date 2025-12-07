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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWU7SRR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8B2DH3AI7tGRmq9dHBqH4BBIT2YM3IrjLj7SewYoE1AiEA9YJw9KYMox%2BZ7v1CJhiRoHPKySJnm7X7vkhDrGgpZmgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpE8x8b8W1K8U2q3CrcA16NsZ35Zke%2FheE8J1djdmmOC2LKY9dQWRp9JhYvZlY9oot7WcSmmxZf%2Bnc3kY8nZ2IqhGq0j4lVJCnPsy7WIVDtpEmFpzR%2F1GcbmwVOCtMDnSFltrOCWePe4Y2dKaIjMsklzNTIi%2B7ALwmfx7vfBz5H7Ew0VXIdSlqO8B0oV4rvXNVcIcLd5bbP5%2F%2Bbl%2Fj5f3p7zUbjBDDbCbE2aCmYq5qbH1bLdtjX4hkQ78SMEttaEFsPA%2FtqIczxodAqeEYO5XObX6in0whL76hbMI8Z2IyD8RIwGTHT4Dh93z15ms3i0uA6W425SrL9kL0U5fE%2BypxJxM9YigNf6CQr0rYzFwKgug0q6RmYheEGGbTAjd4bjJBz08jYWiVZ7lnsxM7BPkfwFml2adPXVDes8iM8ChAuhg2Pnyg5wwhjWmyv2f1ZyAliaEeaq7DhNfbBefJxvKw6Mgvvmx04bNl5TGEopYFhVGk%2FjsrO2dRfEKGCc93rKRaW2pfMX8E0fiTm4%2BIu4hS%2B%2BoGdYfnYNJo8Moqpg%2BMV4sCx4uNhYdAUcnsNVeCuQLMkGoPUtyyzkuIv9GFloekHGovU2ehkLpqqYyEZECb9y5v33tn2ZLGNLNRnolmlSs3PG4ZipA%2Fh1KlyMJH90skGOqUB4ZpC4jNsSwfCgbxAjKKfp3oaTPY0UqxWxBJ4pE9DrcQOTCmyIaBC%2FlbQE39AfYUkt9UxzqHxUSXMaMpEU24nQur4QEXUEmDlC0g6P4iM4tvDD%2F7Mut5%2FGs0m2dMz04jLAGtW1hWXIQWIonTjdoqQ9Qwcy1jP3GwrcVFyNuu1lzs%2BVzJsnWpMpSHgpz33ILZWSE9BLyEAEo77FKoTB4nq%2FosUj4tC&X-Amz-Signature=c04bdb39fa4e2603ec3be4f5fe14bbb9da717b252ffba953ae0e41dc58f36f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

