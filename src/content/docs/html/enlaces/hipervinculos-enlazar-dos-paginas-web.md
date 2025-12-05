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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMGRX5E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCahysLTMRUMlLCUA4NOaQ%2F8p%2BFOruyo81%2FnMhIrdmM9AIgJiuy7m76Eh%2Bag0YZ3e78akfUGGfcf2Ey2h55tuXQozMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIQxur%2FzpGJsJbVEuyrcA2mNSP4ntT%2BnkkWXC7rZawPvF6fWWjyQwoteHqUMl6UFWOi7EnfkpYRCql9C5v%2B5lzQcsUyq4Avvm8zwBMxjBBNkL7wZh7s4zOJQuYs4EzNAODXIoJeM0mnA8hcJmcPgT2rBZ706SdZaPACDqHsqwPa9a5STEPjJLBrCJ%2B44VIa5yxAyRvbXn3Y3lcGV4%2FjE1TlbbunSvYWPOEBiM9QAMILy1H0DRf%2FBOIJfwjkrNpV6j1EqFccbMWvKlGii1%2FD%2FPt%2FXn1qQhrH7aTBUg4JXM4B0SLdpV8KhhPYoc%2BbDYtX7K9PKkxNddDtq0qA2R1GSKe2AM6oS6VHxBoV3aAvyWgcci1BmEpqkqCnYcvTbcqms4wAMFM0KW7YNgtAWNtNJ5ejkzpDzTzW4v%2BL7ju4dFWDPI99qPQJsOq3ciEDYIK8AGPOM9CjQyIjq4gItyWIrb1V5oW3%2FN9ePGyscqmn2Ls4BMmkXcyA7Vibtcz6p%2B5%2FCfJLt9%2BSfHCx4WG5F9EvbhrWhvKBbcBDkXNZeWY8Sb1lg3PfCEhWQbzN8vHvUL0f4gmFb8d06ylfvkJfB736gwgHMawOK57m%2FuDQ%2B6pohU%2FGq9Z%2BX7ZvH8MTfY2Q1w82nmnEbbPM4cKaR3i9NML6myskGOqUBgDkwWsONZTZQVNdVcL1WOkcYqSTUY1rYOUuBdKhlo75z7OIvS8mUl4miTvkFR%2B%2FVcvzyxfUXLDfho8awF%2FS%2FEfw0ZkVwcPNJy3IomTW1o%2FaIGvogToSBHzw2jj%2BRTayQx6zW23PqEgcCQ3tTROD5gVUMwBuf6WKQSK88qeiKWMAV%2FNTYBDKxVya486t3D7OxsBf%2F%2FWrWSX3YXzw12GLe1BAIKII5&X-Amz-Signature=db9c138b48b20ee7307ad317c184c31ea9faf3d32eac017b21af3a14d90ca6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

