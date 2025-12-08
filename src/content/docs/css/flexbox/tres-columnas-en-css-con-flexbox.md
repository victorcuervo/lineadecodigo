---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IITBTXK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzi4Yz3kivqBmcicNaXZVdHoIAoVSD52heAbSCd1o%2FSAiAkdaF0nvZp94Et9yaX2HYXaElyiJ4IYG8jafgD20hORCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Szj3kMPnDriRmBNKtwDejvIWU2%2F4aDLi8M%2FMHycgYG1khJsZbGUOsz9IK3NeuShpV%2FbUYnEa8gvv6QqSrUyCnhFKzEn%2FJ4gKX6RM6Qcb6MwSY7hLFgr%2Fg9I3itI1N66oo%2BCE8waNl%2Fcg7wySkbsGBJkrsVU%2BbOyUEk7mLu8%2B5uM7fmFNa5BA3Vgqj08Pw7KfH%2BaUupC13%2FXM8xVt1ohBMF%2FKEQmpQ9%2BQUMhkTdAhfca33CL5g9RCqJX34JJl0sK6xTPuE7e0XClksvgNAJlKeidZ5pRVZwIecttKmZwRzAAYYvzgg0PRpGZH8vEYCPWWcG9QzoWkktCR6zclcFX6aKLkccnJkO1Er6%2BlmEfMlYclkcYXk%2Bb8MBid2oUB2n40tA19fhwHHJv81OSLrCWj10leuhQu7OsrbiqQGzOsntPXzIFbfap8lYbM1dN8cdpe6F%2FDwrQrHdaoEp8FmYuStxFSP5QOVcpEowO6l9Od874laVgrJNdA%2FReGaC4AlRfHz9B8usz1VG91l%2FTMPxcghSxYk6Q%2FtMEDKtZ26DncjJAhtYcWW4YuwpjaaAUAOGUbhLf5d8yLzY8IuMxyZ4CARiiFQye%2BXeSGUHL%2FynpUDJtqmuTHvkM6sUv8R2IBZ%2B11FqB34wuDHztJk8wwNHYyQY6pgGB3wnQm03%2Bc5PJ9En1LSStHmZ75wf4maTxfHbg5Os%2FcrmcV7FGT1rTL0zvIdjE%2FyI3YYCE%2BBC8s03xsByzsIut4zyBiC8lRsq%2F2BTiuGiJ2UFoPej8ZdlKPo%2B9X71iPdJ9iZ5fEn%2BgNr6O%2FDFGVTtdDexJa9VSk1Lfzks07H2YSzWuHPXGMTVcX9Cv%2BDNfCfgP9hLz6%2B9GKaZUxpvT9x0oOuS1Dc%2BC&X-Amz-Signature=92004732f42c226ef80cb15005246f98e62f2afbe1779b488af3f3da83442e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IITBTXK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzi4Yz3kivqBmcicNaXZVdHoIAoVSD52heAbSCd1o%2FSAiAkdaF0nvZp94Et9yaX2HYXaElyiJ4IYG8jafgD20hORCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Szj3kMPnDriRmBNKtwDejvIWU2%2F4aDLi8M%2FMHycgYG1khJsZbGUOsz9IK3NeuShpV%2FbUYnEa8gvv6QqSrUyCnhFKzEn%2FJ4gKX6RM6Qcb6MwSY7hLFgr%2Fg9I3itI1N66oo%2BCE8waNl%2Fcg7wySkbsGBJkrsVU%2BbOyUEk7mLu8%2B5uM7fmFNa5BA3Vgqj08Pw7KfH%2BaUupC13%2FXM8xVt1ohBMF%2FKEQmpQ9%2BQUMhkTdAhfca33CL5g9RCqJX34JJl0sK6xTPuE7e0XClksvgNAJlKeidZ5pRVZwIecttKmZwRzAAYYvzgg0PRpGZH8vEYCPWWcG9QzoWkktCR6zclcFX6aKLkccnJkO1Er6%2BlmEfMlYclkcYXk%2Bb8MBid2oUB2n40tA19fhwHHJv81OSLrCWj10leuhQu7OsrbiqQGzOsntPXzIFbfap8lYbM1dN8cdpe6F%2FDwrQrHdaoEp8FmYuStxFSP5QOVcpEowO6l9Od874laVgrJNdA%2FReGaC4AlRfHz9B8usz1VG91l%2FTMPxcghSxYk6Q%2FtMEDKtZ26DncjJAhtYcWW4YuwpjaaAUAOGUbhLf5d8yLzY8IuMxyZ4CARiiFQye%2BXeSGUHL%2FynpUDJtqmuTHvkM6sUv8R2IBZ%2B11FqB34wuDHztJk8wwNHYyQY6pgGB3wnQm03%2Bc5PJ9En1LSStHmZ75wf4maTxfHbg5Os%2FcrmcV7FGT1rTL0zvIdjE%2FyI3YYCE%2BBC8s03xsByzsIut4zyBiC8lRsq%2F2BTiuGiJ2UFoPej8ZdlKPo%2B9X71iPdJ9iZ5fEn%2BgNr6O%2FDFGVTtdDexJa9VSk1Lfzks07H2YSzWuHPXGMTVcX9Cv%2BDNfCfgP9hLz6%2B9GKaZUxpvT9x0oOuS1Dc%2BC&X-Amz-Signature=968bafa029e5198090ffe765823a51e37a4efb48dc685ac9be20ea4c19a072ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

