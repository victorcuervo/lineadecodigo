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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NLJOEK6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ975vGep0M4VhgJjtNL8KTPmWQk%2B%2B%2BMpoAJpx4mksfAiBKHhoKXnYuG97KUaE7kpUbBdjLVy9X5IMaWb8NgbIDLCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMHz4Z49fG6gpRZC8iKtwD9hQdD9b2XOM88rBrnkXCkvBOjjfl7nnBtv6ICvgSK4vSBiO3JYB5DaYbqvQlZhJrQJaAQXeKxYPS4pQANU%2BGw3Yrgx9OXz83LKYArCZhY3b%2F%2BT7wnL7wyEahHA5mEK6Ijs4%2FolzzfRq%2Fk4IcJ4Yqcx8%2BsyVbyzZ3DmzEG0Un5JYdw8DlNN7tb8VryclNfGPG0z%2Ffk1zbR5%2FCEAALrzBvu941GaIT6G%2FwvLsFJPda2jj3V8wOvYIaKJOjo5gIV0SFXqAr66qCafEE1JDNspHGIAsk5Eb%2BP%2BTJlhDMd1hv2SO0yb8%2BHzy90CaqyIcf4Usroz1tDpKmLqi4SF%2FIjSLGovz%2BTaodOaYq9HXQrRzJHd%2Be0wRzDxtDtJWOPoTeOnJbl0HLrEz8y0jMlNrE0k0%2FMjwRWKkKzgfS6uoqb9Yg681TSu0qVNLEwpMFn68I3JdV2MbB9xczfZ8osAfCbyszZBprj18LkiFTXgXGqqktVQNk3EXI3P92dRwBBIyKRa9oM9G20Xomy1OXX3c4GV1JNbqvsx2TSUI5DAndN%2F5gxUSMMsuf5IQilZXXRXjmNJ8uDNkcbOD%2FrviQqK7IeJL%2BOmchmblY7uDpx%2BFY%2BHCIyBM3lEU1tFyQpbZwY9QwiJ%2FPyQY6pgHuJCfFGbYBCuneoVNR%2B6SXY3Xv9Y4IBBvJfCe%2FxixcEln8skYKvjLrCdSYSAAPV%2BUwMDo6kst3hSLgiljSBLoIEo5fELLkcMA%2B5aFf3nSCRgGH8uQJmUvJP4Q2YO5R2Ey%2BCoeHroP%2B7KauCBPz1c%2BTti9NdA7el%2B3VQvFVRJacMpZRwPPtXE3sVrdpnLppp%2Bf5IRLlCWSOhD8pliePWeZik6APY5r8&X-Amz-Signature=c42d9e92683535da1358eb430b4055ad71596a3e2e4b778a791346b74a833875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

