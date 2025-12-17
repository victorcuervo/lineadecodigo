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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EANVV5A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ4jk%2BhIFTBf%2B9cWVSD6YOLIIzKDL56YvnAy3TrYE87wIhAOb2g8unI%2BMVHDLBeXOv0LbnA16D9gOdxjV%2BbYfHIvC%2BKv8DCH8QABoMNjM3NDIzMTgzODA1IgyuKHJPMBF%2F2maw%2FP8q3AP9hwV%2F5ZrgkZfoHrZzeNv3V2k0etZBCZOqZGImhs%2BH6nwudLqAs2LVuIAMX7RrN%2Btn8omwnrjsui42DO2HBhh6eZPubSTSA95d7EVk1RJ0PTEW%2BaBAzC%2FZbTAsenTrEvFh7%2FJId7o05ehsHCAydOiD1ZlkKkK7pehsU8iqy%2Bw4QvwtgO152uz%2BACeOyGaYy%2FnAOYVDJH2LfYndAvIxPqmtQWaYifRH8csFVxjpvYeIAh3rL6vv3eW%2BUnOUpfNbzyrxw0J7%2BJN75laoFTXQxMSmNKMLigjDc0gTbGsT2EK3iYxcLg0KCQB%2BHtFEckDJS3fUKXdbrRfmlQ90yPCKPXuSGpzz0bdYYhpzhRy1Z8kVmv2yUpc0CpKQPlrkui7D8wfkg2gWw1lsl9GvU%2Btf1DEDuiM6roy%2F%2BlVOOz7e%2BDVlobAiepSDHN9wkA79MWhL3Z1dXaMLviyARPxrQ2HuQi6Gw3z3BX0Ak8u6RihLbmvbhLw5nfN65tEm7SxSi0TKVecBLrP7Lv%2BQIOf2QOHej95VWFhrE9ZZJciVbamAkVXPhnLVhhol%2FLwAj7vTlf95rcHAMBWtyoe%2BgOYCRYHVzVUgEtjbYFsUrZS1Bhzqf8KrRl4X9AuMZSfNm7A%2B3TDf4YrKBjqkAViBDpEtFHIiy72c%2BE8xHeYNo7ycTm0gGhdWDw6lFSiCmbPqExDKaxPpw2TYm2S8b7Zanh6P1oJCczYxhgyw27%2FrBRUIftYu%2BQ6tTMqw6zCNzmeI6GBZcMbHTxAioVrN9PAFf%2BYgAXHlsC0oHyp%2B9%2B6ulLW5Yic3e1TQFVkMXdfoCgJsu7tRJQ0GhIIxTS1s1jCFn8wElPpO0d0IaW4G8D73RpOW&X-Amz-Signature=577cd2ffefa6eafd27562f3038c750b07752baf738b55bf63781fa72ca990994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EANVV5A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ4jk%2BhIFTBf%2B9cWVSD6YOLIIzKDL56YvnAy3TrYE87wIhAOb2g8unI%2BMVHDLBeXOv0LbnA16D9gOdxjV%2BbYfHIvC%2BKv8DCH8QABoMNjM3NDIzMTgzODA1IgyuKHJPMBF%2F2maw%2FP8q3AP9hwV%2F5ZrgkZfoHrZzeNv3V2k0etZBCZOqZGImhs%2BH6nwudLqAs2LVuIAMX7RrN%2Btn8omwnrjsui42DO2HBhh6eZPubSTSA95d7EVk1RJ0PTEW%2BaBAzC%2FZbTAsenTrEvFh7%2FJId7o05ehsHCAydOiD1ZlkKkK7pehsU8iqy%2Bw4QvwtgO152uz%2BACeOyGaYy%2FnAOYVDJH2LfYndAvIxPqmtQWaYifRH8csFVxjpvYeIAh3rL6vv3eW%2BUnOUpfNbzyrxw0J7%2BJN75laoFTXQxMSmNKMLigjDc0gTbGsT2EK3iYxcLg0KCQB%2BHtFEckDJS3fUKXdbrRfmlQ90yPCKPXuSGpzz0bdYYhpzhRy1Z8kVmv2yUpc0CpKQPlrkui7D8wfkg2gWw1lsl9GvU%2Btf1DEDuiM6roy%2F%2BlVOOz7e%2BDVlobAiepSDHN9wkA79MWhL3Z1dXaMLviyARPxrQ2HuQi6Gw3z3BX0Ak8u6RihLbmvbhLw5nfN65tEm7SxSi0TKVecBLrP7Lv%2BQIOf2QOHej95VWFhrE9ZZJciVbamAkVXPhnLVhhol%2FLwAj7vTlf95rcHAMBWtyoe%2BgOYCRYHVzVUgEtjbYFsUrZS1Bhzqf8KrRl4X9AuMZSfNm7A%2B3TDf4YrKBjqkAViBDpEtFHIiy72c%2BE8xHeYNo7ycTm0gGhdWDw6lFSiCmbPqExDKaxPpw2TYm2S8b7Zanh6P1oJCczYxhgyw27%2FrBRUIftYu%2BQ6tTMqw6zCNzmeI6GBZcMbHTxAioVrN9PAFf%2BYgAXHlsC0oHyp%2B9%2B6ulLW5Yic3e1TQFVkMXdfoCgJsu7tRJQ0GhIIxTS1s1jCFn8wElPpO0d0IaW4G8D73RpOW&X-Amz-Signature=3e90f7c6e96880309736c3b1c04842c76f5f20b2b58473eaf3b56b27a5f559e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

