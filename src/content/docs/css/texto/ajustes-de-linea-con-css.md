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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVOJXHV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC6ak4FF6lxStXlfCI%2BSUd3fYlMEtJk4agnxO3x963sgIhAMaWWaFRG3VAW8yrZN1dMDBCUKiGrnbNV8S3tKUPiqDsKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkQQztIVPThIeQ4WQq3AOxswzkyl%2FhShKx1LXUTx8PpMNDLUbbURon9FVFQMwLZdxth5Xxtu4WKnXaQE6QMB26uFkq1IVSks2XwNsLfcOqbQhuK9G81e%2FJw9%2FjbsIObXqG1WjrNz%2F7aT1zqj7o5WUqIPLVvX4MGoD3FfzKfhTwoHacvj%2Fy2BqB6SL%2F71fcaf94yTts%2FkkeCyiRJkVtcrKUJ7beTxLxiwEYhSgnuDUvu9tqZp0oqWCUJmmgIf8CX19HIWTA9Vo8XFQ0Osfd8vx44YREEsRU%2B4WvYRtkiKAJA%2BPjphaawQtPCjqUPsv4JGqeUafsEqqsH1n0rLoGIPL%2BHJEThW%2Fnlrx2L9kPvVbFuXnptZO3Yq4omFZPls14%2BYVZB2O%2BVY9qvvI0Jkkv163%2FFwABQH0geSkq%2BxgvY0nMMwgfw1MrdQTPbolRWzYNtISDbmeRODvVoF9i8XUNckcxl08MR2hqP9Xbuf7c4lzHDYPRdeAGXN4mAeZdPJuMIYKsXzjcg4BNwwIyp4CXT%2Bh08vV9TWC%2F93mOlGL78kkalC7sU4UO7f%2Be7QmEn1vFgZG7OsTvcz6zHI0EYb52vNeqyMjOhhwt4mkjJ7%2BvITLep99%2FdMx9PNoImHqmnbPYR2yM8KyVOilb2xoIWjDirYzKBjqkAYIIhTQdTupngUuyKALW13esVCCC1V0SJMEPRRFujlavy3xPwSrcaUW%2BlykHRH8%2BydgEuf9Gg08q6nHtkuKG6FBYe2LHKq9p61%2FdoWNdz9WrSulx%2B%2BoHORpZzEVbtLCCVQxIxsN2V8r6jAth03AG3UHJOw9DcBaSyUWeJinp36vDfjHP2WnJdNQJh2245uGkSpGyVsXxUIfgCuzaqLiGob6M%2B%2Fzk&X-Amz-Signature=b893152ae3f8fb2a974cf240ce0f0a52187ca41cbf212b32bd92a6558c9c2c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVOJXHV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC6ak4FF6lxStXlfCI%2BSUd3fYlMEtJk4agnxO3x963sgIhAMaWWaFRG3VAW8yrZN1dMDBCUKiGrnbNV8S3tKUPiqDsKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkQQztIVPThIeQ4WQq3AOxswzkyl%2FhShKx1LXUTx8PpMNDLUbbURon9FVFQMwLZdxth5Xxtu4WKnXaQE6QMB26uFkq1IVSks2XwNsLfcOqbQhuK9G81e%2FJw9%2FjbsIObXqG1WjrNz%2F7aT1zqj7o5WUqIPLVvX4MGoD3FfzKfhTwoHacvj%2Fy2BqB6SL%2F71fcaf94yTts%2FkkeCyiRJkVtcrKUJ7beTxLxiwEYhSgnuDUvu9tqZp0oqWCUJmmgIf8CX19HIWTA9Vo8XFQ0Osfd8vx44YREEsRU%2B4WvYRtkiKAJA%2BPjphaawQtPCjqUPsv4JGqeUafsEqqsH1n0rLoGIPL%2BHJEThW%2Fnlrx2L9kPvVbFuXnptZO3Yq4omFZPls14%2BYVZB2O%2BVY9qvvI0Jkkv163%2FFwABQH0geSkq%2BxgvY0nMMwgfw1MrdQTPbolRWzYNtISDbmeRODvVoF9i8XUNckcxl08MR2hqP9Xbuf7c4lzHDYPRdeAGXN4mAeZdPJuMIYKsXzjcg4BNwwIyp4CXT%2Bh08vV9TWC%2F93mOlGL78kkalC7sU4UO7f%2Be7QmEn1vFgZG7OsTvcz6zHI0EYb52vNeqyMjOhhwt4mkjJ7%2BvITLep99%2FdMx9PNoImHqmnbPYR2yM8KyVOilb2xoIWjDirYzKBjqkAYIIhTQdTupngUuyKALW13esVCCC1V0SJMEPRRFujlavy3xPwSrcaUW%2BlykHRH8%2BydgEuf9Gg08q6nHtkuKG6FBYe2LHKq9p61%2FdoWNdz9WrSulx%2B%2BoHORpZzEVbtLCCVQxIxsN2V8r6jAth03AG3UHJOw9DcBaSyUWeJinp36vDfjHP2WnJdNQJh2245uGkSpGyVsXxUIfgCuzaqLiGob6M%2B%2Fzk&X-Amz-Signature=5cec0f9142ad578ddd2c3b77beaec1b9c0c47bc3ab7af4225cafd444d4952318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

