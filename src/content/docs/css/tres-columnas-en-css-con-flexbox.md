---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZSSDM3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBVlPKmjuGkOI2atP%2BVF9zov87YOf%2F6FOEts9R3PHYZvAiEAzYGNpJdFCacUmnt2lY3Uu06hYKHOy7Chi8U3TGYzlEkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNbd3Gb8qXuJLFe8FSrcA7OMheNWKGbxVQeLSNgPu%2FUYEgkpuu2M21yoE2T9Zi%2BUEOfbWgTTJN6761Ted9Hu1bn85mOe68YNV9BLIMHZe1AePomzG%2F87MSKX9juK6Pp1fudmLkuuz7QfX2KfaPSkSE9x2Um4arU6ea4Rt6Ww7ol9UocsW9xoavSAGtJgJ6ib1ro0fOgSNy0EtjbxL3%2BqabWGTcI3iS5tr9Cb%2B%2BcWDGPpiwpdEVwFowwH19E10MKCcXru%2BeARiCQ8wACfcw%2B0aUuXy4XAt9%2FXPKl8GzYSw8oKHs43cP7su2KYQd6DYsV99Ajz9zJZB6YwbjJpTisw%2Fy9qsKZdy5gDiqlUy4hfSa3nPBKiN4tND74U8%2B84augByd3GhpPdkbW5AP76XNsYJOTVcrKsQTClCr6BgpzM8MKw%2FfBFdR3BUSze0%2BfN5n2b5NXZPUxda6PWYtIzQa0KCHmrCU3Wj7zRqQEZ3XsCXJeBE3SE2nGG%2Ft8FNyc0lKWuNlHD5lrYQVhMGSWOW%2Bq%2FkqYzks3CYNH2lES82y%2BqoMIdI%2Bv1Cr18pbIs2MVpZHGKIZuqrezo8Gi8JzrRi5XihNeOOxkblmTwDGvBzAqH9MXoTwkqeg9WYCQiBbAvwp%2BHuNgp5uigI%2BLSUUEFMMPcwskGOqUBpYliLweGBHEqH6V4C5GdrI1zmb0bsw5a%2F2ccPMNSMWCH6Je5LzKTDB5WJuG577ERmX8WT2BUpFsBe%2B5Zv4szDZGt%2Bg6V%2BpVDIQ8bDko9%2BGrGukLMfusLD7fqYOo6xiQEKGZ0te9TL6ObPYYQ8X4LpZlAG9AcyrExers%2Bnv5418OMx7P7zEt8kRJ5NlOoa0RgH7%2BI%2FcHqce0x2pgpfPB%2FUG8Jralp&X-Amz-Signature=7deb51fc3159aae812dc08a708399480c259f3cbd663dbbbe9c44d689edfc43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZSSDM3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBVlPKmjuGkOI2atP%2BVF9zov87YOf%2F6FOEts9R3PHYZvAiEAzYGNpJdFCacUmnt2lY3Uu06hYKHOy7Chi8U3TGYzlEkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNbd3Gb8qXuJLFe8FSrcA7OMheNWKGbxVQeLSNgPu%2FUYEgkpuu2M21yoE2T9Zi%2BUEOfbWgTTJN6761Ted9Hu1bn85mOe68YNV9BLIMHZe1AePomzG%2F87MSKX9juK6Pp1fudmLkuuz7QfX2KfaPSkSE9x2Um4arU6ea4Rt6Ww7ol9UocsW9xoavSAGtJgJ6ib1ro0fOgSNy0EtjbxL3%2BqabWGTcI3iS5tr9Cb%2B%2BcWDGPpiwpdEVwFowwH19E10MKCcXru%2BeARiCQ8wACfcw%2B0aUuXy4XAt9%2FXPKl8GzYSw8oKHs43cP7su2KYQd6DYsV99Ajz9zJZB6YwbjJpTisw%2Fy9qsKZdy5gDiqlUy4hfSa3nPBKiN4tND74U8%2B84augByd3GhpPdkbW5AP76XNsYJOTVcrKsQTClCr6BgpzM8MKw%2FfBFdR3BUSze0%2BfN5n2b5NXZPUxda6PWYtIzQa0KCHmrCU3Wj7zRqQEZ3XsCXJeBE3SE2nGG%2Ft8FNyc0lKWuNlHD5lrYQVhMGSWOW%2Bq%2FkqYzks3CYNH2lES82y%2BqoMIdI%2Bv1Cr18pbIs2MVpZHGKIZuqrezo8Gi8JzrRi5XihNeOOxkblmTwDGvBzAqH9MXoTwkqeg9WYCQiBbAvwp%2BHuNgp5uigI%2BLSUUEFMMPcwskGOqUBpYliLweGBHEqH6V4C5GdrI1zmb0bsw5a%2F2ccPMNSMWCH6Je5LzKTDB5WJuG577ERmX8WT2BUpFsBe%2B5Zv4szDZGt%2Bg6V%2BpVDIQ8bDko9%2BGrGukLMfusLD7fqYOo6xiQEKGZ0te9TL6ObPYYQ8X4LpZlAG9AcyrExers%2Bnv5418OMx7P7zEt8kRJ5NlOoa0RgH7%2BI%2FcHqce0x2pgpfPB%2FUG8Jralp&X-Amz-Signature=6a8e2cb2588716be2fa9cac4542dbd7cde00284ff011e9e9e59309bba9bea7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

