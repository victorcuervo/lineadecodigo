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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VG3NVD4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMiEFDHpBfilfEGckTk43Sr93Z7%2FB70AqISi5U3NfRgIhAOv7BL7vMGkf6R4axJz5RtDyfm7k9OlLne%2FIK4OjFpG1KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVPHIthWojwFg1AJEq3APtqLHAr5eugugcKhJpv24za5OHl3rYUgh88hPnapkFoIpLM2Klg%2B1b%2FviUxup%2Fm42nK19jE5KhVE%2BpLE0qHLAMArMu3GpLzcxX7bqVn9e2b8%2FQrI%2B7%2BXLh7XblKZtzqxOKos6aVbTo53j1zG6%2BTbl%2FSWczIKmjm78mFhghbYC8A9Tjr0VgSpRdGRjY3yj7gHBFr9PFaOBhZ3c%2FGb9ep7cMeiamGa%2Bip0T6gk7VZ3gWuf8YRZnGSDoaliS9KIAiiu9gEGk2VgScnssK%2FpnL8wTaO4YPQptwV2DNXcKXcKHGdllfTnWnDoT%2Fm7ntQfh0iIPsdR9IFq%2BO8GMgRH8hs2eDbiVJr1biRW%2BGVsiG4RvCHVma1kb03vlOi6XWXTYKx0t%2FosdWXxB41OOQFtZxADV1Lfx96CqVRepWVDynlNk%2F%2BUMlsGiByUlm4PMsTEfVZBLotmWnqO7q%2B7UfWn4ZGqmgfnlOC2CYwz%2FojqGAWjXdlpi%2BIbsFDKYbpIxyc6V5PDk3I0mq7k0EvCr1Xh408nthwkMVZ8icCIPAPmgK7vazi1rnqIQCZ6mXeBc5H3%2Bakh3o6sE2TlEgcNIh6I%2Fb4QxC1a72A%2F33ivSp%2Fc2%2FbE46sqlSpYuKXB0oaqhk%2BjDRi4zKBjqkAflG%2B3jXGyPz%2BErlcaEnTvWUuoDXZ2D7HnyTWII6X7AM%2Fpn0KewBiqHXND%2BD2q4xfZ8f402d6eMwS17hi8sNCk4mXM%2FhSqXxOssMDe74lGOfPyoCsM%2FPznp%2Bzq1R8ig9HE4XbCZKMnLMYX%2BtGNVYM5qudbYq3Vbmdny3xItge8YC%2BqOm1Rmw2ehKcq3knmosFE6uUxGr1IR0Xb983KvaoPMuFHq3&X-Amz-Signature=370e3f4d02cbfd78e83c88464dfd69dd328bc862ec0f4509465c8e60e20583fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VG3NVD4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMiEFDHpBfilfEGckTk43Sr93Z7%2FB70AqISi5U3NfRgIhAOv7BL7vMGkf6R4axJz5RtDyfm7k9OlLne%2FIK4OjFpG1KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVPHIthWojwFg1AJEq3APtqLHAr5eugugcKhJpv24za5OHl3rYUgh88hPnapkFoIpLM2Klg%2B1b%2FviUxup%2Fm42nK19jE5KhVE%2BpLE0qHLAMArMu3GpLzcxX7bqVn9e2b8%2FQrI%2B7%2BXLh7XblKZtzqxOKos6aVbTo53j1zG6%2BTbl%2FSWczIKmjm78mFhghbYC8A9Tjr0VgSpRdGRjY3yj7gHBFr9PFaOBhZ3c%2FGb9ep7cMeiamGa%2Bip0T6gk7VZ3gWuf8YRZnGSDoaliS9KIAiiu9gEGk2VgScnssK%2FpnL8wTaO4YPQptwV2DNXcKXcKHGdllfTnWnDoT%2Fm7ntQfh0iIPsdR9IFq%2BO8GMgRH8hs2eDbiVJr1biRW%2BGVsiG4RvCHVma1kb03vlOi6XWXTYKx0t%2FosdWXxB41OOQFtZxADV1Lfx96CqVRepWVDynlNk%2F%2BUMlsGiByUlm4PMsTEfVZBLotmWnqO7q%2B7UfWn4ZGqmgfnlOC2CYwz%2FojqGAWjXdlpi%2BIbsFDKYbpIxyc6V5PDk3I0mq7k0EvCr1Xh408nthwkMVZ8icCIPAPmgK7vazi1rnqIQCZ6mXeBc5H3%2Bakh3o6sE2TlEgcNIh6I%2Fb4QxC1a72A%2F33ivSp%2Fc2%2FbE46sqlSpYuKXB0oaqhk%2BjDRi4zKBjqkAflG%2B3jXGyPz%2BErlcaEnTvWUuoDXZ2D7HnyTWII6X7AM%2Fpn0KewBiqHXND%2BD2q4xfZ8f402d6eMwS17hi8sNCk4mXM%2FhSqXxOssMDe74lGOfPyoCsM%2FPznp%2Bzq1R8ig9HE4XbCZKMnLMYX%2BtGNVYM5qudbYq3Vbmdny3xItge8YC%2BqOm1Rmw2ehKcq3knmosFE6uUxGr1IR0Xb983KvaoPMuFHq3&X-Amz-Signature=21fb785bebb382c521ff26965c9e03a13360641094ba66e0432a53ac3c7daa44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

