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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MIUF3QN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIuq91xm%2BeRavEAKxg8S7B1eK179x29xwl52ghZKfM5AiEAmhjSEm7vOSjA92fGZPeUWMUu6jBJ%2BempJY62O6w9hZ0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBnh71Yvtc4SHcrzSrcA5nLlh1QPkuaMYEriiVZYe9Zlw1P1WHZghxUi7fu%2FGV4mKC0paudm7v7QAtTQGiuEJOzePyOk7YasMT8QsDVWvbY4OzeVyx4FCV%2FqSJaxLXdhB11IXwha8VLEuC7VttEFerUHh%2B1pZ02lJ9OYrLMLtMKOHiCnNwXOkjwQHnmRK2B%2FMiBShYbE7mAqiz86%2FohmOoxSazmySJQQA8AQ1GKiiykdcVqjD2cquNAqVmieeHZ%2BRSMjel9%2FtALqeJU3uohDmpI56CXycxFEKQxOEgxqG0%2B8hLGwoFmcEo%2BS8AQ9DfCGPmpt7LzVBf55ynZY9fT03sULkTE2wAooiIo%2FCLVau5bQC46xBgqXNpS9JGh86BJkksSD8M90UQv1B02dSTbYPvGpe6vc%2BXdSncHTxksBPsf2OQ%2F3l83aV0hPcwPMedsaUeI%2FDhTeOj9Oo2mlAYzZWYGQEItwPwSg9K1IXfnvbAnrP6NdAIrR2b8FFOlPutjKLq7RABtRCeb967N6m7wMVdd5yVjFByoqllG00uMQ0YCQh4kmgVrw%2FwsSM2O36jkL%2FlGUloVnXEyGlSlqGMxyaIQ6gY3dFeXk2R5JHYY5hiFdjzqyaw7AOxc3mUb5sLLWbGAJz9FZpftGr9GMMKa1ckGOqUBDdHpKS6orRbDec9Mc3xkbcranP4LC1FddIoeOBzWkchrqIq34MT635S0ty2VvhgoWBEgzbRT5B50RTNr8nbev%2F4OR245NL2A3sX%2Bw%2Bc9%2Bf%2FgY3kZu%2FzmQ4YpqtZ11kk7b0HSqls%2BerjpN%2B8pTkS6XJkiWbBr4bbRdT%2Bqs7L920eRX6zyCUnTE6KecK%2BY5%2BrrNnxzIH3FX9lKQGL8t%2BcCCUMlvNMP&X-Amz-Signature=a9222e3056257bf42176afab70e086f70d84144c5be914e2a8bd0a4e3d87fbc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

