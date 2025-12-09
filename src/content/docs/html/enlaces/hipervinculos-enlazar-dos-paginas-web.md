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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ISENAZX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXmTxZ12gXk5n1vj7roRwVzeLKTD62WtjVo1xVqShryAiAEbG3Z%2FsWw7a1x0lkNmyXy1l62jV8rluUnSqrriDhbDCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGquqF1f0JbM27tdTKtwD4SkQWMIJ0WGcKNy2cFF4sYXiRZ07Yb%2FkZzK0STtsmeCmCnmkeNV3yM0%2F5sndhYffqnXJ%2BGzpwHRR9fJ6tdtlTuXQEsmzUz%2BoG01mAlrTJbW9co44krGEg06hCiFtwT0SwadzviXkFKwoJ%2B0OPlMFHfP%2FR5N1ANHP4iohKBIBBTdSv6kt5yOCSiYM0RFNpsytCb3aE%2FIIAriVZa0Eq%2F5iqor3Qp%2B8%2FHVtJGe2Q6NoJvrPbKhjXG3%2FSqQ1TJyAOjP9rJkbNXOL%2BH3pgKiK%2B4ZqG258ZuIPenJlqdP9XgofmfAuG7Ks5v%2BJMsAif%2Bv8GU2%2FIO8%2FSfdCQ6%2FXen1E6boJgglC9MK%2Biom6MpFKuexEseWdPfeOD1iU4Sd%2BIA%2BY0shmIuCk%2BZVE%2B2ae3Z42vQHasB87Yt1mME777LR%2Ffjq%2F42NwmTM0xTNYgOrCE%2FwvpFo1Rwgiol7PU8VEcKyDEPgwEfkBchdCe8laf8OxeL6QjGen8p3Q%2FWngo0xyc8r6ObJ1uuGb%2FTTv%2BRcc0dXwG7nSfn97TAimtRwtIEemVqkRReAocE5DBVBcOmMa%2FJ8qTaDsBwN2LdQ3uWEVryKLMLV5IoGKHW8CwyExorlUK8RLq3f8HbOLLLjdaUw6fpEwmL3hyQY6pgFIz4hvGfN81MJYPjWgvs9JnKaAWBTaGrcxcpS5YLlocqr9ESp2%2FxmGb1lstQ7ZZS8J%2FdcwaXxdddqqPIH6I8UbhvJ%2BHKaxHX5qX0exTPsLLQ%2B5AcEfyRNxOI5H%2F609LVTMdoUfMmP2MG1RCGwC%2Fml4h6WY6Kjx%2FjnR%2BJnb93tbEJH3CqH41cd%2FTcRkE1h%2B6nFwNENrmTs2u3p3G4k9EeZzu8gh%2Fci%2B&X-Amz-Signature=a174128fc0421c43d53cc9537f7799dcf1639ddf3057845122790ea8efbbf2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

