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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIAAHMVM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE38U7uSnf2GkZtJQoUFlJ32SMoVVLKD9ONIq8NJeIw2AiEAtDO2oLEjMSnas7%2B6keMbe4v6OoPyzrs4m73trnF29BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPi6XOykkfC4PxdFPSrcA20c6Bj%2F6TEu%2BOAUmTzgMMVLhCTv8LcZs3O7yuuuAaSZrWY6el7mikNjSY7hnEvy96Z15N7zJOnQRO1mungXJAdIBteBtS4LC0RFsnL3G2usuk3JBzOZFA6hwwvO4SkxauhqjlFHGng8yK2WYq6HDuhRig2XfeHcj%2FmDNIYxu1jn3w8mg%2BjM3bRlE0R%2BbUdWKKGPBe1eu1RoTNeiM875%2BHzeTuW%2F%2F8pTpcG2OjWCwhwtiZH8461jA1RMhfcW5l7dlXOev4KOtg3N0k1qyDTz9Gh5ykbbVzIFydM2pG%2Bsw2oRuYfKKuXUxx3QkIbQH3WCqy5XG16FIS9Bpj8RcM60LQsoy1BoXr1ZTc2a2G%2Fd2380r733DJg%2FycAoD5Ihuad3LDE%2BtBE0DlFXc7jw6uZG%2FcYSVLuPS%2F07PGjiUL3mtVTBtG6vLA%2FdUsCdR0zqM8oXzySFyq317ZvZXnv00yaPcn6knVmrorWjETRApQ%2Boj2b6Yziu8kiYFihGBh3n2ybB1hccrBjvpSKx0%2BZBgMWp63RwACNpyuPd5Vkx3j0zSr8dVmTZpqFdG%2FWKea7ZMRMV9q40zIizasDf%2BAOOuUCtyEY5J8YFmBVrFbP%2BM0Gfdk27F82q%2B1Wq0lgsyVFjMI%2FpiMoGOqUBeYfoOryKK8tWZDorPlrHpd8u5gqKxK8SfX1zy1fwr2YHDIMbJbpqdXud2H2PWXVg%2FWgD1FTdIozJyJm35XGzaoSTy8AwbcAo8ZYqOUYqjuuiz1csE0HPZW%2FBAh%2BSVCr9woEl3M%2FozLgbI9XLXy1WXmDuZLdGC1eGRvNPQ62THV0SKkMy3ZIt5x722fNfa%2F6zxdSfF66jObbqldTv%2FeTfgAGkxHST&X-Amz-Signature=f62ef5f15f766e24b922779a520a02d5519a3501d4a398b3423fa7b0e16a05a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIAAHMVM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE38U7uSnf2GkZtJQoUFlJ32SMoVVLKD9ONIq8NJeIw2AiEAtDO2oLEjMSnas7%2B6keMbe4v6OoPyzrs4m73trnF29BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPi6XOykkfC4PxdFPSrcA20c6Bj%2F6TEu%2BOAUmTzgMMVLhCTv8LcZs3O7yuuuAaSZrWY6el7mikNjSY7hnEvy96Z15N7zJOnQRO1mungXJAdIBteBtS4LC0RFsnL3G2usuk3JBzOZFA6hwwvO4SkxauhqjlFHGng8yK2WYq6HDuhRig2XfeHcj%2FmDNIYxu1jn3w8mg%2BjM3bRlE0R%2BbUdWKKGPBe1eu1RoTNeiM875%2BHzeTuW%2F%2F8pTpcG2OjWCwhwtiZH8461jA1RMhfcW5l7dlXOev4KOtg3N0k1qyDTz9Gh5ykbbVzIFydM2pG%2Bsw2oRuYfKKuXUxx3QkIbQH3WCqy5XG16FIS9Bpj8RcM60LQsoy1BoXr1ZTc2a2G%2Fd2380r733DJg%2FycAoD5Ihuad3LDE%2BtBE0DlFXc7jw6uZG%2FcYSVLuPS%2F07PGjiUL3mtVTBtG6vLA%2FdUsCdR0zqM8oXzySFyq317ZvZXnv00yaPcn6knVmrorWjETRApQ%2Boj2b6Yziu8kiYFihGBh3n2ybB1hccrBjvpSKx0%2BZBgMWp63RwACNpyuPd5Vkx3j0zSr8dVmTZpqFdG%2FWKea7ZMRMV9q40zIizasDf%2BAOOuUCtyEY5J8YFmBVrFbP%2BM0Gfdk27F82q%2B1Wq0lgsyVFjMI%2FpiMoGOqUBeYfoOryKK8tWZDorPlrHpd8u5gqKxK8SfX1zy1fwr2YHDIMbJbpqdXud2H2PWXVg%2FWgD1FTdIozJyJm35XGzaoSTy8AwbcAo8ZYqOUYqjuuiz1csE0HPZW%2FBAh%2BSVCr9woEl3M%2FozLgbI9XLXy1WXmDuZLdGC1eGRvNPQ62THV0SKkMy3ZIt5x722fNfa%2F6zxdSfF66jObbqldTv%2FeTfgAGkxHST&X-Amz-Signature=7f9872029ef101a7bd595c571c9de2fa082d7d1d1d32eee2d63aa3bf67c02173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

