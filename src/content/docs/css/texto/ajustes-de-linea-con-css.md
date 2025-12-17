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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ5RPYPF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXmY6ME7bA9IPRs%2BeS%2Fi%2BDFWyyw2pgwdFV87VjWxQhtAiAK8cENSBbgD4a2zXfz2K%2BwxDr5gztf%2F8Sv5MF6Sq%2FbFyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMIKRNH7Wn%2FFYObGHuKtwDzddkxR9zARfsO4qm2fExJEVz9El9Yj0fzuGJrYZSmno1Srd6zzMIW7hl5DgRbT5G0XRWKPok7yyLB6w1HcVbW0iJGqbFvm7ogXp5WQ3KV6XTW5khIi0L8pfhL0QcnfxLi%2FFyQX7Z5P9HRssj0sELJV7iqaYFJH5xnPv6T3Cc%2B8i5RRyg4p95NOxEKO8EqlXpcVTJBaeA6Q9ZK6NWNHX%2Fix8tCbff7hBA32JsUaFi5CeYsVscNfOJWnONC9IC7K3M583hHd%2FXms2AWznFwC5c%2FLAP9rSTeLnPdXQE23Pkj4VIolYzVhNuLIDVH5cSwGY%2Fc%2FvcRLc0glSDeI8jg4YOsyQa%2FBEsRBGJHWeydGVx4WZk37362pw5urtId6CDsvi2cAtyUjcD6Rfoz%2BsMMhvNjTjO7owf0d0bo24dnA9eRg6eiEzjK5AT%2B9oGFHQrGlf8w126ob%2BDBz8DeR1pCcbWl5TjmJQzbsHUKq63cIaZZHHzBWW7hUmLwsAJPB113tftfH2J3O6xFs4Pyl%2B2hkBFtYS0z3a4NFOXUkyKe7hGIrpJadvE2K5ylk%2BCqIF74s8Ioajwh%2BnxR4B4HqDhT24VbcqHeP2NcjBHfprQEu5KMVKjdK3t0dpJKGH4cLowyvCJygY6pgGKURWK1O2kR3Ein7cx2IuYgVS9i3J2TjHR3BbEuyDM4SVNk2XpCfA3gWT074iH3lXIEgik1TTEDKIenhpVhUSDJIKOKH1oZCEFlTtiIw%2B1qIBG6wcEtrXV%2FAw37uEnc6u2SMZZ698yabYbYDoMSvAZzeeBgWDxVxaTzvk0%2FkACdUSrAkrqzSFU1inenmJWo7SG%2F69HZgtLfqWk3fhX1rKuXcQYPUAR&X-Amz-Signature=f52f5e61774ac6f5d2dfc21fa69cd250f1ca8ae6c6de4c7dae6e1af2441e2c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ5RPYPF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXmY6ME7bA9IPRs%2BeS%2Fi%2BDFWyyw2pgwdFV87VjWxQhtAiAK8cENSBbgD4a2zXfz2K%2BwxDr5gztf%2F8Sv5MF6Sq%2FbFyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMIKRNH7Wn%2FFYObGHuKtwDzddkxR9zARfsO4qm2fExJEVz9El9Yj0fzuGJrYZSmno1Srd6zzMIW7hl5DgRbT5G0XRWKPok7yyLB6w1HcVbW0iJGqbFvm7ogXp5WQ3KV6XTW5khIi0L8pfhL0QcnfxLi%2FFyQX7Z5P9HRssj0sELJV7iqaYFJH5xnPv6T3Cc%2B8i5RRyg4p95NOxEKO8EqlXpcVTJBaeA6Q9ZK6NWNHX%2Fix8tCbff7hBA32JsUaFi5CeYsVscNfOJWnONC9IC7K3M583hHd%2FXms2AWznFwC5c%2FLAP9rSTeLnPdXQE23Pkj4VIolYzVhNuLIDVH5cSwGY%2Fc%2FvcRLc0glSDeI8jg4YOsyQa%2FBEsRBGJHWeydGVx4WZk37362pw5urtId6CDsvi2cAtyUjcD6Rfoz%2BsMMhvNjTjO7owf0d0bo24dnA9eRg6eiEzjK5AT%2B9oGFHQrGlf8w126ob%2BDBz8DeR1pCcbWl5TjmJQzbsHUKq63cIaZZHHzBWW7hUmLwsAJPB113tftfH2J3O6xFs4Pyl%2B2hkBFtYS0z3a4NFOXUkyKe7hGIrpJadvE2K5ylk%2BCqIF74s8Ioajwh%2BnxR4B4HqDhT24VbcqHeP2NcjBHfprQEu5KMVKjdK3t0dpJKGH4cLowyvCJygY6pgGKURWK1O2kR3Ein7cx2IuYgVS9i3J2TjHR3BbEuyDM4SVNk2XpCfA3gWT074iH3lXIEgik1TTEDKIenhpVhUSDJIKOKH1oZCEFlTtiIw%2B1qIBG6wcEtrXV%2FAw37uEnc6u2SMZZ698yabYbYDoMSvAZzeeBgWDxVxaTzvk0%2FkACdUSrAkrqzSFU1inenmJWo7SG%2F69HZgtLfqWk3fhX1rKuXcQYPUAR&X-Amz-Signature=f0b068bc231ae0abc91c48d9dda4a7fd6857a9f0a618a397469321ec1221b7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

