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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSO3NLG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNPEmfhls4IZveLiXNxsGHyJ6LJfqTEAnplB3mayTq8AIhAKImf3RDI5zYZ0TGfUYpM6mbILALPgfXMDziJDKGqiYsKv8DCHkQABoMNjM3NDIzMTgzODA1Igy1NHVEzOhnovGTQj8q3ANhiVLH1pMAIHFW574kaUWLFoV8xSt%2BdSSgg2clQdMNq0TVLPq0NlCO4%2B3%2F56kUCthax%2Bb1vYikjoWHHRJM1EPrRKRhdt0QqtPb0I9nwLBvXCvIMRCaklZkkQq0Xsb0WVhHi5bAF7gbrKOfhKOD5YS8OEgN%2BSovlEMp6iDodVpCsnzb7qxX7ol7460mqwm3%2FUayAAFr%2FC%2F4lOMvlNLarwD3FBlv4OpfBPAc4GUZHqddLX0nWyF3j%2F0mzSpCb%2FucY0v1%2BfVWwK51yCTOnUhNJA9opGRi10OmA8TW8PPEvhzLq3zOByMzYww6Qd0fOmAEMRx%2FD01qvZX387KTT%2FMtLRuwpRdIogpGcu0LoJ07JpIPttwwGaTsekX%2B3ufbqQafrz2HK6UayruyIy12q%2BlldEfmPaq9NnpM2hW9WXhbwl5yxK325sjiXyaweWRxn3SXKOESeHKwnk%2B0pIsqeHSEA%2BNEmSUQKBc3hINN3%2FmYzquc6rYHHZB211VcDlmHv6xPEoMjvDwcvR%2Fa3ZDp5VfwZjbMKjuvX7QyS7lXz2IlLunAbjZto5h5fLAGe9RuBSmOLE%2Bwo5W3q8fExomEBwqottUCXPxwpr3hkdMfV3P1kz6SmLh7lc3wKX%2BgZ7lQ0DCsuInKBjqkAQ11uzKuPcVkALjvWEGm3NUs%2F1EDiRhZg1k%2Fms4F9MxgomSIX%2F6kwrj%2BgoiqGnR2vHC1NS59QjmEifIfAX662pK%2BPhv5U3Wkk7eTVLTlU445FOpa1qgraWRP%2B8dhf%2Fcd%2BpY%2F7zTBMkNzMSWBmqOmEdb%2BKEWflqztkLB2lpH9leeWmGQdG4WEpy6CEZsjNTmRCAagble5jrN9UuFmBvChUryirUGI&X-Amz-Signature=f627ad51107f1e80516786834eff13bdc19c5d322bdd06e755f11e362c625b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSO3NLG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNPEmfhls4IZveLiXNxsGHyJ6LJfqTEAnplB3mayTq8AIhAKImf3RDI5zYZ0TGfUYpM6mbILALPgfXMDziJDKGqiYsKv8DCHkQABoMNjM3NDIzMTgzODA1Igy1NHVEzOhnovGTQj8q3ANhiVLH1pMAIHFW574kaUWLFoV8xSt%2BdSSgg2clQdMNq0TVLPq0NlCO4%2B3%2F56kUCthax%2Bb1vYikjoWHHRJM1EPrRKRhdt0QqtPb0I9nwLBvXCvIMRCaklZkkQq0Xsb0WVhHi5bAF7gbrKOfhKOD5YS8OEgN%2BSovlEMp6iDodVpCsnzb7qxX7ol7460mqwm3%2FUayAAFr%2FC%2F4lOMvlNLarwD3FBlv4OpfBPAc4GUZHqddLX0nWyF3j%2F0mzSpCb%2FucY0v1%2BfVWwK51yCTOnUhNJA9opGRi10OmA8TW8PPEvhzLq3zOByMzYww6Qd0fOmAEMRx%2FD01qvZX387KTT%2FMtLRuwpRdIogpGcu0LoJ07JpIPttwwGaTsekX%2B3ufbqQafrz2HK6UayruyIy12q%2BlldEfmPaq9NnpM2hW9WXhbwl5yxK325sjiXyaweWRxn3SXKOESeHKwnk%2B0pIsqeHSEA%2BNEmSUQKBc3hINN3%2FmYzquc6rYHHZB211VcDlmHv6xPEoMjvDwcvR%2Fa3ZDp5VfwZjbMKjuvX7QyS7lXz2IlLunAbjZto5h5fLAGe9RuBSmOLE%2Bwo5W3q8fExomEBwqottUCXPxwpr3hkdMfV3P1kz6SmLh7lc3wKX%2BgZ7lQ0DCsuInKBjqkAQ11uzKuPcVkALjvWEGm3NUs%2F1EDiRhZg1k%2Fms4F9MxgomSIX%2F6kwrj%2BgoiqGnR2vHC1NS59QjmEifIfAX662pK%2BPhv5U3Wkk7eTVLTlU445FOpa1qgraWRP%2B8dhf%2Fcd%2BpY%2F7zTBMkNzMSWBmqOmEdb%2BKEWflqztkLB2lpH9leeWmGQdG4WEpy6CEZsjNTmRCAagble5jrN9UuFmBvChUryirUGI&X-Amz-Signature=71352f5d905632c691cb09310e477751969f8c69ff975d3c8d8b7047ee9ba705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

