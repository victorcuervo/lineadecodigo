---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VKHKNNN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Fe9cSpDgI6zEPJOTQvlSBJHoVc1OiEw6vE%2B0y3dIXUAiAwTE3mtVT5Vf2NXJ15%2FWIXW1Wlo%2FMPWUWWQDq2LWmr%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6DBd0lkPpkJgdv1JKtwDHtrtsvxSos2Ui5KpxKLDMzXY8gNcw2hdQI8D8911s%2BHOAj8klpFLa2kQlranNh6iSHvO2HFoCbrk4R9pujuaqK70INf%2Frd5%2BJIcPh9jl9QUwyL%2BTP8%2FPAtr48HkHpYV%2BOD0p%2FVaOSasX9byF926hWwLjv0mVg%2FeGhdXd5CFckSyVEEPDxrn7mIPIy74HFIHWxJhFv0e98yap2m3tEiZWNbB9CHGv%2FPra1cvxniH9ARwZB6Zzv495yeNvrAqBFteew%2FVLxnliieG3w4oweSKMaBKn1DZgEHvJsFjWVuRs6Cljzf7qj1VH78CmZK%2BXogzQqznaeVxrPQk%2BC7eqveOuZNjobJReTqupE0QEQRBvQvK3pYsYj7iaLjEbbYsWOLEzGkqltJi5neDlxxVEqnZA%2F4GsLzsSB9nqdidHPXagqZhHeDiAvrw58kcXmpVeGIXNk50TAa4lslXH7yr74pSDNQQPfplX2AmavL7vQMeHHw85A0%2F%2Fto6sIAhbk%2FzWbNSTJtv%2BrtqTbQmsfRMKHPIyYcIzj2JVyABgUIlD9mLvdWyFR%2BjAf%2B%2F3XsE23vEDUhWXQZYbCDQdj2oO7rG7wv4uO%2Bw88%2BnqWYHXQMOUiD%2FyzTpfTxX7pPXEtQjichcwwpnVyQY6pgEWD%2BTc9haaSa444GnEZzwCl7%2BpZAhEqgBJIeQpl%2BjC6NndxPvPtdgWro06KgGqKNu7G3wesEgUbldvBGIIw6PZLEmLflqxQfaFCuCaBUH7TU2M9Cs92CdX1iX2xQ%2F5k8UI%2FqpzYoMnLKXQLM4TXd1UmURgGeH1Uz4iRhPE3Xfehcivm4eWpGi6c%2Bj9Q9Cdo2%2BQXoWx2Kfl6hPQVqz3Kc69UbDpPpkn&X-Amz-Signature=364ef5910288b42895e75580ee5a0d50de19f817ad81ec388b0e9c1c01c6c680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VKHKNNN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Fe9cSpDgI6zEPJOTQvlSBJHoVc1OiEw6vE%2B0y3dIXUAiAwTE3mtVT5Vf2NXJ15%2FWIXW1Wlo%2FMPWUWWQDq2LWmr%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6DBd0lkPpkJgdv1JKtwDHtrtsvxSos2Ui5KpxKLDMzXY8gNcw2hdQI8D8911s%2BHOAj8klpFLa2kQlranNh6iSHvO2HFoCbrk4R9pujuaqK70INf%2Frd5%2BJIcPh9jl9QUwyL%2BTP8%2FPAtr48HkHpYV%2BOD0p%2FVaOSasX9byF926hWwLjv0mVg%2FeGhdXd5CFckSyVEEPDxrn7mIPIy74HFIHWxJhFv0e98yap2m3tEiZWNbB9CHGv%2FPra1cvxniH9ARwZB6Zzv495yeNvrAqBFteew%2FVLxnliieG3w4oweSKMaBKn1DZgEHvJsFjWVuRs6Cljzf7qj1VH78CmZK%2BXogzQqznaeVxrPQk%2BC7eqveOuZNjobJReTqupE0QEQRBvQvK3pYsYj7iaLjEbbYsWOLEzGkqltJi5neDlxxVEqnZA%2F4GsLzsSB9nqdidHPXagqZhHeDiAvrw58kcXmpVeGIXNk50TAa4lslXH7yr74pSDNQQPfplX2AmavL7vQMeHHw85A0%2F%2Fto6sIAhbk%2FzWbNSTJtv%2BrtqTbQmsfRMKHPIyYcIzj2JVyABgUIlD9mLvdWyFR%2BjAf%2B%2F3XsE23vEDUhWXQZYbCDQdj2oO7rG7wv4uO%2Bw88%2BnqWYHXQMOUiD%2FyzTpfTxX7pPXEtQjichcwwpnVyQY6pgEWD%2BTc9haaSa444GnEZzwCl7%2BpZAhEqgBJIeQpl%2BjC6NndxPvPtdgWro06KgGqKNu7G3wesEgUbldvBGIIw6PZLEmLflqxQfaFCuCaBUH7TU2M9Cs92CdX1iX2xQ%2F5k8UI%2FqpzYoMnLKXQLM4TXd1UmURgGeH1Uz4iRhPE3Xfehcivm4eWpGi6c%2Bj9Q9Cdo2%2BQXoWx2Kfl6hPQVqz3Kc69UbDpPpkn&X-Amz-Signature=47a8f0b878366e516bdb7b8da85e6289495f1a2b351e18cc70121cfe87d98d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

