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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHXBSWW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpMl1A9gBKPzaOJ%2FwxTfBzhdikmDhkKnqM8p7JT4yxwIhANbNw29S5Z0MFdFcJ166a9DGq%2BU6f1ATRpfEDamV5J2PKv8DCGAQABoMNjM3NDIzMTgzODA1IgycJruDet5glwCWLlMq3AM2TfT%2BxqHvODRrZJ7d5UN0%2B4jM6EVuupqeAja%2Fm2H7U4OHGpOBMdu%2Bs81hlqAW8DCH0CD6l4%2ByPtcinboBv2cwC5lEx%2B4m%2Bfe6v7TPXWBabkCW5L7kmzVPISxmmyQDCKXmQUybbpXqG6c%2B626td0VwyZYfoKSAY4jTjpxbDqvi%2BR2iCFZGhL%2BOEQpmcn7YCH0CbhqsAmJoHiHngfsCRaErUy%2F%2F7GlvyFIDAOld3ojyJi0i9aE2Sm4kJUfAS2zBIRq7jf%2F1yzgd49ZDCmggi2PrIlLflxHqMlp9TYfTNYGWuQC1axMeshHLupng0w5Gq7VMV3d%2FIFlTN8%2FSQEtVSmoWPI7DDIZdu3W4QUz%2FIZPFPw9MzTbq361TUaQT60wbi98crxUDziExoyKRfuCvuAYEbmOjkXkU7VDX2MLrm0tl35XtSiEaLyJM%2BnGZTsf%2B9eCJS5DDuVRvJu%2Fdqxm%2FWea5BqYI5QiFcfkhQRgzxp1lILRihY4h5IGDW0GTLVElhB4rSOmBz7fOWqOpglN1%2B%2Fl1nvlJ7OdhkuCPOKojVvuY%2BKI8rEyC%2BMLgB37M5ioCivOn5CogYhkY1rYtYGbxElohWV0AB0zMAf9SCAfPvkvoiEiCRtgoKs3BRDnD2DD36cvJBjqkATNZTlNrdJCnloy6pyDvAqNuqaFO2rhl1bHGx9Q6ftAEByNnAXn0eDauGAw254q3BKuwNwrbxtCBijY9Vf8Lk6bP94udmoTMnj%2BUb1EgN34sXKEnKfzyue9ochIQljITk4QJUe2fmQvD25l5qOjvms4ndTKF4%2B0M5DrKnGa3PQn0oikbhgQNuVY5FY55G4%2BXzGtfwfQryuuK7rA57aiidQTql4gQ&X-Amz-Signature=6544f1cfbbb72e567217766e6fc5c75ce22dcb8e287b0946d597299b46a1d792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

