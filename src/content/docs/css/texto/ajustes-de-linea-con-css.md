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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWZIC3P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXimkVQyWTw6t%2Be5mak957N%2FdI9Buzy3bXyvzbkDnJNQIgIotvwWwf9J9etVcWQAy65DucfAmWKIgsbVP9JILlRrgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMZe%2FZjP9dnHmri0ySrcA8UG3zsaNeSMN0h1LZR3TCrpj7NfVu8upVl7sp0iuiqyvVx447PxrSoH3wgd5pSlR%2Bs0S0UPMruh7fxKq6gDkFIO5lBeijoie5ljwFeydARaAeZMLwBHUadnjiSXb2yQlHmtzBxzQRKlPwI4eAd6k0Ikl56Aw92%2F9pbqC1ViI9fNFJBQNPGODiFRrSCemfG1xfzQfU6J1qm90oVaL98%2Bj27sSJQfvGrnu0bKJ51WNDEnwBWhsUwWxZgyBT7V%2BSNOjcegtKCQNsuD64XW9ghasXKyl8waPZEgoTkdg0wzut8lG3ZOxsA0Cp0A3ue8GLPl7ev9nxGwd0MYAKeWrH7DhXA8%2B37Ail0Q4%2BdgECHKlx4J2%2BYsluGm6cfww0nyHkgmvTks3NcKs07PoOntgmPQLQSUvhDB6BTqSXQ9Vqqb5c1%2BHhSd1H6m5ARtlnIDMSaDxC11M%2FJMFLOcM6Jgz5Xm7Ebg%2Fs4C%2F2c5M0c1q%2BvZgL74RlLeu3966y1EDnMTtgGKU%2F%2FYr7fX3SH%2BI5ll%2F%2BqfBziHXa4AT351GbOF0jHyYj%2Bn%2BEdRTUtC6gC6iZ0W2jc31fjOYG8lPetM002Us%2FCLjec0wC0DoZlaG3j9gig5MOJ6Pl32BQxdPT%2B2gqBBMPPwicoGOqUBCUVCUlmQy4zrrAEQyVAGpHfqKLlcl%2BCsBHhLTKCc10dbDaAjqjs2fwQWFivu%2B6o5W3%2F3Z3Qanjgu8doow8coP2CzG9Io%2F6LfrGIZj2Cumf89YO1n%2FtlDfsLpw0LQ2f3DcTpE1%2BlCUBrwWd92evjKLdPVTpK9OZ%2B2qruHZToRAWD6kMF5Be6Sxn%2BChohc%2Bh2MduqxY6s8v8XgEbSKCxzAyvnjd0X3&X-Amz-Signature=7dcd071e9d2e32b33065ae7a957d53a6f10c3db93d4db46066f095a9ca5ef1a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWZIC3P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXimkVQyWTw6t%2Be5mak957N%2FdI9Buzy3bXyvzbkDnJNQIgIotvwWwf9J9etVcWQAy65DucfAmWKIgsbVP9JILlRrgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMZe%2FZjP9dnHmri0ySrcA8UG3zsaNeSMN0h1LZR3TCrpj7NfVu8upVl7sp0iuiqyvVx447PxrSoH3wgd5pSlR%2Bs0S0UPMruh7fxKq6gDkFIO5lBeijoie5ljwFeydARaAeZMLwBHUadnjiSXb2yQlHmtzBxzQRKlPwI4eAd6k0Ikl56Aw92%2F9pbqC1ViI9fNFJBQNPGODiFRrSCemfG1xfzQfU6J1qm90oVaL98%2Bj27sSJQfvGrnu0bKJ51WNDEnwBWhsUwWxZgyBT7V%2BSNOjcegtKCQNsuD64XW9ghasXKyl8waPZEgoTkdg0wzut8lG3ZOxsA0Cp0A3ue8GLPl7ev9nxGwd0MYAKeWrH7DhXA8%2B37Ail0Q4%2BdgECHKlx4J2%2BYsluGm6cfww0nyHkgmvTks3NcKs07PoOntgmPQLQSUvhDB6BTqSXQ9Vqqb5c1%2BHhSd1H6m5ARtlnIDMSaDxC11M%2FJMFLOcM6Jgz5Xm7Ebg%2Fs4C%2F2c5M0c1q%2BvZgL74RlLeu3966y1EDnMTtgGKU%2F%2FYr7fX3SH%2BI5ll%2F%2BqfBziHXa4AT351GbOF0jHyYj%2Bn%2BEdRTUtC6gC6iZ0W2jc31fjOYG8lPetM002Us%2FCLjec0wC0DoZlaG3j9gig5MOJ6Pl32BQxdPT%2B2gqBBMPPwicoGOqUBCUVCUlmQy4zrrAEQyVAGpHfqKLlcl%2BCsBHhLTKCc10dbDaAjqjs2fwQWFivu%2B6o5W3%2F3Z3Qanjgu8doow8coP2CzG9Io%2F6LfrGIZj2Cumf89YO1n%2FtlDfsLpw0LQ2f3DcTpE1%2BlCUBrwWd92evjKLdPVTpK9OZ%2B2qruHZToRAWD6kMF5Be6Sxn%2BChohc%2Bh2MduqxY6s8v8XgEbSKCxzAyvnjd0X3&X-Amz-Signature=4121b780ea2f6fa53a50afc567d38b27c693ac09c009f9334b69badf51ad7de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

