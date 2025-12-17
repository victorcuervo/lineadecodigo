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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNR4TIQ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc55W7Nq9B26PNeuBU01OmvOtvS1O%2FesHL4UUXqvV1wQIhAJ79bPBNWT%2FAo1JBYrVzl4FR2pq0ba3G5jidVTHKOqtpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGfoemDsNLM3W6FoMq3AP0LcHJ3zC9Frag6jnYhV1timakYCNUCxt7%2BAWJFTGa7JmTijgBKQRZuBj8iuauBUcY2Rma1gK0siQwoSIAQL%2B9EDlNszmWIY%2FUvIQ4t20%2BrzzbSdZfPmkkK3f97JJfyEJjLHnBf1DXWe%2Fk4q4%2Bf5aQxd%2BoSDqr2cELa%2FB8Yhv5C001z%2BPAn5VPtbQVKVjJnovcegB4iyxfK52%2F3skUXRHKVzNfeag1%2BDkyMu7cYa9gsQhzsE3o6FXe6uHTef5OOLtthq8WDx%2FLKrkYNgtpYWWQL%2FtQ2NY%2Bo8Y701oUHdwkLKpZdHyV%2Bcgo0l2IvqNI1qsm%2FqN5MI%2FmUnA14NnenxdeCPxdi6Xqivh2FHtOwGOJEW%2BOW5MaCFmm4kBX5bYfPUmKmHPG8HFVxtqZXGegcMYNd%2FQYjQfTgF%2FDJwBWRFdociZTBcIdK7xKdX2QTOKLtot3aL23f2Pj6V0M0hxQbMcqZqwAgsLA0qlqb%2BZXRCGJEYU4qbiBczy%2Boz9SwAutKkKY7UrN5cXjLnyzmsordQROD3%2Bu8V19ydjyhcxBWcajvrLOzWQup4C8gJSFBXGOwJ%2Fl7TtWZS%2Bj5Q0UMbfCTy8LGc%2Fhz%2BnOf7HVaYY2R7tft91an5edqEyLwmzn4zDQgIvKBjqkAeLZCKiG4X%2FIhk69zDDiaIGdWARSnOxdDrKBohqimVoGya59NOstLEjte3PSHxV4pWfabSPwPWjw58ScTY3ve9hIX9qt3Bz91TRrAPECQU94Oxr6oilvWa4VNIwZOI7qWMaGYAGWlh8hr1uEOAh2JDShpUxLFEzbA%2FU%2BqWoWYyu55gIYYyEOJAc%2Bt7ZrpNxZDmjRY7%2Fz2hkxVvox9ndjgLWnHsZr&X-Amz-Signature=2e8d4f5fe6bcfacee31fa8427c8f068fe2f5e600998896268f89f4535dfb6a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNR4TIQ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc55W7Nq9B26PNeuBU01OmvOtvS1O%2FesHL4UUXqvV1wQIhAJ79bPBNWT%2FAo1JBYrVzl4FR2pq0ba3G5jidVTHKOqtpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGfoemDsNLM3W6FoMq3AP0LcHJ3zC9Frag6jnYhV1timakYCNUCxt7%2BAWJFTGa7JmTijgBKQRZuBj8iuauBUcY2Rma1gK0siQwoSIAQL%2B9EDlNszmWIY%2FUvIQ4t20%2BrzzbSdZfPmkkK3f97JJfyEJjLHnBf1DXWe%2Fk4q4%2Bf5aQxd%2BoSDqr2cELa%2FB8Yhv5C001z%2BPAn5VPtbQVKVjJnovcegB4iyxfK52%2F3skUXRHKVzNfeag1%2BDkyMu7cYa9gsQhzsE3o6FXe6uHTef5OOLtthq8WDx%2FLKrkYNgtpYWWQL%2FtQ2NY%2Bo8Y701oUHdwkLKpZdHyV%2Bcgo0l2IvqNI1qsm%2FqN5MI%2FmUnA14NnenxdeCPxdi6Xqivh2FHtOwGOJEW%2BOW5MaCFmm4kBX5bYfPUmKmHPG8HFVxtqZXGegcMYNd%2FQYjQfTgF%2FDJwBWRFdociZTBcIdK7xKdX2QTOKLtot3aL23f2Pj6V0M0hxQbMcqZqwAgsLA0qlqb%2BZXRCGJEYU4qbiBczy%2Boz9SwAutKkKY7UrN5cXjLnyzmsordQROD3%2Bu8V19ydjyhcxBWcajvrLOzWQup4C8gJSFBXGOwJ%2Fl7TtWZS%2Bj5Q0UMbfCTy8LGc%2Fhz%2BnOf7HVaYY2R7tft91an5edqEyLwmzn4zDQgIvKBjqkAeLZCKiG4X%2FIhk69zDDiaIGdWARSnOxdDrKBohqimVoGya59NOstLEjte3PSHxV4pWfabSPwPWjw58ScTY3ve9hIX9qt3Bz91TRrAPECQU94Oxr6oilvWa4VNIwZOI7qWMaGYAGWlh8hr1uEOAh2JDShpUxLFEzbA%2FU%2BqWoWYyu55gIYYyEOJAc%2Bt7ZrpNxZDmjRY7%2Fz2hkxVvox9ndjgLWnHsZr&X-Amz-Signature=c9bbd493dc1bba4720e623d95786cd069a9af31d3d14efcf375a2ef8461d9c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

