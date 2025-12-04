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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMDKDMD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAPGoYVe7Q0T4gQdju3HnbtvfD6hF7nPMV1KJELIKoSGAiB2HXYullmaPwD7t5woNSRbJ2Lt6GS%2FzNcN8d28TJPuWSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMyXCL%2Byq8Ia8tX%2FpMKtwDL5ZcQRV1HU3WhTIgc74JN4cJ%2BCI%2F%2BnDO2%2F4EF8R1I5FJBrL4vkYkBrL67hIs3xUcGNGl%2Bg0XIxk6rhfIsHs%2BTMWMrBbAiINuXtGPaW2tGEnm%2F9N%2FflPk2IweUyWdKTqA%2B%2BxmSKXY4V%2BfmIp798hjrxDDsdUzuAv8iU3D2FEhbtdxev0UHSxNstJ6cBCfE0U1hJvL7SJMWZb5uF8E2z1eqosZM16k6xSFiUjHlb5RML513Wif%2B%2FuADNtmxk42HOzdSdQiRZlfkJdvmEoSVmkzfKxcWRTqsuL61SmvXtRJs7u6%2F3HA285OarWKRu5wuwoam6wJKxC6z9eEk%2BkxPlcfu7asR%2FV6I0ozqIdhjlLamc7st0lwjmJN9JRRjRSsq7AbelTYdbeIQpckRwU8ZCmLSxHGICuIvtMN2d%2F%2Bc38AzNLGarqE9WImljA4Lzp5gFYg2ZwgC0Wp1Lu1r%2FwAI2kvw7EE6kPTrOgW3mgzAPik3Q%2FTiwBc1evpVXkbgtspiGoCcX8B0CcBGBDGJbj57k%2Fij7V%2FAh9m9Ta8spI5dAj1kslcvBEbzizMKMgMaH6%2BcT9HGWp2pwD8Kbnna4%2Fqn%2FSe%2FtUPAMR5KR3IJGiWsBCJ%2F1QsqxWRFpXo1ASXzucwwIPGyQY6pgEa75mBDGNAcvkVF36EmAgjKc51XHTMOsRzZKTWLjXG531RHIxrfQoLbtI315KXvPuZ2XPOlObCO5F4xhNa6ZnRCq75CAigGUZ9tHF6v%2Bp0tOuDu0bsIGdBUy5vVVwFtVPBEqcnp8uLgPxmWG0ZL%2Be%2FKxXbT5QPCwUBGCKtA4pvH4k6n0CMBiQiuO4WCRaWazpbWj7tSLayMH5topn7r4URI4iBsBFC&X-Amz-Signature=2b4d1dccc0dbf246e6915e9d3ad95d5ba22bf822a31e5af1f0ce80d222185bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

