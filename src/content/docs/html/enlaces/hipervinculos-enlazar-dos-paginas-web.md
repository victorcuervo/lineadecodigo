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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WYRZEL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDha0uQTAJjajEWSQuiK57iyFQHwm9iO8QCbKRS4lY7sAiAlXuwuhVuuPaPuyCoO6vDX11OD1tTeMkJP1SnuFaVMNir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMwwMznBRKihcKDerEKtwD1%2FWCaWFj7VwEKpVo2m7tBZGPbUDYu6IFeSvNQIrpUjMNqMnBqYGS%2B0K6iCndKJ4Vci5TkGdPy%2BjmOXUWLH3%2B6cEgJ0%2Ff3%2BGN%2BU3dBMkDA%2Bgv50NMZMDzSwA7gdRhmK0qve%2By7HRu9r6YUQDzyrKjabb3HNagqu80WR0IOS7z0c7laGZGdmCu7mKj7x1kvLrJYqdqB7IlYLF9xIVPhq1VU6%2BpHXayfI%2FuEAaft09enLcGpbyPy2ODgyvFRQMLUOGJv9DQHSkib9qlsvKcHKOlCRHToa4HdkEBhZeRfpSYz%2BBAzhFTJZr4aP%2B%2Fuks%2FxsfMU9rOvmEEh3Dd8Glaq89HECM%2FZhqqYIQn75FPwOriSaYtTJy9xAwX%2F67jYGjlctl4%2FC4dp4%2Fx8ag8dE3DRtdfDvJm1oMwBNaAiIZB88bMHQkdHrhAAeANEtlwnRSxbKDJsSYxIKQZrG5cyLRPmdd%2BM54XI9XEWiuoz4C%2BU4dp51rP2wk%2BWeOPDBdk0KSSKXWNSo%2FJPNGXfcONNfKPQQMBqmmBdCIRMclZX1smstqNUqPS%2FAXV2Xl%2FaDjwXGfbF5viEtv8jLUtCuM7QwOaWOA5CfR2q3Lg50IeAYLpi7bsmdeeJyhEJW%2FdFhA2wmUw3%2BzLyQY6pgFGL465I%2FXs7NUz9SXfObZmv1XB5NN0BwkBpYaezvK%2FfsA7UgEYyKXUXJgqjFACk%2FljSt5n7rcIck5ng%2FyTNxwI2rGxiuvCyyFhbCu3X94Qxky2u4FoTMD%2B%2Fe9%2BNGAmuCiOn%2B0TBNRfnJiHBsFlsBtyeY%2BmcXa0ifTQwU8LUti977jnjIQHj36R9c%2FnHwPndlE03Uh55pmQ2jhGxYrU1Rkactt78LpY&X-Amz-Signature=e73650c5c956ef76d89926e9d6c0b68471dcbc020f77ae620c54cab2c0a788af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

