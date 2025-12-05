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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA57CNTR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhaCqniKLnSIhPhO%2B9UW2KrKvqy1635qj3dmOsM3XDdAiA84EtCvnhU0kLVQZMfHaiT2wd6JgM%2F2tGytlZuiZGlVSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMgtWmN7l32eLHCWkYKtwD7yZ3qRf5KBU7RF3P4K%2FF%2BWRqisE3fJCVXL1RIKqCe2V5w2AyIWOYqCvmkytydsMUAvmbTR4PqVeRWvXQsncm2im%2BZ3nVL89uxaM6nv%2Bb9g%2BeNNrJ5jeezTAIi582CIHpxpXsuE1q0XtZhGUSqGThyYtF%2BPil1WTQ3bg5bW1VK4BCA52JQlRaum%2FPApEHr1pL7%2FklH%2BhqVV3vKz1gj7sS4FmyLCrFuR8cLUB8yVCq0AJ9cX4nGXP%2FAGKKYrZG1BZNX7cguVRaVD05h3vd3pshNz6HOJx0jJFIHVN6DSW%2BR3fkdAxtIEkxQX6VA37A3wY5MpQQHCODS2QkyP%2FqQnDmAmS8PJ8Yttg6vmK5H1mRjASAPF8kEJGj%2BWOdoCHinfQLlpRQtEwgvNNeb2cpyG4rOU%2FrMtVemMJCwfvQtDMe%2Fz2q19wVHVKkTwUvz6k0Zvwdlw4zb68erJ%2FlirYHdHa2NLTyOA%2F14KnbnyX3I9TToEvkav%2BH99RsU%2Fg%2BBOtrQO%2FBqthKdBiZUd%2FVwgbljR%2FpJi10RH%2FaVbIihAvHo8LDcHfjK0jCRzvu3xaUpSFSnezvSfYYgD17n1BQ77wUUbAM4j1TKLiXwor48EYQcOyGC3OsJ5Y7jFvDJn0u90wwyoTMyQY6pgFCxzvah2t3knSO%2BrbM5xbaVrDs0lmun0UcU2PMNOXxDh4CTkiRZSR79nuERspRbb3g2WQZYb8IpVolx9UUz9ITVEyuGNlI%2B1Yvf5LCnEDXqkQ%2B786axqkQCTfpDtAnXHqeoUTCSQPS2tHGx1zPyh17c7%2BvI2mBby3Q%2BJT1nIJTKwDrW7oxd8ZbJYNdkoU3ZSKvzU7F3bE2JL1zqsInjof2O0n00PJx&X-Amz-Signature=1a3845f5f6792bb4b7e5a38fc6beee4d038ae3a7cac0561a8e0aa75e052f15b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

