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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSHUGTV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErplyopvdpidsJmpAfpOrWvK0RNVkRDTsxA7q5QOpNcAiA8xGB%2FUsmlI%2BMcFqz97lSi60XZv1KeCuL1GAH0V8tQ%2ByqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyrJjEjOlxNxnwi6TKtwDL4KfGWK5slYX%2B2bOmICC6Qa%2Bp0Xhtl3gTqeAGUxQaQUs9vRVX8QtPU0umUZNcKb3JPyhuF67QGfLThboty6afCHGECTg354V%2BeQsG4fW%2F2Htl5vHeaosCN4xAZ1PcTcuHfAe2agMIMtBNXlmVaZmmCPLsqb1DRj84coI5IHlNhn436Xk%2FFIc8U7mrrl90BkBq9KkMTEGrVUU2fsfVSflUx6t15OLqqMct%2BgBARDGPI1hMUWedRZe41E1VaNwMOY5Td4nCh944CZEgfAN%2BwdDGOjryDO6aUtaZh648JHyV4NwV7eCILoWhllIEDReR1JQWM6zapgKjKO8cS1tBYpoQiB7Oi3TXRULpePl1LfHAmYXCcRqRoVeivLFjyXA%2Fk5df1noptXgJKA6ynEgo30T13VQoi9oJKt4z8zxgTkjQCtn%2F8mR4BOllv4XryHJRvm%2BMd8St%2F1HdFBBBH9SR%2FkGCCFreF5uhUf8rjQuZNrW9no2TdARoM%2BHNi6U7XJLcCi%2FkxPPJsJDGLp4b9GFgGxq6X0cKiUILafHT4EQixyAZsEKA1RrH3gcl7J2TdraWP%2B1oEGfQslA5NsGR7mEjh7yDljyp%2FF2ED8d%2FtNWdLz7%2Bd4qxxcCeAjwOCCAcWEwyJnVyQY6pgFq4fg8GVlr006hPUnZYFiyVhZTgb5%2BhHy9tGuH4981CvrwgdxYlGyNA3ob%2FcFG6JFFu0s5GRYcAkRZeisKvc0GxdOADFbEo1Tk5WvE3AzvCS2uXzRFO5X276xz00FUcIjejp95VnollaEbqjhKSSpdJf5nxgm23pmqKPP3JEzQXbnYTHfDCzNTtuJW00lyEAgM30YOec1PyapxrafvXHGyyHuyu%2FH0&X-Amz-Signature=4a824bacf645ff67aa94f71b52fc2f2ac0490ee720d64992bd201f17470a60cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

