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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEWSZYSK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCz%2F7bdC6n%2F8qg%2FRgfL840OPJ2xmRhW1yGdIwY9NTYeMAIhANWrakjHqvx3qbJTLNbHcN9PbqZSEGwc1tvtXeyydgM7Kv8DCD8QABoMNjM3NDIzMTgzODA1IgwFoEGsApgoDqRDwy8q3ANh4OYyn4iqgh%2FZb5HsZWeeYNbAWrXtd5UE53qi2kaYQBOt%2Frvw2BabuV8MO76tiumecg2jn8MpISD1TkWPCnqzP2qAXcaaKxFcWkouozm9ZVVJZZhByOka%2FSH8PDN23rA3xJMufCTm3XQOSyUKR3jrr0DEw5iDKO8%2FYO1ZpM5nk%2FfVpCtIP8O5lShr2LntLts%2BYxs8v9aCebrEmtm7QjngvdZqMFNODdfExaKHDPTldLaImrHTZOGtvToPDk4Xnu70301p1vlX4V8h7PPFtyWiX%2BcsbYe0Qy7iVnHbJlGsAMYHKzPPaXszk4ZUlPpQxJ94t8Ogf%2ByRCNKlUJcIUAEjDAH6uFUcQBDAHCmuuToUxrICE328z5%2FGF3P6T7wkrg5Yu7Fm2M%2BvqHWMCgl91b0TjA%2FevtSioT395RcGZIsuyZscIqNNq2BH%2B1zEYVTfTQIy58%2F3%2BhKN2VTzOOM9%2BOB8S1eQjNxv77lBibQz2%2FpqC0GyfiMSFbj81yz0vmpcjgl7EpBzunm4YI%2BeDboAoodjpx6lxweOe1CuGqaWgoOAJClrVi0282o2WmA4gj7PeSHdOhs07tc9tXsYil4vsWKYdKlFX8QnJyuCOLzVxN3PIos6bu0dd6SK8ZK6KDCDy8TJBjqkAdn9ZhnWKU1616Qkaz8elX4UF8kaYvAVK8HY603E2%2BfmDCtqR4RcLr%2Byi8rxc6AmTulWtU4h3AfLNN0axJtlXy8Kkql435HbEQRD74vkRdV5ddgrrf7BGTJ982z6k%2F6BbkFSB9UhTdSznZFf8ntIzTZSiZ8L0ERbE4lN1Wc8GmjzeRIb%2Fu1NIam3f4S7zGKoUQirhafPBrjj3PcBT5gyYx8rB733&X-Amz-Signature=168cab0ab46785cb8f3859daea35f360cd0dca7b46d8d397988e5703b9054532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

