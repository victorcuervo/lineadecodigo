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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664744MM5Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICl08tMoaFM7Szv6jTN4YNRmgm%2Bs9psC9smfvsv%2Bqh0DAiAvZfc856DWE0m1oio6qdaggd7Ak4C65CABN0547pPjOir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMavBnhsZ84ZkdqrEkKtwDwvdd1qk%2FITRnul%2B1wGl1UXJOV%2FrojWj4BtJq7W%2F715BkSgs2BFhj%2BEhygaBmoXdV8qVkdqUvB8Vjd8tkoXREQIbSATP7vIRBjKm%2BJm8rwAjGyQiraadAX2%2FaAVnCTGNwlIIL0LZBz4%2ByCoZmpgRHFNnf%2BuEE6KLIWe9TPLlP%2FJLAdcKI0oCfjURNN0W9KtJcsL5XHs56HqJ3RNlQtP6sfnw0xnTXB6RXmv90LdBUPrMT%2B%2BN%2B3BCMW91edQmgoD26ub4wNYECpUlfSaX1RXAOcXVrs0KxxXktwIAgs9qPE0xhakNNXsTv3wtq1ijMBrdFDU0Hao8Owy0FP1ZCrrxXZkc%2FWKSy%2BO43ddZ1YcFQfO4cKrHM6I4DImdDq76D29HX1zwTeMDWmr%2BY424CF8gUHvmiWww19s95bE4c%2BJKKlf1uHhUt4b7qUi6JsHar2%2BjJ7u5AC5ULjqFw8LNxsg3S3ZfPCd2kWiiVdQYFjCnZ8LtCMEQKlsV06AXjrc1YzujBwZmlZVOZfs2iD%2FMY1wjhZLFZtGhg%2FHcsUUVlazQI4BemoQtnZHLMnP%2FAWUREHnWjywx%2FwJ%2FMB1SBiXPERvhRnyDQhH60u1RIUOzon5gDrCEMdpHWYoj2iq9R1dUwkeqIygY6pgHGsUDwi9vx1NGwvYcAPxLpqaiEIusrsBEEMR7QYAuaJx%2FkV0bofQzcmI7q92mpbbHQ3XdoVOACrhYztFVdgYPqYBbBHNuxd9cNCtHA0quJ8Rxn1uS0O6tWJWClNpWcilmrqLncKxTGlWRNEm8gA6barIS8kCR7L3f1kGWkFO%2BcdkoDssBuKobSIEZ0UGirpIcuc8%2By88Fe6K%2Fs7QArp8xSrqjsdrg4&X-Amz-Signature=9a66ab6b10575679178253979449bd4804d066c479e377c97e6f16aff09ccbb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664744MM5Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICl08tMoaFM7Szv6jTN4YNRmgm%2Bs9psC9smfvsv%2Bqh0DAiAvZfc856DWE0m1oio6qdaggd7Ak4C65CABN0547pPjOir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMavBnhsZ84ZkdqrEkKtwDwvdd1qk%2FITRnul%2B1wGl1UXJOV%2FrojWj4BtJq7W%2F715BkSgs2BFhj%2BEhygaBmoXdV8qVkdqUvB8Vjd8tkoXREQIbSATP7vIRBjKm%2BJm8rwAjGyQiraadAX2%2FaAVnCTGNwlIIL0LZBz4%2ByCoZmpgRHFNnf%2BuEE6KLIWe9TPLlP%2FJLAdcKI0oCfjURNN0W9KtJcsL5XHs56HqJ3RNlQtP6sfnw0xnTXB6RXmv90LdBUPrMT%2B%2BN%2B3BCMW91edQmgoD26ub4wNYECpUlfSaX1RXAOcXVrs0KxxXktwIAgs9qPE0xhakNNXsTv3wtq1ijMBrdFDU0Hao8Owy0FP1ZCrrxXZkc%2FWKSy%2BO43ddZ1YcFQfO4cKrHM6I4DImdDq76D29HX1zwTeMDWmr%2BY424CF8gUHvmiWww19s95bE4c%2BJKKlf1uHhUt4b7qUi6JsHar2%2BjJ7u5AC5ULjqFw8LNxsg3S3ZfPCd2kWiiVdQYFjCnZ8LtCMEQKlsV06AXjrc1YzujBwZmlZVOZfs2iD%2FMY1wjhZLFZtGhg%2FHcsUUVlazQI4BemoQtnZHLMnP%2FAWUREHnWjywx%2FwJ%2FMB1SBiXPERvhRnyDQhH60u1RIUOzon5gDrCEMdpHWYoj2iq9R1dUwkeqIygY6pgHGsUDwi9vx1NGwvYcAPxLpqaiEIusrsBEEMR7QYAuaJx%2FkV0bofQzcmI7q92mpbbHQ3XdoVOACrhYztFVdgYPqYBbBHNuxd9cNCtHA0quJ8Rxn1uS0O6tWJWClNpWcilmrqLncKxTGlWRNEm8gA6barIS8kCR7L3f1kGWkFO%2BcdkoDssBuKobSIEZ0UGirpIcuc8%2By88Fe6K%2Fs7QArp8xSrqjsdrg4&X-Amz-Signature=2abd22b336211030ca966645511c7303de3295b224b7a7aa137e6aed79cec844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

