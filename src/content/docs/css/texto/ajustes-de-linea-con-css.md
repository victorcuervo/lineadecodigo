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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7XEKPH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBL1xt4ZVzIlxOXwAB1yRa0BVpb9y7IfgLFSocUNmClFAiAN3fAk6IRQVtL%2FjlgpTgYI6TLgLxw%2Fs3yfW1K2k9zmGSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMw%2FeM8D6srY3JVmuNKtwDSIA7%2BJoajrQdbgPieoYCTjGluIEhXsMlwZuBKilf5mXuEKFcU2B2nBec%2FJ9e6PUvM822ZwdS5Pbiq2fUh4qvlmr%2FnSVU0m7iua3fltgBjehH1t0P3G1anZouRIDH2ugB87zNjKRfFLyNZkKCCR%2Fl4YPZ29LQ6V7RBPvd2cF7Y8IyJOnkx81eNV999CybBNRuj8UAEyCpiMNp6yo3%2FjwiFidI12DX0nMiwQIyCCfd2B3O8pSduqerlPnmUc3nV2rVjEv6a1f7mTTLoLjPVGt8%2BsATPE9CJWHce9Ee%2FqLnh%2FySuIZ5ug5udf7sx9b%2FpcafgJK6GUJfG5h8SCnQRN23LQBFYDaXNr5cNbz1JenLRCV6lbF9s%2BoymjnyORoTuxfRHUTI9yEkZXiOY0vYfCTkA%2F1pKXJF07fTsNw3UCVWc10SvubYjNDeOSxFm4EhGIe7mkB5B0I%2BYaOdYG7DCLYQMUyZGLLlb1AGt9gxwwFBJqy%2B8MyUeMOrMAm1QYGWpYBw3FpnmD17Jn00A8069GEJ7ejZnvmfKFdGCYKF755i6kXOxMMkI7IU5aU42AFmrixi6FgCOUoOYGxDoEXCnz9x%2F2jx9wsMLwUIuKDdSqwr66lKkJJaKMWArN%2Fq5y0ww%2BmIygY6pgFm5VHyxou75IlIhCqw5OCE%2FD0qLNuCgEtJT4bLYGkyQ19eoyrb26kSqoOdCtvhA8KEo7PramokhXEoX1ht%2BIqWP%2FXBv%2BEtJxh0B2OOQOp0NKblNQoeXehEadQ3y5IFtgul43V6uR3in3g4mAhdB7UqjEm24bh50t4L6PoQjSqYusZ4OQn5QMndyoMS1YlhMIvQmvmnazJV3%2F3vq7dIYbNXSyLjWRN2&X-Amz-Signature=bd283f1529b19935fb0ddc0d64e8b247625aa796b6b6643116afe5321753a958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7XEKPH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBL1xt4ZVzIlxOXwAB1yRa0BVpb9y7IfgLFSocUNmClFAiAN3fAk6IRQVtL%2FjlgpTgYI6TLgLxw%2Fs3yfW1K2k9zmGSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMw%2FeM8D6srY3JVmuNKtwDSIA7%2BJoajrQdbgPieoYCTjGluIEhXsMlwZuBKilf5mXuEKFcU2B2nBec%2FJ9e6PUvM822ZwdS5Pbiq2fUh4qvlmr%2FnSVU0m7iua3fltgBjehH1t0P3G1anZouRIDH2ugB87zNjKRfFLyNZkKCCR%2Fl4YPZ29LQ6V7RBPvd2cF7Y8IyJOnkx81eNV999CybBNRuj8UAEyCpiMNp6yo3%2FjwiFidI12DX0nMiwQIyCCfd2B3O8pSduqerlPnmUc3nV2rVjEv6a1f7mTTLoLjPVGt8%2BsATPE9CJWHce9Ee%2FqLnh%2FySuIZ5ug5udf7sx9b%2FpcafgJK6GUJfG5h8SCnQRN23LQBFYDaXNr5cNbz1JenLRCV6lbF9s%2BoymjnyORoTuxfRHUTI9yEkZXiOY0vYfCTkA%2F1pKXJF07fTsNw3UCVWc10SvubYjNDeOSxFm4EhGIe7mkB5B0I%2BYaOdYG7DCLYQMUyZGLLlb1AGt9gxwwFBJqy%2B8MyUeMOrMAm1QYGWpYBw3FpnmD17Jn00A8069GEJ7ejZnvmfKFdGCYKF755i6kXOxMMkI7IU5aU42AFmrixi6FgCOUoOYGxDoEXCnz9x%2F2jx9wsMLwUIuKDdSqwr66lKkJJaKMWArN%2Fq5y0ww%2BmIygY6pgFm5VHyxou75IlIhCqw5OCE%2FD0qLNuCgEtJT4bLYGkyQ19eoyrb26kSqoOdCtvhA8KEo7PramokhXEoX1ht%2BIqWP%2FXBv%2BEtJxh0B2OOQOp0NKblNQoeXehEadQ3y5IFtgul43V6uR3in3g4mAhdB7UqjEm24bh50t4L6PoQjSqYusZ4OQn5QMndyoMS1YlhMIvQmvmnazJV3%2F3vq7dIYbNXSyLjWRN2&X-Amz-Signature=d12a92e3eae03f6b31bc225335eb18909f9d86d3d9def17834a6dfd0122951f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

