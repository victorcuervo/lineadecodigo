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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AOWWQZ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4tfPBYvOAFynkK%2Bw6LHyFY00QWlM3L3H39005LAHEyAIgNrqRUMgSW%2BSDpUlJeHrvoB%2BciXLJ2y%2BQJwYVxj8glLMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDB9bEyAmoziVfL9heCrcA0opmuAviB5dN4NXDU33U3JyoHwfwC23Oi6Aav4UujFuGP%2FnSf%2FUF7Ogbk8friTnP%2FqPY2B1o8mP4eeo4mTs2PHiZTkBUAYciPv2Um5V%2FJSMtk6XMJafzdrLFI9qNJ3FTTezrr2X0OuGmS6hxk2S4fwBOhLs80pb326GotVyrQmqzuhhSPXR7pJsGUzbYnV6aOfFac39MnEWx%2FzRzvW4hY2Ht0EWURPUomUNYUj5ygln2JsKd2T4G92MFVJGAn0sdO6EuPRGrqDLru%2Bu4f3PECwYNhYWdF4V9iVWGx3vU68bjvOLnaLyCNwKD1zh9otvp421rE2epQr1UBVjU%2FSaJH4pHM5VnMGgMHG%2FjijpMnsk30W2fXCw7%2BA%2FnvsIu9HZHNm%2BN0IBkb0qe%2BkddRx9UPrCPz58dSDbd3BUeMEpjyXUpJAHyGI1rIkUFC8ytXiopm2jhHfr49qxKNvDgnidRH3KeOPJCVcFKheulMXYvLHzrE6qrJ%2BCQo6lXsiqHMi3OSDoGHJ%2B38%2BK9NRhb5aWiTfxAx%2B6eQEpqjHQWK0MKD7MciSX4olUPEolnzwY2Tr%2Fxh%2FbJgSa6%2B8cbI%2B8PVCmiAWipv6igWKrb4U5IDGdCaJUFiP6mZY5rSittdV4MLuyiMoGOqUBb49Fb93xfCOkQugbp9Of1ZrgSrkCNjfDXtWKwhpgVa01F8im9Hd7TWi1%2BdTcifEA5rJlsMWFecNz1YYBKvLUMOL5x3R3vQTM%2BRRey8MwopjoEXqV436P%2FNw5v4TZqjxXj%2B04ih%2BT9XS6SyCHGnVb1%2BuVlZKTAHAsktSumZLlDrNURgCrJrqqEbbu9RkOcmabpwPYHRNCpV78wDnocQv7N2gFELh6&X-Amz-Signature=6e9605a79bdc52248626317fcf8e2dd5808a266924e918da6151c82711f29680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AOWWQZ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4tfPBYvOAFynkK%2Bw6LHyFY00QWlM3L3H39005LAHEyAIgNrqRUMgSW%2BSDpUlJeHrvoB%2BciXLJ2y%2BQJwYVxj8glLMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDB9bEyAmoziVfL9heCrcA0opmuAviB5dN4NXDU33U3JyoHwfwC23Oi6Aav4UujFuGP%2FnSf%2FUF7Ogbk8friTnP%2FqPY2B1o8mP4eeo4mTs2PHiZTkBUAYciPv2Um5V%2FJSMtk6XMJafzdrLFI9qNJ3FTTezrr2X0OuGmS6hxk2S4fwBOhLs80pb326GotVyrQmqzuhhSPXR7pJsGUzbYnV6aOfFac39MnEWx%2FzRzvW4hY2Ht0EWURPUomUNYUj5ygln2JsKd2T4G92MFVJGAn0sdO6EuPRGrqDLru%2Bu4f3PECwYNhYWdF4V9iVWGx3vU68bjvOLnaLyCNwKD1zh9otvp421rE2epQr1UBVjU%2FSaJH4pHM5VnMGgMHG%2FjijpMnsk30W2fXCw7%2BA%2FnvsIu9HZHNm%2BN0IBkb0qe%2BkddRx9UPrCPz58dSDbd3BUeMEpjyXUpJAHyGI1rIkUFC8ytXiopm2jhHfr49qxKNvDgnidRH3KeOPJCVcFKheulMXYvLHzrE6qrJ%2BCQo6lXsiqHMi3OSDoGHJ%2B38%2BK9NRhb5aWiTfxAx%2B6eQEpqjHQWK0MKD7MciSX4olUPEolnzwY2Tr%2Fxh%2FbJgSa6%2B8cbI%2B8PVCmiAWipv6igWKrb4U5IDGdCaJUFiP6mZY5rSittdV4MLuyiMoGOqUBb49Fb93xfCOkQugbp9Of1ZrgSrkCNjfDXtWKwhpgVa01F8im9Hd7TWi1%2BdTcifEA5rJlsMWFecNz1YYBKvLUMOL5x3R3vQTM%2BRRey8MwopjoEXqV436P%2FNw5v4TZqjxXj%2B04ih%2BT9XS6SyCHGnVb1%2BuVlZKTAHAsktSumZLlDrNURgCrJrqqEbbu9RkOcmabpwPYHRNCpV78wDnocQv7N2gFELh6&X-Amz-Signature=7c00818457299317ef18281447b8b00720c235d7e7ea84f8052e025167d64527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

