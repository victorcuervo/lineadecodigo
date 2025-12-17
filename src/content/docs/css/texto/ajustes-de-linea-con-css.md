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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS2AGPGE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Wd9vRQtmXzMolrOaxAycI%2FcV6iFzezt2JZ74vg6hbAIhAJrnGFkUsm%2BxKpGKWQNdUT7o57vylzE2jpNQMGqXN63EKv8DCH0QABoMNjM3NDIzMTgzODA1IgxHRGF18%2FPwgUSb5WAq3AMGm126rymISHHmhZefaN%2BAMu3tal5ljOv7J4UuTgBH1NjknkbvEgf3B%2FMvMuhstguABPo6sDgsfBswkdVYOMbkOtQYkfNeevgE2Y7yFfOZPMnomsZjXtJrFLARzqkP2kL3nBhZ8ZpA7sJ81mzwWg7tgQWxqH3Iz6CrLtv6XUPjcEI8HaMF5DDjYT91frQ1D2me5uloS%2Fka4wakRGArClcLOujEVJGdy8tMyK17WSi2RvYn9dJgp6ohlYO7t2WSsfih3hF%2BAAj%2B6YeVostcgcnMswYcDjozzuqW96B90CM6ZwIwdmnevCemlt3Iioszq8F6G%2F6p6TM%2BahRFVGV6n0EGIE62vm%2Ft9%2BJcJOrYnWVVxkSqJic3nBqJ%2BgRJM2uarr9fDEgGt1WhIRYFotp6be0eTb2KGVLNaUY5bigb7dbhpg%2FaEPMXMEGRtpf2iqc1elIA8jkluz7OEz0ZwJqKB5ZytHo9MSEjfEPvgsj9AK8vGnasZ9I4dIEIXf%2BaXWcJF4AyEAZwkxwfbzjk6DXCXeHmI1pt6qux7thCltB5xgug4GNwb5QIsFSQbFPn%2F3njbr%2BfzLMqbS2QWewssEN35eodDe7UYUrOh00doMWO4clQr0AxYOpX9cI2FowlQzCXqorKBjqkAXEXoo0R68ei%2Bdfh6lezauRF0kHgJ2%2F8HelicPVsduhtfgtrSZAn326hg84eYt5LmCzpJyeLGQTlSs4b2bnMTr04fDCT2ofb8UDJkT4cIgOUprrrbdgFV2b%2BTT15AEUPHiXH3YN5oDwR21dmN0iGGfkKlW0VSNVdI%2B9HXD6fip6Qm7OeI7p0j6JZjYih0X01yI8ISti6k62hGN9UwXfrOR%2FdCCe3&X-Amz-Signature=2980b3adf735acacca182b81adc169e152273d918077e2aa95cc8050f8c7f466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS2AGPGE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Wd9vRQtmXzMolrOaxAycI%2FcV6iFzezt2JZ74vg6hbAIhAJrnGFkUsm%2BxKpGKWQNdUT7o57vylzE2jpNQMGqXN63EKv8DCH0QABoMNjM3NDIzMTgzODA1IgxHRGF18%2FPwgUSb5WAq3AMGm126rymISHHmhZefaN%2BAMu3tal5ljOv7J4UuTgBH1NjknkbvEgf3B%2FMvMuhstguABPo6sDgsfBswkdVYOMbkOtQYkfNeevgE2Y7yFfOZPMnomsZjXtJrFLARzqkP2kL3nBhZ8ZpA7sJ81mzwWg7tgQWxqH3Iz6CrLtv6XUPjcEI8HaMF5DDjYT91frQ1D2me5uloS%2Fka4wakRGArClcLOujEVJGdy8tMyK17WSi2RvYn9dJgp6ohlYO7t2WSsfih3hF%2BAAj%2B6YeVostcgcnMswYcDjozzuqW96B90CM6ZwIwdmnevCemlt3Iioszq8F6G%2F6p6TM%2BahRFVGV6n0EGIE62vm%2Ft9%2BJcJOrYnWVVxkSqJic3nBqJ%2BgRJM2uarr9fDEgGt1WhIRYFotp6be0eTb2KGVLNaUY5bigb7dbhpg%2FaEPMXMEGRtpf2iqc1elIA8jkluz7OEz0ZwJqKB5ZytHo9MSEjfEPvgsj9AK8vGnasZ9I4dIEIXf%2BaXWcJF4AyEAZwkxwfbzjk6DXCXeHmI1pt6qux7thCltB5xgug4GNwb5QIsFSQbFPn%2F3njbr%2BfzLMqbS2QWewssEN35eodDe7UYUrOh00doMWO4clQr0AxYOpX9cI2FowlQzCXqorKBjqkAXEXoo0R68ei%2Bdfh6lezauRF0kHgJ2%2F8HelicPVsduhtfgtrSZAn326hg84eYt5LmCzpJyeLGQTlSs4b2bnMTr04fDCT2ofb8UDJkT4cIgOUprrrbdgFV2b%2BTT15AEUPHiXH3YN5oDwR21dmN0iGGfkKlW0VSNVdI%2B9HXD6fip6Qm7OeI7p0j6JZjYih0X01yI8ISti6k62hGN9UwXfrOR%2FdCCe3&X-Amz-Signature=a44dcb976f87184be28a771bf34626229e417c44453587a76f0d7835528ee64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

