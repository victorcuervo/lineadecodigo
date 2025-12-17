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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZENJCQT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8SmpyVA570jx2JMZN%2FvWrfFTCYV4GhNwU2WtiZYBIGAiAiq74KV%2BxEqKvi4B%2BfNWFf%2BX2Loe6fID1onfz1Lb4MiyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM21JHnQ9L%2BzNmghI6KtwDCN1UM3QtHIRNDOWPIW2BPo%2FC7Eq8dLHiaCNw97hQEwDMPZRzkgeyrLhaOapYDAFKBt6aRWoAZBKKfBianmeilFwVtCGagjiBayHrIu3jN%2FzJpDpFnn9KHn92zQ1ooTEMnpeUZHWuuOuSq5544OaBZ1xs5SUbUZiUWL0s1g2z5aI8LAxZqfSvtvETYdOBceK%2BAieuT1BezjykSIrQyJQuub2UGD6I26tKmNyEU8pLDPnelbjBoeg7Pbj4HobL9nm9U3eVfMuU0KCxbqBFzNHEbMeI%2BSfBNWaZfYwKTH8R%2BBtxvFBF5TIyTNzHLaZYjTsqXv%2F01i6wN5seiQzj9Xy3MgvrExFIwgCo%2FIAQD%2B6rsFhUDGEJt4Q3a48PBTnizRZzH1UX1elOhh%2Bo0ohunk5qWDL49s699igp1ZtNHFeT%2BHORcfAN0w%2BTlGVJV%2B%2BIblRcjXK9D8ck5amPQ%2BTVQXD48CbLfdIVO%2BoOchjQ%2BtQoKBkPhD5ARVb2FH%2Bt8CKuqsK5f89y2PC3m1T61Be3iuO9QB62Ouzq7J9PqPjt3ok2YLjlnwfh6W6cX54EpnvGUpZo7n6N%2FL1ShJDuvqOOoq2tShjACs4ck2cdr%2Bo2EjycFDW0UT019%2BsLsIEujbkwv66MygY6pgHXWebumOK6OmD5l4za6m2OC2VcNf8M2EBZrZSbCtYRc0zXUP8XYxAFbDnGnOIUs4VEXGbK21K3CbhKXS5%2BQWjjYXB4x%2FwqgI8ObupD20W04EC2UinIeMrE9KWEjsPhY5YYDDw%2FVi2lpxEdzD47f7MhRrog2hm1lhKQ%2BuKzSQkezozV5SG1TNtOSZTCw08GHSXbxiHeppi8biK30E%2F0mgJrjTDTMhfs&X-Amz-Signature=13a089d54e0e4a24c8361a56a8408385f7c2e68aa8bc84e1fcf245864f7e6c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZENJCQT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8SmpyVA570jx2JMZN%2FvWrfFTCYV4GhNwU2WtiZYBIGAiAiq74KV%2BxEqKvi4B%2BfNWFf%2BX2Loe6fID1onfz1Lb4MiyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM21JHnQ9L%2BzNmghI6KtwDCN1UM3QtHIRNDOWPIW2BPo%2FC7Eq8dLHiaCNw97hQEwDMPZRzkgeyrLhaOapYDAFKBt6aRWoAZBKKfBianmeilFwVtCGagjiBayHrIu3jN%2FzJpDpFnn9KHn92zQ1ooTEMnpeUZHWuuOuSq5544OaBZ1xs5SUbUZiUWL0s1g2z5aI8LAxZqfSvtvETYdOBceK%2BAieuT1BezjykSIrQyJQuub2UGD6I26tKmNyEU8pLDPnelbjBoeg7Pbj4HobL9nm9U3eVfMuU0KCxbqBFzNHEbMeI%2BSfBNWaZfYwKTH8R%2BBtxvFBF5TIyTNzHLaZYjTsqXv%2F01i6wN5seiQzj9Xy3MgvrExFIwgCo%2FIAQD%2B6rsFhUDGEJt4Q3a48PBTnizRZzH1UX1elOhh%2Bo0ohunk5qWDL49s699igp1ZtNHFeT%2BHORcfAN0w%2BTlGVJV%2B%2BIblRcjXK9D8ck5amPQ%2BTVQXD48CbLfdIVO%2BoOchjQ%2BtQoKBkPhD5ARVb2FH%2Bt8CKuqsK5f89y2PC3m1T61Be3iuO9QB62Ouzq7J9PqPjt3ok2YLjlnwfh6W6cX54EpnvGUpZo7n6N%2FL1ShJDuvqOOoq2tShjACs4ck2cdr%2Bo2EjycFDW0UT019%2BsLsIEujbkwv66MygY6pgHXWebumOK6OmD5l4za6m2OC2VcNf8M2EBZrZSbCtYRc0zXUP8XYxAFbDnGnOIUs4VEXGbK21K3CbhKXS5%2BQWjjYXB4x%2FwqgI8ObupD20W04EC2UinIeMrE9KWEjsPhY5YYDDw%2FVi2lpxEdzD47f7MhRrog2hm1lhKQ%2BuKzSQkezozV5SG1TNtOSZTCw08GHSXbxiHeppi8biK30E%2F0mgJrjTDTMhfs&X-Amz-Signature=e6f8f85fe8c6bfc6c5c122339192917ef9f413e6a83c91687220a373aa4602eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

