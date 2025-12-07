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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J2PARBC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDByZHgBSbA%2BsKGWReskhD0wmJ%2BY3Q7iJLVn2eixGLbiAIgeP5l%2BglEaoF6TyEbbjPTTs3bRQvm%2B8va7uMP2xEzdvIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPm1LHJUBD9bNRabircAyW%2BUzX3wI%2FD%2B1kk2OC9svuoUk9a1Rm0KBIzPuW9omGYhRA5f2b6kVbfKN6SRKOKPN8BD1bzCZErAByo7x%2FrwJW3vqyFV8TkTouzlwnYyKS%2FFsM7T8B35JjB3piEBSHh%2F4YmYakq7%2FUw9XHcd61wcZ94OgpHCut9Qyj7k%2F0lbczaKpDREh5%2FegHJq%2Fx8Vu7g72JQWkeWnWbksG5NmMPhlpO73ePfeKq8SswZQ2CE5%2BN%2FEI%2F6gUcmpZKZ67%2FCgVQpk7UCv0Ios1YlrlmWforvsMT0kuFosJm3NW8jp78yj2jVf%2FUb3tSuFkgfH0F6aJnVHqIQXtIyNdBJEwNXd7Zo9MkTAXH8WilBZ%2By1WM7n%2BbGq7rOVEIs2F03WnVam7Lkq3zqOhD2bFNEhCTxU1O4Kz5Uinr6DxypUIOAvtj4%2BOuaYPMATupmaahc9ywnCojOcfV7ra5uCvYO1eSOcBhQD5zr0HdmQtsBO9FqJBErcjkRii7NKhi6eWWjGB4oBYADtq5rP9779TEs%2FfQzAtiD93C12B8dToKB6k7rl6jYTtUziD8xJ3OK4yCCZjfXZvLFDGLe2cWoYTA9RmfcgSJUG6PzoiSSfHX6%2FjbHdOKlbXDdHSum5ji9be79nuIAJMO6%2F1skGOqUBiUeWCFbxCFwqjeO74KqoXf%2BnscaofTroPb%2BVaFfimNpAcWDzYNasT9oMbf7ThzcIXSrKiN8XB9PeW50cshJfxZgqFCZXDuaPUmkWxqUZ2I4NHl0UE0zHJgopYpglAz6KevHQkB6OIt0H5DI4U11NeU3nYDL3D5LreFtIsfTc5cRTOHpjQADBk6R6w%2BBiq2caL9GUw8CWT9rH2eWmYyPxMBhg95pY&X-Amz-Signature=0b7aa004ee12b3219ad9082eaab76f7c012077a0dd44cd43949f32a3025e05a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

