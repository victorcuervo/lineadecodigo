---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPNBEOV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcuM53%2F3wjsBGg%2FYawzOR4HP3HqHMYzDobj1C4yowf6AiAOE5dbfZfDjcK7KabwjtThqld8ejV6N7HY4iAyoUiSPyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxGRAdtFc3QQSZHXLKtwDiULvgvFlimgExg9rmwB1fkG6SyMO01OkuaQ2C7XbG%2FZXuOwwaYyIuspfX5isB5v2TB9V2c4%2BnvV907wxqFjYJAISbtyz0fHM%2FVfhcdUYdAikNmXc4UEgAG28fDL6pjmAf95TCxnovRqqGyQjgwW3xVlyR11qTPmEWVvuhIjKp%2B8RpUChgsQDAvqfXTlN3EBo1eovp95w84udeR2gs34CYfPENM2wLI5sCT00EEqxyzHxjoRU6pzgBg0KywTrQIth%2Fjnjta5YcHyYDxTYewDhcm4zjnozZ%2FqZJggsB3MFWxclWYw1eZ%2FbGEfiqLrz2pNQfK9uOLmDErUJRma0FT0YwHUuaTdZBN67hJoah06Es%2BZSh83zGCmrFpOohcpd%2FlHc4zSyVsUosKIe8iH42n5nrG3JCq%2F8KVd%2BZT3ejSHlBkV4eY4i4UXOW5FYLf7cdcCGmrOhpgVMMVk8CXupkTsqokYx5Lz8N4MXmovMmOkLbaDrt7zhjezaugN8b9whkatjrEwx0Oi1wTYeERfz9y8T9rMgcUlH7%2Bk%2BnAVEA98L6pl7LJA96EULLLMVV6w7ustcbfNVB9iBUaktCOKAMfayoOBwTbL6ANljCCpQv8u8EnC6PQWxsM8EoWys%2FwkwjbzhyQY6pgGvInEQL0nY2jHc%2Fg32RDwsdvxbcPog%2F097vNL4%2FXXNz4POzyq6bnFBtHuhWkBv3IO2rQMfpXgfXO2HleCvurYj3Ef0FWbEebG%2BsjBY4%2BrtTOCEBMPFMG5pLU7ImtfVOxUuTreFvDJp92O1EGsOJQ8IQZ115jnrauAY5njV1930qvnmO5lebGSrhZoEDLTtrdVXX2WWrEVB8z8MV%2F9uoVRhDcg1Hdst&X-Amz-Signature=322d3afb15cfdeb84c9f7bca356b815bc27b37c2ba09c1d09ec2c441485d7623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

