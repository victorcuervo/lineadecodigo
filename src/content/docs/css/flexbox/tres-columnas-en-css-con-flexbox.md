---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KHQKAD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTCf9rXTqhD0MsWPl8h9vZG1rjd8Ytzwz5RuRb%2F91P1AIhALqTc8IzwLVuzp2U47SeBtpaql6oHuLYjQDr1k7kWt7MKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4dQxzgMCXdXFxq6oq3AMcK9iwoTYYGUiBJql0KWiVEwvgc%2B6gpmOQKNhZZ2M%2F6gVDGhKPDYZc3HcPjGCSmUUP3YErES%2BpVf6JzSOZxVeIC7SV4z5oD5bus7EfFUQMR2UcjT%2Fu8dTCX1cZQeV2v%2BjJREade4QwLX2zE8a67VuvYxBd3tKOiNreN6bcT6YFu32oSkbxls03G5CqCM7deqkSjHPP%2Bcvz2mtqioNtgV8kGHtJT3ePh60wiGZqsCNm%2BSrZhFs2MrGdbs3Ia6GkU%2B4AdW83MSeX%2Fibp3DTBZGoyrjFxI18alsUTSCpkOzUWm43C4rjIqLqqBnjW3bUjUK4L733%2Fv0G1%2FKQzQw%2FPG4ZxPRK75PkheIolTv1k856FNcDnr9d7EgRK6lWlvdwSMMS8%2BukoGtaiNp8zK32gky9manaGPsqUKVOJrQ%2F2zuU2n7%2FfVet8CZEnjZd4Skk%2FLbKZoYZZbesc4BsKgmtYqmUidgLfwTLgk%2FvBVMYh%2Friy7bV9bW2SACwGnBswCE2TVqRj9EGRzXBX%2BWL5UyoPvzLs6ybySLflUrIBMSc5JFLCeaoqmNqkPrr3DcQ4FcLmItgA43xpOoiGI8zay66ePotqOFiHAcIgeaL2Zu9zaLloSFHJIxBOSe38hwEMnDDFyd7JBjqkASRlz%2BFYE5FwPty2EqxkWasnCcamH45umnaMmCtx0Km27DfY5qvvYVvFWYzvEQ4TQzHJ%2FokYfaD1nHI9PCREhykuUvbCnx%2FBFvrk7yZuvxTXePcm2sl1WNvNI2f4mavflMTBmx%2FVEoA0ppoR9Cj8nYLKPwA8MsAmjwfPcm6TxNR%2BCZwWMmYtLFwNwaMTontxA273gTdnYD0J6uvDHxwQ2xRy0mTO&X-Amz-Signature=fe8adfe23cea19ccd8210b71e18f9b7043daffd4bd1b4c064be42494b974aa1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KHQKAD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTCf9rXTqhD0MsWPl8h9vZG1rjd8Ytzwz5RuRb%2F91P1AIhALqTc8IzwLVuzp2U47SeBtpaql6oHuLYjQDr1k7kWt7MKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4dQxzgMCXdXFxq6oq3AMcK9iwoTYYGUiBJql0KWiVEwvgc%2B6gpmOQKNhZZ2M%2F6gVDGhKPDYZc3HcPjGCSmUUP3YErES%2BpVf6JzSOZxVeIC7SV4z5oD5bus7EfFUQMR2UcjT%2Fu8dTCX1cZQeV2v%2BjJREade4QwLX2zE8a67VuvYxBd3tKOiNreN6bcT6YFu32oSkbxls03G5CqCM7deqkSjHPP%2Bcvz2mtqioNtgV8kGHtJT3ePh60wiGZqsCNm%2BSrZhFs2MrGdbs3Ia6GkU%2B4AdW83MSeX%2Fibp3DTBZGoyrjFxI18alsUTSCpkOzUWm43C4rjIqLqqBnjW3bUjUK4L733%2Fv0G1%2FKQzQw%2FPG4ZxPRK75PkheIolTv1k856FNcDnr9d7EgRK6lWlvdwSMMS8%2BukoGtaiNp8zK32gky9manaGPsqUKVOJrQ%2F2zuU2n7%2FfVet8CZEnjZd4Skk%2FLbKZoYZZbesc4BsKgmtYqmUidgLfwTLgk%2FvBVMYh%2Friy7bV9bW2SACwGnBswCE2TVqRj9EGRzXBX%2BWL5UyoPvzLs6ybySLflUrIBMSc5JFLCeaoqmNqkPrr3DcQ4FcLmItgA43xpOoiGI8zay66ePotqOFiHAcIgeaL2Zu9zaLloSFHJIxBOSe38hwEMnDDFyd7JBjqkASRlz%2BFYE5FwPty2EqxkWasnCcamH45umnaMmCtx0Km27DfY5qvvYVvFWYzvEQ4TQzHJ%2FokYfaD1nHI9PCREhykuUvbCnx%2FBFvrk7yZuvxTXePcm2sl1WNvNI2f4mavflMTBmx%2FVEoA0ppoR9Cj8nYLKPwA8MsAmjwfPcm6TxNR%2BCZwWMmYtLFwNwaMTontxA273gTdnYD0J6uvDHxwQ2xRy0mTO&X-Amz-Signature=3368c2d322111922d558a4fb0c953704563c5df0b7849d659d9468f47ba8bb27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

