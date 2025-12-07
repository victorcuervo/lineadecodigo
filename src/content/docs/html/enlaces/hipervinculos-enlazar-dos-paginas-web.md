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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQNR6VVU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrElnrrdUFrClbvspFihv5YtSiEiO7NzbFf2ODpaOb3gIhAPXyGGXjQqpoW83mMVgYtNm2Lh2WAwlrK9bgwDQoWsemKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG5et7PtqpUKNwW5Eq3AOjKBxpLUH56lh8mV4rIuU0FFqzkTQwMpbM55Vjg4dcMkt3eFLFpQ3U%2BS8sIfvTiDHVZX4H7DFt5Cs8y0USjCyJJfTInZpJHJIlYSYieNAM2ovIfqP%2B0PluSyQK0oBIfM56sIeTF1i%2Fv1QiiK10lollfP72O3zceXf0cKdHNiTzyzwO3AHxJidpxb3gTH3N7WbaxfJKU4pAuVcYTIIn4EL7s%2BLaCxVieVHCHbsZyRDn6Bh1nFeavOEtPA6%2B3i%2FeARfdWwdWSkC1%2FvacJuMPsLHIc4n6JQCfPdzaReGyp7Tq2VTk6s%2BtWOXCTdAa2E6udaFnFoHQRfNtyYzkRjIoJ4AsHJKa8VVMh3tdFSqBbT9C43mFF6PrC4OrBy9NOWveOasMi0AqrdmyPik%2BQZ0W%2B2OMTUjAvm71%2FW0sOkhlVbykEz3fPVm9uPp3Hrekg0XJhsg4MsagOjGsyVKpl9V8UZAitfoyxGpUOx6FRtz7yxrku%2FNluR4l4PA0t2Fcd9VhifnTpQYK2pZtLYttU7Ey59C76zrHEaHRocyQ%2FB31PqCawc3yZ3Vx5yuYbJNxUiNh2XFNSrAdut9bty4mbidjjR6p5QgEfWGKnnIlGaLDS6xKh%2F5DbwN1Qk3Q2ija8TDdm9TJBjqkAYW3dEukUZGpPvBqu%2Fr1rR2eEt52lSW8%2F1IFXsEcKgOdCQLY2fSdPSYOx38uAP5HROPGE%2BbTGwlYfVtHZx4P2gkMLBcoLPsrzWgMy%2Fgvg2juoCEkHlduLSeZanO%2B7HJPbUX8%2FMWr4qho%2BSvGba8BQLjmbgNYSm73Fkj5KcWgGEQrYUOoKaSG696x%2Fn%2BWnPsq3IO92QurKmfWuxgDH822K0WoulPl&X-Amz-Signature=3570a7b77cec8b10bf92b8bf2be3f3d11a84f799ef2ed075a5ecb43e6212a61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

