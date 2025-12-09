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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJT2JK5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKAlMUOlNTJPr0gZXxt529xxE3wivU2H7aKKAszF6uVAiBl7GMjYCg2XlekC13BgGP54kbLof0nn1zKSzfSVSFdYyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS4lq%2B5mkSHSt5GuyKtwDnnpegy7iUFDJr7cYoIIAhIuZw12TRf5TJ%2BxhorYj49U5g7nMEMoeMTF3%2B5XPQJuUD1UlzNV9SF3gs4Mb3SDUlMXe46P%2BPu%2BoMuEFDEZim3VvgAHr2GamE3JNyL8KpaIRUV9NdVdZAllGIePNw3mTis7rJv%2Fc9874GSSMFHnaVeNN%2BJ%2FxJFq39TjjaRb01xQWAqhaEg3YxBHdZnUOF6Q8rmOwy8JKbinEkIDUoezaFFcpamNz75zEMekuUCjTLa5palQhc48mAK4wq8VYEf9lUl2aeVFila7SGRNIF2iluf%2BU0oPapNG0keHChg%2BW4HnBuhKrMY3j6P%2BanZM05%2Bh5aWTZ%2Fo6lZlsxYBt3SzmQUW2fxosE9654eoIwToQO0AQguZaLglz3oX%2FJaqHuzQZ3XhwdvD4tEuYGpddmIKMAqVl01YRN48715V2dNZBTFJfIDokzx02fiyRlF39AEu9eZeCFXIlWEQuyAoG0RwlVpf%2Bwr5tRTbQDgTSZ0lKZI3ZQR4AAA%2BSpQD8xB9DOs80H6pXwDGDYP%2BBJXyeX24V84H235HGIH6NKYIM4KHtmPoxdqKJDwmQ2d6mlsi8S1S%2BuZpSoxLp%2F62ihLsm8fGzcCjnlp4SDJuOC3OMWDXUw2Z7iyQY6pgGP3tFxIao0mmG4NW5GfYTLWEyFwZxfH%2B%2B4v6SqUPitpHCgYvw9q3JhtLMvDi1ug8wX5Tq6vWqcA5j346rxerwxWNbdL25ltciBD%2FBqmlFxbuY6O6Jb7HZAEsf4XmlgbhMsb06GxFY30BO3wVbnLSVjY5iqNxLD1dcj6HvhHfIUs%2F5%2BKyUjHpV%2BwXPGJP7F5ZtFE%2BcUiIuuY1aASynjfK32O77brPyr&X-Amz-Signature=687af7264e860f28276b3c3d117163e5da9011845144bf726dcaff4d82dd6b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

