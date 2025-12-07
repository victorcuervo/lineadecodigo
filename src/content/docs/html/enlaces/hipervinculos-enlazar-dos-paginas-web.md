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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5KBGXJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcnYu8A9seBHzo2dlDBdNRfl%2F5jeTnEs6ghZE0R6PtlAIhAMTWgF2UuOsOrVx2Y1r%2FQg662K%2B7miiGfllQOO1VxaOFKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCivJ22FKs76j5Bbsq3AOAW0TgoWuyRVoV95t3dyYMFAC99Fc7jgndHSAUVxpfQcoOuRd1rKpf%2FoGuW2TzmI%2FcrcDQ%2FSPxg6trio3dmJw8NgxmZAshIa7Syl5bn6HEPF%2BxFJfrhemv8ZVNr12oO%2BBFN2HjDX91AoCgG48PngQgcmdSR6IH7f8tIesGl5kAvRSqh6Y7hY6qpc%2FOe62Fe0ZsmhgGxfYzwE9Hs86wse9vRo08i2lXnivGb5eWp9q0szdR5gP6EmD3PaV29fS0kPKr0kQrGg5eTT4VdV08m22rcCMj%2FtD5nRmoZ20SWWRemxLPY3QmcEt1Wx6YicQNyIaeXpED%2B2iXcRiPrncRctdx9QdfwYrXLn3FOTEprc%2FYb5r8ng4icwhDG2yyNJnXRfshEnazsCUhMM%2FUPN6MxNJOcmdITiE1uQ1xdXLrYDHkSzV2ySY%2BYCs2fcHZgqsHkOpXm%2BvHM52DaBXkzArIzeQrNx%2FOZYdMWWUKTM0gRMIgbKQBayTz6z9pmOwxy34dRIBkPJ4SvLpn%2F%2FxUDhUJlHGx2uj5dpN4vzvckgmENziL8tXU0r3%2FNn8fY1afVURioPDZ5GWMxlXFzhV0gIZcs%2BO9CWmmKjmXwNFXABJifpTY1RPxYMMfADbqVYdZiDDUmdXJBjqkASTt6FfgC2hPsROOwv3wCTKndPi%2FOuSXMWOoa%2BR1%2BH9YK5D7CWEMINROn2nnQLBeLa8NW3zEP1WPY%2BMo9mAcAyVeAfgjYj9WRuMHM%2BPEFlIMO%2BB1yxTENYTU0%2Bpp81wLjxCtByGqomWnnfzxekyWIsr%2Buu0FANqYjw%2BkLA1BuPp8cjg7dLVDNhbq7u0EUFwdkRkx32QJAwnxVPyba4%2FflKC%2FGl%2FT&X-Amz-Signature=2020d0a2f20417bfbc616a107cc12c8bcb1961466eec817551592ba064a0d5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

