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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICMAN5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6nZy4lTpHTLvR3Q%2FyJDuRjBKRQH1LRSHlQHU9HCymBwIhAPViBeNMtnkb2gxwj1A%2FfwrRUDDGO214m9MyGCCnQ%2FhsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWeu817ZcvXt1rJ9Qq3APbBQRnQTNCcPY29P4pvFAP8CYzU8b2xm7zn%2BRO4a7669SjGyGgfZp%2FqL4xwa5h8PvPei2tnYO6szuGDSYhRwEozNIt1uA9dNeCXnKrrb5vP1KuxspdEO%2BmX9Bp2lh5IWA%2FJZckmDK8768iPEolZLhNBFkF0zvRwaD3Hh8sGM2dAuPe8PeExOw%2BLQ5Z4%2B7YVlA3eD%2FTeMw0xDQv2chDmhXQSGAIKb0q37N3IlYVrzUCefgeBLvcPnJiTU2UBBjvcSGGRYYfI6PeKB3QCBhgktrXT8Kv5G2G3NwXa9DFUJ0S2Dk7yzdCzFmqltlojtvz2Z9QQHuPrCF9J3w0noU1TmyqQto2oPbPsTRM30QuxR90ihB2TKwrpxdAVpqLch%2BX6Q10miH8x6kpuCPbpI7UP7x%2F2Zz8qpb6YuK0rrsR6amurV365t9uMPgcr7SbaSmf7kTqoNEdj4gjLEClCpN0Ap48ZDd4Li%2FoWKP4Zg1lUKHPNQ4JoQd9SgT4nZy8dTZutmUCqMX2RXQrsMuav1%2FG8PAr95jhbbqQpcJj2p6rfAKDB%2FUvh%2FAYHpYBh7qElGQuE9jn1tSvI69AzfbC0xo2Yz7IMESdhM6ql5DyLfoF1FFmV5lvu%2F8nhEZw7%2Fx0CzCBn4vKBjqkAWNmEvadGdOtb4oYzIXMbORErWhEJGSJt%2BQ8ABeg5DfwoRUnveH8jgVoa9yQf9VazWR62lWcmzy1E22rX%2FV4RIHBKxvBbx6jSbsjkUeYVIIfIWdvxPIHpkulEo87awjOqgznOFinNaGjUz7%2FRd2tebpiKkH3Vjctt9XI1UwNg7S1qRh4Og1Cw6ZAk5zPFBsZNATVmRPGd2mu8iny0o4ysAopn%2BQA&X-Amz-Signature=aefcccf2f622f15001d1adc36fa56a47e5aa95a18e163a2ad27a0ebc00f50dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICMAN5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6nZy4lTpHTLvR3Q%2FyJDuRjBKRQH1LRSHlQHU9HCymBwIhAPViBeNMtnkb2gxwj1A%2FfwrRUDDGO214m9MyGCCnQ%2FhsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWeu817ZcvXt1rJ9Qq3APbBQRnQTNCcPY29P4pvFAP8CYzU8b2xm7zn%2BRO4a7669SjGyGgfZp%2FqL4xwa5h8PvPei2tnYO6szuGDSYhRwEozNIt1uA9dNeCXnKrrb5vP1KuxspdEO%2BmX9Bp2lh5IWA%2FJZckmDK8768iPEolZLhNBFkF0zvRwaD3Hh8sGM2dAuPe8PeExOw%2BLQ5Z4%2B7YVlA3eD%2FTeMw0xDQv2chDmhXQSGAIKb0q37N3IlYVrzUCefgeBLvcPnJiTU2UBBjvcSGGRYYfI6PeKB3QCBhgktrXT8Kv5G2G3NwXa9DFUJ0S2Dk7yzdCzFmqltlojtvz2Z9QQHuPrCF9J3w0noU1TmyqQto2oPbPsTRM30QuxR90ihB2TKwrpxdAVpqLch%2BX6Q10miH8x6kpuCPbpI7UP7x%2F2Zz8qpb6YuK0rrsR6amurV365t9uMPgcr7SbaSmf7kTqoNEdj4gjLEClCpN0Ap48ZDd4Li%2FoWKP4Zg1lUKHPNQ4JoQd9SgT4nZy8dTZutmUCqMX2RXQrsMuav1%2FG8PAr95jhbbqQpcJj2p6rfAKDB%2FUvh%2FAYHpYBh7qElGQuE9jn1tSvI69AzfbC0xo2Yz7IMESdhM6ql5DyLfoF1FFmV5lvu%2F8nhEZw7%2Fx0CzCBn4vKBjqkAWNmEvadGdOtb4oYzIXMbORErWhEJGSJt%2BQ8ABeg5DfwoRUnveH8jgVoa9yQf9VazWR62lWcmzy1E22rX%2FV4RIHBKxvBbx6jSbsjkUeYVIIfIWdvxPIHpkulEo87awjOqgznOFinNaGjUz7%2FRd2tebpiKkH3Vjctt9XI1UwNg7S1qRh4Og1Cw6ZAk5zPFBsZNATVmRPGd2mu8iny0o4ysAopn%2BQA&X-Amz-Signature=31c315f915edbf252e12ba632f84f9c782760d24ea5a9cc6a05dfe0b88a81582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

