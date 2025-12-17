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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGWCRAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FLglVoqgpglx7NlWQzRtj5iuESxveFZXu5Oj%2BPIoYhAiEAiPUrXMmosKFkK4E1j6HVw7dZHddAbm5Si%2B7Xa8b4%2Fzoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCzgx38qIij4q0cbjCrcAymWWsUV3boSNawcEAxLLfiEqW4EdJFOnAUrshXdbd4sDpQBKRwwvxsC8pCM9WGRQrkCzY%2FWw9Ev3NtsCU5D1Q3hXxgjIo8r%2BRRDlsGIo3N48IzkAMSCez8yja5f7RQIDD6VBLR8CC%2BshyN9L2ISB4H%2F9EzQtpiB60vSuHJW5QsqgXBicXw%2B9CDbmhDSg%2BzxTFUQrjJiDog3kmFfc48nb9qBrZjIH%2FLw9IfXT9K8tSbeZrvsEgy3bAMI6VBNFtACZ7hR4D%2B8UKYwSjzHpX0HH88c16mcF6vEgfNKMkeF3B5nvu17P1ziL80k2%2B%2BAZLrjxOLujYnQst1xnsM9p7RwFateyOcc7cIm3RASuJ38L2ipveeQzVBB96FWHVjaAP15LPgGsq5nWFIpjM1fb0miHNVVW2PLlKJ5hxBm08w3WYzzG4nrnsy3an4HdrfX2kFxjl79EjKoIalvFHU5ii41oKfi%2FahlA9QBCZmrnn9ya8UvY5IltLhmYBr%2BvqLycGIw%2BegmaZ38pUgMzbpBtWwbNOtrbtMozjlAnVBCfvCLaAR6L1XtNkREVtgJE9ZEZP4RdicMxN4ajlrle%2F48TQH%2FW2tbs42MY1NzQEH2aPZeBVxm3npxfbtsUZ6lOoskMJGWiMoGOqUB97%2Fgqi2KMzFS%2BImgCZxF3YTaLajOp51L4yOFPBSedw5taHLW29us%2BEexzb0L0O1h%2FFjT7Ppnpp1crxo5RxqhnTwYiaw37aJLpUWtR26Is7ANMZq29%2F4okSZAnRBYXozLSSDE0kUPDtlTKUlTwybasdAgDFps%2B2Iw8pWNWl8tqtXaGIi0mvXBPxowneq92SuB7WkCJasNhZNMQvLh%2F7o%2F1U8Pcy1d&X-Amz-Signature=226b53ba5bea3be884f67bcfd08a7a6611fe359d22c85e8f903445dc942e943c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGWCRAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FLglVoqgpglx7NlWQzRtj5iuESxveFZXu5Oj%2BPIoYhAiEAiPUrXMmosKFkK4E1j6HVw7dZHddAbm5Si%2B7Xa8b4%2Fzoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCzgx38qIij4q0cbjCrcAymWWsUV3boSNawcEAxLLfiEqW4EdJFOnAUrshXdbd4sDpQBKRwwvxsC8pCM9WGRQrkCzY%2FWw9Ev3NtsCU5D1Q3hXxgjIo8r%2BRRDlsGIo3N48IzkAMSCez8yja5f7RQIDD6VBLR8CC%2BshyN9L2ISB4H%2F9EzQtpiB60vSuHJW5QsqgXBicXw%2B9CDbmhDSg%2BzxTFUQrjJiDog3kmFfc48nb9qBrZjIH%2FLw9IfXT9K8tSbeZrvsEgy3bAMI6VBNFtACZ7hR4D%2B8UKYwSjzHpX0HH88c16mcF6vEgfNKMkeF3B5nvu17P1ziL80k2%2B%2BAZLrjxOLujYnQst1xnsM9p7RwFateyOcc7cIm3RASuJ38L2ipveeQzVBB96FWHVjaAP15LPgGsq5nWFIpjM1fb0miHNVVW2PLlKJ5hxBm08w3WYzzG4nrnsy3an4HdrfX2kFxjl79EjKoIalvFHU5ii41oKfi%2FahlA9QBCZmrnn9ya8UvY5IltLhmYBr%2BvqLycGIw%2BegmaZ38pUgMzbpBtWwbNOtrbtMozjlAnVBCfvCLaAR6L1XtNkREVtgJE9ZEZP4RdicMxN4ajlrle%2F48TQH%2FW2tbs42MY1NzQEH2aPZeBVxm3npxfbtsUZ6lOoskMJGWiMoGOqUB97%2Fgqi2KMzFS%2BImgCZxF3YTaLajOp51L4yOFPBSedw5taHLW29us%2BEexzb0L0O1h%2FFjT7Ppnpp1crxo5RxqhnTwYiaw37aJLpUWtR26Is7ANMZq29%2F4okSZAnRBYXozLSSDE0kUPDtlTKUlTwybasdAgDFps%2B2Iw8pWNWl8tqtXaGIi0mvXBPxowneq92SuB7WkCJasNhZNMQvLh%2F7o%2F1U8Pcy1d&X-Amz-Signature=bba157dfb8c691df8380307cea6b349f2c8df7509c34517a28f41acb7686e11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

