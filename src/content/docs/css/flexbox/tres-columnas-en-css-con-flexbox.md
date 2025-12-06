---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X432Q56I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp0oYkLRayCHV4gTskgBoo8o1%2FeAM3%2F6WR3IaAAJVHkAiBE8T2%2F2ghHLFVpkeJVnZq6LBAyQDzvBvqMCqZKQiKeKyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMpaPXx8nV2my34qtjKtwDTs1WgjcUzvyWb6NM%2BKyEpRLGn3mXgYfUApQ1vtgDoIs%2B7TAJSG6A69soTRN6SnK%2BsxRSU9qdAEFVQuHO%2FyKrtJA3TnyLdWvtDvnbS%2FUA6clqvdEVzGV9pGsiPQhB2IPx9Dn7gyC9%2FSCpTxicGIJLVbvcDF7BpVYbDkYf0RZcJDsTjq9IzQQ%2F8Vo%2BLPK3LiFVkRmIDWNRkITZgJRpQVIl%2BUKNsdFe7b9%2FT2x1lrgEddGwZkSmaQJ3%2Fqr308aB03ineNGFX3bFeiql2TD7nYIB7iKLtja4SEWdLn9rYIjDAMBgmtC0dWYq0yImC99KH7NqeW%2BBJVe8Cx7FIPI9ZnG8oYYUVG7hqduPQZsO3dIKpZl0Ro3iQwXxjQeONb90h%2BgLUNWzA%2Ftf047fRFSvXnCx3ZWTeDTlMGFS%2FliOGhj7FW%2BnSpdZD5JsL2Etk6rGWbabH50eSWthk8l%2BaezKPYRbXZju7ArcLtmcJkG4t%2B7taQN1Y0fqjENU8PvnF9F5Srg0taiCC6OV6mcB6L8yrK7BWKGSJWsOU3IthDQuNoCJGaPzJIN58nwkW%2FmgtgonBopRzHuIbhdLmU5Di5aVi905WLjv0Hr%2FqTZePaNvmbFWFp%2BbuRWAYajX9qvF2U0wzorQyQY6pgF5lCSlCU%2BhPYS33y%2Fx3Eeny7eA5OlqQ212fSczeLC2VGcAzY9omC8dr9Uvg8HgpE5RPPsA2uKPBYCYODKftYwxkQmmWscf8Mk8A8uUIWFlFV3ohEEByrHa7UBTWxB7%2FYOARCg5I2Kb7I%2BAiJrn0i9m8e%2FhrDD035D%2B3JXYRHPcG9kKVu1I%2FbtIVAeaKcXSA%2B2f10b5H8i%2BWg79XdN56i37IF%2FaM%2Bvc&X-Amz-Signature=2f20d841f08315ebfc091542942646c0f43a2333291e14a32cef3144565585ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X432Q56I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp0oYkLRayCHV4gTskgBoo8o1%2FeAM3%2F6WR3IaAAJVHkAiBE8T2%2F2ghHLFVpkeJVnZq6LBAyQDzvBvqMCqZKQiKeKyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMpaPXx8nV2my34qtjKtwDTs1WgjcUzvyWb6NM%2BKyEpRLGn3mXgYfUApQ1vtgDoIs%2B7TAJSG6A69soTRN6SnK%2BsxRSU9qdAEFVQuHO%2FyKrtJA3TnyLdWvtDvnbS%2FUA6clqvdEVzGV9pGsiPQhB2IPx9Dn7gyC9%2FSCpTxicGIJLVbvcDF7BpVYbDkYf0RZcJDsTjq9IzQQ%2F8Vo%2BLPK3LiFVkRmIDWNRkITZgJRpQVIl%2BUKNsdFe7b9%2FT2x1lrgEddGwZkSmaQJ3%2Fqr308aB03ineNGFX3bFeiql2TD7nYIB7iKLtja4SEWdLn9rYIjDAMBgmtC0dWYq0yImC99KH7NqeW%2BBJVe8Cx7FIPI9ZnG8oYYUVG7hqduPQZsO3dIKpZl0Ro3iQwXxjQeONb90h%2BgLUNWzA%2Ftf047fRFSvXnCx3ZWTeDTlMGFS%2FliOGhj7FW%2BnSpdZD5JsL2Etk6rGWbabH50eSWthk8l%2BaezKPYRbXZju7ArcLtmcJkG4t%2B7taQN1Y0fqjENU8PvnF9F5Srg0taiCC6OV6mcB6L8yrK7BWKGSJWsOU3IthDQuNoCJGaPzJIN58nwkW%2FmgtgonBopRzHuIbhdLmU5Di5aVi905WLjv0Hr%2FqTZePaNvmbFWFp%2BbuRWAYajX9qvF2U0wzorQyQY6pgF5lCSlCU%2BhPYS33y%2Fx3Eeny7eA5OlqQ212fSczeLC2VGcAzY9omC8dr9Uvg8HgpE5RPPsA2uKPBYCYODKftYwxkQmmWscf8Mk8A8uUIWFlFV3ohEEByrHa7UBTWxB7%2FYOARCg5I2Kb7I%2BAiJrn0i9m8e%2FhrDD035D%2B3JXYRHPcG9kKVu1I%2FbtIVAeaKcXSA%2B2f10b5H8i%2BWg79XdN56i37IF%2FaM%2Bvc&X-Amz-Signature=34693f3902083dd260253265ff517a49b78c8efc4e6063fedd6f46c25276b8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

