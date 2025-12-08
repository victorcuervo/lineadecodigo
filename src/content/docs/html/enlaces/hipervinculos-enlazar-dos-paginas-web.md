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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FM2JY5B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2BxLNtiR3%2FqcF8IUf6O6gQI9i4K5fbuZFiVUM7Zn5mQIhAIyNw6w0B3Yvo33gpni5lpRRfsiHK3a7es1txD%2F3FNK4KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRgXZgalfmlp8WHJkq3AMrE4CZXCu6l62QJYEDCe1BcSREctekMwY2v3xTGkszxZv8tqBL1eNDsAIenyJLmyPf9Bbelk4KZd3XO0n05%2FNWAPbxDCDi%2BKMO%2BKP5jW2wWmB3sxmJelfN8WmXeP4V3atZTU%2Fz9UmF8KIy9vEa5aPoXDusGoo3ettOfCTDAfICg7b8YzTNMxA6DcNbpuk3rx8PfJUNKKWnWwUZwxJcm%2BOOjWqrcrTzdN5zPIXTXeNXbPnUYj3VpwnlTm3wy3o%2FaMMjaBh1IW2Lr2FTxbxSdm9Oe%2BcTDZs1GLsKW8lZRkQ2ufQUiUhF4LLgMhv%2BXlgRU2Hlx3rPMghAyBV23LZFf4SOYRs5Fq6OS47R%2FaNLx20zcNBg6ikqQT4br1H8rkwwLowG9z%2B6jSWhEbxEt%2BJLd6TrZwz1TOuDgNnTCVmrK22O8cLv7bM9VfuLuUlcd87CYyojIFJBmEvXV2XthMM%2FjlYtnFUyEshMBOrPjo42EFG3VQ7427PvuXdyikS7%2F0Hl4TpRIBOGm4hY06rj1punzFvX%2B9d9rZ3zvtd6vh9XS3JRfycFBgxRo1MolfaU8HlxKjZYmGBr2bQ4fnFrkJdTXeKjqajUHdXSS0tLz8DeAnsFrwmrtseUX%2B7OorvwEDD17dnJBjqkAToRfqBP5qXw0BcnVKCGDsRADOCKnE1Pz8Hd6PtVaX9jxx6WyxU5ua14WxOu96voVekzW2hbmMc7KlQI7iv12qVQBC%2FWE08V1gL6bpHdryrXNGcusrVkZoKnQ7dWNm0AzASkM3MSHwdxc3WT8x1AF3Tg4yXVeSMTAsnq%2F1pkRfwSljFCSf%2BdVehPukk%2B12gTZNWQzctSrL%2BzyiXjGhxMfgxq5Cs7&X-Amz-Signature=84b9191a6b4dfde3f36a31d36d099785a533bfcfc7fcc76e34d634a00ffcc4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

