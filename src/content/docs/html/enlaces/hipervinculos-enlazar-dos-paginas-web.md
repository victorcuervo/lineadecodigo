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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2AHLLW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICp3C35biG5hk5aFvx9uhCLFieIL6yFTIo2bT5yfToFCAiEAw4CgFMOg4SxATKspKw%2Fe74yibhETEeLRWzgopUAyuJEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDC8y%2BJX7J2Xq9VNr8SrcA3C6LqdjhGQho%2FDz%2Brq%2FCbGAyliq8%2Fc5MX0uETWtgvhzxlvbOPQjqV%2FTNwRnIUV3wxJsfA%2FBIassAjO46rZgV4LsilhS%2B5MQPwldXZMvPQQxlqY1E4ZRwJOYAQSUxsvaGI%2B1fcbSZhF6ouFgfez6HFnNFuQdtIXIiZkJJtIJzcIiMdmX8sMZhcORHehyk8aW7%2BTpvjP9DFP2OaQ29%2Fie70KlfHTczB8H0GlQxSQAQZcHgd9Fl2R7Q6qAko6CAKSjWAJQ6hKpyAFDvUIoAoxXaTRHktjXqmp2IL2E0DnW1ebv3DhI5Q06r1wKkF%2BTzY94X7kZc6qRTktO2MHWLmdqy8UAgR91jTYB%2BxaGuizWRse5biSCtUq8TdSGwn3MyS6MgwhW2%2BACT4dKWKENN0x8zoZplY%2BmYn7Apzsh1DpBEQzRs%2FP152u5x6fFTnmYqKaN9ObLjjRnYMYj5um1v6Yhmr9PWyMYB8mooo4620XUcS%2FILPI%2BmlKNsKlq06WbqfdBl6hjCOhKMs4Pj3mDfg%2FAAwUM0kFA5K%2FuH1juCrhQJ0jLBaITC6yHHAM%2BN%2B5t%2FmMgpJyhEbq7iKxZzpB01rvpfPU0BeS4k0uUtkdUYBxStq%2Bo%2FXnN6L7PYvglgzGDMM39zskGOqUB5u%2Fp5GqSYeiHUhSXjBPVx%2Bm83DCdjOieJPvspkUZil7sfyoDGz%2BqCH3pdidET18ai9SQQUrMYiSEpSkFF41yec%2BNkfCCTK1Tc2P7eRIaqKcvO7u6dDpHmhqSF3i%2FLpq2dkL1B%2FSDlgLebaZZCO7FmDc0W3GV%2BO0rs0Q7o8X7Sy5LcnMP9Qb1i7umaMXreTlu7umvHPs%2F4eglwp70ERADkIeT3bvE&X-Amz-Signature=984fff3bdc31d9156cb3d2059a2f58d3df4ab78a8994918726e9aa59a718dd23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

