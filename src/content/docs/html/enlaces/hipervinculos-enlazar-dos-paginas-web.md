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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKPTGK2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTVqDpdul2X712Rw2n%2BRn9KpdGlYbsR%2FAzeL6NEg31yAiAwDfgYjQhx21NS9HIOMhgxYOb%2BnP8MISr7gQLbSc5ozir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM9r4DTM9inziiMYaTKtwDMBw%2B3ixOPmKC0qKNz9CCT%2Fr%2FxThyU7jNFPNmXN5UPIJ7qGH83gxw6uY1ikdmIL9WUWqpCBLiaJdXvPCb5RXnATfkUwsG4lWneEohlDjp%2FHuicOhk0hr%2FZ%2BP11rtyKsIID5wtCRSD0wsbmbrXWg6NI%2B1gkxGDwff1NerQUiJ81%2BikZY8jXVjWDStbpEVk5BVrSfiR40kVyoM785e7A%2BCjQHJ4FZU1%2FEpJo%2B2THc5vtif2MsNN91OTYTnRp1ogpZSFkJcu%2BHnZs6oAXTmhIQMHMBzmW5%2BFFY8nwx9Bd9epn83b%2BuIthAuAm4HQa2h7ZBiHNKF%2F06bi1oHdHfXj11uZZDud54S8QfhWh8OD0irL6gElLXhubWwcRXUTbq%2F3TBLsfkJhmnQc%2BHR4KxPmdfc4%2FVYeGzEsRLL982QrUau9FUp3x%2FzgYTEPyCT5XUXxipQz2T98r%2FXLAbTsDcR%2Ft00HER1fMmEhSY5JHGLEIVh88E09b4RvqDBD8VtmgMJUeEUC93bpq%2FeAvoxLMFfwnLc4t4KufDNr5yYUQBL%2BWq4nQOqHTxQJnexH5fegCWmnmyOuwY18O2D4k2GU9FC1Z2NJSI6Zd9%2FietmDi8uyF7E%2BvDaoFtiuGd3M9gJVWyow94vIyQY6pgH7CNa3cesxUTbQDH6h8RlRXbLTh2iv%2FdxBFpyNf2lqxXevUOaX%2BYffUkXg9ovZ3LHXMQWj2r19m5%2FzsC%2F8e0u%2FgDIyjveBY%2Br60Bkc%2BlZyYuWFz87NYJyppS8XV1fX0nxVpwiS00ezmX2eqWk7pKgqpmFDTaFUiO9qN0LFjkweSmmLxXVNz9V65JaV6x3toHfRqhtngLGtzeTREkEcRzGSJtXiBxrm&X-Amz-Signature=e0602f0260a8fcff01f218ff470a6de2882fda132f7d04ff63ff7cb64e130139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

