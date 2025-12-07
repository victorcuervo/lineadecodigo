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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CU4UQE3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg89%2FiziMKDsjF4ciHc4xypRyHh81UoSL8fXWmmJTtIQIhAOnOGKEc%2FM7hIzNXZGA8qHZ1gIabWtU057SD%2BL85uthUKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZJXoE9r3X4us0i%2FQq3AOsvrMRoi7db0se8xsXjLTTf4MV3Tfx1RSagUDSHEnvmg4wRdXexMgxecZGejs73HPYZPpLkLbvMPUvkLkorACjWn7xdJzEG49EHwLA2Oj7rbjDkXx4YNNHzytbOtScIJlabJNKg0vRxrDTVmTs1W%2BNdg9R%2BIZnBK%2BI4tl6J1gkVM9YEsA%2F8zz0KQVYe%2FAVU%2FADwnJr7dxtv1b2eNA7fbdrAJfw%2BvIGO0Y6lqnCi7qBcSBUja7ObtFudJmeNSGphGScmwDSg91%2Bpon1goEqC%2F%2F3sMCq11MgIj%2BtIa5GIpKgemXenXXIVMU3McHyCDZCm%2BPHlOrrPv8h2onBnqpm5FUsWjtgAt47By%2BtI2i2K%2Bhxe0T3%2FotFf9lao%2F2BIvXZa9cQJAC2cdFmEzFCUca%2B3HICfeJOO3gavbcNGUfQkcOnTi7kuFr5mlDb1W4uXGrTiXFNn56nnXkOHEerUaRBRPicDcda4FOrZFQHaDiX1WYWdeDzSDdYCGCWCIVul7IbXszXTL2NwB2pjdjTGSn5X3nmD4QTTEOrxuCDIltNaV77fbb0L2PEee6EGgCDbEUrf10Wvg%2FAQDl%2Fic6uz5xcQ7xcfico%2BF8A5IpmTec%2FlmB9oFhe%2BJ2cE6ZMUW%2BbKDCGu9bJBjqkAWzKWgnhJocFQFvhEp80%2B8DtK1MfEUAwDKi2B7L2yg6ldQUbNb4%2FCEck8wE6jv7DJz238xdFN0OlgTV5fe9DmnZXp%2B%2BBMvgs2XiRKEhD%2Frs79EMqBYo%2FUqUM6z0vkMM3uGVb76WoZQRuxVSdeS%2Ftf3VbYmCLTgL3c0hjA%2FzabI8tH6bR2nWtpFHH3ca%2B9N7W0bJxhUYpAKUoAcEEcQPTpnFdWca3&X-Amz-Signature=cabd0b03103111423bddafc64e63aa9b428697842fd7eb9c5878a3aff2cc9a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

