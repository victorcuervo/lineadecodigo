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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CSGMBM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFFUSWDJ8CQQmzn%2FvuKKvfb45TnmPgTPKFWlXL%2Bv%2BfcAiB7206vLaLJ2elqYJfVqc%2FT9UJHaYBvaEe2g%2BwgIhwWzCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMieyEdBqct6Zk7%2BLMKtwDs%2FvOKbL7R8RsH%2B5ozDxK3sOKCizlIXUKRSMaSM6A0I8ZIBoOm9KWzsfr4FUgzBihfcdu0A55%2BcRHURGW2CZWLg1lCe39zoSi%2FbpV7PUtqNiNOmyKFCcLtIcxVaz9XJffLvY3odfLkdPWy6BPb%2FK3mLWM3Lu%2FMn%2FIMj3rNpZdHT%2FjL7BG3sjaQlo4msNdofM37oiYXM1MhAfyhvTCouLZurG%2FckWaOpuVbyzwgUY3FwHaPeRtRxGjAmK0LOfgDqYrsEbscME9Nvdtuda%2Fho5duhvX3XoPOoCZYoyzCDyaYlJ4D%2BRCO3gg35eNLApZ5Id4a3XAWmZLm8ir1ETILBaKyMLlWFCaEGrU%2BcuG4WL9FqMTqGyVhXc2oCBfTP75tv79fnV%2FK7ZqayrKr2UfA6KnrpPPnAe9xMWJCUR4DeFKEoEkBlRV8C4tphAvBUu%2BsCBkTDYyAk3HvSf%2BNjKfphQKQHf3ftlWlJW5NWB0zGdn972mD45mqhnp%2BmPTbybloxuibxhzh%2FebitD%2BtEO5H2gVNOXRO42Zz4GCsHBptZwv3RsaLfQTjFi5bgKZ11i4DLv2kWPyhfTGLcMD4LKO4q7C8yXF3luwSohbcHc5gGpO4uAL%2FRCutgrUICMVID4wjuqIygY6pgHdvjp19AognlTQZlq56ZWBc4nVGHGZBFUkkg4ifssLRQFqDl7OokMu1xJP7P%2FWKt8gCTwuQ85141lCTQMbHEUmmAAX%2FvdfQE8CQ9owKvGDYeJkNxMbo3zp9YMNfKScm%2FAZ7mu9vezv5SCUa1Tj6p0v3EdHr%2FcleJ6J%2BAk5VJ964wzIYYZkA7yrQ23JzLrWCJkJYOOrpINvVoTD9A7iv7%2BzdMnEyfhk&X-Amz-Signature=880f7c8d24f5f3ecd489eff515ec8ea5091c4c4b857d431d938ced88c75bd409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CSGMBM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFFUSWDJ8CQQmzn%2FvuKKvfb45TnmPgTPKFWlXL%2Bv%2BfcAiB7206vLaLJ2elqYJfVqc%2FT9UJHaYBvaEe2g%2BwgIhwWzCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMieyEdBqct6Zk7%2BLMKtwDs%2FvOKbL7R8RsH%2B5ozDxK3sOKCizlIXUKRSMaSM6A0I8ZIBoOm9KWzsfr4FUgzBihfcdu0A55%2BcRHURGW2CZWLg1lCe39zoSi%2FbpV7PUtqNiNOmyKFCcLtIcxVaz9XJffLvY3odfLkdPWy6BPb%2FK3mLWM3Lu%2FMn%2FIMj3rNpZdHT%2FjL7BG3sjaQlo4msNdofM37oiYXM1MhAfyhvTCouLZurG%2FckWaOpuVbyzwgUY3FwHaPeRtRxGjAmK0LOfgDqYrsEbscME9Nvdtuda%2Fho5duhvX3XoPOoCZYoyzCDyaYlJ4D%2BRCO3gg35eNLApZ5Id4a3XAWmZLm8ir1ETILBaKyMLlWFCaEGrU%2BcuG4WL9FqMTqGyVhXc2oCBfTP75tv79fnV%2FK7ZqayrKr2UfA6KnrpPPnAe9xMWJCUR4DeFKEoEkBlRV8C4tphAvBUu%2BsCBkTDYyAk3HvSf%2BNjKfphQKQHf3ftlWlJW5NWB0zGdn972mD45mqhnp%2BmPTbybloxuibxhzh%2FebitD%2BtEO5H2gVNOXRO42Zz4GCsHBptZwv3RsaLfQTjFi5bgKZ11i4DLv2kWPyhfTGLcMD4LKO4q7C8yXF3luwSohbcHc5gGpO4uAL%2FRCutgrUICMVID4wjuqIygY6pgHdvjp19AognlTQZlq56ZWBc4nVGHGZBFUkkg4ifssLRQFqDl7OokMu1xJP7P%2FWKt8gCTwuQ85141lCTQMbHEUmmAAX%2FvdfQE8CQ9owKvGDYeJkNxMbo3zp9YMNfKScm%2FAZ7mu9vezv5SCUa1Tj6p0v3EdHr%2FcleJ6J%2BAk5VJ964wzIYYZkA7yrQ23JzLrWCJkJYOOrpINvVoTD9A7iv7%2BzdMnEyfhk&X-Amz-Signature=a7172696bcf1dd0b4116cc70cb60e69ce69f904008f08fbc91733b76e3e577d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

