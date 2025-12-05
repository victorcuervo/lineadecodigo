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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKPB4CFX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwjhcK8lQ%2B8T7pDdMeFjVhyrzHmmWl7PuSArtWvcVMvgIhANScyyLpzvp456IDPjOmrCW68iwBVtwwPEh2wRMCRNYxKv8DCGEQABoMNjM3NDIzMTgzODA1IgzUTwCjHM%2BhcjEi%2FgMq3APWhGCPRWaYBouAXWyCt%2FOxds%2BKVwnRno%2Fq2ABelO2yURSU8T3Ol718%2BXXfP2leepqymvHqRXbEBx0S02CntXfLt4%2BswYOxwCJGU634kVj3N2SBISxdocucs0FqvkRUS6bRG24sq%2BxJgaGgUPp1LUUOgwtV2WJe3fX8yGSdtClaXBnuZQ2nCn2ZVptcI82%2FnM8BLUNbZ6esHcFO3RL8O94lElGYXnJ7HI%2BJm7PMGzjL8%2BF0CnG1RYFXnDDmYCXXb4xreTBZq6g1aYFg73osFFyUodjYETpL4t5Yy%2FhUrkWJbSOX22Vzu91ZTtSyuxZ2GJOViIGBhNIw3KywlYDFuBkc5B051Tr5YdQKP9mjqWkXcLTIGfTgeww7QSj2YxzI655VMwdyVSe7nSSl7tp2n%2FogsaTw0aHmnVDaYPMX7o17NS1J8UWxIWT4wCCcJC4TL%2B%2B3OXtNMzsNrdvbBpZPkKjYiOUILreI%2FikQAFG3CWwhFQj8zUOWIA9eH1XLa%2FTc4GzziXSLfejZ88wQuflCLFB6rictH%2FZJzS3aEUcsAr2%2BuU98aN%2FwTHPHhAjnGDt9pngS81TtE4DqC8x1ZtykhKrnPLfnDd67LptZzl00ebBBJO0iFJc3ed7a659X4zCX%2BMvJBjqkAdP6cdZztV1tk7RM9PD0DGD%2FRViraW9s9b8%2FDodmodBKeDbz3jCDdLguXyeIlqFNDmAxVeCKakr%2FNC5L3BakZDmJnh9QelSyZvEfkcKfJgA9LpjT3gzsQuqJsb%2BUVhx%2BNcASQ1hUdDAvX8tETkNbzYyAlw9eFYa2Y1VHYfR6nxC2m0A42FY7PFs8t8TDNegfKVVlcEy5QJ8RWWn8lUU5qWgmXgaF&X-Amz-Signature=fd01189fe741cd6f51833b8712e941586ef53ae113b9a871a8cd7e606fccd9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

