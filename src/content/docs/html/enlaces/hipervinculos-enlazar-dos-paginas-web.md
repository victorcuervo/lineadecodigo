---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LFIFOR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGdGdHXBpNmToJZUV%2FkmcNevrRpSJpjgm4AEqrsEWO6pAiAWh93YtoiBZ8do63O2t717ODkjv7Ns2PqIyk6gWAlDfir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMYPXyW2dkQR7scRzZKtwD%2BPztBCRQYU7BXVlCWLd9a6N%2FKXNn15VIg1jv%2FuiK8fXSlkNQoCbLJqzLQ5fWUrVPJvoPfT48tAQvNVmEQL%2B8ghmnoWfrFkNKBuD1iMXUi5KPR5bDcSh1djMAERrumsMBvRONgnh7Aa2TCvU1MieoxDf%2BroPoQsj7As9lxVqSyRb6Ymq9tEdcKPb0CsUZZ9tSW7KTBLjod3Hdua4JS4J01iRXPpPidi19%2F9Mp4Hilzyfczf%2B2ts8e%2Fg9Ar4BMvxbTH3KE%2FcZ1cdL20RYsUtL3%2FPDfS1L6V25smD1YTaiQMPbRq%2FEUTCS0iGwipXageIDmTN0QVCEbfCRybt%2BL0XFHm0P0JeyB1TAmgITXdC73mST%2B3kX2dkUxAvgDC9OC%2F7GiJ%2B2%2F1mJdmZBv7PKwHeLpGX3GV7HjF5FbqxPupio%2FjN60Q2CEt1vctqsFQifwnCXkQQvpTQF0V381klwJD0%2Fzow87kMkvIlzu310AFqOmvkN8vOVEdN7SKFisC4ByMsEENqJMceRXVjju6bW66Qv1ULDkQrebkQkUPi9OTpBp%2B12n9LwCgHUU4VhbSktPOVywUpOBhcfvsRKIphx2W0saJsfN5vMQVloNwWyeswOko88Wk8%2BoaRluzOyaRukwtfPDyQY6pgHV7gqLYkUKNlTogM5SaEliefLIAiWzopKMPkuH%2BiWJDS0PIMx%2B0vnpQ%2FypEVNy0%2BlohYKcxVw8RTzOmtUMoInK%2BfpFS%2FW0Ct9CfRJXnsXUFdvaSiAB%2F4a1BBqCAdxTDyVl7JJf6M7%2FVHyg0kujc1drC3JglQ4X0ICBzfpSLbC%2B6nXzvIlFjZ4MkVHRL4YBe6hBroasGFZG%2BQR9SPg%2Fq%2BV5dTmXSpLb&X-Amz-Signature=0a314e3106a87f317e422b314b3c61624a8949e512d75115a8f870f0087d75e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

