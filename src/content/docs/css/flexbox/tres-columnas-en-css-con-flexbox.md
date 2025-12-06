---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HUPHQT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa5Txuvi%2F9Shb0Vtxsc66zkwwmgrGjZqvKOsuooviu3QIhAI29WUD%2F8tgUqxKkInuh%2BYEoF1WWN%2FzP2YN3RyQBXxFcKv8DCH8QABoMNjM3NDIzMTgzODA1Igw0PeX%2Bz47ejYDTC%2BQq3AN78ktfFskWV5jLAijOZeWsciRiDw9S0qfLjoRIkYOT%2FN720hMrBN1QSh6PSEi7QP0LVUAimtRSy%2FiIR4Du6Z%2BK39q8QCxzMNHupQmkcPn%2Bh8ywMgnmCKBSQr0v9UKhs%2Fx2tdbLVuDWhg0OYLjjkcaL4CsIdUPn343y4lo6k6AP44RrsQ0kO4SUxkPBXVxeDOzwwkG1sTYtDfBYbqdFYPDzW9pmR%2F2zBg6RsH38Wqux6Zvs48Msu%2FtE1ULs02ShVWGVKp73t%2BXAJTXKefPe3F2r9UUz8tppMqh21aLc7BTwfgJ90zjveCRnbLLedajhKKVy%2B8wKyV%2BgWWFXqqN8Rr5ibqOVqkAQZVyBOTiAGCInur4BGpweKOP5rE4Qdrye5Yld7Bywz93932uuIdcHC7YzsrCQXLHizzvxxazO1yuYAe%2BFri7jfI3eNe%2BNK2XNpgdvTHND0BxyMIvdurhxh%2FPn7Z%2BKEovPLFzeO31z5sGqiGTFUmGq%2FQ38spV3RSNB90CrskKZ%2FxvLJ6nP3T2YGvc1is6Phvo8R8V7cUxPzOgusjiR48TinvGx%2FgRhAMioXhFbfnqrwi1KEYucMGQNRAFp6llvEQYtfDrNAzWifxUyesH6NxNi7FB39tkNjDC709LJBjqkAUSeOHpmNzHymTrHDsiSAa4VSdQdH%2BL258nM4%2FN%2BhMOtyBwEyclvWrEGW6Qd0gu69Wwpd3W94eDHalV1nN85OiVZFqkvWPI2t%2BYXdSCo5y%2BI93ytsqPSvzgkTVupWAQ%2FK859fSrkOXHgYWtvhUMK%2FHmoovZrqDbeEO3S8yi0jywPDlNF1QL2Od5RHDB0orgZPun7zDjpFGcAKchuOgHx7AehcFzb&X-Amz-Signature=983557477e6e4421b42c1178517044dd1b0c16929a4dd347fe70fa7e3985e96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HUPHQT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa5Txuvi%2F9Shb0Vtxsc66zkwwmgrGjZqvKOsuooviu3QIhAI29WUD%2F8tgUqxKkInuh%2BYEoF1WWN%2FzP2YN3RyQBXxFcKv8DCH8QABoMNjM3NDIzMTgzODA1Igw0PeX%2Bz47ejYDTC%2BQq3AN78ktfFskWV5jLAijOZeWsciRiDw9S0qfLjoRIkYOT%2FN720hMrBN1QSh6PSEi7QP0LVUAimtRSy%2FiIR4Du6Z%2BK39q8QCxzMNHupQmkcPn%2Bh8ywMgnmCKBSQr0v9UKhs%2Fx2tdbLVuDWhg0OYLjjkcaL4CsIdUPn343y4lo6k6AP44RrsQ0kO4SUxkPBXVxeDOzwwkG1sTYtDfBYbqdFYPDzW9pmR%2F2zBg6RsH38Wqux6Zvs48Msu%2FtE1ULs02ShVWGVKp73t%2BXAJTXKefPe3F2r9UUz8tppMqh21aLc7BTwfgJ90zjveCRnbLLedajhKKVy%2B8wKyV%2BgWWFXqqN8Rr5ibqOVqkAQZVyBOTiAGCInur4BGpweKOP5rE4Qdrye5Yld7Bywz93932uuIdcHC7YzsrCQXLHizzvxxazO1yuYAe%2BFri7jfI3eNe%2BNK2XNpgdvTHND0BxyMIvdurhxh%2FPn7Z%2BKEovPLFzeO31z5sGqiGTFUmGq%2FQ38spV3RSNB90CrskKZ%2FxvLJ6nP3T2YGvc1is6Phvo8R8V7cUxPzOgusjiR48TinvGx%2FgRhAMioXhFbfnqrwi1KEYucMGQNRAFp6llvEQYtfDrNAzWifxUyesH6NxNi7FB39tkNjDC709LJBjqkAUSeOHpmNzHymTrHDsiSAa4VSdQdH%2BL258nM4%2FN%2BhMOtyBwEyclvWrEGW6Qd0gu69Wwpd3W94eDHalV1nN85OiVZFqkvWPI2t%2BYXdSCo5y%2BI93ytsqPSvzgkTVupWAQ%2FK859fSrkOXHgYWtvhUMK%2FHmoovZrqDbeEO3S8yi0jywPDlNF1QL2Od5RHDB0orgZPun7zDjpFGcAKchuOgHx7AehcFzb&X-Amz-Signature=89bdf1a5fcb6e488b947c25f81c42523b03e7686309e421359441d88a750b42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

