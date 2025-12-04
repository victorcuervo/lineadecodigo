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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EBCWTLR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDkOD0Fs8XApaG3fpbxzigkS%2FkoJIz52VqIVJMTEMJgFAIgdBgMKeyE%2Bswduk5Gvn%2FPByH2Zfey3u1cK5gcbN4M8JUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGD39FSGtMT5QGiPeSrcA%2FEzyU2MdB5JjhNpcWBYwMutO%2FmjL1E3wJ4SoK%2FIZKIy9x0lONZuxwG86VJqzvVT06BEoRnqH1zQYGCHxok9939mia%2BEYP%2FKaesMyXdaMe2%2Bl3jyjkhJnzUF8%2FdEZjssvpQkXHgJLq0OMadYD21V7i7NWsApjfeSZQLfe5fU%2F9HLVG8%2F5RHqpIcqx%2FROsAsyLUqmvXloStkgWJp3u%2Fk3qazyr%2BznA39TrD8JL7qs6Quvs6cvP5EeIrgQem4YFK38vRFddX87lbp5VQt64XpaMn4TwNGwIwoiOcAghikhCFW5EcJMGHPY53tHGvZrXCVspbF09yCQMDp8jFeZTbFYKVU%2BU0GPjUD1Jly%2BbvuV73yf7Z0Gt4%2FOZHjdBew7UBWXnsrtQD4lmULmHGBRwh8sYOKITrG%2Bs%2FR361iHvtqpws%2B1HBlNf%2BN1WIXhmY9ko1VIYOZNTfZdnt9XSN9MpeNZSUNfo1srZvwKB4sz%2F2NWizMsO0jR10w9OWzvCMa%2B1KOxjzlptat9zTuqfdsJ1KSiOHy7C5wS7dGzLeCnsWWahfAdrTkRyJ5tjFvgZ1koM3dS9WTwlaHyvmqdDKzIeknBvu85z8CFQqlvbeBokLJJ14wRfEJWIFffjMd9jAVuMMOVw8kGOqUB2qedrFSsWuNWv%2BDiUpwk1JDd%2BalZPkhmNYZX4fJT5j052BX6wyD7felME%2BaIrpI4mdyhG41p%2BAm6DCQcWI2%2B6fdh3ZdfA%2B1niyZ8C2n9%2FEGtpadMZXTkEWmtSp40xiRsLqnyjCiSmmuozxz6Att7jwyss%2F7F4G%2BB9MlNStUeOysOluzYTgbuLSatY3R3GICUeok5jvJgb5SEEm4KNMj2sZdXG2b6&X-Amz-Signature=7e8552b68b155a7a142b181941916a6cac9659b0f1c5dd0edcde90d3ca2e2135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

