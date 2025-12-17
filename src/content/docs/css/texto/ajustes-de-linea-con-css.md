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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSPZWJB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLYQ1Pmyrah8BHV2%2BmnoU0Hpaj7fGHyUoHl5ARnFaWfAiBDIu7D57x1kRFugSiH1eH7ZBg32PFu07MdXFRJfZvmSir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMn3osrQSCovCid%2FqhKtwD1blT9gSkUEMRur26grfid0bWyY4gFcMdGmlnLI9DmWyfVT26afjd5LLnTO3cQ8RKGp08zB%2FBiedYRaecFngyf%2FSTSZJfo4jglwSRDRHC1nG0DDU4%2BgGLvGNWIRzB7SlZ3DdBWcd6EDLp1a%2FUO0A%2FAOnHyXETDOeMlbQ5IqjYX%2FMvc%2FErBdqDhQQ3jI78OrtZofNNF64PXOck22HjwtPG37%2BXusaPy2KM17zfzroRxDLTvZ%2B%2Bshmv0tzM1wFUBcv5b9Lk2CvefYd%2B5NNp3zo59Dwec5d4dqg6taBuOs2og6wdH%2FnsljS48AMEFdnAJpb1iyEjpBbkI%2B9IsN%2FVvGQfNt8WI8bTFUcHcMpTHO6bo2%2Fp8KZpPhVX7W9iCcdthR%2BU9SGQjTeqO8s1rVHIB6hu13pcT5%2BZaj%2B%2B842MvYI8QkwuMgkRnA%2BETTW53egcliCuKitU8OvLukFXaNAZ%2F2GiEjnYs13Kg6rBFIkNrEdmpkBrddiS1TpevJhIrIv3WtcVDqguDLdx4K4B09na4hn8j%2Beoib%2BH%2F5KOmiZmTgMOgcYTt2kA3bIFiWd07jBBeAd1qzj%2ByJKoi1Ps%2BEtSrWRlPHQTmvfMFIDMqlNfuh%2FPYdA%2FLlVFCANjj45dWlMwnI%2BKygY6pgGUo%2Bx25k7IfMXHT8D7wkeV3vkiq%2BhyqpVD2Pe%2BuF0RT55ao0y1afCruflK3xN5AvYmCInrRURxXvic4OmOqo7fscHkqAX6cnI36crA%2Bb2%2FUWILMPwFGLa8reabk%2BJXQTXo%2B8Nk9u4p4u310oW7COdSAD9yJnCE4HeQmtnxBCref4vCslQLY3fKyDpvevc1KnyD6MpoP9%2F4b57v4fXIPoJMY2lL5iTD&X-Amz-Signature=a70249a6a4310d6a6b2d448922526d685b1cbbd81abf25503a053399a035d5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSPZWJB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLYQ1Pmyrah8BHV2%2BmnoU0Hpaj7fGHyUoHl5ARnFaWfAiBDIu7D57x1kRFugSiH1eH7ZBg32PFu07MdXFRJfZvmSir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMn3osrQSCovCid%2FqhKtwD1blT9gSkUEMRur26grfid0bWyY4gFcMdGmlnLI9DmWyfVT26afjd5LLnTO3cQ8RKGp08zB%2FBiedYRaecFngyf%2FSTSZJfo4jglwSRDRHC1nG0DDU4%2BgGLvGNWIRzB7SlZ3DdBWcd6EDLp1a%2FUO0A%2FAOnHyXETDOeMlbQ5IqjYX%2FMvc%2FErBdqDhQQ3jI78OrtZofNNF64PXOck22HjwtPG37%2BXusaPy2KM17zfzroRxDLTvZ%2B%2Bshmv0tzM1wFUBcv5b9Lk2CvefYd%2B5NNp3zo59Dwec5d4dqg6taBuOs2og6wdH%2FnsljS48AMEFdnAJpb1iyEjpBbkI%2B9IsN%2FVvGQfNt8WI8bTFUcHcMpTHO6bo2%2Fp8KZpPhVX7W9iCcdthR%2BU9SGQjTeqO8s1rVHIB6hu13pcT5%2BZaj%2B%2B842MvYI8QkwuMgkRnA%2BETTW53egcliCuKitU8OvLukFXaNAZ%2F2GiEjnYs13Kg6rBFIkNrEdmpkBrddiS1TpevJhIrIv3WtcVDqguDLdx4K4B09na4hn8j%2Beoib%2BH%2F5KOmiZmTgMOgcYTt2kA3bIFiWd07jBBeAd1qzj%2ByJKoi1Ps%2BEtSrWRlPHQTmvfMFIDMqlNfuh%2FPYdA%2FLlVFCANjj45dWlMwnI%2BKygY6pgGUo%2Bx25k7IfMXHT8D7wkeV3vkiq%2BhyqpVD2Pe%2BuF0RT55ao0y1afCruflK3xN5AvYmCInrRURxXvic4OmOqo7fscHkqAX6cnI36crA%2Bb2%2FUWILMPwFGLa8reabk%2BJXQTXo%2B8Nk9u4p4u310oW7COdSAD9yJnCE4HeQmtnxBCref4vCslQLY3fKyDpvevc1KnyD6MpoP9%2F4b57v4fXIPoJMY2lL5iTD&X-Amz-Signature=c8655a19f8c81763023e07ef716e804cea748551bf44c4444e58583fd5398633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

