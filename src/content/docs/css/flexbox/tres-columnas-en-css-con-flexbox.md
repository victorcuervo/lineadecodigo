---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665432FV6N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bIVjfIJczc14BLIHhxKywaXNafwnwBS5Cq%2FiXiY63wIgLGqM7UYzV5A1u897ymsdLKgVNQ2FgO6q0C%2BV2HRuOwMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoew7%2Fb%2F0YWxNZhhircA6Pwc9v4GOPGVxWOpuRaT9%2ByFGtpYZVpA%2FG2GbtQbJqTpaWiPmmYKePyEShk%2FBwXNRH4NhsylxtHRxAjyjTuKpgncYnVVi3lqQJXQqVFFYe%2FHlqoSu2QaEDoPLwzg3h%2FXopoAQyOrx6kyzVFqJXPDayQ0VBY8j9Z%2FeE%2B%2FyApv1i91IADdAKF9SxY2gZDJHDfb%2FsNaGSmAsP%2BIfQdzG42tbIMLmSLGacPsjPGsZYdc4IQ1bK2VmOxNGWEK1YuQaN7Kw3giUNp%2F1b9m7wjgFXI8ZlQbBxh4aFiCX%2Bb4wx4lXeI9lqShS3Xz6zsUo9XWDfDXaiTK%2BI56XJNnYV1%2F1BgYu8bRQTsPRBKMqF9EMq00yOfmjQ16LiXUp9GGTkGu159tFTldZI3C35Qc90UFOik8tUV1qBrDl4uRGe3cEQu6ua6UdbMY3aYgqNvNjCagRVQVsHmYtQAJvQADufO3b%2BA0hDWLj3Wutk6%2FY3QwSnM5Ggwqjcnk%2FA9ZMchcSUT%2B4I2OOlXAsVjq83%2F6PpKMiU6OjuxCUd89gq5b5khml2of8EpiBB%2F1w6FdrHx71OM%2Fc00L6xFs9UNQMjLFQf%2FSNo10t%2FHgOa1K51aULsEortYHnwDWMhNhL%2BWMoZNqOsvMJ6f1MkGOqUBcyk575KT5HI10IGLIUD71ncYv%2BUA6kYti4vDzp2%2FFvEGWMKmcKurYiOIdYgtgppR32pOmgW9Acaaq%2FjVE%2B71UR6rWA8Nnx7YWYxBeX5LDIPgGXmiE9ZeZs0z9l1I1BMk9BAkajEZWughxgYFHqaXXcxlUsbdtn%2BRvbJ45AyD1Ij9IWLk68OqLt1jFt2XuzUah%2FgvC8L56AkKy2rNJJwZmAS5wv0x&X-Amz-Signature=132d7e3a75e957aff288af0f8e483419ed630d654d09675896de8bde6d8e34e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665432FV6N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bIVjfIJczc14BLIHhxKywaXNafwnwBS5Cq%2FiXiY63wIgLGqM7UYzV5A1u897ymsdLKgVNQ2FgO6q0C%2BV2HRuOwMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoew7%2Fb%2F0YWxNZhhircA6Pwc9v4GOPGVxWOpuRaT9%2ByFGtpYZVpA%2FG2GbtQbJqTpaWiPmmYKePyEShk%2FBwXNRH4NhsylxtHRxAjyjTuKpgncYnVVi3lqQJXQqVFFYe%2FHlqoSu2QaEDoPLwzg3h%2FXopoAQyOrx6kyzVFqJXPDayQ0VBY8j9Z%2FeE%2B%2FyApv1i91IADdAKF9SxY2gZDJHDfb%2FsNaGSmAsP%2BIfQdzG42tbIMLmSLGacPsjPGsZYdc4IQ1bK2VmOxNGWEK1YuQaN7Kw3giUNp%2F1b9m7wjgFXI8ZlQbBxh4aFiCX%2Bb4wx4lXeI9lqShS3Xz6zsUo9XWDfDXaiTK%2BI56XJNnYV1%2F1BgYu8bRQTsPRBKMqF9EMq00yOfmjQ16LiXUp9GGTkGu159tFTldZI3C35Qc90UFOik8tUV1qBrDl4uRGe3cEQu6ua6UdbMY3aYgqNvNjCagRVQVsHmYtQAJvQADufO3b%2BA0hDWLj3Wutk6%2FY3QwSnM5Ggwqjcnk%2FA9ZMchcSUT%2B4I2OOlXAsVjq83%2F6PpKMiU6OjuxCUd89gq5b5khml2of8EpiBB%2F1w6FdrHx71OM%2Fc00L6xFs9UNQMjLFQf%2FSNo10t%2FHgOa1K51aULsEortYHnwDWMhNhL%2BWMoZNqOsvMJ6f1MkGOqUBcyk575KT5HI10IGLIUD71ncYv%2BUA6kYti4vDzp2%2FFvEGWMKmcKurYiOIdYgtgppR32pOmgW9Acaaq%2FjVE%2B71UR6rWA8Nnx7YWYxBeX5LDIPgGXmiE9ZeZs0z9l1I1BMk9BAkajEZWughxgYFHqaXXcxlUsbdtn%2BRvbJ45AyD1Ij9IWLk68OqLt1jFt2XuzUah%2FgvC8L56AkKy2rNJJwZmAS5wv0x&X-Amz-Signature=90d8facef72b0bdce299941b7a7dd325b0d8d3bd17332a21ac6dd4b9a76707dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

