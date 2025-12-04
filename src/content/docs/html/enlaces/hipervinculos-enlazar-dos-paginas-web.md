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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FMLCWS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDy6Eq23d1aFq2yureQt5hRKueY3OTTMkMOQY%2F%2B%2BwG4JQIhAMx5fIbxcvsPd0uBV%2FpPnfO9OGpfiheAqul5w2kKjeReKv8DCEUQABoMNjM3NDIzMTgzODA1Igyar1amxvVFX7TP%2Flcq3ANqme%2ByPD3iZ2SDz2cVqHsssQl%2FnICIEmP3JD3fJ5trQ6SjT%2FkS6wCcKRef1kdBBNo57tjQywGK5je3Ou0bBCqjr8YQDC%2BGsmPmllOPW7LHGbtrCvsBS2keyYCUv1IkO%2FxaPOGkM5uQaadsrlLCPWJiQNht%2BUHWcrKT5Ue1Si4JcQq7dTZB2UjgfO3SRUNE2soCeuSSYS1jsletyJl3ILU%2FUTzVgOPMya%2B5lSMeotPRL3Zg9Jc1%2F9LeBAQE%2BcOCJ4BMSZSa87ndXdTXoWMCqYaHVd4JCkiKcrKXXi4eU6%2BlO%2FZ7%2FHYlYRzaEkc8zL4RY6p57trJ5iCf3l6uYCvuXr9Y%2FDM37zBY0FhmkDbDoeCJ%2B24dkCPM8T%2FrTO6%2BaAAGB1%2F4%2F7AWh3Up3AaRvFyor%2B9yr5LeuW7PsdwAI1BPe%2BHco31jk0mtAIvtznMPR8K9Ox9OC7YS6DT0EXL41%2B6mS4bbPH1icfoYtUFtu4OmrqjHnTOOjjjDr2ojneN6r6LN6y%2FA1xy6ShbyUQeiekR1F4YaUQ6t8C9VEuectzU5%2FOfSpHwfJgr2ZrzCu6UsvOclwK79oxiUT7SvHUWpJkOO65eLEaP3%2BRE2sJxvI1b36EsrPttP%2FqkhCe6qGsFt3zDk5sXJBjqkAS71aqih6rDm5fkC4whK31taVRHq%2FVAjZzKd1wkAKyv%2B0E5aqtwwhHe4leTT46katLOyeeS85H8DhuVax05VXgbCHZ8lm4VNON41wKKJUkKQdBXV7VlxYk4CDYre3pGDZ%2BZmCx1mwmNI%2BBs0KnJMmjmQb%2BT3liwELUoHHnDEQ7%2BJ9i162pY7xrgZpSTYRjVx93kYZ7avThQjKMUD6QTfvJyXW75%2B&X-Amz-Signature=2243f18d90e60d33a36d0d71578bc04c6ee70de498ebc031fadadba6039b32ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

