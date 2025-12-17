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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXJ7OVS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8FJPAL6Ks9aurL2fHnsvGykmkyKhi5Caj3XJc9mKPwwIhAMB2GABD6qQESo1%2F%2B6SHk4K8O7hXLgKexNSOeBkyZ2j4Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwQIdJfeIWjGPYGdDoq3AP7GX7lQtsSnbo5PQzgffCOXWDcspjkonf3%2Bj4WjpM3jL7%2B3DPapRb0wqRubH0h97%2FMA1BBRMgL25%2BPaNRBLuhA4V8ksetGIxHmLj8YMLtHBwtNxjRvQqInBA12suj9ypVQ08Cla%2BLZ0SGuQw6CxoZbrdU5%2FknQVjhVDvDQ6jdiEiSkPuzuceDkhee91%2F2cP5NH9FFAWwHELk%2F79xqzvXbnJsSkHZ3SFZHMroIzM4O0CsIJEYzweEgD3U9OCoPBpHvhFce7YYJ1Pa%2BAmwUiQGZwj5OybQrQhymG8wXV8UBiPgiZJgrzNvKuqtOtBDFBcMrbhPIN70qmNBtXFOfo2uBfUyIb7M6b1bbezJzUWBgpMD%2BCLKa0VtDlGP0j1UBRThhy9paZMF%2Bi01ztufR9YQpW3Hwoki8y5cfZ1XOGBEk2vxLTygeATZs22unAl5gpUYBkaagHztVyQAZ12pkK7DgvPjVjslB0G9%2B8SToHuT7kYHaGn6WJ0RShLik%2BlntYfKAIjXJQTVWskmqE%2F7DtgpXC5FLdSb9RVElskfou89ca4bJiTsSIxsd5sCoamxuwiSHRRuhowReHMI3Cj1XcJ5eF89QHD8xwV6ihU7wt%2FDJWawkCqfVDrxyrlVBf8zDU3ofKBjqkASnlTeDwEmUhTgVAO0xwjILk6b7Y%2BWS5qtO3fzjFF6AstKdGrtYAd8Z5gzJGipHMosbXd8tZCx6De2X5NZyfZlDQ0tHD5dudhF3W7UgKr8EgJYCBw5qxpbTpT5M8I7xMCTY5lKRGWg2Op46Exdo8Vkqi2N7Wi01QtXxZfkRRG3etsWslvqgwbyEJACoTH5th9SuMc9mc32qZZAe5fvR5%2BmVISONa&X-Amz-Signature=ebc91883fd6ba97c4137ebca4021306729ec5797ada919b637cab85cce4a3a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXJ7OVS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8FJPAL6Ks9aurL2fHnsvGykmkyKhi5Caj3XJc9mKPwwIhAMB2GABD6qQESo1%2F%2B6SHk4K8O7hXLgKexNSOeBkyZ2j4Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwQIdJfeIWjGPYGdDoq3AP7GX7lQtsSnbo5PQzgffCOXWDcspjkonf3%2Bj4WjpM3jL7%2B3DPapRb0wqRubH0h97%2FMA1BBRMgL25%2BPaNRBLuhA4V8ksetGIxHmLj8YMLtHBwtNxjRvQqInBA12suj9ypVQ08Cla%2BLZ0SGuQw6CxoZbrdU5%2FknQVjhVDvDQ6jdiEiSkPuzuceDkhee91%2F2cP5NH9FFAWwHELk%2F79xqzvXbnJsSkHZ3SFZHMroIzM4O0CsIJEYzweEgD3U9OCoPBpHvhFce7YYJ1Pa%2BAmwUiQGZwj5OybQrQhymG8wXV8UBiPgiZJgrzNvKuqtOtBDFBcMrbhPIN70qmNBtXFOfo2uBfUyIb7M6b1bbezJzUWBgpMD%2BCLKa0VtDlGP0j1UBRThhy9paZMF%2Bi01ztufR9YQpW3Hwoki8y5cfZ1XOGBEk2vxLTygeATZs22unAl5gpUYBkaagHztVyQAZ12pkK7DgvPjVjslB0G9%2B8SToHuT7kYHaGn6WJ0RShLik%2BlntYfKAIjXJQTVWskmqE%2F7DtgpXC5FLdSb9RVElskfou89ca4bJiTsSIxsd5sCoamxuwiSHRRuhowReHMI3Cj1XcJ5eF89QHD8xwV6ihU7wt%2FDJWawkCqfVDrxyrlVBf8zDU3ofKBjqkASnlTeDwEmUhTgVAO0xwjILk6b7Y%2BWS5qtO3fzjFF6AstKdGrtYAd8Z5gzJGipHMosbXd8tZCx6De2X5NZyfZlDQ0tHD5dudhF3W7UgKr8EgJYCBw5qxpbTpT5M8I7xMCTY5lKRGWg2Op46Exdo8Vkqi2N7Wi01QtXxZfkRRG3etsWslvqgwbyEJACoTH5th9SuMc9mc32qZZAe5fvR5%2BmVISONa&X-Amz-Signature=3c8020dab68340b2dad02ec6f9fa7d2199c6b589d4ed3bd1bf128b3ca5275932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

