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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDG4YCAY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH80aIS3YtepD95SoWUHjFFo0JFtx9zFIHuiWBVL6uidAiAWuKcjgXos8edhHsq405xop5zHuWVzrf4gwo4pIBrh0Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMBo4Aj7P403jor0HCKtwD7ErmMU4X3x8pna7iV2gEnIcwtBGd3tCaXmR0xqUJOpIbBYYHru4p0mEIjAhpae8ACZtelEowjd9zVlLRBD5r0t0G9%2FkMpyoDvm9pZ7BL8TMC8qAw6z4II%2FjsrErBiQ1MAp%2BpMuDNJeA8a264sxXK%2B%2BWK%2BlRzaw%2FhLeZmNicQVUhRtH51iFJ1uyuo4DVEOq8loSDCNCHrGQ7p4koxGV8TCPu3YPDC6sVSvalM%2Bs964eC8B1v%2F%2Ft9Dyx6RBCe8%2Fk4HoiIN4XVIpghfrOtwh9CS6I3IHsmpsMvvR%2BuxHHM%2B4PZe1zoJb0u0f4L9lMFZV6VGcEP7qMLNWCaDnwbVhuvgamiHcRJBzL9h%2B50Cj2i0s4gglnlmlJS%2FsrB7w6cHxfgZYS1UObVg8fLdnlcmOzIg77nU%2B8%2FEo42J4L3J2CXvmjRiMjgAUhhEc5IY%2FWFsPgd9NcT0B6yfTzkcvNJIDJWIs9inOgYidhd4nf2e3WnpTalBmcdtaD%2FzpTp2UUNC1CkoY0cUX4c5voCq8x%2BVZtQ4CyPnteY12Gabrvo0olgdmUtADsGMnPr5Q6qWO2q8zp2Sa53bbTMevLf%2BHHcBz6IVXF%2F3jxKsAYL8Fxenye%2F4Ovjt%2But%2FrI0nQO5bCbwwn86IygY6pgEujDXm7drclNIjwUAolecqjvnuPDKAisubBO5BohClYmSa5%2BAsN0tV8XTs7WyzDuoabldOdFtDeFzqBVbdq3wiJ9NLEf5xdPaTKij%2FV%2Fh%2BQ%2FkO5YlXVKQ7Amc1EKlPKMBHCPt1obRalUIigIZS3%2Fk056eBmTK%2Fplj%2Fu1cgSPT3kPzse%2F%2BGRfuu%2BvVbgJfjPmnkrdWrd1OmULlAsvxInqVdIMdUC6hL&X-Amz-Signature=6799ffa1eb0324653e154e9c423b154a446b82a26d94dc44510e9b56abba5245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDG4YCAY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH80aIS3YtepD95SoWUHjFFo0JFtx9zFIHuiWBVL6uidAiAWuKcjgXos8edhHsq405xop5zHuWVzrf4gwo4pIBrh0Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMBo4Aj7P403jor0HCKtwD7ErmMU4X3x8pna7iV2gEnIcwtBGd3tCaXmR0xqUJOpIbBYYHru4p0mEIjAhpae8ACZtelEowjd9zVlLRBD5r0t0G9%2FkMpyoDvm9pZ7BL8TMC8qAw6z4II%2FjsrErBiQ1MAp%2BpMuDNJeA8a264sxXK%2B%2BWK%2BlRzaw%2FhLeZmNicQVUhRtH51iFJ1uyuo4DVEOq8loSDCNCHrGQ7p4koxGV8TCPu3YPDC6sVSvalM%2Bs964eC8B1v%2F%2Ft9Dyx6RBCe8%2Fk4HoiIN4XVIpghfrOtwh9CS6I3IHsmpsMvvR%2BuxHHM%2B4PZe1zoJb0u0f4L9lMFZV6VGcEP7qMLNWCaDnwbVhuvgamiHcRJBzL9h%2B50Cj2i0s4gglnlmlJS%2FsrB7w6cHxfgZYS1UObVg8fLdnlcmOzIg77nU%2B8%2FEo42J4L3J2CXvmjRiMjgAUhhEc5IY%2FWFsPgd9NcT0B6yfTzkcvNJIDJWIs9inOgYidhd4nf2e3WnpTalBmcdtaD%2FzpTp2UUNC1CkoY0cUX4c5voCq8x%2BVZtQ4CyPnteY12Gabrvo0olgdmUtADsGMnPr5Q6qWO2q8zp2Sa53bbTMevLf%2BHHcBz6IVXF%2F3jxKsAYL8Fxenye%2F4Ovjt%2But%2FrI0nQO5bCbwwn86IygY6pgEujDXm7drclNIjwUAolecqjvnuPDKAisubBO5BohClYmSa5%2BAsN0tV8XTs7WyzDuoabldOdFtDeFzqBVbdq3wiJ9NLEf5xdPaTKij%2FV%2Fh%2BQ%2FkO5YlXVKQ7Amc1EKlPKMBHCPt1obRalUIigIZS3%2Fk056eBmTK%2Fplj%2Fu1cgSPT3kPzse%2F%2BGRfuu%2BvVbgJfjPmnkrdWrd1OmULlAsvxInqVdIMdUC6hL&X-Amz-Signature=9e6618c186aabf16ff51ef3c5eaabe5f3366c4f85ceb2af4072013695037eee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

