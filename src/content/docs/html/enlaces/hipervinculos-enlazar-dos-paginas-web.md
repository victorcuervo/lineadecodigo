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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOKSH6S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb222bPruovJgVWGlQe0jOLbxbSN9IYuuO%2FznGDDaqTgIhAPRX2E5dshFfDKK6H%2F8MwLBej50R%2FDgE8mT1fFXnKjpKKv8DCGcQABoMNjM3NDIzMTgzODA1IgyC6E1%2BLVaX0PxXs6Eq3AM26KKYPvEjDnlsf1J2%2F1o1PjtAY5%2Bt3RWyH9Mqs4ZwSNYVgwbf3IsRyIfriEVWYeG%2BP70K71e71OFOf%2FaCfB0UgB%2FgiQWA1qNtKK0Urs1q08RJZLiJo5IXRRIBVInyVgDmy2C6wUIQp3FSbqCBaZVAOnDqhmg8h6Hmnz%2Br6e90IaKmsipTICLg2jOROA00uGNRiyGDA%2FmXQGUFV6iJJuKvDdwJBxgaxpd3htePgL5DaiEc7jvr9eE7rYt2qS1xED8DsetJWIWv6Mb0y%2FMZmPQQdjpyC6e3rLgP%2F6H3soc1vSl1y41U35c%2FEqRsSsXEb3y1ZTH1%2FStFz0a%2BhpToQSn7zkFJ2l6j%2BQzBq%2FYKTJTYFl%2BizePy0RmI9DUBemQ3%2BcqID2SWvLYKu0nbXnjgfkwYjwcvRM8muC9Z2MY1i3mMKWilC1wCvcNowNW%2FwQzSY8URtVr2TyBipE3tykrnXi4reZZe0HqsuAvc%2F79xVork5lYUL%2BjN1%2BKynThnK0HZDqdurGk%2BM91K2E0zw0VP7rRmqT4e3G9RK%2BLDitOk3dvG11r4jeBBJLay5CnNr3Id%2FfPIiAD2GqgqezbetsTfdnbSTJ%2BcZ5WiYlaa8OziXjBE%2FLen9246q20W0Q%2FrEDDLms3JBjqkAQGlQ4%2FRpzvThmylk4Go2LeRvMlS79c%2F2pf1nZoZMCN8Qo5HmhEX6uyTZd2N7ztYC1ag%2BZNVGHQsVciLTXBQid2mDHeMQwXagt2t6wsEk%2FGfp3ZxdXv4hmr%2FCRUW%2B3oY7CoWli%2FIoZpYcspxOKuam0TJX7OyxTIUaBXXyhG8SDUdIDPtMR8lRgNxaJxzp5KQis7fMcpaUJP0pcUIcQrHRP3otbAU&X-Amz-Signature=f118e640b3ad096ab579efd01578c8c99cfd6f72f57bbef86129cb4e5a20b4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

