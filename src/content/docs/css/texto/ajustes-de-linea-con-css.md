---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIZLDZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSKSCe9pg7RRDig1LQuvN0Li%2FVEi%2FxcUe4%2FdoGa8rsEAiEAgXK3N4U3Ld0hs1ofp0DtIW5ssbDh6CKSTgcA2kGBm3sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNwtCNh5lD36DuTCUyrcAysOHwS2VJGvpZtPE4GvPmOozoJ107bUG10hJLYMh41DOxQCyvtoNMf3LazDAMLBcoRebfQA1h7HfSULIAy8YfMvJIdB0qm1%2Bh8XQuhQN3BlI411Ssi1XzS6U%2F6JOliF4OrV4NXlY2RDxJd1vXhms26Dh6z0gOpk8kn5wu0NSG%2BpSdBqPH4vbzRedYJ2J06L%2BLNuHY4petFaGGumc0c4JEQPXB9A7WeJ30NLr2rO8ug8nLV4CimeCX7GUtW3nHSpkaFwoJVDubGtz4BxlPI7HGuyteN7lBdyhjYGuTOyRqdljyTpASdukkfSEiiZHI%2FspfE4RbEpBTIMU8cMf%2FrElvEZUNAmOGnXr%2F6gHFexfyglIvUMKA1SPJLjWeb53%2BTBVQ%2FOEYVWMG4fE45GZjanT1VhUbc02GuWhAZh%2BHNW2HNngFkEGWZknjYWJnGB%2BgW2HT1k4Uq2p0y0kip4dz0yGK2WBuwBNzyHJh6xYeiCFJjdhqSv2%2FcvTKF4HPNS8Re1%2FhR1pTujhEUDyI7SHJLT%2FeegVd8OVfxzaJNgeRRhnh1dlOKBPyGSSEfMElMECta3DrQh3CF5ulb4xRjYfswU5KGJB3FYzhoMTcPgM2SFm%2FEFSFpeTNLnkegVQuatMNrpiMoGOqUBvCtn4m7c4hL5L9Cz7JeHRSaotrixZlBKA3IwPv3rbebiv6MUzVFlv0Ex%2Ftwgf797ZExBQuRnwkD9%2FOkX05OgoC%2BxtL9Qqaj7%2B8Km5VPW8gVNebrazgDhUQDugj%2F6qjA7xPOPEwDjHoeYeuI41sWVxlsXwAs%2FXsb3Y4tcerGl2lOxqMIwwOAzGn0vk1hn4AA34ALBhtpWO1duCO7BzfaE05sQNcOF&X-Amz-Signature=a0f73d8092241d37bcbdf752d16d54a5621284ab618de3c2c8d63c1ca507fef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIZLDZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSKSCe9pg7RRDig1LQuvN0Li%2FVEi%2FxcUe4%2FdoGa8rsEAiEAgXK3N4U3Ld0hs1ofp0DtIW5ssbDh6CKSTgcA2kGBm3sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNwtCNh5lD36DuTCUyrcAysOHwS2VJGvpZtPE4GvPmOozoJ107bUG10hJLYMh41DOxQCyvtoNMf3LazDAMLBcoRebfQA1h7HfSULIAy8YfMvJIdB0qm1%2Bh8XQuhQN3BlI411Ssi1XzS6U%2F6JOliF4OrV4NXlY2RDxJd1vXhms26Dh6z0gOpk8kn5wu0NSG%2BpSdBqPH4vbzRedYJ2J06L%2BLNuHY4petFaGGumc0c4JEQPXB9A7WeJ30NLr2rO8ug8nLV4CimeCX7GUtW3nHSpkaFwoJVDubGtz4BxlPI7HGuyteN7lBdyhjYGuTOyRqdljyTpASdukkfSEiiZHI%2FspfE4RbEpBTIMU8cMf%2FrElvEZUNAmOGnXr%2F6gHFexfyglIvUMKA1SPJLjWeb53%2BTBVQ%2FOEYVWMG4fE45GZjanT1VhUbc02GuWhAZh%2BHNW2HNngFkEGWZknjYWJnGB%2BgW2HT1k4Uq2p0y0kip4dz0yGK2WBuwBNzyHJh6xYeiCFJjdhqSv2%2FcvTKF4HPNS8Re1%2FhR1pTujhEUDyI7SHJLT%2FeegVd8OVfxzaJNgeRRhnh1dlOKBPyGSSEfMElMECta3DrQh3CF5ulb4xRjYfswU5KGJB3FYzhoMTcPgM2SFm%2FEFSFpeTNLnkegVQuatMNrpiMoGOqUBvCtn4m7c4hL5L9Cz7JeHRSaotrixZlBKA3IwPv3rbebiv6MUzVFlv0Ex%2Ftwgf797ZExBQuRnwkD9%2FOkX05OgoC%2BxtL9Qqaj7%2B8Km5VPW8gVNebrazgDhUQDugj%2F6qjA7xPOPEwDjHoeYeuI41sWVxlsXwAs%2FXsb3Y4tcerGl2lOxqMIwwOAzGn0vk1hn4AA34ALBhtpWO1duCO7BzfaE05sQNcOF&X-Amz-Signature=5cf63ab332fdf8286fff6dea2aaf81f3d9137ce1e7d8fd29874cd3010013a60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

