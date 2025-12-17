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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MCA5ORF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiHitRCcBpiIss0XEc6VyeB02bDdIhSDiOqlFPbfaZ5AIgY%2BL9hgSAsBxKYU6LsGrmhJEOLF3FC7VRc4ieWz5IUMwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD04RPRFe1xeHZZZTCrcA78M0JOYUu3XaBsw6bJOCWqoGf5t44Z9D9kx1GK7ZurE%2FbdwkHRLpPmmFcURpStRd6naNTVouSBR00CC4EDcLN9LnhBDeWZokOX9eTnhi%2FlIdfJC9QOvYNA9hFJHV%2F6a2A52UwqU%2FzEaLrPAT2H2hyZ7sTXNDWYbAXomqeWOkQ%2B99yaEarW%2FqBW8ypNfNIPC22zCVwkjmkBO1uj53ds3CO1pQxk74WxrV5XVtumCIBr%2BsbKI5xSoVeT90g8AIPuaAR2F4BGuGu5lfwgHw8ocWgJpgeR6lseacVNC2kd8L3u42cDExqIco8OP%2B40Oak1NqXzfNho4vWy1LshG9tXgRjPBv6rAzlQuYtjCe0b%2FQf%2B%2BTdtOsb%2BpZW3ipVDbN67c69mpehh8ShYlRARcAM1AvpZU7ZlwtytcNPSLfmmmxiE8wAdchHQP9weygUtmrs775QNKAQOTiEDnmt5SpDjZH3goNLvDWllKGzyMbBeDxOGKrxRTlGBT4tIMvE2YXF2wgQ%2FrpEu1kC%2FD7JuIapXBGZgv58VdTv3Zy0ZxNiNDJLncOyPI8f%2BRStqaDohfQzWKM7sJ1AkmQ4lT5P87bCpNwQiw2uRI9tpCpbSq3FzDLwOHfFiqXGCzZasFOhMbMOatjMoGOqUBpF1E5MmUUYI%2B4LdJG9wgy3rUCHlZ5zKZLBAwZhP4Y%2FM%2F6Y5MIuJr9qp0BUg5nIdpPhjLTirPV7TjSckcLJF169y6lg8WDEAaVGBGWCv84yF7FcFk4gKAKXW0E83vifZT74idznkAm%2FUv53070P6RMRBGlw6xbAAsD2B%2BqRxMkbealugtJww3WKMbb96u5TOaKuKFWfqcZYia0U1lU7eZ3SDdouiC&X-Amz-Signature=58d05b11df9587712b0c59abe098248c1df64c2cf2ceaaa743704e37577e5f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MCA5ORF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiHitRCcBpiIss0XEc6VyeB02bDdIhSDiOqlFPbfaZ5AIgY%2BL9hgSAsBxKYU6LsGrmhJEOLF3FC7VRc4ieWz5IUMwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD04RPRFe1xeHZZZTCrcA78M0JOYUu3XaBsw6bJOCWqoGf5t44Z9D9kx1GK7ZurE%2FbdwkHRLpPmmFcURpStRd6naNTVouSBR00CC4EDcLN9LnhBDeWZokOX9eTnhi%2FlIdfJC9QOvYNA9hFJHV%2F6a2A52UwqU%2FzEaLrPAT2H2hyZ7sTXNDWYbAXomqeWOkQ%2B99yaEarW%2FqBW8ypNfNIPC22zCVwkjmkBO1uj53ds3CO1pQxk74WxrV5XVtumCIBr%2BsbKI5xSoVeT90g8AIPuaAR2F4BGuGu5lfwgHw8ocWgJpgeR6lseacVNC2kd8L3u42cDExqIco8OP%2B40Oak1NqXzfNho4vWy1LshG9tXgRjPBv6rAzlQuYtjCe0b%2FQf%2B%2BTdtOsb%2BpZW3ipVDbN67c69mpehh8ShYlRARcAM1AvpZU7ZlwtytcNPSLfmmmxiE8wAdchHQP9weygUtmrs775QNKAQOTiEDnmt5SpDjZH3goNLvDWllKGzyMbBeDxOGKrxRTlGBT4tIMvE2YXF2wgQ%2FrpEu1kC%2FD7JuIapXBGZgv58VdTv3Zy0ZxNiNDJLncOyPI8f%2BRStqaDohfQzWKM7sJ1AkmQ4lT5P87bCpNwQiw2uRI9tpCpbSq3FzDLwOHfFiqXGCzZasFOhMbMOatjMoGOqUBpF1E5MmUUYI%2B4LdJG9wgy3rUCHlZ5zKZLBAwZhP4Y%2FM%2F6Y5MIuJr9qp0BUg5nIdpPhjLTirPV7TjSckcLJF169y6lg8WDEAaVGBGWCv84yF7FcFk4gKAKXW0E83vifZT74idznkAm%2FUv53070P6RMRBGlw6xbAAsD2B%2BqRxMkbealugtJww3WKMbb96u5TOaKuKFWfqcZYia0U1lU7eZ3SDdouiC&X-Amz-Signature=9ca6788c43839bbb1cda11f896db81b2cb69bf2bf6e617ea3a3a8bd274ba396d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

