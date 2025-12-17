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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BN6LKV2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3pjywGepxUloTeWRw1mmzb%2B%2Ffk3qgbfBM7sg5jdyV6AiBDFaKW19ANSXqllKVEI16UzJaI7XUy15VqulA8IdnFLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMTExS33x9GirVYZmuKtwDVs09eH8dqFOGqu%2B%2BFM%2F2%2Fq8OyKN7VphMe4iARpE7oa9bxELEr3lYYLQedk1vvrfKw9waItCQhsFhM8zsEIqDAcVfU7L06fTT1%2FSOL%2FQEGd5Uvzfv%2BArVm%2BqMTNsLG%2FbacKjGOPgb4SUYi3vUgEa8DXbRXS4vqR8Ep29SisyQq6HUR%2F1I3lBuDO3rkRhcZXu3K4UydWjb0%2FY1xY6ibhPndhybnd8hC3g01Kcl4NMhP9GzIKdb75kL8i1w7wSjbH0Pn7aBiX4swv7TPHotfmy3h1qX6JK6C020H5%2BYUIQJQ8gy0VFXf06xrc0ZkPEKClMhQ%2BF1gd%2Bvcz3DMm3KlvZe0RCQDmDB7xIxPKhHsDhofJDRH7t2sr%2FhZHXRyJxAxnrPxH8iIvBzoLa%2FmGKeslIV42SVs93xv0EwXtasxWdSEywbUvdQDTy%2FMhXxkJt5u%2BdeWz7PfPNaEw5JJBxQPgYC6NDIT9T3OQe%2FdBl2N%2BUpk5%2BPTbzdFNu4%2BUX%2FU8quzdshcdpDDLfxTx8%2FDQO8CVDWj4FJ%2FTgAhfVUyon%2F7MKJAS8rWyvEgt3mAaB6LjCPnTyELm%2Bjg%2BekKmOmWFpTSb9iAgAzty%2BIj39yUJAIFAw5%2BrhYSDalIV52VpLo6yIwkM%2BIygY6pgFPAdzwa07Oezc3sangT4AJxiJhLOjeqm21dh87ZZUzyGfoUdfpTX4riM2Cmc6zJxefif%2Fo1RdxfaJMf62tCHErDQQuq7zbOsp951EcgvUE6Dz8P8NWYe9jqiau8W7SkQLc1zpt02m9cTrHBL%2Fa%2FnRcZ89sQ%2F0%2BRFyLB6ftiY4RnkNinQ037j9mrcnZOmqyRBSdXcP20DaFR6lbr2ba7J46rfuE85hO&X-Amz-Signature=3364fae70b25f4a137630d78b7f18fec36f467e0b477a29add29c11f3d2ef0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BN6LKV2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3pjywGepxUloTeWRw1mmzb%2B%2Ffk3qgbfBM7sg5jdyV6AiBDFaKW19ANSXqllKVEI16UzJaI7XUy15VqulA8IdnFLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMTExS33x9GirVYZmuKtwDVs09eH8dqFOGqu%2B%2BFM%2F2%2Fq8OyKN7VphMe4iARpE7oa9bxELEr3lYYLQedk1vvrfKw9waItCQhsFhM8zsEIqDAcVfU7L06fTT1%2FSOL%2FQEGd5Uvzfv%2BArVm%2BqMTNsLG%2FbacKjGOPgb4SUYi3vUgEa8DXbRXS4vqR8Ep29SisyQq6HUR%2F1I3lBuDO3rkRhcZXu3K4UydWjb0%2FY1xY6ibhPndhybnd8hC3g01Kcl4NMhP9GzIKdb75kL8i1w7wSjbH0Pn7aBiX4swv7TPHotfmy3h1qX6JK6C020H5%2BYUIQJQ8gy0VFXf06xrc0ZkPEKClMhQ%2BF1gd%2Bvcz3DMm3KlvZe0RCQDmDB7xIxPKhHsDhofJDRH7t2sr%2FhZHXRyJxAxnrPxH8iIvBzoLa%2FmGKeslIV42SVs93xv0EwXtasxWdSEywbUvdQDTy%2FMhXxkJt5u%2BdeWz7PfPNaEw5JJBxQPgYC6NDIT9T3OQe%2FdBl2N%2BUpk5%2BPTbzdFNu4%2BUX%2FU8quzdshcdpDDLfxTx8%2FDQO8CVDWj4FJ%2FTgAhfVUyon%2F7MKJAS8rWyvEgt3mAaB6LjCPnTyELm%2Bjg%2BekKmOmWFpTSb9iAgAzty%2BIj39yUJAIFAw5%2BrhYSDalIV52VpLo6yIwkM%2BIygY6pgFPAdzwa07Oezc3sangT4AJxiJhLOjeqm21dh87ZZUzyGfoUdfpTX4riM2Cmc6zJxefif%2Fo1RdxfaJMf62tCHErDQQuq7zbOsp951EcgvUE6Dz8P8NWYe9jqiau8W7SkQLc1zpt02m9cTrHBL%2Fa%2FnRcZ89sQ%2F0%2BRFyLB6ftiY4RnkNinQ037j9mrcnZOmqyRBSdXcP20DaFR6lbr2ba7J46rfuE85hO&X-Amz-Signature=754ea6fba3e7e097189122339903c18dd4d50c9a326042dd9d73bad66271035c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

