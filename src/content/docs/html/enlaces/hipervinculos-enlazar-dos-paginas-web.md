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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCJM4UU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF71NB8vuIaCfonMRNrP5dH7x%2BCxzP%2FEqg0zpkY0iuL%2FAiEAoX5zWoGMUCvtKutlbkN6%2BYfcu5gEvo7YfMMap%2F%2FypwMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL0kal4mzHYv6J0QircAzbqm0nW1jblSlFVo62Q5pptRXHhrwiVgg83mShUy1qwI5%2BcviQbFpu87s0db1XFfCa0xsSyTKJfHmSjNZFleinEOrvujEkM5B2QLokFu%2B5I%2FoOz7zWAjVpQs7kWbXG0X873Qx54yJDrsakZv41%2B1TmglXUsYgbxnqRafm2M%2BD4fiFl9QyA9WHaxaFDghmEPm7SGY69FTOSCEFlQnxqmx4FQbJw9f6iyY0mk4Zbabgoci%2F1NgNXeoldxzEBSZeYLtce21QULgAuq3jXeMGL%2BC%2BEsLBhoH13LfCjF%2BPwuqrFpj9R2IsaPVFYzQZUWSTR1t7aNGgobGaGzXlqa24qH8OZiBLsv42Wif8ZYvhj48ETtOx1ElLIxNl2kjyR44%2Fj4YrWgWgzM7ANS8bIUCfgWG9vKYke0XBpYrWtYVDtmvXTQyNKraSMQstzYGtUfmfH7nP9kVutWRVyEwMyQsrdXpnT6F0Ozh9L07DOVOScjf291xxrKuwdO4ujFAV5WkxCSIDEW%2BWFrwbteDdqj%2Bb9YB%2By1AT1pqRKY53tUcoQyTJwzI%2BV%2FJBqPaP9Q1tHRg66qcFm%2FQuHNDYr5EuQ4Euz6awsLO8pki%2Bb7%2B%2F%2FohRD2U2nEGTnb32OAZqSkQ%2Bp%2BMMqU2ckGOqUBIY7108LGo5I6rlUrm3WTCwXFNyp3us2fTZxl2gjAKm%2FyuTYxdD4APepukCtq79unNumDiywHwdMdJSaj6WRjH%2Fz99Cl53dXXsdbp9C61WeGVa3JDdnnL8a7MOS0UiGl1cxofQVFJwF%2F3gYYFf4PFkmrsBnSS3DqUW%2F%2BzJ3VPPrsvdnmNlA2iBxFKJctcpzaH6Z22PVS%2Bo69cCYHOu%2FE7mLkIf3Xm&X-Amz-Signature=45a2eb327916532df8ef63167e64b89711cb073c87e8d99914e6f008d2e76505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

