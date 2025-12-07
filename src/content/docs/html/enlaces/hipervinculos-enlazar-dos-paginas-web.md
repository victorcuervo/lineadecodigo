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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U7LI3A5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPBRyY1fn%2Bg4l0lqVima%2BaM2lwz%2BcOjJncgBfGafEvFgIhAMtJQ3kCa89BBFvqBAwAQTbOSERRLjYaNUEl9YDike8CKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxGS43eK38vb4ak5oq3APqMQTbMZciUHLLicYsKlzxBmx0vik2eHHoWvSNcJ2nRc6Hr6Aekuuj15w7nH72s%2B06ocUIhW9jTIrfrZWINTy2EC%2BnE9aVbCSG4J2UlS2jyac7Si1JUvxyAtlEOotRKjnTz83xref68jLNrSjLGRAaVt6navthbVgQM8vxgMIy6ZCZaUTfA%2FJD%2B%2F2OVKwPuHLzuRMuVMCZeH80Ha8kCtZKX%2FAjenbHQVtBjADM927QB2p2vSQaisoAtOPjhMg8xxijBj3OdxyLXvXRhyuxCB%2BzqoCiQPbErempZ1M7%2B2%2FvwBLNff31POM1aFVg%2FpAioflcgwdwZ9JBmXSgG5kQtMwUAkR6K9OeG%2FsyDrmH97%2FwNuA5b3FIu580qkFT1ThFs%2Btm6g87XzgHWCZ20U2EgrKi20PhZrtN9ziccyyVsdVXc3KeDIqpByoHrZWN%2BuV6JM%2BSXpdy75GI%2B50Zo2xPLP%2BalxC1UMzKbf2b2QBAnrsRDYo2F%2BB7LTre0RNkShL%2B8mKreZbNiJt8j%2BmCwf1%2B%2FSce%2FDF%2F0iDLEJ3mKeR4MOQ40PeSE5LgXJupSHawPUBHCvU7KqkpGfJQUZD0Q44lSviiuStHkn9C9QWrb7cwwUXVYVZXKZZbDjcwNjMi6TCimtXJBjqkAWW%2FDIazpD3MZXfG5bTh9hsIrx29JvNOxK9N0wVEH%2FSfN6kn1shG6mKU8%2F%2FbJKRin4xX2PhElJkNv7AKcjizX%2FRcK7Z%2Bvpmf2P9xYnsb5VWqnaafFK0MY93i2X24TEW4gbJKc1oyBQmP8HrXFC6ngjNLfb73P0W4FWHkLfqPgDbbV6K0fizlf9mWthlu%2FpghPAw6Xytbx5NbeqM2Gx7tor8G9%2Bp%2F&X-Amz-Signature=9f8b0d827136b2bb2a7110673bd957d152e9c9b3044f790dbd86adb99a50067e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

