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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFUGDJPV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlhgi07eBmsa8kDpfKVbgNMFk2JUmJvg%2Frb1Ap6eTcigIhALotSHjaIa9sjQqsGsKFPg9BYCfWdnhTG2tgMNHKSoVTKv8DCHkQABoMNjM3NDIzMTgzODA1Igx71yFtI3gpcxC%2FwA4q3AO0sOoDHlxHm8PjIVzWigvirwptb9To7hNyiADnegKyJUwehMQWQx%2BuztFVapBPNSv0tBmkRTJAShGGsK7ZTeQreYbb6XHaHich58cKPFs8WSr%2BSOSImLiWfdaXy24ER6h0TDnlWyo%2BrafV9axhVOv%2Bt%2FTtx3fMagV%2BeNilmHeE8W0EOeIQp0NeMeNM6sZcFCALjoIBYPYzxHJjEkvW7RrmRSOoHQz4TC3JD95toBly1nChhcGfFihExbhxlpX%2Fcwa6pik6NTA30Zf%2F%2BhIUe0mSPSWPU7j1vhV8%2B%2BuSbRRuzwhx2NYVR4Ma7dSlm9rGM8fQSZLFDvrlFUKZLkhV3zescEAjXYItB1%2BJuoWMKqOHRiYVpM6xsdQj6msZ%2FmdNuuSfb2YAyY1CzkexPUQK05BWcSTTpHPZgudehmtYQdXOlIYwzr5rOIVaHusUyvKgnPe0IS5oDI%2BoaeEIdydd2iBSNTsMfy%2FZj4uN%2BmxhzKSGoq%2BMPap7JzC%2B2Va69C%2B8mc%2B2jXHCk35qJldMv6OL1kLzV71FExf0eTugdplJzXjG5eVL%2BegSPPaPKYaP0%2BXgpse355E0K6QA8cH%2FF3AUTRggrP6qt%2FJZM8AIeO%2BW28emZFvtGI5vh9AtO1%2FimTCj0YnKBjqkAUpgdQMe0Wf5kwFpAHBXJjK9gMUYzPkSUs%2F3eoGv9SxWtK0bvnhXJLe%2FuUXa844QWBwzFSF93fKT%2FUv%2BZZpjhL2tP8CiWqtrZqPsVdJqlPhAlLceZe%2BBIwogBy19OEPrvgSdn7NLsNv341DqOZHxQehKw0aR%2F7c%2Bl9bWHL1smVQqdz3zJsL9n3Jd767BOgPkNfEkxc4%2FKs%2BA%2BH1U6Ud7OpVDM78m&X-Amz-Signature=93a947daf141686828e54fea73b33f51b8254087a73a297c432dfc58a76b67f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFUGDJPV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlhgi07eBmsa8kDpfKVbgNMFk2JUmJvg%2Frb1Ap6eTcigIhALotSHjaIa9sjQqsGsKFPg9BYCfWdnhTG2tgMNHKSoVTKv8DCHkQABoMNjM3NDIzMTgzODA1Igx71yFtI3gpcxC%2FwA4q3AO0sOoDHlxHm8PjIVzWigvirwptb9To7hNyiADnegKyJUwehMQWQx%2BuztFVapBPNSv0tBmkRTJAShGGsK7ZTeQreYbb6XHaHich58cKPFs8WSr%2BSOSImLiWfdaXy24ER6h0TDnlWyo%2BrafV9axhVOv%2Bt%2FTtx3fMagV%2BeNilmHeE8W0EOeIQp0NeMeNM6sZcFCALjoIBYPYzxHJjEkvW7RrmRSOoHQz4TC3JD95toBly1nChhcGfFihExbhxlpX%2Fcwa6pik6NTA30Zf%2F%2BhIUe0mSPSWPU7j1vhV8%2B%2BuSbRRuzwhx2NYVR4Ma7dSlm9rGM8fQSZLFDvrlFUKZLkhV3zescEAjXYItB1%2BJuoWMKqOHRiYVpM6xsdQj6msZ%2FmdNuuSfb2YAyY1CzkexPUQK05BWcSTTpHPZgudehmtYQdXOlIYwzr5rOIVaHusUyvKgnPe0IS5oDI%2BoaeEIdydd2iBSNTsMfy%2FZj4uN%2BmxhzKSGoq%2BMPap7JzC%2B2Va69C%2B8mc%2B2jXHCk35qJldMv6OL1kLzV71FExf0eTugdplJzXjG5eVL%2BegSPPaPKYaP0%2BXgpse355E0K6QA8cH%2FF3AUTRggrP6qt%2FJZM8AIeO%2BW28emZFvtGI5vh9AtO1%2FimTCj0YnKBjqkAUpgdQMe0Wf5kwFpAHBXJjK9gMUYzPkSUs%2F3eoGv9SxWtK0bvnhXJLe%2FuUXa844QWBwzFSF93fKT%2FUv%2BZZpjhL2tP8CiWqtrZqPsVdJqlPhAlLceZe%2BBIwogBy19OEPrvgSdn7NLsNv341DqOZHxQehKw0aR%2F7c%2Bl9bWHL1smVQqdz3zJsL9n3Jd767BOgPkNfEkxc4%2FKs%2BA%2BH1U6Ud7OpVDM78m&X-Amz-Signature=894753cd106e0e6f71ce768de02f850a75df08ba5db235d6511faf4f2abf780a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

