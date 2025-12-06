---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZGIF6PV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5u5DklJFwiFnHqEzPXd%2BioQH%2FzlL6%2BLDQRJECmOelRAiBVkinzY4%2FpiUUbjFfO3%2BLTWipJ%2BcHEb3ystYQNYCoiZir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMIcneYDGp3LtlM3zdKtwDm6KiBoyirfeo%2FJ3Ah8q%2FvLuXPmTyod%2BO0Ce9fef5f5CGnhteLfhpJvB8dIwMpMaR2ElT7WHNWLhCyfxiZg8JLcVkMxus9X7O9EKEZVVGZW1d7oMloSmezBJcr7y62t7qddZdASnXjPidXlKyGmfSHWIIOTkQS5ChkV0hoFjFejmLP3qcZF5DNFWTmCdYvt1D2Yb5ybx564bpNrTMi6LDV4OaOGoTc1YhPt0ywJu7x5wiYmv7rjHCi%2Fpu5jd2Wa1tOFGFhScwYjQJ1kja%2BqMxLJn3VAkSQM%2Bj3YNTmh0OtGL3zZyp2AIMdZjZXIkyvKBJLndjhD8%2FSjKf5dNH0ctE8muKrJ8s4WIO2K5yDMfs5GxQ038tUl3KF1TsKwy%2Ftnhj%2FlMZqaxpoPJnQLt4KHMfuOoU4eFW%2FZtB0A%2BmL%2BPVrH6P6ZEuBItuwN0sYlba%2FU14ASRxBPxiQYCG10dwFlecbRn1I9YVLgjun9V57Brz%2FS6%2FmdjF9LjspRxOT1T9nQKr6IUi4dGR6LJJQt13TuwDLpxgeraJdPkib9dZ17Vf72KEdNhX78gQ5HWdo4RBC564MMZ48HdCBAJMNvlTKICex9voTbyj1mINXBfY4AyHsdJkIkbSk3wu3Ei6D%2BgwoP3OyQY6pgFMmiT8%2BjJthL86YMmoBxqiLNATFsnGcZSA26a%2BIQSoQ%2FrByEkmnQmWxQ0C6qKKwWiAzEtmYl8lvphNG0QtVEFxpNBVVcxZa4p1p2KdR%2BmmTxy4umlvwLz6uWQb3cm4lIN3nmhROaizx3%2BSxOtOROpg%2Fu0eFmnv5Vf82%2BmVUVWeyH31VGYcIx2O2ozrfBAOnjD65dG2xR6jHqgfOxBATu0bKWd8OLwp&X-Amz-Signature=d65e923a5aa28393696e71b7b75badab15d25cdc7ae1b4fad6fbfac81b1bda07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZGIF6PV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5u5DklJFwiFnHqEzPXd%2BioQH%2FzlL6%2BLDQRJECmOelRAiBVkinzY4%2FpiUUbjFfO3%2BLTWipJ%2BcHEb3ystYQNYCoiZir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMIcneYDGp3LtlM3zdKtwDm6KiBoyirfeo%2FJ3Ah8q%2FvLuXPmTyod%2BO0Ce9fef5f5CGnhteLfhpJvB8dIwMpMaR2ElT7WHNWLhCyfxiZg8JLcVkMxus9X7O9EKEZVVGZW1d7oMloSmezBJcr7y62t7qddZdASnXjPidXlKyGmfSHWIIOTkQS5ChkV0hoFjFejmLP3qcZF5DNFWTmCdYvt1D2Yb5ybx564bpNrTMi6LDV4OaOGoTc1YhPt0ywJu7x5wiYmv7rjHCi%2Fpu5jd2Wa1tOFGFhScwYjQJ1kja%2BqMxLJn3VAkSQM%2Bj3YNTmh0OtGL3zZyp2AIMdZjZXIkyvKBJLndjhD8%2FSjKf5dNH0ctE8muKrJ8s4WIO2K5yDMfs5GxQ038tUl3KF1TsKwy%2Ftnhj%2FlMZqaxpoPJnQLt4KHMfuOoU4eFW%2FZtB0A%2BmL%2BPVrH6P6ZEuBItuwN0sYlba%2FU14ASRxBPxiQYCG10dwFlecbRn1I9YVLgjun9V57Brz%2FS6%2FmdjF9LjspRxOT1T9nQKr6IUi4dGR6LJJQt13TuwDLpxgeraJdPkib9dZ17Vf72KEdNhX78gQ5HWdo4RBC564MMZ48HdCBAJMNvlTKICex9voTbyj1mINXBfY4AyHsdJkIkbSk3wu3Ei6D%2BgwoP3OyQY6pgFMmiT8%2BjJthL86YMmoBxqiLNATFsnGcZSA26a%2BIQSoQ%2FrByEkmnQmWxQ0C6qKKwWiAzEtmYl8lvphNG0QtVEFxpNBVVcxZa4p1p2KdR%2BmmTxy4umlvwLz6uWQb3cm4lIN3nmhROaizx3%2BSxOtOROpg%2Fu0eFmnv5Vf82%2BmVUVWeyH31VGYcIx2O2ozrfBAOnjD65dG2xR6jHqgfOxBATu0bKWd8OLwp&X-Amz-Signature=02fe5dc1cbf2f65fd74d8c0677201d9fa749ee5025595f1842ddc4dfbf7b64a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

