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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W4JF6S2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJic2BLEQpyphZHhzkXiPLyg3eTvBhuamMqw465iOUQAiBvI4YaiVV%2F5oiWellfum9rU3asSSCVlcCVCuDwhJth%2BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDbF6eGodfEa5QhHjKtwDbIgElP9GjF8Gp8RUR0AmZDrDUQIRUdhNYUM5SqRfRFI9tKksxTxp2uctW%2F1uF07j354%2B8%2FHa%2FO9KI8xRxXEPBAJJC5t5O7eSTSrSlfj6ua9zMgp4%2B4uWLSlA2il39M80sAjBrwOsrD3%2BncQRHcLnld4%2BhVPMd6ODGgrZv7mRRAEOBcON8r32qo0jy32adyO7Q5fmZwjcFatTP%2BKtyglNj%2BMgIbcrg884Ux8vFhPMinsfshLM%2BQRh15n1SCGwJiqGt0AKAHtOqX2CNCH%2BD6jzoc7i3ZkoxxLLB8%2BF9YkNM6s4hVytmy%2Fu%2BZ%2Fz%2B%2BZmILiU4MMMXSGkvJ6CofXYX2X8WPgnQWpJKYKTn%2BiTLztFMPNfrkjF2MnN%2B7Sq1AQ1VLyjPoic4tsHL0Jc%2FHTO5WhMyQfCzOYa4i%2FxpH6e5syMyC%2BAbQzfxzEP2UM1CDF5JVmVMuXGw%2F44154W8bdrqunL1uJoecwCaD2sJv6NC9w05ct%2F409rmsvtFIJL%2F2IK02btowHH4JTJNoceVdYABCBu6DwMvOPjKVr3vIPFFM2k9UoKt0qlbSLSx0d4QxFsF%2F%2BmvEjUTvJcQoPQmxLxp%2FxkHwq89itb5zHhBJs1EV8qQeuQGmu4%2BFAHMxkcrHAwzp%2BLygY6pgEdil2KDGDQ%2FmzP6bZf5Thg1DbjLYurXV%2F%2FjoLYaG0AQ5hAKVH8dfm0K06zGKeQMml4crgCe2HPR2iWwb9f17ECRvTZgBuc%2F3nYMMsxfF1qEg4qABmdmNiq%2BOJ%2B13nfDOSy7b1fFnUT8CVc4GtgEBiYUBJQirqzCU4AYgiEis2sUYVafv2DHcgxp6f1jOWTErOnap34mAhjA1PXxx%2BXDxMT%2BYN8hjBY&X-Amz-Signature=a99bb3f50e44a6e383ae426c287f8143226aa895dcdce021edbc28039573e2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W4JF6S2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJic2BLEQpyphZHhzkXiPLyg3eTvBhuamMqw465iOUQAiBvI4YaiVV%2F5oiWellfum9rU3asSSCVlcCVCuDwhJth%2BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDbF6eGodfEa5QhHjKtwDbIgElP9GjF8Gp8RUR0AmZDrDUQIRUdhNYUM5SqRfRFI9tKksxTxp2uctW%2F1uF07j354%2B8%2FHa%2FO9KI8xRxXEPBAJJC5t5O7eSTSrSlfj6ua9zMgp4%2B4uWLSlA2il39M80sAjBrwOsrD3%2BncQRHcLnld4%2BhVPMd6ODGgrZv7mRRAEOBcON8r32qo0jy32adyO7Q5fmZwjcFatTP%2BKtyglNj%2BMgIbcrg884Ux8vFhPMinsfshLM%2BQRh15n1SCGwJiqGt0AKAHtOqX2CNCH%2BD6jzoc7i3ZkoxxLLB8%2BF9YkNM6s4hVytmy%2Fu%2BZ%2Fz%2B%2BZmILiU4MMMXSGkvJ6CofXYX2X8WPgnQWpJKYKTn%2BiTLztFMPNfrkjF2MnN%2B7Sq1AQ1VLyjPoic4tsHL0Jc%2FHTO5WhMyQfCzOYa4i%2FxpH6e5syMyC%2BAbQzfxzEP2UM1CDF5JVmVMuXGw%2F44154W8bdrqunL1uJoecwCaD2sJv6NC9w05ct%2F409rmsvtFIJL%2F2IK02btowHH4JTJNoceVdYABCBu6DwMvOPjKVr3vIPFFM2k9UoKt0qlbSLSx0d4QxFsF%2F%2BmvEjUTvJcQoPQmxLxp%2FxkHwq89itb5zHhBJs1EV8qQeuQGmu4%2BFAHMxkcrHAwzp%2BLygY6pgEdil2KDGDQ%2FmzP6bZf5Thg1DbjLYurXV%2F%2FjoLYaG0AQ5hAKVH8dfm0K06zGKeQMml4crgCe2HPR2iWwb9f17ECRvTZgBuc%2F3nYMMsxfF1qEg4qABmdmNiq%2BOJ%2B13nfDOSy7b1fFnUT8CVc4GtgEBiYUBJQirqzCU4AYgiEis2sUYVafv2DHcgxp6f1jOWTErOnap34mAhjA1PXxx%2BXDxMT%2BYN8hjBY&X-Amz-Signature=f04c838397c63f854bb3e7f8acf2382194d64fc156795246f0be0f679bc27f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

