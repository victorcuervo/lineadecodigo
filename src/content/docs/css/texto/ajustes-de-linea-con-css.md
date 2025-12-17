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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNY4JED%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH41VL3VZDenYwm6LJg8ttgnnLPya9mcTw8biX0kPLIDAiAEr6Fqkop2PU4OfRAALbHdqELAO91SqXCQJGJCRtvC5ir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmvhK%2BMb7Xsp5p4S0KtwD7ahRnOkCelCtH2tjh8omfqCT8rdWkM0jZz%2BYkdGAE%2F10u%2FpGK6cXMBCmBi9%2BAG4bi1UurnX%2BZynWuKGCifbNCmWdBQX5k0ecJ1lUud%2Fcr80JTMcP9HhFLp9e3wNjXoBD7%2F54oGu%2BYbTO%2Fo90UlIHiwPRYvy0tJgyxxYRjBShVJkyNppb2Ce%2Fr8O4ZzHzlqMOBLR3G0d684lT96btflx7txpI71IjYfhxK%2FhTL9GspCvUBgLWB8mmMCwSkLbiPAdirVpjFhIprCBQaB8AN1crdkAMt9GrUvlwZ4WPb7M1fv1LGarFAikAhRJV5IDNONlRFSIemb4GFeUbok%2BVEjLf%2FQEntsurVpajHyKU%2B5IjhKqY%2BY0MVXxIy7mW7%2BpBWAzkLSKlaMRp2SEuq6mO3hWcv0QOgvRretUUlP5EXaNxr%2FJexZf5JAA7GPGnqDbIfkV%2BSvv0OxaCFD%2BFb0%2BF5A%2Bc9GLoK%2Btdlx9aDkiv%2FTJ4uflmuHvd2dI%2Bsb4yt9c2Ee%2F80bH2aklEnd4BEKyi4m0CJ6%2FVJqwrEpjg%2F4LmvlI8LPMSnaUcTHknj%2B6wjiwcltijRMfUzOtietY2o2vthEwhpgwT1KDBI1MeAEHHNdf%2BRdGTLfXKNa%2FE6f7cGwow95aIygY6pgGAfKV0Qu2Ugn4JfeU51XvZpJLDbNAfFHCA1MOdVSlP62ZJpMCFB5vxkO9O76w%2BF07ASXVYKG4Ey5C8MWBKumv25qiSsR1VyHO7Kdo6h%2BADyvVBLf1wPiDnOL9hfkbkQqtRBhRaQDfyceHxqb%2Ffl%2BjEn0AfAZ9R19W356jqsCg9yRrsgaSaoDV5wlQo%2FWXSRn8D5h9CgRRi05XGFCt%2B375IdmOEfyOQ&X-Amz-Signature=5eef6e4a7f741ef318239f57f407031df4f5844eb36e7b404b5ed2637c1d5b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNY4JED%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH41VL3VZDenYwm6LJg8ttgnnLPya9mcTw8biX0kPLIDAiAEr6Fqkop2PU4OfRAALbHdqELAO91SqXCQJGJCRtvC5ir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmvhK%2BMb7Xsp5p4S0KtwD7ahRnOkCelCtH2tjh8omfqCT8rdWkM0jZz%2BYkdGAE%2F10u%2FpGK6cXMBCmBi9%2BAG4bi1UurnX%2BZynWuKGCifbNCmWdBQX5k0ecJ1lUud%2Fcr80JTMcP9HhFLp9e3wNjXoBD7%2F54oGu%2BYbTO%2Fo90UlIHiwPRYvy0tJgyxxYRjBShVJkyNppb2Ce%2Fr8O4ZzHzlqMOBLR3G0d684lT96btflx7txpI71IjYfhxK%2FhTL9GspCvUBgLWB8mmMCwSkLbiPAdirVpjFhIprCBQaB8AN1crdkAMt9GrUvlwZ4WPb7M1fv1LGarFAikAhRJV5IDNONlRFSIemb4GFeUbok%2BVEjLf%2FQEntsurVpajHyKU%2B5IjhKqY%2BY0MVXxIy7mW7%2BpBWAzkLSKlaMRp2SEuq6mO3hWcv0QOgvRretUUlP5EXaNxr%2FJexZf5JAA7GPGnqDbIfkV%2BSvv0OxaCFD%2BFb0%2BF5A%2Bc9GLoK%2Btdlx9aDkiv%2FTJ4uflmuHvd2dI%2Bsb4yt9c2Ee%2F80bH2aklEnd4BEKyi4m0CJ6%2FVJqwrEpjg%2F4LmvlI8LPMSnaUcTHknj%2B6wjiwcltijRMfUzOtietY2o2vthEwhpgwT1KDBI1MeAEHHNdf%2BRdGTLfXKNa%2FE6f7cGwow95aIygY6pgGAfKV0Qu2Ugn4JfeU51XvZpJLDbNAfFHCA1MOdVSlP62ZJpMCFB5vxkO9O76w%2BF07ASXVYKG4Ey5C8MWBKumv25qiSsR1VyHO7Kdo6h%2BADyvVBLf1wPiDnOL9hfkbkQqtRBhRaQDfyceHxqb%2Ffl%2BjEn0AfAZ9R19W356jqsCg9yRrsgaSaoDV5wlQo%2FWXSRn8D5h9CgRRi05XGFCt%2B375IdmOEfyOQ&X-Amz-Signature=48eb20e54e64341a1eca5de547d690d854b1e0cc8f7a8826052704d2aa937827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

