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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZU4XIQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1tpcd1dfeRFjrAMS1Zfs5NpEv5vIGweP4iSxlx5lpLAiEA4vg6ZXZ5oXqxHu74yPlf1GzDdr%2FXfzGkG%2FDrA0i5PscqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpx03tiY6ayLu6UPCrcA4H0yk22xZ58s5sbiTNRKtA9jssKJ1FGxjQLcwKpl7U3YBRaXlCQRXhUbwd5jzkLgXUU5tcb%2FKOuPwPiHOqf8iKNaOIw2rVUfRBc83XbsHvMCOulAE8pmjH3cVAp%2BtJGVXwsrmu8nl%2FkyquX6%2BkoNJtMyqrdi%2BdmixPULRoNwbqJ6NIEdMIksoLH0XgsE4CbkiidRdI0Uwf%2FRKLXv4nOY%2F2slIjWPHfWVGAATYaIH5AYrdx8aEmEck0MpTcos4VMLNqflEyGIGuChCBpEl6ltByU2xN4%2BHSdlKTPXSddsv8qzVXtMt%2BCO32YKaUIc%2Bw9GU18WPoPMwhNKiHUMlNr3iM0SbVer%2FMy3nNS1dh9cb%2FE%2FprHlHfWW5fcBqd6%2BWWn6ZjqSGs58rvBL3nI1LEhN7smmKCQX5KVpyiwLkJ9almYkC46Z6tUsIN7jQv6tl4o23bX88zFWUFzDBlY3ZaG5ilxHGPGfMjTs59fo%2B1UemCWpRQOYKBrJJtRJFEJ2jiFqPtthzlTdyaSU5lHT68V1Fq3ANNgheD7TiBipPyl%2F4%2BvLJLFzgxZM%2BTDzEo7Kjm0eJ94x3klMJI7I3bpCm%2B7o7ePNNFD%2B0GTjSfcvCLfKmuqlhYrW%2FItdvaQ%2FJ%2BTMOitjMoGOqUBvDOglBaspuQN8O3tp6u3msYzy3JFiDwKa42SdHvdo1TgqmUUdOzgMcjBylwCG4BukOo9ntYd1Jz4x8FQJ9z9qPSn782zqaAdOFLJ%2BOTRhnWQ8HDpImZa8MJi1Q77fGbPb95jpCkoIt8tv7l113XYRxz43ch%2BcT8gtWFJwYUZpUv5ipt4%2FOSLQsphIxPUd5RA5MlIZjHuYwCY94tpCo%2BU5AikIsDj&X-Amz-Signature=c24d66cce59f2adb3a4a84d23f32da700f1a898f18f46297d41996bcd6b91278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZU4XIQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1tpcd1dfeRFjrAMS1Zfs5NpEv5vIGweP4iSxlx5lpLAiEA4vg6ZXZ5oXqxHu74yPlf1GzDdr%2FXfzGkG%2FDrA0i5PscqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpx03tiY6ayLu6UPCrcA4H0yk22xZ58s5sbiTNRKtA9jssKJ1FGxjQLcwKpl7U3YBRaXlCQRXhUbwd5jzkLgXUU5tcb%2FKOuPwPiHOqf8iKNaOIw2rVUfRBc83XbsHvMCOulAE8pmjH3cVAp%2BtJGVXwsrmu8nl%2FkyquX6%2BkoNJtMyqrdi%2BdmixPULRoNwbqJ6NIEdMIksoLH0XgsE4CbkiidRdI0Uwf%2FRKLXv4nOY%2F2slIjWPHfWVGAATYaIH5AYrdx8aEmEck0MpTcos4VMLNqflEyGIGuChCBpEl6ltByU2xN4%2BHSdlKTPXSddsv8qzVXtMt%2BCO32YKaUIc%2Bw9GU18WPoPMwhNKiHUMlNr3iM0SbVer%2FMy3nNS1dh9cb%2FE%2FprHlHfWW5fcBqd6%2BWWn6ZjqSGs58rvBL3nI1LEhN7smmKCQX5KVpyiwLkJ9almYkC46Z6tUsIN7jQv6tl4o23bX88zFWUFzDBlY3ZaG5ilxHGPGfMjTs59fo%2B1UemCWpRQOYKBrJJtRJFEJ2jiFqPtthzlTdyaSU5lHT68V1Fq3ANNgheD7TiBipPyl%2F4%2BvLJLFzgxZM%2BTDzEo7Kjm0eJ94x3klMJI7I3bpCm%2B7o7ePNNFD%2B0GTjSfcvCLfKmuqlhYrW%2FItdvaQ%2FJ%2BTMOitjMoGOqUBvDOglBaspuQN8O3tp6u3msYzy3JFiDwKa42SdHvdo1TgqmUUdOzgMcjBylwCG4BukOo9ntYd1Jz4x8FQJ9z9qPSn782zqaAdOFLJ%2BOTRhnWQ8HDpImZa8MJi1Q77fGbPb95jpCkoIt8tv7l113XYRxz43ch%2BcT8gtWFJwYUZpUv5ipt4%2FOSLQsphIxPUd5RA5MlIZjHuYwCY94tpCo%2BU5AikIsDj&X-Amz-Signature=4c7be4b18449398dc4e15fc85c76572569befc4bebcd0edeb3f6c80b21dfe0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

