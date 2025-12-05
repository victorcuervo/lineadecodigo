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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PNAD6O6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSIETtddvIK6sIu0FxEafQpy%2FCrf2ihRUJCGv0RYLdfwIgLHpN03rSIzIxYd4b%2ByC1yukKqOTH9KvhXx2Nri9G%2FTIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP%2FUiCDwNAPnwbF9gyrcAwY40S8OzzwMYIELcNc8lYJ9lqE%2BwIYePKnSd3mf4FoOAXwnRtPy8jwJNwPIdTXfKbUAtePFws7NzoKU4car8ymNB0%2BsfhkeHbrEO3V5LAPSfEU2%2FMWz%2FyoeUFZr%2FYo4ylDLc30V3q4mS3wZqxxg6bBtFsJwyuMxhjpDSAa6Dsa%2BmOlAzAzJKVWUAuGLwOoBrwTnwi9q3SpE1%2FCzYzG6hKwv%2FfhXmao5WRvIAtEDvJSh7lYTvR0eb3b7XpM7IWfLHgkfkCqVho9HzUutEP3PycZhZGvWxFT4AuFA33lUvJjWySdai5RjuRomyJwNRJAjci4qKTnnk7hEyJA9B9SNmUW9lIML%2BvQ2Gz4xTSivK%2FRzO8E6ZzKbA5u4wJCfB97jTqOlZiATCMIhU%2BZsnUJwy%2BX6LLxTgYwzzdhAXm%2BsNOycHF94is5P%2FJm7azWfndTsEPGUSqIp5vmfAJAI6d%2BdwspxmalB%2Bk68w5Bp9kdAwVOjX248yTd%2Bk87ow8CCw2X1%2FIXmkfUaUU0WyOZV1yfwcFe8TSmQxTGcFoaWcxT4P%2FtvUomfr4tgqw63qXaNRPttFK%2BhO4gp3KJ1RsPhsF4CBp%2BrQLXL%2FumVa41Vi8ZJv06XGgaAplvuOYeFPZ58MPKMyMkGOqUBO6LHJuV6u9gR9JOjmDNUqPp%2F26mCFtQtNlM%2BnRwbn%2F46xxmpIrdX%2BsnPBpHi5IJovsmBzIMagRw08FIsm4Dkr2phlXa7aMI8xZS42EHAd7Hz7QH2ZxS9FTHyyiYhgY2aOBTuG%2FS3DIMcBeKCo29eXlKq%2BdDZyY6t0DrHCM%2Bkkn26EoFNFxzSaWAGmPQYIgg8nDmOC1ZP68jiWiISB8S8r0WD3c%2Fz&X-Amz-Signature=d7c0ede2a2576eca289fb8349433f1cf62103aae5502a4ea8b13baf9c2668954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

