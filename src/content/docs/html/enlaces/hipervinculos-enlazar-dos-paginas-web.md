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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROQHOH3K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCabwNX9BbCpNrbPjke6K8jy4vJ4AuK4t244s1AcSfR%2FAIgYc0biNhlTXYrtf68ToRFqL%2FMbBjO8NjvMVG5aRXDfxYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAanFHF4Cf%2BbSS6tZCrcA5tRFTK%2FgsAbIWhzrAI2FSe1p9IOsxXvxbEjylc5Udcv82hgOP4WscLP8QzJuC6Ss19YKosS3wx35kR%2BrECUt2KYkE65QB8Jb5ijSg8kscitkMMHVfocQxzwTyP4UuMKTdD9pPmPy1TVqWMHea0hnG%2B5HSY8MKFQLEGYHg%2BDcv3bWMpgcUyWMOlMdrYQjQvhVPiTfaka%2BBjDMkQ3SlTvn1fyzrOo8K4TVGdXJtKzKa1btS3okXuYyquJABwTdH6sIrSaRPjJeZBTHd3pj4D%2Bg6XZ92O0P7C%2BJryMWRNaPOSF7R%2Bk8nNDB6HeZ4b1zF3hCm%2FDM%2BTEECBzud%2FcbAe9QK31XlgKMmo5T1axnAj5Q0KDK0yExqYkEVssn8d1gq6RgnHocn2RGa1fQJhMPPCaqxBDReala4bXR8zvqLnqpu%2FUmdTfX8B15n6oWNwcj3XgoSt2t8M22L5aLC6e4og26SZ018HXpmhRlOF5MBSWgKfpFbyO5bRtYH5L9pbl213R8wGMX4n9egdC1nkZsr669CoXcPNW4Y3m%2BGUVBZgWDLrITVp0ZZxclT4FFFzfqq7%2BcZAHxjFM7Ja7qpxQKCpw50uFRiD%2BSDaTLtn32sU8fx8UjA8JiL7tHYB8SQIpMIGH3MkGOqUBOWPZ7orwhRjFC3ipSgKeWXUqQUbgQekzuq176hFttBfyvMtB4s%2BChqxhj8jRqQV5pqxjKzzDcMomdcHet2BHMdJmqhc0LXdEaIVPN%2BLGpBhaNn3Wl5DttikdGkfpblMOr58Af5eDpmDpcdpr8rcIQI6QSnALNYENzudPSfwtI3lK0pYkD%2FW05tIOC%2Fec8%2Bz20R9%2BLdnkF7osh1%2BA7XYfu8FNnAYA&X-Amz-Signature=c22b855116ae7a95bd1df09a8483af026b8cb7f2fe072f690d1f686fbe7a6aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

