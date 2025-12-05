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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR475QWR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoB%2BAA2XiId9wQzZb%2Bav2KnUO3anzJW3Juv65ADclLvwIhALGXPMG641g1%2BkSqEorXWE87Sis2FLM1Fk60tdKkHtKiKv8DCFoQABoMNjM3NDIzMTgzODA1Igw%2FpTnpFIC2Ioggskwq3AP27cWS1PE7LmEDB4rrdtsjOiZDKNpIfKLz%2FQapMSZrY4jLvkkakKz7PaC%2Fj8Kd8KJEW5VoOuLIuFI6lIIyWI5R7uZp9MaBh3ekXCPgVtOA70o7spZIKzO5%2Fl3tFhp4YWWacGiVpLr2r5Kvl9ltrdBgFp5O%2B3Dj3KHe4kte6SdCrjoqKSnBWxTVMOGFQwdQGSKeSi4%2BUQbnJn0%2FGNhwx1A4JPwcAI2GQQ213wgdhL1swRRe7bYpi0fX93tBASH8rWVGfQE9L9v%2BcbPXjArrqLfAFyZWobh%2FNKwBQ5AaRbzCEzauPXU1cHN%2BDmSp693k71MMYi0LsvU5c4vRyRZa8p3TDcBVsuA3E5aHa1FGCmglfK42MZ1rsr1AJVwzHt8qK15aelCBRsq0ylmn7qIKbdnYNV1FEidN6UC3QU8qTb%2FZSaM9Y%2Fh5Owzg9T3Q6943ZtU2G3zow2jcvqBLlr3yNQBoilCb53GBWjBnLxURtR%2FWVxehaTDcW8HNT29BsZvS0HpetFgwHDY1arE3Hv7%2BPJb%2F2AWe%2BSIOC0VuK%2Fk6YEsBH5im1j2Qq1ochC2kWtzIUbZeytMFwHrT7IbqDzkiVV4RpxMeQOQvcbESaLaJH%2FC8SLTXROdWPtwkJtrnrjCHyMrJBjqkAVLNyUeCkhMabQE6G0snjJe1oPU%2B3Miw%2FcJXar1MVptfttSzoO5bugLVlTMJW%2BI%2FYUKQddWesOoAAu7BoBEkke5gxlKdmVcW%2F59GbUZ5k9jT08drWa1fpQdT3Jo9ghn7C6DqEpV3vX508tOw39uq4Ncf4bUIBSfLe9NI4RTIzaCtV4P4b%2FANluJGyrZ%2FIaTAfEyzsGMnWtglCoLnIosRK3qE5VGW&X-Amz-Signature=c6f6b79b739c73c4831742d7fb8194ca8aadf22193b65b1daba8d4e0c4e3ca75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

