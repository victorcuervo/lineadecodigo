---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2Y2KRC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm7xIcXbOaLTUoJO8mgI1sWXR6W9NfE66F9NkxChi9TAiAhCyUKjHwGZMR2PYiA9Iz%2BYynZp%2BTot1BeTJgxekY3qCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4jGqf008zdTdm4JKKtwDpkd6PkJvlvgHESij6ZNxSwMnyPPpAmEFweL1SzD0yHilmZPUXu2y9aHx6CV8dIGX4k660rfRPPcwQKDEZ1pMOkNqsWPD4omh0RXx%2BmNHspEVeZRWWqtOAcLn571CpTy230PvjM4mtHXv5uJVaZa%2B3ULHHcCmNjPds19kYwoDW9hfxm6UGP1Xo67zPCs%2BOhl%2FWBVkCLKxu9T267VffaDyO5QPwyV2uzogM4ATuq%2FavO5pQYldsKDMhog6e8FFfBF3sr4p2cTFGaVe7qJYYLhlJjllMMXTZh3W6u%2BQfaiOlDuh4E1w0PU8F%2BToHcq8RUPsE7n%2FDB95CDxojDJnsxKo8l%2FMePiWBNRs9j706furTrQXUDKVCfxqoniNwlxdF2hiKLFF5Dvlg30et4MEyae%2BnwUrMMV2Z6FVeeBm5ZdMNjySSerffNQ%2BXA3uWqIHtTNMvai3xXx%2BLracBNBOToUmi09fMP%2BHuHJEOquDvSZdXu5bCGnXbQrviF%2FuYj5ZXwrGT5CqU5QgaX%2BXSpuBMQ8Zyk4wY%2FLg5K9lTIvv496nBLJLGUNkoukZEsymkqLurxnlbIFSBv2Fzj5IBDvjM1emVQPNvP1ldHYsdl3XPemY28VAX0vsMERURp0blmowxaHYyQY6pgHnIWK1sUgsGF%2BNYnQewRn%2FiNwETj7%2BUedsDZBb9K3YqgKYLhF85cdpg5y97xnrMkEJoLs1VlrzdTJ%2FT%2BavbYfHlL7lIBwF%2Bcoca9KIevDUSAmbhNUE3wcch6e2Xk6q2R0R8CxYqa%2FjFpon9rJs2Vg70DXeJ7AaZzh%2BKidp%2FXnFScM%2B3UYeia%2B8yVHpT7BfzkBWMsoPmZWVZPkmcG%2FcMB8eR94pGPlF&X-Amz-Signature=c88dece590b0ab71fdfc8b198faa3f9a3ad64c48ffe224ebe5c79698d0b990bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2Y2KRC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm7xIcXbOaLTUoJO8mgI1sWXR6W9NfE66F9NkxChi9TAiAhCyUKjHwGZMR2PYiA9Iz%2BYynZp%2BTot1BeTJgxekY3qCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4jGqf008zdTdm4JKKtwDpkd6PkJvlvgHESij6ZNxSwMnyPPpAmEFweL1SzD0yHilmZPUXu2y9aHx6CV8dIGX4k660rfRPPcwQKDEZ1pMOkNqsWPD4omh0RXx%2BmNHspEVeZRWWqtOAcLn571CpTy230PvjM4mtHXv5uJVaZa%2B3ULHHcCmNjPds19kYwoDW9hfxm6UGP1Xo67zPCs%2BOhl%2FWBVkCLKxu9T267VffaDyO5QPwyV2uzogM4ATuq%2FavO5pQYldsKDMhog6e8FFfBF3sr4p2cTFGaVe7qJYYLhlJjllMMXTZh3W6u%2BQfaiOlDuh4E1w0PU8F%2BToHcq8RUPsE7n%2FDB95CDxojDJnsxKo8l%2FMePiWBNRs9j706furTrQXUDKVCfxqoniNwlxdF2hiKLFF5Dvlg30et4MEyae%2BnwUrMMV2Z6FVeeBm5ZdMNjySSerffNQ%2BXA3uWqIHtTNMvai3xXx%2BLracBNBOToUmi09fMP%2BHuHJEOquDvSZdXu5bCGnXbQrviF%2FuYj5ZXwrGT5CqU5QgaX%2BXSpuBMQ8Zyk4wY%2FLg5K9lTIvv496nBLJLGUNkoukZEsymkqLurxnlbIFSBv2Fzj5IBDvjM1emVQPNvP1ldHYsdl3XPemY28VAX0vsMERURp0blmowxaHYyQY6pgHnIWK1sUgsGF%2BNYnQewRn%2FiNwETj7%2BUedsDZBb9K3YqgKYLhF85cdpg5y97xnrMkEJoLs1VlrzdTJ%2FT%2BavbYfHlL7lIBwF%2Bcoca9KIevDUSAmbhNUE3wcch6e2Xk6q2R0R8CxYqa%2FjFpon9rJs2Vg70DXeJ7AaZzh%2BKidp%2FXnFScM%2B3UYeia%2B8yVHpT7BfzkBWMsoPmZWVZPkmcG%2FcMB8eR94pGPlF&X-Amz-Signature=7b4c49ec1747f663070407a1daeba8f9ec02be5286e35587ef9c5caa838bbd67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

