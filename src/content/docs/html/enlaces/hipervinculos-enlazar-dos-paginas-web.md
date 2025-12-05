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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU27RRHD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBYH5YiPkwYOYoYWcY4rHoVMjxrc4zf8twPlFcUQ9jvgIhAMLQsYqk3QDKEjFFzWOYrgb4H8KSjY51LyfFpymJcev0Kv8DCGgQABoMNjM3NDIzMTgzODA1Igw0yaqENopEMqLy1%2FYq3AMzhzBVaF1rQfo03sb0d59Pz%2F4z8knfVruPlQtsYzGZL31MMq5sPs%2F5tmefjoGVZwsHcguQJO4swX5x59d%2BpxcW7Kaz0n%2FxbiEsyMEu2nKh9qCiDLpDpsKI2bVb2%2Bxef511t2m1N%2BNyXPOgkyaRRerlA%2BArKv6bqRu5lpDPXELiClAXU%2BA7CtpGSJ3xJ4pujPJSFNfbHsgQCNfjmecNf4k9VF66lyQyzWSa0dXlspN8K1BTq6SxCP0Z9Ps8EsdMo2cL4km8jnEr1nIj%2FSv1UKuqr1r3%2BMSG4Ny%2BddA0nCxjIuADAimBH3XUhErZVnnD%2FOIMTGEBAxjF4iPW%2Ba2K8GjpktanX6AB28g4MDP2Ar1DlKMN47VCGOMJCgHdwsnM8WMz3Wxp5Wk800%2FNgno1hEsn4p3rAV7FXsSNdpNe14BLr6nn2akTtvUkjA70o7px66jI6Ow4xlZA603nb8uH2W5ogqCAiPiGJwuIXs%2Bl52WKDXvOzZ%2F%2FHv%2B68MNpI0fAabVGafogSw0DWmYczudNx6dXfAuAzDGvt9P7VAsAAv4dEodHODS8dnN8EVjA9msjMEjuGGFoh6lhz4wBS0ZHbykg1SbjWPjGEkg9V31Rs0%2FCkdcoCAuHQXCZ9i73UjCVxs3JBjqkAQMnGNLNwalz%2FJYAXfEKF1DG2%2FB0CNzFkCizni9yAKMz78Mx%2BvHnMbNOZtCQsZ2wlvsKsNO6oT%2F7fORhW68QB5r1%2FMQPLhahyp6zOIn1GUpmTLjlCXjmhBgQlNUfEOy2Hn14ZTeD1%2BxiGe8vz94qyWELiWU%2BqnICUwt%2BbJeNYDDPIXC7sfCJGbRoDVG5LQuV6WMBCuo8GIMMQTThGn77Jd%2BB1sOu&X-Amz-Signature=32b850d49cf1da1394892c0ffbfca38daa06e3b9e0a3f94338dc7be111c620c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

