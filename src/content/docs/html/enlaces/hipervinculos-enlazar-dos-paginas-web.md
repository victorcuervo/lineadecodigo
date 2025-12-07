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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4LE3ASZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH57Hi79urcCxU3epkkM3Bu9LT7FXC8vOD7WwY%2B9%2BZSgIhAPcvr9n%2F1L8ZPtezNB9pOGRL0gnRtBbR7NMDTmPrjjm%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytTH9cgfZ06oIw09Eq3AOtgON7i9DobusI1AjemPBYGslwLPCKhF56mstCEolXl7YSMZ570XD%2FmnQO4Gb9XA%2FF0v1NDseNOtQe6yMEEWnvFAyULCLGD5LdVvyr%2F1bvxqjN9n06m6aBRRRvTLvoEfoEn0PrzS89AC6g0wmMRM64GO6jVF29nvYs7WzoJlJUi6TofupqT1QudMePQShd%2Frqy640jotjiDGxn52ZtTSRdLpqhzQ7OKOU3bURErMfRAfzb%2Bzwk4IcTvQk7vJtwRVWw3wTYJRcuxE%2BR53tKEtJwj0CxBLxIMp55whqUQdG94RdJ1w3aHHswwlyDV2Lmk%2BC5UFZ0FG6i2bcesRqw2mq1xRpaE93rJEkkoEH%2BXJ7bWHi9lc%2BdoKNFmjJaRlIFOEEW%2Bu5dzSDLlYDySD52UokTZ%2BgX%2BhL82KxN6E8QrdLpd3Bt7ZfkzwXEIiSmUWL%2FjrMF2m%2Be8yN%2BnXSTXcqY4TRMoD%2FVJ2tRwTc68iOlIEnhKX%2B%2BGYGW%2FjPefTtNPOyxM577Pkga9xt%2BYcNr0bfTdztVcdGnRbB1G8eOuGRrJ%2BFixBabYbqC7vZf%2FJOxtrwqIs1qJlDP5yBE%2Fe5Cpxm6fHbn9k%2F6Dk7%2FlOS%2FPsCADJeJz9KakWavY7BvzHI2cDCCqdfJBjqkAbvyK1Y3%2BOaM0hRQ%2Fvm%2BVVKHvvqVuGDLvcoQjbWnEswWE%2BruaYaZGKJBrvoVuR2kU4jqCcK4eyyClIDngjvgBnt4nn%2FCq9NlDM6F8iclRqIJElpCNhkg%2B5GeKer2gMss8rBBZIzcULAlnmtPln58UiBaMHuLN%2FU0ZUhpZDYWAdWjfdObrXBYj0DJL3IRpqWNrel3a74E%2FB9C6z4RjsyKsMpcxMMv&X-Amz-Signature=23b62ddb01016885f6d10b0cb735750cd9d12378894ffd132a692394e9617b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

