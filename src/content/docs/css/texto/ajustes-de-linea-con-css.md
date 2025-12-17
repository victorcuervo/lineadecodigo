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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCD2ZVKF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHOOJMOwJjzOYpi7dJAShrweV%2B8QZU%2B%2BEVKFizCYWt2AiEAk0gkujaXiWY%2BcQGooB9njid2FrQHJXH78xgVIU6ItLsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJcAQDTa4H7BSYV21yrcAyzGcorq4OND%2F9iKhbP13uQk3Wv5gBl%2Bp30cYxwHaaJAWokbXelf%2Fjn%2BMWIoHpaynge%2BdNlbuFgirSNiKzmq32QLSXn%2F9jhL7m%2FmbsLmpQ%2FFYi2t%2BR14drZsvdAsbWAI%2Fb2Eovr6m0wdmwTwVKaaY%2Fl0RabE4mwlHF3ju9MdkiqgQP%2BeNaPLOFTCjOHjvy7JvBZKPfM7Tns6%2BFz9beEANi0yGeU3AxCen3hmtkPTUUPNneYLBrp0ks03sECr3QgD4xZRMf1AALSmqRvJCpBFQ4JArajOjQyFor4axwAF4%2B6hKl2UQGHUdv%2BNsxn7rbnW0cJQcFRcgNIQ1UIpe4soXnZijvdpGbRh7zMq2VLJNG3HjE9otFZTc0isXZlrdCFdcT0gCOsM%2FexX7JBA3pqDm7y9vp3F22untHvopUpfV21gzY%2FSmO7nvnnoLSws6CA6zeF4vGkGiMW6FdgVf%2FN4IVp8LKEF9x5%2BLw5RzZX3nz6eRh%2Be62X9ofx7JuanZpVY%2FpR4kJ2%2FswZTfBWilE9RbiJ8o%2BFZAeD0zzWMAifjDZD1gmkni5gzjt8I51E56p2O0EaEfi1PTc%2FVH3cy02lHSiTOSbX%2Fqefb18aHVWLqYBPRmAkho90VzBBBwzqyMLDwicoGOqUBQ9iKsaSVqvD9rt4mGP2VrJLIh7hJtK%2BwLZ%2FpegIsC77CqlXyBZzmI1nSnHc60BbriSu87Svvex9EkNkdkiF5Q%2B3BsZ%2FOM%2BZeH77qDxDNHxLe2qAn7iXm22PCk7QkOE%2BltJk6aAUCG6BM1wZMof5mZSCL9KGmEdlJGXEYFEFm7%2FKiJuTf9p9b0mkVcfbPyAJZh3vFAEKrcW0vCQrMD8vpgAvx9xVw&X-Amz-Signature=b26222476f924e8634665fd01466809d560e21611529a4491ef9f4cac10aed6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCD2ZVKF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHOOJMOwJjzOYpi7dJAShrweV%2B8QZU%2B%2BEVKFizCYWt2AiEAk0gkujaXiWY%2BcQGooB9njid2FrQHJXH78xgVIU6ItLsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJcAQDTa4H7BSYV21yrcAyzGcorq4OND%2F9iKhbP13uQk3Wv5gBl%2Bp30cYxwHaaJAWokbXelf%2Fjn%2BMWIoHpaynge%2BdNlbuFgirSNiKzmq32QLSXn%2F9jhL7m%2FmbsLmpQ%2FFYi2t%2BR14drZsvdAsbWAI%2Fb2Eovr6m0wdmwTwVKaaY%2Fl0RabE4mwlHF3ju9MdkiqgQP%2BeNaPLOFTCjOHjvy7JvBZKPfM7Tns6%2BFz9beEANi0yGeU3AxCen3hmtkPTUUPNneYLBrp0ks03sECr3QgD4xZRMf1AALSmqRvJCpBFQ4JArajOjQyFor4axwAF4%2B6hKl2UQGHUdv%2BNsxn7rbnW0cJQcFRcgNIQ1UIpe4soXnZijvdpGbRh7zMq2VLJNG3HjE9otFZTc0isXZlrdCFdcT0gCOsM%2FexX7JBA3pqDm7y9vp3F22untHvopUpfV21gzY%2FSmO7nvnnoLSws6CA6zeF4vGkGiMW6FdgVf%2FN4IVp8LKEF9x5%2BLw5RzZX3nz6eRh%2Be62X9ofx7JuanZpVY%2FpR4kJ2%2FswZTfBWilE9RbiJ8o%2BFZAeD0zzWMAifjDZD1gmkni5gzjt8I51E56p2O0EaEfi1PTc%2FVH3cy02lHSiTOSbX%2Fqefb18aHVWLqYBPRmAkho90VzBBBwzqyMLDwicoGOqUBQ9iKsaSVqvD9rt4mGP2VrJLIh7hJtK%2BwLZ%2FpegIsC77CqlXyBZzmI1nSnHc60BbriSu87Svvex9EkNkdkiF5Q%2B3BsZ%2FOM%2BZeH77qDxDNHxLe2qAn7iXm22PCk7QkOE%2BltJk6aAUCG6BM1wZMof5mZSCL9KGmEdlJGXEYFEFm7%2FKiJuTf9p9b0mkVcfbPyAJZh3vFAEKrcW0vCQrMD8vpgAvx9xVw&X-Amz-Signature=725a1e99c7c75eb1903f3625901987c24b51c1de92a87916c5c82a583ace14ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

