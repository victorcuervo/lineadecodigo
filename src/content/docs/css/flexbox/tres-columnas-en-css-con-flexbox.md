---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSASJ6D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDYCH2juv72q3sKHPzYNvswzagf%2BU22FVCbCII10g7rtwIhAOPAsJBs8YLcHy6fEa1bUj1X3IM2Lv2OGafa1kCd7I9DKv8DCEYQABoMNjM3NDIzMTgzODA1IgzyV874XUzQ%2BvXA9iAq3AN1jijoAxAqhYLplbIbQmwLSTFKGmpasUy%2BNgmV%2Bh2UmRW3ACsyrn3OvDBttm5KmvMBgSYHbYBtiYyjV0YXFzWBlnqiMUDjtHd5lBuTKFkDlSUmnxAtSZ2yn1S%2B%2FK6IYtFSyOS9SRohXt44gr%2BFGoJ%2Btafv9oMI%2Ffwl%2BOfWWGlU4G2ne2c2s2Xx5XaUL%2FwkkW%2FI%2FvXADHesOi6bdxwUdcZBaSkTkHs7i%2F5nHDvaqeKgrgkXCHkDFV0g08IR0uVLlYF%2FFdCb4aOmuOZhLUsaolVIwJnvVV4fsUP%2FZojUzzvjmEHRVpmoMCwjt0ofmWRgc8YBHz4s0YUTjX1u%2F83T4ondv4BeLpjqbSAo72G6%2Fqo4kMVy6lMwt0S4fb6iDhUIwrY%2FBgkHFvxbkELv3GfmbZi2ony%2Bws9MnuCBWpAutfy4KkqHSzplLATtNoT44lTLQ0C1VeOxxjqTIGSi97XyKNe76YcMHc0C2bcOdHp6OqWCtUpRDNBuLB9uRHmm97w%2FskoMZLW6%2BfUDP8RrAK%2BmBpfE%2BnA%2BoijM33QBZ0vlBJSwE97SBn0M7n3wUcGxavh0e2fggm9NVDyXPl7Gu%2B30Sy0HBKTOYS6qUl9ukqZEeVGSNckU9E3TvmrjePHKoTDJg8bJBjqkAS2u4Czb3rLT7nI%2BZDcBJoTP4pX6gNV%2FGZi207HvOIFNaOQEKG49cYNZTBsmds4PWPL2sO3%2FCuvExnLsBXyYKCC01UCiU3NyRuIUrPP9uppRhrLuN2j%2FxMhLtK%2Bd9AMG5oGvGTvphCHFcrMbVu9Fekx8qOl902gfZ8Mdso8ypS0tOWJY4CxPxfhCsu%2Fj5my%2FStN6QHCcJmyCiMdr7tQkrsFcZZGW&X-Amz-Signature=6461559d268f2faf4fa0bfe1a4d12ca33e540257ff0306b93d1b39f4950b9204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSASJ6D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDYCH2juv72q3sKHPzYNvswzagf%2BU22FVCbCII10g7rtwIhAOPAsJBs8YLcHy6fEa1bUj1X3IM2Lv2OGafa1kCd7I9DKv8DCEYQABoMNjM3NDIzMTgzODA1IgzyV874XUzQ%2BvXA9iAq3AN1jijoAxAqhYLplbIbQmwLSTFKGmpasUy%2BNgmV%2Bh2UmRW3ACsyrn3OvDBttm5KmvMBgSYHbYBtiYyjV0YXFzWBlnqiMUDjtHd5lBuTKFkDlSUmnxAtSZ2yn1S%2B%2FK6IYtFSyOS9SRohXt44gr%2BFGoJ%2Btafv9oMI%2Ffwl%2BOfWWGlU4G2ne2c2s2Xx5XaUL%2FwkkW%2FI%2FvXADHesOi6bdxwUdcZBaSkTkHs7i%2F5nHDvaqeKgrgkXCHkDFV0g08IR0uVLlYF%2FFdCb4aOmuOZhLUsaolVIwJnvVV4fsUP%2FZojUzzvjmEHRVpmoMCwjt0ofmWRgc8YBHz4s0YUTjX1u%2F83T4ondv4BeLpjqbSAo72G6%2Fqo4kMVy6lMwt0S4fb6iDhUIwrY%2FBgkHFvxbkELv3GfmbZi2ony%2Bws9MnuCBWpAutfy4KkqHSzplLATtNoT44lTLQ0C1VeOxxjqTIGSi97XyKNe76YcMHc0C2bcOdHp6OqWCtUpRDNBuLB9uRHmm97w%2FskoMZLW6%2BfUDP8RrAK%2BmBpfE%2BnA%2BoijM33QBZ0vlBJSwE97SBn0M7n3wUcGxavh0e2fggm9NVDyXPl7Gu%2B30Sy0HBKTOYS6qUl9ukqZEeVGSNckU9E3TvmrjePHKoTDJg8bJBjqkAS2u4Czb3rLT7nI%2BZDcBJoTP4pX6gNV%2FGZi207HvOIFNaOQEKG49cYNZTBsmds4PWPL2sO3%2FCuvExnLsBXyYKCC01UCiU3NyRuIUrPP9uppRhrLuN2j%2FxMhLtK%2Bd9AMG5oGvGTvphCHFcrMbVu9Fekx8qOl902gfZ8Mdso8ypS0tOWJY4CxPxfhCsu%2Fj5my%2FStN6QHCcJmyCiMdr7tQkrsFcZZGW&X-Amz-Signature=8a2654e21eb45392fe6723e622bda6538a40014e427410c1bf182672eaf4aa13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

