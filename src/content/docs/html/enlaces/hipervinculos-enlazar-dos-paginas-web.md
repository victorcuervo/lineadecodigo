---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JAUNFTI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCV7E6BGz2ZTJREmGwsJgmaMUN4SaWKN%2FUGYNwXekoI4wIhAJHLaEvcif5K9UnTWChGerw9NTFQymgn1GrWeCML6ZvAKv8DCEUQABoMNjM3NDIzMTgzODA1IgwauoN6FdsGTYEDxfQq3APj5f7JElC7ihAKzQ5hnMKrAMgNNlwqxE%2FZBjkqkoZEm3Pnt4wAc3Jyi1f8UIRa3i0tPAFg4auhHxjUDWFAD%2F%2FVjVfkY%2FumuQD4wAiFDr%2BFVLE2dRhdfygyCFd3Y3IynI0ovDDGf8miCpvb3aWkEmUMLz2HaCV1v7OtX0PHVwiz8FLSrPEpd3Z%2FR4J1ZMY%2B6%2BEcAHWbZ307Hszf9cnkwBx2DW1pfXUk1Ckme%2B3yWXm0IuCp4mdWWw7tlq4mjePblkeSjF6qt6HDn212uSQMZ18qoKRVxJ5EXlHnq9PXwXeS%2BG2ssJ6vCB157O%2Bc42BzpkCX8QIuoYTXsq49qEL%2BUbBYxSfn9CidQzg%2BBQsjV1qbDr194sLlt%2FBzL1ZmtwNYPV6Oq3wtNaM4awyciP1cOJLHS4WExD4thCRigSLUoQFU1AH09D1%2BIB3RtUhyB933B6Ko9KcjCLiegZJbzMlchV2mwsat3we%2BCPU%2FZogTYJhcFO4EgZ5jbTtM43ed7Rf3UWVVA26mgz8lrQV9s0HHcmrxBWGAoBT8rMX6KILUKLTIj1Qx2EFG1TkWnn5fZNakAcUrclaJGYa0FRWkQptPFEnEzy4bcEjhJpmFXjKcVM6V%2B%2FTp%2BdkPG%2FGw4VpOsDCh58XJBjqkAaI0equHziD2Lx349G%2BnyDnV5CrcH4FZS3N6DsUNLWoT%2BG%2FjEhdhGlkTwlq4Gjl0U3ZUb0cD9ejWNfo%2BrTspwwFlOHdUi8zH18oMlzuST7jeASMWY0kYp%2Fp%2F9lvhchrL6oYX6NfjZCbsFtouUFKesecv1eVhUrJLDfyljNw3Y7D4u2B8jcm%2B%2BQ12604LQJyziLN5Yh5HB%2FdK1bDjvVrhtGnNm9DT&X-Amz-Signature=d2b7f93e26a9ba3247a6f9c13dc3ec34570c64b1605d49b4345d0526c658ba5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

