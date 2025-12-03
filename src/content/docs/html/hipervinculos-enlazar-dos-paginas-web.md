---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNYQACPV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA5O5FzlE%2FFzQb6vIKPBKBSAL9LE6X5v0ySu%2BmzUMwLAIgCSsag1BJGPBM7kQkNwoyxeQuIVyJDeNtwBVg2C5BZuYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEqgm4Syp8CpHoZUISrcAyK4s3e3N5XwGXr1rZIzRNEihLQLtP5OjVhOj4g6xYBnb8I%2F2HHe%2BWdz6MnikN0gk6ZlfJSWsqVoEmQSkt8V55htL8muTcoh2TZuxObCXitD3Oi5nAW9oc8%2F5aJJ%2BFTcvDPB%2B2E6gobz8FSXipNHsco1W4s8LueS9ow7mT05IT9n6Vh6%2Bs0nc%2B1pDMUe7hOtTF6emX5g%2F9VgqpxhW6TSygUZEInAc1uF14TRmsYAvbMX%2FpAOyLynPqDNcDO%2F0q2PdagsuJfg2l%2BSrosdsP0BeRJ9TgciKILBFFn9lJPxbBAb25y6giptQcp9uaW09Sih16PKkEguO1DEp4J9mbdniMxA%2FF0nLKA8EtzQnNE4v1YCc95eb4qFz%2FtLvMpTjSyRq7a8woKoWbNZ2zJNhspCR8NfMf58da9r%2BOQf7UCj5SqpzZSVr0ri9mDOlTAn2MfZPV8usITtk3LOoVfcprdunjkBIgaAoErjwaiR8Xro%2FFG0nLyjD7pBp4f481aq%2FIPzFe1FFKmNrOmfVryH076p%2FpfN2wZaitDMn2r3%2Bm0zx0AcHWXGc8FtAboGqKiW8mGfO%2ButpD8qSLccpzloIXsaLkaZb%2Bf9Eh1C9ZfKGBkLJ41akir%2BHL2S6lqwthDNMOi9wskGOqUB2LnV1uiVSHqTmlDl5hJclY5dnLdUn52yrq%2FCyw5wMtV0cmrW%2FeO3TCSQPGtcdoMueYLWMDqvU2IbynUVVlYNCzS3RoMfVqI77%2F6LOWG3sUBywHRPN%2BEdA32oHCTaHMpDkh9IVw4j6QRxv%2F1JyUuBYmkC7NMJXC%2FvIdNEFIvWCYTlWa0nBAQdycn2EMbMIzhWvrBb1A8Kk3h21MQ6FaOu8BCi%2FOzi&X-Amz-Signature=a790155b8895707675e387fadcada0779fa8b4fddc3789a493380b1e15596d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

