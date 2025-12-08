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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQPY7YZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FnL1u3JIZzEbNs1cVBPppN0SimLc21nRLvrbc8GMZ5AiBsJ2WrXJSifzHcKI1hzi8boWMSfSkAWszx1Hj8eiz7XSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqN3tuVNI1WQVOCDyKtwD52TG45MCfzZzexYasS8C%2Buhm5E%2FDNJnD0ZAg1InaESmLI5dFm676vDoa3oDEwz1TcIEzfRK0nUPppIr0rER7A405IEd3Pst3ELRjzZ281oeEs558ycRREsnS7C%2BjE837nP%2FNs6WhdUMlgyafcTJVaEaBNG6jaJ71JJXiktZLu8v7WXbtTQq%2BIc0q9vW1RBSjt5Xpx48IFl%2B88hqK4RwoOxuvmAFwzvUtvwaI40y1NEsZiwZWEEd21DDO%2FTDH78jCCq5npsOVpg3JEl56IHtGhHKDIPWWXQZ5FUkuzM60OkgJO00uZJWHiDKaCYZbbb%2FSjfAgEcrQtadwyHTd6JaKYfqxL0emQXtwBbcB1VRDwXes9ZdN2i%2FA%2B0N9Sa%2BfnnYcNgAS00KoUJLqTDiKrmNOF2DziIlgYS7cvYicvGBpuDaUbT%2FrlsEqa6q%2F7JQ9GZ%2BpccSCN9L0Iham0SuNGrRrGAhZEAZ8PIr%2FGeJxEwkxLMBW%2FIzR8UIMrPgQ52XUyIV96%2F%2FSZJAEbfMeOHjzP%2FHlCcri2174alEwcHn5%2BWMERE5IfccG09Xj2iZxtXfGv2Vhe5CffdH%2B6qNA7TN2zXSKK2MA0CO37mntHCohL4lcE5LsYsVixBKI16x4LfQwnPTayQY6pgHZTNRgS3u3%2BcR%2FUNeObBVgGsREuNEDsXCRG1abb5baKHfP0VN0mOixuYUhbfDDU9jIV4dYNYlSWYx4T0SOd%2FgKke1Sff6oxezxniK5gaa4k9VKS0V7UzaAFsvYvFK03UWJkv%2FZv8%2FXaIY5b1h4DHVNm5x4AaDuowrzY8i%2BE0iJDsOc%2Bgx3JKWHexxspROjnRgKvn0UkAdugq%2B0iQQBVacZ9dWYkJjt&X-Amz-Signature=a060da6fefa00d4b7c90f1e9f49a634be930bebfc5a5872b538d59f04c83979d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

