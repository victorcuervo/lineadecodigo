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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQBE7GS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6kGw3SfurxQZZ2Eu6IWdStTCaUv%2BB2knLaSZ80kSH1AIgeQzzHrF%2Ff%2FWTUCojVlWsFgUEmOe7X5t3%2BTJwdeMyDm8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BpLpVhyFEvMNAFpCrcA4EdFQVIIrxpLqAXfvBG69mMzO004T9%2FjZUDmUcPq71gqBRSn5jwxqNrSp4qRbWfi%2BeRFGhnGNE1ylv3Rbh%2BeptRmYZt7GcmRdPaCtop68IH4GFDI7uiXQMppNUq2J1DBvPcawK7kDivxF7oUtmi8XbCNPqyuIt0A%2FABnGDhFmJM1fCp3KMTns%2B7fpfjoag9YYIytAt0zKBsXEzolnSGKOWTtdYF8fx3UtkDGxChvXsVrUcdRZMSHwGWtKRc11yn2edMtH8d7Ykx8Xw7pWQz6pmHbzTrFRhpBqTSHCGatV1RaKidWy6RJGfGI5WYLZT7tZ9F4hSJmzEvi0SFyBsjdOj4PT9WPoDb2BYRFsnPaoqSu%2FtITO5fYOSqMhjns2svHijcuGj64isEn7UxDZCeDM1vW3DB3weuQJjMaC0qixiQ20C7JZvUTbY%2FJaEQ3X1yZXY2LCVPWpV8UD0aAKqHZzEV%2FcIW%2FWxMfvhi6ps9c7A8OSLQ7H2iUSRzMv%2Br17hMbck9EWWPVW%2Fy9%2FwYKfnFFBZyuhqtsNdslKJaUXejrs%2BbNGDmnxb4CxN50fr%2Fq90y%2Fq2yzIVWTEzJ%2Fe6JiOUZyXVBhla%2FR%2Bg3KdvVqIgmG9qtu%2BPCtrb8MuBv6djWMJOo18kGOqUBQMwI47z7Y%2BzsENHbqmkhzX9s6sXeEb1V6fauLtVFOjcpNkYeV7IE3ZJUWbCmo%2BjWvmB3t2b9IsES5s5Er%2BPg02by%2Bvu0L%2FU%2FFbtJQ4GNiSACxKFTypMAcu9YJhkVQ5EpFkCTYp%2BmT74pbe6DKVU4afythpAhoNIQ9v8JRMIDqlV3SnC5FYRUqg7b0BJNGf5LtJrnNzxWzT9HPpErT9doRCn8zVW2&X-Amz-Signature=9f3b5ce773188a76949872bbb4ce73a5b2166cf3515e71e64ff489d1db0940b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

